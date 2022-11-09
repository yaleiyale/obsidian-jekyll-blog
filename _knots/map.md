---
layout: page
title: 图谱
date: 2022-10-22 21:48:33 +0800,周四
last_modified_at: 2022-10-22 22:06:07 +0800,周四
permalink: /map
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
---

{% assign all_tags = site.tags|size %}
<div class="tagcloud">{% for tag in site.tags %}
    {% assign tag_name = tag|first %}
    {% assign tag_count = tag|last|size %}
    {% assign tag_avg = tag_count | div: all_tags %}
    <span class="tag" style="font-size: {{ tag_avg | times: 25 }}%;">{{ tag_name }}</span>{% if false %} ({{ tag_count }}){% endif %}
{% endfor %}</div>

{% include notes_graph.html %}