import Chapter from '../components/Chapter';
import PageLinks from '../components/PageLinks';
import { Matrix } from '../components/GodsView';

export default function AtlasPage() {
  return (
    <>
      <Chapter
        id="atlas" art="lotus" accent="#4cc3d9" deep="#04131a"
        kicker="The atlas" title="Where each god appears"
        lede="Every god against every book group, in order of composition. The large dot marks where a god is defined."
      >
        <div className="body-inner">
          <Matrix />
        </div>
      </Chapter>
      <PageLinks current="atlas" />
    </>
  );
}
