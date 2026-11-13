import { GODS, GROUPS, STAGES, WEIGHT_LABEL } from '../gods';
import { GOD_CHAPTERS, GOD_ORDER, chapterOf } from '../story';
import { STORIES } from '../stories';
import { GOD_ART, accentOf, deepOf } from '../godArt';
import { godHref } from '../route';
import { useI18n } from '../i18n';
import Chapter from '../components/Chapter';
import GodArt, { PhotoArt } from '../components/GodArt';

/** One god, full screen: their artwork, a long explanation, and the books that define them. */
export default function GodPage({ id }: { id: string }) {
  const i18n = useI18n();
  const { t, lang } = i18n;
  const god = GODS.find((g) => g.id === id);
  if (!god) {
    return (
      <section className="chapter-intro notfound">
        <div>
          <h1>{t('god.none')}</h1>
          <p className="chapter-lede">{t('god.noneText', { name: id })}</p>
          <a className="cta" href="#/">{t('god.backAll')}</a>
        </div>
      </section>
    );
  }

  const art = GOD_ART[god.id] ?? { motif: 'bindu' as const, hue: 30 };
  const story = STORIES[god.id];
  const loc = i18n.god(god.id, god);
  const groupDef = GROUPS.find((g) => g.id === god.group);
  const group = groupDef ? i18n.group(groupDef.id, groupDef.label) : '';
  const chapterDef = GOD_CHAPTERS.find((c) => c.id === chapterOf(god));
  const chapterTitle = chapterDef ? i18n.chapter(chapterDef.id, { kicker: chapterDef.kicker, title: chapterDef.title, lede: chapterDef.lede }).title : '';
  const at = GOD_ORDER.findIndex((g) => g.id === god.id);
  const prev = at > 0 ? GOD_ORDER[at - 1] : null;
  const next = at >= 0 && at < GOD_ORDER.length - 1 ? GOD_ORDER[at + 1] : null;
  const baseName = loc.name.split(' (')[0].split('（')[0];
  const aka = loc.name.includes('(') ? loc.name.slice(loc.name.indexOf('(') + 1, loc.name.lastIndexOf(')')) : '';

  return (
    <Chapter
      id="god"
      kicker={`${group} · ${chapterTitle}`}
      title={baseName}
      lede={lang === 'en' ? story?.lead ?? god.summary : loc.summary}
      artNode={art.image ? <PhotoArt image={art.image} /> : <GodArt motif={art.motif} />}
      className={art.image ? 'figure-hero' : undefined}
      accent={accentOf(art.hue)}
      deep={deepOf(art.hue)}
      extra={
        <>
          {aka && <p className="aka">{aka}</p>}
          <p className="definedchip"><span>{t('god.definedIn')}</span> {loc.definedIn}</p>
        </>
      }
    >
      <div className="body-inner godbody">
        {lang !== 'en' && (
          <section className="panel notice" role="note"><p>{t('long.notice')}</p></section>
        )}

        <section className="panel prose" lang="en">
          <h2 lang={lang}>{t('god.who', { name: baseName })}</h2>
          {(story?.paragraphs ?? [god.summary]).map((p, i) => <p key={i}>{p}</p>)}
        </section>

        <section className="panel">
          <h2>{t('god.books')}</h2>
          <p className="note">{t('god.booksNote')}</p>
          <ol className="steps big">
            {god.steps.map((s, i) => {
              const stage = STAGES.find((x) => x.id === s.stage);
              return (
                <li key={i} className={`step w-${s.weight}`}>
                  <span className="step-dot" />
                  <div className="step-head">
                    <span className="step-stage">{stage ? i18n.stage(stage.id, stage).label : ''}</span>
                    <span className="step-weight">{i18n.weight(s.weight, WEIGHT_LABEL[s.weight])}</span>
                  </div>
                  <div className="step-book" lang="en">{s.book} <span className="step-years">{i18n.date(s.dates)}</span></div>
                  <div className="step-note" lang="en">{s.note}</div>
                </li>
              );
            })}
          </ol>
        </section>

        {story && (
          <section className="panel legend-story" lang="en">
            <p className="kicker small" lang={lang}>{t('god.story')}</p>
            <h2>{story.legend.title}</h2>
            <p className="dropcap">{story.legend.text}</p>
          </section>
        )}

        {story && (
          <div className="trio" lang="en">
            <section className="panel"><h3 lang={lang}>{t('god.symbols')}</h3><p>{story.symbols}</p></section>
            <section className="panel"><h3 lang={lang}>{t('god.worship')}</h3><p>{story.worship}</p></section>
            <section className="panel"><h3 lang={lang}>{t('god.views')}</h3><p>{story.views}</p></section>
          </div>
        )}

        <nav className="godnav" aria-label={t('god.other')}>
          {prev ? (
            <a href={godHref(prev.id)} className="godnav-link"><span>{t('god.prev')}</span><strong>{i18n.god(prev.id, prev).name}</strong></a>
          ) : <span />}
          <a href="#/" className="godnav-link center"><span>{t('god.all')}</span><strong>{t('god.backChapters')}</strong></a>
          {next ? (
            <a href={godHref(next.id)} className="godnav-link right"><span>{t('god.next')}</span><strong>{i18n.god(next.id, next).name}</strong></a>
          ) : <span />}
        </nav>
      </div>
    </Chapter>
  );
}
