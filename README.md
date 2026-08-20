# Bilal Mushtaq — Personal Portfolio

A premium, modern, highly responsive personal portfolio for Bilal Mushtaq, focusing on AI Automation, Software Development, and Engineering.

## Features

- **Modern Tech Stack**: Built with React, TypeScript, and Vite.
- **Styling**: Tailwind CSS for a premium dark aesthetic with glassmorphism and gradient accents.
- **Animations**: Framer Motion for smooth, professional reveals, hover effects, and transitions.
- **Data-Driven Architecture**: All content is managed centrally in `src/data/portfolio.ts` for easy updates without touching component code.
- **Responsive**: Fully optimized for mobile, tablet, and desktop devices.
- **SEO Optimized**: Includes meta tags and semantic HTML structure.

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone or download the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Building for Production

To create an optimized production build:
```bash
npm run build
```
The output will be in the `dist` directory.

### Deployment

This project is configured to be easily deployed to platforms like **GitHub Pages**, **Vercel**, or **Netlify**.

#### Vercel / Netlify
Simply connect your GitHub repository to Vercel or Netlify, and it will automatically detect Vite and run `npm run build`.

#### GitHub Pages
1. Install `gh-pages`: `npm install gh-pages --save-dev`
2. In `package.json`, add your homepage URL: `"homepage": "https://<your-username>.github.io/<repo-name>",`
3. Add deployment scripts:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. Run `npm run deploy`. (Note: Make sure to set `base: '/<repo-name>/'` in `vite.config.ts` if deploying to a subdirectory).

## Project Structure

- `src/components/`: Reusable components (Navbar, Footer, etc.)
- `src/sections/`: Landing page sections (Hero, About, Projects, etc.)
- `src/data/`: Centralized portfolio content (`portfolio.ts`)

## Editing Content

To update your projects, skills, or experience, simply edit `src/data/portfolio.ts`. The UI will automatically reflect the changes.
