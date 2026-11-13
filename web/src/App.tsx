import { useEffect } from 'react';
import { useRoute, PAGES } from './route';
import { useScrollProgress } from './hooks';
import TopNav from './components/TopNav';
import LangSwitch from './components/LangSwitch';
import GodsPage from './pages/GodsPage';
import BooksPage from './pages/BooksPage';
import ErasPage from './pages/ErasPage';
import GodPage from './pages/GodPage';
import BookPage from './pages/BookPage';
import { SCRIPTURES } from './scriptures';
import { useI18n } from './i18n';
import { GODS } from './gods';

export default function App() {
  const { route, godId, bookId } = useRoute();
  const i18n = useI18n();
  const progress = useScrollProgress();

  // On a page change, go to the top, or to the section named in the link (#vedic).
  useEffect(() => {
    const h = location.hash;
    if (h === '#/atlas') { location.replace('#atlas'); return; }
    if (!h || h.startsWith('#/')) {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
      return;
    }
    const id = decodeURIComponent(h.slice(1));
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
  }, [route, godId, bookId]);

  useEffect(() => {
    const { t, lang } = i18n;
    const page = PAGES.find((p) => p.route === route);
    const god = GODS.find((g) => g.id === godId);
    const book = SCRIPTURES.find((b) => b.id === bookId);
    const suffix = t('title.suffix');
    document.title = route === 'gods'
      ? t('title.home')
      : route === 'god' ? `${god ? i18n.god(god.id, god).name : 'God'} · ${suffix}`
      : route === 'book' ? `${book ? i18n.book(book.id, book).name : 'Book'} · ${suffix}`
      : `${page ? i18n.page(page.route, page).label : ''} · ${suffix}`;
    void lang;
  }, [route, godId, bookId, i18n]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <TopNav route={route} />
      <LangSwitch />

      {route === 'gods' && <GodsPage />}
      {route === 'books' && <BooksPage />}
      {route === 'eras' && <ErasPage />}
      {route === 'god' && godId && <GodPage key={godId} id={godId} />}
      {route === 'book' && bookId && <BookPage key={bookId} id={bookId} />}

      <footer className="foot">
        <p>{i18n.t('footer')}</p>
      </footer>
    </>
  );
}
