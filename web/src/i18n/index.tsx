import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { UI_EN, type UiKey } from './en';
import type { Lang, Overlay } from './types';
import { HI } from './hi';
import { BN } from './bn';

export { LANGS, type Lang } from './types';

const OVERLAYS: Record<Lang, Overlay | null> = { en: null, hi: HI, bn: BN };

function initial(): Lang {
  try {
    const saved = localStorage.getItem('lang');
    if (saved === 'en' || saved === 'hi' || saved === 'bn') return saved;
  } catch { /* storage unavailable */ }
  const nav = (navigator.language || 'en').toLowerCase();
  if (nav.startsWith('hi')) return 'hi';
  if (nav.startsWith('bn')) return 'bn';
  return 'en';
}

export interface I18n {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** An interface string, with {name}-style fill-ins. */
  t: (key: UiKey, vars?: Record<string, string | number>) => string;
  /** Turn an English date string such as "c. 1500–1000 BCE" into this language. */
  date: (s: string) => string;
  group: (id: string, en: string) => string;
  stage: (id: string, en: { label: string; sub: string }) => { label: string; sub: string };
  kind: (id: string, en: string) => string;
  weight: (id: string, en: string) => string;
  role: (id: string, en: string) => string;
  page: (id: string, en: { label: string; blurb: string }) => { label: string; blurb: string };
  chapter: (id: string, en: { kicker: string; title: string; lede: string }) => { kicker: string; title: string; lede: string };
  chart: (id: string, en: { tab: string; title: string; period: string; concept: string }) => { tab: string; title: string; period: string; concept: string };
  node: (id: string, en: { label: string; sub?: string }) => { label: string; sub?: string };
  member: (nodeId: string, en: string) => string;
  godsPath: (en: { title: string; intro: string; steps: { title: string; text: string }[] }) => { title: string; intro: string; steps: { title: string; text: string }[] };
  god: (id: string, en: { name: string; summary: string; definedIn: string }) => { name: string; summary: string; definedIn: string };
  book: (id: string, en: { name: string; summary: string; provides: string; gods: string; contents: string[] }) => { name: string; summary: string; provides: string; gods: string; contents: string[] };
  era: (id: string, en: { short: string; name: string; summary: string; texts: string[]; ideas: string[]; figures: string[]; note: string }) => { short: string; name: string; summary: string; texts: string[]; ideas: string[]; figures: string[]; note: string };
}

const Ctx = createContext<I18n | null>(null);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initial);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem('lang', lang); } catch { /* storage unavailable */ }
  }, [lang]);

  const value = useMemo<I18n>(() => {
    const ov = OVERLAYS[lang];
    const fill = (s: string, vars?: Record<string, string | number>) =>
      vars ? s.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m)) : s;
    return {
      lang,
      setLang: setLangState,
      t: (key, vars) => fill(ov?.ui[key] ?? UI_EN[key], vars),
      date: (s) => (ov ? ov.dates.reduce((acc, [from, to]) => acc.split(from).join(to), s) : s),
      group: (id, en) => ov?.groups[id] ?? en,
      stage: (id, en) => ov?.stages[id] ?? en,
      kind: (id, en) => ov?.kinds[id] ?? en,
      weight: (id, en) => ov?.weights[id] ?? en,
      role: (id, en) => ov?.roles[id] ?? en,
      page: (id, en) => ov?.pages[id] ?? en,
      chapter: (id, en) => ov?.chapters[id] ?? en,
      chart: (id, en) => ov?.charts[id] ?? en,
      node: (id, en) => {
        const n = ov?.nodes[id];
        return { label: n?.label ?? en.label, sub: n?.sub ?? en.sub };
      },
      member: (nodeId, en) => ov?.nodes[nodeId]?.members?.[en] ?? en,
      godsPath: (en) => ov?.godspath ?? en,
      god: (id, en) => ov?.gods[id] ?? en,
      book: (id, en) => ov?.books[id] ?? en,
      era: (id, en) => ov?.eras[id] ?? en,
    };
  }, [lang]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useI18n(): I18n {
  const v = useContext(Ctx);
  if (!v) throw new Error('useI18n must be used inside LangProvider');
  return v;
}
