import { PAGES, type Route } from '../route';

/** Links to the other pages, shown at the end of each page. */
export default function PageLinks({ current }: { current: Route }) {
  return (
    <section className="pagelinks" aria-label="Continue">
      <h2>Keep exploring</h2>
      <div className="pagelinks-grid">
        {PAGES.filter((p) => p.route !== current).map((p) => (
          <a key={p.route} href={p.href} className="pagelink">
            <span className="pagelink-label">{p.label}</span>
            <span className="pagelink-blurb">{p.blurb}</span>
            <span className="pagelink-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </section>
  );
}
