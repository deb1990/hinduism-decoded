import { useEffect, useRef, useState, type RefObject } from 'react';

// Theme: follows the system until the user toggles; remembered when storage works.
export type Theme = 'light' | 'dark';

export function useTheme(): [Theme | null, () => void] {
  const [theme, setTheme] = useState<Theme | null>(() => {
    try { return localStorage.getItem('theme') as Theme | null; } catch { return null; }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme) root.dataset.theme = theme;
    else delete root.dataset.theme;
  }, [theme]);

  const toggle = () => {
    const dark = theme
      ? theme === 'dark'
      : window.matchMedia('(prefers-color-scheme: dark)').matches;
    const next: Theme = dark ? 'light' : 'dark';
    setTheme(next);
    try { localStorage.setItem('theme', next); } catch { /* storage unavailable */ }
  };

  return [theme, toggle];
}

// Page scroll as 0..100.
export function useScrollProgress(): number {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);
  return pct;
}

// True once the element has entered the viewport (then stays true).
export function useReveal<T extends HTMLElement>(threshold = 0.15): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold });
    io.observe(node);
    return () => io.disconnect();
  }, [shown, threshold]);
  return [ref, shown];
}

// Id of the section currently crossing the middle of the viewport.
export function useActiveSection(ids: string[]): string | null {
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-35% 0px -55% 0px' });
    ids.forEach((id) => {
      const n = document.getElementById(id);
      if (n) io.observe(n);
    });
    return () => io.disconnect();
  }, [ids]);
  return active;
}
