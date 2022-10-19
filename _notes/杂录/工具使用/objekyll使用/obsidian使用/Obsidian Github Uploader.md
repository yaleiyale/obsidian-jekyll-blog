---
title: Obsidian Github Uploader
aliases: 
tags: 
date: 2022-10-16 17:23:05 +0800,周日
last_modified_at: 2022-10-17 22:27:06 +0800,周一
from: 
permalink: /notes/2022/10/16/172318
---

[[Obsidian Github Uploader#设置相关]] [[Obsidian Github Uploader#English]]

# Obsidian Github Uploader

使用github将图片/文件嵌入到markdown中。  
对于来自代码世界之外的不熟悉的访问者，Github是一个著名的互联网托管服务，用于软件开发和使用Git的版本控制。  
这是一个来自[obsidian-cloudinary-uploader]（https://github.com/jordanhandy/obsidian-cloudinary-uploader）的分支。它在原来的基础上被扩展为一个**文件上传器。实际上，它只是在使用不同服务商的apis方面有些不同。

## 它是什么？

这个插件可以让你自动上传粘贴到黑曜石的**文件**，直接进入你的github仓库（而不是存储在本地）。  
当然，**它也可以是一个简单的图片上传器**。它能很好地将图片嵌入到markdown文件中。  
但不仅仅是一个图片上传器，你可以上传**各种类型的文件，只要github接受它们。  
文件链接是否能在黑曜石中呈现，取决于黑曜石本身的支持情况。没关系，即使它们不能被渲染，它们仍然可以作为链接使用。只要去掉开头的感叹号就可以了。

## 它是如何工作的

![gif](https://user-images.githubusercontent.com/55282569/196027715-b3d04158-d4ad-4f3a-91f4-0c55c030b4d4.gif)

## 配置

1. 禁用黑曜石安全模式
2. 安装该插件  
    ~~- 从黑曜石社区插件标签中安装~~ (等待代码审查)
    - 手动安装  
      - 克隆这个 repo  
      - 用`yarn`或`npm`安装依赖项，如`npm install`。
      - `npm run dev`将开始编译
3. 启用该插件
4. 配置设置
5. 享受便利 :star2:

## 设置相关

抄了 [obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader)，改了下接口，就有了这个github文件上传插件 :flushed:  
第一次安装启用插件后的设置面板会是这样：

![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666011210/image_note/ozaqeztjcwc0jl0xugcr.png)

如果你对设置面板中的一些关于git与github的术语感到困惑，请额外查阅一些资料，相信了解这些相关内容不光可以帮助你明白如何进行本插件的设定，git本身还可以更多的帮助你的工作与生活。

除了*path*，剩下的所有参数都是**必填**的。有几个注意点：  

1. *branch*必须是已经存在的分支，插件不能自行创建分支来进行上传。  
2. 不知道如何获得token，请google/bing：Github token。
3. *path*留空将在仓库根目录上传；如果设定为`image/`，（注意`/`）文件将上传到image文件夹下；**如果设定为`image`，文件将组合上*image*，以形如`image123456xyz.png`的名称被上传到根目录。**

# English

I copied [obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader), changed the api and got this github file upload plugin :flushed:  
The settings panel after installing and enabling the plugin for the first time will look like this：

![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666011210/image_note/ozaqeztjcwc0jl0xugcr.png)

If you are confused by some of the terms about git and github in the settings panel, please check some additional information. I believe that understanding these related contents will not only help you understand how to set up this plugin, but git itself can also help you more in your work and life.

All the parameters are **required** except *path*. There are several points to note.

1. *branch* must be a branch that already exists, the plugin cannot create its own branch for uploading.
2. don't know how to get token, please google/bing: github token.
3. If *path* left empty, file will be uploaded in the root of the repository; if set to `image/`, (**attention `/`** ) files will be uploaded to the image folder; **if set to `image`, files will be combined with *image* and uploaded to the root, with a name like `image123456xyz.png`.**
