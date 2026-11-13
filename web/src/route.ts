import { useEffect, useState } from 'react';

// Hash routes work on any static host: #/books, #/eras, #/god/indra, #/book/rigveda. Anything else (#/, #vedic)
// belongs to the gods page, so in-page anchors keep working.
export type Route = 'gods' | 'books' | 'eras' | 'god' | 'book';
export type PageRoute = Exclude<Route, 'god' | 'book'>;

export const PAGES: { route: PageRoute; href: string; label: string; blurb: string }[] = [
  { route: 'gods', href: '#/', label: 'Gods', blurb: 'Four chapters, 50 gods, and the book that defined each.' },
  { route: 'books', href: '#/books', label: 'Books', blurb: 'Every text in order, and what each says about the gods.' },
  { route: 'eras', href: '#/eras', label: 'Eras', blurb: 'Five thousand years of Hinduism, in nine steps.' },
];

export const godHref = (id: string) => `#/god/${id}`;
export const bookHref = (id: string) => `#/book/${id}`;

export interface Location { route: Route; godId: string | null; bookId: string | null }

function parse(): Location {
  const h = location.hash;
  if (h.startsWith('#/god/')) return { route: 'god', godId: decodeURIComponent(h.slice(6)), bookId: null };
  if (h.startsWith('#/book/')) return { route: 'book', godId: null, bookId: decodeURIComponent(h.slice(7)) };
  if (h.startsWith('#/books')) return { route: 'books', godId: null, bookId: null };
  if (h.startsWith('#/eras')) return { route: 'eras', godId: null, bookId: null };
  return { route: 'gods', godId: null, bookId: null };
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
