import { GODS, STAGES, WEIGHT_LABEL, type God, type StageId, type Weight } from '../gods';
import { godHref } from '../route';

const RANK: Record<Weight, number> = { mention: 1, major: 2, defines: 3 };

function strongest(god: God, stage: StageId): Weight | null {
  let best: Weight | null = null;
  for (const s of god.steps) {
    if (s.stage === stage && (best === null || RANK[s.weight] > RANK[best])) best = s.weight;
  }
  return best;
}

export function Matrix() {
  return (
    <section className="overview" aria-label="Where each god appears">
      <h2>Where each god appears</h2>
      <p className="note">Columns run in order of composition. The large dot marks the book group that defines the god.</p>
      <div className="matrix-wrap">
        <table className="matrix">
          <thead>
            <tr>
              <th scope="col">God</th>
              {STAGES.map((s) => (
                <th scope="col" key={s.id}>{s.label}<small>{s.sub}</small></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {GODS.map((g) => (
              <tr key={g.id}>
                <th scope="row"><a href={godHref(g.id)}>{g.name}</a></th>
                {STAGES.map((s) => {
                  const w = strongest(g, s.id);
                  return (
                    <td key={s.id}>
                      {w && <span className={`mdot w-${w}`} title={`${s.label}: ${WEIGHT_LABEL[w]}`} />}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="legend">
        <span><i className="mdot w-defines" /> Defines the god</span>
        <span><i className="mdot w-major" /> Major role</span>
        <span><i className="mdot w-mention" /> Appears</span>
      </div>
    </section>
  );
}
