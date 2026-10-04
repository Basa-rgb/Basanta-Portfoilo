# Basanta Nepali - Portfolio

Personal portfolio website for **Basanta Nepali**, a MERN Stack Developer from Nepal. The site presents an introduction, technical skills, selected projects, education, and social contact links in a responsive single-page layout.

## Built with

- React 19
- Vite
- Tailwind CSS
- React Icons
- React Parallax Tilt
- React Toastify
- React Typing Effect

## Features

- Responsive portfolio layout for mobile, tablet, and desktop
- Animated hero typing effect
- Interactive profile image with parallax tilt
- Skills and technology showcase
- Selected project/work section
- Education timeline
- Social contact links for LinkedIn, GitHub, Instagram, and Facebook
- Vite production build and preview support

## Getting started

### Prerequisites

- Node.js 20 or newer
- npm

### Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd Portfoilo
npm install
```

### Run the development server

```bash
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run Oxlint |

## Project structure

```text
Portfoilo/
├── public/                  # Public icons and static assets
├── src/
│   ├── assets/              # Images, logos, and technology icons
│   ├── Component/
│   │   ├── About/           # Hero and introduction section
│   │   ├── Contact/         # Social contact links
│   │   ├── Education/       # Education section
│   │   ├── Footer/          # Footer navigation
│   │   ├── Navbar/          # Main navigation
│   │   ├── Skills/          # Skills and technologies
│   │   └── Work/            # Projects and work
│   ├── App.jsx              # Page composition
│   ├── App.css              # Component styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Application entry point
├── index.html               # HTML entry point and metadata
├── package.json             # Scripts and dependencies
└── vite.config.js           # Vite and Tailwind configuration
```

## Build for production

```bash
npm run build
npm run preview
```

The production files are generated in the `dist/` directory. The project can be deployed to Vercel, Netlify, or any static hosting provider that supports single-page Vite applications.

## Customization

- Update the profile content in `src/Component/About/About.jsx`.
- Update skills in `src/Component/Skills/Skills.jsx`.
- Update projects and work details in `src/Component/Work/Work.jsx`.
- Update education details in `src/Component/Education/Education.jsx`.
- Update social profile URLs in `src/Component/Contact/Contact.jsx`.
- Replace images and technology logos in `src/assets/`.

## License

This project is a personal portfolio. Contact the author before reusing personal content, images, or branding.
