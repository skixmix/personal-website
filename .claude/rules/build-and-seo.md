---
alwaysApply: false
paths: website/**, config.toml
---

# Build and Deploy

## Local Build

```bash
cd website
hugo
```

Output is in `website/public/`.

## SEO

Configured in `config.toml`:

- Meta description and keywords
- OG tags (auto from PaperMod)
- Canonical URLs
- RSS feed (ATOM format)
- JSON search index

Always optimize for SEO, page load speed, and Core Web Vitals when making changes.
