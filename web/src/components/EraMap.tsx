import { RIVERS, SOUTH_ASIA_LAND, WORLD_LAND } from '../geo/mapdata';
import { projectSA, projectWorld } from '../geo/projection';
import { ERA_MAPS, SARASVATI, SARASVATI_NAME } from '../eraMaps';
import { useI18n } from '../i18n';

interface Box { x0: number; y0: number; x1: number; y1: number }
const overlaps = (a: Box, b: Box) => a.x0 < b.x1 && a.x1 > b.x0 && a.y0 < b.y1 && a.y1 > b.y0;

export interface MapLayout {
  x0: number; y0: number; vbW: number; vbH: number; k: number; fs: number; rfs: number; dot: number;
  regions: { name: string; cx: number; cy: number; points: string; key: string }[];
  sites: { name: string; x: number; y: number; lx: number; ly: number; anchor: 'start' | 'end' | 'middle'; clash: boolean; leader: boolean }[];
  sarasvatiPath: string; sarName: string; slx: number; sly: number;
}

/** Works out where everything goes. Labels are placed one by one, avoiding earlier labels and the site dots. */
export function layoutMap(eraId: string, place: (en: string) => string): MapLayout | null {
  const m = ERA_MAPS[eraId];
  if (!m) return null;
  const proj = m.view === 'world' ? projectWorld : projectSA;
  const [lonA, lonB, latA, latB] = m.crop;
  const [x0, y0] = proj(lonA, latB);
  const [x1, y1] = proj(lonB, latA);
  const vbW = x1 - x0;
  const vbH = y1 - y0;
  const k = 560 / vbW; // rendered pixels per map unit, so labels keep the same apparent size
  const px = (n: number) => n / k;
  const fs = px(m.view === 'world' ? 11.5 : 12.5);
  const rfs = px(14);
  const dot = px(m.view === 'world' ? 4 : 4.6);
  const width = (str: string, size: number) => str.length * size * 0.58;
  const taken: Box[] = [];

  const regions = m.regions.map((r) => {
    const [cx, cy] = proj(...r.label);
    const name = place(r.name);
    const w = width(name, rfs);
    taken.push({ x0: cx - w / 2, y0: cy - rfs, x1: cx + w / 2, y1: cy + rfs * 0.3 });
    return { name, cx, cy, key: r.name, points: r.points.map(([lo, la]) => proj(lo, la).map((n) => n.toFixed(1)).join(',')).join(' ') };
  });

  const dots = m.sites.map((s) => {
    const [x, y] = proj(s.lon, s.lat);
    taken.push({ x0: x - dot, y0: y - dot, x1: x + dot, y1: y + dot });
    return { s, x, y };
  });

  // Each label tries the spot beside its dot first, then spots further out in eight directions, drawing a thin
  // leader line back to the dot when it has to move away.
  const DIRS: [number, number][] = [[1, 0], [-1, 0], [0, -1], [0, 1], [0.7, -0.7], [-0.7, -0.7], [0.7, 0.7], [-0.7, 0.7]];
  const sites = dots.map(({ s, x, y }) => {
    const name = place(s.name);
    const w = width(name, fs);
    const gap = dot + px(3);
    const inside = (bx: Box) => bx.x0 >= x0 && bx.x1 <= x1 && bx.y0 >= y0 && bx.y1 <= y1;
    type Cand = { lx: number; ly: number; anchor: 'start' | 'end' | 'middle'; box: Box; far: boolean };
    let pick: Cand | null = null;
    let fallback: Cand | null = null;
    for (const mult of [1, 2.6, 4.4, 6.4, 8.6]) {
      const d = gap * mult;
      for (const [ax, ay] of DIRS) {
        const ox = x + ax * d;
        const oy = y + ay * d;
        const anchor = ax > 0.3 ? 'start' : ax < -0.3 ? 'end' : 'middle';
        const ly = oy + (ay < -0.3 ? -fs * 0.15 : ay > 0.3 ? fs * 0.85 : fs * 0.34);
        const bx0 = anchor === 'start' ? ox : anchor === 'end' ? ox - w : ox - w / 2;
        const by0 = ay < -0.3 ? oy - fs * 1.15 : ay > 0.3 ? oy : oy - fs * 0.6;
        const by1 = ay < -0.3 ? oy : ay > 0.3 ? oy + fs * 1.1 : oy + fs * 0.6;
        const cand = { lx: ox, ly, anchor: anchor as 'start' | 'end' | 'middle', box: { x0: bx0, y0: by0, x1: bx0 + w, y1: by1 }, far: mult > 1.5 };
        if (!inside(cand.box)) continue;
        fallback ??= cand;
        if (!taken.some((t2) => overlaps(cand.box, t2))) { pick = cand; break; }
      }
      if (pick) break;
    }
    const chosen = pick ?? fallback ?? { lx: x + gap, ly: y + fs * 0.34, anchor: 'start' as const, box: { x0: x + gap, y0: y - fs * 0.6, x1: x + gap + w, y1: y + fs * 0.6 }, far: false };
    taken.push(chosen.box);
    return { name, x, y, lx: chosen.lx, ly: chosen.ly, anchor: chosen.anchor, clash: pick === null, leader: chosen.far };
  });

  const sarasvatiPath = 'M' + SARASVATI.map(([lo, la]) => proj(lo, la).map((n) => n.toFixed(1)).join(' ')).join('L');
  const [slx, sly] = proj(70.3, 27.2);
  return { x0, y0, vbW, vbH, k, fs, rfs, dot, regions, sites, sarasvatiPath, sarName: place(SARASVATI_NAME), slx, sly };
}

/** The coastlines, defined once for every map on the page to reuse. */
export function MapDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        <path id="map-land-sa" d={SOUTH_ASIA_LAND} />
        <path id="map-land-world" d={WORLD_LAND} />
      </defs>
    </svg>
  );
}

/** A map for one era: coastline and rivers, the approximate region shaded, and the key sites labelled. */
export default function EraMap({ eraId, eraName }: { eraId: string; eraName: string }) {
  const { t, place } = useI18n();
  const m = ERA_MAPS[eraId];
  const L = layoutMap(eraId, place);
  if (!m || !L) return null;
  const px = (n: number) => n / L.k;

  return (
    <figure className="eramap">
      <svg viewBox={`${L.x0} ${L.y0} ${L.vbW} ${L.vbH}`} role="img" aria-label={t('maps.aria', { name: eraName })}>
        <rect x={L.x0} y={L.y0} width={L.vbW} height={L.vbH} className="map-ocean" />
        <use href={m.view === 'world' ? '#map-land-world' : '#map-land-sa'} className="map-land" strokeWidth={px(0.8)} />
        {m.rivers.map((n) => RIVERS[n] && <path key={n} d={RIVERS[n]} className="map-river" strokeWidth={px(1.4)} />)}
        {m.sarasvati && (
          <>
            <path d={L.sarasvatiPath} className="map-river dashed" strokeWidth={px(1.6)} strokeDasharray={`${px(5)} ${px(4)}`} />
            <text x={L.slx} y={L.sly} className="map-label tiny" fontSize={px(11)} textAnchor="middle" strokeWidth={px(3)}>{L.sarName}</text>
          </>
        )}
        {L.regions.map((r) => (
          <g key={r.key}>
            <polygon points={r.points} className="map-region" strokeWidth={px(1.6)} strokeDasharray={`${px(6)} ${px(4)}`} />
            <text x={r.cx} y={r.cy} className="map-region-label" fontSize={L.rfs} textAnchor="middle" strokeWidth={px(3.4)}>{r.name}</text>
          </g>
        ))}
        {L.sites.map((s) => (
          <g key={s.name}>
            {s.leader && <line x1={s.x} y1={s.y} x2={s.lx} y2={s.ly - L.fs * 0.34} className="map-leader" strokeWidth={px(1)} />}
            <circle cx={s.x} cy={s.y} r={L.dot} className="map-site" strokeWidth={px(1.6)} />
            <text x={s.lx} y={s.ly} className="map-label" fontSize={L.fs} textAnchor={s.anchor} strokeWidth={px(3)}>{s.name}</text>
          </g>
        ))}
      </svg>
      <figcaption>{t('maps.note')}</figcaption>
    </figure>
  );
}
