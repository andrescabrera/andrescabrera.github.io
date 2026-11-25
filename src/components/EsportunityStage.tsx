import React, { useCallback, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { useLanguage } from '../i18n/LanguageContext';

/**
 * eSportunity live demo, embedded as a scroll-driven takeover.
 *
 * On desktop the case study sits inside a tall "pin" wrapper. While that wrapper crosses the viewport,
 * the poster card is scaled up from its in-flow box to almost the full width of the screen (everything
 * under the fixed navbar) and the demo takes over; once the pin is spent, normal vertical scrolling
 * resumes on its own. Nothing hijacks the wheel: the geometry is interpolated from the real scroll
 * position, so the animation follows the user's gesture and can be reversed mid-way.
 *
 * Doing it with `transform` (scale + translate) instead of animating width/height keeps the iframe at
 * a fixed layout size: the compositor moves pixels, the app never reflows, and the demo boots in the
 * background while the panel is still growing.
 */
const DEMO_URL = 'https://demo.margarita.travel/';

type Mode = 'inline' | 'stage';

const EsportunityStage: React.FC = () => {
  const { t } = useLanguage();
  const wrapRef = useRef<HTMLDivElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLIFrameElement>(null);
  const rafRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>('inline');
  const [booted, setBooted] = useState(false);
  const [portalHost, setPortalHost] = useState<HTMLElement | null>(null);

  // The takeover only makes sense with a wheel and enough room; on touch or with reduced motion the
  // card keeps the plain click-to-open behaviour.
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const wide = window.matchMedia('(min-width: 1024px)');
    const sync = () => setEnabled(!motion.matches && wide.matches);
    sync();
    motion.addEventListener('change', sync);
    wide.addEventListener('change', sync);
    return () => {
      motion.removeEventListener('change', sync);
      wide.removeEventListener('change', sync);
    };
  }, []);

  // el panel vive en <body>: la tarjeta de la sección usa backdrop-filter, que convierte a
  // cualquier ancestro en el bloque contenedor de un position:fixed y rompería la geometría
  useEffect(() => setPortalHost(document.body), []);

  const boot = useCallback(() => setBooted(true), []);

  const apply = useCallback(() => {
    const wrap = wrapRef.current;
    const slot = slotRef.current;
    const stage = stageRef.current;
    if (!wrap || !slot || !stage) return;

    const navHeight = document.getElementById('navbar')?.getBoundingClientRect().height ?? 64;
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    const range = Math.max(1, wrap.offsetHeight - vh);
    const raw = (window.scrollY - top) / range;
    const p = Math.min(1, Math.max(0, raw));

    // "settled" is the moment the panel is done growing: from there the page scrolls normally again
    const settled = raw >= 1;
    if (settled) {
      stage.style.opacity = '0';
      stage.style.pointerEvents = 'none';
      slot.style.opacity = '1';
      return;
    }

    const slotRect = slot.getBoundingClientRect();
    const target = {
      x: Math.max(16, (vw - Math.min(vw - 32, 1680)) / 2),
      y: navHeight + 14,
      w: Math.min(vw - 32, 1680),
      h: vh - navHeight - 40,
    };

    const eased = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2; // easeInOutQuad
    const sx = (slotRect.width / target.w) + (1 - slotRect.width / target.w) * eased;
    const sy = (slotRect.height / target.h) + (1 - slotRect.height / target.h) * eased;
    const x = slotRect.left + (target.x - slotRect.left) * eased;
    const y = slotRect.top + (target.y - slotRect.top) * eased;

    stage.style.width = `${target.w}px`;
    stage.style.height = `${target.h}px`;
    stage.style.left = `${target.x}px`;
    stage.style.top = `${target.y}px`;
    stage.style.transform = `translate(${x - target.x}px, ${y - target.y}px) scale(${sx}, ${sy})`;
    stage.style.opacity = String(Math.min(1, p * 4));
    stage.style.pointerEvents = p > 0.12 ? 'auto' : 'none';
    stage.style.borderRadius = `${Math.round(16 * (1 - eased))}px`;
    slot.style.opacity = String(Math.max(0, 1 - p * 3));

    if (p > 0.04) boot(); // the stack wakes while the panel is still growing
  }, [boot]);

  const schedule = useCallback(() => {
    if (rafRef.current != null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      apply();
    });
  }, [apply]);

  useEffect(() => {
    if (!enabled) {
      setMode('inline');
      return undefined;
    }
    setMode('stage');
    apply();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (rafRef.current != null) window.cancelAnimationFrame(rafRef.current);
    };
  }, [enabled, apply, schedule]);

  // Leaving the stage is a real scroll, not a state change: the pin ends and the site keeps going.
  const leave = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const top = wrap.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + wrap.offsetHeight - window.innerHeight + 8, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') leave(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [leave]);

  const poster = (
    <div ref={slotRef} className="relative">
      <button type="button" onClick={boot}
        className="group relative block w-full aspect-[16/10] rounded-xl border border-border-light overflow-hidden text-left"
        aria-label={t.portfolio.demoCta}>
        <Image src="/esportunity/esportunity-feed.webp" alt="eSportunity — community feed" fill sizes="(max-width: 1024px) 100vw, 60vw"
          style={{ objectFit: 'cover', objectPosition: 'top' }} />
        <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
        <span className="absolute inset-x-0 bottom-0 p-5 flex items-center gap-3">
          <span className="grid place-items-center w-11 h-11 rounded-full bg-[#c71637] shadow-lg shadow-[#c71637]/40 transition-transform group-hover:scale-105">
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
          </span>
          <span className="min-w-0">
            <span className="block text-sm font-medium text-white">{t.portfolio.demoCta}</span>
            <span className="block text-xs text-white/70">{t.portfolio.demoHint}</span>
          </span>
        </span>
      </button>
      <p className="text-xs text-text-muted mt-3">{t.portfolio.demoNote}</p>
    </div>
  );

  if (!enabled) {
    // Fallback: the same panel, opened in place.
    return (
      <div>
        {booted ? (
          <div>
            <div className="flex items-center justify-between gap-4 px-4 py-2.5 rounded-t-xl border border-b-0 border-border-light bg-bg-primary">
              <span className="flex items-center gap-2 text-xs text-text-muted">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />{t.portfolio.demoLive}
              </span>
              <button type="button" onClick={() => setBooted(false)} className="text-xs text-text-muted underline underline-offset-4">{t.portfolio.demoClose}</button>
            </div>
            <iframe src={DEMO_URL} title="eSportunity live demo" className="w-full h-[min(72vh,660px)] rounded-b-xl border border-border-light bg-[#0b1020]" />
            <p className="text-xs text-text-muted mt-3">{t.portfolio.demoNote}</p>
          </div>
        ) : poster}
      </div>
    );
  }

  return (
    <div ref={wrapRef} className="relative" style={{ height: '260vh' }} data-esportunity-stage={mode}>
      <div className="sticky top-0 pt-2">
        {poster}
        {!booted && (
          <p className="text-xs text-accent-sky-lt mt-3">{t.portfolio.demoScrollHint}</p>
        )}
      </div>

      {portalHost && createPortal(
        <div
          ref={stageRef}
          className="fixed z-40 overflow-hidden shadow-2xl shadow-black/60 bg-[#0b1020] will-change-transform"
          style={{ left: 0, top: 0, width: '100%', height: '60vh', opacity: 0, pointerEvents: 'none' }}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between gap-4 px-4 py-2 bg-[#0b1020]/95 border-b border-white/10">
              <span className="flex items-center gap-2 text-xs text-white/70">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                eSportunity · {t.portfolio.demoLive}
              </span>
              <span className="hidden sm:block text-[11px] text-white/40">{t.portfolio.demoExitHint}</span>
              <button type="button" onClick={leave} className="text-xs text-white/70 hover:text-white underline underline-offset-4">
                {t.portfolio.demoClose}
              </button>
            </div>
            <div className="relative flex-1">
              {booted ? (
                <iframe ref={frameRef} src={DEMO_URL} title="eSportunity live demo" className="absolute inset-0 w-full h-full border-0 bg-[#0b1020]" />
              ) : (
                <div className="absolute inset-0 grid place-items-center text-xs text-white/50">{t.portfolio.demoBooting}</div>
              )}
            </div>
          </div>
        </div>,
        portalHost,
      )}
    </div>
  );
};

export default EsportunityStage;
