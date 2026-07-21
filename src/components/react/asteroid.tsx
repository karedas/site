import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useReducedMotion } from './use-reduced-motion';

const PATCH_CENTERS = [
  new THREE.Vector3(1, 0.4, 0.6),
  new THREE.Vector3(-0.8, -0.6, 0.9),
  new THREE.Vector3(-0.3, 1, -0.8),
  new THREE.Vector3(0.7, -0.9, -0.7),
].map((c) => c.normalize());

const PATCH_COLORS = [
  new THREE.Color(0xe8703a),
  new THREE.Color(0xd9b36a),
  new THREE.Color(0xc4542e),
  new THREE.Color(0xe8975a),
];

const BASE_COLOR = new THREE.Color(0x9c5f3e);

const FRAG_SPECS: Array<[number, number, number]> = [
  [0.13, 2.0, 0.55],
  [0.08, 2.2, 0.4],
  [0.1, 2.4, 0.7],
  [0.06, 2.6, 0.3],
  [0.11, 2.8, 0.5],
  [0.05, 2.3, 0.85],
  [0.09, 3.0, 0.38],
  [0.04, 2.5, 0.65],
];

interface FragData {
  d: number;
  sp: number;
  ph: number;
}

/** Displace the icosahedron vertices with layered sine noise, seam-safe. */
function displace(geo: THREE.IcosahedronGeometry) {
  const pos = geo.getAttribute('position') as THREE.BufferAttribute;
  const v = new THREE.Vector3();
  const seen = new Map<string, number>();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    const key = `${v.x.toFixed(3)},${v.y.toFixed(3)},${v.z.toFixed(3)}`;
    let k = seen.get(key);
    if (k === undefined) {
      k =
        1 +
        Math.sin(v.x * 3.1) * Math.cos(v.y * 2.7) * Math.sin(v.z * 3.7) * 0.24 +
        Math.sin(v.x * 9 + v.y * 7) * Math.cos(v.z * 8) * 0.07;
      seen.set(key, k);
    }
    v.multiplyScalar(k);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  geo.computeVertexNormals();
}

/**
 * Procedural 3D asteroid: displaced icosahedron with pulsing warm color
 * patches, orbiting rock fragments and a gold dust ring. Rotation is partly
 * scroll-linked (one extra revolution over the full page). Renders a single
 * static frame under reduced motion. Bails out silently when WebGL is not
 * available.
 */
export function Asteroid() {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    } catch {
      return;
    }

    const W = () => host.clientWidth || 400;
    const H = () => host.clientHeight || 400;
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.setSize(W(), H());
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(38, W() / H(), 0.1, 100);
    cam.position.set(0, 0, 10.5);

    scene.add(new THREE.AmbientLight(0x3a241a, 2.2));
    const key = new THREE.DirectionalLight(0xffb27a, 2.6);
    key.position.set(4, 5, 6);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xd9b36a, 1.8);
    rim.position.set(-5, -2, -4);
    scene.add(rim);

    const rockGeo = new THREE.IcosahedronGeometry(1.7, 3);
    displace(rockGeo);

    const posAttr = rockGeo.getAttribute('position') as THREE.BufferAttribute;
    const vtxN = posAttr.count;
    const colAttr = new THREE.BufferAttribute(new Float32Array(vtxN * 3), 3);
    rockGeo.setAttribute('color', colAttr);

    // Per-vertex weight of each glowing patch, pulsed every frame.
    const patchW = new Float32Array(vtxN * 4);
    const vDir = new THREE.Vector3();
    for (let i = 0; i < vtxN; i++) {
      vDir.fromBufferAttribute(posAttr, i).normalize();
      for (let p = 0; p < 4; p++) {
        const center = PATCH_CENTERS[p];
        if (!center) continue;
        patchW[i * 4 + p] = Math.max(0, (vDir.dot(center) - 0.72) / 0.28);
      }
      colAttr.setXYZ(i, BASE_COLOR.r, BASE_COLOR.g, BASE_COLOR.b);
    }

    const rock = new THREE.Mesh(
      rockGeo,
      new THREE.MeshStandardMaterial({
        color: 0xffffff,
        vertexColors: true,
        metalness: 0.12,
        roughness: 0.85,
        flatShading: true,
        emissive: 0x2a0e05,
        emissiveIntensity: 1,
      }),
    );
    const wire = new THREE.Mesh(
      rockGeo,
      new THREE.MeshBasicMaterial({
        color: 0xe8703a,
        wireframe: true,
        transparent: true,
        opacity: 0.08,
      }),
    );
    const grp = new THREE.Group();
    grp.add(rock);
    grp.add(wire);

    const frags = FRAG_SPECS.map(([r, d, sp]) => {
      const m = new THREE.Mesh(
        new THREE.IcosahedronGeometry(r, 1),
        new THREE.MeshStandardMaterial({ color: 0xb06a42, roughness: 0.8, flatShading: true }),
      );
      m.userData = { d, sp, ph: Math.random() * 6.28 } satisfies FragData;
      grp.add(m);
      return m;
    });

    const dustGeo = new THREE.BufferGeometry();
    const dustN = 90;
    const dustPos = new Float32Array(dustN * 3);
    const dustDat: Array<{ d: number; ph: number; y: number; sp: number }> = [];
    for (let i = 0; i < dustN; i++) {
      const d = 2.1 + Math.random() * 1.4;
      const ph = Math.random() * 6.28;
      const y = (Math.random() - 0.5) * 1.6;
      const sp = 0.15 + Math.random() * 0.45;
      dustDat.push({ d, ph, y, sp });
      dustPos[i * 3] = Math.cos(ph) * d;
      dustPos[i * 3 + 1] = y;
      dustPos[i * 3 + 2] = Math.sin(ph) * d;
    }
    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
    const dust = new THREE.Points(
      dustGeo,
      new THREE.PointsMaterial({
        color: 0xd9b36a,
        size: 0.035,
        transparent: true,
        opacity: 0.65,
        sizeAttenuation: true,
      }),
    );
    grp.add(dust);
    scene.add(grp);

    const resize = () => {
      renderer.setSize(W(), H());
      cam.aspect = W() / H();
      cam.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize);

    let t = 0;
    let raf = 0;
    const tmp = new THREE.Color();

    const frame = () => {
      const sc =
        window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      grp.rotation.y = t * 0.22 + sc * 6.28;
      grp.rotation.x = 0.3 + Math.sin(t * 0.3) * 0.1;
      grp.rotation.z = t * 0.06;
      grp.position.y = Math.sin(t * 0.6) * 0.1;

      for (const f of frags) {
        const u = f.userData as FragData;
        const a = t * u.sp + u.ph;
        f.position.set(Math.cos(a) * u.d, Math.sin(a * 0.8) * 0.45, Math.sin(a) * u.d);
        f.rotation.x = a;
        f.rotation.y = a * 0.7;
      }

      const dp = dustGeo.attributes.position as THREE.BufferAttribute;
      for (let i = 0; i < dustN; i++) {
        const u = dustDat[i];
        if (!u) continue;
        const a = t * u.sp + u.ph;
        dp.setXYZ(i, Math.cos(a) * u.d, u.y + Math.sin(a * 1.3) * 0.1, Math.sin(a) * u.d);
      }
      dp.needsUpdate = true;

      for (let i = 0; i < vtxN; i++) {
        tmp.copy(BASE_COLOR);
        for (let p = 0; p < 4; p++) {
          const w = patchW[i * 4 + p] ?? 0;
          if (w > 0) {
            const col = PATCH_COLORS[p];
            if (!col) continue;
            const pulse = Math.max(0, Math.sin(t * (0.55 + p * 0.17) + p * 1.9)) ** 2;
            tmp.lerp(col, w * pulse * 0.85);
          }
        }
        colAttr.setXYZ(i, tmp.r, tmp.g, tmp.b);
      }
      colAttr.needsUpdate = true;

      renderer.render(scene, cam);
    };

    if (reduceMotion) {
      t = 2;
      frame();
    } else {
      const loop = () => {
        t += 0.01;
        frame();
        raf = requestAnimationFrame(loop);
      };
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      host.removeChild(renderer.domElement);
      rockGeo.dispose();
      dustGeo.dispose();
      for (const f of frags) f.geometry.dispose();
      renderer.dispose();
    };
  }, [reduceMotion]);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      data-testid="asteroid"
      style={{ aspectRatio: '1', pointerEvents: 'none' }}
    />
  );
}

export default Asteroid;
