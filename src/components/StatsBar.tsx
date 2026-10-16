import React from 'react';
import { profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';

const StatsBar: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="stats" className="py-10 border-y border-border-dark bg-bg-surface" aria-label={t.stats.sectionLabel}>
      <div className="section-container grid grid-cols-1 md:grid-cols-3 gap-8">
        {profile.proofPoints.map((point) => (
          <div key={point.id}>
            <p className="font-display font-bold text-3xl text-accent-sky-lt mb-2">{point.value[lang]}</p>
            <h2 className="text-base font-semibold mb-2">{point.label[lang]}</h2>
            <p className="text-text-muted text-sm leading-relaxed">{point.context[lang]}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
