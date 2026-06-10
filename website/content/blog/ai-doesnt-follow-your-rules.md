---
title: "If Your AI Doesn't Follow Your Rules, Here's How to Fix That"
description: "The AI follows instructions. Just not yours."
date: 2026-06-10
cover:
  image: "images/blog/vibe-coding.webp"
  alt: "Vibe Coding"
  caption: "What could go wrong?"
draft: false
---

You added the AI to your workflow. It's fast, it ships code, it never complains. Great.

But after a few weeks, something feels off. The code is functional. It's just not *your* code. Wrong patterns in the wrong layers. The same problem solved three different ways in three different places.

The AI didn't break anything. It just didn't follow your rules. And it won't, unless you build a system that makes it.

## AI = Junior Dev

I think you've read this analogy a billion times. Bear with me. Think about onboarding a junior developer. A smart one. Frighteningly fast,
actually. But they don't know your codebase. They don't know why you made
certain architectural choices, which patterns you avoid, which abstractions
you've learned to regret (we all have a few).

You wouldn't drop them into the repo with the ticket backlog and say "ship
it". You'd give them a style guide. An architecture overview. A few pairing
sessions. You'd explain the rules and, more importantly, the **why** behind
them.

Your AI is that junior developer. Except it works 24/7 and never asks
questions. Which sounds like a dream hire, until you realize that (almost) **never
asking questions** is exactly the problem.

Left alone, it invents solutions. Some elegant. Many technically correct but
wrong for **your** specific case. It's consistent in exactly the wrong way:
consistently following its own conventions instead of yours.

## The Drift

Here's what actually happens without guardrails. Not immediately. Over weeks.

Business logic leaks into the wrong layers. Files grow past the point of
readability. The same problem gets solved three different ways in three
different places. Tests get quietly weakened when they're inconvenient. The
architecture you had in your head slowly diverges from what's in the repo.

None of it is catastrophic. Every individual decision the AI made was
"reasonable". But the accumulated drift is real, and it's expensive to undo.

This isn't an AI failure. It's a **context failure**. And we know that <a href="/blog/context-matters/">context matters</a>.

## The Known Fixes

You've heard these. Do them anyway.

**AGENTS.md**: a document the AI reads before every session. Focus on the **why** and the **standards**, not on what the code **does** (the AI can figure that out): what layers exist, which boundaries cannot be crossed, which patterns you're committed to, which anti-patterns you've already banned.

**Skills** for repeated workflows: a new route, a new service, a new database migration should follow the exact same steps every time. Write a markdown file with those steps, tell the AI to read it before starting. That's a skill. Now it follows your playbook instead of improvising one each session.

These help a lot. But they're still just **instructions**. And instructions get ignored, especially when the AI is three tool calls deep trying to make a failing test pass.

## The Part That Actually Sticks

Instructions get forgotten. What doesn't get forgotten is a command that fails.

The real fix is to give the AI a **done checklist**: a sequence of commands it must run and pass before anything can be marked complete. Mine lives at the bottom of AGENTS.md:

```md
After every implementation: lint:fix → test → test:coverage:file -- <spec> → check-duplication
```

Four commands. Here's what each one actually catches in my Node.js projects.

`lint:fix` runs <a href="https://biomejs.dev/" target="_blank" rel="noopener noreferrer">Biome</a>. Style violations, unused imports, obvious errors. The AI stops arguing about formatting because there's nothing to argue about.

`test` runs the full suite. If the AI quietly weakened an assertion to make something pass, it shows up here.

`test:coverage:file` is scoped to the changed file. Fast. Catches untested branches the AI added without mentioning.

`check-duplication` runs <a href="https://github.com/kucherenko/jscpd" target="_blank" rel="noopener noreferrer">jscpd</a>. This is the sneaky one.

### Why jscpd

The AI loves to solve the same problem in three different places. It doesn't know it already solved it last week in a different file, because it doesn't remember last week. Well, jscpd does.

A basic config:

```json
{
  "minTokens": 50,
  "threshold": 2,
  "path": ["app"],
  "ignore": ["**/*.spec.ts"],
  "reporters": ["ai"]
}
```

`"reporters": ["ai"]` outputs results in a format the AI can parse and act on directly. It reads the report, finds the duplication, and consolidates it before you ever see the PR.

### The Fallback

The AI usually follows my instructions and runs the checklist. But sometimes it gets lazy, marks something done mid-task, or skips steps it thinks don't apply. For that, there's a pre-push hook:

```bash
npm run lint
npm run test
```

Two lines. You can do that with <a href="https://typicode.github.io/husky/" target="_blank" rel="noopener noreferrer">Husky</a> or on a CI pipeline or with any other tool you want. Nothing gets merged if the checks don't pass. Not by the AI, not by you at 2am, not by anyone.

The AGENTS.md sets the expectation. The hook enforces it when the expectation isn't met.

## The Upfront Investment

I'll be honest: setting this up takes time. Writing the guidance docs,
defining the workflows, wiring the checks. It's not a weekend's work, and
the AI won't do it for you either, because it doesn't know your standards yet. That part is on you.

But you'll repeat these patterns dozens of times over a project's life. If
the AI follows your playbook, each repetition costs almost nothing. If it
doesn't, each one costs a review session, a debugging pass, or worse, a
refactor you didn't plan for.

The investment is front-loaded. The returns are every day after.

## Make It Follow Your Rules

Write your standards down. Make them executable. The AI will follow them, because it has no choice.
