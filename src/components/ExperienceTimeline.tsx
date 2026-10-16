import React from 'react';
import { formatPeriod, getCvUrl, profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const ExperienceTimeline: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="experience" className="py-16 lg:py-20" aria-label={t.experience.sectionLabel}>
      <div className="section-container">
        <SectionHeading badge={t.experience.badge} title={t.experience.title} intro={t.experience.subtitle} />
        <ol className="list-none p-0 m-0">
          {profile.experience.map((experience, index) => (
            <li id={experience.id} key={experience.id} className="grid md:grid-cols-[185px_1fr] gap-3 md:gap-8 py-6 border-t border-border-dark">
              <div className="text-sm text-text-muted">
                <p>{formatPeriod(experience.start, experience.end, lang)}</p>
                {experience.engagement && <p className="mt-1">{experience.engagement[lang]}</p>}
              </div>
              <article>
                <p className="text-accent-sky-lt text-sm mb-1">{experience.company}</p>
                <h3 className="text-lg mb-3">{experience.role[lang]}</h3>
                <ul className="list-disc pl-5 space-y-2 text-text-muted text-sm leading-relaxed">
                  {experience.highlights[lang].slice(0, index < 3 ? 2 : 1).map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                {index < 3 && <p className="text-sm text-text-muted mt-3">{experience.stack.join(' · ')}</p>}
              </article>
            </li>
          ))}
        </ol>
        <p className="text-sm text-text-muted border-t border-border-dark pt-5">{profile.basics.earlierExperience[lang]}</p>
        <a href={getCvUrl(lang)} target="_blank" rel="noopener noreferrer" className="inline-block mt-5 text-accent-sky-lt underline underline-offset-4">{t.experience.cv}</a>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
