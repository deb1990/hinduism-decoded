import type { Era } from '../data';
import { useReveal } from '../hooks';
import { useI18n } from '../i18n';
import EraMap from './EraMap';

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
  const [ref, shown] = useReveal<HTMLElement>();
  const loc = tr(era.id, { short: era.short, name: era.name, summary: era.summary, texts: era.texts, ideas: era.ideas, figures: era.figures, note: era.confidence.note });

  return (
    <section id={era.id} ref={ref} className={`era${shown ? ' in' : ''}`}>
      <span className="dot" />
      <span className="date">{date(era.dates)}</span>

      <article className="card">
        <div className="when">{date(era.dates)}</div>
        <h2>{loc.name}</h2>
        <p>{loc.summary}</p>

        <EraMap eraId={era.id} eraName={loc.name} />

        <div className="facets open">
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
      </article>
    </section>
  );
}
