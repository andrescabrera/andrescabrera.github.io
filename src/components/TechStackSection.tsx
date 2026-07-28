import React, { useEffect, useRef } from 'react';

const STACK_GROUPS = [
  {
    id: 'travel-tech',
    category: 'Travel Tech',
    badge: 'travel',
    icon: '✈',
    color: 'var(--accent-travel)',
    borderColor: 'rgba(16,185,129,0.3)',
    bgColor: 'rgba(16,185,129,0.05)',
    items: [
      { name: 'GDS APIs',        desc: 'Amadeus · Sabre · Travelport' },
      { name: 'NDC / IATA',      desc: 'Modern airline distribution' },
      { name: 'LCC Connectors',  desc: 'Volaris · Turkish · AirEuropa' },
      { name: 'TravelFusion',    desc: 'Aggregator integration' },
      { name: 'ISO8583',         desc: 'Financial messaging standard' },
    ],
  },
  {
    id: 'backend',
    category: 'Backend',
    badge: 'default',
    icon: '⚙',
    color: 'var(--accent-sky)',
    borderColor: 'rgba(14,165,233,0.3)',
    bgColor: 'rgba(14,165,233,0.05)',
    items: [
      { name: 'Kotlin',          desc: 'Primary language' },
      { name: 'Scala',           desc: 'Akka · Finatra · Finagle' },
      { name: 'Java 25',         desc: 'Spring Boot 4 · Spring FW 7' },
      { name: 'Project Reactor', desc: 'Reactive Streams · RxJava' },
      { name: 'gRPC',            desc: 'High-perf RPC' },
      { name: 'GraphQL',         desc: 'API design · schema-first' },
    ],
  },
  {
    id: 'messaging',
    category: 'Messaging & Events',
    badge: 'default',
    icon: '📡',
    color: 'var(--accent-amber)',
    borderColor: 'rgba(245,158,11,0.3)',
    bgColor: 'rgba(245,158,11,0.05)',
    items: [
      { name: 'Apache Kafka',    desc: 'Event streaming · Kafka Streams' },
      { name: 'Redis PubSub',    desc: 'Real-time messaging · caching' },
      { name: 'AWS SQS',         desc: 'Async queue processing' },
      { name: 'WebSockets',      desc: 'Real-time bidirectional comms' },
      { name: 'Spring Cloud Stream', desc: 'Messaging abstraction' },
    ],
  },
  {
    id: 'cloud',
    category: 'Cloud & Infra',
    badge: 'default',
    icon: '☁',
    color: '#60A5FA',
    borderColor: 'rgba(96,165,250,0.3)',
    bgColor: 'rgba(96,165,250,0.05)',
    items: [
      { name: 'AWS',             desc: 'EKS · Lambda · S3 · ECS · EC2' },
      { name: 'Kubernetes',      desc: 'Orchestration · Helm · EKS' },
      { name: 'Docker',          desc: 'Containerization · Compose' },
      { name: 'Cloudflare',      desc: 'Workers · Edge Computing · Wrangler' },
      { name: 'Spring Cloud',    desc: 'Cloud Foundry · Dataflow' },
    ],
  },
  {
    id: 'data',
    category: 'Data',
    badge: 'default',
    icon: '🗄',
    color: '#F472B6',
    borderColor: 'rgba(244,114,182,0.3)',
    bgColor: 'rgba(244,114,182,0.05)',
    items: [
      { name: 'MongoDB',         desc: 'Document store · Atlas' },
      { name: 'PostgreSQL',      desc: 'Relational · Spring Data' },
      { name: 'DynamoDB',        desc: 'AWS NoSQL · high-throughput' },
      { name: 'ElasticSearch',   desc: 'Full-text search · analytics' },
      { name: 'Redis',           desc: 'Cache · sessions · pub/sub' },
    ],
  },
  {
    id: 'observability',
    category: 'Observability',
    badge: 'default',
    icon: '🔭',
    color: 'var(--accent-fintech)',
    borderColor: 'rgba(139,92,246,0.3)',
    bgColor: 'rgba(139,92,246,0.05)',
    items: [
      { name: 'Kubernetes Monitoring', desc: 'Cluster health · pods · HPA' },
      { name: 'Introspection Patterns', desc: 'Built-in observability design' },
      { name: 'CI/CD Pipelines',       desc: 'GitHub Actions · automated deploys' },
      { name: 'Load Testing',          desc: 'Gatling · performance profiling' },
    ],
  },
  {
    id: 'frontend',
    category: 'Frontend',
    badge: 'default',
    icon: '🖥',
    color: '#34D399',
    borderColor: 'rgba(52,211,153,0.3)',
    bgColor: 'rgba(52,211,153,0.05)',
    items: [
      { name: 'TypeScript',      desc: 'ES6+ · strict mode' },
      { name: 'Next.js',         desc: 'SSR · Static export · App Router' },
      { name: 'React',           desc: 'Hooks · Context · Performance' },
      { name: 'Angular',         desc: 'Angular 6+ · RxJS · NgRx' },
    ],
  },
];

const TechStackSection: React.FC = () => {
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
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );

    const items = ref.current?.querySelectorAll('.reveal, .reveal-child');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stack"
      ref={ref}
      className="py-section"
      style={{ background: 'var(--bg-surface)' }}
      aria-label="Technology stack"
    >
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="tech-badge mb-4 inline-block">Technical Arsenal</span>
          <h2
            className="font-display font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Tech Stack
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Full-spectrum platform engineering — from API design to cloud infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <a
              href="https://roadmap.sh/backend?s=65f99212adfe421617302b21"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm py-2 px-4"
              id="stack-roadmap-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              Full Roadmap
            </a>
            <a
              href="https://app.pluralsight.com/profile/andres-cabrera"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary text-sm py-2 px-4"
              id="stack-pluralsight-link"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="8" r="7"/>
                <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
              </svg>
              Pluralsight Skill IQ
            </a>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {STACK_GROUPS.map((group, gi) => (
            <div
              key={group.id}
              id={group.id}
              className="glass-card p-6 reveal-child"
              style={{
                borderColor: group.borderColor,
                background: group.bgColor,
                transitionDelay: `${gi * 60}ms`,
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: `${group.bgColor}`, border: `1px solid ${group.borderColor}` }}
                  aria-hidden="true"
                >
                  {group.icon}
                </span>
                <h3
                  className="font-display font-bold text-base"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Items */}
              <ul className="space-y-2.5 list-none p-0">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-start gap-2">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                      style={{ background: group.color }}
                      aria-hidden="true"
                    />
                    <div>
                      <span className="font-mono text-sm font-medium text-text-primary">{item.name}</span>
                      {item.desc && (
                        <span className="text-text-faint text-xs ml-2">· {item.desc}</span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
