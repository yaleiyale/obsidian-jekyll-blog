---
layout: page
title: 归档
date: 2022-10-22 21:48:33 +0800,周四
lastmod: 2022-10-22 22:06:07 +0800,周四
permalink: /archive
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
    tags:
      vega_lite: # 显示一个统计图，需要引入 vega-lite
        enable: true
---

已写下 {{ site.notes.size }} 篇，长路漫漫！
```vega-lite
{
  "data": { "url": "{{ site.baseurl }}/assets/simple-jekyll-search/search.json" },
  "encoding": {
    "y": {"field": "date", "timeUnit": "month", "type": "ordinal"},
    "x": {"field": "date", "timeUnit": "year"},
    "color": {"field": "date", "aggregate": "count"}
  },
  "mark": "rect"
}
```


{% assign lmonth = "1000-01" | date: "%b %Y" %}

{% for post in site.notes reversed %}
{% unless post.title contains '.excalidraw' %}
{% assign month = post.date | date: "%b %Y" %}
{% if month != lmonth %}
## {{ month }}
{%assign lmonth = month %}
{% endif %}
{% if site.use_html_extension %}
- _{{ post.date | date:"%d %b" }}_ [{{ post.title }}]({{ post.url | relative_url | append: ".html" }})
{% else %}
- _{{ post.date | date:"%d %b" }}_ [{{ post.title }}]({{ post.url | relative_url }})
{% endif %}
{% endunless %}
{% endfor %}