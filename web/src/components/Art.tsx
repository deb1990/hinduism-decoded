import type { CSSProperties, ReactNode } from 'react';

// Abstract mandala artwork, drawn in code. Each kind is three stacked layers that drift and turn
// at different speeds as the page scrolls (the parallax is in style.css and hooks.ts).

export type ArtKind = 'flame' | 'bindu' | 'wheel' | 'lotus' | 'yantra' | 'rays' | 'rings';

export const TAU = Math.PI * 2;
const n1 = (v: number) => v.toFixed(1);
export const pt = (r: number, a: number) => `${n1(r * Math.cos(a))} ${n1(r * Math.sin(a))}`;

/** n petals between radius r1 and r2; w is the half-width as a share of the gap between petals. */
export function petals(n: number, r1: number, r2: number, w: number, off = 0): string {
  let d = '';
  const half = (TAU / n) * w;
  const rm = ((r1 + r2) / 2) * 1.08;
  for (let i = 0; i < n; i++) {
    const a = off + (i / n) * TAU;
    d += `M${pt(r1, a)}Q${pt(rm, a - half)} ${pt(r2, a)}Q${pt(rm, a + half)} ${pt(r1, a)}Z`;
  }
  return d;
}

export function rays(n: number, r1: number, r2: number, w: number, off = 0): string {
  let d = '';
  const half = ((TAU / n) * w) / 2;
  for (let i = 0; i < n; i++) {
    const a = off + (i / n) * TAU;
    d += `M${pt(r1, a - half)}L${pt(r2, a)}L${pt(r1, a + half)}Z`;
  }
  return d;
}

export function spokes(n: number, r1: number, r2: number, off = 0): string {
  let d = '';
  for (let i = 0; i < n; i++) {
    const a = off + (i / n) * TAU;
    d += `M${pt(r1, a)}L${pt(r2, a)}`;
  }
  return d;
}

export function triangle(r: number, up: boolean): string {
  const start = up ? -Math.PI / 2 : Math.PI / 2;
  return [0, 1, 2].map((k) => pt(r, start + (k * TAU) / 3)).join(' ');
}

export function dots(n: number, r: number, size: number) {
  return Array.from({ length: n }, (_, i) => {
    const a = (i / n) * TAU;
    return <circle key={i} cx={n1(r * Math.cos(a))} cy={n1(r * Math.sin(a))} r={size} className="f" />;
  });
}

export function Layer({ s, spin, sc = 0, children }: { s: number; spin: number; sc?: number; children: ReactNode }) {
  return (
    <svg
      className="layer"
      viewBox="-500 -500 1000 1000"
      style={{ '--s': s, '--spin': spin, '--sc': sc } as CSSProperties}
    >
      {children}
    </svg>
  );
}

export function layers(kind: ArtKind): ReactNode {
  switch (kind) {
    case 'flame':
      return (
        <>
          <Layer s={-170} spin={-25}>
            <path d={rays(60, 330, 500, 0.55)} className="f a3" />
            <circle r="320" className="a2" />
            <circle r="300" className="a3" />
          </Layer>
          <Layer s={-90} spin={40}>
            <path d={petals(16, 120, 300, 0.34)} className="f a2" />
            <path d={petals(16, 150, 260, 0.2, TAU / 32)} className="a1" />
          </Layer>
          <Layer s={-30} spin={-70} sc={0.2}>
            <path d={petals(8, 40, 150, 0.38)} className="f a1" />
            <circle r="26" className="f a1" />
          </Layer>
        </>
      );
    case 'bindu':
      return (
        <>
          <Layer s={-150} spin={15}>
            {[60, 120, 180, 240, 300, 360, 420, 480].map((r) => <circle key={r} r={r} className="a3" />)}
            <circle r="250" className="dash a2" />
          </Layer>
          <Layer s={-80} spin={-35}>
            {[180, 300, 420].map((r) => <circle key={r} r={r} className="a2" />)}
            <path d={rays(24, 430, 500, 0.1)} className="f a2" />
          </Layer>
          <Layer s={-30} spin={60} sc={0.25}>
            <circle r="36" className="f a1" />
            <circle r="70" className="a1" />
            <circle r="110" className="a2" />
          </Layer>
        </>
      );
    case 'wheel':
      return (
        <>
          <Layer s={-150} spin={30}>
            <circle r="470" className="a2" />
            <circle r="440" className="a1" />
            {dots(24, 455, 5)}
          </Layer>
          <Layer s={-80} spin={-45}>
            <path d={spokes(16, 90, 430)} className="a1" />
            <path d={petals(16, 90, 210, 0.2)} className="f a2" />
            {dots(16, 440, 12)}
          </Layer>
          <Layer s={-30} spin={80} sc={0.2}>
            <circle r="90" className="a1" />
            <circle r="60" className="a2" />
            <circle r="28" className="f a1" />
          </Layer>
        </>
      );
    case 'lotus':
      return (
        <>
          <Layer s={-170} spin={20}>
            <path d={petals(24, 230, 490, 0.32)} className="f a3" />
            <circle r="490" className="a3" />
          </Layer>
          <Layer s={-90} spin={-40}>
            <path d={petals(16, 150, 380, 0.34, TAU / 32)} className="f a2" />
          </Layer>
          <Layer s={-30} spin={70} sc={0.2}>
            <path d={petals(8, 50, 230, 0.4)} className="f a1" />
            <circle r="40" className="f a1" />
          </Layer>
        </>
      );
    case 'yantra':
      return (
        <>
          <Layer s={-150} spin={-20}>
            <circle r="480" className="a3" />
            <circle r="455" className="a2" />
            <path d={petals(16, 360, 455, 0.3)} className="f a3" />
          </Layer>
          <Layer s={-80} spin={30}>
            {[380, 300, 220, 150].map((r) => <polygon key={`u${r}`} points={triangle(r, true)} className="a1" />)}
            {[340, 260, 180].map((r) => <polygon key={`d${r}`} points={triangle(r, false)} className="a1" />)}
          </Layer>
          <Layer s={-30} spin={-60} sc={0.2}>
            <circle r="70" className="a2" />
            <circle r="18" className="f a1" />
          </Layer>
        </>
      );
    case 'rays':
      return (
        <>
          <Layer s={-150} spin={25}>
            <path d={rays(36, 200, 500, 0.35)} className="f a3" />
          </Layer>
          <Layer s={-80} spin={-40}>
            <circle r="140" className="a2" />
            <circle r="220" className="a2" />
            <path d={spokes(12, 0, 480)} className="a3" />
          </Layer>
          <Layer s={-30} spin={60} sc={0.2}>
            <circle r="60" className="f a1" />
          </Layer>
        </>
      );
    case 'rings':
      return (
        <>
          <Layer s={-150} spin={-15}>
            {[100, 180, 260, 340, 420, 500].map((r) => <circle key={r} r={r} className="a3" />)}
          </Layer>
          <Layer s={-80} spin={35}>
            <circle r="340" className="dash a2" />
            <circle r="220" className="dash a2" />
          </Layer>
          <Layer s={-30} spin={-60} sc={0.2}>
            <circle r="40" className="f a1" />
          </Layer>
        </>
      );
  }
}

export default function Art({ kind }: { kind: ArtKind }) {
  return (
    <div className="art-frame" aria-hidden="true">
      {layers(kind)}
    </div>
  );
}
