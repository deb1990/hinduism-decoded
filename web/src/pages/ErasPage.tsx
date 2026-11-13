import { ERAS } from '../data';
import { useActiveSection } from '../hooks';
import { useI18n } from '../i18n';
import Chapter from '../components/Chapter';
import EraCard from '../components/EraCard';
import EraRail from '../components/EraRail';
import PageLinks from '../components/PageLinks';
import { MapDefs } from '../components/EraMap';

const ERA_IDS = ERAS.map((e) => e.id);

function ErasTimeline() {
  const { t } = useI18n();
  const activeId = useActiveSection(ERA_IDS);
  return (
    <>
      <MapDefs />
      <EraRail eras={ERAS} activeId={activeId} />
      <div className="timeline" aria-label={t('eras.timeline')}>
        {ERAS.map((era) => <EraCard key={era.id} era={era} />)}
      </div>
    </>
  );
}

export default function ErasPage() {
  const { t } = useI18n();
  return (
    <>
      <Chapter
        id="eras" art="rings" accent="#e8b07a" deep="#120d08"
        kicker={t('eras.kicker')} title={t('eras.title')}
        lede={t('eras.lede')}
      >
        <ErasTimeline />
      </Chapter>
      <PageLinks current="eras" />
    </>
  );
}
