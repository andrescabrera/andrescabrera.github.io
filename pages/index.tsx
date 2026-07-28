import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useEffect } from 'react';

import NavBar from '../src/components/NavBar';
import HeroSection from '../src/components/HeroSection';
import StatsBar from '../src/components/StatsBar';
import TravelTechSection from '../src/components/TravelTechSection';
import TechStackSection from '../src/components/TechStackSection';
import ExperienceTimeline from '../src/components/ExperienceTimeline';
import FintechSection from '../src/components/FintechSection';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';

const SITE_URL = 'https://andrescabrera.github.io';
const TITLE = 'Andrés Cabrera — Travel Tech Engineer & Software Architect';
const DESCRIPTION =
  'Senior Software Engineer specializing in flight aggregation platforms, GDS integrations (Amadeus, Sabre, Travelport), cloud-native microservices, and high-concurrency systems. 12M+ daily searches. Available for Travel Tech opportunities.';

const Home: NextPage = () => {
  // Global scroll reveal observer for any components that didn't set their own
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-child').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:type"        content="website" />
        <meta property="og:url"         content={SITE_URL} />
        <meta property="og:title"       content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:locale"      content="en_US" />
        <meta property="og:site_name"   content="Andrés Cabrera — Portfolio" />

        {/* Twitter */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />

        {/* SEO */}
        <meta name="author"   content="Andrés Cabrera" />
        <meta name="keywords" content="Travel Tech, GDS integration, Amadeus, Sabre, Travelport, flight aggregation, Kotlin, Scala, Java, microservices, Kafka, AWS, NDC IATA, RappiPay, FinTech, software engineer, backend developer" />
        <meta name="robots"  content="index, follow" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon"      href="/favicon.ico" />

        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Andrés Cabrera',
              url: SITE_URL,
              jobTitle: 'Software Engineer — Travel Tech',
              description: DESCRIPTION,
              email: 'info@andrescabrera.com.ar',
              sameAs: [
                'https://www.linkedin.com/in/andrescabrera24/',
                'https://app.pluralsight.com/profile/andres-cabrera',
              ],
              knowsAbout: [
                'GDS Integration', 'Flight Aggregation', 'Kotlin', 'Scala', 'Java',
                'Apache Kafka', 'Kubernetes', 'AWS', 'Microservices Architecture',
                'ISO8583', 'NDC IATA', 'FinTech', 'Reactive Programming',
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <NavBar />
        <main id="main-content">
          <HeroSection />
          <StatsBar />
          <TravelTechSection />
          <TechStackSection />
          <ExperienceTimeline />
          <FintechSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;