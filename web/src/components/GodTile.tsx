import type { CSSProperties } from 'react';
import { GROUPS, type God } from '../gods';
import { GOD_ART, accentOf, deepOf } from '../godArt';
import { godHref } from '../route';
import GodArt from './GodArt';
import { BASE_GOD_IMG } from './photoPath';

/** A god's artwork and name, linking to that god's page. */
export default function GodTile({ god }: { god: God }) {
  const art = GOD_ART[god.id] ?? { motif: 'bindu' as const, hue: 30 };
  const group = GROUPS.find((g) => g.id === god.group)?.label;
  return (
    <a className="tile" href={godHref(god.id)} style={{ '--a': accentOf(art.hue), '--b': deepOf(art.hue) } as CSSProperties}>
      <span className="tile-art">
        {art.image ? <img className="tile-photo" src={`${BASE_GOD_IMG}${art.image}`} alt="" loading="lazy" /> : <GodArt motif={art.motif} />}
      </span>
      <span className="tile-text">
        <span className="tile-group">{group}</span>
        <span className="tile-name">{god.name}</span>
        <span className="tile-sum">{god.summary}</span>
        <span className="tile-def">Defined in {god.definedIn}</span>
      </span>
    </a>
  );
}
