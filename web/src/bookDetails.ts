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
  shrauta: { motif: 'tools', hue: 30 },
  grihya: { motif: 'flame', hue: 20 },
  dharmasutras: { motif: 'gate', hue: 200 },
  'brahma-sutras': { motif: 'bindu', hue: 270 },
  'yoga-sutras': { motif: 'lotus', hue: 150 },
  ashtadhyayi: { motif: 'tools', hue: 60 },
  chandahsutra: { motif: 'spiral', hue: 60 },
  nirukta: { motif: 'sun', hue: 50 },
  'narada-bhakti': { motif: 'flute', hue: 300 },
  'shandilya-bhakti': { motif: 'flute', hue: 320 },
  brahmanas: { motif: 'tools', hue: 40 },
  aranyakas: { motif: 'spiral', hue: 140 },
  upanishads: { motif: 'bindu', hue: 270 },
  manusmriti: { motif: 'gate', hue: 30 },
  ramayana: { motif: 'bow', hue: 150 },
  mahabharata: { motif: 'wheel', hue: 40 },
  mimamsa: { motif: 'flame', hue: 25 },
  vaisheshika: { motif: 'dots33', hue: 190 },
  nyaya: { motif: 'pillar', hue: 215 },
  samkhya: { motif: 'infinity', hue: 270 },
  arthashastra: { motif: 'gate', hue: 20 },
  kamasutra: { motif: 'lotus', hue: 345 },
  'shiva-sutras': { motif: 'trident', hue: 200 },
  puranas: { motif: 'lotus', hue: 140 },
  markandeya: { motif: 'sun', hue: 38 },
  agamas: { motif: 'trident', hue: 205 },
  'tamil-bhakti': { motif: 'strings', hue: 172 },
  bhagavata: { motif: 'flute', hue: 232 },
  ramcharitmanas: { motif: 'bow', hue: 160 },
};
