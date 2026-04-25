import { useEffect, useState } from 'react';
import { useReducedMotion } from './useReducedMotion';

function GeoCoords() {
  const reduced = useReducedMotion();
  const [t, setT] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => setT((x) => x + 1), 1000);
    return () => window.clearInterval(id);
  }, [reduced]);

  const lat = (31.4 + (t % 60) * 0.05).toFixed(1);
  const lon = (38.7 + (t % 60) * 0.03).toFixed(1);

  return (
    <span>
      N&nbsp;48&deg;12&prime;{lat}&Prime; &nbsp;&middot;&nbsp; E&nbsp;16&deg;22&prime;{lon}&Prime;
    </span>
  );
}

function TransmittingTicker() {
  const reduced = useReducedMotion();
  const [pkt, setPkt] = useState(0x7f4a2c);

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setPkt((p) => (p + Math.floor(1 + Math.random() * 4)) % 0xffffff);
    }, 600);
    return () => window.clearInterval(id);
  }, [reduced]);

  const hex = pkt.toString(16).toUpperCase().padStart(6, '0');

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
      <span
        aria-hidden="true"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          background: '#fe6442',
          boxShadow: '0 0 6px #fe6442',
          animation: reduced ? 'none' : 'al-led-pulse 1.6s ease-in-out infinite',
        }}
      />
      <span>TRANSMITTING</span>
      <span className="al-pkt-hex" style={{ color: 'var(--gold-dim)' }}>
        0x{hex}
      </span>
      <span style={{ marginLeft: 8 }}>MMXXVI</span>
    </span>
  );
}

export default function TopMeta() {
  return (
    <>
      <GeoCoords />
      <span className="al-topmeta-name">ANDREA LISI</span>
      <TransmittingTicker />
    </>
  );
}
