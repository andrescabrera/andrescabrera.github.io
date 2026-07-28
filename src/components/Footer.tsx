import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-8"
      style={{
        background: 'var(--bg-primary)',
        borderTop: '1px solid var(--border)',
      }}
      role="contentinfo"
    >
      <div className="section-container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left: Name + tagline */}
          <div className="flex items-center gap-3">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-display font-bold text-xs"
              style={{ background: 'linear-gradient(135deg, #0EA5E9, #10B981)' }}
              aria-hidden="true"
            >
              AC
            </span>
            <div>
              <p className="font-display font-semibold text-text-primary text-sm">Andrés Cabrera</p>
              <p className="font-mono text-text-faint text-xs">Travel Tech Engineer</p>
            </div>
          </div>

          {/* Center: quick links */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 list-none p-0 m-0">
              {[
                { label: 'CV (EN)', href: '/andrescabrera-eng.pdf' },
                { label: 'CV (ES)', href: '/andrescabrera-spa.pdf' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andrescabrera24/' },
                { label: 'Schedule', href: '/schedule' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target={href.startsWith('http') || href.endsWith('.pdf') ? '_blank' : undefined}
                    rel={href.startsWith('http') || href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                    className="text-text-faint text-xs font-mono hover:text-accent-sky transition-colors no-underline"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: Copyright */}
          <p className="font-mono text-text-faint text-xs">
            © {currentYear} Andrés Cabrera
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;