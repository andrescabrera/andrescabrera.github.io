import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { getCvUrl, profile } from '../content/profile';
import { Lang, useLanguage } from '../i18n/LanguageContext';

const NavBar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const sectionHref = (id: string) => `${router.pathname === '/' ? '' : '/'}#${id}`;
  const links = [
    { label: t.nav.portfolio, id: 'portfolio' },
    { label: t.nav.ai, id: 'ai' },
    { label: t.nav.travelTech, id: 'travel-tech' },
    { label: t.nav.experience, id: 'experience' },
    { label: t.nav.stack, id: 'stack' },
    { label: t.nav.contact, id: 'contact' },
  ];

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1280) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        buttonRef.current?.focus();
      }
      if (event.key !== 'Tab') return;
      const focusable = Array.from(navRef.current?.querySelectorAll<HTMLElement>('a[href], button') ?? [])
        .filter((element) => element.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#main-content">{t.nav.skip}</a>
      {menuOpen && <div className="fixed inset-0 z-40 bg-black/60 xl:hidden" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      <nav ref={navRef} id="navbar" className="fixed inset-x-0 top-0 z-50 nav-glass" aria-label={t.nav.label}>
        <div className="section-container flex items-center justify-between gap-3 py-3">
          <a href={sectionHref('hero')} onClick={() => setMenuOpen(false)} className="flex items-center gap-2.5 no-underline" aria-label={t.nav.home}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center bg-accent-sky text-bg-primary font-bold flex-shrink-0" aria-hidden="true">AC</span>
            <span className="font-display font-semibold text-sm sm:text-base leading-tight">{profile.basics.name}</span>
          </a>
          <ul className="hidden xl:flex items-center gap-1 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.id}><a href={sectionHref(link.id)} className="block px-3 py-2 text-sm text-text-muted hover:text-text-primary no-underline">{link.label}</a></li>
            ))}
          </ul>
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <div id="nav-lang-toggle" className="flex rounded-lg border border-border-dark overflow-hidden" role="group" aria-label="Language / Idioma">
              {(['en', 'es'] as Lang[]).map((language) => (
                <button key={language} type="button" onClick={() => setLang(language)} aria-pressed={lang === language}
                  className={`px-2 py-2 text-xs font-bold uppercase ${lang === language ? 'bg-bg-elevated text-accent-sky-lt' : 'text-text-muted'}`}>
                  {language}
                </button>
              ))}
            </div>
            <div className="hidden xl:block"><a href={getCvUrl(lang)} target="_blank" rel="noopener noreferrer" className="btn-primary" id="nav-download-cv">{t.nav.downloadCv}</a></div>
            <button ref={buttonRef} id="mobile-menu-toggle" type="button" className="xl:hidden w-10 h-10 flex items-center justify-center rounded-lg border border-border-light"
              onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? t.nav.closeMenu : t.nav.menu}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                {menuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        <div id="mobile-menu" hidden={!menuOpen} className="xl:hidden border-t border-border-dark max-h-[calc(100dvh-70px)] overflow-y-auto">
          <div className="section-container flex flex-col gap-1 py-4">
            {links.map((link) => <a key={link.id} href={sectionHref(link.id)} onClick={() => setMenuOpen(false)} className="px-3 py-3 rounded-lg hover:bg-bg-elevated no-underline">{link.label}</a>)}
            <a href={getCvUrl(lang)} target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="btn-primary justify-center mt-3" id="mobile-download-cv">{t.nav.downloadCv}</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
