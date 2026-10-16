import React from 'react';

const SectionHeading: React.FC<{ badge: string; title: string; intro?: string }> = ({ badge, title, intro }) => (
  <div className="max-w-3xl mb-10">
    <p className="text-accent-sky-lt text-sm font-mono mb-3">{badge}</p>
    <h2 className="font-display text-3xl sm:text-4xl mb-4">{title}</h2>
    {intro && <p className="text-text-muted text-base sm:text-lg leading-relaxed">{intro}</p>}
  </div>
);

export default SectionHeading;
