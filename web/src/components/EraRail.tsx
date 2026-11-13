import { useEffect, useRef } from 'react';
import type { Era } from '../data';

export default function EraRail({ eras, activeId }: { eras: Era[]; activeId: string | null }) {
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
    <nav className="rail" ref={railRef} aria-label="Eras">
      {eras.map((e) => (
        <a key={e.id} href={`#${e.id}`} className={e.id === activeId ? 'active' : undefined}>
          {e.short}
        </a>
      ))}
    </nav>
  );
}
