import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { formatPeriod, getExperience, profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const BookingDemo: React.FC = () => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let inView = false;
    const sync = () => {
      if (!inView || motion.matches || document.hidden) video.pause();
      else void video.play().catch(() => { /* Controls remain available if autoplay is blocked. */ });
    };
    const observer = new IntersectionObserver(([entry]) => { inView = entry.isIntersecting; sync(); }, { threshold: 0.25 });
    observer.observe(video);
    motion.addEventListener('change', sync);
    document.addEventListener('visibilitychange', sync);
    return () => {
      observer.disconnect();
      motion.removeEventListener('change', sync);
      document.removeEventListener('visibilitychange', sync);
      video.pause();
    };
  }, []);

  return (
    <figure>
      <video ref={videoRef} className="w-full rounded-xl border border-border-light bg-bg-primary" poster="/portfolio/venetravel-home.webp"
        muted loop playsInline controls preload="none" aria-label={t.portfolio.video}>
        <source src="/portfolio/venetravel-journey.webm" type="video/webm" />
        <source src="/portfolio/venetravel-journey.mp4" type="video/mp4" />
      </video>
      <figcaption className="text-text-muted text-xs mt-3">{t.portfolio.video}</figcaption>
      <div className="flex gap-3 mt-4">
        {[
          { src: '/portfolio/venetravel-home.webp', label: t.portfolio.home },
          { src: '/portfolio/venetravel-hotels.webp', label: t.portfolio.hotels },
        ].map((shot) => (
          <a key={shot.src} href={shot.src} target="_blank" rel="noopener noreferrer" className="text-xs text-text-muted underline underline-offset-4">
            <Image src={shot.src} alt={`Venetravel — ${shot.label}`} width={112} height={70} className="rounded-md object-cover mb-2" />
            {shot.label}
          </a>
        ))}
      </div>
    </figure>
  );
};

const EsportunityGallery: React.FC = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState(0);
  const shots = [
    { src: '/esportunity/esportunity-feed.webp', label: t.portfolio.feed },
    { src: '/esportunity/esportunity-opportunities.webp', label: t.portfolio.opportunities },
    { src: '/esportunity/esportunity-chat.webp', label: t.portfolio.chat },
  ];
  const current = shots[active];
  return (
    <figure>
      <a href={current.src} target="_blank" rel="noopener noreferrer" className="relative block aspect-[16/10] rounded-xl border border-border-light overflow-hidden" aria-label={`${t.portfolio.fullImage}: ${current.label}`}>
        <Image src={current.src} alt={`eSportunity — ${current.label}`} fill sizes="(max-width: 1024px) 100vw, 50vw" style={{ objectFit: 'cover', objectPosition: 'top' }} />
      </a>
      <figcaption className="text-xs text-text-muted mt-3">{current.label}</figcaption>
      <div className="flex gap-3 mt-4" role="group" aria-label={t.portfolio.gallery}>
        {shots.map((shot, index) => (
          <button key={shot.src} type="button" onClick={() => setActive(index)} aria-pressed={active === index} aria-label={`${t.portfolio.viewImage}: ${shot.label}`}
            className={`rounded-md overflow-hidden border-2 ${active === index ? 'border-accent-sky-lt' : 'border-transparent'}`}>
            <Image src={shot.src} alt="" width={96} height={60} className="object-cover" />
          </button>
        ))}
      </div>
    </figure>
  );
};

const PortfolioSection: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-bg-surface" aria-label={t.portfolio.sectionLabel}>
      <div className="section-container">
        <SectionHeading badge={t.portfolio.badge} title={t.portfolio.title} intro={t.portfolio.subtitle} />
        <div className="space-y-8">
          {profile.projects.map((project) => {
            const experience = project.experienceId ? getExperience(project.experienceId) : undefined;
            const start = experience?.start ?? project.start;
            const end = experience?.end ?? project.end ?? null;
            const role = experience?.role[lang] ?? project.role?.[lang];
            const highlights = project.highlights?.[lang] ?? experience?.highlights[lang].slice(1, 3) ?? [];
            return (
              <article id={`project-${project.id}`} key={project.id} className="glass-card p-6 sm:p-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                  <div>
                    <p className="text-accent-sky-lt text-xs font-medium mb-3">{project.status[lang]}</p>
                    <h3 className="text-2xl mb-2">{project.name}</h3>
                    <p className="text-text-muted text-sm mb-6">{role}{start && ` · ${formatPeriod(start, end, lang)}`}</p>
                    <h4 className="text-sm mb-2">{t.portfolio.challenge}</h4>
                    <p className="text-text-muted leading-relaxed mb-5">{project.challenge[lang]}</p>
                    <h4 className="text-sm mb-2">{t.portfolio.contribution}</h4>
                    <ul className="list-disc pl-5 space-y-3 text-sm text-text-muted leading-relaxed mb-5">
                      {highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <p className="text-sm text-text-muted mb-6">{project.stack.join(' · ')}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary" id={`portfolio-${project.id}-site`}>
                      {project.id === 'venetravel' ? t.portfolio.visit : t.portfolio.upwork}
                    </a>
                    {project.id === 'esportunity' && <a href="https://github.com/andrescabrera-esportunity" target="_blank" rel="noopener noreferrer" className="block text-sm text-text-muted underline underline-offset-4 mt-4">{t.portfolio.github}</a>}
                  </div>
                  <div className="min-w-0">{project.id === 'venetravel' ? <BookingDemo /> : <EsportunityGallery />}</div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
