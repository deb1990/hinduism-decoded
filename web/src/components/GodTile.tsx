import type { CSSProperties } from 'react';
import { GROUPS, type God } from '../gods';
import { GOD_ART, accentOf, deepOf } from '../godArt';
import { godHref } from '../route';
import { useI18n } from '../i18n';
import GodArt from './GodArt';
import { BASE_GOD_IMG } from './photoPath';

/** A god's artwork and name, linking to that god's page. */
export default function GodTile({ god }: { god: God }) {
  const i18n = useI18n();
  const art = GOD_ART[god.id] ?? { motif: 'bindu' as const, hue: 30 };
  const group = GROUPS.find((g) => g.id === god.group);
  const loc = i18n.god(god.id, god);
  return (
    <a className="tile" href={godHref(god.id)} style={{ '--a': accentOf(art.hue), '--b': deepOf(art.hue) } as CSSProperties}>
      <span className="tile-art">
        {art.image ? <img className="tile-photo" src={`${BASE_GOD_IMG}${art.image}`} alt="" loading="lazy" /> : <GodArt motif={art.motif} />}
      </span>
      <span className="tile-text">
        <span className="tile-group">{group ? i18n.group(group.id, group.label) : ''}</span>
        <span className="tile-name">{loc.name}</span>
        <span className="tile-sum">{loc.summary}</span>
        <span className="tile-def">{i18n.t('god.definedIn')}: {loc.definedIn}</span>
      </span>
    </a>
  );
}
