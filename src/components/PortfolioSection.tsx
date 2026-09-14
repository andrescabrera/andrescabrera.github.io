import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const ESPORTUNITY_SHOTS = [
  { src: '/esportunity/esportunity-feed.webp', alt: 'eSportunity — community feed', label: 'Feed' },
  { src: '/esportunity/esportunity-opportunities.webp', alt: 'eSportunity — opportunities board', label: 'Oportunidades' },
  { src: '/esportunity/esportunity-chat.webp', alt: 'eSportunity — realtime chat', label: 'Chat' },
];

const VENETRAVEL_SHOTS = [
  { src: '/portfolio/venetravel-home.webp', alt: 'Venetravel — homepage', label: 'Home' },
  { src: '/portfolio/venetravel-hotels.webp', alt: 'Venetravel — hotels listing', label: 'Hoteles' },
];

const Gallery: React.FC<{ shots: typeof ESPORTUNITY_SHOTS; accent: string; idPrefix: string }> = ({
  shots,
  accent,
  idPrefix,
}) => {
  const [active, setActive] = useState(0);
  return (
    <div>
      <div
        className="relative overflow-hidden rounded-2xl"
        style={{ border: `1px solid ${accent}40`, aspectRatio: '16 / 10', background: '#0b1220' }}
      >
        {shots.map((shot, i) => (
          <div
            key={shot.src}
            className="absolute inset-0 transition-opacity duration-500"
            style={{ opacity: active === i ? 1 : 0, pointerEvents: active === i ? 'auto' : 'none' }}
            aria-hidden={active !== i}
          >
            <Image
              src={shot.src}
              alt={shot.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority={i === 0}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-3" role="tablist" aria-label="Project screenshots">
        {shots.map((shot, i) => (
          <button
            key={shot.src}
            id={`${idPrefix}-thumb-${i}`}
            role="tab"
            aria-selected={active === i}
            aria-label={`View ${shot.label}`}
            onClick={() => setActive(i)}
            className="relative overflow-hidden rounded-lg transition-all duration-300"
            style={{
              width: '96px',
              aspectRatio: '16 / 10',
              border: `2px solid ${active === i ? accent : 'transparent'}`,
              opacity: active === i ? 1 : 0.6,
            }}
          >
            <Image
              src={shot.src}
              alt=""
              fill
              sizes="96px"
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
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
      id="portfolio"
      ref={ref}
      className="py-section relative overflow-hidden"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
      aria-label="Portfolio projects"
    >
      <div
        className="glow-orb w-[600px] h-[400px] opacity-10 pointer-events-none"
        style={{ top: '0', left: '50%', transform: 'translateX(-50%)', background: 'radial-gradient(ellipse, rgba(14,165,233,0.4) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <span className="tech-badge mb-4 inline-block">Portfolio</span>
          <h2
            className="font-display font-bold mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)', color: 'var(--text-primary)' }}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-text-muted max-w-2xl mx-auto text-lg">
            Products I founded and built — from travel booking at scale to eSports talent matchmaking.
          </p>
        </div>

        {/* Venetravel */}
        <div
          className="glass-card p-8 lg:p-12 mb-12 reveal"
          style={{
            borderColor: 'rgba(14,165,233,0.3)',
            background: 'linear-gradient(135deg, rgba(14,165,233,0.05) 0%, rgba(15,23,36,0.8) 100%)',
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(14,165,233,0.15)', border: '1px solid rgba(14,165,233,0.3)' }}
                  aria-hidden="true"
                >
                  🏝️
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-text-primary text-2xl">Venetravel</h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-badge"
                      style={{ background: 'rgba(14,165,233,0.15)', color: '#38BDF8', border: '1px solid rgba(14,165,233,0.3)' }}
                    >
                      Live
                    </span>
                  </div>
                  <p className="text-text-muted text-sm font-mono">venetravel.net · Travel booking platform</p>
                </div>
              </div>

              <p className="text-text-muted mb-6 leading-relaxed">
                Booking platform for Venezuelan destinations —{' '}
                <strong className="text-text-primary">66+ hotels, flights, tours and attractions</strong>{' '}
                with destination autocomplete, rate quoting, suitcase (maleta) checkout and
                guest onboarding.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Autocomplete', 'Hotels', 'Maleta Checkout', 'Marketplace'].map((tag) => (
                  <span key={tag} className="tech-badge" style={{ fontSize: '12px' }}>{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://venetravel.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  id="portfolio-venetravel-site"
                >
                  Visit venetravel.net
                </a>
              </div>
            </div>

            <div className="flex-1 w-full">
              <div
                className="relative overflow-hidden rounded-2xl"
                style={{ border: '1px solid rgba(14,165,233,0.25)', aspectRatio: '16 / 10', background: '#0b1220' }}
              >
                <video
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  src="/portfolio/venetravel-journey.mp4"
                  poster="/portfolio/venetravel-home.webp"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Venetravel booking journey — search, quote, suitcase and checkout"
                >
                  <source src="/portfolio/venetravel-journey.webm" type="video/webm" />
                  <source src="/portfolio/venetravel-journey.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="flex gap-2 mt-3">
                {VENETRAVEL_SHOTS.map((shot) => (
                  <a
                    key={shot.src}
                    href="https://venetravel.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative overflow-hidden rounded-lg block"
                    style={{ width: '96px', aspectRatio: '16 / 10', border: '1px solid rgba(14,165,233,0.25)' }}
                    aria-label={`Venetravel ${shot.label} — open site`}
                  >
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="96px"
                      style={{ objectFit: 'cover', objectPosition: 'center top' }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* eSportunity */}
        <div
          className="glass-card p-8 lg:p-12 reveal"
          style={{
            borderColor: 'rgba(244,63,94,0.3)',
            background: 'linear-gradient(135deg, rgba(244,63,94,0.05) 0%, rgba(15,23,36,0.8) 100%)',
          }}
        >
          <div className="flex flex-col lg:flex-row gap-10 items-start">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'rgba(244,63,94,0.15)', border: '1px solid rgba(244,63,94,0.3)' }}
                  aria-hidden="true"
                >
                  🎮
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-display font-bold text-text-primary text-2xl">eSportunity</h3>
                    <span
                      className="text-xs font-mono px-2 py-0.5 rounded-badge"
                      style={{ background: 'rgba(244,63,94,0.15)', color: '#FB7185', border: '1px solid rgba(244,63,94,0.3)' }}
                    >
                      Founder
                    </span>
                  </div>
                  <p className="text-text-muted text-sm font-mono">Apr 2023 — Apr 2025 · Founder Developer</p>
                </div>
              </div>

              <p className="text-text-muted mb-6 leading-relaxed">
                A talent-matchmaking platform for competitive gaming: opportunity board with{' '}
                <strong className="text-text-primary">150+ active listings</strong>, community feed and{' '}
                <strong className="text-text-primary">realtime chat</strong> connecting players with
                eSports organizations across Latin America.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Realtime Chat', 'Matchmaking', 'Feed', 'BETA'].map((tag) => (
                  <span key={tag} className="tech-badge" style={{ fontSize: '12px' }}>{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.upwork.com/freelancers/~0142a6acf7665542e5?p=1907834074140811264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  id="portfolio-esportunity-upwork"
                >
                  View on Upwork
                </a>
                <a
                  href="https://github.com/andrescabrera-esportunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                  id="portfolio-esportunity-github"
                >
                  GitHub — eSportunity
                </a>
              </div>
            </div>

            <div className="flex-1 w-full">
              <Gallery shots={ESPORTUNITY_SHOTS} accent="#F43F5E" idPrefix="esportunity" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
