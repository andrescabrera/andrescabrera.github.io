import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { formatPeriod, getExperience, profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';
import EsportunityDemo from './EsportunityDemo';

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
            const copy = (
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
                <p className="text-sm text-text-muted">{project.stack.join(' · ')}</p>
              </div>
            );

            // eSportunity is a live demo: the walkthrough gets the full card width instead of the
            // right column, which is the whole point of embedding it.
            if (project.id === 'esportunity') {
              return (
                <article id={`project-${project.id}`} key={project.id} className="glass-card p-6 sm:p-8">
                  <div className="mb-8">{copy}</div>
                  <EsportunityDemo />
                </article>
              );
            }

            return (
              <article id={`project-${project.id}`} key={project.id} className="glass-card p-6 sm:p-8">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                  <div>
                    {copy}
                    {project.id === 'venetravel' && (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="btn-primary inline-block mt-6" id={`portfolio-${project.id}-site`}>
                        {t.portfolio.visit}
                      </a>
                    )}
                  </div>
                  <div className="min-w-0"><BookingDemo /></div>
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
