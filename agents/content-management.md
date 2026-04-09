# Content Management

The following rules apply when managing content in the website (resume entries, blog posts, portfolio items, etc.).

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

## New Portfolio Item

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
