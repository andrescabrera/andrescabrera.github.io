import React from 'react';
import Link from 'next/link';
import { profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  return (
    <footer className="py-8 border-t border-border-dark bg-bg-primary">
      <div className="section-container flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div>
          <p className="font-display font-semibold text-sm">{profile.basics.name}</p>
          <p className="text-text-muted text-xs mt-1 max-w-xs">{t.footer.tagline}</p>
        </div>
        <nav aria-label={t.footer.navLabel}>
          <ul className="flex flex-wrap gap-x-5 gap-y-3 list-none m-0 p-0 text-sm text-text-muted">
            <li><a href="/andrescabrera-eng.pdf" target="_blank" rel="noopener noreferrer">CV (EN)</a></li>
            <li><a href="/andrescabrera-spa.pdf" target="_blank" rel="noopener noreferrer">CV (ES)</a></li>
            <li><a href={profile.basics.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><Link href="/schedule">{t.footer.schedule}</Link></li>
          </ul>
        </nav>
        <p className="text-text-muted text-xs">© {new Date().getFullYear()} {profile.basics.name}</p>
      </div>
    </footer>
  );
};

export default Footer;
