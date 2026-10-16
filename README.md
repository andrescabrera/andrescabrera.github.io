# Andrés Cabrera — professional profile

Bilingual portfolio and CVs for backend engineering, architecture and product modernization.

**Website:** [andrescabrera.com.ar](https://andrescabrera.com.ar)

Built with Next.js, React, TypeScript and Tailwind CSS, exported as a static site for GitHub Pages.

## Development

```sh
yarn install --frozen-lockfile
yarn dev
```

## Update the profile and CVs

Professional information lives in **[`src/content/profile.json`](src/content/profile.json)**:

- Identity, summary, education and languages in English and Spanish.
- A single set of employment dates shared by both languages.
- Roles, contributions, project case studies and technical skills.
- A dedicated AI section: Agentic Coding, Harness Engineering, Skills, Claude Code, OpenCode, n8n, LangGraph, Unsloth, llama.cpp, Ollama, Strata, MCP and WebMCP.
- Local model experience: Qwen3.6-35B-A3B and Qwen3.8-Flash-Next (MoE), and Qwen3.8-27B (dense).
- Production results with their context; estimates are explicitly identified.

Interface labels and section introductions live in `src/i18n/dictionaries.ts`.

To regenerate both PDFs after editing the profile:

```sh
yarn cv
```

This uses locally installed Chrome or Chromium and the print stylesheet in `scripts/cv.css`. Set `CHROME_PATH` if the browser is not on `PATH`.

Generated files:

- `public/andrescabrera-eng.pdf` — English CV.
- `public/andrescabrera-spa.pdf` — Spanish CV.
- `build/cv/en.html` and `build/cv/es.html` — print previews, excluded from Git.

The CVs use selectable text, a single-column layout and active contact links. No LaTeX installation is required.

## Validate and build

```sh
yarn lint
yarn build
```

The static site is generated in `out/`. Commit the regenerated PDFs along with profile changes; build output is ignored by Git.

Pushes to `main` deploy through `.github/workflows/pages.yml` using GitHub Pages.

The interface detects the browser language on first visit and preserves an explicit EN/ES selection. CV download buttons follow the selected language. Navigation, project screenshots and contact actions support keyboard use; video autoplay respects reduced-motion preferences.

## Assets and attribution

Profile assets and project demonstrations are in `public/`. The portrait is a tighter crop of the original photograph; the social preview includes the name and professional focus.

Originally based on the Next.js/GitHub Pages template by [Rizel Scarlett (@blackgirlbytes)](https://github.com/blackgirlbytes), with original design credits to [The Holistic Technologist](https://holistictech.io) and [Cuoc Doi Prints](https://www.cuocdoiprints.com).

See [LICENSE](LICENSE).
