import { useEffect, useRef } from 'react';
import { useReducedMotion } from './use-reduced-motion';

interface Particle {
  x: number;
  y: number;
  s: number;
  v: number;
  tw: number;
}

const WAVE_COLORS = ['rgba(232,112,58,', 'rgba(217,179,106,', 'rgba(196,84,46,'];

/**
 * Hero background: 4 drifting sine waves + slowly rising twinkling dots,
 * drawn on a full-bleed 2D canvas. Renders a single static frame under
 * reduced motion.
 */
export function SignalCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const parent = canvas?.parentElement;
    if (!canvas || !parent) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = parent.clientWidth * devicePixelRatio;
      canvas.height = parent.clientHeight * devicePixelRatio;
    };
    resize();
    window.addEventListener('resize', resize);

    const particles: Particle[] = Array.from({ length: 46 }, () => ({
      x: Math.random(),
      y: Math.random(),
      s: 0.4 + Math.random() * 1.3,
      v: 0.0003 + Math.random() * 0.0007,
      tw: Math.random() * 6.28,
    }));

    let t = Math.random() * 10;
    let raf = 0;

    const frame = () => {
      const w = canvas.width;
      const h = canvas.height;
      const dpr = devicePixelRatio;
      ctx.clearRect(0, 0, w, h);
      ctx.shadowColor = 'rgba(232,112,58,.55)';
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        const base = h * (0.3 + i * 0.17);
        for (let x = 0; x <= w; x += 9 * dpr) {
          const y =
            base +
            Math.sin(x / (w * 0.17) + t * (0.5 + i * 0.18) + i * 2.1) * h * 0.055 * (1 + i * 0.3) +
            Math.sin(x / (w * 0.045) + t * 0.85 + i * 4) * h * 0.013;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.shadowBlur = 14 * dpr;
        ctx.strokeStyle = `${WAVE_COLORS[i % 3]}${0.17 - i * 0.03})`;
        ctx.lineWidth = 1.3 * dpr;
        ctx.stroke();
      }
      ctx.shadowBlur = 0;
      for (const p of particles) {
        p.y -= p.v;
        p.tw += 0.025;
        if (p.y < -0.02) {
          p.y = 1.02;
          p.x = Math.random();
        }
        ctx.fillStyle = `rgba(232,112,58,${0.22 + Math.sin(p.tw) * 0.18})`;
        ctx.beginPath();
        ctx.arc(p.x * w, p.y * h, p.s * dpr, 0, 7);
        ctx.fill();
      }
      t += 0.008;
    };

    if (reduceMotion) {
      frame();
    } else {
      const loop = () => {
        frame();
        raf = requestAnimationFrame(loop);
      };
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [reduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="signal-canvas"
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

export default SignalCanvas;
