# AI Specifications

This repository is managed by an AI agent fleet powered by [OpenCode](https://opencode.dev) and [oh-my-opencode](https://github.com/skixmix/oh-my-opencode).

## Site Structure

```
website/
├── config.toml          # Hugo config (PaperMod theme, menus, SEO)
├── go.mod                # Hugo module dependencies
├── assets/
│   ├── css/extended.css  # Custom styles (mononoki font, Tokyo Night colors)
│   ├── images/           # Site images (profile, project screenshots)
│   └── main.js
├── content/
│   ├── _index.md         # Home page content
│   ├── portfolio.md      # Portfolio page
│   └── blog/             # Blog posts
│       ├── _index.md
│       └── example-post.md
├── data/
│   ├── resume/           # Work experience (YAML, ordered by filename)
│   ├── portfolio/        # Projects (YAML, ordered by filename)
│   └── socials.yaml      # Social links
├── layouts/
│   ├── index.html        # Home page (CV/experience)
│   ├── _default/
│   │   ├── baseof.html
│   │   └── single.html
│   ├── partials/
│   │   ├── footer.html
│   │   ├── getFormattedDate.html
│   │   ├── head.html
│   │   ├── header.html
│   │   └── nav.html
│   └── pages/
│       └── portfolio.html
└── static/
    └── fonts/           # Mononoki font
```

## Key Decisions

- **Hugo Modules** for theme management — no `themes/` folder in repo
- **dprint** for JS/JSON/CSS/Markdown formatting — no npm
- **EditorConfig** for base formatting settings
- **Base16 Tokyo Night** color scheme (developer aesthetic)
- **Mononoki** monospace font throughout
- **Dark mode default**, light mode available

## Theme: PaperMod

- GitHub: [adityatelange/hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- Theme managed via Hugo modules in `go.mod`
- Override layouts in `layouts/` for custom home, portfolio

## Adding Content

### New Blog Post

```bash
hugo new blog/my-post-title.md
```

### New Resume Entry

Create `data/resume/XX_Something.yaml`:

```yaml
- companyName: Company Name
  role: Your Role
  location: City, Country (Remote)
  isOngoing: false
  startDate: 2023-01-01
  endDate: 2024-06-01
  description: |
    Brief description.
  keypoints:
    - Point 1
    - Point 2
```

### New Portfolio Item

Create `data/portfolio/XX_project.yaml`:

```yaml
- title: Project Name
  type: website/app/tool
  description: |
    Project description.
  url: "https://project-url.com"
  image: images/project-screenshot.webp
  keypoints:
    - Feature 1
    - Feature 2
```

## Build & Deploy

### Local Build

```bash
cd website
hugo
```

Output in `website/public/`

### CI/CD

Push to `trunk` branch → GitHub Actions pipeline:

1. Checkout with submodules
2. Setup Hugo (extended)
3. Build with `hugo --minify`
4. Deploy to FTP via `SamKirklands/FTP-Deploy-Action`

## SEO

Configured in `config.toml`:

- Meta description & keywords
- OG tags (auto from PaperMod)
- Canonical URLs
- RSS feed (ATOM format)
- JSON search index

## Dependencies

| Dependency      | Purpose               |
| --------------- | --------------------- |
| Hugo (extended) | Static site generator |
| hugo-PaperMod   | Theme                 |
| dprint          | Code formatting       |
