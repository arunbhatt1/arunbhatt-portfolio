# Arun Bhatt - Personal Portfolio Website

A modern, responsive, dark-themed personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

- **Domain**: [https://arunbhatt.com.np](https://arunbhatt.com.np)
- **GitHub**: [https://github.com/arunbhatt1](https://github.com/arunbhatt1)

---

## Features

- **Accurate Resume Representation**: Sourced directly from Arun Bhatt's verified academic and project history.
- **Modern Developer Aesthetic**: Sleek dark theme with slate/zinc hues, subtle cyan and emerald accents, monospace code elements, and glassmorphism.
- **Performance & SEO Optimized**: Semantic HTML5, dynamic title, meta tags, Open Graph, Twitter Cards, canonical URL, and custom SVG developer favicon.
- **Interactive Project Showcase**: Filterable categories, architecture highlights, tech stack pills, and GitHub repository links.
- **Verified Experience & Leadership**: Highlighted 3x elected Class Representative (CR) at Sagarmatha Engineering College and student governance background.
- **Direct Asset Integration**: Downloadable resume (`Arun_Bhatt_Resume.pdf`) and high-resolution professional portrait (`me.png`).
- **One-Click Contact**: Direct mailto integration and instant clipboard copying for email and phone.

---

## Project Structure

```
Domain/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── CNAME                     # arunbhatt.com.np domain mapping
│   ├── favicon.svg               # Custom developer SVG favicon
│   ├── me.png                    # Arun Bhatt's profile photo
│   ├── Arun_Bhatt_Resume.pdf     # Downloadable resume PDF
│   └── Resume.pdf                # Fallback resume file
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx        # Sticky responsive navbar with mobile drawer
│   │   │   └── Footer.tsx        # Dynamic copyright, social links & site info
│   │   ├── sections/
│   │   │   ├── Hero.tsx          # Hero section with portrait, CTAs & code widget
│   │   │   ├── About.tsx         # Bio, engineering pillars & education timeline
│   │   │   ├── Skills.tsx        # Categorized skill badges (no fake % bars)
│   │   │   ├── Projects.tsx      # Filterable project cards with architecture highlights
│   │   │   ├── Experience.tsx    # Leadership & academic milestones timeline
│   │   │   ├── GitHubSection.tsx # GitHub profile and pinned repo showcase
│   │   │   └── Contact.tsx       # Contact details + interactive form
│   │   └── ui/
│   │       ├── ProjectCard.tsx   # Reusable project card
│   │       ├── SkillBadge.tsx    # Reusable skill pill badge
│   │       ├── SectionHeading.tsx# Reusable section header
│   │       └── Toast.tsx         # Notification toast
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for all resume data & text
│   ├── types/
│   │   └── index.ts              # TypeScript data interfaces
│   ├── App.tsx                   # Main SPA container
│   ├── main.tsx                  # React DOM entrypoint
│   └── index.css                 # Global styles & Tailwind utilities
├── index.html                    # SEO tags, canonical URL, and fonts
├── package.json                  # Dependencies & npm scripts
├── tailwind.config.js            # Tailwind theme configuration
├── tsconfig.json                 # TypeScript configuration
└── vite.config.ts                # Vite build configuration
```

---

## Getting Started Locally

### 1. Prerequisites
Ensure you have **Node.js (v18 or higher)** installed.
If Node.js is not yet installed on your system:
- Download from [https://nodejs.org](https://nodejs.org) (choose LTS version), or
- In PowerShell, run:
  ```powershell
  winget install OpenJS.NodeJS.LTS
  ```

### 2. Install Dependencies
Open your terminal in the project directory and run:
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The site will run at `http://localhost:3000` (or `http://localhost:5173`).

### 4. Build for Production
To generate the static production build in the `dist/` directory:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## Where to Edit Your Content

| To change... | Edit this file |
|---|---|
| **Personal Info, Bio, Contact Links** | [`src/data/portfolioData.ts`](file:///c:/Users/ACER/Documents/Domain/src/data/portfolioData.ts) (`personalInfo`) |
| **Skills & Competencies** | [`src/data/portfolioData.ts`](file:///c:/Users/ACER/Documents/Domain/src/data/portfolioData.ts) (`skillCategories`) |
| **Projects & Architectures** | [`src/data/portfolioData.ts`](file:///c:/Users/ACER/Documents/Domain/src/data/portfolioData.ts) (`projects`) |
| **Education Timeline** | [`src/data/portfolioData.ts`](file:///c:/Users/ACER/Documents/Domain/src/data/portfolioData.ts) (`educationData`) |
| **Leadership Experience** | [`src/data/portfolioData.ts`](file:///c:/Users/ACER/Documents/Domain/src/data/portfolioData.ts) (`experienceData`) |
| **Profile Photo** | Replace `public/me.png` with your new image |
| **Resume PDF** | Replace `public/Arun_Bhatt_Resume.pdf` with your updated PDF |

---

## Deployment Guide

### Method 1: GitHub Pages (Automated CI/CD - Recommended)
1. Push this repository to your GitHub account (`https://github.com/arunbhatt1/portfolio` or `https://github.com/arunbhatt1/arunbhatt1.github.io`).
   ```bash
   git init
   git add .
   git commit -m "feat: complete professional portfolio for Arun Bhatt"
   git branch -M main
   git remote add origin https://github.com/arunbhatt1/<your-repo-name>.git
   git push -u origin main
   ```
2. Go to your repository on GitHub -> **Settings** -> **Pages**.
3. Under **Build and deployment -> Source**, select **GitHub Actions**.
4. The workflow in `.github/workflows/deploy.yml` will automatically build and publish your site!

### Method 2: Vercel or Netlify
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

---

## Connecting Your Domain (`arunbhatt.com.np`)

1. **CNAME Record**:
   - `public/CNAME` already contains `arunbhatt.com.np`.
2. **DNS Settings (at your .np registrar / Cloudflare / DNS provider)**:
   - For **Apex Domain (`arunbhatt.com.np`)**:
     - Create `A` records pointing to GitHub Pages IPs:
       - `185.199.108.153`
       - `185.199.109.153`
       - `185.199.110.153`
       - `185.199.111.153`
   - For **Subdomain (`www.arunbhatt.com.np`)**:
     - Create a `CNAME` record with Host `www` pointing to `arunbhatt1.github.io`.
3. In GitHub Repository **Settings -> Pages -> Custom domain**, enter `arunbhatt.com.np` and check **Enforce HTTPS**.
