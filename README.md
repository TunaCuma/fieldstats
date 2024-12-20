# FieldStats

## TODO

- [x] Make it deploy (vercel)
- [x] Scaffold basic UI with mock data
- [x] Actually set up a database (vercel postgres)
- [x] Build schema
- [x] figure out typescript in react
- [x] figure out tRPC
- [x] Add authentication (w/ NextAuth)
- [ ] Attach database to UI
  - [ ] Dashboard
  - [ ] Upload
  - [ ] Matches
  - [ ] Teams
  - [ ] Players
  - [ ] Profile
  - [x] Settings
  - [x] Help
- [ ] Add video upload
- [ ] Make all pages typescript
- [ ] Add storybook
- [ ] UI enhancements
- [ ] Error management (w/ Sentry)
- [ ] Analytics (posthog)
- [ ] Ratelimiting (upstash)

- [ ] RouterOutput RouterInput types

look into aceternity ui
add debounce to searches
add d3.js
we will use react-hook-form for forms
we will use tanstack table for data tables
https://golden-layout.com/ keep in mind for when making an app ui

## **Dependencies**

### **Core Libraries**

- **next**: Framework for building React applications (Next.js).
- **react** & **react-dom**: React library for UI components and rendering.
- **typescript**: TypeScript language support.
- **i18next** & **react-i18next**: Internationalization for app translations.
- **next-auth**: Authentication library for Next.js.
- **superjson**: Serialization for JavaScript objects with complex data types.
- **tailwindcss**: Utility-first CSS framework.
- **tailwind-merge**: Tailwind CSS class name merging utility.

### **UI Components**

- **@radix-ui/react-\* series**: Collection of accessible UI components (Accordion, Avatar, Checkbox, Dialog, etc.).
- **geist**: A minimalist UI component library.
- **lucide-react**: Set of customizable SVG icons for React.

### **State Management & Data Fetching**

- **@tanstack/react-query**: Data fetching, caching, and synchronization.
- **@trpc/\* series**: Type-safe APIs for React and Next.js applications.

### **Database & ORM**

- **drizzle-orm**: ORM for TypeScript and JavaScript, works with SQL databases.
- **@neondatabase/serverless**: Serverless PostgreSQL adapter.
- **drizzle-kit**: CLI tool for managing database migrations and schema generation with Drizzle ORM.
- **postgres**: PostgreSQL client for Node.js.

### **Styling and Utilities**

- **clsx**: Utility for conditionally combining class names.
- **class-variance-authority**: Utility for handling CSS class variations.
- **next-themes**: Theme management for Next.js (light/dark modes).
- **prettier-plugin-tailwindcss**: Automatically formats Tailwind CSS code with Prettier.

### **Miscellaneous**

- **dotenv**: Loads environment variables from a `.env` file.
- **recharts**: Data visualization library for React.
- **server-only**: A utility to mark code for server-side only execution.

---

## **DevDependencies**

### **TypeScript & Type Checking**

- **@types/\* series**: Type definitions for TypeScript.
- **typescript-eslint**: TypeScript-specific ESLint plugin and parser.
- **eslint** & **eslint-plugin-drizzle**: Linting setup and Drizzle-specific rules.

### **Build & Format Tools**

- **next-intl**: Internationalization support for Next.js.
- **prettier**: Code formatter to ensure consistent code style.
- **eslint-config-next**: ESLint configuration for Next.js projects.
- **postcss**: PostCSS for transforming CSS.
- **tailwindcss-animate**: Animation utilities for Tailwind CSS.
- **tsx**: TypeScript JSX support.

---

## **Scripts Overview**

Here are a few key scripts in `package.json` to manage your workflow:

- **`build`**: Compiles the app for production using Next.js.
- **`dev`**: Starts the development server for Next.js with Turbo.
- **`lint`**: Runs ESLint to check for linting issues.
- **`format:check`**: Checks code formatting with Prettier.
- **`format:write`**: Automatically fixes code formatting.
- **`db:*`**: Various commands to manage the database schema and migrations with Drizzle Kit (e.g., `db:generate`, `db:migrate`, `db:push`).
