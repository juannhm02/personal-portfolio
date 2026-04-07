# Juan Higuera Mohedano | Personal Portfolio

Personal portfolio built with React and Vite to showcase my projects, experience, education, and technical profile.

Live site:

- https://personal-portfolio-azure.vercel.app

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Sections

- Hero
- Skills & Experience
- Education
- Highlights
- Projects
- Contact

## Run locally

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```bash
http://localhost:5173
```

## Production build

```bash
npm run build
npm run preview
```

## Deployment

This project is configured for Vercel with:

- `buildCommand`: `npm run build`
- `outputDirectory`: `dist`

To deploy from the terminal:

```bash
vercel --prod
```

## Notes

- The portfolio content is managed mainly from `src/constants/index.js`.
- The resume file is served from `public/CV_Tecnico_Juan_Higuera.pdf`.
