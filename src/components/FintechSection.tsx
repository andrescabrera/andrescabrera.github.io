import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const FintechSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <section id="fintech" className="py-16 lg:py-20 bg-bg-surface" aria-label={t.fintech.sectionLabel}>
      <div className="section-container">
        <SectionHeading badge={t.fintech.badge} title={t.fintech.title} intro={t.fintech.intro} />
        <div className="grid md:grid-cols-3 gap-5">
          {t.fintech.items.map((item) => (
            <article key={item.title} className="glass-card p-6">
              <h3 className="text-lg mb-3">{item.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed mb-4">{item.description}</p>
              <p className="text-sm text-accent-sky-lt">{item.tags.join(' · ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FintechSection;
