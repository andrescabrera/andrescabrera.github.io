import React, { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * Live walkthrough of eSportunity, embedded in the case study.
 *
 * The demo is a real deployment (services, database and the traffic simulator), not a video, and it
 * is parked most of the time: opening the panel is what boots it. The first seconds are the
 * containers starting, and the page served by the demo itself narrates that wait, so this component
 * only has to get out of the way: the iframe starts loading on the first click and reports nothing
 * back to us on purpose (a cross-origin frame cannot tell us when the real app replaced the
 * "starting" page, and polling for it would need CORS on the demo host).
 */
const DEMO_URL = 'https://demo.margarita.travel/';

const EsportunityDemo: React.FC = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    panelRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    return () => document.removeEventListener('keydown', onKey);
  }, [open, close]);

  return (
    <div ref={panelRef}>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group relative block w-full aspect-[16/10] rounded-xl border border-border-light overflow-hidden text-left"
          aria-label={t.portfolio.demoCta}
        >
          <Image
            src="/esportunity/esportunity-feed.webp"
            alt="eSportunity — community feed"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
          <span className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />
          <span className="absolute inset-x-0 bottom-0 p-5 flex items-center gap-3">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-[#c71637] shadow-lg shadow-[#c71637]/40 transition-transform group-hover:scale-105">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span>
              <span className="block text-sm font-medium text-white">{t.portfolio.demoCta}</span>
              <span className="block text-xs text-white/70">{t.portfolio.demoHint}</span>
            </span>
          </span>
        </button>
      )}

      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${open ? 'max-h-[85vh] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!open}
      >
        <div className="rounded-xl border border-border-light bg-bg-primary overflow-hidden">
          <div className="flex items-center justify-between gap-4 px-4 py-2.5 border-b border-border-light">
            <span className="flex items-center gap-2 text-xs text-text-muted">
              <span className={`w-2 h-2 rounded-full ${frameLoaded ? 'bg-emerald-400' : 'bg-amber-400 animate-pulse'}`} />
              {frameLoaded ? t.portfolio.demoLive : t.portfolio.demoBooting}
            </span>
            <button type="button" onClick={close} className="text-xs text-text-muted hover:text-accent-sky-lt underline underline-offset-4">
              {t.portfolio.demoClose}
            </button>
          </div>
          {open && (
            <iframe
              src={DEMO_URL}
              title="eSportunity live demo"
              onLoad={() => setFrameLoaded(true)}
              className="w-full h-[min(78vh,720px)] bg-[#0b1020]"
              allow="clipboard-write; fullscreen"
              referrerPolicy="no-referrer"
            />
          )}
        </div>
        <p className="text-xs text-text-muted mt-3">{t.portfolio.demoNote}</p>
      </div>
    </div>
  );
};

export default EsportunityDemo;
