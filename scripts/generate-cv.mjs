import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { delimiter, dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const baseProfile = JSON.parse(readFileSync(join(root, 'src/content/profile.json'), 'utf8'));
const baseCss = readFileSync(join(root, 'scripts/cv.css'), 'utf8');
const buildDir = join(root, 'build/cv');
mkdirSync(buildDir, { recursive: true });

const executable = process.env.CHROME_PATH || ['google-chrome', 'chromium', 'chromium-browser']
  .flatMap((name) => (process.env.PATH || '').split(delimiter).map((directory) => join(directory, name)))
  .find((candidate) => existsSync(candidate));
if (!executable) throw new Error('Chrome/Chromium is required. Set CHROME_PATH to its executable.');

const variantArg = process.argv[2];
const variant = variantArg ? JSON.parse(readFileSync(resolve(root, variantArg), 'utf8')) : null;
if (variant) {
  if (!variant.id || !variant.output?.directory || !variant.output?.filePrefix) {
    throw new Error('A CV variant must define id, output.directory and output.filePrefix.');
  }
  for (const lang of ['en', 'es']) {
    if (!variant.summary?.[lang]) throw new Error(`Variant ${variant.id} is missing ${lang} summary content.`);
  }
}

// Variants reuse the site profile and only override the summary, headline, earlier-experience note,
// skills, existing roles and the additional roles that should appear in that specific version.
const profile = variant ? {
  ...baseProfile,
  basics: {
    ...baseProfile.basics,
    summary: variant.summary,
    title: { ...baseProfile.basics.title, ...(variant.headline?.title ?? {}) },
    specialty: { ...baseProfile.basics.specialty, ...(variant.headline?.specialty ?? {}) },
    earlierExperience: variant.earlierExperience ?? baseProfile.basics.earlierExperience,
  },
  experience: [
    ...baseProfile.experience.map((entry) => ({ ...entry })),
    ...(variant.experience ?? []),
  ].map((entry) => {
    const override = variant.overrides?.[entry.id];
    if (!override) return entry;
    return {
      ...entry,
      ...(override.role ? { role: { ...entry.role, ...override.role } } : {}),
      ...(override.company ? { company: override.company } : {}),
      ...(override.highlights ? { highlights: { ...entry.highlights, ...override.highlights } } : {}),
    };
  }),
  skills: [...baseProfile.skills, ...(variant.skills ?? [])],
} : baseProfile;
const recentExperienceCount = variant?.recentExperienceCount ?? 2;
const compactHighlightCount = variant?.compactHighlightCount ?? 1;
if (variant?.overrides) {
  for (const id of Object.keys(variant.overrides)) {
    if (!profile.experience.some((entry) => entry.id === id)) throw new Error(`Unknown override experience: ${id}`);
  }
}

// Tailored variants add older roles, so they use a slightly tighter print layout
// to keep the CV at two pages without changing the main CVs.
const variantCss = variant?.compactLayout ? `
html { font-size: 9pt; line-height: 1.28; }
h2 { margin: 6pt 0 4pt; padding-bottom: 2pt; }
.entry { margin-bottom: 5pt; }
.compact { margin-bottom: 4pt; }
li { margin-bottom: 1pt; }
.skills p { margin-bottom: 0.5pt; }
.education p { margin-top: 1pt; }
` : '';
const css = `${baseCss}\n${variantCss}`;

const escape = (text) => String(text).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
const localized = (value, lang) => typeof value === 'string' ? value : value[lang];
const period = (start, end, lang) => {
  const format = (value) => value.length === 4 ? value : new Intl.DateTimeFormat(lang, { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}-01T00:00:00Z`));
  return `${format(start)} — ${end ? format(end) : lang === 'es' ? 'Actualidad' : 'Present'}`;
};

// Both PDFs use the same dates and roles as the site. Reject incomplete source data.
const ids = new Set();
for (const entry of profile.experience) {
  if (ids.has(entry.id)) throw new Error(`Duplicate experience ID: ${entry.id}`);
  ids.add(entry.id);
  if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(entry.start) || (entry.end && (!/^\d{4}-(0[1-9]|1[0-2])$/.test(entry.end) || entry.end < entry.start))) {
    throw new Error(`Invalid period: ${entry.id}`);
  }
  if (typeof entry.company !== 'string' && (!entry.company?.en || !entry.company?.es)) throw new Error(`Missing company translations: ${entry.id}`);
  for (const lang of ['en', 'es']) {
    if (!entry.role[lang] || !entry.highlights[lang]?.length) throw new Error(`Missing ${lang} content: ${entry.id}`);
  }
}
for (const project of profile.projects) {
  if (project.experienceId && !ids.has(project.experienceId)) throw new Error(`Unknown project experience: ${project.experienceId}`);
}

const labels = {
  en: { experience: 'Selected professional experience', earlier: 'Professional experience · continued', skills: 'Core expertise', project: 'Selected consulting project', education: 'Education & languages', continued: 'Professional profile · continued' },
  es: { experience: 'Experiencia profesional seleccionada', earlier: 'Experiencia profesional · continuación', skills: 'Especialidades', project: 'Proyecto de consultoría destacado', education: 'Formación e idiomas', continued: 'Perfil profesional · continuación' },
};

const outputDirectory = variant ? resolve(root, variant.output.directory) : join(root, 'public');
const previewDirectory = variant ? join(buildDir, variant.id) : buildDir;
const filePrefix = variant?.output.filePrefix ?? 'andrescabrera';
mkdirSync(outputDirectory, { recursive: true });
mkdirSync(previewDirectory, { recursive: true });

for (const lang of ['en', 'es']) {
  const t = labels[lang];
  const basics = profile.basics;
  const renderEntry = (entry, compact = false) => `
    <article class="entry${compact ? ' compact' : ''}" data-experience="${escape(entry.id)}">
      <div class="entry-header"><h3>${escape(entry.role[lang])}</h3><span class="period">${escape(period(entry.start, entry.end, lang))}</span></div>
      <p class="company">${escape(localized(entry.company, lang))}</p>
      ${entry.engagement ? `<p class="engagement">${escape(entry.engagement[lang])}</p>` : ''}
      ${compact ? entry.highlights[lang].slice(0, compactHighlightCount).map((text) => `<p class="description">${escape(text)}</p>`).join('') : `<ul>${entry.highlights[lang].map((text) => `<li>${escape(text)}</li>`).join('')}</ul>`}
    </article>`;
  const venetravel = profile.projects.find((project) => project.id === 'venetravel');
  const variantTitle = variant ? ` · ${localized(variant.title, lang)}` : '';
  const projectMarkup = `
      <h2>${t.project}</h2>
      <article class="entry" data-project="venetravel">
        <div class="entry-header"><h3>${escape(venetravel.role[lang])}</h3><span class="period">${escape(period(venetravel.start, venetravel.end, lang))}</span></div>
        <p class="company"><a href="${escape(venetravel.url)}">Venetravel · venetravel.net</a></p>
        <ul>${venetravel.highlights[lang].map((text) => `<li>${escape(text)}</li>`).join('')}</ul>
      </article>`;
  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${escape(basics.name)} — CV${escape(variantTitle)} (${lang.toUpperCase()})</title><style>${css}</style></head>
<body>
  <main>
    <section class="page">
      <header>
        <h1>${escape(basics.name)}</h1>
        <p class="role">${escape(basics.title[lang])}</p>
        <p class="specialty">${escape(basics.specialty[lang])}</p>
        <p class="contact">${escape(basics.location[lang])} · <a href="mailto:${escape(basics.email)}">${escape(basics.email)}</a><br>
          <a href="${escape(basics.website)}">andrescabrera.com.ar</a> · <a href="${escape(basics.linkedin)}">linkedin.com/in/andrescabrera24</a> · <a href="${escape(basics.github)}">github.com/andrescabrera</a></p>
      </header>
      <p class="summary">${escape(basics.summary[lang])}</p>
      <section class="ai-expertise" data-section="ai">
        <h2>${escape(profile.ai.title[lang])}</h2>
        <div class="skills">
          ${profile.ai.groups.map((group) => `<p><strong>${escape(group.title[lang])}:</strong> ${escape(group.items.join(' · '))}</p>`).join('')}
          ${profile.ai.localModels.map((group) => `<p><strong>${escape(profile.ai.localModelsTitle[lang])} (${escape(group.title[lang])}):</strong> ${escape(group.items.join(' · '))}</p>`).join('')}
        </div>
      </section>
      <h2>${t.skills}</h2>
      <div class="skills">${profile.skills.map((group) => `<p><strong>${escape(group.name[lang])}:</strong> ${escape(group.items.join(' · '))}</p>`).join('')}</div>
      <h2>${t.experience}</h2>
      ${profile.experience.slice(0, recentExperienceCount).map((entry) => renderEntry(entry)).join('')}
      ${variant?.projectOnFirstPage ? projectMarkup : ''}
    </section>
    <section class="page">
      <header class="continuation"><strong>${escape(basics.name)}</strong><span>${t.continued}</span></header>
      ${variant?.projectOnFirstPage ? '' : projectMarkup}
      <h2>${t.earlier}</h2>
      ${profile.experience.slice(recentExperienceCount).map((entry, index) => renderEntry(entry, index > 0 || Boolean(variant?.compactEarlier))).join('')}
      <p class="note">${escape(basics.earlierExperience[lang])}</p>
      <section class="education"><h2>${t.education}</h2><p>${escape(basics.education[lang])}</p><p>${escape(basics.languages[lang])}</p></section>
    </section>
  </main>
</body></html>`;
  const htmlPath = join(previewDirectory, `${lang}.html`);
  const pdfPath = join(outputDirectory, `${filePrefix}-${lang === 'en' ? 'eng' : 'spa'}.pdf`);
  writeFileSync(htmlPath, html);
  const chromeProfile = mkdtempSync(join(existsSync('/tmp/opencode') ? '/tmp/opencode' : buildDir, 'cv-chrome-'));
  try {
    const result = spawnSync(executable, [
      '--headless', '--no-sandbox', '--disable-gpu', '--disable-dev-shm-usage', '--no-pdf-header-footer',
      `--user-data-dir=${chromeProfile}`, `--print-to-pdf=${pdfPath}`, pathToFileURL(htmlPath).href,
    ], { encoding: 'utf8', timeout: 60000 });
    if (result.error || result.status !== 0) throw new Error(`PDF generation failed for ${lang}: ${result.error?.message || result.stderr}`);
    const pdf = readFileSync(pdfPath);
    if (!pdf.subarray(0, 5).equals(Buffer.from('%PDF-'))) throw new Error(`Invalid PDF output for ${lang}`);
    console.log(`${lang.toUpperCase()}: ${pdfPath} (${Math.round(pdf.length / 1024)} KB)`);
  } finally {
    rmSync(chromeProfile, { recursive: true, force: true });
  }
}

if (variant) {
  const englishPdf = `${filePrefix}-eng.pdf`;
  const spanishPdf = `${filePrefix}-spa.pdf`;
  const linksPage = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow, noarchive, nosnippet">
<meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet">
<title>${escape(baseProfile.basics.name)} — CV · ${escape(localized(variant.title, 'en'))}</title>
<style>
  :root { color-scheme: light; }
  * { box-sizing: border-box; }
  body { margin: 0; min-height: 100vh; display: grid; place-items: center; padding: 24px; background: #e9edf1; color: #18242f; font-family: Arial, Helvetica, sans-serif; }
  main { width: min(100%, 520px); background: white; padding: 40px; border-radius: 16px; box-shadow: 0 18px 50px rgba(20, 45, 64, .14); }
  h1 { margin: 0 0 6px; font-size: 26px; color: #142d40; }
  p { margin: 0 0 24px; color: #3e5060; line-height: 1.5; }
  nav { display: grid; gap: 12px; }
  a { display: block; padding: 14px 16px; border: 1px solid #c7d4df; border-radius: 10px; color: #164e74; text-decoration: none; font-weight: 700; }
  a:hover, a:focus-visible { background: #f3f7fa; border-color: #164e74; }
  small { display: block; margin-top: 24px; color: #607180; line-height: 1.45; }
</style></head>
<body><main>
  <h1>${escape(baseProfile.basics.name)} — CV</h1>
  <p>${escape(localized(variant.title, 'en'))} · ${escape(localized(variant.title, 'es'))}</p>
  <nav>
    <a href="./${escape(englishPdf)}">CV — English (PDF)</a>
    <a href="./${escape(spanishPdf)}">CV — Español (PDF)</a>
  </nav>
  <small>Unlisted page. Please share the PDF links directly and do not publish this page.</small>
</main></body></html>`;
  writeFileSync(join(outputDirectory, 'index.html'), linksPage);
  console.log(`Links: ${join(outputDirectory, 'index.html')}`);
}

console.log(`Editable print previews: ${previewDirectory}`);
