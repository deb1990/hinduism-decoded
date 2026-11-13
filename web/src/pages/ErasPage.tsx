import { ERAS } from '../data';
import { useActiveSection } from '../hooks';
import Chapter from '../components/Chapter';
import EraCard from '../components/EraCard';
import EraRail from '../components/EraRail';
import PageLinks from '../components/PageLinks';

const ERA_IDS = ERAS.map((e) => e.id);

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

export default function ErasPage() {
  return (
    <>
      <Chapter
        id="eras" art="rings" accent="#e8b07a" deep="#120d08"
        kicker="The eras" title="Five thousand years, in nine steps"
        lede="From the Indus Valley to today: the key texts, ideas and people of each era."
      >
        <ErasTimeline />
      </Chapter>
      <PageLinks current="eras" />
    </>
  );
}
