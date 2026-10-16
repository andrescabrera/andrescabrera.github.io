import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { delimiter, dirname, join, resolve } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const profile = JSON.parse(readFileSync(join(root, 'src/content/profile.json'), 'utf8'));
const css = readFileSync(join(root, 'scripts/cv.css'), 'utf8');
const buildDir = join(root, 'build/cv');
const recentExperienceCount = 2;
mkdirSync(buildDir, { recursive: true });

const executable = process.env.CHROME_PATH || ['google-chrome', 'chromium', 'chromium-browser']
  .flatMap((name) => (process.env.PATH || '').split(delimiter).map((directory) => join(directory, name)))
  .find((candidate) => existsSync(candidate));
if (!executable) throw new Error('Chrome/Chromium is required. Set CHROME_PATH to its executable.');

const escape = (text) => String(text).replace(/[&<>"']/g, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[character]));
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

for (const lang of ['en', 'es']) {
  const t = labels[lang];
  const basics = profile.basics;
  const renderEntry = (entry, compact = false) => `
    <article class="entry${compact ? ' compact' : ''}" data-experience="${escape(entry.id)}">
      <div class="entry-header"><h3>${escape(entry.role[lang])}</h3><span class="period">${escape(period(entry.start, entry.end, lang))}</span></div>
      <p class="company">${escape(entry.company)}</p>
      ${entry.engagement ? `<p class="engagement">${escape(entry.engagement[lang])}</p>` : ''}
      ${compact ? `<p class="description">${escape(entry.highlights[lang][0])}</p>` : `<ul>${entry.highlights[lang].map((text) => `<li>${escape(text)}</li>`).join('')}</ul>`}
    </article>`;
  const venetravel = profile.projects.find((project) => project.id === 'venetravel');
  const html = `<!doctype html>
<html lang="${lang}"><head><meta charset="utf-8"><title>${escape(basics.name)} — CV (${lang.toUpperCase()})</title><style>${css}</style></head>
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
    </section>
    <section class="page">
      <header class="continuation"><strong>${escape(basics.name)}</strong><span>${t.continued}</span></header>
      <h2>${t.project}</h2>
      <article class="entry" data-project="venetravel">
        <div class="entry-header"><h3>${escape(venetravel.role[lang])}</h3><span class="period">${escape(period(venetravel.start, venetravel.end, lang))}</span></div>
        <p class="company"><a href="${escape(venetravel.url)}">Venetravel · venetravel.net</a></p>
        <ul>${venetravel.highlights[lang].map((text) => `<li>${escape(text)}</li>`).join('')}</ul>
      </article>
      <h2>${t.earlier}</h2>
      ${profile.experience.slice(recentExperienceCount).map((entry, index) => renderEntry(entry, index > 0)).join('')}
      <p class="note">${escape(basics.earlierExperience[lang])}</p>
      <section class="education"><h2>${t.education}</h2><p>${escape(basics.education[lang])}</p><p>${escape(basics.languages[lang])}</p></section>
    </section>
  </main>
</body></html>`;
  const htmlPath = join(buildDir, `${lang}.html`);
  const pdfPath = join(root, 'public', lang === 'en' ? 'andrescabrera-eng.pdf' : 'andrescabrera-spa.pdf');
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
console.log(`Editable print previews: ${buildDir}`);
