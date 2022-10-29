---
title: objekyll使用指南
aliases: 
tags: objekyll 指南 rootnote
date: 2022-08-21 21:23:33 +0800,周日
last_modified_at: 2022-10-29 21:55:47 +0800,周六
from: 
permalink: /notes/2022/08/29/223921
---

# 介绍

[本仓库](https://github.com/yaleiyale/obsidian-jekyll-blog)的实践目的是将 obsidian 与 jekyll 相结合，本地记录，随处查看[^1]。虽然两者的上手都有一定门槛，但希望使用本仓库能够实现**难度 1+1<2，效率 1+1>=2**。本仓库中已经提供了基本的 obsidian 样例笔记库，可以开箱即用，其目录为`_notes文件夹`。样例中提供了一些样板文件和基础教程文件，可以参阅。熟手敬请自行引入你的 workflow。同时本仓库以插件的方式提供了双向链接，文件外部链接、excalidraw 绘图插入、标签、图谱等功能。创作时，参考 obsidian 样例仓库的笔记方法进行书写，无需更多配置即可方便地进行使用。本地使用 obsidian，安心书写，_A second brain, for you, forever._ 发布后，更可以自由渗透那个独立的*The second brain*。

> [!bug]  
> 发现一直有人在clone我的博客仓库，为了让**真正的小白**不要clone错了仓库，在此特别贴心提醒：*github.com/yaleiyale/yaleiyale.github.io* 为我个人的博客，*github.com/yaleiyale/obsidian-jekyll-blog* 才是博客生成工具仓库 :scream_cat:

# 特性

1. obsidian效果
    1. 基础markdown渲染
    2. 支持引用与标注
    3. 支持表格
    4. 支持mermaid
    5. 支持LaTeX
    6. 正向链接
    7. 反向链接
    8. 文件外部链接
    9. 文件链接预览
    10. 脚注
    11. 大纲
    12. 标签归档
    13. 全局图谱
2. 插件效果
    1. Excalidraw.md绘图展示
    2. emoji简码
    3. 图片浮窗查看
    4. 代码一键复制
3. 移动端适配
    1. 自适应布局
    2. 屏蔽QQ微信内打开（防举报）

# 发布方式

本文档提供两种发布方式进行表述，更多不同平台的部署有经验后可自行尝试，大同小异，各有优缺。本文档所表述的两种发布使用的服务来自**Vercel**与**Github Pages**。前者的部署更为简单，~~中国大陆的访问效果更优~~[^2]。后者全程只需使用**github**服务，无需建立新的账号。

## Vercel发布

### 仓库配置

1. fork[本仓库](https://github.com/yaleiyale/obsidian-jekyll-blog)，仓库名任意。
2. 可删除`CNAME`，`main.yml`。打开`_config.yml`，绝大部分需要进一步配置的项都提供了注释，请仔细根据提示配置，万一有部分不理解的情况，请积极查阅拓展资料，以有效的进行你的配置与个性化调整。以**Vercel发布**方式进行部署，`url`字段可暂时不做处理。

### 连接

1. 建立[Vercel](https://vercel.com/)账号，使用**Github**账号登录，方便后续导入。
2. 选择你的仓库，点击*import*导入到**vercel**  
![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661259510/image_note/zeuxgh4hgfqzo5phn4fi.png)  
![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661259536/image_note/ehp6gwsbwmuxoxnnpvuu.png)  
![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661259568/image_note/tynet8imx1xoprq6tstr.png)  
![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661259747/image_note/ayzilsxuzehr4pmropxh.png)
3. 设定你的项目名称（不要有中文），其余默认。

### 部署调整

1. 点击*Deploy*，稍等片刻，当出现*congratulations*字样代表部署成功，已经可以访问博客。
2. 建议根据生成的域名（或后续自定义域名），调整`_config.yml`中的`url`字段值，以生成正确的*sitemap*[^3]。

## Github Pages发布

### 起步

1. fork[本仓库](https://github.com/yaleiyale/obsidian-jekyll-blog)，将仓库名改为`{你的github昵称}.github.io`。
2. 事先未准备域名，则在你的仓库中将`CNAME`删除。若有域名则将`CNAME`中的文本替换为你的域名。关于自定义域名的更多详细配置，请自行查询资料，本指南后文所提可以不要求进行自定义域名。
3. ![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661089854/image_note/g6fxa11s5tfcnuukcwlj.png)

如图，在**Branch**中选择分支(初使用应该选为`main`和`root`)，点击 save，在**Actions**中观察到发布完成后，进入`Pages`，可观察到![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661090145/image_note/s919hgtgt8kchljyobs4.png)点击以进行访问，访问成功，那么你的博客就已经跑起来了。

### 配置

1. 配置`_config.yml`。该部分完成后，理论上就已经完整搭建了你的独立专属个人博客。
2. 仅完成上述步骤后的博客，所采用的构建方法为 Github 内置的后台 jekyll 生成，不能任意使用第三方插件。如果需要将 obsidian 的双向链接等结合到博客中，需要进一步配置。请打开`main.yml`，根据注释进行配置。在完成配置后，你的博客构建方法将采用自定义的**Github Actions**[^4]进行构建,此时请将`Pages`使用的分支改为`Actions`中所指定的分支。这种构建方式将能够借助`_plugins文件夹`中的插件实现自定义功能。在当前版本中，部署后可发现在样板博客中的双链、excalidraw 绘图展示等功能已经可用。

# 记录/创作

1. 将仓库 clone 到本地。
2. 下载[Obsidian](https://obsidian.md/)，使用 obsidian 打开`_notes文件夹`。`_notes`就是你的文件集中存放的地方。
3. 笔记库中已经预置了一些个人推荐的插件[^5]和参考样本，请自由探索尝试，开始你的创作。更多帮助文档，请参阅[[obsidian结合jekyll]]，或问问你的[神奇海螺](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1661131544/image_note/icglvr2xcfqdtkrhfnx3.png)。
4. 在obsidian的[front matter](https://publish.obsidian.md/help-zh/%E9%AB%98%E7%BA%A7%E7%94%A8%E6%B3%95/YAML+front+matter)中，`tags`中如果包含`rootnote`，该篇笔记将出现在侧边栏的**聚点**中，建议在起篇的笔记/目录中加入`rootnote`，该类功能可自行增删。如果根据文件夹安排文件，且文件排布顺序不需要在目录中进行调整，可以使用`waypoint`插件自动生成上级文件夹下的文件目录。
5. `_knots文件夹`中的文件在本仓库中作为侧边栏中的永久链接使用。在其中的`tags.md`等文件中，以`游戏标签`，提供了一个标签细分，二级导航的案例，根据你的需要，在理解了模板的意义后，尽情进行你的自由发挥。

# Yours

1. 创作告一阶段后，将仓库 push 到 github，**Github Actions**或**Vercel Build**将自动进行发布。当上述所有的步骤都完成后，基础博客所具有的功能都将得到展现。**github pages 发布**方式，在完成[[objekyll使用指南#配置]]中的第 2 条后，包括标签、图谱也都将可用。
2. 更进一步的功能需求实现，需要你自己的进一步开发。由于本库作者的个人能力有限，这个样板仓库**AS IS**。有有价值的功能或优美的实现，如果可以，请让作者也瞅瞅。

---

[^1]: 还可以将本仓库放在你的 onedrive 中,将 obsidian 库使用[OneSync](https://play.google.com/store/apps/details?id=com.ttxapps.onesyncv2&hl=zh&gl=US)同步到你的移动设备上，在 obsidian 移动端中编辑查看同步。

[^2]: 2022/8/27已被中国大陆封禁。

[^3]: 搜索优化相关，可不做调整。

[^4]: 关于 Github Actions，可理解为在 github 提供的虚拟机中进行编译生成与部署等操作，感兴趣请自行探索。也可采用 jekyll 本地构建的方式，以方便如自定义脚本的编写调试工作等。在本指南中不进行赘述，请参阅[Jekyll 一个将纯文本内容转化为静态网站或博客的工具](https://www.jekyll.com.cn/)。

[^5]: 其中的 Obsidian Cloudinary Uploader，如需使用，需要在 Cloudinary 网站中申请账号，在插件列表进行配置。免费账号提供的服务足足够够支撑一个小型个人博客的使用。（很好用，推荐使用，感谢使用我的[邀请码](https://cloudinary.com/invites/lpov9zyyucivvxsnalc5/h84ed9tsekqvcjy3opuz?t=default)。
