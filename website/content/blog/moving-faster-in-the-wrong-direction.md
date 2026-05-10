---
title: "Moving Faster in the Wrong Direction: Why AI Won't Fix What's Already Broken"
description: "Why going AI-First without Fixing-Your-Organization-First just means moving faster in the wrong direction."
date: 2026-04-07
cover:
  image: "images/blog/three-cents.webp"
  alt: "Three Cents"
  caption: "Three cents. That's what started this whole chain of thought"
draft: false
---

I run a website on Cloudflare Workers, paid plan. I also happen to care (a lot) about performance, so I always pay attention to metrics like Worker CPU Time and D1 database reads, not just Core Web Vitals.

Using Cloudflare Workers for the website is a constraint I chose, and I like it because it forces me to think about performance at **every** level. Most months, I stay well below every threshold defined in the official documentation.

So when my bill came in at $5.03 instead of $5.00 flat, I noticed. I mean, who notices three cents? I do.

## The Bug

Something was off, but I didn't know what. After reading the bill, I found the culprit. I use Workers AI occasionally, a feature that uses "Neurons" as its unit of measure.

The <a href="https://developers.cloudflare.com/workers-ai/platform/pricing/" target="_blank" rel="noopener nofollow">official pricing docs</a> are pretty clear:
> "Our free allocation allows anyone to use a total of 10,000 Neurons per day at no charge."

That month, I used roughly 2,800 Neurons total. In a full month. Not even close to 10,000 in a single day. I should have paid exactly $0.

But I paid $0.03. So I opened a support ticket, and this is where the fun part begins.

## The (missing) Support

I want to be clear: I'm not writing this to drag Cloudflare. I like their product, in fact I use it and would recommend it. This post is about something else.

But yeah, I waited **two weeks**. Two weeks of silence from a multi-billion dollar company, for a billing question. I pinged them multiple times. Nothing.

Out of frustration, I posted in the Cloudflare Community forums. And something interesting happened: I got a response within hours.

A Cloudflare team member apologized and said they'd ping the billing team to follow up on my original ticket. One hour later, I had a reply.

The reply, though, **was wrong**. The billing agent told me I had used 2,800 Neurons and that, multiplied by the rate, it came to $0.03. Correct math, wrong result. The entire point of my ticket was that those 2,800 Neurons should have been free, because they were well below the 10,000 per day threshold.

I pointed this out and after some back and forth, they agreed, apologized, and issued a refund.

Great. Issue resolved, right?

## The Punchline

The next month's bill: $5.02. And I'm like: "What?"

Long story short, checking the bill again showed that the bug was never fixed. They knew about it, refunded me, and a full month later, nothing changed. They wrongly charged me again, this time with $0.02 more.

I didn't (and won't) open another ticket for two cents, honestly. But that's not the point.

## The Point

Here's where I want to zoom out, because blaming Cloudflare would be too easy and also unfair. Why? Because this is a **structural problem**. It's the kind of thing that happens when:

- The team that writes the docs is not the team that writes the billing logic
- The team that handles support tickets is not the team that can fix the underlying bug
- The team that responds to community posts is not the team that owns the ticket queue

No single person is wrong here. The problem is **the gap between them**.

There's a principle in software engineering that describes this almost too perfectly.

## Conway's Law

In 1967, Melvin Conway observed something that has aged like fine wine:

> "Organizations which design systems are constrained to produce designs which are copies of the communication structures of those organizations."

This is known as <a href="https://en.wikipedia.org/wiki/Conway%27s_law" target="_blank" rel="noopener nofollow">Conway's Law</a>. Simply put: your software will look like your org chart. If your teams don't talk to each other, your systems won't talk to each other either.

In the Cloudflare billing case, it's almost textbook. The docs team, the billing system, the support team, and the engineering team are clearly separate silos (or at least, they seem to be). They don't share enough context to close the loop on something as simple as "the billing code doesn't match what the docs say".

This isn't unique to Cloudflare. It's how most large tech companies actually work.

## AI as a Multiplier

Now here's where it gets even more interesting, and where I think the industry has a real blind spot nowadays.

AI is a force multiplier. It makes fast teams faster, productive engineers more productive, and good processes more efficient.

Well, it also makes **slow** teams **slower**, siloed organizations more siloed, and **broken** processes **break harder**.

The Harvard Business Review captured it well: <a href="https://hbr.org/2025/09/dont-let-ai-reinforce-organizational-silos" target="_blank" rel="noopener nofollow">AI is reinforcing functional silos rather than breaking them down</a>, with departments adopting tools independently and generating fragmented gains that don't add up to real impact. The World Economic Forum echoed the same point: <a href="https://www.weforum.org/stories/2026/01/how-to-make-ai-work-in-your-enterprise-through-integration-and-not-silos/" target="_blank" rel="noopener nofollow">enterprise AI works through integration, not silos</a>.

Everyone is rushing to go "AI-First". But if your organization already has communication problems, if teams are siloed, if Conway's Law fingerprints are all over your systems, then in my opinion going AI-First just means you'll move faster in the **wrong** direction.

## The Real Bottleneck

I've seen this in practice everywhere. The AI tools are ready. The models are capable. The infrastructure is there.

What slows everything down is the org. The handoff between teams. The ticket that sits for two weeks because no one owns it end-to-end. The bug that isn't fixed because the person who understood the context is in a different department from the person who can deploy the fix.

Conway's Law is more visible than ever precisely because AI **amplifies everything**. As WunderGraph explored in a piece on <a href="https://wundergraph.com/the-good-thing/episodes/conways-law-ep17" target="_blank" rel="noopener nofollow">Conway's Law and AI</a>: if AI agents join the team as participants rather than tools, the organization's communication structure will shape how they collaborate too. The law doesn't go away. It **scales up**.

So listen carefully, you C-level Executives out there. The cracks in your communication structure will show up faster, louder, and more expensively when you add AI to the mix.

## From AI-First to Fix-Your-Org-First

I got my three cents back. I'll probably keep getting charged some cents a month for Neurons I shouldn't be billed for, because the alternative is spending more time on tickets than the charge is worth. Which is, ironically, how most broken processes survive. The cost of fixing them feels higher than the cost of living with them.

Until it **doesn't**.

If you're planning an AI-First transformation, great. AI genuinely changes what's possible. But before rolling out agents, automation, and LLM pipelines, ask yourself: does my team communicate well enough that AI will amplify the good stuff? Or will it just make it faster at **going the wrong way**?

Conway's Law doesn't care about your AI strategy. It just reflects your org back at you. So, please, fix your org first.
