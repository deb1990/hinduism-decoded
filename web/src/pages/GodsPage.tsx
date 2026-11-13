import type { CSSProperties } from 'react';
import { CHARTS } from '../charts';
import { GOD_CHAPTERS, godsFor, type ChapterDef } from '../story';
import { useActiveSection, useParallax } from '../hooks';
import { useI18n } from '../i18n';
import type { UiKey } from '../i18n/en';
import Art from '../components/Art';
import Chapter from '../components/Chapter';
import PageLinks from '../components/PageLinks';
import { ChartPanel } from '../components/GodsCharts';
import GodTile from '../components/GodTile';
import { Matrix } from '../components/GodsView';

const NAV: { id: string; key: UiKey }[] = [
  { id: 'top', key: 'side.start' },
  { id: 'vedic', key: 'side.vedic' },
  { id: 'upanishads', key: 'side.upanishads' },
  { id: 'puranic', key: 'side.puranic' },
  { id: 'shakta', key: 'side.shakta' },
  { id: 'atlas', key: 'side.atlas' },
];
const NAV_IDS = NAV.map((n) => n.id);

function Landing() {
  const { t } = useI18n();
  const ref = useParallax<HTMLElement>();
  return (
    <section id="top" ref={ref} className="landing" style={{ '--a': '#ff9a3c' } as CSSProperties}>
      <Art kind="lotus" />
      <div className="landing-inner">
        <h1>
          <span className="word">
            {t('brand.name')}<sup className="power">{t('brand.decoded')}</sup>
          </span>
        </h1>
        <p className="tagline">
          {t('landing.tagline1')}<br />{t('landing.tagline2')}
        </p>
        <p className="landing-lede">{t('landing.lede')}</p>
        <a className="cta" href="#vedic">{t('landing.cta')}</a>
      </div>
      <span className="scroll-hint" aria-hidden="true" />
    </section>
  );
}

function GodChapter({ def }: { def: ChapterDef }) {
  const { t, chapter } = useI18n();
  const chart = CHARTS.find((c) => c.id === def.chartId);
  const gods = godsFor(def.id);
  const c = chapter(def.id, { kicker: def.kicker, title: def.title, lede: def.lede });
  return (
    <Chapter id={def.id} kicker={c.kicker} title={c.title} lede={c.lede} art={def.art} accent={def.accent} deep={def.deep}>
      <div className="body-inner">
        {chart && <ChartPanel chart={chart} />}
        <h3 className="cards-title">{t('gods.inChapter')}</h3>
        <p className="note">{t('gods.openHint')}</p>
        <div className="tiles">
          {gods.map((g) => <GodTile key={g.id} god={g} />)}
        </div>
      </div>
    </Chapter>
  );
}

function SideNav() {
  const { t } = useI18n();
  const active = useActiveSection(NAV_IDS);
  return (
    <nav className="sidenav" aria-label={t('nav.sections')}>
      {NAV.map((n) => (
        <a key={n.id} href={`#${n.id}`} className={n.id === active ? 'active' : undefined} aria-label={t(n.key)}>
          <span>{t(n.key)}</span>
        </a>
      ))}
    </nav>
  );
}

export default function GodsPage() {
  const { t } = useI18n();
  return (
    <>
      <SideNav />
      <Landing />
      {GOD_CHAPTERS.map((def) => <GodChapter key={def.id} def={def} />)}

      <Chapter
        id="atlas" art="lotus" accent="#4cc3d9" deep="#04131a"
        kicker={t('atlas.kicker')} title={t('atlas.title')}
        lede={t('atlas.lede')}
      >
        <div className="body-inner">
          <Matrix />
        </div>
      </Chapter>
      <PageLinks current="gods" />
    </>
  );
}
