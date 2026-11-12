# UXBooster

UXBooster is a portfolio demonstration of a polished product and UX analytics workspace. It brings behavior analytics, interaction heatmaps, illustrative session playback, conversion funnels, user journeys, feedback, and simulated UX insights into one responsive dashboard.

> **Demo only:** Metrics and records are fictional sample data. The app is not connected to live visitor tracking, real session recording, email delivery, or machine-learning analysis. Login, registration, and password reset are mock flows—not production authentication.

## Features

- Responsive dark analytics dashboard with activity charts, KPI cards, traffic sources, device breakdown, recent events, and a sortable page table.
- Dedicated behavior, heatmap, recording, funnel, journey, feedback, insights, and reports views.
- Interactive filters, sorting, pagination, heatmap modes, funnel builder, playback controls, review states, and detail dialogs.
- CSV exports for sample analytics and journeys.
- Demo project and team-member creation, plus workspace, profile, notification, and appearance preferences.
- Accessible labels and controls, keyboard focus styles, mobile navigation, and reduced-motion support.

## Routes

| Route | Description |
| --- | --- |
| `/dashboard` | Analytics overview |
| `/dashboard/behavior` | Page performance and interactions |
| `/dashboard/heatmaps` | Simulated click, scroll, and movement heatmaps |
| `/dashboard/recordings` | Sample session library and playback details |
| `/dashboard/funnels` | Conversion funnel and step builder |
| `/dashboard/journeys` | Interactive user-path visualization |
| `/dashboard/feedback` | Fictional feedback and sentiment |
| `/dashboard/insights` | Simulated UX opportunities |
| `/dashboard/reports` | Report previews and CSV export |
| `/dashboard/projects` | Demo project management |
| `/dashboard/team` | Demo team management |
| `/dashboard/settings` | Workspace and local demo preferences |
| `/login`, `/register`, `/forgot-password` | Demo authentication screens |

The root route (`/`) redirects to `/dashboard`.

## Getting started

Requires Node.js and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to explore the dashboard. In demo login, use any valid email address and a password of at least six characters; no credentials are saved and no secure account is created.

## Checks

```bash
pnpm exec tsc --noEmit
pnpm build
```

After a successful build, `pnpm start` serves the production build.

## Tech stack

- Next.js App Router and React
- TypeScript
- Tailwind CSS v4
- Lucide React icons
- Reusable dashboard components and centralized fictional sample data in `lib/demo-data.ts`
