import React from 'react';
import { formatPeriod, getExperience } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const TravelTechSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const starlings = getExperience('exp-starlings');
  return (
    <section id="travel-tech" className="py-16 lg:py-20" aria-label={t.travel.sectionLabel}>
      <div className="section-container">
        <SectionHeading badge={t.travel.badge} title={t.travel.title} intro={t.travel.intro} />
        <div className="grid lg:grid-cols-2 gap-6">
          <article className="glass-card p-6 sm:p-8">
            <p className="text-accent-travel font-semibold mb-2">{starlings.company}</p>
            <p className="text-sm text-text-muted mb-6">{starlings.role[lang]} · {formatPeriod(starlings.start, starlings.end, lang)}</p>
            <h3 className="text-xl mb-5">{t.travel.ownership}</h3>
            <h4 className="text-base mb-2">{t.travel.direct}</h4>
            <p className="text-text-muted leading-relaxed mb-5">{t.travel.directDescription}</p>
            <h4 className="text-base mb-2">{t.travel.ndc}</h4>
            <p className="text-text-muted leading-relaxed">{t.travel.ndcDescription}</p>
          </article>
          <article className="glass-card p-6 sm:p-8">
            <h3 className="text-xl mb-4">{t.travel.observability}</h3>
            <p className="text-text-muted leading-relaxed mb-6">{t.travel.observabilityDescription}</p>
            <ol className="grid grid-cols-2 gap-3 list-none p-0 m-0" aria-label={t.travel.flow}>
              {['Search', 'Confirm', 'Issue', 'Retrieve'].map((step, index) => (
                <li key={step} className="rounded-lg bg-bg-elevated border border-border-light p-3">
                  <span className="text-accent-sky-lt text-xs font-mono mr-2" aria-hidden="true">0{index + 1}</span>
                  <span className="font-mono text-sm">{step}</span>
                </li>
              ))}
            </ol>
            <p className="text-sm text-text-muted mt-4">{t.travel.additionalFlows}</p>
          </article>
        </div>
        <p className="text-sm text-text-muted mt-6">{t.travel.earlier} <a href="#experience" className="text-accent-sky-lt underline underline-offset-4">{t.travel.careerLink}</a></p>
      </div>
    </section>
  );
};

export default TravelTechSection;
