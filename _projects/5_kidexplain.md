---
layout: page
title: KidExplain
description: Local-first web app using an LLM to translate concepts into age-appropriate language for children.
importance: 5
category: fun
---

A personal project: a local-first web app that uses an LLM to translate any concept into age-appropriate language for children — type a question like _"Why is the sky blue?"_ and get back an explanation tuned to the child's age group. Runs entirely on-device via [Ollama](https://ollama.com), so no data ever leaves the machine.

**Features**

- Age-aware explanations across three bands: baby talk (0–2), simple words + analogies (3–5), short explanations (5–8)
- Multilingual: English, Chinese (Simplified), and Farsi
- Local & private by default (Ollama), with an OpenAI-compatible API mode for swapping in a cloud model
- Responsive, mobile-friendly layout with local-network serving for use on phones/tablets

**Architecture**

A FastAPI backend exposes a single `POST /api/explain` endpoint that builds an age- and language-aware prompt and routes it to either a local Ollama model (`gemma4:e2b`) or an external OpenAI-compatible API, returning the explanation as JSON. The React/Vite/TypeScript frontend handles age-group and language selection and renders the response.

**Tech stack:** React, Vite, TypeScript, Tailwind CSS, FastAPI, Ollama

**GitHub:** [GITHUB LINK TBD]
