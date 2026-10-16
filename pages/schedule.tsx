import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import { profile } from '../src/content/profile';
import { useLanguage } from '../src/i18n/LanguageContext';

const CALENDAR_BASE = 'https://calendar.zoho.com/eventreqForm/zz08011230911dd8aa00155d0609c809fe7c81bc79df33fe230d1f6a349c30137fa76d017394d6c39f6f82862002af3d9aa8144c51';

const Schedule: NextPage = () => {
  const { lang, t } = useLanguage();
  const [timeZone, setTimeZone] = useState('');
  useEffect(() => { setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone); }, []);
  const calendarUrl = `${CALENDAR_BASE}?theme=0&l=${lang}${timeZone ? `&tz=${encodeURIComponent(timeZone)}` : ''}`;
  const emailBody = t.schedule.emailBody.replace(lang === 'es' ? 'Zona horaria:' : 'Time zone:', `${lang === 'es' ? 'Zona horaria:' : 'Time zone:'} ${timeZone}`);
  const emailUrl = `mailto:${profile.basics.email}?subject=${encodeURIComponent(t.schedule.emailSubject)}&body=${encodeURIComponent(emailBody)}`;

  return (
    <>
      <Head>
        <title>{t.schedule.metaTitle}</title>
        <meta name="description" content={t.schedule.metaDescription} />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href={`${profile.basics.website}/schedule`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main id="main-content" tabIndex={-1} className="section-container pt-32 pb-20 min-h-screen">
        <p className="text-accent-sky-lt text-sm font-mono mb-4">{t.schedule.badge}</p>
        <h1 className="text-3xl sm:text-5xl max-w-3xl mb-6">{t.schedule.title}</h1>
        <p className="text-text-muted text-lg max-w-2xl mb-4">{t.schedule.intro}</p>
        <p className="text-text-muted text-sm mb-10">{profile.basics.location[lang]}</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl">
          <section className="glass-card p-6 sm:p-8">
            <h2 className="text-xl mb-4">{t.schedule.emailTitle}</h2>
            <p className="text-text-muted mb-6">{t.schedule.emailDescription}</p>
            <a href={emailUrl} className="btn-primary" id="schedule-email-link">{t.schedule.emailCta}</a>
            <p className="text-sm text-text-muted break-all mt-5">{profile.basics.email}</p>
          </section>
          <section className="glass-card p-6 sm:p-8">
            <h2 className="text-xl mb-4">{t.schedule.calendarTitle}</h2>
            <p className="text-text-muted mb-6">{t.schedule.calendarDescription}</p>
            <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary" id="schedule-calendar-link">{t.schedule.calendarCta}</a>
          </section>
        </div>
        {timeZone && <p className="text-text-muted text-sm mt-6">{t.schedule.timezone}: {timeZone}</p>}
        <Link href="/" className="inline-block text-accent-sky-lt underline underline-offset-4 mt-10">{t.schedule.back}</Link>
      </main>
      <Footer />
    </>
  );
};

export default Schedule;
