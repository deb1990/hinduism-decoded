// The scroll story: one full-screen chapter per layer of thought. Each god card sits in the chapter
// of the book group that first defines the god.

import { GODS, type God } from './gods';
import { CHARTS } from './charts';
import type { ArtKind } from './components/Art';

export interface ChapterDef {
  id: 'vedic' | 'upanishads' | 'puranic' | 'shakta';
  chartId: string;
  kicker: string;
  title: string;
  lede: string;
  art: ArtKind;
  accent: string;
  deep: string;
}

export const GOD_CHAPTERS: ChapterDef[] = [
  {
    id: 'vedic', chartId: 'vedic', art: 'flame', accent: '#ff9a3c', deep: '#150a04',
    kicker: 'Chapter 1 · c. 1500–600 BCE',
    title: 'Fire, sky and a hundred gods',
    lede: 'The earliest layer: gods of nature and sacrifice, praised in hymns, and several competing stories of how the world began.',
  },
  {
    id: 'upanishads', chartId: 'upanishads', art: 'bindu', accent: '#b79cff', deep: '#09061a',
    kicker: 'Chapter 2 · c. 800–200 BCE',
    title: 'From many gods to one',
    lede: 'The question changes. Not which god, but what is the one reality behind them all.',
  },
  {
    id: 'puranic', chartId: 'puranic', art: 'wheel', accent: '#5fd6a4', deep: '#04140f',
    kicker: 'Chapter 3 · c. 400 BCE–1000 CE',
    title: 'The gods get a family',
    lede: 'The epics and Puranas give the gods the shape most Hindus know: the Trimurti, consorts, avatars and sons.',
  },
  {
    id: 'shakta', chartId: 'shakta', art: 'yantra', accent: '#ff6b81', deep: '#16050c',
    kicker: 'Chapter 4 · c. 500–600 CE',
    title: 'The Goddess takes the throne',
    lede: 'In the Devi Mahatmya the ultimate power is a woman, and the gods act through her.',
  },
];

const SHAKTA = new Set(['durga', 'mahakali', 'mahalakshmi', 'mahasarasvati', 'saptamatrika']);

export function chapterOf(g: God): ChapterDef['id'] {
  if (SHAKTA.has(g.id)) return 'shakta';
  const first = g.steps.find((s) => s.weight === 'defines') ?? g.steps[0];
  if (first.stage === 'veda' || first.stage === 'later') return 'vedic';
  if (first.stage === 'upanishad') return 'upanishads';
  return 'puranic';
}

/** Gods in the order the chart shows them: top row to bottom row, left to right, group members in order. */
function chartOrder(chartId: string): string[] {
  const chart = CHARTS.find((c) => c.id === chartId);
  if (!chart) return [];
  const seen: string[] = [];
  const add = (id?: string) => { if (id && !seen.includes(id)) seen.push(id); };
  [...chart.nodes].sort((a, b) => a.level - b.level).forEach((n) => {
    add(n.god);
    n.members?.forEach((m) => add(m.god));
  });
  return seen;
}

/** The gods of a chapter, in the same order as that chapter's chart; any the chart does not show come last. */
export function godsFor(chapter: ChapterDef['id']): God[] {
  const inChapter = GODS.filter((g) => chapterOf(g) === chapter);
  const def = GOD_CHAPTERS.find((c) => c.id === chapter);
  const order = def ? chartOrder(def.chartId) : [];
  const rank = (g: God) => {
    const i = order.indexOf(g.id);
    return i >= 0 ? i : order.length + inChapter.indexOf(g);
  };
  return [...inChapter].sort((a, b) => rank(a) - rank(b));
}

/** Every god in reading order: chapter by chapter, earliest first. */
export const GOD_ORDER: God[] = GOD_CHAPTERS.flatMap((c) => godsFor(c.id));
