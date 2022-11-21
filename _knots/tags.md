---
layout: page
title: 标签
date: 2022-10-22 21:48:33 +0800,周四
lastmod: 2022-10-22 22:06:07 +0800,周四
permalink: /tags
jekyll-theme-ObJekyll:
  default:
    sidebar:
      open: false
  tags:
    vega_lite: # 显示一个统计图，需要引入 vega-lite
      enable: true
---

文章标签较多，可在侧边栏的目录中快速定位~

{% if page.jekyll-theme-ObJekyll.tags.vega_lite.enable %}

```vega-lite
{% capture json_data %}[
{% for tag in site.tags reversed %}
{% unless tag[0] contains '游戏'or tag[0] contains 'excalidraw'  %}
 , {"tags": "{{ tag[0] }}", "count": {{ tag[1].size }} }
{% endunless %}
{% endfor %}
]{% endcapture %}
{% assign json_data = json_data | remove_first: "," %}
{
  "data": { "values": {{ json_data }} },
  "encoding": {
    "y": {"field": "tags", "type": "nominal"},
    "x": {"field": "count", "type": "quantitative" }
  },
  "mark": "bar"
}
```
{% endif %}
## 类别
- [游戏](/gametags)
{% for tag in site.tags reversed %}
{% unless tag[0] contains '游戏'or tag[0] contains 'excalidraw'  %}
## {{ tag[0] }}
{% for post in tag[1] %}
{% if site.use_html_extension %}
- *{{ post.date | date:"%d %b %Y" }}* [{{ post.title }}]({{ post.url | relative_url | append: ".html"}})
{% else %}
- *{{ post.date | date:"%d %b %Y" }}* [{{ post.title }}]({{ post.url | relative_url }})
{% endif %}
{% endfor %}
{% endunless %}
{% endfor %}
