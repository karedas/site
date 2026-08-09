import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { type FieldNode, linkPairs, makeNodes, type Pointer, step } from '@/scripts/field-physics';
import { useReducedMotion } from './use-reduced-motion';

const CONFIG = {
  count: 26,
  strungCount: 5,
  // Where the drawn hand sits inside the host, in unit space: the omino
  // is bottom-centered and its raised hand lands around two thirds down.
  anchor: { x: 0.47, y: 0.67 },
};

const INK = 0x261d15;
const ACCENT = 0xb84715;

/** Round sprite so nodes render as soft dots instead of squares. */
function dotTexture(): THREE.Texture {
  const size = 32;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const g = ctx.createRadialGradient(16, 16, 2, 16, 16, 15);
    g.addColorStop(0, 'rgba(38,29,21,1)');
    g.addColorStop(0.7, 'rgba(38,29,21,0.9)');
    g.addColorStop(1, 'rgba(38,29,21,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
}

/**
 * The constellation the drawn figure is holding: nodes on strings that
 * wander, get nudged by the pointer, and always come back into shape.
 */
export default function HeroField() {
  const hostRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    host.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(0, 1, 0, 1, -1, 1);

    const nodes: FieldNode[] = makeNodes(CONFIG, Math.random);
    const pairs = linkPairs(nodes, 0.24);
    const pointer: Pointer = { x: 0, y: 0, active: false };

    let width = 0;
    let height = 0;

    const px = (n: { x: number }): number => n.x * width;
    const py = (n: { y: number }): number => n.y * height;

    // Strings from the hand to the strung nodes.
    const stringPos = new Float32Array(CONFIG.strungCount * 2 * 3);
    const stringGeo = new THREE.BufferGeometry();
    const stringAttr = new THREE.BufferAttribute(stringPos, 3);
    stringGeo.setAttribute('position', stringAttr);
    scene.add(
      new THREE.LineSegments(
        stringGeo,
        new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.5 }),
      ),
    );

    // Faint links between neighboring free nodes.
    const linkPos = new Float32Array(pairs.length * 2 * 3);
    const linkGeo = new THREE.BufferGeometry();
    const linkAttr = new THREE.BufferAttribute(linkPos, 3);
    linkGeo.setAttribute('position', linkAttr);
    scene.add(
      new THREE.LineSegments(
        linkGeo,
        new THREE.LineBasicMaterial({ color: INK, transparent: true, opacity: 0.16 }),
      ),
    );

    // Nodes. The last one wears the accent.
    const texture = dotTexture();
    const dotPos = new Float32Array((nodes.length - 1) * 3);
    const dotGeo = new THREE.BufferGeometry();
    const dotAttr = new THREE.BufferAttribute(dotPos, 3);
    dotGeo.setAttribute('position', dotAttr);
    scene.add(
      new THREE.Points(
        dotGeo,
        new THREE.PointsMaterial({
          size: 7,
          map: texture,
          transparent: true,
          opacity: 0.75,
          depthTest: false,
        }),
      ),
    );

    const accentPos = new Float32Array(3);
    const accentGeo = new THREE.BufferGeometry();
    const accentAttr = new THREE.BufferAttribute(accentPos, 3);
    accentGeo.setAttribute('position', accentAttr);
    scene.add(
      new THREE.Points(
        accentGeo,
        new THREE.PointsMaterial({
          size: 10,
          map: texture,
          color: ACCENT,
          transparent: true,
          opacity: 0.95,
          depthTest: false,
        }),
      ),
    );

    const draw = (): void => {
      for (let i = 0; i < CONFIG.strungCount; i++) {
        const n = nodes[i];
        if (!n) continue;
        stringPos[i * 6] = CONFIG.anchor.x * width;
        stringPos[i * 6 + 1] = CONFIG.anchor.y * height;
        stringPos[i * 6 + 2] = 0;
        stringPos[i * 6 + 3] = px(n);
        stringPos[i * 6 + 4] = py(n);
        stringPos[i * 6 + 5] = 0;
      }
      pairs.forEach(([a, b], k) => {
        const na = nodes[a];
        const nb = nodes[b];
        if (!na || !nb) return;
        linkPos[k * 6] = px(na);
        linkPos[k * 6 + 1] = py(na);
        linkPos[k * 6 + 2] = 0;
        linkPos[k * 6 + 3] = px(nb);
        linkPos[k * 6 + 4] = py(nb);
        linkPos[k * 6 + 5] = 0;
      });
      for (let i = 0; i < nodes.length - 1; i++) {
        const n = nodes[i];
        if (!n) continue;
        dotPos[i * 3] = px(n);
        dotPos[i * 3 + 1] = py(n);
        dotPos[i * 3 + 2] = 0;
      }
      const last = nodes[nodes.length - 1];
      if (last) {
        accentPos[0] = px(last);
        accentPos[1] = py(last);
        accentPos[2] = 0;
      }
      stringAttr.needsUpdate = true;
      linkAttr.needsUpdate = true;
      dotAttr.needsUpdate = true;
      accentAttr.needsUpdate = true;
      renderer.render(scene, camera);
    };

    const resize = (): void => {
      width = host.clientWidth;
      height = host.clientHeight;
      renderer.setSize(width, height);
      camera.right = width;
      camera.bottom = height;
      camera.updateProjectionMatrix();
      draw();
    };

    let rafId = 0;
    let last = performance.now();
    let visible = true;

    const tick = (): void => {
      const now = performance.now();
      step(nodes, now / 1000, (now - last) / 1000, pointer);
      last = now;
      draw();
      rafId = visible && !document.hidden ? requestAnimationFrame(tick) : 0;
    };

    const wake = (): void => {
      if (!rafId && visible && !document.hidden && !reduced) {
        last = performance.now();
        rafId = requestAnimationFrame(tick);
      }
    };

    const onMove = (e: PointerEvent): void => {
      const rect = host.getBoundingClientRect();
      pointer.x = (e.clientX - rect.left) / rect.width;
      pointer.y = (e.clientY - rect.top) / rect.height;
      pointer.active = true;
    };

    const onLeave = (): void => {
      pointer.active = false;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const io = new IntersectionObserver((entries) => {
      visible = entries.some((e) => e.isIntersecting);
      if (visible) wake();
    });
    io.observe(host);

    const onVisibility = (): void => wake();

    if (!reduced) {
      host.addEventListener('pointermove', onMove);
      host.addEventListener('pointerleave', onLeave);
      document.addEventListener('visibilitychange', onVisibility);
      wake();
    }

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
      io.disconnect();
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      stringGeo.dispose();
      linkGeo.dispose();
      dotGeo.dispose();
      accentGeo.dispose();
      texture.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, [reduced]);

  return (
    <div
      ref={hostRef}
      data-testid="hero-field"
      aria-hidden="true"
      style={{ position: 'absolute', inset: 0 }}
    />
  );
}
