import { GODS, GROUPS } from '../gods';
import { KINDS, SCRIPTURES, GOD_ROLES } from '../scriptures';
import { BOOKS, BOOK_ART } from '../bookDetails';
import { accentOf, deepOf } from '../godArt';
import { bookHref, godHref } from '../route';
import { useI18n } from '../i18n';
import Chapter from '../components/Chapter';
import GodArt from '../components/GodArt';

/** One book, full screen: its artwork, then the facts and long point-by-point sections. */
export default function BookPage({ id }: { id: string }) {
  const i18n = useI18n();
  const { t, lang, date } = i18n;
  const book = SCRIPTURES.find((b) => b.id === id);
  const detail = BOOKS[id];
  if (!book) {
    return (
      <section className="chapter-intro notfound">
        <div>
          <h1>{t('book.none')}</h1>
          <p className="chapter-lede">{t('god.noneText', { name: id })}</p>
          <a className="cta" href="#/books">{t('book.back')}</a>
        </div>
      </section>
    );
  }

  const loc = i18n.book(book.id, book);
  const art = BOOK_ART[id] ?? { motif: 'bindu' as const, hue: 30 };
  const kind = i18n.kind(book.kind, KINDS.find((k) => k.id === book.kind)?.label ?? '');
  const at = SCRIPTURES.findIndex((b) => b.id === id);
  const prev = at > 0 ? SCRIPTURES[at - 1] : null;
  const next = at < SCRIPTURES.length - 1 ? SCRIPTURES[at + 1] : null;
  const gods = (detail?.gods ?? []).map((gid) => GODS.find((g) => g.id === gid)).filter((g) => g !== undefined);

  return (
    <Chapter
      id="book"
      kicker={`${kind} · ${date(book.dates)}`}
      title={loc.name}
      lede={loc.summary}
      artNode={<GodArt motif={art.motif} />}
      accent={accentOf(art.hue)}
      deep={deepOf(art.hue)}
      extra={<p className="definedchip"><span>{t('book.order')}</span> {t('book.orderValue', { n: at + 1, total: SCRIPTURES.length })}</p>}
    >
      <div className="body-inner godbody">
        {lang !== 'en' && (
          <section className="panel notice" role="note"><p>{t('long.notice')}</p></section>
        )}

        <section className="panel">
          <h2>{t('book.short')}</h2>
          <ul className="points">
            <li><strong>{t('book.provides')}</strong> {loc.provides}</li>
            <li>
              <strong>{t('book.onGods')}</strong> <span className="rolechip">{i18n.role(book.godsRole, GOD_ROLES[book.godsRole])}</span> {loc.gods}
            </li>
          </ul>
        </section>

        {detail && (
          <section className="panel" lang="en">
            <h2 lang={lang}>{t('book.glance')}</h2>
            <dl className="glance">
              {detail.glance.map((g) => (
                <div key={g.label}>
                  <dt>{g.label}</dt>
                  <dd>{g.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        )}

        {detail?.sections.map((s) => (
          <section className="panel" key={s.title} lang="en">
            <h2>{s.title}</h2>
            <ul className="points">
              {s.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </section>
        ))}

        {gods.length > 0 && (
          <section className="panel">
            <h2>{t('book.godsTitle')}</h2>
            <p className="note">{t('book.godsNote')}</p>
            <div className="godchips">
              {gods.map((g) => {
                const gl = i18n.god(g.id, g);
                const gd = GROUPS.find((x) => x.id === g.group);
                return (
                  <a key={g.id} className="godchip" href={godHref(g.id)}>
                    <span>{gl.name.split(' (')[0]}</span>
                    <small>{gd ? i18n.group(gd.id, gd.label) : ''}</small>
                  </a>
                );
              })}
            </div>
          </section>
        )}

        <nav className="godnav" aria-label={t('book.other')}>
          {prev ? (
            <a href={bookHref(prev.id)} className="godnav-link"><span>{t('book.earlier')}</span><strong>{i18n.book(prev.id, prev).name}</strong></a>
          ) : <span />}
          <a href="#/books" className="godnav-link center"><span>{t('book.all')}</span><strong>{t('book.back')}</strong></a>
          {next ? (
            <a href={bookHref(next.id)} className="godnav-link right"><span>{t('book.later')}</span><strong>{i18n.book(next.id, next).name}</strong></a>
          ) : <span />}
        </nav>
      </div>
    </Chapter>
  );
}
