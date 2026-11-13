import { useState } from 'react';
import type { Era } from '../data';
import { useReveal } from '../hooks';

function Facet({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="facet">
      <h3>{title}</h3>
      <ul className="chips">
        {items.map((t) => <li key={t}>{t}</li>)}
      </ul>
    </div>
  );
}

export default function EraCard({ era }: { era: Era }) {
  const [open, setOpen] = useState(false);
  const [ref, shown] = useReveal<HTMLElement>();
  const panelId = `d-${era.id}`;

  return (
    <section id={era.id} ref={ref} className={`era${shown ? ' in' : ''}`}>
      <span className="dot" />
      <span className="date">{era.dates}</span>

      <article className="card">
        <div className="when">{era.dates}</div>
        <h2>{era.name}</h2>
        <p>{era.summary}</p>

        <button
          type="button"
          className="more"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          Texts, ideas and people <span className="chev">▾</span>
        </button>

        <div id={panelId} className={`detail${open ? ' open' : ''}`}>
          <div>
            <div className="facets">
              <Facet title="Key texts" items={era.texts} />
              <Facet title="Ideas" items={era.ideas} />
              <Facet title="People" items={era.figures} />
              <div className="conf">
                <span className={`badge ${era.confidence.level}`}>
                  {era.confidence.level} confidence
                </span>
                <span>{era.confidence.note}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
