import { GODS, STAGES, WEIGHT_LABEL, type God, type StageId, type Weight } from '../gods';
import { godHref } from '../route';
import { useI18n } from '../i18n';

const RANK: Record<Weight, number> = { mention: 1, major: 2, defines: 3 };

function strongest(god: God, stage: StageId): Weight | null {
  let best: Weight | null = null;
  for (const s of god.steps) {
    if (s.stage === stage && (best === null || RANK[s.weight] > RANK[best])) best = s.weight;
  }
  return best;
}

export function Matrix() {
  const i18n = useI18n();
  const { t } = i18n;
  return (
    <section className="overview" aria-label={t('matrix.aria')}>
      <h2>{t('atlas.title')}</h2>
      <p className="note">{t('matrix.note')}</p>
      <div className="matrix-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">{t('matrix.god')}</th>
              {STAGES.map((s) => {
                const loc = i18n.stage(s.id, s);
                return <th scope="col" key={s.id}>{loc.label}<small>{loc.sub}</small></th>;
              })}
            </tr>
          </thead>
          <tbody>
            {GODS.map((g) => (
              <tr key={g.id}>
                <th scope="row"><a href={godHref(g.id)}>{i18n.god(g.id, g).name}</a></th>
                {STAGES.map((s) => {
                  const w = strongest(g, s.id);
                  return (
                    <td key={s.id}>
                      {w && <span className={`mdot w-${w}`} title={`${i18n.stage(s.id, s).label}: ${i18n.weight(w, WEIGHT_LABEL[w])}`} />}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="legend">
        <span><i className="mdot w-defines" /> {t('matrix.defines')}</span>
        <span><i className="mdot w-major" /> {t('matrix.major')}</span>
        <span><i className="mdot w-mention" /> {t('matrix.appears')}</span>
      </div>
    </section>
  );
}
