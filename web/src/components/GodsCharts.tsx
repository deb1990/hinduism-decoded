import { useState } from 'react';
import type { ChartDef, GNode } from '../charts';
import { STAGES, type StageId } from '../gods';
import { useReveal } from '../hooks';
import { godHref } from '../route';
import { useI18n, type I18n } from '../i18n';

const W = 940;
const PAD = 24;
const LEVEL_GAP = 84;
const TOP = 24;
const CHIP_H = 26;
const CHIP_STEP = 34;
const NEAR = 34; // gap between a god and the consort joined to them

// Stage colours, used for the gradient on each connector.
const HEX: Record<StageId, string> = {
  veda: '#ff9a3c', later: '#4cc3d9', upanishad: '#b79cff', epic: '#f0c05a', purana: '#5fd6a4', bhakti: '#ff7a8a',
};

interface Placed extends GNode {
  x: number;
  y: number;
  w: number;
  h: number;
  hdr: number;
  cols: number;
  chipW: number;
}

/** The chart with its labels in the reader's language. Positions are worked out from the translated text. */
function localize(chart: ChartDef, i18n: I18n): ChartDef {
  if (i18n.lang === 'en') return chart;
  return {
    ...chart,
    nodes: chart.nodes.map((n) => {
      const l = i18n.node(n.id, n);
      return { ...n, label: l.label, sub: l.sub, members: n.members?.map((m) => ({ ...m, label: i18n.member(n.id, m.label) })) };
    }),
  };
}

function sizeOf(n: GNode, k: number): Pick<Placed, 'w' | 'h' | 'hdr' | 'cols' | 'chipW'> {
  const subW = (n.sub?.length ?? 0) * 5.9 * k + 32;
  if (n.members) {
    const cols = n.cols ?? 2;
    const chipW = (n.chipW ?? 84) + 8;
    const rows = Math.ceil(n.members.length / cols);
    const hdr = n.sub ? 54 : 40;
    const titleW = n.label.length * 8.8 * k + 32; // small capitals with wide letter spacing
    return { w: Math.max(cols * chipW + (cols + 1) * 10, titleW, subW, 120), h: hdr + rows * CHIP_STEP + 8, hdr, cols, chipW };
  }
  return { w: Math.max(120, n.label.length * 8.1 * k + 32, subW), h: n.sub ? 54 : 44, hdr: 0, cols: 0, chipW: 0 };
}

function layout(chart: ChartDef, k: number) {
  const maxLevel = Math.max(...chart.nodes.map((n) => n.level));
  const placed: Record<string, Placed> = {};
  let y = TOP;
  for (let lvl = 0; lvl <= maxLevel; lvl++) {
    const row = chart.nodes.filter((n) => n.level === lvl).map((n) => ({ ...n, ...sizeOf(n, k), x: 0, y }));
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
  const height = Math.max(...Object.values(placed).map((n) => n.y + n.h)) + 28;
  return { placed, height };
}

function Chip({ x, y, w, label, stage, god }: { x: number; y: number; w: number; label: string; stage: StageId; god?: string }) {
  const g = (
    <g className={`cn chip s-${stage}${god ? ' link' : ''}`}>
      <rect x={x} y={y} width={w} height={CHIP_H} rx={CHIP_H / 2} />
      <text className="cn-name small" x={x + w / 2} y={y + 17.5} textAnchor="middle">{label}</text>
    </g>
  );
  return god ? <a href={godHref(god)}>{g}</a> : g;
}

function NodeView({ n }: { n: Placed }) {
  if (n.members) {
    const count = Math.min(n.cols, n.members.length);
    const used = count * n.chipW + (count + 1) * 10;
    const left = n.x + (n.w - used) / 2 + 10;
    return (
      <g>
        <rect className="grp" x={n.x} y={n.y} width={n.w} height={n.h} rx="20" />
        <text className="grp-title" x={n.x + 16} y={n.y + 25}>{n.label}</text>
        {n.sub && <text className="cn-sub" x={n.x + 16} y={n.y + 43}>{n.sub}</text>}
        {n.members.map((m, i) => (
          <Chip
            key={m.label}
            x={left + (i % n.cols) * (n.chipW + 10)}
            y={n.y + n.hdr + Math.floor(i / n.cols) * CHIP_STEP}
            w={n.chipW}
            label={m.label}
            stage={m.stage ?? n.stage}
            god={m.god}
          />
        ))}
      </g>
    );
  }
  const body = (
    <g className={`cn plain s-${n.stage}${n.god ? ' link' : ''}`}>
      <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={Math.min(n.h / 2, 22)} />
      {n.sub ? (
        <>
          <text className="cn-name" x={n.x + n.w / 2} y={n.y + 23} textAnchor="middle">{n.label}</text>
          <text className="cn-sub" x={n.x + n.w / 2} y={n.y + 41} textAnchor="middle">{n.sub}</text>
        </>
      ) : (
        <text className="cn-name" x={n.x + n.w / 2} y={n.y + n.h / 2 + 5} textAnchor="middle">{n.label}</text>
      )}
    </g>
  );
  return n.god ? <a href={godHref(n.god)}>{body}</a> : body;
}

function Diagram({ chart }: { chart: ChartDef }) {
  const [hover, setHover] = useState<string | null>(null);
  const [ref, shown] = useReveal<HTMLDivElement>(0.2);
  const i18n = useI18n();
  const view = localize(chart, i18n);
  const { placed, height } = layout(view, i18n.lang === 'en' ? 1 : 1.08);
  const text = i18n.chart(chart.id, chart);

  const near = new Set<string>();
  if (hover) {
    near.add(hover);
    chart.edges.forEach((e) => {
      if (e.from === hover) near.add(e.to);
      if (e.to === hover) near.add(e.from);
    });
  }

  const edges = chart.edges.map((e, i) => {
    const a = placed[e.from];
    const b = placed[e.to];
    const hot = hover !== null && (e.from === hover || e.to === hover);
    if (e.kind === 'link') {
      const [l, r] = a.x < b.x ? [a, b] : [b, a];
      const cy = l.y + l.h / 2;
      return { i, hot, dash: true, d: `M${l.x + l.w + 3} ${cy}H${r.x - 3}`, grad: null as null | { x1: number; y1: number; x2: number; y2: number; c1: string; c2: string } };
    }
    const fx = a.x + a.w / 2;
    const fy = a.y + a.h;
    const tx = b.x + b.w / 2;
    const ty = b.y;
    const dy = (ty - fy) * 0.55;
    return {
      i, hot, dash: false,
      d: `M${fx} ${fy}C${fx} ${fy + dy} ${tx} ${ty - dy} ${tx} ${ty}`,
      grad: { x1: fx, y1: fy, x2: tx, y2: ty === fy ? fy + 1 : ty, c1: HEX[a.stage], c2: HEX[b.stage] },
    };
  });

  return (
    <div ref={ref} className={`chart-canvas${shown ? ' in' : ''}${hover ? ' has-hover' : ''}`}>
      <svg className="gods-chart" viewBox={`0 0 ${W} ${height}`} role="img" aria-label={`${text.title}. ${text.concept}`}>
        <defs>
          {edges.map((e) => e.grad && (
            <linearGradient key={e.i} id={`eg-${chart.id}-${e.i}`} gradientUnits="userSpaceOnUse" x1={e.grad.x1} y1={e.grad.y1} x2={e.grad.x2} y2={e.grad.y2}>
              <stop offset="0" stopColor={e.grad.c1} />
              <stop offset="1" stopColor={e.grad.c2} />
            </linearGradient>
          ))}
        </defs>
        <g className="edges">
          {edges.map((e) => (
            <path
              key={e.i}
              d={e.d}
              pathLength={e.dash ? undefined : 1}
              className={`${e.dash ? 'dash' : 'draw'}${e.hot ? ' hot' : ''}`}
              stroke={e.grad ? `url(#eg-${chart.id}-${e.i})` : undefined}
            />
          ))}
        </g>
        {Object.values(placed).map((n) => (
          <g
            key={n.id}
            className={`node${hover && !near.has(n.id) ? ' dim' : ''}`}
            onMouseEnter={() => setHover(n.id)}
            onMouseLeave={() => setHover(null)}
            onFocus={() => setHover(n.id)}
            onBlur={() => setHover(null)}
          >
            <NodeView n={n} />
          </g>
        ))}
      </svg>
    </div>
  );
}

export function ChartPanel({ chart }: { chart: ChartDef }) {
  const i18n = useI18n();
  const text = i18n.chart(chart.id, chart);
  const used = new Set<StageId>();
  chart.nodes.forEach((n) => {
    used.add(n.stage);
    n.members?.forEach((m) => used.add(m.stage ?? n.stage));
  });
  const hasLink = chart.edges.some((e) => e.kind === 'link');

  return (
    <section className="panel chart-panel" aria-label={text.title}>
      <h3 className="chart-title">{text.title}</h3>
      <p className="chart-period">{text.period}</p>
      <p className="chart-concept">{text.concept}</p>

      <p className="swipe-hint">{i18n.t('chart.swipe')}</p>
      <div className="chart-wrap">
        <Diagram chart={chart} />
      </div>

      <div className="legend">
        {STAGES.filter((s) => used.has(s.id)).map((s) => (
          <span key={s.id}><i className={`swatch s-${s.id}`} /> {i18n.stage(s.id, s).label}</span>
        ))}
        {hasLink && <span><i className="line dashed" /> {i18n.t('chart.consort')}</span>}
        <span className="legend-tip">{i18n.t('chart.tip')}</span>
      </div>
    </section>
  );
}
