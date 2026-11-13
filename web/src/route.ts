import { useEffect, useState } from 'react';

// Hash routes work on any static host: #/books, #/eras, #/atlas. Anything else (#/, #vedic, #god-indra)
// belongs to the gods page, so card links and in-page anchors keep working from every page.
export type Route = 'gods' | 'books' | 'eras' | 'atlas';

export const PAGES: { route: Route; href: string; label: string; blurb: string }[] = [
  { route: 'gods', href: '#/', label: 'Gods', blurb: 'Four chapters, 50 gods, and the book that defined each.' },
  { route: 'books', href: '#/books', label: 'Books', blurb: 'Every text in order, and what each says about the gods.' },
  { route: 'eras', href: '#/eras', label: 'Eras', blurb: 'Five thousand years of Hinduism, in nine steps.' },
  { route: 'atlas', href: '#/atlas', label: 'Atlas', blurb: 'Where each god appears, book group by book group.' },
];

function parse(): Route {
  const h = location.hash;
  if (h.startsWith('#/books')) return 'books';
  if (h.startsWith('#/eras')) return 'eras';
  if (h.startsWith('#/atlas')) return 'atlas';
  return 'gods';
}

export function useRoute(): Route {
  const [route, setRoute] = useState<Route>(parse);
  useEffect(() => {
    const on = () => setRoute(parse());
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  return route;
}
