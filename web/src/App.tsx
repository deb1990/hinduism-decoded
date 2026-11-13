import type { CSSProperties } from 'react';
import { ERAS } from './data';
import { CHARTS } from './charts';
import { GOD_CHAPTERS, godsFor, type ChapterDef } from './story';
import { useActiveSection, useParallax, useScrollProgress } from './hooks';
import Art from './components/Art';
import Chapter from './components/Chapter';
import EraRail from './components/EraRail';
import EraCard from './components/EraCard';
import ScripturesView from './components/ScripturesView';
import { ChartPanel } from './components/GodsCharts';
import { GodCard, Matrix } from './components/GodsView';

const ERA_IDS = ERAS.map((e) => e.id);

const NAV = [
  { id: 'top', label: 'Start' },
  { id: 'vedic', label: 'Vedic gods' },
  { id: 'upanishads', label: 'Upanishads' },
  { id: 'puranic', label: 'Epics and Puranas' },
  { id: 'shakta', label: 'The Goddess' },
  { id: 'books', label: 'The books' },
  { id: 'eras', label: 'The eras' },
  { id: 'atlas', label: 'Atlas' },
];
const NAV_IDS = NAV.map((n) => n.id);

function Landing() {
  const ref = useParallax<HTMLElement>();
  return (
    <section id="top" ref={ref} className="landing" style={{ '--a': '#ff9a3c' } as CSSProperties}>
      <Art kind="lotus" />
      <div className="landing-inner">
        <h1>
          <span className="word">
            Hinduism<sup className="power">decoded</sup>
          </span>
        </h1>
        <p className="tagline">
          The world’s oldest living religion,<br />and one of the most misunderstood
        </p>
        <p className="landing-lede">
          Hinduism is often described as the oldest religion still practised. It has no single founder, book or church,
          so it looks fragmented and is easy to misread. This is an attempt to connect the dots: which book defined
          which god, and when.
        </p>
        <a className="cta" href="#vedic">Begin the story</a>
      </div>
      <span className="scroll-hint" aria-hidden="true" />
    </section>
  );
}

function GodChapter({ def }: { def: ChapterDef }) {
  const chart = CHARTS.find((c) => c.id === def.chartId);
  const gods = godsFor(def.id);
  return (
    <Chapter id={def.id} kicker={def.kicker} title={def.title} lede={def.lede} art={def.art} accent={def.accent} deep={def.deep}>
      <div className="body-inner">
        {chart && <ChartPanel chart={chart} />}
        <h3 className="cards-title">The gods in this chapter</h3>
        <div className="gods-grid">
          {gods.map((g) => <GodCard key={g.id} god={g} />)}
        </div>
      </div>
    </Chapter>
  );
}

function ErasTimeline() {
  const activeId = useActiveSection(ERA_IDS);
  return (
    <>
      <EraRail eras={ERAS} activeId={activeId} />
      <div className="timeline" aria-label="Timeline of Hinduism">
        {ERAS.map((era) => <EraCard key={era.id} era={era} />)}
      </div>
    </>
  );
}

function SideNav() {
  const active = useActiveSection(NAV_IDS);
  return (
    <nav className="sidenav" aria-label="Sections">
      {NAV.map((n) => (
        <a key={n.id} href={`#${n.id}`} className={n.id === active ? 'active' : undefined} aria-label={n.label}>
          <span>{n.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default function App() {
  const progress = useScrollProgress();

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <SideNav />

      <Landing />

      {GOD_CHAPTERS.map((def) => <GodChapter key={def.id} def={def} />)}

      <Chapter
        id="books" art="rays" accent="#7aa8ff" deep="#050b1a"
        kicker="The books" title="Every text, in order"
        lede="The main scriptures on one scale, with what each one gave and what it says about the gods."
      >
        <ScripturesView />
      </Chapter>

      <Chapter
        id="eras" art="rings" accent="#e8b07a" deep="#120d08"
        kicker="The eras" title="Five thousand years, in nine steps"
        lede="From the Indus Valley to today: the key texts, ideas and people of each era."
      >
        <ErasTimeline />
      </Chapter>

      <section id="atlas" className="atlas">
        <div className="body-inner">
          <Matrix />
        </div>
      </section>

      <footer className="foot">
        <p>Dates are approximate and debated by scholars. Content is a first draft and has not yet been checked against sources.</p>
      </footer>
    </>
  );
}
