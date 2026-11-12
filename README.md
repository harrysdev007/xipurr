# XIPURR

The official XIPURR cat meme website. A full-screen Chinese palace scene and six original Chairman Meow images.

## Run

Requires Node.js 18 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Vite.

## Build

```sh
npm run build
```

Deploy the generated `dist/` folder to any static hosting provider. No API keys, environment variables or backend required.

## Features

- A cinematic full-screen hero with a smaller seated Chairman Meow.
- Barlow Condensed, Manrope and Noto Sans SC, self-hosted with their font licenses.
- Official X: https://x.com/xipurr_on_sol
- Six-image gallery, on-duty/off-duty filters and image downloads.
- Keyboard-accessible viewer with previous/next controls and Escape close.
- Copy ticker button and feedback.
- Responsive layouts, a mobile hero crop and reduced-motion support.

## Files

- `src/main.jsx`: page content and interactions.
- `src/style.css`: visual design and responsive layout.
- `public/media/republic/`: optimized original cat imagery.
- `public/fonts/`: local font files and licenses.
- `public/logo.png`, `public/favicon.png`, `public/apple-touch-icon.png`: cat branding.

Artwork was created for this project with image generation tools. Prompt briefs are included in `generation-prompts.json` and `hero-smaller-prompt.txt`.
