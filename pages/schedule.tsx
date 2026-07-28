import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';

const CALENDAR_BASE = 'https://calendar.zoho.com/eventreqForm/zz08011230911dd8aa00155d0609c809fe7c81bc79df33fe230d1f6a349c30137fa76d017394d6c39f6f82862002af3d9aa8144c51?theme=0&l=en';

const Schedule: NextPage = () => {
  const [calendarUrl, setCalendarUrl] = useState<string>('');

  useEffect(() => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const encodedTZ = encodeURIComponent(timeZone);
    setCalendarUrl(`${CALENDAR_BASE}&tz=${encodedTZ}`);
  }, []);

  return (
    <>
      <Head>
        <title>Schedule a Meeting — Andrés Cabrera</title>
        <meta name="description" content="Book a time to connect with Andrés Cabrera, Travel Tech Engineer. Schedule a discovery call or technical conversation." />
        <meta name="robots" content="noindex, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <NavBar />

        <main
          id="schedule-main"
          style={{ paddingTop: '88px', minHeight: 'calc(100vh - 88px)' }}
        >
          {/* Page header */}
          <div
            className="py-16 text-center relative overflow-hidden"
            style={{ background: 'var(--bg-surface)', borderBottom: '1px solid var(--border)' }}
          >
            {/* Glow */}
            <div
              className="glow-orb w-80 h-80 opacity-20 pointer-events-none"
              style={{
                top: '-60px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: 'radial-gradient(circle, rgba(14,165,233,0.5) 0%, transparent 70%)',
              }}
              aria-hidden="true"
            />
            <div className="section-container relative">
              <span className="tech-badge mb-4 inline-block">Let&apos;s connect</span>
              <h1
                className="font-display font-bold text-text-primary mb-4"
                style={{ fontSize: 'clamp(28px, 4vw, 44px)' }}
              >
                Schedule a{' '}
                <span className="gradient-text">Meeting</span>
              </h1>
              <p className="text-text-muted text-lg max-w-xl mx-auto">
                Pick a time that works for you. Whether it&apos;s a technical deep-dive,
                a discovery call, or just a quick introduction — I&apos;m happy to connect.
              </p>

              {/* Quick info cards */}
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {[
                  { icon: '🌍', label: 'Remote-first', sub: 'Argentina · Venezuela' },
                  { icon: '🕐', label: 'ART / VET', sub: 'UTC-3 / UTC-4' },
                  { icon: '✈', label: 'Travel Tech focus', sub: 'GDS · NDC · Aggregation' },
                ].map(({ icon, label, sub }) => (
                  <div
                    key={label}
                    className="glass-card px-5 py-3 flex items-center gap-3"
                    style={{ borderRadius: '12px' }}
                  >
                    <span className="text-xl" aria-hidden="true">{icon}</span>
                    <div className="text-left">
                      <p className="font-display font-semibold text-text-primary text-sm">{label}</p>
                      <p className="font-mono text-text-faint text-xs">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Calendar embed */}
          <div className="section-container py-12">
            <div
              className="glass-card overflow-hidden"
              style={{ borderRadius: '20px', minHeight: '640px' }}
            >
              {calendarUrl ? (
                <iframe
                  src={calendarUrl}
                  title="Schedule Appointment with Andrés Cabrera"
                  frameBorder="0"
                  scrolling="auto"
                  height="640px"
                  width="100%"
                  style={{
                    display: 'block',
                    border: 'none',
                    background: 'transparent',
                    minHeight: '640px',
                  }}
                  aria-label="Appointment scheduling calendar"
                />
              ) : (
                <div className="flex items-center justify-center h-64">
                  <div className="flex flex-col items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-full border-2 border-accent-sky border-t-transparent"
                      style={{ animation: 'spin 0.8s linear infinite' }}
                      aria-label="Loading calendar..."
                    />
                    <p className="text-text-muted text-sm font-mono">Loading calendar…</p>
                  </div>
                </div>
              )}
            </div>

            {/* Alternative contact */}
            <div className="mt-8 text-center">
              <p className="text-text-muted text-sm">
                Prefer to reach out directly?{' '}
                <a
                  href="mailto:info@andrescabrera.com.ar"
                  className="text-accent-sky hover:text-accent-sky-lt transition-colors no-underline font-medium"
                  id="schedule-email-link"
                >
                  info@andrescabrera.com.ar
                </a>
              </p>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
};

export default Schedule;