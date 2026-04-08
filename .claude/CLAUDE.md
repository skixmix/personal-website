# General Rules

- Always answer in English, regardless of the language of any provided content.
- Always ask when something is not clear, do not assume.
- Always prefer CLI tools over MCPs.
- If you have any plugin that can help (Context7, LSP), use it when available.
- Always read the docs, do not assume. If unsure about something, ask.
- Systematically replace all em dashes ("—") with commas (",") or periods (".") to improve readability.

# Token and Context Management

- Proactive compression: compress closed conversation ranges automatically when context reaches ~15-20%, without waiting to be prompted.
- Compress when: research done, answers delivered, no pending follow-ups, raw messages not needed again.
- Do not compress when: task is active/unresolved, may need to reference exact code/errors, waiting for background results or clarification.
- Prefer short, frequent compressions over waiting for huge context buildup.
- Reduce back-and-forth. Avoid Test-Driven Development, as it consumes unnecessary tokens.
- If spawning agents with a cheaper model (e.g. Haiku instead of Sonnet) can reduce context usage while still achieving the task well, do it and communicate it to the user.
