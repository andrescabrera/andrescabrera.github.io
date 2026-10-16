import React from 'react';
import { profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const TechStackSection: React.FC = () => {
  const { lang, t } = useLanguage();
  return (
    <section id="stack" className="py-16 lg:py-20 bg-bg-surface" aria-label={t.stack.sectionLabel}>
      <div className="section-container">
        <SectionHeading badge={t.stack.badge} title={t.stack.title} intro={t.stack.subtitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {profile.skills.map((group) => (
            <article key={group.id} className="glass-card p-6">
              <h3 className="text-base mb-4">{group.name[lang]}</h3>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                {group.items.map((item) => <li key={item} className="text-sm text-text-muted border border-border-light rounded-md px-2 py-1">{item}</li>)}
              </ul>
              {group.detail && <p className="text-sm text-text-muted mt-4">{group.detail[lang]}</p>}
            </article>
          ))}
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-muted mt-6">
          <span>{t.stack.learning}:</span>
          <a href="https://roadmap.sh/backend?s=65f99212adfe421617302b21" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t.stack.roadmap}</a>
          <a href="https://app.pluralsight.com/profile/andres-cabrera" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">{t.stack.skillIq}</a>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
