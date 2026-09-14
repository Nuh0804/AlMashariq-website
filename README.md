# Car Rental

A car rental marketing site implemented from the [Car Rental Figma Template](https://www.figma.com/design/ooEqbzd2YHaA4bSxYyL4xi/Car-Rental-Figma-Template--Community-?node-id=1-6419) 1920 desktop frames. The UI follows the template layout, type, and color (purple `#5937e0`, orange `#ff9e0c`, Work Sans + Inter) and stacks to a mobile layout below the desktop breakpoint.

## Project overview

The app is a client-rendered React SPA. Shared chrome (header, footer) wraps five routes that map to the Figma pages:

| Route | Figma frame |
| --- | --- |
| `/` | Homepage |
| `/vehicles` | Vehicles |
| `/details` and `/details/:id` | Car Details |
| `/about` | About Us |
| `/contact` | Contact Us |

Booking controls, vehicle cards, and navigation are reused across pages. Vehicle data lives in `src/data` so catalog, filters, and detail views stay in sync.

## Architecture

```
Browser
  └─ Vite 8 + React 19 (SPA)
       ├─ React Router 8 (declarative routes)
       ├─ Tailwind CSS v4 (`@tailwindcss/vite`)
       └─ shadcn/ui (Radix Nova) for Button, Input, Select, Sheet, …
```

- **Pages** compose sections and own route-level content.
- **Layout** (`SiteHeader`, `SiteFooter`, `PageShell`) is the chrome for every page.
- **Feature components** (`CarCard`, `BookingForm`, home sections) encapsulate Figma blocks.
- **Data** (`src/data`) is static content and catalog records.
- **Design tokens** are CSS variables in `src/index.css` (`--brand`, `--brand-orange`, fonts).

Quality gates:

- ESLint 10 (flat config) + typescript-eslint
- Prettier 3
- Husky + lint-staged on `pre-commit` (`eslint --fix --max-warnings=0`, then Prettier). A commit is blocked if linting still fails after auto-fix.

## Folder structure

```
├── public/                 static files
├── src/
│   ├── assets/             Figma-exported icons, logos, and images
│   ├── components/
│   │   ├── booking/        booking form
│   │   ├── brand/          partner logo strip
│   │   ├── cars/           vehicle card
│   │   ├── home/           homepage sections
│   │   ├── layout/         header, footer, page shell
│   │   └── ui/             shadcn/ui primitives
│   ├── data/               nav, contact, catalog
│   ├── lib/                `cn` helper
│   ├── pages/              route screens
│   ├── App.tsx             route table
│   ├── main.tsx            BrowserRouter bootstrap
│   └── index.css           Tailwind v4 + tokens
├── components.json         shadcn/ui config
├── eslint.config.js
├── vite.config.ts
└── package.json
```

## Installation

Requires Node.js 20.19+ or 22.12+ (Node 24 is also supported).

```bash
npm install
npm run dev
```

Open the URL Vite prints (default `http://localhost:5173`).

Other scripts:

```bash
npm run build         # typecheck + production bundle
npm run preview       # serve the production bundle
npm run lint          # ESLint, zero warnings allowed
npm run lint:fix      # ESLint with --fix
npm run format        # Prettier write
npm run format:check  # Prettier check
```

After `npm install`, Husky’s `prepare` script installs Git hooks. Staging a commit runs lint-staged; ESLint errors abort the commit.

Stack setup followed the current official docs:

- [React + Vite](https://react.dev/learn/build-a-react-app-from-scratch)
- [Vite getting started](https://vite.dev/guide/)
- [Tailwind CSS v4 + Vite](https://tailwindcss.com/docs/installation/using-vite)
- [shadcn/ui Vite](https://ui.shadcn.com/docs/installation/vite)
- [React Router declarative install](https://reactrouter.com/start/declarative/installation)
- [ESLint](https://eslint.org/docs/latest/use/getting-started)
- [Prettier](https://prettier.io/docs/install)
- [Husky](https://typicode.github.io/husky/get-started.html)
- [lint-staged](https://github.com/lint-staged/lint-staged)
