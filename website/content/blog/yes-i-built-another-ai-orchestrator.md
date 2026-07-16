---
title: "Yes, I Built Another AI Orchestrator"
description: "This is my AI orchestrator. There are many like it, but this one is mine."
date: 2026-07-16
cover:
  image: "images/blog/antani.webp"
  alt: "The AntanI meerkat logo"
  caption: "Anche per due"
draft: false
---

Let me save you a comment: yes, I know <a href="https://superset.sh/" target="_blank" rel="noopener nofollow">Superset</a> exists. And <a href="https://www.conductor.build/" target="_blank" rel="noopener nofollow">Conductor</a>. And a growing list of desktop apps, CLI tools, and TUIs that all promise the same thing: manage multiple AI coding agents across multiple projects without losing your mind.

I tried them. They work. And then I built my own anyway. Why? Because I can.

It's called <a href="https://github.com/skixmix/AntanI" target="_blank" rel="noopener noreferrer">AntanI</a>. Sure, you can read it as **A**-ntan-**I**, an AI wrapped around some nonsense. But the real reason is that I'm Italian and I like to make "<a href="https://www.youtube.com/watch?v=IoEK2Z3-JH8&t=43" target="_blank" rel="noopener nofollow">supercazzole</a>".

## The Real Reason

Here's what my day looks like: multiple projects, each with one or more AI agents doing work. Claude Code here, OpenCode there, maybe Codex on a third thing. Every agent lives in its own terminal window, and every one of them, at some point, stops and waits for me.

The problem is that I don't know *when*. So I end up alt-tabbing through a graveyard of terminal windows like a caffeinated window manager, checking which agent is done, which one is stuck asking permission for something, and which one has been silently waiting for twenty minutes while I was looking at the wrong window.

And when an agent finishes, the follow-up is always the same dance: open VS Code, look at the diff, maybe edit something, go back to the terminal. Multiply that by the number of projects. Every day.

I know, I know... you can register hooks like the <a href="https://github.com/PeonPing/peon-ping" target="_blank"  rel="noopener nofollow">peon ping</a>, but I mean, I wanted some more personalization.

## AntanI's audience: me

AntanI is a minimal macOS desktop app built with <a href="https://tauri.app/" target="_blank" rel="noopener nofollow">Tauri</a> and React. One window, a sidebar of projects, tabbed workspaces per project. Agents and plain terminals run as tabs, side by side. VS Code is embedded as just another tab, so "open the editor and check the diff" is one click, not a context or screen switch.

When an agent becomes ready or needs input while I'm not looking at it, I get a status-colored dot and a notification.

But here's the actual selling point, and it only sells to an audience of exactly one person: **it's mine**. Like the <a href="https://en.wikipedia.org/wiki/Rifleman%27s_Creed" target="_blank" rel="noopener noreferrer">Rifleman's Creed</a> says: there are many like it, but this one is mine.

Not "mine" as in "I own the repo". Mine as in *personalized to my taste, my use cases, my day-to-day work*. I've added quick actions so I can inject the prompts I actually run. The notifications behave the way I want. The layout matches how I think about my projects. When a feature idea comes to my mind, it gets built. When something annoys me, it gets removed.

No feature requests, no roadmap votes, no "we'll consider it for Q3". Generic tools are built for everyone, which means they're built for no one in particular. AntanI is built for no one *except* me.

Even the logo is personal. My girlfriend designed it: it's a meerkat. Why? Because apparently when I work at my standing desk, I look exactly like one. I can't argue with that. Try getting *that* level of customization from **any** commercial tool.

## Vibe it till you make it

This is my favorite part, and honestly the reason I'm writing this post.

I use AntanI every day for my actual job. Which means every rough edge gets found fast, because the user and the developer share a body. But here's where it gets a bit absurd, in a good way.

When I hit a bug or think "it would be nice if...", I don't open an issue. I don't add it to a backlog. I send a message to Claude **from my phone**, describing the problem. The agent works on the project while I go on with my day. At night, I do a quick review of what it did, and publish a release.

Find a bug in the morning, use the fix by tomorrow. The maintenance cost of owning a custom tool, which used to be the whole argument *against* building your own, has basically collapsed.

This is my first project where I went completely in with vibe coding. I don't have the time to review every single line. So everything you see was made by AI (mainly Claude), except the ideas, the decisions, and the direction.

Sounds familiar? It's the same thing I said about <a href="/blog/ai-rebuilding-website-and-career/">this website</a>. The pattern keeps repeating: I architect, I review, I decide. The AI builds.

Would I ship a bank's backend this way? **No.**

Would I ship a personal desktop tool that only I depend on, where the blast radius of a bug is "I restart the app and text Claude about it"? Absolutely.

## It's a new era

There's a broader point hiding here, I think.

For decades, building your own tools was reserved for people with lots of free time or very specific needs and skills. The math never worked: weeks of effort for something you could download in five minutes, published and maintained by someone else. So we all settled for generic software and adapted ourselves to it, instead of the other way around.

AI flipped the math. When building a personalized tool costs evenings instead of months, and maintaining it costs a text message, "somebody already built this" stops being an argument. Of course somebody already built it. But they built *their* version. Now I can afford to build **mine**.

If you're curious, AntanI is <a href="https://github.com/skixmix/AntanI" target="_blank" rel="noopener noreferrer">on GitHub</a>, installable via Homebrew. You're welcome to use it.

But honestly? You'd probably be happier building your own.
