import type { CSSProperties } from 'react';
import { CHARTS } from '../charts';
import { GOD_CHAPTERS, godsFor, type ChapterDef } from '../story';
import { useActiveSection, useParallax } from '../hooks';
import Art from '../components/Art';
import Chapter from '../components/Chapter';
import PageLinks from '../components/PageLinks';
import { ChartPanel } from '../components/GodsCharts';
import GodTile from '../components/GodTile';

const NAV = [
  { id: 'top', label: 'Start' },
  { id: 'vedic', label: 'Vedic gods' },
  { id: 'upanishads', label: 'Upanishads' },
  { id: 'puranic', label: 'Epics and Puranas' },
  { id: 'shakta', label: 'The Goddess' },
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
        <p className="note">Open a god for a full page: the long story, the books that define them, and how they are worshipped.</p>
        <div className="tiles">
          {gods.map((g) => <GodTile key={g.id} god={g} />)}
        </div>
      </div>
    </Chapter>
  );
}

function SideNav() {
  const active = useActiveSection(NAV_IDS);
  return (
    <nav className="sidenav" aria-label="Sections on this page">
      {NAV.map((n) => (
        <a key={n.id} href={`#${n.id}`} className={n.id === active ? 'active' : undefined} aria-label={n.label}>
          <span>{n.label}</span>
        </a>
      ))}
    </nav>
  );
}

export default function GodsPage() {
  return (
    <>
      <SideNav />
      <Landing />
      {GOD_CHAPTERS.map((def) => <GodChapter key={def.id} def={def} />)}
      <PageLinks current="gods" />
    </>
  );
}
