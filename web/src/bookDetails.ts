// Detailed, point-by-point pages for each book. Content is from memory and has not been checked against sources.
import type { Motif } from './components/GodArt';
import { BOOKS_VEDIC } from './books/vedic';
import { BOOKS_LAW } from './books/law';
import { BOOKS_LATER } from './books/later';

export interface BookDetail {
  glance: { label: string; value: string }[];
  sections: { title: string; points: string[] }[];
  gods: string[]; // ids of gods this book is a source for
}

export const BOOKS: Record<string, BookDetail> = { ...BOOKS_VEDIC, ...BOOKS_LAW, ...BOOKS_LATER };

// Artwork and colour for each book's page.
export const BOOK_ART: Record<string, { motif: Motif; hue: number }> = {
  rigveda: { motif: 'sun', hue: 28 },
  samaveda: { motif: 'strings', hue: 270 },
  yajurveda: { motif: 'flame', hue: 18 },
  atharvaveda: { motif: 'spiral', hue: 150 },
  brahmanas: { motif: 'tools', hue: 40 },
  upanishads: { motif: 'bindu', hue: 270 },
  sutras: { motif: 'tools', hue: 190 },
  manusmriti: { motif: 'gate', hue: 30 },
  darshanas: { motif: 'yantra', hue: 200 },
  ramayana: { motif: 'bow', hue: 150 },
  mahabharata: { motif: 'wheel', hue: 40 },
  gita: { motif: 'dharma', hue: 50 },
  puranas: { motif: 'lotus', hue: 140 },
  markandeya: { motif: 'sun', hue: 38 },
  agamas: { motif: 'trident', hue: 205 },
  'tamil-bhakti': { motif: 'strings', hue: 172 },
  bhagavata: { motif: 'flute', hue: 232 },
  ramcharitmanas: { motif: 'bow', hue: 160 },
};
