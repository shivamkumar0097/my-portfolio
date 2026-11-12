# Shivam Kumar — Portfolio

> Frontend developer building clean, fast & modern web experiences.

<p align="center">
  <a href="https://shivamkumar0097.netlify.app">
    <img src="https://img.shields.io/badge/View%20Website-Live%20Demo-22c55e?style=for-the-badge&logo=netlify&logoColor=white" alt="View Website" />
  </a>
  <a href="https://github.com/shivamkumar0097/my-portfolio">
    <img src="https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Source Code" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Framer%20Motion-14-0055FF?style=flat-square&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Netlify-Deployed-00C7B7?style=flat-square&logo=netlify&logoColor=white" alt="Netlify" />
</p>

---

## About

Personal portfolio of **Shivam Kumar**, a BCA student and frontend developer based in
Dhanbad, India. The site showcases my work, skills and learning journey — built with a
focus on clean design, smooth motion and a fully responsive experience across devices.

- **Live site:** https://shivamkumar0097.netlify.app
- **Role:** Frontend Developer
- **Location:** Dhanbad, India

## Features

- Modern, responsive single-page layout
- Animated sections and scroll reveals with Framer Motion
- Dedicated sections for About, Skills, Projects, Education and Contact
- Project cards with live demo links
- Clean component-based architecture
- Optimized production build via Vite
- Auto-deployed to Netlify

## Tech Stack

| Category    | Tools                          |
| ----------- | ------------------------------ |
| Framework   | React 19                       |
| Build Tool  | Vite 8                         |
| Styling     | Modern CSS                     |
| Animation   | Framer Motion                  |
| Icons       | Lucide React, custom SVG icons |
| Linting     | ESLint                         |
| Deployment  | Netlify                        |

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

```bash
git clone https://github.com/shivamkumar0097/my-portfolio.git
cd my-portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`).

### Build & Preview

```bash
npm run build
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```text
my-portfolio/
├── public/              # Static assets (favicon, photo)
├── src/
│   ├── components/      # Reusable UI (Navbar, Footer, icons, Reveal)
│   ├── data/            # Portfolio content (profile, skills, projects)
│   ├── sections/        # Page sections (Hero, About, Skills, ...)
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── index.html
├── netlify.toml
├── vite.config.js
└── package.json
```

All personal content lives in [`src/data/portfolio.js`](src/data/portfolio.js), so the
site can be updated without touching component code.

## Featured Projects

| Project            | Description                                        | Live Demo                                       |
| ------------------ | -------------------------------------------------- | ----------------------------------------------- |
| Weather Check      | Real-time weather app with a clean forecast UI     | [Visit](https://today-weathercheck.netlify.app) |
| Movie Search       | Search any movie and browse posters & details      | [Visit](https://search-any-moviee.netlify.app)  |
| WebCar Official    | Modern, responsive car showcase website            | [Visit](https://webcarofficial.netlify.app)     |

## Deployment

The project is configured for Netlify via [`netlify.toml`](netlify.toml):

- **Build command:** `npm run build`
- **Publish directory:** `dist`
- **Node version:** 20

Every push to the `master` branch can be deployed automatically from Netlify.

## Connect

- **GitHub:** https://github.com/shivamkumar0097
- **LinkedIn:** https://www.linkedin.com/in/shivamkumar0097
- **Email:** shivamkr8135@gmail.com

---

<p align="center">Built with React & Vite by Shivam Kumar</p>
