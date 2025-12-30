<div align="center">
  <h1>Example University Platform</h1>
  <p><strong>Premium university website + multi-role portals (Student / Faculty / Admin)</strong></p>

  <p>
    <a href="https://exampleuni.netlify.app/"><strong>Live Demo</strong></a>
    &nbsp;·&nbsp;
    <a href="#screenshots"><strong>Screenshots</strong></a>
    &nbsp;·&nbsp;
    <a href="#for-recruiters"><strong>Recruiter Snapshot</strong></a>
    &nbsp;·&nbsp;
    <a href="#for-students"><strong>Student Guide</strong></a>
  </p>

  <p>
    <img alt="React" src="https://img.shields.io/badge/React-19-0F172A?style=for-the-badge&logo=react&logoColor=61DAFB" />
    <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5-0F172A?style=for-the-badge&logo=typescript&logoColor=3178C6" />
    <img alt="Vite" src="https://img.shields.io/badge/Vite-6-0F172A?style=for-the-badge&logo=vite&logoColor=FACC15" />
    <img alt="React Router" src="https://img.shields.io/badge/React%20Router-HashRouter-0F172A?style=for-the-badge&logo=reactrouter&logoColor=CA4245" />
    <img alt="Netlify" src="https://img.shields.io/badge/Hosted%20on-Netlify-0F172A?style=for-the-badge&logo=netlify&logoColor=00C7B7" />
  </p>
</div>

---

## The Premise

Welcome to a digital campus built for two worlds:

- **The public world** — where a university earns trust (programs, admissions, placements, research, alumni stories)
- **The operational world** — where the day is managed (student, faculty, and admin portals)

This repository is designed as a **portfolio-grade showcase** that communicates frontend skill quickly to recruiters, while staying readable for students who want to learn from a realistic codebase.

## Live Demo

- https://exampleuni.netlify.app/

Deployment note:
- Uses **hash routing** (`/#/...`) so it remains static-host friendly (no rewrite rules required).

## Table of Contents

- [For Recruiters](#for-recruiters)
- [For Students](#for-students)
- [Tech Stack](#tech-stack)
- [Local Setup](#local-setup)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Screenshots](#screenshots)
- [Developer](#developer)

---

## A Quick Tour (Storytelling)

### The public experience — “Why this university?”

The public site is intentionally designed like a premium institutional brand:

- strong navy/gold identity
- bold, confident typography
- motion that supports the narrative (not distracting)
- conversion-style CTAs (Explore / Apply)

### The portal experience — “Run the day”

The portals are built like real products:

- **Students** check courses, grades, schedules, and resources
- **Faculty** monitor classes and teaching workload
- **Admins** see summaries and manage users

---

## For Recruiters

If you’re evaluating my work for an internship/full-time role, this section is written to be scan-friendly.

### Recruiter Snapshot

What you can verify quickly:

- **UI engineering:** consistent layout rhythm, responsive design, and coherent brand identity
- **App architecture:** clear separation between public pages and portal pages
- **Performance habits:** route-level lazy loading + suspense fallbacks
- **TypeScript usage:** typed models + predictable data flow
- **Dashboard patterns:** cards, tables, charts, and “at-a-glance” information design

### Architecture (How It’s Put Together)

- **Routing:** HashRouter + route-level code splitting in [App.tsx](App.tsx)
- **State & domain modeling:** context-driven app state in [context/UniversityContext.tsx](context/UniversityContext.tsx)
- **Portals:** dashboard screens under [pages/portal](pages/portal)
- **Motion:** `framer-motion` for transitions and section reveals

### Product Thinking / Decisions

- **Static-host friendly:** Hash routing avoids deployment complexity.
- **Performance-minded:** lazy-loaded pages to reduce initial bundle.
- **Realistic UX:** dashboards present information the way users consume it (schedule grid, grades tables, admin summaries).

### Roadmap (If This Were Production)

- Replace mock data with an API + persistence layer.
- Add auth tokens + protected routes.
- Add validation + error flows.
- Add tests (unit + integration) for portal flows.

---

## For Students

If you’re learning frontend engineering, this repo is designed to be a readable reference. Treat it like a mini “product codebase” you can study.

### What You’ll Learn

- How to organize a React app by **pages vs shared components**
- How to build **route-level code splitting** with `React.lazy` + `Suspense`
- How to use **Context** to model domain data (users, courses, notices)
- How to create dashboard-style UIs (tables, cards, charts)
- How to add tasteful motion without overwhelming the UI

### Student Guide (Suggested Learning Path)

1. Start at [App.tsx](App.tsx) to understand the route map and portal separation.
2. Open [context/UniversityContext.tsx](context/UniversityContext.tsx) to see how the project models data and exposes actions.
3. Explore the portal pages under [pages/portal](pages/portal) to study dashboard composition.

### Practice Challenges

- Add a new “Student → Attendance” screen and link it in [App.tsx](App.tsx).
- Add a “Search Courses” input that filters by course code/title.
- Add a protected route wrapper that redirects to Login when no user exists.

---

## Tech Stack

| Category | Tools |
| --- | --- |
| Framework | React + TypeScript |
| Build | Vite |
| Routing | React Router (HashRouter) |
| Motion | framer-motion |
| Charts | Recharts |
| Icons | Lucide |

## Local Setup

Prerequisite: Node.js (LTS recommended)

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview
```

## Project Structure

- [pages](pages) — public site + portal screens
- [components](components) — shared UI building blocks
- [context/UniversityContext.tsx](context/UniversityContext.tsx) — app state + mock data
- [public/images](public/images) — screenshots used below

## Deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Hash routing means no special rewrite rules are required.

## Screenshots

<details>
  <summary><strong>Public Site</strong> (click to expand)</summary>

  ![Home](public/images/home.png)

  ![Campus Life](public/images/campus.png)

  ![Alumni](public/images/alumni.png)

  ![Faculty](public/images/faculty.png)
</details>

<details>
  <summary><strong>Portals</strong> (click to expand)</summary>

  ![Login Portal](public/images/Login%20portal.png)

  ![Student Portal](public/images/student%20portal.png)

  ![Faculty Portal](public/images/faculty%20portal.png)

  ![Admin Portal](public/images/admin%20portal.png)
</details>

<details>
  <summary><strong>Profiles</strong> (click to expand)</summary>

  ![Student Profile](public/images/student%20profile.png)

  ![Faculty Profile](public/images/faculty%20profile.png)

  ![Admin Profile](public/images/admin%20profile.png)
</details>

---

## Developer

### Built by Ram Sharma (End-to-End)

This project was **conceived, designed, and fully built by Ram Sharma** as a portfolio showcase.

What I personally owned:

- Product concept + information architecture (public site + role-based portals)
- UI design direction (navy/gold brand language, layout system, responsive behavior)
- React + TypeScript implementation (components, pages, routing, state)
- Motion design (page transitions and section animations)
- Deployment (Netlify) and project documentation

### How To Review My Work (Fast)

If you have 5–10 minutes:

1. Open the live demo: https://exampleuni.netlify.app/
2. Scan routing + route-level lazy loading in [App.tsx](App.tsx)
3. Review typed models + central data provider in [context/UniversityContext.tsx](context/UniversityContext.tsx)
4. Browse dashboard screens under [pages/portal](pages/portal)

### Links

- GitHub: https://github.com/sharmaram25
