import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const NAV_LINKS = [
  { label: 'About',      href: '/#hero' },
  { label: 'Travel Tech', href: '/#travel-tech' },
  { label: 'Stack',      href: '/#stack' },
  { label: 'Experience', href: '/#experience' },
  { label: 'FinTech',   href: '/#fintech' },
  { label: 'Contact',   href: '/#contact' },
];

const NavBar: React.FC = () => {
  const router = useRouter();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setMenuOpen(false);
    
    // If we are already on the home page, handle smooth scroll manually
    if (router.pathname === '/') {
      const hash = href.replace('/', '');
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
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'nav-glass shadow-card py-3' : 'bg-transparent py-5'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/#hero"
          onClick={(e) => handleNavClick(e, '/#hero')}
          className="flex items-center gap-3 no-underline group"
          aria-label="Andrés Cabrera — Home"
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
        <a
          href="/andrescabrera-eng.pdf"
          target="_blank"
          rel="noreferrer"
          className="btn-primary hidden md:inline-flex text-sm py-2 px-5"
          id="nav-download-cv"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg hover:bg-bg-surface transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <div className="section-container pb-4 pt-2 border-t border-border-dark mt-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={(e) => handleNavClick(e, href)}
              className="px-4 py-3 rounded-lg text-sm font-medium text-text-muted hover:text-text-primary hover:bg-bg-surface transition-all no-underline"
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
          >
            Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
