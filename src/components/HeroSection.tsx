import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ROLES = [
  'Travel Tech Engineer',
  'Flight Aggregation Architect',
  'Backend Systems Specialist',
  'Cloud Native Developer',
];

const HeroSection: React.FC = () => {
  const roleRef  = useRef<HTMLSpanElement>(null);
  const roleIdx  = useRef(0);
  const charIdx  = useRef(0);
  const deleting = useRef(false);

  // Typewriter effect
  useEffect(() => {
    const el = roleRef.current;
    if (!el) return;

    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const currentRole = ROLES[roleIdx.current];
      if (!deleting.current) {
        el.textContent = currentRole.slice(0, charIdx.current + 1);
        charIdx.current++;
        if (charIdx.current === currentRole.length) {
          deleting.current = true;
          timer = setTimeout(tick, 2200);
          return;
        }
        timer = setTimeout(tick, 65);
      } else {
        el.textContent = currentRole.slice(0, charIdx.current - 1);
        charIdx.current--;
        if (charIdx.current === 0) {
          deleting.current = false;
          roleIdx.current  = (roleIdx.current + 1) % ROLES.length;
          timer = setTimeout(tick, 300);
          return;
        }
        timer = setTimeout(tick, 35);
      }
    };

    timer = setTimeout(tick, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden hero-gradient"
      aria-label="Hero section"
    >
      {/* Glow orbs */}
      <div
        className="glow-orb w-96 h-96 opacity-30"
        style={{ top: '-80px', left: '-60px', background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb w-80 h-80 opacity-20"
        style={{ bottom: '10%', right: '-40px', background: 'radial-gradient(circle, rgba(16,185,129,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="glow-orb w-64 h-64 opacity-15"
        style={{ top: '30%', right: '20%', background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-5"
        style={{
          backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="section-container w-full pt-24 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">

          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span
                className="tech-badge tech-badge-travel"
                style={{ fontSize: '13px', padding: '6px 16px' }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-accent-travel inline-block"
                  style={{ animation: 'pulseGlow 2s ease-in-out infinite' }}
                  aria-hidden="true"
                />
                Available for new opportunities
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display font-bold text-text-primary mb-4"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)', lineHeight: '1.1' }}
            >
              Architecting the Future of{' '}
              <span className="gradient-text block sm:inline">
                Travel Technology
              </span>
            </h1>

            {/* Typewriter subtitle */}
            <p className="font-mono text-accent-sky mb-6 cursor"
              style={{ fontSize: 'clamp(16px, 2vw, 20px)' }}
            >
              <span ref={roleRef} aria-live="polite">Travel Tech Engineer</span>
            </p>

            {/* Bio */}
            <p className="text-text-muted mb-8 max-w-xl mx-auto lg:mx-0"
              style={{ fontSize: '17px', lineHeight: '1.75' }}
            >
              Senior Software Engineer specializing in{' '}
              <strong className="text-text-primary">flight aggregation platforms</strong>,{' '}
              <strong className="text-text-primary">GDS integrations</strong>, and{' '}
              <strong className="text-text-primary">cloud-native microservices</strong>.
              Building the infrastructure that moves millions of travelers.
            </p>

            {/* Key stats inline */}
            <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start text-sm">
              {[
                { val: '12M+',  label: 'Daily Searches', color: 'var(--accent-sky)' },
                { val: '10+',   label: 'Microservices',  color: 'var(--accent-travel)' },
                { val: '7+',    label: 'Provider Integrations',  color: 'var(--accent-fintech)' },
              ].map(({ val, label, color }) => (
                <div key={label} className="flex items-center gap-2">
                  <span className="font-display font-bold text-xl" style={{ color }}>{val}</span>
                  <span className="text-text-muted">{label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="/andrescabrera-eng.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
                id="hero-cv-english"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                CV — English
              </a>
              <a
                href="/andrescabrera-spa.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
                id="hero-cv-spanish"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                CV — Español
              </a>
              <Link
                href="/schedule"
                className="btn-secondary"
                id="hero-meet-me"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8"  y1="2" x2="8"  y2="6"/>
                  <line x1="3"  y1="10" x2="21" y2="10"/>
                </svg>
                Meet Me
              </Link>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative float-animation" style={{ width: 'clamp(220px, 28vw, 360px)' }}>
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #0EA5E9, #10B981, #8B5CF6, #0EA5E9)',
                  padding: '3px',
                  borderRadius: '50%',
                  animation: 'gradientShift 8s linear infinite',
                  backgroundSize: '200% 200%',
                }}
                aria-hidden="true"
              >
                <div className="w-full h-full rounded-full bg-bg-primary" />
              </div>

              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{
                  borderRadius: '50%',
                  border: '4px solid transparent',
                  background: 'linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box, conic-gradient(#0EA5E9, #10B981, #8B5CF6, #0EA5E9) border-box',
                  aspectRatio: '1 / 1',
                }}
              >
                <Image
                  src="/foto-andres.jpg"
                  alt="Andrés Cabrera — Software Engineer"
                  width={360}
                  height={360}
                  priority
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '50%',
                  }}
                />
              </div>

              {/* Floating label */}
              <div
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass-card px-4 py-2 flex items-center gap-2 whitespace-nowrap"
                style={{ borderRadius: '999px', boxShadow: '0 4px 20px rgba(0,0,0,0.5)' }}
              >
                <span className="w-2 h-2 rounded-full bg-accent-travel" style={{ animation: 'pulseGlow 2s ease-in-out infinite' }} aria-hidden="true" />
                <span className="font-mono text-xs text-text-muted">@andrelo</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50 animate-bounce"
        aria-hidden="true"
      >
        <span className="text-text-faint text-xs font-mono">scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-faint">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
