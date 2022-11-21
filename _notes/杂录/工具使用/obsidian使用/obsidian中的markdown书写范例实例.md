---
title: obsidian中的markdown书写范例实例
aliases: 
tags: [教程, markdown]
date: 2022-07-30T20:46:11+08:00
lastmod: 2022-10-22T21:39:19+08:00
from: 
permalink: /notes/2022/08/29/223916
---

枚举 *obsidian* 中支持的基本&&一点点拓展 *markdown* 通用语法，以及一些obsidian特性关键机制。  
特性在*obsidian*外的展现极可能不正常，将额外给出截图供参考。

```
# 几级标题就有几个\#号 <-转义，显示井号而不被识别为markdown语法标记
```

# 几级标题就有几个\#号 <-转义，显示井号而不被识别为markdown语法标记

## 表格

```
|     *斜体* |   **粗体**    | ***斜粗体***   | **粗体中*包含斜体*的文字**               | *斜体中**包含粗体**的文字*                     |
| ----------:|:-------------:|:-------------- | ---------------------------------------- | ---------------------------------------------- |
| ~~删除线~~ | <u>下划线</u> | 一行<br>另起行 | 上标：X<sup>2</sup> 下标：H<sub>2</sub>O | 内部链接：[[obsidian中的markdown书写范例实例]] |
```

|     *斜体* |   **粗体**    | ***斜粗体***   | **粗体中*包含斜体*的文字**               | *斜体中**包含粗体**的文字*                     |
| ----------:|:-------------:|:-------------- | ---------------------------------------- | ---------------------------------------------- |
| ~~删除线~~ | <u>下划线</u> | 一行<br>另起行 | 上标：X<sup>2</sup> 下标：H<sub>2</sub>O | 内部链接：[[obsidian中的markdown书写范例实例]] |

## 分割线

```
---
```

---

## 引用 [^1]

```
> 这是第一段引用文本的第 1行  
> 这是第一段引用文本的第 2行
```

> 这是第一段引用文本的第 1行  
> 这是第一段引用文本的第 2行

## 标注

```
> [!note]- 注释 点击查看类型名  
> note

> [!abstract]+ 摘要/总结 点击查看类型名  
> abstract, summary, tldr

> [!info] 信息/todo  
> info, todo

> [!tip] 提示/要点  
> tip, hint, important

> [!success] 成功/核查/完成  
> success, check, done

> [!question] 问题/帮助  
> question, help, faq

> [!warning] 警告/注意  
> warning, caution, attention

> [!failure] 故障  
> failure, fail, missing

> [!danger] 危险  
> danger, error

> [!bug]  
> bug

> [!example] 实例  
> example

> [!quote] 引用  
> quote, cite
```

> [!tip] 个例常用汇总  
> note,summary,info,tip,success,fail,question,warning,danger,bug,example,quote

> [!note]- 注释 点击查看类型名  
> note

> [!abstract]+ 摘要/总结 点击查看类型名  
> abstract, summary, tldr

> [!info] 信息/todo  
> info, todo

> [!tip] 提示/要点  
> tip, hint, important

> [!success] 成功/核查/完成  
> success, check, done

> [!question] 问题/帮助  
> question, help, faq

> [!warning] 警告/注意  
> warning, caution, attention

> [!failure] 故障  
> failure, fail, missing

> [!danger] 危险  
> danger, error

> [!bug]  
> bug

> [!example] 实例  
> example

> [!quote] 引用  
> quote, cite

## 有序表 [^2]

```
1. 项目 1
2. 项目 2
3. 项目 3
   1. 项目 3a
   2. 项目 3b
```

1. 项目 1
2. 项目 2
3. 项目 3
   1. 项目 3a
   2. 项目 3b

## 无序表 [^3]

```
- 项目 1
- 项目 2
	- 项目 2a
	- 项目 2b
```

- 项目 1
- 项目 2
	- 项目 2a
	- 项目 2b

## 缩进与退格 [^4]

## 任务列表 [^5]

```
- [ ] 待办任务列表 1
- [ ] 待办任务列表 2
- [x] 已办任务列表 1
- [x] 已办任务列表 2
```

- [ ] 待办任务列表 1
- [ ] 待办任务列表 2
- [x] 已办任务列表 1
- [x] 已办任务列表 2

## 行内代码：

```

` 这是一段行内代码 `

`<table border="1" cellspacing="0" width="500" height="500">`

`print("Hello, World!")`

` 这是一行突出显示的文本内容 `

`` 这是一段能显示 `反引号` 的行内代码 ``^code

```

` 这是一段行内代码 `

`<table border="1" cellspacing="0" width="500" height="500">`

`print("Hello, World!")`

` 这是一行突出显示的文本内容 `

`` 这是一段能显示 `反引号` 的行内代码 ``^code

> [!tip]  
> 上文出现的`^code`为块链接标记，在后文会提及。

## 代码块：

````
```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

i = 2
while(i < 100):
   j = 2
   while(j <= (i/j)):
      if not(i%j): break
      j = j + 1
   if (j > i/j) : print i, " 是素数"
   i = i + 1
 
print "Good bye!"
```
````

```python
#!/usr/bin/python
# -*- coding: UTF-8 -*-

i = 2
while(i < 100):
   j = 2
   while(j <= (i/j)):
      if not(i%j): break
      j = j + 1
   if (j > i/j) : print i, " 是素数"
   i = i + 1
 
print "Good bye!"
```

## 公式

```
 $E = mc^2$
```

 $E = mc^2$

## 注释（特性）

```md
%%这是一行Obsidian里的注释%%

%%
这里是
一段
假装有
很多行的
Obsidian里的
注释
编辑模式下注释才可见
%%
```

%% 这是一行 Obsidian 里的注释%%

%%
这里是
一段
假装有
很多行的
Obsidian 里的
注释
编辑模式下注释才可见
%%  

![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666445679/obsidian/dxi0v9o6wqs6drridfwq.png)

## 嵌入文件（特性）

```
![[obsidian中的markdown书写范例实例#外部链接]]  
![logo|200](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1657596564/IMG_20220204_082019_600_pothy1.jpg " 悬浮提示文本 ")
```

![[obsidian中的markdown书写范例实例#外部链接]]  
![logo|200](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1657596564/IMG_20220204_082019_600_pothy1.jpg " 悬浮提示文本 ")

![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666445810/obsidian/s3add601xn7cwhggfsnr.png)

> [!info] 支持格式
>
> 目前为止，Obsidian 支持以下格式的文件：  
> Markdown 文件：md;  
> 图像文件：png, jpg, jpeg, gif, bmp, svg;  
> 音频文件：mp3, webm, wav, m4a, ogg, 3gp, flac;  
> 视频文件：mp4, webm, ogv;  
> PDF 文件：pdf.  
> 以上类型文件都可以内嵌到笔记页面中

```
块链接：[[obsidian中的markdown书写范例实例#^code]]

块引用：![[obsidian中的markdown书写范例实例#^code]]

Obsidian URI：[打开Mermaid书写范例](obsidian://open?vault=_notes&file=%E6%9D%82%E5%BD%95%2F%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%2Fobjekyll%E4%BD%BF%E7%94%A8%2Fobsidian%E4%BD%BF%E7%94%A8%2FMermaid%E4%B9%A6%E5%86%99%E8%8C%83%E4%BE%8B%E5%AE%9E%E4%BE%8B)
```

块链接：[[obsidian中的markdown书写范例实例#^code]]

块引用：![[obsidian中的markdown书写范例实例#^code]]

Obsidian URI：[打开Mermaid书写范例](obsidian://open?vault=_notes&file=%E6%9D%82%E5%BD%95%2F%E5%B7%A5%E5%85%B7%E4%BD%BF%E7%94%A8%2Fobjekyll%E4%BD%BF%E7%94%A8%2Fobsidian%E4%BD%BF%E7%94%A8%2FMermaid%E4%B9%A6%E5%86%99%E8%8C%83%E4%BE%8B%E5%AE%9E%E4%BE%8B)

![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666445845/obsidian/gwtuiohb6rsmlpualjeh.png)

## 外部链接

```
[百度一下，你就知道](http://www.baidu.com "按住Ctrl点击跳转百度")

变量形式表达：[百度一下，你就知道][度娘]；[知乎 - 有问题，就会有答案][知乎]

[[obsidian中的markdown书写范例实例#标注]]

[度娘]: <http://www.baidu.com>
[知乎]: <https://www.zhihu.com>
```

[百度一下，你就知道](http://www.baidu.com "按住Ctrl点击跳转百度")

变量形式表达：[百度一下，你就知道][度娘]；[知乎 - 有问题，就会有答案][知乎]

[[obsidian中的markdown书写范例实例#标注]]

[度娘]: <http://www.baidu.com>
[知乎]: <https://www.zhihu.com>

---
```
[^1]: 同个引用段落内的换行直接敲击 Enter 即可；若需添加 第二个独立引用段落，连续敲击 两下 Enter 即可；后面的 > 敲回车会自动补上

[^2]: 输入文本内容后，敲击 Enter 自动补全格式，并进入 下个 有序列表；若需要在同个列表内，增加 换行显示 的内容 (但不进入下个列表)；敲击 Shift + Enter，即可另起一行输入文本；在有序列表的中间，插入一个新的列表，后面列表的 数字序号 会自动递进 一层；即便在源代码模式中修改了数字序号，渲染界面依然是 依照顺序 显示的

[^3]: 输入文本内容后，敲击 Enter 自动补全格式，并进入 下个 无序列表；若需要在同个列表内，增加换行显示的内容 (但不进入下个列表)；敲击 Shift + Enter，即可另起一行输入文本

[^4]: 在列表和引用的书写过程中，我们需要利用 缩进 与 退格，让文章肌理分明，更具层级；缩进：Tab；退格：Shift + Tab；引用的缩进和列表不同，引用需另起一行，并额外多打一个 > 来完成缩进；如果要退回上一级，敲 2 下回车键即可

[^5]: 任务列表也是可以缩进 + 退格的，操作跟 无序、有序列表一样
```

[^1]: 同个引用段落内的换行直接敲击 Enter 即可；若需添加 第二个独立引用段落，连续敲击 两下 Enter 即可；后面的 > 敲回车会自动补上
[^2]: 输入文本内容后，敲击 Enter 自动补全格式，并进入 下个 有序列表；若需要在同个列表内，增加 换行显示 的内容 (但不进入下个列表)；敲击 Shift + Enter，即可另起一行输入文本；在有序列表的中间，插入一个新的列表，后面列表的 数字序号 会自动递进 一层；即便在源代码模式中修改了数字序号，渲染界面依然是 依照顺序 显示的
[^3]: 输入文本内容后，敲击 Enter 自动补全格式，并进入 下个 无序列表；若需要在同个列表内，增加换行显示的内容 (但不进入下个列表)；敲击 Shift + Enter，即可另起一行输入文本
[^4]: 在列表和引用的书写过程中，我们需要利用 缩进 与 退格，让文章肌理分明，更具层级；缩进：Tab；退格：Shift + Tab；引用的缩进和列表不同，引用需另起一行，并额外多打一个 > 来完成缩进；如果要退回上一级，敲 2 下回车键即可
[^5]: 任务列表也是可以缩进 + 退格的，操作跟 无序、有序列表一样
