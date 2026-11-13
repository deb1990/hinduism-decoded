import { PAGES, type PageRoute } from '../route';
import { useI18n } from '../i18n';

/** Links to the other pages, shown at the end of each page. */
export default function PageLinks({ current }: { current: PageRoute }) {
  const { t, page } = useI18n();
  return (
    <section className="pagelinks" aria-label={t('links.title')}>
      <h2>{t('links.title')}</h2>
      <div className="pagelinks-grid">
        {PAGES.filter((p) => p.route !== current).map((p) => {
          const loc = page(p.route, p);
          return (
            <a key={p.route} href={p.href} className="pagelink">
              <span className="pagelink-label">{loc.label}</span>
              <span className="pagelink-blurb">{loc.blurb}</span>
              <span className="pagelink-arrow" aria-hidden="true">→</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}
