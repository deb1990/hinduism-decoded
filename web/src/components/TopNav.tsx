import { PAGES, type Route } from '../route';

export default function TopNav({ route }: { route: Route }) {
  const current = route === 'god' ? 'gods' : route;
  return (
    <header className="topnav">
      <a className="brand" href="#/" aria-label="Hinduism decoded, home">
        Hinduism<sup>decoded</sup>
      </a>
      <nav aria-label="Pages">
        {PAGES.map((p) => (
          <a key={p.route} href={p.href} className={p.route === current ? 'active' : undefined} aria-current={p.route === current ? 'page' : undefined}>
            {p.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
