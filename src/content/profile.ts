import data from './profile.json';

export type ProfileLanguage = 'en' | 'es';
export const profile = data;

export function formatPeriod(start: string, end: string | null, lang: ProfileLanguage): string {
  const format = (value: string) => {
    if (value.length === 4) return value;
    return new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' })
      .format(new Date(`${value}-01T00:00:00Z`));
  };
  return `${format(start)} — ${end ? format(end) : lang === 'es' ? 'Actualidad' : 'Present'}`;
}

export function getExperience(id: string) {
  const experience = profile.experience.find((item) => item.id === id);
  if (!experience) throw new Error(`Unknown experience: ${id}`);
  return experience;
}

export function getCvUrl(lang: ProfileLanguage): string {
  return lang === 'es' ? '/andrescabrera-spa.pdf' : '/andrescabrera-eng.pdf';
}
