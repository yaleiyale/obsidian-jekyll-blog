---
layout: page
title: 聚点
permalink: /roots
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
  tags:
    vega_lite: # 显示一个统计图，需要引入 vega-lite
      enable: true
---

{% for tag in site.tags%}
{% if tag[0] == "rootnote" %}
{% assign sorted-posts = tag[1] | sort: 'date'|reverse %}
{% break %}
{% endif %}
{% endfor %}

{% assign lmonth = "1000-01" | date: "%b %Y" %}

{% for post in sorted-posts %}
{% assign month = post.date | date: "%b %Y" %}
{% if month != lmonth %}
## {{ month }}
{%assign lmonth = month %}
{% endif %}
{% if site.use_html_extension %}
- *{{ post.date | date:"%d %b %Y" }}* [{{ post.title }}]({{ post.url | relative_url | append: ".html"}})
{% else %}
- *{{ post.date | date:"%d %b %Y" }}* [{{ post.title }}]({{ post.url | relative_url }})
{% endif %}
{% endfor %}

