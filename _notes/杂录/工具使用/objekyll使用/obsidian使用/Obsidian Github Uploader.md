---
title: Obsidian Github Uploader
aliases: 
tags: 
date: 2022-10-16 17:23:05 +0800,周日
last_modified_at: 2022-10-29 17:05:23 +0800,周六
from: 
permalink: /notes/2022/10/16/172318
---

[[Obsidian Github Uploader#设置相关]] [[Obsidian Github Uploader#English]]

# Obsidian Github Uploader

使用github将图片/文件嵌入到markdown中。  
对于来自代码世界之外的不熟悉的访问者，Github是一个著名的互联网托管服务，用于软件开发和使用Git的版本控制。  
这是一个来自[obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader)的分支。它在原来的基础上被扩展为一个**文件上传器**。实际上，它只是在使用不同服务商的apis方面有些不同。

## 它是什么？

这个插件可以让你自动上传粘贴到黑曜石的**文件**，直接进入你的github仓库（而不是存储在本地）。  
当然，**它也可以是一个简单的图片上传器**。它能很好地将图片嵌入到markdown文件中。  
但不仅仅是一个图片上传器，你可以上传**各种类型的文件**，只要github接受它们。  
文件链接是否能在黑曜石中呈现，取决于黑曜石本身的支持情况。没关系，即使它们不能被渲染，它们仍然可以作为链接使用。 :lollipop: 只要去掉开头的感叹号就可以了。

:warning: 注意，

1. github目标仓库必须为public，这意味着上传的所有文件都是公开。github也更应该是为乐于共享者而服务的。请确保对你来说分享你上传的文件是无害的。我个人更期待着有一天你的某次上传就是为了无私共享。:sunflower:
2. 不要上传空文件。在这里是没有意义的，是错误的。
3. 建议勾选面板中的随机文件名。重复的文件名会引起错误。随机文件名将大大避免重复的文件名。
4. 一般来说，Github足够慷慨。但你需要掌握分寸，不要太滥用Github的服务。放轻松，正常使用，比如在Github pages中使用，当然是可以接受的。但如果你需要大量使用图片，请使用专业的图床服务，建议改用[obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader)。超出正常范围（如在单个资源库中存储超过1GB的文件），滥用Github，上传不良文件，造成不良影响，可能会导致你的Github库甚至账户受到影响。

## 它是如何工作的

![gif](https://user-images.githubusercontent.com/55282569/196027715-b3d04158-d4ad-4f3a-91f4-0c55c030b4d4.gif)

## 配置

1. 禁用obsidian安全模式
2. 安装该插件  
    ~~- 从obsidian社区插件标签中安装~~ (等待代码审查)
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

> [!info]  
> 从0.0.2版本开始，添加了一个选框，让你可以在随机文件名和原文件名间做出选择。

### Github配置（给非技术人员）

- 注册登录你的github，github昵称将填入owner [GitHub注册页](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) ![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666052490/image_note/pgpnnho3etykjb0zbh8v.png)  
- 在登录后的主页右上角，新建仓库，仓库名将填入*repo*  
- 默认分支为*main*，如果要更换分支，请先在github上创建分支![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666053392/image_note/zq8tovjkzvhflpc3iadw.png)![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666053455/image_note/oksudjsujv74kocprmd9.png)并将分支名填入*branch*
- 在登录状态下进入[Personal Access Tokens](https://github.com/settings/tokens)，生成*Personal Access Tokens*，并确保它有repo权限。![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666053826/image_note/ifocyea2afwkxzuyzx00.png)请及时保存该字符串，它只会可见一次，遗落后无法找回，需要重新生成新的。将该字符串填入*token*
- *message*是你文件上传时附带的解释性信息，可以填入你的相关注解，用途备忘等
- *name*与*email*是提交者的相关信息，默认可以填入你的github昵称与邮箱，当然你可以自主更改你的填入
- *path*是文件被上传到repo中的路径，结合hint与[[Obsidian Github Uploader#注意项]]理解后填入

如果你对设置面板中的一些关于git与github的术语还是感到困惑，请额外查阅一些资料，相信了解这些相关内容不光可以帮助你明白如何进行本插件的设定，git本身还可以更多的帮助你的工作与生活。

### 注意项

除了*path*，剩下的所有参数都是**必填**的。有几个注意点：  

1. *branch*必须是已经存在的分支（main是默认已经存在的分支），插件不能自行创建分支来进行上传。  
2. *path*留空将在仓库根目录上传；如果设定为`image/`，（注意`/`）文件将上传到image文件夹下；**如果设定为`image`，文件将组合上*image*，以形如`image123456xyz.png`的名称被上传到根目录**。
3. 妥善保管token，它很重要且机密。
4. *github*是有上传大小上限的，太大的文件不建议上传到github。
5. 在同一路径下不允许有完全同名的文件，这是一个我从未见过被违背的惯例，在github中亦是如此。勾选*random filename*可以帮助你避免在这个细节上出现错误。如果你某次确实需要以一个自选的文件名上传文件，则可以不勾选该项，只要记得检查上述提到的重名问题。

## English

### About Setting

I copied [obsidian-cloudinary-uploader](https://github.com/jordanhandy/obsidian-cloudinary-uploader), changed the api and got this github file upload plugin :flushed:  
The settings panel after installing and enabling the plugin for the first time will look like this：

![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666011210/image_note/ozaqeztjcwc0jl0xugcr.png)  

> [!info]  
> Starting with version 0.0.2, a checkbox has been added that allows you to choose between a random file name and the original file name.

#### Github Configuration(for non-technologists)

- Register and login to your github, github nickname will be filled in with owner [GitHub registration page](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home) ![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666052490/image_note/pgpnnho3etykjb0zbh8v.png)
- In the top right corner of the home page after login, create a new repository, the repository name will be filled in *repo*  
- The default branch is *main*, if you want to change the branch, please create a branch on github first ![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666053392/image_note/zq8tovjkzvhflpc3iadw.png) ![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666053455/image_note/oksudjsujv74kocprmd9.png) and put *branch* in the branch name
- Go to [Personal Access Tokens](https://github.com/settings/tokens) while logged in, generate *Personal Access Tokens*, and make sure it has repo permissions. ![](https://res.cloudinary.com/dbbz8b3ce/image/upload/v1666053826/image_note/ifocyea2afwkxzuyzx00.png) Please save the string in time, it will only be visible once and cannot be retrieved after being lost, you need to regenerate it. Fill *token* with this string.
- *message* is the explanatory message that comes with your upload, you can fill it with your relevant comments, usage notes, etc.
- *name* and *email* are the information about the submitter, by default you can fill in your github nickname and email. Of course, you can change it.
- *path* is the path where the file was uploaded to the repo, combined with hint and [[Obsidian Github Uploader#Note]] to understand and fill in.

If you are still confused by some of the terms about git and github in the settings panel, please check some additional information. I believe that understanding these related contents will not only help you understand how to set up this plugin, but git itself can also help you more in your work and life.

#### Note

All the parameters are **required** except *path*. There are several points to note.

1. *branch* must be a branch that already exists(main is the default branch that already exists), the plugin cannot create its own branch for uploading.
2. If *path* left empty, file will be uploaded in the root of the repository; if set to `image/`, (**attention `/`** ) files will be uploaded to the image folder; **if set to `image`, files will be combined with *image* and uploaded to the root, with a name like `image123456xyz.png`**.
3. Keep the token safe, it is important and confidential.
4. *github* has a limit on upload size. It is not recommended to upload files that are too large to github.
5. Files with the same name are not allowed in the same path, which is a convention I have never seen violated, as well as in github. Checking *random filename* will help you avoid making mistakes in this detail. If you do need to upload a file with a special file name at one time, you can uncheck this item, just remember to check the duplicate name problem mentioned above.
