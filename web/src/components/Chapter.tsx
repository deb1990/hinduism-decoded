import type { CSSProperties, ReactNode } from 'react';
import { useParallax, useReveal } from '../hooks';
import Art, { type ArtKind } from './Art';

interface Props {
  id: string;
  kicker: string;
  title: string;
  lede: string;
  art: ArtKind;
  accent: string;
  deep: string;
  children: ReactNode;
}

/** A full-screen intro over parallax artwork, followed by the chapter's content. */
export default function Chapter({ id, kicker, title, lede, art, accent, deep, children }: Props) {
  const ref = useParallax<HTMLElement>();
  const [introRef, shown] = useReveal<HTMLDivElement>(0.25);

  return (
    <section id={id} ref={ref} className="chapter" style={{ '--a': accent, '--b': deep } as CSSProperties}>
      <div className="art-stick">
        <Art kind={art} />
      </div>
      <header className="chapter-intro">
        <div ref={introRef} className={`rv${shown ? ' in' : ''}`}>
          <p className="kicker">{kicker}</p>
          <h2 className="chapter-title">{title}</h2>
          <p className="chapter-lede">{lede}</p>
          <span className="scroll-cue" aria-hidden="true" />
        </div>
      </header>
      <div className="chapter-body">{children}</div>
    </section>
  );
}
