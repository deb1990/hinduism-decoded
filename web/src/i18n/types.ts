export type Lang = 'en' | 'hi' | 'bn';

export const LANGS: { id: Lang; label: string; name: string }[] = [
  { id: 'en', label: 'EN', name: 'English' },
  { id: 'hi', label: 'हिं', name: 'हिन्दी' },
  { id: 'bn', label: 'বাং', name: 'বাংলা' },
];

export interface NodeText {
  label?: string;
  sub?: string;
  members?: Record<string, string>; // keyed by the English member label
}

/** Everything translated into one language. English is the source, kept in the data files. */
export interface Overlay {
  ui: Record<string, string>;
  groups: Record<string, string>;
  stages: Record<string, { label: string; sub: string }>;
  kinds: Record<string, string>;
  weights: Record<string, string>;
  roles: Record<string, string>;
  pages: Record<string, { label: string; blurb: string }>;
  chapters: Record<string, { kicker: string; title: string; lede: string }>;
  charts: Record<string, { tab: string; title: string; period: string; concept: string }>;
  nodes: Record<string, NodeText>;
  godspath: { title: string; intro: string; steps: { title: string; text: string }[] };
  gods: Record<string, { name: string; summary: string; definedIn: string }>;
  books: Record<string, { name: string; summary: string; provides: string; gods: string; contents: string[] }>;
  eras: Record<string, { short: string; name: string; summary: string; texts: string[]; ideas: string[]; figures: string[]; note: string }>;
  /** Place names on the era maps, keyed by the English name. */
  places: Record<string, string>;
  /** Replacements applied in order to English date strings such as "c. 1500–1000 BCE". */
  dates: [string, string][];
}
