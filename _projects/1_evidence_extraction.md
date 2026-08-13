---
layout: page
title: "Applied GenAI: Evidence Extraction & Cross-Paper Synthesis"
description: LLM-based pipeline for extracting structured data from clinical trial literature and synthesising evidence across papers.
importance: 1
category: work
---

A two-part applied GenAI system for working with clinical trial literature — a single-paper extraction app and a sibling cross-paper synthesis app that shares its corpus and infrastructure.

**Evidence extraction**

A local-LLM pipeline that pulls structured fields (mental health problem, stage of illness, treatment/intervention, study type, main findings) out of clinical trial papers, using abstract-first extraction with full-PDF fallback (chunked ~500 tokens by section) when no usable abstract exists. A 609-paper pilot hit a 92% successful extraction rate; the pipeline was then run across the full 6,058-paper corpus. Local model choice (qwen3:8b) was driven by hardware constraints and a head-to-head accuracy comparison against larger models.

The more interesting result came from validation: rather than trusting the LLM's self-reported accuracy, the corpus's existing structured metadata was reverse-engineered as ground truth and compared field-by-field against ~540 papers. That surfaced real accuracy gaps (94.8% on mental health problem down to 60.4% on stage of illness, with a systematic bias toward over-calling one category). The finding led to an architecture pivot: two of the four fields were already reliably encoded in source metadata, so those switched to deterministic database lookups (zero hallucination risk), leaving the LLM to do only what it's actually needed for — free-text fields with no existing structured equivalent.

**Cross-paper synthesis**

A sibling app that answers questions spanning multiple papers rather than one at a time — e.g. summarising the evidence for a treatment across a set of trials. Natural-language questions are parsed into a keyword/year query plan to build a candidate paper set, dense-embedding retrieval pulls relevant chunks scoped to that set, and a cross-encoder reranks the pool before a local LLM (qwen3:8b) synthesises a citation-grounded answer — with automatic map-reduce synthesis above ~20 papers so every matched paper contributes rather than only the top-ranked ones. Citations are grounded via a global, consistently-renumbered reference list, with a regex backstop to strip any hallucinated out-of-range citation the model tries to copy from a source paper's own bibliography.

**Tech stack:** Python, FastAPI, React/Vite/TypeScript, local LLM inference (Ollama), constrained/schema-driven prompting, dense embedding retrieval, cross-encoder reranking, map-reduce synthesis, SQLite, ChromaDB

**GitHub:** [GITHUB LINK TBD]
