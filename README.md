# AiMetics public website

Premium corporate and investor-facing website for AiMetics. Built with React + TypeScript + Vite.

## Local development
```bash
npm install
npm run dev
```

## GitHub Pages deployment
1. In Settings → Pages, set source to GitHub Actions.
2. Push to main; `.github/workflows/deploy.yml` builds and publishes `dist/`.
3. GitHub Pages project sites use `/aimetics-website/` as the Vite base path; configure `base: '/aimetics-website/'` in `vite.config.ts` before publishing.

## Before public launch
- Replace `info@aimetics.ai` with a verified company mailbox.
- Confirm company domain ownership before adding custom-domain DNS.
- Replace illustrative contacts and claims with verified company information.
- CounterSign demo currently lives separately; update its link when deployed.
