import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import NavBar from '../src/components/NavBar';
import HeroSection from '../src/components/HeroSection';
import StatsBar from '../src/components/StatsBar';
import TravelTechSection from '../src/components/TravelTechSection';
import TechStackSection from '../src/components/TechStackSection';
import ExperienceTimeline from '../src/components/ExperienceTimeline';
import PortfolioSection from '../src/components/PortfolioSection';
import AISection from '../src/components/AISection';
import FintechSection from '../src/components/FintechSection';
import ContactSection from '../src/components/ContactSection';
import Footer from '../src/components/Footer';
import { profile } from '../src/content/profile';
import { en } from '../src/i18n/dictionaries';

const SITE_URL = profile.basics.website;
const OG_IMAGE = `${SITE_URL}/og-cover.jpg`;
const TITLE = en.meta.title;
const DESCRIPTION = en.meta.description;

const Home: NextPage = () => {
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
        <meta property="og:locale:alternate" content="es_AR" />
        <meta property="og:site_name"   content="Andrés Cabrera — Portfolio" />
        <meta property="og:image"        content={OG_IMAGE} />
        <meta property="og:image:width"  content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt"    content="Andrés Cabrera — Backend, Architecture & Product Modernization" />

        {/* Twitter */}
        <meta name="twitter:card"        content="summary_large_image" />
        <meta name="twitter:title"       content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image"       content={OG_IMAGE} />
        <meta name="twitter:image:alt"   content="Andrés Cabrera — Backend, Architecture & Product Modernization" />

        {/* SEO */}
        <meta name="author"   content="Andrés Cabrera" />
        <meta name="keywords" content={`Travel Tech, GDS integration, flight aggregation, Kotlin, Scala, Java, Kafka, AWS, FinTech, backend engineering, Agentic Coding, fine-tuning, local inference, MoE, ${[...profile.ai.groups, ...profile.ai.localModels].flatMap((group) => group.items).join(', ')}`} />
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
              jobTitle: profile.basics.title.en,
              description: DESCRIPTION,
              email: profile.basics.email,
              sameAs: [
                profile.basics.linkedin,
                profile.basics.github,
                'https://app.pluralsight.com/profile/andres-cabrera',
              ],
              knowsAbout: [
                'GDS Integration', 'Flight Aggregation', 'Kotlin', 'Scala', 'Java',
                'Apache Kafka', 'Kubernetes', 'AWS', 'Microservices Architecture',
                'ISO8583', 'NDC IATA', 'FinTech', 'Reactive Programming',
                'Agentic Coding', 'Fine-tuning', 'Model Inference',
                ...profile.ai.groups.flatMap((group) => group.items),
                'Local AI Models', 'Mixture of Experts', 'Dense Models',
                ...profile.ai.localModels.flatMap((group) => group.items),
              ],
            }),
          }}
        />
      </Head>

      <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <NavBar />
        <main id="main-content" tabIndex={-1}>
          <HeroSection />
          <StatsBar />
          <PortfolioSection />
          <AISection />
          <TravelTechSection />
          <FintechSection />
          <ExperienceTimeline />
          <TechStackSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
