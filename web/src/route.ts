import { useEffect, useState } from 'react';

// Hash routes work on any static host: #/books, #/eras, #/atlas, #/god/indra. Anything else (#/, #vedic)
// belongs to the gods page, so in-page anchors keep working.
export type Route = 'gods' | 'books' | 'eras' | 'atlas' | 'god';
export type PageRoute = Exclude<Route, 'god'>;

export const PAGES: { route: PageRoute; href: string; label: string; blurb: string }[] = [
  { route: 'gods', href: '#/', label: 'Gods', blurb: 'Four chapters, 50 gods, and the book that defined each.' },
  { route: 'books', href: '#/books', label: 'Books', blurb: 'Every text in order, and what each says about the gods.' },
  { route: 'eras', href: '#/eras', label: 'Eras', blurb: 'Five thousand years of Hinduism, in nine steps.' },
  { route: 'atlas', href: '#/atlas', label: 'Atlas', blurb: 'Where each god appears, book group by book group.' },
];

export const godHref = (id: string) => `#/god/${id}`;

export interface Location { route: Route; godId: string | null }

function parse(): Location {
  const h = location.hash;
  if (h.startsWith('#/god/')) return { route: 'god', godId: decodeURIComponent(h.slice(6)) };
  if (h.startsWith('#/books')) return { route: 'books', godId: null };
  if (h.startsWith('#/eras')) return { route: 'eras', godId: null };
  if (h.startsWith('#/atlas')) return { route: 'atlas', godId: null };
  return { route: 'gods', godId: null };
}

export function useRoute(): Location {
  const [loc, setLoc] = useState<Location>(parse);
  useEffect(() => {
    const on = () => setLoc(parse());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return loc;
}
