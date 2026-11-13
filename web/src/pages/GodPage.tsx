import { GODS, GROUPS, STAGES, WEIGHT_LABEL } from '../gods';
import { GOD_CHAPTERS, GOD_ORDER, chapterOf } from '../story';
import { STORIES } from '../stories';
import { GOD_ART, accentOf, deepOf } from '../godArt';
import { godHref } from '../route';
import Chapter from '../components/Chapter';
import GodArt from '../components/GodArt';

/** One god, full screen: their artwork, a long explanation, and the books that define them. */
export default function GodPage({ id }: { id: string }) {
  const god = GODS.find((g) => g.id === id);
  if (!god) {
    return (
      <section className="chapter-intro notfound">
        <div>
          <h1>No such god</h1>
          <p className="chapter-lede">There is no page for “{id}”.</p>
          <a className="cta" href="#/">Back to the gods</a>
        </div>
      </section>
    );
  }

  const art = GOD_ART[god.id] ?? { motif: 'bindu' as const, hue: 30 };
  const story = STORIES[god.id];
  const group = GROUPS.find((g) => g.id === god.group)?.label ?? '';
  const chapter = GOD_CHAPTERS.find((c) => c.id === chapterOf(god));
  const at = GOD_ORDER.findIndex((g) => g.id === god.id);
  const prev = at > 0 ? GOD_ORDER[at - 1] : null;
  const next = at >= 0 && at < GOD_ORDER.length - 1 ? GOD_ORDER[at + 1] : null;

  return (
    <Chapter
      id="god"
      kicker={`${group} · ${chapter?.title ?? ''}`}
      title={god.name}
      lede={story?.lead ?? god.summary}
      artNode={<GodArt motif={art.motif} />}
      accent={accentOf(art.hue)}
      deep={deepOf(art.hue)}
      extra={<p className="definedchip"><span>Defined in</span> {god.definedIn}</p>}
    >
      <div className="body-inner godbody">
        <section className="panel prose">
          <h2>Who is {god.name.split(' (')[0]}?</h2>
          {(story?.paragraphs ?? [god.summary]).map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <section className="panel">
          <h2>In the books, in order</h2>
          <p className="note">Each step is a book group, in the order the texts were composed. The large dot marks where the god is defined.</p>
          <ol className="steps big">
            {god.steps.map((s, i) => {
              const stage = STAGES.find((x) => x.id === s.stage);
              return (
                <li key={i} className={`step w-${s.weight}`}>
                  <span className="step-dot" />
                  <div className="step-head">
                    <span className="step-stage">{stage?.label}</span>
                    <span className="step-weight">{WEIGHT_LABEL[s.weight]}</span>
                  </div>
                  <div className="step-book">{s.book} <span className="step-years">{s.dates}</span></div>
                  <div className="step-note">{s.note}</div>
                </li>
              );
            })}
          </ol>
        </section>

        {story && (
          <section className="panel legend-story">
            <p className="kicker small">A story</p>
            <h2>{story.legend.title}</h2>
            <p className="dropcap">{story.legend.text}</p>
          </section>
        )}

        {story && (
          <div className="trio">
            <section className="panel"><h3>Symbols and form</h3><p>{story.symbols}</p></section>
            <section className="panel"><h3>Worship and festivals</h3><p>{story.worship}</p></section>
            <section className="panel"><h3>Views and variations</h3><p>{story.views}</p></section>
          </div>
        )}

        <nav className="godnav" aria-label="Other gods">
          {prev ? (
            <a href={godHref(prev.id)} className="godnav-link"><span>Previous</span><strong>{prev.name}</strong></a>
          ) : <span />}
          <a href="#/" className="godnav-link center"><span>All gods</span><strong>Back to the chapters</strong></a>
          {next ? (
            <a href={godHref(next.id)} className="godnav-link right"><span>Next</span><strong>{next.name}</strong></a>
          ) : <span />}
        </nav>
      </div>
    </Chapter>
  );
}
