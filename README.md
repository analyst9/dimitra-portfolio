# dimitralamprou.com

Personal academic portfolio built with React + Vite + Tailwind CSS v4 + Framer Motion, deployed on Vercel.

## Commands

```bash
npm install
npm run dev      # local development
npm run build    # production build (dist/)
npm run lint
```

## Where to edit content

| What | File |
| --- | --- |
| CV (education, experience, skills, languages) | `src/content/cv.js` |
| Hero / About / Research / Projects / Publications / Contact | `src/sections/*.jsx` (texts at the top of each file, EL + EN) |
| Navigation labels | `src/components/Navbar.jsx` |
| SEO meta tags | `index.html` |

The site is bilingual (EL/EN). The selected language is remembered in the browser, and first-time visitors get the language of their browser.
