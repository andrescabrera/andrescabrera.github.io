import React, { useEffect, useRef, useState } from 'react';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

const STATS: Stat[] = [
  {
    value: 12,
    suffix: 'M+',
    label: 'Daily Searches',
    description: 'Flight searches processed daily after platform optimization',
    color: 'var(--accent-sky)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14v2.92z"/>
      </svg>
    ),
  },
  {
    value: 10,
    suffix: '+',
    label: 'Microservices Deployed',
    description: 'Event-driven services architected from the ground up in Starlings',
    color: 'var(--accent-travel)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    value: 7,
    suffix: '+',
    label: 'Provider Integrations',
    description: 'LCCs (AirEuropa, Volaris, etc.), GDSs (Amadeus, Sabre), and aggregators (Travelfusion)',
    color: 'var(--accent-fintech)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/>
      </svg>
    ),
  },
  {
    value: 99,
    suffix: '.9%',
    label: 'Uptime SLA',
    description: 'Migrated from legacy monoliths to a container based architecture to reach high availability',
    color: 'var(--accent-amber)',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
];

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

const StatCard: React.FC<{ stat: Stat; active: boolean; delay: number }> = ({ stat, active, delay }) => {
  const count = useCounter(stat.value, 1800, active);

  return (
    <div
      className="glass-card p-6 flex flex-col gap-3 reveal-child"
      style={{
        transitionDelay: `${delay}ms`,
        borderColor: active ? `${stat.color}33` : undefined,
      }}
    >
      <div style={{ color: stat.color, opacity: 0.9 }}>{stat.icon}</div>
      <div className="flex items-end gap-1">
        <span
          className="font-display font-bold"
          style={{ fontSize: '44px', lineHeight: '1', color: stat.color }}
          aria-live="polite"
          aria-atomic="true"
        >
          {count}
        </span>
        <span className="font-display font-bold text-2xl mb-1" style={{ color: stat.color }}>
          {stat.suffix}
        </span>
      </div>
      <div>
        <p className="font-display font-semibold text-text-primary text-base mb-1">{stat.label}</p>
        <p className="text-text-muted text-sm leading-relaxed">{stat.description}</p>
      </div>
    </div>
  );
};

const StatsBar: React.FC = () => {
  const ref    = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="stats"
      ref={ref}
      className="py-section-sm"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}
      aria-label="Impact statistics"
    >
      <div className="section-container">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ${active ? '' : ''}`}
        >
          {STATS.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} active={active} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
