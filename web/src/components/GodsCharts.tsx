import { useState } from 'react';
import { CHARTS, type ChartDef, type GNode } from '../charts';
import { STAGES, type StageId } from '../gods';

const W = 940;
const PAD = 24;
const LEVEL_GAP = 64;
const TOP = 20;
const CHIP_H = 22;
const CHIP_STEP = 28;
const NEAR = 28; // gap between a god and the consort joined to them

interface Placed extends GNode {
  x: number;
  y: number;
  w: number;
  h: number;
  hdr: number;
  cols: number;
  chipW: number;
}

function sizeOf(n: GNode): Pick<Placed, 'w' | 'h' | 'hdr' | 'cols' | 'chipW'> {
  const textW = Math.max(n.label.length * 7.4, (n.sub?.length ?? 0) * 6.2) + 24;
  if (n.members) {
    const cols = n.cols ?? 2;
    const chipW = n.chipW ?? 84;
    const rows = Math.ceil(n.members.length / cols);
    const hdr = n.sub ? 44 : 30;
    return { w: Math.max(cols * chipW + (cols + 1) * 8, textW, 120), h: hdr + rows * CHIP_STEP + 4, hdr, cols, chipW };
  }
  return { w: Math.max(120, textW), h: n.sub ? 44 : 36, hdr: 0, cols: 0, chipW: 0 };
}

function layout(chart: ChartDef) {
  const maxLevel = Math.max(...chart.nodes.map((n) => n.level));
  const placed: Record<string, Placed> = {};
  let y = TOP;
  for (let lvl = 0; lvl <= maxLevel; lvl++) {
    const row = chart.nodes.filter((n) => n.level === lvl).map((n) => ({ ...n, ...sizeOf(n), x: 0, y }));
    const sum = row.reduce((a, n) => a + n.w, 0);
    const joins = row.filter((n, i) => n.joinNext && i < row.length - 1).length;
    const free = row.length - 1 - joins;
    const gap = free > 0 ? Math.max(8, Math.min(56, (W - 2 * PAD - sum - joins * NEAR) / free)) : 0;
    const total = sum + joins * NEAR + free * gap;
    let x = (W - total) / 2;
    row.forEach((n, i) => {
      n.x = x;
      placed[n.id] = n;
      x += n.w + (n.joinNext && i < row.length - 1 ? NEAR : gap);
    });
    y += Math.max(...row.map((n) => n.h)) + LEVEL_GAP;
  }
  const height = Math.max(...Object.values(placed).map((n) => n.y + n.h)) + 24;
  return { placed, height };
}

function Chip({ x, y, w, label, stage, god }: { x: number; y: number; w: number; label: string; stage: StageId; god?: string }) {
  const g = (
    <g className={`cn s-${stage}${god ? ' link' : ''}`}>
      <rect x={x} y={y} width={w} height={CHIP_H} rx="6" />
      <text className="cn-name small" x={x + w / 2} y={y + 15} textAnchor="middle">{label}</text>
    </g>
  );
  return god ? <a href={`#god-${god}`}>{g}</a> : g;
}

function NodeView({ n }: { n: Placed }) {
  if (n.members) {
    return (
      <g>
        <rect className="grp" x={n.x} y={n.y} width={n.w} height={n.h} rx="12" />
        <text className="grp-title" x={n.x + 12} y={n.y + 19}>{n.label}</text>
        {n.sub && <text className="cn-sub" x={n.x + 12} y={n.y + 34}>{n.sub}</text>}
        {n.members.map((m, i) => {
          const c = i % n.cols;
          const r = Math.floor(i / n.cols);
          const used = Math.min(n.cols, n.members!.length) * n.chipW + (Math.min(n.cols, n.members!.length) + 1) * 8;
          const left = n.x + (n.w - used) / 2 + 8;
          return (
            <Chip
              key={m.label}
              x={left + c * (n.chipW + 8)}
              y={n.y + n.hdr + r * CHIP_STEP}
              w={n.chipW}
              label={m.label}
              stage={m.stage ?? n.stage}
              god={m.god}
            />
          );
        })}
      </g>
    );
  }
  const body = (
    <g className={`cn s-${n.stage}${n.god ? ' link' : ''}`}>
      <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="8" />
      {n.sub ? (
        <>
          <text className="cn-name" x={n.x + n.w / 2} y={n.y + 19} textAnchor="middle">{n.label}</text>
          <text className="cn-sub" x={n.x + n.w / 2} y={n.y + 35} textAnchor="middle">{n.sub}</text>
        </>
      ) : (
        <text className="cn-name" x={n.x + n.w / 2} y={n.y + n.h / 2 + 4} textAnchor="middle">{n.label}</text>
      )}
    </g>
  );
  return n.god ? <a href={`#god-${n.god}`}>{body}</a> : body;
}

function Diagram({ chart }: { chart: ChartDef }) {
  const { placed, height } = layout(chart);
  const paths: { d: string; dash: boolean; key: string }[] = chart.edges.map((e, i) => {
    const a = placed[e.from];
    const b = placed[e.to];
    if (e.kind === 'link') {
      const [l, r] = a.x < b.x ? [a, b] : [b, a];
      const cy = l.y + l.h / 2;
      return { key: `${i}`, dash: true, d: `M${l.x + l.w} ${cy}H${r.x}` };
    }
    const fx = a.x + a.w / 2;
    const fy = a.y + a.h;
    const tx = b.x + b.w / 2;
    const ty = b.y;
    const mid = ty - 24;
    return { key: `${i}`, dash: false, d: fx === tx ? `M${fx} ${fy}V${ty}` : `M${fx} ${fy}V${mid}H${tx}V${ty}` };
  });

  return (
    <svg className="gods-chart" viewBox={`0 0 ${W} ${height}`} role="img" aria-label={`${chart.title}. ${chart.concept}`}>
      <g className="edges">
        {paths.map((p) => <path key={p.key} d={p.d} className={p.dash ? 'dash' : undefined} />)}
      </g>
      {Object.values(placed).map((n) => <NodeView key={n.id} n={n} />)}
    </svg>
  );
}

export default function GodsCharts() {
  const [id, setId] = useState(CHARTS[0].id);
  const chart = CHARTS.find((c) => c.id === id) ?? CHARTS[0];

  const used = new Set<StageId>();
  chart.nodes.forEach((n) => {
    used.add(n.stage);
    n.members?.forEach((m) => used.add(m.stage ?? n.stage));
  });
  const hasLink = chart.edges.some((e) => e.kind === 'link');

  return (
    <section className="overview" aria-label="Gods charts">
      <h2>Gods charts</h2>
      <p className="note">
        One chart per layer of thought. Gods are linked only where that layer’s own texts link them, and a new chart starts when the concept changes.
      </p>

      <div className="chart-tabs" role="tablist" aria-label="Choose a chart">
        {CHARTS.map((c, i) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={c.id === chart.id}
            className={c.id === chart.id ? 'pill active' : 'pill'}
            onClick={() => setId(c.id)}
          >
            {i + 1}. {c.tab}
          </button>
        ))}
      </div>

      <h3 className="chart-title">{chart.title}</h3>
      <p className="chart-period">{chart.period}</p>
      <p className="chart-concept">{chart.concept}</p>

      <div className="chart-wrap">
        <Diagram chart={chart} />
      </div>

      <div className="legend">
        {STAGES.filter((s) => used.has(s.id)).map((s) => (
          <span key={s.id}><i className={`swatch s-${s.id}`} /> {s.label}</span>
        ))}
        <span><i className="line solid" /> comes from or contains</span>
        {hasLink && <span><i className="line dashed" /> consort</span>}
      </div>
      <p className="note legend-note">Colour shows the book group that defines each god. Click a box to jump to that god’s card.</p>
    </section>
  );
}
