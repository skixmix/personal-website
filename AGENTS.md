# Adding Content

## New Blog Post

### Rules
- When the user asks you to write a new post, always ask for anything unclear before writing the post.
- Always ask for confirmation regarding the post's title and description.
- Keep the same meaning the user provided in the original text, don't use your own interpretation.
- Never use the same blog post title twice. So, check old posts to see if there is something similar that already exists.

### Writing Style & Tone

**Language:** All blog posts must be written in **English**, even if the source material or user input is in Italian or any other language.

**Author Persona:** 
- The author is a software engineer writing on his personal blog
- He writes about anything that interests him — not just tech topics
- Topics can range from finance to AI to random observations about life

**Tone Guidelines:**
- Conversational and casual (avoid academic or overly formal language)
- Slightly self-deprecating and ironic when appropriate
- Personal perspective — use "I think," "I noticed," "I had to look this up too"
- Accessible explanations — explain complex topics simply without going too deep
- Never pretend to be a subject matter expert; write as an observer sharing thoughts
- Match the tone of previous posts (see `/content/blog/ai-rebuilding-website-and-career.md` for reference)


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

## New Resume Entry

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

# Build & Deploy

## Local Build

```bash
cd website
hugo
```

Output in `website/public/`

# SEO

Configured in `config.toml`:

- Meta description & keywords
- OG tags (auto from PaperMod)
- Canonical URLs
- RSS feed (ATOM format)
- JSON search index
