# Tesserova website source

Includes the homepage, 137 content routes, original logo, image assets and cinematic hero code.

## Run locally
Install Node.js 22.13 or newer and pnpm, then run in this folder:

```sh
pnpm install
pnpm dev
```

Open http://localhost:5173 (or the URL printed in your terminal).

## Build
```sh
pnpm build
```

This is React with Next.js App Router APIs, built using Vinext and Vite for Cloudflare Workers / Sites hosting. It is not a stock next build deployment. Adapting it for another hosting platform may require configuration changes.

## Edit content
- app/content/pages.json: page copy and route definitions
- app/ContentPage.tsx: inner page template
- app/page.tsx: homepage
- app/cinematic/: animated hero and playback timeline
- app/SiteChrome.tsx: header and footer
- public/: logo and images

The project brief form downloads a local file; email delivery is not connected. Dependencies and build outputs are excluded. The deployed website is unchanged by this export.
