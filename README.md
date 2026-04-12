## Portfolio

This portfolio runs on Next.js 16 with the App Router.

## Local Development

Install dependencies and start the dev server:

```bash
npm install
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
npm install
npm run build:standalone
npm run start:standalone
```

`build:standalone` runs `next build` and then copies `public` and `.next/static` into `.next/standalone` so `.next/standalone/server.js` can serve the app correctly.

## Environment Notes

`NEXT_PUBLIC_SITE_URL` is used for canonical URLs, sitemap output, robots metadata, and Open Graph URLs. Because it is a `NEXT_PUBLIC_` variable, provide it at build time when building the Docker image if you want production metadata to match the deployed domain. If you omit it, the app falls back to `https://danielvanginneken.nl`.

## Production Build

If you want to verify the production build without Docker:

```bash
npm run build
npm run start
```
