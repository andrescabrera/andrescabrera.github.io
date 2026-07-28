import React, { useEffect, useRef } from 'react';

const FINTECH_HIGHLIGHTS = [
  {
    id: 'fintech-iso',
    icon: '💳',
    title: 'ISO8583 Card Processing',
    description:
      'Built multi-country credit and debit card authorizer at RappiPay using Netty financial frames over the ISO8583 messaging standard — handling millions of daily transactions across LATAM.',
    tags: ['ISO8583', 'Netty', 'Kotlin', 'Kafka'],
  },
  {
    id: 'fintech-antifraud',
    icon: '🔒',
    title: 'Anti-Fraud Systems',
    description:
      'Maintained and extended anti-fraud infrastructure at RappiPay Authorizer for credit card processing — with real-time webhook integrations and traditional Base1/Base2 file flows.',
    tags: ['Real-time', 'Webhooks', 'k8s', 'gRPC'],
  },
  {
    id: 'fintech-wallet',
    icon: '📱',
    title: 'Wallet Movements Core',
    description:
      "Led major re-architecture of RappiPay's wallet movements core for the super-app across Mexico, Colombia, and Argentina — a year-long engineering initiative.",
    tags: ['Microservices', 'PostgreSQL', 'AWS', 'Team Lead'],
  },
  {
    id: 'fintech-disbursements',
    icon: '🏦',
    title: 'Financial Disbursements',
    description:
      "Designed a Fintech Banking Startup's cashout solution using Project Reactor and in-house async messaging (AWS SQS). Integrated banking providers STP (Mexico) and Instantor (Spain) for loan disbursements.",
    tags: ['Project Reactor', 'Mambu', 'AWS SQS', 'STP'],
  },
];

const FintechSection: React.FC = () => {
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
      id="fintech"
      ref={ref}
      className="py-section relative overflow-hidden"
      style={{ background: 'var(--bg-primary)' }}
      aria-label="FinTech experience"
    >
      {/* Background glow */}
      <div
        className="glow-orb w-[500px] h-[500px] opacity-8 pointer-events-none"
        style={{
          bottom: '-100px',
          right: '-100px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="section-container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
          <div className="flex-1 reveal">
            <span className="tech-badge tech-badge-fintech mb-4 inline-block">Foundation</span>
            <h2
              className="font-display font-bold mb-4"
              style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-primary)' }}
            >
              FinTech{' '}
              <span className="gradient-text-fintech">Pedigree</span>
            </h2>
            <p className="text-text-muted text-lg leading-relaxed max-w-2xl">
              Before focusing on Travel Tech, I spent 3+ years building the financial
              infrastructure of LATAM&apos;s largest super-app. This gives me a unique edge:
              the discipline and rigour of high-stakes transactional systems.
            </p>
          </div>

          {/* Key metrics card */}
          <div
            className="glass-card p-6 w-full lg:w-72 flex-shrink-0 reveal"
            style={{ borderColor: 'rgba(139,92,246,0.3)', background: 'rgba(139,92,246,0.04)' }}
          >
            <p className="font-mono text-xs text-text-faint uppercase tracking-widest mb-4">FinTech Track Record</p>
            <div className="space-y-4">
              {[
                { label: 'Years in FinTech',      val: '3+',    color: 'var(--accent-fintech)' },
                { label: 'Transactions/day',       val: 'M+',    color: '#A78BFA' },
                { label: 'Countries covered',      val: '5+',    color: '#C084FC', note: 'MX · CO · AR · ES + more' },
                { label: 'Protocols mastered',     val: 'ISO8583', color: 'var(--accent-fintech)', note: 'Card networks' },
              ].map(({ label, val, color, note }) => (
                <div key={label}>
                  <div className="flex justify-between items-center">
                    <span className="text-text-muted text-sm">{label}</span>
                    <span className="font-display font-bold text-lg" style={{ color }}>{val}</span>
                  </div>
                  {note && <p className="text-text-faint text-xs mt-0.5">{note}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Company highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Rappi card */}
          <div
            className="glass-card p-6 reveal"
            style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.04)' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}
                aria-hidden="true"
              >
                🦄
              </div>
              <div>
                <h3 className="font-display font-bold text-text-primary text-xl">Rappi · RappiPay</h3>
                <p className="text-text-faint text-xs font-mono">Nov 2020 – Apr 2023 · Developer & TL</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Payments infrastructure for one of LATAM&apos;s most valued unicorns. Led two critical
              teams: <strong className="text-text-primary">RappiPay Authorizer</strong> (card processing, anti-fraud)
              and <strong className="text-text-primary">RappiPay Movements</strong> (wallet core re-architecture).
            </p>
            <div className="flex flex-wrap gap-2">
              {['Kotlin', 'Kafka', 'gRPC', 'ISO8583', 'k8s', 'AWS', 'Postgres', 'MongoDB'].map((t) => (
                <span key={t} className="tech-badge-fintech tech-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{t}</span>
              ))}
            </div>
          </div>

          {/* Wenance card */}
          <div
            className="glass-card p-6 reveal"
            style={{ borderColor: 'rgba(139,92,246,0.25)', background: 'rgba(139,92,246,0.04)', transitionDelay: '100ms' }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.3)' }}
                aria-hidden="true"
              >
                🏦
              </div>
              <div>
                <h3 className="font-display font-bold text-text-primary text-xl">Fintech Banking Startup</h3>
                <p className="text-text-faint text-xs font-mono">Mar 2020 – Nov 2020 · Software Developer</p>
              </div>
            </div>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              Designed the financial disbursement architecture for a digital lending platform.
              Reactive programming with Project Reactor; banking integrations with STP (MX) and Instantor (ES);
              core banking via Mambu.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Java 11', 'Project Reactor', 'Mambu', 'AWS SQS', 'Postgres', 'STP'].map((t) => (
                <span key={t} className="tech-badge-fintech tech-badge" style={{ fontSize: '11px', padding: '3px 10px' }}>{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Capabilities grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {FINTECH_HIGHLIGHTS.map((item, i) => (
            <div
              key={item.id}
              id={item.id}
              className="glass-card p-5 reveal-child"
              style={{
                borderColor: 'rgba(139,92,246,0.15)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                <div>
                  <h4 className="font-display font-semibold text-text-primary text-base mb-1">{item.title}</h4>
                  <p className="text-text-muted text-sm leading-relaxed mb-3">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2 py-0.5 rounded-badge"
                        style={{ background: 'rgba(139,92,246,0.1)', color: '#A78BFA', border: '1px solid rgba(139,92,246,0.25)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FintechSection;
