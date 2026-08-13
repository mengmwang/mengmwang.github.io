---
layout: page
title: Thematic Analysis Reporting Pipeline for Large-Scale Survey Data
description: A reproducible R pipeline turning manually-coded open-ended survey responses into structured frequency analysis and reporting.
importance: 3
category: work
---

A reproducible analysis pipeline for large-scale open-ended survey responses (the "Right Here Right Now" youth survey), built to turn manual qualitative coding into structured, reportable statistics. A coding framework (categories and codes defined by the manual coding team) is extracted programmatically from its source document, then joined against the manually-coded response data to compute code- and category-level frequency breakdowns — split by question direction (positive/negative reflection) and subquestion.

Results are rendered as both interactive data tables and static/interactive visualisations, knitted into a single self-contained HTML report for stakeholders — with iterative refinement on chart styling and handling of missing/duplicate data.

**Tech stack:** R (dplyr, ggplot2, plotly, DT), R Markdown, Python (python-docx, openpyxl) for framework extraction

**GitHub:** [GITHUB LINK TBD]
