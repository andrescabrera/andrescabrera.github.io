import React, { useEffect, useRef } from 'react';

const EXPERIENCES = [
  {
    id: 'exp-starlings',
    company: 'starlings.travel',
    role: 'Software Developer',
    period: 'Apr 2025 — Present',
    domain: 'travel',
    stack: ['Kotlin', 'Java', 'Kafka', 'Docker', 'GDS APIs'],
    highlights: [
      'Scaled flight aggregator to handle 12M+ daily searches via throughput optimization and caching improvements',
      'Led GDS and LCC integration development: Amadeus, Sabre, Travelport, Volaris, Turkish Airlines, AirEuropa, TravelFusion',
      'Redesigned and migrated legacy infrastructure to a containerized microservices architecture for high availability',
    ],
  },
  {
    id: 'exp-esportunity',
    company: 'Esportunity',
    role: 'Founder Developer',
    period: 'Apr 2023 — Apr 2025',
    domain: 'tech',
    stack: ['Kotlin', 'Node.js', 'Kafka', 'GraphQL', 'k8s', 'MongoDB', 'DynamoDB', 'AWS'],
    highlights: [
      'Architected 10+ event-driven microservices for a next-gen Esports startup from the ground up',
      'Built real-time chat system for thousands of concurrent users via WebSocket and Redis PubSub — 99.9% uptime',
      'Improved response times 40% with GraphQL optimizations and intelligent caching / idempotency strategies',
      'Led engineering team end-to-end; accelerated product launch by 30% while implementing observability stack',
    ],
  },
  {
    id: 'exp-rappi',
    company: 'Rappi · RappiPay',
    role: 'Software Developer & Tech Lead',
    period: 'Nov 2020 — Apr 2023',
    domain: 'fintech',
    stack: ['Kotlin', 'Spring', 'gRPC', 'Kafka', 'k8s', 'MongoDB', 'PostgreSQL', 'AWS', 'ISO8583'],
    highlights: [
      'Led RappiPay Authorizer team: credit/debit card processing, anti-fraud systems, ISO8583 switch integrations',
      'Architected multi-country card authorizer using Netty financial frames over ISO8583 standard',
      'Led RappiPay Movements team: major refactor of wallet movements core services across all LATAM',
      'Managed cross-functional teams across Mexico, Colombia, and Argentina',
    ],
  },
  {
    id: 'exp-wenance',
    company: 'Fintech Banking Startup',
    role: 'Software Developer',
    period: 'Mar 2020 — Nov 2020',
    domain: 'fintech',
    stack: ['Java 11', 'Spring', 'Project Reactor', 'AWS SQS', 'Mambu', 'PostgreSQL'],
    highlights: [
      'Designed and built new financial disbursements solution using Project Reactor and async messaging (AWS SQS)',
      'Maintained banking core (Mambu) and public APIs; integrated banking providers STP (MX) and Instantor (ES)',
    ],
  },
  {
    id: 'exp-despegar',
    company: 'Despegar.com',
    role: 'Software Developer',
    period: 'Oct 2018 — Mar 2020',
    domain: 'travel',
    stack: ['Scala', 'Finatra', 'Finagle', 'Akka', 'Gatling', 'GDS APIs'],
    highlights: [
      'Developed and maintained Scala backend services for Post-Selling Voluntary Flight Exchanges platform',
      'Resolved complex integrations with major GDS: Sabre, Travelport, Amadeus for ticketing and exchanges',
      'Designed fare arbitrage logic to optimize flight pricing models and capture revenue opportunities',
    ],
  },
  {
    id: 'exp-avantrip',
    company: 'Avantrip.com',
    role: 'Full Stack Java Developer',
    period: 'Jan 2018 — Oct 2018',
    domain: 'travel',
    stack: ['Java', 'Spring', 'Angular 6', 'Kafka', 'AWS ECS', 'SAP Travel One'],
    highlights: [
      'Built new back-office management system with Spring + AngularJS for multiple travel alliances',
      'Developed SAP Travel One billing interface using Spring Cloud Stream messaging',
    ],
  },
  {
    id: 'exp-monsanto',
    company: 'Monsanto (Bayer)',
    role: 'Full Stack Java Developer',
    period: 'May 2017 — Jan 2018',
    domain: 'tech',
    stack: ['Kotlin', 'Spring', 'Kafka Streams', 'Spring Cloud Dataflow', 'CloudFoundry', 'Angular 4'],
    highlights: [
      'Migrated legacy monolith to cloud-based royalties management application using event-driven architecture',
      'Developed functional reactive microtasks with Spring Cloud Dataflow to redesign core billing interfaces',
    ],
  },
  {
    id: 'exp-galicia',
    company: 'Banco Galicia',
    role: 'Java Software Developer',
    period: 'Oct 2016 — May 2017',
    domain: 'fintech',
    stack: ['Java', 'Spring Dynamic Modules', 'OSGi'],
    highlights: [
      'Built new modules for multi-channel banking application on Spring Dynamic Modules / OSGi platform',
    ],
  },
  {
    id: 'exp-hsbc',
    company: 'IBM → HSBC Bank',
    role: 'Lead Full Stack Developer',
    period: 'Jun 2015 — Oct 2016',
    domain: 'fintech',
    stack: ['Java', 'Spring', 'Dojo Toolkit', 'WebSphere', 'MySQL'],
    highlights: [
      'Designed and migrated Money Markets management application for HSBC',
      'Built MatriXS Evergreening SPA; designed microservices backend and dynamic scripting designer',
    ],
  },
];

const DOMAIN_COLORS: Record<string, { bg: string; text: string; border: string; label: string }> = {
  travel:  { bg: 'rgba(16,185,129,0.08)',  text: '#34D399', border: 'rgba(16,185,129,0.3)',  label: 'Travel Tech' },
  fintech: { bg: 'rgba(139,92,246,0.08)',  text: '#A78BFA', border: 'rgba(139,92,246,0.3)',  label: 'FinTech' },
  tech:    { bg: 'rgba(14,165,233,0.08)',  text: '#38BDF8', border: 'rgba(14,165,233,0.3)',  label: 'Engineering' },
};

const ExperienceTimeline: React.FC = () => {
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
      id="experience"
      ref={ref}
      className="py-section"
      aria-label="Work experience timeline"
    >
      <div className="section-container">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="tech-badge mb-4 inline-block">Work Experience</span>
          <h2 className="font-display font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Career Timeline
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            12+ years building software across Travel Tech, FinTech, and platform engineering.
          </p>

          {/* Domain legend */}
          <div className="flex flex-wrap gap-3 justify-center mt-6">
            {Object.entries(DOMAIN_COLORS).map(([key, { text, label }]) => (
              <span key={key} className="flex items-center gap-2 text-sm text-text-muted">
                <span className="w-3 h-3 rounded-full inline-block" style={{ background: text }} aria-hidden="true" />
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop only */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{
              background: 'linear-gradient(to bottom, transparent, var(--accent-sky) 10%, var(--accent-travel) 50%, var(--accent-fintech) 90%, transparent)',
              transform: 'translateX(-50%)',
            }}
            aria-hidden="true"
          />

          <div className="flex flex-col gap-8">
            {EXPERIENCES.map((exp, i) => {
              const domain = DOMAIN_COLORS[exp.domain];
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={exp.id}
                  id={exp.id}
                  className={`reveal relative flex flex-col lg:flex-row gap-4 lg:gap-0 items-start ${
                    isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Card */}
                  <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div
                      className="glass-card p-6 hover:shadow-card-hover transition-all duration-300"
                      style={{ borderColor: domain.border }}
                    >
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span
                              className="text-xs font-mono px-2 py-0.5 rounded-badge"
                              style={{ background: domain.bg, color: domain.text, border: `1px solid ${domain.border}` }}
                            >
                              {domain.label}
                            </span>
                          </div>
                          <h3 className="font-display font-bold text-text-primary text-lg leading-tight">
                            {exp.role}
                          </h3>
                          <p className="font-semibold mt-0.5" style={{ color: domain.text }}>
                            {exp.company}
                          </p>
                        </div>
                        <span className="text-text-faint text-xs font-mono whitespace-nowrap mt-1 flex-shrink-0">
                          {exp.period}
                        </span>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-1.5 mb-4 list-none p-0">
                        {exp.highlights.map((h, hi) => (
                          <li key={hi} className="flex items-start gap-2 text-sm text-text-muted">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: domain.text }} aria-hidden="true" />
                            {h}
                          </li>
                        ))}
                      </ul>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs font-mono px-2 py-0.5 rounded-badge"
                            style={{ background: 'var(--bg-elevated)', color: 'var(--text-muted)', border: '1px solid var(--border)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div
                    className="hidden lg:flex w-2/12 justify-center items-start pt-5 flex-shrink-0"
                    aria-hidden="true"
                  >
                    <div
                      className="w-4 h-4 rounded-full border-2 border-bg-primary"
                      style={{ background: domain.text, boxShadow: `0 0 12px ${domain.text}88` }}
                    />
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
