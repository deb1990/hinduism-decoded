import { useState, type CSSProperties } from 'react';
import { KINDS, GOD_ROLES, SCRIPTURES, type Scripture, type KindId } from '../scriptures';
import { useReveal } from '../hooks';
import { bookHref } from '../route';
import { useI18n } from '../i18n';

const AXIS_MIN = -1500;
const AXIS_MAX = 1600;
const pos = (y: number) => ((y - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100;
const TICKS = [-1500, -1000, -500, 0, 500, 1000, 1500];
const tickLabel = (y: number) => (y < 0 ? `${-y} BCE` : y === 0 ? '1 CE' : `${y} CE`);

// Answer to "which book defined the gods", in order.
const GODS_PATH_EN = {
  title: 'Which book defined the gods?',
  intro: 'No single book did. The idea of the gods was built up in layers, and the Puranas gave them the shape most Hindus know today.',
  steps: [
    { title: 'Vedas', text: 'Name the earliest gods: Indra, Agni, Varuna, Soma.' },
    { title: 'Upanishads', text: 'Shift from many gods to one ultimate reality, Brahman.' },
    { title: 'Epics', text: 'Make Rama and Krishna avatars of Vishnu; Krishna speaks the Gita.' },
    { title: 'Puranas', text: 'Fix the gods as most Hindus know them, with the Goddess made supreme in the Devi Mahatmya.' },
  ],
};

// Broad ages, shaded behind the bars to give the dates some context. The boundaries are approximate.
const AGES = [
  { from: -1500, to: -500, key: 'books.age.vedic' as const },
  { from: -500, to: 500, key: 'books.age.epic' as const },
  { from: 500, to: 1600, key: 'books.age.medieval' as const },
];

function Overview({ items }: { items: Scripture[] }) {
  const i18n = useI18n();
  const { t, date } = i18n;
  const [ref, shown] = useReveal<HTMLDivElement>(0.12);
  return (
    <section className="overview" aria-label={t('books.when')}>
      <h2>{t('books.when')}</h2>
      <p className="note">{t('books.whenNote')}</p>
      <div className="tl-legend">
        {KINDS.map((k) => <span key={k.id}><i className={`tl-key kind-${k.id}`} /> {i18n.kind(k.id, k.label)}</span>)}
      </div>

      <div className="tl-scroll">
        <div ref={ref} className={`tl${shown ? ' in' : ''}`}>
          <div className="tl-head">
            <span />
            <div className="tl-axis">
              {AGES.map((a) => (
                <span key={a.key} className="tl-age" style={{ left: `${pos(a.from)}%`, width: `${pos(a.to) - pos(a.from)}%` }}>{t(a.key)}</span>
              ))}
              {TICKS.map((tk) => (
                <span key={tk} className="tl-tick" style={{ left: `${pos(tk)}%` }}>{date(tickLabel(tk))}</span>
              ))}
            </div>
          </div>

          <div className="tl-rows">
            <div className="tl-grid" aria-hidden="true">
              {AGES.map((a, i) => (
                <span key={a.key} className={`tl-band b${i}`} style={{ left: `${pos(a.from)}%`, width: `${pos(a.to) - pos(a.from)}%` }} />
              ))}
              {TICKS.map((tk) => <span key={tk} className="tl-line" style={{ left: `${pos(tk)}%` }} />)}
            </div>

            {items.map((s, i) => {
              const left = pos(s.start);
              const w = Math.max(pos(s.end) - pos(s.start), 0.6);
              const point = s.end - s.start < 40;
              const inside = !point && w > 14;
              const labelLeft = left + w > 76;
              return (
                <a key={s.id} href={bookHref(s.id)} className="tl-row" style={{ '--i': i } as CSSProperties}>
                  <span className="tl-name">{i18n.book(s.id, s).name}</span>
                  <span className="tl-track">
                    {point ? (
                      <i className={`tl-dot kind-${s.kind}`} style={{ left: `${left}%` }} />
                    ) : (
                      <span className={`tl-bar kind-${s.kind}`} style={{ left: `${left}%`, width: `${w}%` }}>
                        {inside && <em>{date(s.dates)}</em>}
                      </span>
                    )}
                    {!inside && (
                      <em
                        className="tl-out"
                        style={labelLeft ? { right: `calc(${100 - left}% + 10px)` } : { left: `calc(${left + w}% + 10px)` }}
                      >
                        {date(s.dates)}
                      </em>
                    )}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function GodsPath() {
  const { godsPath } = useI18n();
  const p = godsPath(GODS_PATH_EN);
  return (
    <section className="godspath" aria-label={p.title}>
      <h2>{p.title}</h2>
      <p>{p.intro}</p>
      <ol>
        {p.steps.map((s, i) => (
          <li key={i}>
            <span className="step-n">{i + 1}</span>
            <div><strong>{s.title}.</strong> {s.text}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ScriptureCard({ s, index }: { s: Scripture; index: number }) {
  const i18n = useI18n();
  const { t, date } = i18n;
  const loc = i18n.book(s.id, s);
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <section id={s.id} ref={ref} className={`era${shown ? ' in' : ''}`}>
      <span className="dot" />
      <span className="date">{date(s.dates)}</span>
      <article className="card book-card">
        <div className="when">{date(s.dates)}</div>
        <div className="meta">
          <span className="order">#{index + 1}</span>
          <span className={`kind kind-${s.kind}`}>{i18n.kind(s.kind, KINDS.find((k) => k.id === s.kind)?.label ?? '')}</span>
        </div>
        <h2><a className="cardlink" href={bookHref(s.id)}>{loc.name}</a></h2>
        <p>{loc.summary}</p>
        <div className="block">
          <h3>{t('books.provides')}</h3>
          <p>{loc.provides}</p>
        </div>
        <div className={`block gods role-${s.godsRole}`}>
          <h3>{t('books.onGods')} <span className="role">{i18n.role(s.godsRole, GOD_ROLES[s.godsRole])}</span></h3>
          <p>{loc.gods}</p>
        </div>
        <ul className="chips">
          {loc.contents.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </article>
    </section>
  );
}

export default function ScripturesView() {
  const i18n = useI18n();
  const { t } = i18n;
  const [kind, setKind] = useState<KindId | 'all'>('all');
  const items = kind === 'all' ? SCRIPTURES : SCRIPTURES.filter((s) => s.kind === kind);
  // Order number stays tied to composition order, not to the filter.
  const order = (s: Scripture) => SCRIPTURES.indexOf(s);

  return (
    <>
      <div className="intro">
        <GodsPath />
        <Overview items={SCRIPTURES} />
      </div>

      <nav className="rail" aria-label={t('books.filter')}>
        <button className={kind === 'all' ? 'pill active' : 'pill'} onClick={() => setKind('all')}>{t('books.all')}</button>
        {KINDS.map((k) => (
          <button key={k.id} className={kind === k.id ? 'pill active' : 'pill'} onClick={() => setKind(k.id)}>
            {i18n.kind(k.id, k.label)}
          </button>
        ))}
      </nav>

      <main className="timeline" aria-label={t('books.timeline')}>
        {items.map((s) => <ScriptureCard key={s.id} s={s} index={order(s)} />)}
      </main>
    </>
  );
}
