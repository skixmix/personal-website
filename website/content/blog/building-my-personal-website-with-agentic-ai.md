---
title: "Building My Personal Website with Agentic AI"
draft: false
description: "How I used AI agents to build and maintain my developer portfolio — from initial setup to ongoing improvements."
---

> "Everybody uses AI.  
> Everybody _must_ use AI.  
> If you don't use AI, you are a **looser**."
>
> -- <cite>Everybody</cite>

When I decided to rebuild my personal website, I didn't want to spend weeks tweaking layouts and polishing CSS. I wanted something clean, fast, and easy to maintain. So I turned to AI agents to do the heavy lifting.

## The Stack

The site runs on <a href="https://gohugo.io/" target="_blank" rel="noopener nofollow">Hugo</a> with the <a href="https://github.com/adityatelange/hugo-PaperMod" target="_blank" rel="noopener nofollow">PaperMod</a> theme. I chose Hugo for its speed and simplicity — no React hydration, no build pipelines, just fast static HTML.

The Tokyo Night color scheme gives it that developer aesthetic without being too on-the-nose. Mononoki font throughout for that clean monospace feel.

## How the Agents Work

The site is managed by a fleet of AI agents through <a href="https://opencode.dev" target="_blank" rel="noopener nofollow">OpenCode</a>. Each agent has a specific role:

- **Research**: Searches the codebase, finds patterns, explains how things work
- **Implementation**: Writes code, follows patterns, maintains consistency
- **Review**: Checks for issues, validates changes
- **Orchestration**: Coordinates the others, keeps context, manages the workflow

## What They Handle

### Layout Customizations

I wanted icons next to section titles — like a little code icon for Portfolio, a pencil for Blog. The agents found the existing patterns, created reusable partials for the mobile menu, and ensured consistency across layouts.

### Content Management

Adding a new portfolio item? Just create a YAML file in `data/portfolio/`. The agents helped set up the data structure and the templates that consume it.

### Ongoing Improvements

Need a new feature? Ask the agent. Want to refactor something? The agent can do it while maintaining the existing style. It has full context of the codebase and follows the conventions already established.

## The AGENTS.md File

The secret sauce is the `AGENTS.md` file in the repo root. It tells any new agent everything they need to know:

- The project structure
- Existing patterns and conventions
- How to add content
- Build and deploy process

This means every agent that touches the codebase starts with the same context. No more "I didn't know you were using dprint instead of prettier."

## Results

- Site built in days, not weeks
- Consistent styling and patterns throughout
- Easy to maintain and extend
- Technical debt kept to a minimum

## What's Next

The site will evolve as I do. New projects get added to the portfolio. New thoughts go in the blog. And the agents make sure everything stays consistent without me having to remember every detail of the codebase.

The future of development isn't AI replacing developers — it's AI handling the tedious parts so developers can focus on the interesting problems.
