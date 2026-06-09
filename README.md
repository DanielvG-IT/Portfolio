# Portfolio

This portfolio runs on Next.js 16 with the App Router.

## Local Development

Install dependencies and start the dev server:

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

This repo ships with a production-ready multi-stage `Dockerfile` that uses Next.js `output: "standalone"` for a smaller runtime image.

Build the image:

```bash
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://danielvanginneken.nl \
  -t portfolio .
```

Run the container:

```bash
docker run --rm -p 3000:3000 portfolio
```

The app listens on port `3000` inside the container.

## Plesk / Plain Node Deploy

If you just want to pull the repo on a server, install dependencies, and run the standalone server directly, use:

```bash
export NEXT_PUBLIC_SITE_URL=https://danielvanginneken.nl
export NEXT_TELEMETRY_DISABLED=1

# Optional but recommended if you ever do rolling deployments
export NEXT_DEPLOYMENT_ID=$(date +%Y%m%d%H%M%S)

npm ci
npm run build:standalone
node .next/standalone/server.js
```

`build:standalone` runs `next build` and then copies `public` and `.next/static` into `.next/standalone` so `.next/standalone/server.js` can serve the app correctly.

The app exposes a simple health endpoint at `/api/health`.

## Environment Notes

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, sitemap output, robots metadata, and Open Graph URLs. Because it is a `NEXT_PUBLIC_` variable, provide it at build time when building the Docker image or standalone bundle if you want production metadata to match the deployed domain. If you omit it, the app falls back to `https://danielvanginneken.nl`.

`NEXT_TELEMETRY_DISABLED=1` disables Next.js telemetry for build and runtime.

`NEXT_DEPLOYMENT_ID` is optional. When set during build, Next.js uses it for deployment skew protection and cache busting in self-hosted environments.

## Production Build

If you want to verify the production build without Docker:

```bash
npm run build
npm run start
```
