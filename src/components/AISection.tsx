import React from 'react';
import { profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const AISection: React.FC = () => {
  const { lang } = useLanguage();
  const { ai } = profile;
  return (
    <section id="ai" className="py-16 lg:py-20 border-b border-border-dark" aria-label={ai.title[lang]}>
      <div className="section-container">
        <SectionHeading badge={ai.badge[lang]} title={ai.title[lang]} intro={ai.intro[lang]} />
        <div className="grid md:grid-cols-2 gap-5">
          {ai.groups.map((group) => (
            <article key={group.id} className="glass-card p-6 sm:p-8">
              <h3 className="text-lg mb-4">{group.title[lang]}</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm text-text-muted leading-relaxed mb-5">
                {group.details[lang].map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <ul className="flex flex-wrap gap-2 list-none p-0 m-0" aria-label={group.title[lang]}>
                {group.items.map((item) => <li key={item} className="text-sm text-accent-sky-lt border border-border-light rounded-md px-2 py-1">{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="glass-card p-6 sm:p-8 mt-5" aria-labelledby="local-models-title">
          <h3 id="local-models-title" className="text-lg mb-3">{ai.localModelsTitle[lang]}</h3>
          <p className="text-sm text-text-muted leading-relaxed mb-5">{ai.localModelsIntro[lang]}</p>
          <dl className="grid md:grid-cols-2 gap-6">
            {ai.localModels.map((group) => (
              <div key={group.id}>
                <dt className="font-semibold text-sm mb-3">{group.title[lang]}</dt>
                <dd>
                  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {group.items.map((model) => <li key={model} className="text-sm text-accent-sky-lt border border-border-light rounded-md px-2 py-1">{model}</li>)}
                  </ul>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <a href="#project-venetravel" className="inline-block text-accent-sky-lt underline underline-offset-4 mt-6">{ai.caseStudyLink[lang]}</a>
      </div>
    </section>
  );
};

export default AISection;
