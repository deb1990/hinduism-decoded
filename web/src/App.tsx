import { useEffect } from 'react';
import { useRoute, PAGES } from './route';
import { useScrollProgress } from './hooks';
import TopNav from './components/TopNav';
import GodsPage from './pages/GodsPage';
import BooksPage from './pages/BooksPage';
import ErasPage from './pages/ErasPage';
import AtlasPage from './pages/AtlasPage';

export default function App() {
  const route = useRoute();
  const progress = useScrollProgress();

  // On a page change, go to the top, or to the card or section named in the link (#god-indra, #vedic).
  useEffect(() => {
    const h = location.hash;
    if (!h || h.startsWith('#/')) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(h.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  }, [route]);

  useEffect(() => {
    const page = PAGES.find((p) => p.route === route);
    document.title = route === 'gods' ? 'Hinduism: the world’s oldest living religion, connected' : `${page?.label} · Hinduism decoded`;
  }, [route]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <TopNav route={route} />

      {route === 'gods' && <GodsPage />}
      {route === 'books' && <BooksPage />}
      {route === 'eras' && <ErasPage />}
      {route === 'atlas' && <AtlasPage />}

      <footer className="foot">
        <p>Dates are approximate and debated by scholars. Content is a first draft and has not yet been checked against sources.</p>
      </footer>
    </>
  );
}
