---
alwaysApply: false
paths: content/blog/**
---

# Blog Post Rules

## Before Writing

- Always ask for anything unclear before writing the post.
- Always ask for confirmation regarding the post's title and description.
- Keep the same meaning the user provided in the original text, do not use your own interpretation.
- Never use the same blog post title twice. Check existing posts to see if something similar already exists.
- Always verify that what you are writing is correct. Use web search or plugins to verify.

## Creating a New Post

```bash
hugo new blog/my-post-title.md
```

Front matter:

```yaml
---
title: "Post Title"
description: "Brief description for the listing page"
draft: false
---
```

## Writing Style and Tone

**Language:** All blog posts must be written in English, even if the source material or user input is in Italian or any other language.

**Author Persona:**
- The author is a software engineer writing on his personal blog.
- He writes about anything that interests him, not just tech topics.
- Topics can range from finance to AI to random observations about life.

**Tone Guidelines:**
- Conversational and casual. Avoid academic or overly formal language.
- Slightly self-deprecating and ironic when appropriate.
- Personal perspective: use "I think," "I noticed," "I had to look this up too."
- Accessible explanations: explain complex topics simply without going too deep.
- Never pretend to be a subject matter expert. Write as an observer sharing thoughts.
- Match the tone of previous posts (see `content/blog/ai-rebuilding-website-and-career.md` for reference).
- Keep in mind that the reader's attention span is small. Do not write too much text or very long sentences.
- Be concise. Avoid unnecessary jargon and get to the point.

## Formatting Rules

**External links:** All links pointing outside the site must use HTML (markdown attributes are not supported):

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Link text</a>
```

- `noopener noreferrer` is required for security and privacy on all external links.
- Wrap theoretical terms and acronyms with links to official sources like Wikipedia when first mentioned. Example: `<a href="https://en.wikipedia.org/wiki/SOLID" target="_blank" rel="noopener noreferrer">SOLID</a>`
- Provide sources when making strong claims.

## YouTube Transcripts (for research or summarization)

### Method 1: youtube-transcript-api (preferred)

```python
from youtube_transcript_api import YouTubeTranscriptApi
api = YouTubeTranscriptApi()
transcript = api.fetch('VIDEO_ID', languages=['en', 'it'])
for entry in transcript: print(entry.text)
```

Install: `pip3 install --break-system-packages youtube-transcript-api`

Extract the video ID from the URL (e.g. `3LTZDcs6TbY`). If the language is unavailable, check auto-generated options.

### Method 2: yt-dlp (fallback)

```bash
yt-dlp --write-auto-sub --sub-lang en --skip-download "URL"
```

Install: `brew install yt-dlp`

If you get a 429 error, wait and retry, or use Method 1.

**Language codes:** en, es, it, fr, de, pt, ja, ko, zh, ru, ar
