import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const SOCIAL_LINKS = [
  {
    id: 'contact-linkedin',
    label: 'LinkedIn',
    handle: '/in/andrescabrera24',
    href: 'https://www.linkedin.com/in/andrescabrera24/',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: '#0A66C2',
  },
  {
    id: 'contact-whatsapp-ve',
    label: 'WhatsApp (VE)',
    handle: '+58 412 6204490',
    href: 'https://wa.me/584126204490',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: '#25D366',
  },
  {
    id: 'contact-whatsapp-ar',
    label: 'WhatsApp (AR)',
    handle: '+54 911 35833449',
    href: 'https://wa.me/5491135833449',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
    color: '#25D366',
  },
  {
    id: 'contact-email',
    label: 'Email',
    handle: 'info@andrescabrera.com.ar',
    href: 'mailto:info@andrescabrera.com.ar',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    color: 'var(--accent-sky)',
  },
];

const ContactSection: React.FC = () => {
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
      { threshold: 0.1 }
    );

    const items = ref.current?.querySelectorAll('.reveal, .reveal-child');
    items?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-section"
      style={{ background: 'var(--bg-surface)', borderTop: '1px solid var(--border)' }}
      aria-label="Contact information"
    >
      <div className="section-container">
        <div className="text-center mb-16 reveal">
          <span className="tech-badge mb-4 inline-block">Get in Touch</span>
          <h2
            className="font-display font-bold text-text-primary mb-4"
            style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
          >
            Let&apos;s Build Something{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <p className="text-text-muted text-lg max-w-xl mx-auto">
            Open to exciting Travel Tech or platform engineering opportunities.
            Remote-first — based in Argentina & Venezuela.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Contact cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {SOCIAL_LINKS.map((link, i) => (
              <a
                key={link.id}
                id={link.id}
                href={link.href}
                {...(link.href.startsWith('mailto') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                className="glass-card p-5 flex items-center gap-4 reveal-child no-underline group"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: `${link.color}18`,
                    border: `1px solid ${link.color}40`,
                    color: link.color,
                  }}
                >
                  {link.icon}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-semibold text-text-primary text-sm group-hover:text-accent-sky transition-colors">
                    {link.label}
                  </p>
                  <p className="font-mono text-text-muted text-xs mt-0.5 truncate">{link.handle}</p>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-auto text-text-faint group-hover:text-accent-sky transition-colors flex-shrink-0"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Location & availability */}
          <div
            className="glass-card p-6 reveal flex flex-col sm:flex-row gap-6 items-start sm:items-center"
          >
            {/* Location */}
            <div className="flex items-center gap-3 flex-1">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(14,165,233,0.1)', border: '1px solid rgba(14,165,233,0.2)' }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-sky)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="font-display font-semibold text-text-primary text-sm">Remote</p>
                <p className="text-text-muted text-xs font-mono">Argentina 🇦🇷 · Venezuela 🇻🇪</p>
              </div>
            </div>

            <div className="w-px h-10 bg-border-dark hidden sm:block" aria-hidden="true" />

            {/* Availability */}
            <div className="flex items-center gap-3 flex-1">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
              >
                <span className="w-3 h-3 rounded-full bg-accent-travel" style={{ animation: 'pulseGlow 2s ease-in-out infinite' }} aria-hidden="true" />
              </div>
              <div>
                <p className="font-display font-semibold text-accent-travel text-sm">Available</p>
                <p className="text-text-muted text-xs font-mono">Open to new opportunities</p>
              </div>
            </div>

            <div className="w-px h-10 bg-border-dark hidden sm:block" aria-hidden="true" />

            {/* Schedule call CTA */}
            <Link
              href="/schedule"
              className="btn-primary text-sm flex-shrink-0"
              id="contact-schedule-call"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8"  y1="2" x2="8"  y2="6"/>
                <line x1="3"  y1="10" x2="21" y2="10"/>
              </svg>
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
