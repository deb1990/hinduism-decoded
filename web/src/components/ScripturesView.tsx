import { useState, type CSSProperties } from 'react';
import { KINDS, GOD_ROLES, SCRIPTURES, type Scripture, type KindId } from '../scriptures';
import { useReveal } from '../hooks';
import { bookHref } from '../route';

const AXIS_MIN = -1500;
const AXIS_MAX = 1600;
const pos = (y: number) => ((y - AXIS_MIN) / (AXIS_MAX - AXIS_MIN)) * 100;
const TICKS = [-1500, -1000, -500, 0, 500, 1000, 1500];
const tickLabel = (y: number) => (y < 0 ? `${-y} BCE` : y === 0 ? '1 CE' : `${y} CE`);

// Answer to "which book defined the gods", in order.
const STEPS = [
  { n: '1', title: 'Vedas', text: 'Name the earliest gods: Indra, Agni, Varuna, Soma.' },
  { n: '2', title: 'Upanishads', text: 'Shift from many gods to one ultimate reality, Brahman.' },
  { n: '3', title: 'Epics', text: 'Make Rama and Krishna avatars of Vishnu; Krishna speaks the Gita.' },
  { n: '4', title: 'Puranas', text: 'Fix the gods as most Hindus know them, with the Goddess made supreme in the Devi Mahatmya.' },
];

// Broad ages, shaded behind the bars to give the dates some context. The boundaries are approximate.
const AGES = [
  { from: -1500, to: -500, label: 'Vedic age' },
  { from: -500, to: 500, label: 'Epic and classical age' },
  { from: 500, to: 1600, label: 'Medieval devotion' },
];

function Overview({ items }: { items: Scripture[] }) {
  const [ref, shown] = useReveal<HTMLDivElement>(0.12);
  return (
    <section className="overview" aria-label="When each text was composed">
      <h2>When each text was composed</h2>
      <p className="note">
        Each bar is a book’s scholarly date range, drawn to scale. Faded ends mean the dates are uncertain. Click a row to open the book.
      </p>
      <div className="tl-legend">
        {KINDS.map((k) => <span key={k.id}><i className={`tl-key kind-${k.id}`} /> {k.label}</span>)}
      </div>

      <div className="tl-scroll">
        <div ref={ref} className={`tl${shown ? ' in' : ''}`}>
          <div className="tl-head">
            <span />
            <div className="tl-axis">
              {AGES.map((a) => (
                <span key={a.label} className="tl-age" style={{ left: `${pos(a.from)}%`, width: `${pos(a.to) - pos(a.from)}%` }}>{a.label}</span>
              ))}
              {TICKS.map((t) => (
                <span key={t} className="tl-tick" style={{ left: `${pos(t)}%` }}>{tickLabel(t)}</span>
              ))}
            </div>
          </div>

          <div className="tl-rows">
            <div className="tl-grid" aria-hidden="true">
              {AGES.map((a, i) => (
                <span key={a.label} className={`tl-band b${i}`} style={{ left: `${pos(a.from)}%`, width: `${pos(a.to) - pos(a.from)}%` }} />
              ))}
              {TICKS.map((t) => <span key={t} className="tl-line" style={{ left: `${pos(t)}%` }} />)}
            </div>

            {items.map((s, i) => {
              const left = pos(s.start);
              const w = Math.max(pos(s.end) - pos(s.start), 0.6);
              const point = s.end - s.start < 40;
              const inside = !point && w > 14;
              const labelLeft = left + w > 76;
              return (
                <a key={s.id} href={bookHref(s.id)} className="tl-row" style={{ '--i': i } as CSSProperties}>
                  <span className="tl-name">{s.name}</span>
                  <span className="tl-track">
                    {point ? (
                      <i className={`tl-dot kind-${s.kind}`} style={{ left: `${left}%` }} />
                    ) : (
                      <span className={`tl-bar kind-${s.kind}`} style={{ left: `${left}%`, width: `${w}%` }}>
                        {inside && <em>{s.dates}</em>}
                      </span>
                    )}
                    {!inside && (
                      <em
                        className="tl-out"
                        style={labelLeft ? { right: `calc(${100 - left}% + 10px)` } : { left: `calc(${left + w}% + 10px)` }}
                      >
                        {s.dates}
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
  return (
    <section className="godspath" aria-label="Which texts defined the gods">
      <h2>Which book defined the gods?</h2>
      <p>
        No single book did. The idea of the gods was built up in layers, and the Puranas gave
        them the shape most Hindus know today.
      </p>
      <ol>
        {STEPS.map((s) => (
          <li key={s.n}>
            <span className="step-n">{s.n}</span>
            <div><strong>{s.title}.</strong> {s.text}</div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function ScriptureCard({ s, index }: { s: Scripture; index: number }) {
  const [ref, shown] = useReveal<HTMLElement>();
  return (
    <section id={s.id} ref={ref} className={`era${shown ? ' in' : ''}`}>
      <span className="dot" />
      <span className="date">{s.dates}</span>
      <article className="card book-card">
        <div className="when">{s.dates}</div>
        <div className="meta">
          <span className="order">#{index + 1}</span>
          <span className={`kind kind-${s.kind}`}>{KINDS.find((k) => k.id === s.kind)?.label}</span>
        </div>
        <h2><a className="cardlink" href={bookHref(s.id)}>{s.name}</a></h2>
        <p>{s.summary}</p>
        <div className="block">
          <h3>What it provides</h3>
          <p>{s.provides}</p>
        </div>
        <div className={`block gods role-${s.godsRole}`}>
          <h3>On the gods <span className="role">{GOD_ROLES[s.godsRole]}</span></h3>
          <p>{s.gods}</p>
        </div>
        <ul className="chips">
          {s.contents.map((c) => <li key={c}>{c}</li>)}
        </ul>
      </article>
    </section>
  );
}

export default function ScripturesView() {
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

      <nav className="rail" aria-label="Filter by kind of text">
        <button className={kind === 'all' ? 'pill active' : 'pill'} onClick={() => setKind('all')}>All, in order</button>
        {KINDS.map((k) => (
          <button key={k.id} className={kind === k.id ? 'pill active' : 'pill'} onClick={() => setKind(k.id)}>
            {k.label}
          </button>
        ))}
      </nav>

      <main className="timeline" aria-label="Timeline of scriptures">
        {items.map((s) => <ScriptureCard key={s.id} s={s} index={order(s)} />)}
      </main>
    </>
  );
}
