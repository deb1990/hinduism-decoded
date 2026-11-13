import { useEffect, useRef } from 'react';
import type { Era } from '../data';
import { useI18n } from '../i18n';

export default function EraRail({ eras, activeId }: { eras: Era[]; activeId: string | null }) {
  const { t, era } = useI18n();
  const railRef = useRef<HTMLElement>(null);

  // Keep the active pill visible in the horizontally scrolling strip.
  useEffect(() => {
    const rail = railRef.current;
    const act = rail?.querySelector<HTMLAnchorElement>('a.active');
    if (!rail || !act) return;
    const r = rail.getBoundingClientRect();
    const b = act.getBoundingClientRect();
    if (b.left < r.left || b.right > r.right) {
      rail.scrollTo({ left: act.offsetLeft - 24, behavior: 'smooth' });
    }
  }, [activeId]);

  return (
    <nav className="rail" ref={railRef} aria-label={t('eras.aria')}>
      {eras.map((e) => {
        const en = { short: e.short, name: e.name, summary: e.summary, texts: e.texts, ideas: e.ideas, figures: e.figures, note: e.confidence.note };
        return (
          <a key={e.id} href={`#${e.id}`} className={e.id === activeId ? 'active' : undefined}>
            {era(e.id, en).short}
          </a>
        );
      })}
    </nav>
  );
}
