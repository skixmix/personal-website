# AI Specifications

This repository is managed by an AI agent fleet powered by [OpenCode](https://opencode.dev) and [oh-my-opencode](https://github.com/skixmix/oh-my-opencode).

## Site Structure

```
website/
├── config.toml              # Hugo config (PaperMod theme, menus, SEO)
├── go.mod                   # Hugo module dependencies
├── assets/
│   └── css/
│       └── extended/
│           └── override.css # Custom styles (Tokyo Night colors)
├── content/
│   ├── _index.md            # Home page content
│   ├── portfolio.md         # Portfolio page
│   └── blog/                # Blog posts
│       ├── _index.md        # Blog list page (uses layouts/_default/blog.html)
│       └── *.md             # Individual posts
├── data/
│   ├── resume/              # Work experience (YAML, ordered by filename)
│   ├── portfolio/            # Projects (YAML, ordered by filename)
│   └── socials.yaml          # Social links
├── layouts/
│   ├── index.html            # Home page (CV/experience)
│   ├── _default/
│   │   ├── blog.html         # Blog list layout with pencil icon
│   │   └── portfolio.html    # Portfolio layout with code icon
│   ├── partials/
│   │   ├── footer.html
│   │   ├── getFormattedDate.html
│   │   ├── head.html
│   │   ├── header.html       # PaperMod header + mobile menu
│   │   ├── mobile-menu.html  # Reusable mobile menu component
│   │   └── nav.html
│   └── pages/
│       └── portfolio.html    # Portfolio layout (legacy, prefer _default/)
└── static/
    └── fonts/               # Mononoki font
```

## Key Decisions

- **Hugo Modules** for theme management — no `themes/` folder in repo
- **EditorConfig** for base formatting settings
- **Base16 Tokyo Night** color scheme (developer aesthetic)
- **Mononoki** monospace font throughout
- **Dark mode default**, light mode available

## Theme: PaperMod

- GitHub: [adityatelange/hugo-PaperMod](https://github.com/adityatelange/hugo-PaperMod)
- Theme managed via Hugo modules in `go.mod`
- Override layouts in `layouts/` for custom pages

## Custom Layouts

### Layout Lookup Order

Hugo looks for layouts in this order for blog pages:

1. `layouts/pages/blog.html`
2. `layouts/_default/blog.html` ← used
3. PaperMod theme default

### Adding Icons to Layouts

Icons use inline SVG (Feather/Lucide style) with class `section-icon`:

```html
<h1 class="section-title">
  <svg
    class="section-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <!-- SVG paths here -->
  </svg>
  Page Title
</h1>
```

Available icons in codebase:

- **Portfolio**: `<polyline points="...">` (code brackets)
- **Blog**: `<path d="M12 20h9...">` (pencil)

## Adding Content

### New Blog Post

```bash
hugo new blog/my-post-title.md
```

Blog post front matter:  

```yaml
---
title: "Post Title"
description: "Brief description for the listing page"
draft: false
---
```

**External links**: All links pointing outside the site must use HTML (markdown attributes not supported):

```html
<a href="https://example.com" target="_blank" rel="noopener nofollow">Link text</a>
```

This opens links in a new tab without passing SEO authority.

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
