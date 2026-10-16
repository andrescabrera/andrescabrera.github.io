import React from 'react';
import Link from 'next/link';
import { profile } from '../content/profile';
import { useLanguage } from '../i18n/LanguageContext';
import SectionHeading from './SectionHeading';

const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const otherLinks = [
    { label: 'GitHub', href: profile.basics.github },
    { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0142a6acf7665542e5' },
    { label: 'WhatsApp · VE', href: 'https://wa.me/584126204490' },
    { label: 'WhatsApp · AR', href: 'https://wa.me/5491135833449' },
    { label: t.contact.referral, href: 'https://app.onstrider.com/r/andres_mcmjbt' },
    { label: t.contact.githubAlt, href: 'https://github.com/andrescabrera-esportunity' },
  ];
  return (
    <section id="contact" className="py-16 lg:py-20 border-t border-border-dark" aria-label={t.contact.sectionLabel}>
      <div className="section-container">
        <SectionHeading badge={t.contact.badge} title={t.contact.title} intro={t.contact.subtitle} />
        <div className="grid md:grid-cols-3 gap-5">
          <a id="contact-email" href={`mailto:${profile.basics.email}`} className="glass-card p-6 no-underline">
            <h3 className="text-lg mb-3">{t.contact.email}</h3>
            <p className="text-text-muted text-sm mb-4">{t.contact.emailDescription}</p>
            <span className="text-accent-sky-lt text-sm break-all">{profile.basics.email}</span>
          </a>
          <a id="contact-linkedin" href={profile.basics.linkedin} target="_blank" rel="noopener noreferrer" className="glass-card p-6 no-underline">
            <h3 className="text-lg mb-3">LinkedIn</h3>
            <p className="text-text-muted text-sm">{t.contact.linkedinDescription}</p>
          </a>
          <Link id="contact-schedule-call" href="/schedule" className="glass-card p-6 no-underline">
            <h3 className="text-lg mb-3">{t.contact.schedule}</h3>
            <p className="text-text-muted text-sm">{t.contact.scheduleDescription}</p>
          </Link>
        </div>
        <p className="text-text-muted text-sm mt-6">{profile.basics.location[lang]} · {profile.basics.languages[lang]}</p>
        <div className="mt-8 pt-6 border-t border-border-dark">
          <h3 className="text-sm mb-4">{t.contact.other}</h3>
          <ul className="list-none p-0 m-0 flex flex-wrap gap-x-6 gap-y-3">
            {otherLinks.map((link) => <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="text-text-muted text-sm underline underline-offset-4 hover:text-accent-sky-lt">{link.label}</a></li>)}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
