---
layout: page
permalink: /research/
title: Research
description: 
years: [2021, 2019, 2015]
nav: true
nav_order: 1
---

***





<!-- _pages/publications.md -->
# Publications
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
