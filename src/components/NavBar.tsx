import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useLanguage, Lang } from '../i18n/LanguageContext';

const SITE_URL = 'https://andrescabrera.com.ar';

interface LangToggleProps {
  id: string;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

const LangToggle: React.FC<LangToggleProps> = ({ id, lang, setLang }) => (
  <div
    id={id}
    className="flex items-center rounded-lg overflow-hidden"
    style={{ border: '1px solid var(--border)' }}
    role="group"
    aria-label="Language / Idioma"
  >
    {(['en', 'es'] as Lang[]).map((l) => (
      <button
        key={l}
        type="button"
        onClick={() => setLang(l)}
        aria-pressed={lang === l}
        className="px-2.5 py-1.5 text-xs font-mono font-bold uppercase transition-colors"
        style={{
          background: lang === l ? 'var(--bg-elevated)' : 'transparent',
          color: lang === l ? 'var(--accent-sky)' : 'var(--text-faint)',
        }}
      >
        {l}
      </button>
    ))}
  </div>
);

const NavBar: React.FC = () => {
  const router = useRouter();
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const NAV_LINKS = [
    { label: t.nav.about,      href: `${SITE_URL}/#hero` },
    { label: t.nav.travelTech, href: `${SITE_URL}/#travel-tech` },
    { label: t.nav.stack,      href: `${SITE_URL}/#stack` },
    { label: t.nav.experience, href: `${SITE_URL}/#experience` },
    { label: t.nav.portfolio,  href: `${SITE_URL}/#portfolio` },
    { label: t.nav.fintech,   href: `${SITE_URL}/#fintech` },
    { label: t.nav.contact,   href: `${SITE_URL}/#contact` },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize or Escape key
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    const onKeyDown = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    document.body.style.overflow = '';
    setMenuOpen(false);
    
    // If we are already on the home page, handle smooth scroll manually
    if (router.pathname === '/') {
      const hash = href.includes('#') ? `#${href.split('#')[1]}` : href;
      const target = document.querySelector(hash);
      if (target) {
        e.preventDefault();
        const offset = 72;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
        setActiveSection(href);
      }
    }
  };

  return (
    <>
      {/* Mobile backdrop overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <nav
        id="navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          menuOpen
            ? 'nav-glass-open shadow-card py-3'
            : scrolled
            ? 'nav-glass shadow-card py-3'
            : 'bg-transparent py-4 md:py-5'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <Link
            href={`${SITE_URL}/#hero`}
            onClick={(e) => handleNavClick(e, `${SITE_URL}/#hero`)}
            className="flex items-center gap-3 no-underline group"
            aria-label={t.nav.home}
          >
            <span
              className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-display font-bold text-sm"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #10B981)' }}
              aria-hidden="true"
            >
              AC
            </span>
            <span className="font-display font-bold text-base text-text-primary hidden sm:block group-hover:text-accent-sky transition-colors">
              Andrés Cabrera
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={(e) => handleNavClick(e, href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 no-underline block ${
                    activeSection === href
                      ? 'text-accent-sky bg-bg-elevated'
                      : 'text-text-muted hover:text-text-primary hover:bg-bg-surface'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LangToggle id="nav-lang-toggle" lang={lang} setLang={setLang} />
            <a
              href="/andrescabrera-eng.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-sm py-2 px-5"
              id="nav-download-cv"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.nav.downloadCv}
            </a>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center gap-2">
            <LangToggle id="nav-lang-toggle-mobile" lang={lang} setLang={setLang} />
            <button
              id="mobile-menu-toggle"
              type="button"
              className="w-10 h-10 flex items-center justify-center rounded-lg transition-colors focus:outline-none"
              style={{
                border: '1px solid var(--border)',
                background: menuOpen ? 'var(--bg-elevated)' : 'rgba(15, 23, 36, 0.75)',
              }}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={t.nav.menu}
            >
              <span className="relative block w-5 h-4" aria-hidden="true">
                <span
                  className="absolute left-0 block w-5 bg-text-primary rounded-full transition-all duration-300"
                  style={{
                    height: '2px',
                    top: menuOpen ? '7px' : '0px',
                    transform: menuOpen ? 'rotate(45deg)' : 'none',
                  }}
                />
                <span
                  className="absolute left-0 block w-5 bg-text-primary rounded-full transition-all duration-300"
                  style={{
                    height: '2px',
                    top: '7px',
                    opacity: menuOpen ? 0 : 1,
                  }}
                />
                <span
                  className="absolute left-0 block w-5 bg-text-primary rounded-full transition-all duration-300"
                  style={{
                    height: '2px',
                    top: menuOpen ? '7px' : '14px',
                    transform: menuOpen ? 'rotate(-45deg)' : 'none',
                  }}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-300 ${
            menuOpen
              ? 'max-h-[calc(100vh-4.5rem)] opacity-100 visible pointer-events-auto overflow-y-auto'
              : 'max-h-0 opacity-0 invisible pointer-events-none overflow-hidden'
          }`}
          aria-hidden={!menuOpen}
        >
          <div className="section-container pt-3 pb-5 border-t border-border-dark mt-3 flex flex-col gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-all no-underline ${
                  activeSection === href
                    ? 'text-accent-sky bg-bg-elevated'
                    : 'text-text-primary hover:text-accent-sky hover:bg-bg-surface'
                }`}
              >
                {label}
              </Link>
            ))}
            <a
              href="/andrescabrera-eng.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-2 justify-center"
              id="mobile-download-cv"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              {t.nav.downloadCv}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
