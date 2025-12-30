<div align="center">
  <h1>Example University Platform</h1>
  <p><strong>Premium public website + student / faculty / admin portals crafted for a modern university.</strong></p>
</div>

## Live Demo

- Hosted: https://exampleuni.netlify.app/
- Routing: Hash-based (works on any static host without server config).

## Overview

Example University is a multi-role web experience that pairs a marketing-grade public site with operational portals for students, faculty, and administrators. Animations, polished typography, and purposeful layouts aim to match a real-world institutional brand.

## Highlights

- Rich public storytelling: hero narratives, research focus areas, alumni impact, campus life, and admissions timelines.
- Role-based portals: student courses/grades/schedule, faculty class tracking, and admin insights with quick actions.
- Motion-first UI: smooth page transitions via framer-motion and lightweight lazy loading for every page.
- Data scaffolding: curated mock programs, notices, and library data to showcase flows end-to-end.
- Responsive by design: tuned for desktop and mobile with consistent typography and spacing.

## Feature Map

- Public site
   - Home, About, Academics, Programs + program detail, Admissions, Research, Campus Life, Placements, Alumni, Contact, Apply, Login.
   - Story-driven hero sections, stats, testimonials, timelines, and partner/recruiter showcases.
- Student portal
   - Dashboard with courses, schedule, grades, notices, and quick resources.
   - Course detail view for materials, assignments, and exams.
- Faculty portal
   - Dashboard for teaching load, class lists, and scheduling.
   - Class roster view with assignments and attendance scaffolding.
- Admin portal
   - Dashboard with student intake chart, quick actions, and recent activity table.
   - User management list with role/status controls.
- Profiles
   - Dedicated profile views for student, faculty, and admin personas with document lists and metadata.

## Architecture Notes

- Framework: React (with Vite) using functional components and hooks.
- State: Context provider at [context/UniversityContext.tsx](context/UniversityContext.tsx) supplying mock auth, notices, programs, courses, and books.
- Routing: React Router HashRouter in [App.tsx](App.tsx) with suspense-based lazy loading per page.
- Motion: framer-motion for page transitions and section reveals.
- Visualization: Recharts for simple admin charts; Lucide icons for consistent glyphs.
- Styling: Utility-first classes (Tailwind-style) scoped per component.

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

## Data & Content

- Programs and course catalogs are mocked in the context to drive program detail pages and portal course lists.
- Users: seeded student, faculty, and admin accounts in context for quick role switching (email/password pairs in code for demos).
- Media: screenshots live in public/images and are referenced directly in this README.

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
- Netlify: build command `npm run build`, publish directory `dist`.
- Ensure the site is served from the project root so asset paths resolve (public/images/...).

## Developer

This project was conceived, designed, and fully built by **Ram Sharma**.
