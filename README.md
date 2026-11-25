# Arun Bhatt: Portfolio

Personal portfolio of Arun Bhatt, a Computer Engineering student at Sagarmatha Engineering College (Tribhuvan University). Live at [arunbhatt.com.np](https://arunbhatt.com.np).

Built with React 18, TypeScript, Tailwind CSS and Vite. A web-rope progress tracker follows the scroll.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check, then production build to dist/
npm run preview  # serve the production build
```

## Edit content

All text lives in `src/data/portfolioData.ts` (profile, skills, projects, experience, education). Sections are in `src/components/sections/`.

## Deploy

Every push to `main` builds and deploys to GitHub Pages through `.github/workflows/deploy.yml`. The custom domain is set in `public/CNAME`.
