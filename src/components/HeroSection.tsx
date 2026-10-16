import React from 'react';
import Image from 'next/image';
import { getCvUrl, profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';

const HeroSection: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="hero" className="bg-bg-primary" aria-label={t.hero.sectionLabel}>
      <div className="section-container pt-28 pb-14 lg:pt-40 lg:pb-20">
        <div className="grid lg:grid-cols-[1fr_240px] gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-accent-travel text-sm font-medium mb-4">{t.hero.badge}</p>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-3">{profile.basics.name}</h1>
            <p className="font-display text-xl sm:text-2xl text-text-primary mb-2">{profile.basics.title[lang]}</p>
            <p className="text-accent-sky-lt text-base sm:text-xl mb-5">{profile.basics.specialty[lang]}</p>
            <p className="text-text-muted leading-relaxed max-w-2xl mb-7">{profile.basics.summary[lang]}</p>
            <div className="flex flex-wrap gap-3">
              <a href="#portfolio" className="btn-primary" id="hero-projects">{t.hero.projects}</a>
              <a href={getCvUrl(lang)} target="_blank" rel="noopener noreferrer" className="btn-secondary" id="hero-download-cv">{t.hero.cv}</a>
              <a href="#contact" className="btn-secondary" id="hero-contact">{t.hero.contact}</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted">
              <span>{profile.basics.location[lang]}</span>
              <a href={getCvUrl(lang === 'en' ? 'es' : 'en')} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-accent-sky-lt">{t.hero.otherCv}</a>
            </div>
          </div>
          <Image
            src="/profile-portrait.webp"
            alt={t.hero.photoAlt}
            width={240}
            height={280}
            priority
            className="hidden lg:block rounded-2xl border border-border-light"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
