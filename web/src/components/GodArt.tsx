import type { ReactNode } from 'react';
import { Layer, TAU, layers, petals, pt, rays, spokes, triangle } from './Art';

// Symbolic artwork for each god, drawn in code. Every motif is three stacked layers that drift and turn
// at different speeds as the page scrolls (the parallax is in style.css and hooks.ts).

export type Motif =
  | 'vajra' | 'flame' | 'waves' | 'sun' | 'wind' | 'moon' | 'dawn' | 'sky' | 'egg' | 'tools' | 'lotus' | 'bindu'
  | 'wheel' | 'yantra' | 'trident' | 'bow' | 'flute' | 'strides' | 'earth' | 'mountain' | 'pillar' | 'axe'
  | 'dharma' | 'sword' | 'gate' | 'coins' | 'spiral' | 'spear' | 'seven' | 'eclipse' | 'dots33' | 'strings'
  | 'infinity' | 'dissolve';

const n1 = (v: number) => v.toFixed(1);
const PI = Math.PI;

/** A polyline through f(t) for t from 0 to 1. */
const curve = (f: (t: number) => [number, number], n = 80) =>
  Array.from({ length: n + 1 }, (_, i) => {
    const [x, y] = f(i / n);
    return `${i ? 'L' : 'M'}${n1(x)} ${n1(y)}`;
  }).join('');

/** Deterministic scatter of small stars. */
function stars(n: number, seed: number, rMax = 480, rMin = 40): ReactNode[] {
  let s = seed;
  const rnd = () => { s = (s * 16807) % 2147483647; return s / 2147483647; };
  return Array.from({ length: n }, (_, i) => {
    const a = rnd() * TAU;
    const r = rMin + rnd() * (rMax - rMin);
    return <circle key={i} cx={n1(r * Math.cos(a))} cy={n1(r * Math.sin(a))} r={1.5 + rnd() * 3} className="f a2" />;
  });
}

const star4 = (x: number, y: number, r: number) =>
  `M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z`;

const spiral = (a0: number, turns: number, rMax: number) =>
  curve((t) => { const th = a0 + t * turns * TAU; const r = rMax * t; return [r * Math.cos(th), r * Math.sin(th)]; }, 100);

const flame = (h: number, w: number, x = 0, base = 380) =>
  `M${x - w} ${base}C${x - w} ${base - h * 0.4} ${x - w * 0.25} ${base - h * 0.55} ${x} ${base - h}C${x + w * 0.25} ${base - h * 0.55} ${x + w} ${base - h * 0.4} ${x + w} ${base}Z`;

const wave = (y: number, amp: number, ph: number) => {
  let d = `M-520 ${y}`;
  for (let x = -520; x < 520; x += 80) {
    const up = (((x + 520) / 80 + ph) % 2) < 1 ? -amp : amp;
    d += `Q${x + 40} ${y + up} ${x + 80} ${y}`;
  }
  return d;
};

const EGG = (k: number) =>
  `M0 ${-300 * k}C${190 * k} ${-300 * k} ${210 * k} ${-60 * k} ${210 * k} ${40 * k}C${210 * k} ${200 * k} ${120 * k} ${300 * k} 0 ${300 * k}C${-120 * k} ${300 * k} ${-210 * k} ${200 * k} ${-210 * k} ${40 * k}C${-210 * k} ${-60 * k} ${-190 * k} ${-300 * k} 0 ${-300 * k}Z`;

const grid = () => {
  let d = '';
  for (let v = -400; v <= 400; v += 100) d += `M${v} -450V450M-450 ${v}H450`;
  return d;
};

const upperRays = (n: number, r1: number, r2: number, w: number) => {
  let d = '';
  const half = (PI / n) * w / 2;
  for (let i = 0; i < n; i++) {
    const a = -PI + ((i + 0.5) / n) * PI;
    d += `M${pt(r1, a - half)}L${pt(r2, a)}L${pt(r1, a + half)}Z`;
  }
  return d;
};

const MOTIFS: Record<Motif, () => ReactNode> = {
  vajra: () => {
    const prong = (s: number) => [-62, -22, 22, 62].map((o) => {
      const a = (o * PI) / 180;
      return `M${n1(60 * Math.sin(a))} ${s * 150}Q${n1(190 * Math.sin(a))} ${s * 260} 0 ${s * 350}`;
    }).join('');
    return (
      <>
        <Layer s={-150} spin={-10}>
          <circle r="430" className="a3" />
          <circle r="390" className="dash a3" />
          <path d="M-420 -300L-250 -40L-340 -40L-120 260L-200 260L40 480M420 -300L250 -40L340 -40L120 260L200 260L-40 480" className="a3" />
        </Layer>
        <Layer s={-80} spin={0}>
          <path d={prong(1) + prong(-1)} className="a1" />
          <path d="M0 -140V140" className="a1" />
          <circle cy="-140" r="50" className="f a1" />
          <circle cy="140" r="50" className="f a1" />
          <circle r="62" className="f a1" />
        </Layer>
        <Layer s={-30} spin={30} sc={0.2}>
          <path d={rays(16, 90, 150, 0.25)} className="f a2" />
        </Layer>
      </>
    );
  },
  flame: () => (
    <>
      <Layer s={-150} spin={-8}>
        <circle r="440" className="dash a3" />
        {stars(40, 7, 470, 200)}
      </Layer>
      <Layer s={-80} spin={0}>
        <path d={flame(740, 150)} className="f a1" />
        <path d={flame(540, 120, -170)} className="f a2" />
        <path d={flame(540, 120, 170)} className="f a2" />
        <path d={flame(360, 90, -290)} className="f a3" />
        <path d={flame(360, 90, 290)} className="f a3" />
      </Layer>
      <Layer s={-30} spin={0} sc={0.15}>
        <path d={flame(400, 70)} className="f a1" />
        <path d={flame(220, 36)} className="f a1" />
      </Layer>
    </>
  ),
  waves: () => (
    <>
      <Layer s={-150} spin={10}>
        {[110, 200, 290, 380, 470].map((r) => <circle key={r} r={r} className="a3" />)}
      </Layer>
      <Layer s={-80} spin={0}>
        {[-300, -220, -140, -60, 20, 100, 180, 260, 340].map((y, i) => (
          <path key={y} d={wave(y, 26, i % 2)} className={i % 2 ? 'a2' : 'a1'} />
        ))}
      </Layer>
      <Layer s={-30} spin={0}>
        <circle cy="-380" r="62" className="f a1" />
        <circle cy="-380" r="96" className="a2" />
      </Layer>
    </>
  ),
  sun: () => (
    <>
      <Layer s={-150} spin={20}><path d={rays(48, 270, 500, 0.4)} className="f a3" /></Layer>
      <Layer s={-80} spin={-30}>
        <circle r="200" className="a1" />
        <path d={rays(24, 230, 350, 0.28)} className="f a2" />
      </Layer>
      <Layer s={-30} spin={50} sc={0.2}>
        <circle r="130" className="f a1" />
        <circle r="165" className="a2" />
      </Layer>
    </>
  ),
  wind: () => (
    <>
      <Layer s={-150} spin={15}>
        {[0, 1, 2].map((i) => <path key={i} d={spiral((i * TAU) / 3, 1.3, 480)} className="a3" />)}
      </Layer>
      <Layer s={-80} spin={-40}>
        {[0, 1, 2, 3].map((i) => <path key={i} d={spiral((i * TAU) / 4, 1.8, 340)} className="a1" />)}
      </Layer>
      <Layer s={-30} spin={60} sc={0.2}>
        <path d={spiral(0, 2.2, 120)} className="a1" />
        <circle r="18" className="f a1" />
      </Layer>
    </>
  ),
  moon: () => (
    <>
      <Layer s={-150} spin={-10}>
        <circle r="450" className="dash a3" />
        {stars(60, 11)}
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M126.7 -227A260 260 0 1 0 126.7 227A230 230 0 1 1 126.7 -227Z" transform="rotate(-25) translate(-30 0)" className="f a1" />
      </Layer>
      <Layer s={-30} spin={20} sc={0.2}>
        <circle cx="210" cy="-120" r="10" className="f a1" />
        <path d={star4(200, 150, 26)} className="f a1" />
        <path d={star4(-250, -260, 18)} className="f a2" />
      </Layer>
    </>
  ),
  dawn: () => (
    <>
      <Layer s={-150} spin={0}>
        <g transform="translate(0 120)"><path d={upperRays(30, 250, 520, 0.4)} className="f a3" /></g>
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M-260 120A260 260 0 0 1 260 120Z" className="f a1" />
        <path d="M-520 120H520M-330 175H330M-240 230H240M-150 285H150M-70 340H70" className="a2" />
      </Layer>
      <Layer s={-30} spin={0} sc={0.1}>
        <path d="M-150 120A150 150 0 0 1 150 120Z" className="f a1" />
      </Layer>
    </>
  ),
  sky: () => (
    <>
      <Layer s={-150} spin={6}>{stars(90, 3, 500, 30)}</Layer>
      <Layer s={-80} spin={-6}>
        <path d="M-430 40A430 430 0 0 1 430 40" className="a1" />
        <path d="M-380 40A380 380 0 0 1 380 40" className="a2" />
        <path d="M-430 90A430 430 0 0 0 430 90" className="a1" />
        <path d="M-380 90A380 380 0 0 0 380 90" className="a2" />
      </Layer>
      <Layer s={-30} spin={10} sc={0.2}>
        <path d={star4(-120, -200, 34)} className="f a1" />
        <path d={star4(180, -120, 24)} className="f a1" />
        <path d={star4(30, -310, 18)} className="f a2" />
      </Layer>
    </>
  ),
  egg: () => (
    <>
      <Layer s={-150} spin={8}>
        <path d={rays(36, 340, 500, 0.15)} className="f a3" />
        <circle r="470" className="a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <path d={EGG(1.25)} className="f a2" />
        <path d={EGG(1)} className="a1" />
        <path d={EGG(0.7)} className="a2" />
        <path d="M-260 40H260" className="a3" />
      </Layer>
      <Layer s={-30} spin={30} sc={0.2}>
        <circle cy="20" r="62" className="f a1" />
        <circle cy="20" r="100" className="a2" />
      </Layer>
    </>
  ),
  tools: () => (
    <>
      <Layer s={-150} spin={0}><path d={grid()} className="a3" /></Layer>
      <Layer s={-80} spin={0}>
        <circle r="170" className="a1" />
        <path d={rays(14, 170, 225, 0.55)} className="f a1" />
        <circle r="80" className="a2" />
        <path d="M0 -330L-150 280M0 -330L150 280M-100 90H100" className="a1" />
      </Layer>
      <Layer s={-30} spin={40} sc={0.2}>
        <circle r="26" className="f a1" />
        <path d="M-420 400V150L-170 400Z" className="a2" />
      </Layer>
    </>
  ),
  lotus: () => layers('lotus'),
  bindu: () => layers('bindu'),
  wheel: () => layers('wheel'),
  yantra: () => layers('yantra'),
  trident: () => {
    const prong = (s: number) => `M0 -20C${s * 20} -20 ${s * 130} -20 ${s * 130} -170L${s * 130} -300`;
    return (
      <>
        <Layer s={-150} spin={10}>
          <circle r="420" className="a3" />
          <path d={rays(40, 300, 500, 0.3)} className="f a3" />
        </Layer>
        <Layer s={-80} spin={0}>
          <path d={`${prong(1)}${prong(-1)}M0 -20V-360M0 -20V440`} className="a1" />
          <path d="M-150 -290L-130 -350L-110 -290ZM-20 -350L0 -420L20 -350ZM110 -290L130 -350L150 -290Z" className="f a1" />
          <path d="M-60 140Q0 90 60 140" className="a2" />
        </Layer>
        <Layer s={-30} spin={0} sc={0.1}>
          <circle cy="-170" r="34" className="a1" />
          <path d="M26 -170A26 26 0 1 1 26 -170.1" className="a2" />
          <path d="M-70 60A90 90 0 1 0 70 60A70 70 0 1 1 -70 60Z" transform="translate(0 150) scale(.5)" className="f a1" />
        </Layer>
      </>
    );
  },
  bow: () => (
    <>
      <Layer s={-150} spin={10}>
        <circle r="420" className="a3" />
        <circle r="300" className="dash a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M-130 -420C330 -240 330 240 -130 420" className="a1" />
        <path d="M-130 -420L-130 420" className="a2" />
        <path d="M-130 0H430" className="a1" />
        <path d="M430 0L370 -34L370 34Z" className="f a1" />
        <path d="M-80 0L-110 -30M-80 0L-110 30M-30 0L-60 -30M-30 0L-60 30" className="a2" />
      </Layer>
      <Layer s={-30} spin={30} sc={0.2}>
        <circle cx="-300" cy="-300" r="40" className="f a1" />
        <path d={rays(12, 55, 90, 0.3)} transform="translate(-300 -300)" className="f a2" />
      </Layer>
    </>
  ),
  flute: () => {
    const barbs = Array.from({ length: 22 }, (_, i) => {
      const y = -240 + i * 22;
      return `M0 ${y}Q${-70 - i * 2} ${y - 10} ${-110 - i * 2} ${y + 30}M0 ${y}Q${70 + i * 2} ${y - 10} ${110 + i * 2} ${y + 30}`;
    }).join('');
    return (
      <>
        <Layer s={-150} spin={-8}>
          <circle r="440" className="a3" />
          <path d={rays(60, 380, 500, 0.3)} className="f a3" />
        </Layer>
        <Layer s={-80} spin={0}>
          <path d="M0 -300C-20 -100 20 100 0 460" className="a1" />
          <path d={barbs} className="a2" />
          <ellipse cy="-300" rx="80" ry="120" className="f a1" />
          <ellipse cy="-300" rx="50" ry="80" className="a1" />
          <ellipse cy="-300" rx="24" ry="40" className="f a1" />
        </Layer>
        <Layer s={-30} spin={0} sc={0.1}>
          <path d="M-420 330L420 -170" className="a1" />
          {[-250, -180, -110, -40, 30].map((x, i) => <circle key={x} cx={x} cy={238 - i * 40} r="9" className="f a1" />)}
        </Layer>
      </>
    );
  },
  strides: () => (
    <>
      <Layer s={-150} spin={0}>
        <path d={upperRays(20, 200, 520, 0.3)} className="f a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        {[150, 270, 390, 510].map((r, i) => <path key={r} d={`M${-r} 300A${r} ${r} 0 0 1 ${r} 300`} className={i < 3 ? 'a1' : 'a3'} />)}
        <path d="M-510 300H510" className="a2" />
      </Layer>
      <Layer s={-30} spin={0} sc={0.1}>
        <circle cy="250" r="22" className="f a1" />
        <path d="M0 272V340" className="a1" />
      </Layer>
    </>
  ),
  earth: () => (
    <>
      <Layer s={-150} spin={8}>
        {[300, 380, 460].map((r) => <circle key={r} r={r} className="a3" />)}
      </Layer>
      <Layer s={-80} spin={-6}>
        <circle cy="-60" r="230" className="f a1" />
        <path d="M-230 -60H230M-200 -170H200M-200 50H200" className="a2" />
        <path d="M0 -290C130 -190 130 70 0 170C-130 70 -130 -190 0 -290Z" className="a2" />
      </Layer>
      <Layer s={-30} spin={0} sc={0.1}>
        <path d="M-300 330C-180 470 180 470 300 330" className="a1" />
        <path d="M-300 330C-170 400 170 400 300 330" className="a2" />
        <path d={wave(430, 14, 0)} className="a3" />
      </Layer>
    </>
  ),
  mountain: () => (
    <>
      <Layer s={-150} spin={0}>
        {stars(40, 21, 500, 200)}
        <circle r="440" className="dash a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M-480 340L-200 -80L-60 120L120 -240L300 40L480 340Z" className="f a2" />
        <path d="M-300 340L-60 -20L100 340Z" className="f a1" />
        <path d="M-60 -20L-110 60L-20 40Z" className="a1" />
      </Layer>
      <Layer s={-30} spin={0}>
        {[360, 410, 460].map((y, i) => <path key={y} d={wave(y, 14, i)} className="a2" />)}
      </Layer>
    </>
  ),
  pillar: () => (
    <>
      <Layer s={-150} spin={14}>
        <path d={rays(30, 120, 520, 0.2)} className="f a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M-90 -460V460M90 -460V460M-130 -460H130M-130 460H130" className="a1" />
        <path d="M-90 -100L-30 -30L-80 20L-10 90L-70 160L0 230" className="a2" />
        <path d="M-420 -260Q-250 -60 -300 280M-340 -280Q-190 -60 -230 260M-260 -300Q-130 -60 -160 240" className="a1" />
      </Layer>
      <Layer s={-30} spin={30} sc={0.2}>
        <circle cy="-20" r="46" className="f a1" />
        <circle cy="-20" r="86" className="a2" />
      </Layer>
    </>
  ),
  axe: () => (
    <>
      <Layer s={-150} spin={-8}>
        <circle r="440" className="a3" />
        {Array.from({ length: 21 }, (_, i) => {
          const a = (i / 21) * TAU;
          return <circle key={i} cx={n1(440 * Math.cos(a))} cy={n1(440 * Math.sin(a))} r="9" className="f a2" />;
        })}
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M-230 420L170 -330" className="a1" />
        <path d="M170 -330C420 -380 470 -90 280 -20C320 -150 280 -250 170 -330Z" className="f a1" />
        <path d="M60 -120L120 -90M30 -50L90 -20" className="a2" />
      </Layer>
      <Layer s={-30} spin={20} sc={0.2}>
        <circle cx="-230" cy="420" r="26" className="f a1" />
      </Layer>
    </>
  ),
  dharma: () => (
    <>
      <Layer s={-150} spin={10}>
        <path d={rays(36, 330, 500, 0.3)} className="f a3" />
        <circle r="480" className="a3" />
      </Layer>
      <Layer s={-80} spin={-20}>
        <circle r="300" className="a1" />
        <circle r="260" className="a2" />
        <path d={spokes(8, 60, 260)} className="a1" />
        <path d={petals(8, 150, 250, 0.16)} className="f a2" />
      </Layer>
      <Layer s={-30} spin={40} sc={0.2}>
        <circle r="60" className="f a1" />
        <circle r="90" className="a2" />
        <path d={petals(8, 100, 160, 0.3, TAU / 16)} className="f a1" />
      </Layer>
    </>
  ),
  sword: () => (
    <>
      <Layer s={-150} spin={0}>
        <path d={upperRays(24, 200, 520, 0.3)} className="f a3" />
        <circle r="450" className="dash a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M0 -440L34 -300L34 170L-34 170L-34 -300Z" className="f a1" />
        <path d="M0 -440V170" className="a2" />
        <path d="M-130 170H130M-110 170V210H110V170" className="a1" />
        <path d="M0 210V330" className="a1" />
        <circle cy="350" r="26" className="f a1" />
      </Layer>
      <Layer s={-30} spin={0}>
        {stars(14, 5, 460, 260)}
        <path d="M-260 400A260 260 0 0 1 260 400" className="a2" />
      </Layer>
    </>
  ),
  gate: () => (
    <>
      <Layer s={-150} spin={-8}>
        {[100, 180, 260, 340, 420].map((r) => <circle key={r} r={r} className="a3" />)}
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M-200 440V-60A200 200 0 0 1 200 -60V440" className="a1" />
        <path d="M-130 440V-50A130 130 0 0 1 130 -50V440" className="f a2" />
        <path d="M-60 440L-20 130M60 440L20 130" className="a2" />
        <path d="M-90 330H90M-70 250H70M-50 190H50" className="a3" />
      </Layer>
      <Layer s={-30} spin={0}>
        <circle cx="-40" cy="-140" r="9" className="f a1" />
        <circle cx="40" cy="-140" r="9" className="f a1" />
      </Layer>
    </>
  ),
  coins: () => {
    const coin = (x: number, y: number, r: number) => (
      <g key={`${x},${y}`}>
        <circle cx={x} cy={y} r={r} className="f a1" />
        <rect x={x - r * 0.28} y={y - r * 0.28} width={r * 0.56} height={r * 0.56} className="a2" />
      </g>
    );
    return (
      <>
        <Layer s={-150} spin={8}>
          <circle r="450" className="a3" />
          <circle r="410" className="dash a3" />
        </Layer>
        <Layer s={-80} spin={-14}>
          {[0, 1, 2, 3, 4, 5].map((i) => coin(Math.cos((i / 6) * TAU) * 250, Math.sin((i / 6) * TAU) * 250, 110))}
          {coin(0, 0, 130)}
        </Layer>
        <Layer s={-30} spin={20} sc={0.2}>
          <circle r="50" className="a2" />
        </Layer>
      </>
    );
  },
  spiral: () => (
    <>
      <Layer s={-150} spin={-10}>
        <circle r="460" className="a3" />
        <path d="M-300 -380C-520 -120 -420 300 -200 380M300 -380C520 -120 420 300 200 380" className="a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <ellipse cx="-230" cy="-20" rx="150" ry="260" className="f a2" />
        <ellipse cx="230" cy="-20" rx="150" ry="260" className="f a2" />
        <path d={spiral(0, 3, 260)} className="a1" />
      </Layer>
      <Layer s={-30} spin={20} sc={0.2}>
        <path d="M-70 -300A70 70 0 1 0 70 -300A55 55 0 1 1 -70 -300Z" transform="translate(0 -110) scale(.8)" className="f a1" />
        <circle cy="330" r="24" className="f a1" />
      </Layer>
    </>
  ),
  spear: () => (
    <>
      <Layer s={-150} spin={10}>
        <path d={rays(36, 260, 500, 0.3)} className="f a3" />
      </Layer>
      <Layer s={-80} spin={0}>
        <path d="M0 -450C90 -330 100 -150 0 -50C-100 -150 -90 -330 0 -450Z" className="f a1" />
        <path d="M0 -450V-50" className="a2" />
        <path d="M0 -50V450" className="a1" />
        <path d="M-60 -20H60M-40 20H40" className="a2" />
      </Layer>
      <Layer s={-30} spin={30} sc={0.2}>
        {Array.from({ length: 6 }, (_, i) => {
          const a = (i / 6) * TAU;
          return <circle key={i} cx={n1(200 * Math.cos(a))} cy={n1(200 * Math.sin(a))} r="16" className="f a1" />;
        })}
      </Layer>
    </>
  ),
  seven: () => (
    <>
      <Layer s={-150} spin={8}>
        <circle r="460" className="a3" />
        <circle r="300" className="dash a3" />
      </Layer>
      <Layer s={-80} spin={-18}>
        {Array.from({ length: 7 }, (_, i) => {
          const a = (i / 7) * TAU - PI / 2;
          const x = 290 * Math.cos(a);
          const y = 290 * Math.sin(a);
          return (
            <g key={i} transform={`translate(${n1(x)} ${n1(y)})`}>
              <circle r="100" className="a1" />
              <path d={petals(8, 20, 85, 0.3)} className="f a2" />
            </g>
          );
        })}
      </Layer>
      <Layer s={-30} spin={30} sc={0.2}>
        <circle r="80" className="a1" />
        <circle r="36" className="f a1" />
      </Layer>
    </>
  ),
  eclipse: () => (
    <>
      <Layer s={-150} spin={10}>
        <path d={rays(72, 260, 500, 0.25)} className="f a3" />
      </Layer>
      <Layer s={-80} spin={-14}>
        <circle r="250" className="a1" />
        <circle r="290" className="a2" />
        <path d={rays(36, 255, 380, 0.2)} className="f a2" />
      </Layer>
      <Layer s={-30} spin={0} sc={0.1}>
        <circle r="225" className="f a1" />
        <circle r="225" className="a1" />
      </Layer>
    </>
  ),
  dots33: () => {
    const ring = (n: number, r: number, size: number) => Array.from({ length: n }, (_, i) => {
      const a = (i / n) * TAU - PI / 2;
      return <circle key={`${r}-${i}`} cx={n1(r * Math.cos(a))} cy={n1(r * Math.sin(a))} r={size} className="f a1" />;
    });
    return (
      <>
        <Layer s={-150} spin={6}>
          {[360, 270, 180].map((r) => <circle key={r} r={r} className="a3" />)}
        </Layer>
        <Layer s={-80} spin={-12}>
          {ring(12, 360, 18)}
          {ring(11, 270, 16)}
          {ring(8, 180, 14)}
        </Layer>
        <Layer s={-30} spin={24} sc={0.2}>
          <circle cx="-34" r="20" className="f a1" />
          <circle cx="34" r="20" className="f a1" />
        </Layer>
      </>
    );
  },
  strings: () => (
    <>
      <Layer s={-150} spin={0}>
        <circle r="450" className="a3" />
        {[0, 1, 2, 3].map((i) => <path key={i} d={wave(-300 + i * 200, 18, i)} className="a3" />)}
      </Layer>
      <Layer s={-80} spin={0}>
        {Array.from({ length: 12 }, (_, i) => {
          const x = -330 + i * 60;
          const top = -380 + Math.abs(5.5 - i) * 28;
          return <path key={i} d={`M${x} ${top}V${420 - Math.abs(5.5 - i) * 10}`} className={i % 2 ? 'a2' : 'a1'} />;
        })}
        <path d="M-360 -330C-120 -460 120 -460 360 -330" className="a1" />
      </Layer>
      <Layer s={-30} spin={20} sc={0.2}>
        <circle cx="-200" cy="-120" r="16" className="f a1" />
        <circle cx="120" cy="60" r="12" className="f a1" />
        <circle cx="260" cy="-200" r="10" className="f a2" />
      </Layer>
    </>
  ),
  infinity: () => {
    const lem = (k: number) => curve((t) => {
      const th = t * TAU;
      const d = 1 + Math.sin(th) ** 2;
      return [(k * Math.cos(th)) / d, (k * Math.sin(th) * Math.cos(th)) / d];
    }, 120);
    return (
      <>
        <Layer s={-150} spin={-6}>
          {[120, 220, 320, 420, 500].map((r) => <circle key={r} r={r} className="a3" />)}
        </Layer>
        <Layer s={-80} spin={0}>
          <path d={lem(440)} className="a1" />
          <path d={lem(340)} className="a2" />
          <path d={lem(240)} className="f a2" />
        </Layer>
        <Layer s={-30} spin={30} sc={0.2}>
          <circle r="44" className="f a1" />
          <circle r="76" className="a2" />
        </Layer>
      </>
    );
  },
  dissolve: () => (
    <>
      <Layer s={-150} spin={14}>
        {[420, 340, 260, 180, 100].map((r, i) => (
          <circle key={r} r={r} className="a2" style={{ strokeDasharray: `${r * (0.9 - i * 0.12)} ${r * (0.25 + i * 0.12)}` }} />
        ))}
      </Layer>
      <Layer s={-80} spin={-26}>
        <path d={triangle(300, false)} className="a1" style={{ strokeDasharray: '240 60' }} />
        <path d={triangle(220, true)} className="a2" style={{ strokeDasharray: '180 80' }} />
        {stars(50, 17, 460, 120)}
      </Layer>
      <Layer s={-30} spin={40} sc={0.3}>
        <circle r="30" className="a1" style={{ strokeDasharray: '30 20' }} />
      </Layer>
    </>
  ),
};

export default function GodArt({ motif }: { motif: Motif }) {
  return (
    <div className="art-frame god-art" aria-hidden="true">
      {MOTIFS[motif]()}
    </div>
  );
}
