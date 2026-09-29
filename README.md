# Personal Website

Portfolio/CV + blog website built with [Hugo](https://gohugo.io/) and the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

Live at [simonetavoletta.it](https://simonetavoletta.it)

> ⚙️ This repo is managed by my AI agent fleet. See [AGENTS.md](./AGENTS.md) for more details, or if you are an AI.

## Quick Start

```sh
cd website/
hugo server
```

Site runs at `localhost:1313`

## Setup (first time only)

```sh
brew install hugo
hugo
```

Hugo modules auto-download the theme on first build.

## Writing Blog Posts

```sh
hugo new blog/my-post-title.md
```

Edit the created file in `content/blog/`.

## Markdown Linting

Install dependencies (Node version is pinned via `.nvmrc`):

```sh
nvm use
npm install
```

Lint and auto-fix markdown files:

```sh
npm run lint:md:fix  # auto-fix what's possible
npm run lint:md      # must exit with 0 errors
```

Rules are configured in `.markdownlint-cli2.jsonc`.

## Editor Setup

This project uses:

- **EditorConfig** — for base formatting settings (indentation, charset, EOL)
- **markdownlint-cli2** — for markdown linting

## Deployment

Push to `trunk` → Cloudflare Workers Builds (Git integration, configured in the Cloudflare dashboard):

1. Build command: `npm ci && npm run lint:md && cd website && hugo --minify`
2. Deploy command: `npx wrangler deploy`, which serves `website/public/` as static assets (config: [`wrangler.jsonc`](wrangler.jsonc))

Build variables: `HUGO_VERSION=0.148.2`, `GO_VERSION=1.26.1`.

## Stack

- [Hugo](https://gohugo.io/) — static site generator
- [PaperMod](https://github.com/adityatelange/hugo-PaperMod) — theme
- [Hugo Modules](https://gohugo.io/hugo-modules/) — dependency management
