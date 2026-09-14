import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const TRAVEL_STACK = ['Kotlin', 'Scala', 'Java', 'GDS APIs', 'NDC/IATA', 'Kafka', 'Docker', 'k8s'];

const GDS_PROVIDERS = [
  { name: 'Amadeus',     icon: '✈' },
  { name: 'Sabre',       icon: '🛫' },
  { name: 'Travelport',  icon: '🌐' },
  { name: 'TravelFusion',icon: '🔗' },
];

const LCC_PROVIDERS = [
  { name: 'Volaris',         flag: '🇲🇽' },
  { name: 'Turkish Airlines', flag: '🇹🇷' },
  { name: 'Air Europa',      flag: '🇪🇸' },
];

const TravelTechSection: React.FC = () => {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    const items = ref.current?.querySelectorAll('.reveal, .reveal-child');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="travel-tech"
      ref={ref}
      className="py-section relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
      aria-label={t.travel.sectionLabel}
    >
      {/* Background glow */}
      <div
        className="glow-orb w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ top: '0', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(16,185,129,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="tech-badge tech-badge-travel mb-4 inline-block">{t.travel.badge}</span>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-primary)' }}
          >
            {t.travel.titleA}{' '}
            <span className="gradient-text">{t.travel.titleB}</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            {t.travel.intro}
          </p>
        </div>

        {/* Main featured card — starlings.travel */}
        <div
          className="glass-card p-8 lg:p-12 mb-12 reveal"
          style={{
            borderColor: 'rgba(16,185,129,0.3)',
            background: 'linear-gradient(135deg, rgba(16,185,129,0.05) 0%, rgba(15,23,36,0.8) 100%)',
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            {/* Left: Company info */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(16,185,129,0.15)', border: '1px solid rgba(16,185,129,0.3)' }}
                  aria-hidden="true"
                >
                  ✈
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display font-bold text-text-primary text-2xl">starlings.travel</h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-badge"
                      style={{ background: 'rgba(16,185,129,0.15)', color: '#34D399', border: '1px solid rgba(16,185,129,0.3)' }}
                    >
                      Current
                    </span>
                  </div>
                  <p className="text-text-muted text-sm font-mono">{t.travel.starlingsPeriod}</p>
                </div>
              </div>

              <p className="text-text-muted mb-6 leading-relaxed">
                {t.travel.starlingsDescA}
                <strong className="text-accent-travel">{t.travel.starlingsStrong}</strong>
                {t.travel.starlingsDescB}
              </p>

              {/* Key achievements */}
              <ul className="space-y-3 mb-6 list-none p-0">
                {[
                  { icon: '🚀', text: t.travel.achievements[0] },
                  { icon: '🔌', text: t.travel.achievements[1] },
                  { icon: '📦', text: t.travel.achievements[2] },
                  { icon: '🌐', text: t.travel.achievements[3] },
                ].map(({ icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm">
                    <span className="text-lg mt-0.5 flex-shrink-0" aria-hidden="true">{icon}</span>
                    <span className="text-text-muted">{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {TRAVEL_STACK.map((tech) => (
                  <span key={tech} className="tech-badge tech-badge-travel">{tech}</span>
                ))}
              </div>
            </div>

            {/* Right: Integration diagram */}
            <div className="flex-shrink-0 w-full lg:w-80" aria-label="Flight aggregation architecture diagram">
              <div
                className="p-5 rounded-2xl"
                style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)' }}
              >
                <p className="text-text-faint text-xs font-mono uppercase tracking-widest mb-4 text-center">
                  {t.travel.ecosystem}
                </p>

                {/* GDS providers */}
                <div className="mb-4">
                  <p className="text-text-muted text-xs font-mono mb-2 flex items-center gap-1">
                    <span aria-hidden="true">⬡</span> {t.travel.gds}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {GDS_PROVIDERS.map(({ name, icon }) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono"
                        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                      >
                        <span aria-hidden="true">{icon}</span> {name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center my-3" aria-hidden="true">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6" style={{ background: 'var(--accent-travel)' }} />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="var(--accent-travel)">
                      <path d="M6 8L0 0h12L6 8z"/>
                    </svg>
                  </div>
                </div>

                {/* Aggregator core */}
                <div
                  className="rounded-xl py-3 px-4 text-center mb-3"
                  style={{
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(14,165,233,0.1))',
                    border: '1px solid rgba(16,185,129,0.4)',
                  }}
                >
                  <p className="text-accent-travel text-xs font-mono font-bold">{t.travel.aggregatorCore}</p>
                  <p className="text-text-faint text-xs font-mono mt-1">{t.travel.aggregatorSub}</p>
                </div>

                {/* Arrow down */}
                <div className="flex justify-center my-3" aria-hidden="true">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-px h-6" style={{ background: 'var(--accent-sky)' }} />
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="var(--accent-sky)">
                      <path d="M6 8L0 0h12L6 8z"/>
                    </svg>
                  </div>
                </div>

                {/* LCC providers */}
                <div>
                  <p className="text-text-muted text-xs font-mono mb-2 flex items-center gap-1">
                    <span aria-hidden="true">⬡</span> {t.travel.lcc}
                  </p>
                  <div className="grid grid-cols-1 gap-2">
                    {LCC_PROVIDERS.map(({ name, flag }) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono"
                        style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', color: 'var(--text-muted)' }}
                      >
                        <span aria-hidden="true">{flag}</span> {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Previous travel experience cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Despegar.com */}
          <div
            className="glass-card p-6 reveal-child"
            style={{ borderColor: 'rgba(14,165,233,0.2)', transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}
                aria-hidden="true"
              >
                🦄
              </div>
              <div>
                <h3 className="font-display font-semibold text-text-primary text-lg">Despegar.com</h3>
                <p className="text-text-faint text-xs font-mono">{t.travel.despegarPeriod}</p>
              </div>
            </div>
            <p className="text-text-muted text-sm mb-3 leading-relaxed">
              {t.travel.despegarDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Scala', 'Finatra', 'Akka', 'Sabre', 'Amadeus', 'Travelport'].map((t) => (
                <span key={t} className="tech-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Avantrip */}
          <div
            className="glass-card p-6 reveal-child"
            style={{ borderColor: 'rgba(14,165,233,0.2)', transitionDelay: '200ms' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl"
                style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}
                aria-hidden="true"
              >
                🗺
              </div>
              <div>
                <h3 className="font-display font-semibold text-text-primary text-lg">Avantrip.com</h3>
                <p className="text-text-faint text-xs font-mono">{t.travel.avantripPeriod}</p>
              </div>
            </div>
            <p className="text-text-muted text-sm mb-3 leading-relaxed">
              {t.travel.avantripDesc}
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java', 'Spring', 'Angular 6', 'Kafka', 'SAP Travel One'].map((t) => (
                <span key={t} className="tech-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TravelTechSection;
