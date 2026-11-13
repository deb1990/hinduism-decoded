import { useEffect, useRef, useState } from 'react';
import { LANGS, useI18n } from '../i18n';

/** A floating language picker in the lower right corner: a globe button that opens a small menu. */
export default function LangSwitch() {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const box = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('touchstart', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('touchstart', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const current = LANGS.find((l) => l.id === lang) ?? LANGS[0];

  return (
    <div className="langswitch" ref={box}>
      {open && (
        <ul className="langmenu" role="listbox" aria-label={t('lang.label')}>
          {LANGS.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                role="option"
                aria-selected={l.id === lang}
                lang={l.id}
                className={l.id === lang ? 'active' : undefined}
                onClick={() => { setLang(l.id); setOpen(false); }}
              >
                <span>{l.name}</span>
                {l.id === lang && (
                  <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true"><path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                )}
              </button>
            </li>
          ))}
        </ul>
      )}
      <button
        type="button"
        className="langbtn"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('lang.label')}
        onClick={() => setOpen((o) => !o)}
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
        <span lang={current.id}>{current.name}</span>
      </button>
    </div>
  );
}
