# Shaikh Arfa | Portfolio

A personal portfolio website built with React, showcasing my skills, projects, and resume.

**[🌐 View Live Demo](https://portfolio-sepia-delta-kur6uumtn3.vercel.app)**

<p align="center">
  <img src="https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white" alt="React 18" />
  <img src="https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white" alt="Vite 6" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white" alt="CSS3" />
  <img src="https://img.shields.io/badge/Deployed%20on-Vercel-000000?logo=vercel&logoColor=white" alt="Vercel" />
</p>

---

## Preview

![Home](screenshots/home.png)

| Skills | Projects |
|:---:|:---:|
| ![Skills](screenshots/skills.png) | ![Projects](screenshots/projects.png) |

## About

I am a Computer Engineering student at Government Polytechnic, Mumbai, with a strong interest in front-end development and clean, easy-to-use interfaces.

This portfolio brings my skills, projects (each with a live demo), and resume together in one place.

## Features

- **Hero Section:** Includes a typing animation and a code-style profile card.
- **Interactive Skill Cards:** Tilted cards that straighten and lift on hover, with a rotating skills badge.
- **Project Showcase:** Filter buttons (All, React, JavaScript, Python) with source code and live demo links.
- **Scroll Animations:** Sections fade in as you scroll.
- **Moving Tag Band:** Adds a dynamic visual element between sections.
- **Resume Download:** Resume download options in the navbar, hero, about, and contact sections.
- **Fully Responsive:** Designed for mobile phones, tablets, and desktops.
- **Easy to Update:** All text, skills, and project details are stored in a single data file.

## Tech Stack

| Area | Technologies |
|---|---|
| Library | React 18 (Functional Components, Props, useState, useEffect) |
| Build Tool | Vite |
| Styling | Plain CSS, CSS Animations |
| Fonts | Poppins, Fira Code (Google Fonts) |
| Deployment | Vercel |

No additional UI or animation libraries are used.

## Projects Showcased

| Project | Description | Live Demo | Source Code |
|---|---|---|---|
| **CodeNova** | Interactive learning platform for DSA, OOP, and Cryptography with quizzes, duels, and competitions. | [Live Demo](https://code-nova-ashen.vercel.app) | [GitHub](https://github.com/shaikharfa160-max/CodeNova) |
| **NutriPredict** | AIML micro project that predicts daily calorie requirements and suggests a diet plan. | [Live Demo](https://nutri-predict-sigma.vercel.app) | [GitHub](https://github.com/shaikharfa160-max/NutriPredict) |
| **Currency Converter** | Converts currencies using live exchange rates. | [Live Demo](https://currency-converter-ecru-seven.vercel.app) | [GitHub](https://github.com/shaikharfa160-max/Currency-Converter) |
| **Tic Tac Toe** | Two-player game with automatic winner detection. | [Live Demo](https://tictactoe-rho-five.vercel.app) | [GitHub](https://github.com/shaikharfa160-max/Tic-Tac-Toe) |
| **Rock Paper Scissors** | Play against the computer with a live score. | [Live Demo](https://rock-paper-scissors-dun-sigma.vercel.app) | [GitHub](https://github.com/shaikharfa160-max/Rock-Paper-Scissors) |

## Folder Structure

```text
Portfolio/
├── public/
│   └── Arfa_Resume.pdf
├── screenshots/
│   ├── home.png
│   ├── skills.png
│   └── projects.png
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Marquee.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js (LTS)](https://nodejs.org/)
- npm

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/shaikharfa160-max/Portfolio.git
```

**2. Navigate to the project folder**

```bash
cd Portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

### Build for Production

```bash
npm run build
```

The production-ready files are generated in the `dist` folder.

## Customize

Open `src/data/portfolio.js` to update your name, links, skills, about section, and project details.

To update your downloadable resume, replace `public/Arfa_Resume.pdf` with your latest resume.

## Deployment

This portfolio is deployed on **Vercel**. Every push to the `main` branch automatically triggers a new deployment.

## Contact

- **Email:** [shaikharfa160@gmail.com](mailto:shaikharfa160@gmail.com)
- **LinkedIn:** [linkedin.com/in/arfa-shaikh-07a82b380](https://www.linkedin.com/in/arfa-shaikh-07a82b380)
- **GitHub:** [github.com/shaikharfa160-max](https://github.com/shaikharfa160-max)

---

<p align="center">
  Designed and built by <strong>Shaikh Arfa</strong>
</p>