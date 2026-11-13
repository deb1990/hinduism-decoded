import { useEffect, useState } from 'react';
import { ERAS } from './data';
import { useActiveSection, useScrollProgress, useTheme } from './hooks';
import EraRail from './components/EraRail';
import EraCard from './components/EraCard';
import ScripturesView from './components/ScripturesView';
import GodsView from './components/GodsView';

const IDS = ERAS.map((e) => e.id);
type TabId = 'gods' | 'scriptures' | 'eras';
const TABS: { id: TabId; label: string }[] = [
  { id: 'gods', label: 'The gods' },
  { id: 'scriptures', label: 'The scriptures' },
  { id: 'eras', label: 'Eras of history' },
];

function ErasView() {
  const activeId = useActiveSection(IDS);
  return (
    <>
      <EraRail eras={ERAS} activeId={activeId} />
      <main id="timeline" className="timeline" aria-label="Timeline of Hinduism">
        {ERAS.map((era) => <EraCard key={era.id} era={era} />)}
      </main>
    </>
  );
}

export default function App() {
  const [, toggleTheme] = useTheme();
  const progress = useScrollProgress();
  const [tab, setTab] = useState<TabId>(() => (location.hash === '#scriptures' ? 'scriptures' : location.hash === '#eras' ? 'eras' : 'gods'));

  useEffect(() => { history.replaceState(null, '', tab === 'gods' ? location.pathname : `#${tab}`); }, [tab]);

  return (
    <>
      <div className="progress" aria-hidden="true">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>

      <header className="hero">
        <button className="theme" onClick={toggleTheme} aria-label="Toggle dark mode" title="Toggle dark mode">
          ◐
        </button>
        <h1>
          <span className="word">
            Hinduism<sup className="power">decoded</sup>
          </span>
        </h1>
        <p className="tagline">The world’s oldest living religion,<br />and one of the most misunderstood</p>
        <p className="lede">
          Hinduism is often described as the oldest religion still practised. It has no single founder, book or church,
          so it looks fragmented and is easy to misread. This site is an attempt to connect the dots: which book defined
          which god, and when, and how the layers fit together.
        </p>
        <p className="note">Dates are approximate and debated by scholars. Content is a first draft.</p>
        <div className="tabs" role="tablist" aria-label="Choose a timeline">
          {TABS.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={tab === t.id ? 'tab active' : 'tab'}
              onClick={() => { setTab(t.id); window.scrollTo({ top: 0 }); }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </header>

      {tab === 'gods' ? <GodsView /> : tab === 'scriptures' ? <ScripturesView /> : <ErasView />}

      <footer className="foot">
        <p>Content has not yet been checked against sources. See the project plan for the sourcing and neutrality principles.</p>
      </footer>
    </>
  );
}
