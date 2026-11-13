import { PAGES, type Route } from '../route';
import { useI18n } from '../i18n';

export default function TopNav({ route }: { route: Route }) {
  const { t, page } = useI18n();
  const current = route === 'god' ? 'gods' : route === 'book' ? 'books' : route;
  return (
    <header className="topnav">
      <a className="brand" href="#/" aria-label={`${t('brand.name')} ${t('brand.decoded')}`}>
        {t('brand.name')}<sup>{t('brand.decoded')}</sup>
      </a>
      <nav aria-label={t('nav.aria')}>
        {PAGES.map((p) => (
          <a key={p.route} href={p.href} className={p.route === current ? 'active' : undefined} aria-current={p.route === current ? 'page' : undefined}>
            {page(p.route, p).label}
          </a>
        ))}
      </nav>
    </header>
  );
}
