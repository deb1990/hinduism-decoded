import { useState } from 'react';
import type { Era } from '../data';
import { useReveal } from '../hooks';
import { useI18n } from '../i18n';

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
  const { t, era: tr, date } = useI18n();
  const [open, setOpen] = useState(false);
  const [ref, shown] = useReveal<HTMLElement>();
  const panelId = `d-${era.id}`;
  const loc = tr(era.id, { short: era.short, name: era.name, summary: era.summary, texts: era.texts, ideas: era.ideas, figures: era.figures, note: era.confidence.note });

  return (
    <section id={era.id} ref={ref} className={`era${shown ? ' in' : ''}`}>
      <span className="dot" />
      <span className="date">{date(era.dates)}</span>

      <article className="card">
        <div className="when">{date(era.dates)}</div>
        <h2>{loc.name}</h2>
        <p>{loc.summary}</p>

        <button
          type="button"
          className="more"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((o) => !o)}
        >
          {t('eras.more')} <span className="chev">▾</span>
        </button>

        <div id={panelId} className={`detail${open ? ' open' : ''}`}>
          <div>
            <div className="facets">
              <Facet title={t('eras.texts')} items={loc.texts} />
              <Facet title={t('eras.ideas')} items={loc.ideas} />
              <Facet title={t('eras.people')} items={loc.figures} />
              <div className="conf">
                <span className={`badge ${era.confidence.level}`}>
                  {t(`eras.conf.${era.confidence.level}` as 'eras.conf.High')}
                </span>
                <span>{loc.note}</span>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
