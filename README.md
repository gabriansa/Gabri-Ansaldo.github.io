# Gabri Ansaldo

Personal portfolio for Gabri Ansaldo — Product Manager working at the edge of generative AI.

Live at [gabriansaldo.com](https://gabriansaldo.com).

## Stack

- [Astro 4](https://astro.build) for static generation
- [Tailwind CSS](https://tailwindcss.com) for utility styling
- Astro `ViewTransitions` for smooth page navigation
- Hand-rolled CSS for type, motion, and layout
- Fonts: Instrument Serif, Inter Tight, JetBrains Mono (Google Fonts)

## Structure

```
src/
  components/        Hero, Marquee, WorkTile, Stats, Manifesto,
                     ExperienceList, Now, ContactCTA
  layouts/           Layout.astro · CaseStudy.astro
  pages/
    index.astro      Single-page narrative (Hero → Work → Contact)
    work/            Case studies (investi, openmodel, motorola-edge-ai, explicit-agent)
  styles/global.css  Design tokens, type, motion, layout primitives
```

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output → ./dist
npm run preview
```

## Contact

- Email — [ansaldo.gabri@gmail.com](mailto:ansaldo.gabri@gmail.com)
- LinkedIn — [linkedin.com/in/gabrieleansaldo](https://www.linkedin.com/in/gabrieleansaldo)
- GitHub — [github.com/gabriansa](https://github.com/gabriansa)
