<div align="center">
  <h1>Example University Platform</h1>
  <p><strong>Premium public website + student / faculty / admin portals crafted for a modern university.</strong></p>
</div>

## Overview

Example University is a multi-role web experience that pairs a marketing-grade public site with operational portals for students, faculty, and administrators. Animations, polished typography, and purposeful layouts aim to match a real-world institutional brand.

## Highlights

- Rich public storytelling: hero narratives, research focus areas, alumni impact, campus life, and admissions timelines.
- Role-based portals: student courses/grades/schedule, faculty class tracking, and admin insights with quick actions.
- Motion-first UI: smooth page transitions via framer-motion and lightweight lazy loading for every page.
- Data scaffolding: curated mock programs, notices, and library data to showcase flows end-to-end.
- Responsive by design: tuned for desktop and mobile with consistent typography and spacing.

## Tech Stack

- Frontend: React 19, Vite 6, TypeScript
- Routing: React Router (HashRouter)
- Animation: framer-motion
- Charts & Icons: Recharts, Lucide
- Styling: Tailwind-style utility classes

## Getting Started

1. Install Node.js (LTS recommended).
2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the dev server:

   ```bash
   npm run dev
   ```

4. Open the printed local URL in your browser. The app uses hash routing, so it runs flawlessly on static hosts.

### Available Scripts

- npm run dev — start Vite in dev mode.
- npm run build — create an optimized production build.
- npm run preview — preview the production bundle locally.

## Screenshots

### Public site

![Home](public/images/home.png)

![Campus Life](public/images/campus.png)

![Alumni](public/images/alumni.png)

![Faculty](public/images/faculty.png)

### Portals

![Student Portal](public/images/student%20portal.png)

![Faculty Portal](public/images/faculty%20portal.png)

![Admin Portal](public/images/admin%20portal.png)

![Login Portal](public/images/Login%20portal.png)

### Profiles

![Student Profile](public/images/student%20profile.png)

![Faculty Profile](public/images/faculty%20profile.png)

![Admin Profile](public/images/admin%20profile.png)

## Project Structure

- pages/ — public site pages plus portal experiences.
- components/ — shared UI (navbar, footer, layout, loaders).
- context/UniversityContext.tsx — mock data and providers for programs, courses, notices, and auth state.
- public/images/ — marketing and portal screenshots used in this README.

## Deployment Notes

- The app ships with hash-based routing; it works on any static host (GitHub Pages, Netlify, Vercel static export).
- Ensure the site is served from the project root so asset paths resolve (e.g., public/images/...).

## Developer

This project was conceived, designed, and fully built by **Ram Sharma**.
