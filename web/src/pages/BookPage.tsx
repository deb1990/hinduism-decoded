import { GODS, GROUPS } from '../gods';
import { KINDS, SCRIPTURES, GOD_ROLES } from '../scriptures';
import { BOOKS, BOOK_ART } from '../bookDetails';
import { accentOf, deepOf } from '../godArt';
import { bookHref, godHref } from '../route';
import Chapter from '../components/Chapter';
import GodArt from '../components/GodArt';

/** One book, full screen: its artwork, then the facts and long point-by-point sections. */
export default function BookPage({ id }: { id: string }) {
  const book = SCRIPTURES.find((b) => b.id === id);
  const detail = BOOKS[id];
  if (!book) {
    return (
      <section className="chapter-intro notfound">
        <div>
          <h1>No such book</h1>
          <p className="chapter-lede">There is no page for “{id}”.</p>
          <a className="cta" href="#/books">Back to the books</a>
        </div>
      </section>
    );
  }

  const art = BOOK_ART[id] ?? { motif: 'bindu' as const, hue: 30 };
  const kind = KINDS.find((k) => k.id === book.kind)?.label ?? '';
  const at = SCRIPTURES.findIndex((b) => b.id === id);
  const prev = at > 0 ? SCRIPTURES[at - 1] : null;
  const next = at < SCRIPTURES.length - 1 ? SCRIPTURES[at + 1] : null;
  const gods = (detail?.gods ?? []).map((gid) => GODS.find((g) => g.id === gid)).filter((g) => g !== undefined);

  return (
    <Chapter
      id="book"
      kicker={`${kind} · ${book.dates}`}
      title={book.name}
      lede={book.summary}
      artNode={<GodArt motif={art.motif} />}
      accent={accentOf(art.hue)}
      deep={deepOf(art.hue)}
      extra={<p className="definedchip"><span>Order</span> No. {at + 1} of {SCRIPTURES.length} in order of composition</p>}
    >
      <div className="body-inner godbody">
        <section className="panel">
          <h2>In short</h2>
          <ul className="points">
            <li><strong>What it provides.</strong> {book.provides}</li>
            <li>
              <strong>On the gods.</strong> <span className="rolechip">{GOD_ROLES[book.godsRole]}</span> {book.gods}
            </li>
          </ul>
        </section>

        {detail && (
          <section className="panel">
            <h2>At a glance</h2>
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
          <section className="panel" key={s.title}>
            <h2>{s.title}</h2>
            <ul className="points">
              {s.points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </section>
        ))}

        {gods.length > 0 && (
          <section className="panel">
            <h2>Gods this book speaks of</h2>
            <p className="note">Open a god to see every book that defines them, in order.</p>
            <div className="godchips">
              {gods.map((g) => (
                <a key={g.id} className="godchip" href={godHref(g.id)}>
                  <span>{g.name.split(' (')[0]}</span>
                  <small>{GROUPS.find((x) => x.id === g.group)?.label}</small>
                </a>
              ))}
            </div>
          </section>
        )}

        <nav className="godnav" aria-label="Other books">
          {prev ? (
            <a href={bookHref(prev.id)} className="godnav-link"><span>Earlier</span><strong>{prev.name}</strong></a>
          ) : <span />}
          <a href="#/books" className="godnav-link center"><span>All books</span><strong>Back to the books</strong></a>
          {next ? (
            <a href={bookHref(next.id)} className="godnav-link right"><span>Later</span><strong>{next.name}</strong></a>
          ) : <span />}
        </nav>
      </div>
    </Chapter>
  );
}
