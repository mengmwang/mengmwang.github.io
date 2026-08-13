---
layout: page
title: Retrieval-Augmented Generation System for Training Resources
description: A personal end-to-end RAG application over Orygen's public training resources, with hybrid retrieval, reranking, and a streaming FastAPI backend.
importance: 2
category: work
---

A personal project: an end-to-end RAG Q&A system built over Orygen's publicly-published clinical training resources (orygen.org.au/Training/Resources). A custom crawler pulled 189 resources across 23 topic categories, chunked into ~6,100 passages, indexed with a dense embedding model (`bge-small-en-v1.5`) and BM25 keyword search, fused with reciprocal rank fusion, then reranked with a cross-encoder before a local LLM (Ollama, phi4) generates a citation-grounded answer — refusing to answer when nothing relevant is retrieved. Answers stream token-by-token over SSE, with citation markers reconciled once generation completes so numbering stays correct even when the model cites sources out of order.

Two bugs stood out during development: GPU memory contention between the embedding model and the LLM (fixed by pinning embeddings to CPU — negligible cost at 33M parameters), and a double-sigmoid bug in the reranker that was silently squashing all relevance scores toward 0.5 until traced and fixed.

**Tech stack:** Python, FastAPI, hybrid retrieval (dense + BM25, reciprocal rank fusion), cross-encoder reranking, local LLM inference (Ollama), streaming (SSE)

**GitHub:** [GITHUB LINK TBD]
