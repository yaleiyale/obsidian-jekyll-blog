---
title: 本方式将Obsidian适配到jekyll的注意项
aliases: 
tags: tips
date: 2022-08-05 16:38:38 +0800,周五
last_modified_at: 2022-10-09 22:51:57 +0800,周日
from: 
permalink: /notes/2022/08/29/223857
---

# 文件名

文件名中不建议使用标点，作为直接索引项时可能被错误转义导致404。想用的话可以尝试一下，万一可行呢？~~(试试就逝世)~~

# Front Matter

笔记建议(~~必须~~)有以下front matter(怎么会有笔记没有呢)

1. title[^1]
2. date[^2]

# 图片

obsidian中使用的形如`[文件名|尺寸]`的形式暂未得到处理，大致判断是`|`使用问题，无法显示图片，修缮动机不充足，禁用。

# Tag

**聚点**(**roots**)中罗列的是标签包含*rootnote*的笔记，作为传统一级标题的变体，建议为某类笔记的起点篇添加*rootnote*作为探索的入口，显示到**聚点**中

# 公式

在obsidan中显示正常的公式在转换为html后可能不能很好的得到渲染，这可能是出于katex的一些暂时的缺陷。当本地测试**行内公式**无法得到渲染时可以尝试使用**行间公式**，如$\left\{\frac{(x+y)}{[\alpha+\beta]}\right\}$与$$\left\{\frac{(x+y)}{[\alpha+\beta]}\right\}$$。更多的不建议将公式用于复杂嵌套结构中，更容易导致无法渲染。

# 语法兼容

`raw` 标记临时禁止处理其所包围的代码。如果输出的内容与 Liquid 模板语言有冲突时可以避免冲突。  
输入  
![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661439772/image_note/lvwme4y1x4b7vxyz506j.png)

输出  
![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1660877372/image_note/nw7hyuooqzfk1n3ts3ua.png)

---

[^1]: 不得为`2011-12-13`等的纯日期时间(数字)格式，网页中罗列的标题默认是title而不是文件名

[^2]: 文件的创建时间;建议格式为`YYYY-MM-DD HH:mm:ss +0800,ddd`
