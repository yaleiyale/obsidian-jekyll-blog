---
title: Obsidian Emo Uploader
aliases: []
tags: []
date: 2022-10-16T17:23:05+08:00
lastmod: 2022-12-13T22:33:25+08:00
from: 
url: /notes/2022/10/16/172318
---

[[Obsidian Emo Uploader#Github设置相关]] [[Obsidian Emo Uploader#English]]

嵌入markdown在线文件/图像链接。 这个插件用于在Obsidian中上传图片到图床或者上传文件到Github（现在支持更多平台如Catbox）。  

**图床聚合 & 文件上传器** : _Imgur SM.MS Github Cloudinary Catbox ……_

# 它是如何工作的

<video src="https://user-images.githubusercontent.com/55282569/200258839-0979aa8c-7e5b-4254-bbe3-b9eeff458a40.mp4" controls="controls"></video>

# 当前状态

- 支持列表
    - 文件托管
        - [GitHub](https://github.com/)
        - [Clouinary](https://cloudinary.com/)
        - [Catbox](https://catbox.moe/)
    - 图床
        - [Imgur](https://imgur.com/)
        - [SM.MS](https://smms.app/)
        - [ImgURL](https://www.imgurl.org/)
        - [imgbb](https://imgbb.com/)
- 配置页面多语言支持
    - 简体中文
    - 繁體中文 [@emisjerry](https://github.com/emisjerry)
    - English

<p class = "stickies">注册catbox时要记得用户名，登录时候要用 🤨</p>

>[!check]  
>从2.6版本开始，支持剪贴板和拖拽文件;非图像文件嵌入markdown后，默认以开头不带“!”的链接形式出现。

# 配置

1. 禁用obsidian安全模式
2. 安装该插件
   - 从obsidian插件社区中安装
   - 从Release中获取
      - 从最新版本的release中下载 **main.js manifest.json**
      - 将它们放入一个文件夹，再将该文件夹放到你的obsidian库配置文件的插件文件夹中
    - 手动安装
      - 克隆这个 repo
      - 用`yarn`或`npm`安装依赖项，如`npm install`。
      - `npm run dev`将开始编译
3. 启用该插件
4. 配置设置 👉 [[Obsidian Emo Uploader#Github设置相关]]
5. 享受便利🌟

# 关于上传到github

对于来自代码世界之外的不熟悉的访问者，Github是一个著名的互联网托管服务，用于软件开发和使用Git的版本控制。  
如果你需要有关托管**图像**的更多帮助，请查看[本插件的其他部分](https://github.com/yaleiyale/obsidian-emo-uploader#about-the-other).

## 它是什么？

这个插件可以让你自动上传粘贴到Obsidian的**文件**，直接进入你的github仓库（而不是存储在本地）。当你想在笔记中提到一个你认为很适合共享的文件时，比如脚本、配置文件或任何东西，这很有用。  
当然，它也可以是一个简单的图片上传器。它能很好地将图片嵌入到markdown文件中。  
但不仅仅是一个图片上传器，你可以上传**各种类型的文件**，只要github接受它们。  
文件链接是否能在Obsidian中呈现，取决于obsidian本身的支持情况。没关系，即使它们不能被渲染，它们仍然可以作为链接使用。🍭只要去掉开头的感叹号就可以了。

## 关于Github与jsdelivr的用户协议

[GitHub terms-of-service](https://docs.github.com/cn/site-policy/github-terms/github-terms-of-service)  
[jsdelivr Use Policy](https://www.jsdelivr.com/terms/acceptable-use-policy-jsdelivr-net)  

⚠️注意，

1. github目标仓库必须为public，这意味着上传的所有文件都是公开。github也更应该是为乐于共享者而服务的。请确保对你来说分享你上传的文件是无害的。我个人更期待着有一天你的某次上传就是为了无私共享。🌻
2. 不要上传空文件。在这里是没有意义的，是错误的。
3. 建议勾选面板中的随机文件名。重复的文件名会引起错误。随机文件名将大大避免重复的文件名。
4. 一般来说，Github足够慷慨。但你需要掌握分寸，不要太滥用Github的服务。放轻松，正常使用，比如在Github pages中使用，当然是可以接受的。但如果你需要大量使用图片，请使用专业的图床服务（现在该项服务已经集成到了本插件中）超出正常范围（如在单个资源库中存储超过1GB的文件），滥用Github，上传不良文件，造成不良影响，可能会导致你的Github库甚至账户受到影响。
5. 5.我在这里使用到了[jsdelivr](https://www.jsdelivr.com/)。它是免费的。就像上面关于GitHub的一样，不要滥用它。就像我在视频中所做的一样，在传输大型视频时使用jsdelivr是不好的，我已经删除了它。*我的案例是一个很小很小尺寸的视频* 😼

## 关于其他平台

除了github，这里的所有其他平台都是纯托管平台。注册帐户并查找所需的参数。只需将参数写到正确的位置，然后你就可以像视频中那样使用托管服务了。  
[SM.MS](https://smms.app/) ，[ImgURL](https://www.imgurl.org/)是图床，可以让你上传**图片**到存储账号。对于生活在中国大陆的用户来说，这个网站比Github和Cloudinary更容易访问到。  
关于Cloudinary，请参考[obsidian-cloudinar-uploader/README.md](https://github.com/jordanhandy/obsidian-cloudinary-uploader/blob/main/README.md)，当然本插件也支持Cloudinary。如果你发现Cloudinary已经足够满足你的需求，你可以直接使用它。不过我的脚本体积更小😳  
如果图片需要在中国大陆访及，不建议使用imgbb。我发现上传到这个平台的图片在中国大陆无法轻易访问，它们通常以缩略图的形式呈现。  
使用imgur匿名上传时，deletehash将以`![deletehash](url)`的形式出现，用于防止你后悔上传错误的图片。你可以在[此处](https://lestua.eu.org/imgurdeleteimage)删除它们或在插件中进行删除。  
Catbox本来是支持匿名上传的。但我没有发现删除匿名上传的文件的办法。为了避免意外，这里不提供catbox的匿名上传。  
⚠️ 文件在这些托管平台上是公开可访问的。不要上传违禁文件！请自行检查服务限制。

## 如何扩展

想要支持更多平台？如果不想费太大力气看老代码，可以通过以下方式扩展。

- 参考现有文件，将你的*uploader*所需要的参数添加到`src/Parms`，完成一个*parms*类型
- 使用你的`parms`，在`config.ts`中, 添加关于*uploader*的参数配置作为可选目标平台与运行时的参数配置
- 向`src/Uploader, src/Fragment`添加文件以实现你的的*uploader*和*fragment*。
- 在`settings-tab.ts`中，加入你的*fragment*以在setting-tab中显示和设置参数。
- 将你的*uploader*添加到`main.ts`中的switch判断块。
- 测试一下。

搞定了！😽

## 注意

由于不同平台支持的文件范围不同，在这个插件中对你粘贴的文件类型没有限制。这将导致不支持的类型在没有正确响应的情况下上传失败。幸运的是，在文档中嵌入奇怪文件类型的情况并不多。(不会很多吧？)  
如果你需要将文件作为附件嵌入，请暂时关闭插件。  
大致上，Github、Cloudinary、Catbox支持任何文件类型，SM.MS，ImgURL支持常见的图像类型。  
试图上传一个平台不支持或者体积过大的文件将会产生一个类似`![](undefined)` 的字符串

## Github设置相关

第一次安装启用插件后的设置面板会是这样：

![Imgur](https://i.imgur.com/2LbBMvv.png)

### Github配置（给非技术人员）

- 注册登录你的github，github昵称将用来填到owner [GitHub注册页](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)  
![Imgur](https://i.imgur.com/ZuIbkTe.png)

- 在登录后的主页右上角，新建仓库，仓库名将填入*repo*
- 默认分支为*main*，如果要更换分支，请先在github上创建分支  
![Imgur](https://i.imgur.com/buurIQl.png)  
![Imgur](https://i.imgur.com/PbonBno.png)  
并将分支名填入*branch*
- 在登录状态下进入[Personal Access Tokens](https://github.com/settings/tokens)，生成*Personal Access Tokens*，并确保它有repo权限。  
![Imgur](https://i.imgur.com/GBMuS4x.png)

请及时保存该字符串，它只会可见一次，遗落后无法找回，需要重新生成新的。将该字符串填入*token*

- *message*是你文件上传时附带的解释性信息，可以填入你的相关注解，用途备忘等
- *path*是文件被上传到repo中的路径，结合hint与[[Obsidian Emo Uploader#注意项]]理解后填入

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

The settings panel after installing and enabling the plugin for the first time will look like this：

![Imgur](https://i.imgur.com/2LbBMvv.png)

#### Github Configuration(for non-technologists)

- Register and login to your github, Github nickname will be used to fill in owner. [GitHub registration page](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home)  
![Imgur](https://i.imgur.com/ZuIbkTe.png)
- In the top right corner of the home page after login, create a new repository, the repository name will be used to fill in *repo*
- The default branch is *main*, if you want to change the branch, please create a branch on github first ![Imgur](https://i.imgur.com/buurIQl.png)![Imgur](https://i.imgur.com/PbonBno.png)  
and fill *branch* with the branch name
- Go to [Personal Access Tokens](https://github.com/settings/tokens) while logged in, generate *Personal Access Tokens*, and make sure it has repo permissions.  
![Imgur](https://i.imgur.com/GBMuS4x.png)  
Please save the string in time, it will only be visible once and cannot be retrieved after being lost, you need to regenerate it. Fill *token* with this string.
- *message* is the explanatory message that comes with your upload, you can fill it with your relevant comments, usage notes, etc.
- *path* is the path where the file was uploaded to the repo, combined with hint and [[Obsidian Emo Uploader#Note]] to understand and fill in.

If you are still confused by some of the terms about git and github in the settings panel, please check some additional information. I believe that understanding these related contents will not only help you understand how to set up this plugin, but git itself can also help you more in your work and life.

#### Note

All the parameters are **required** except *path*. There are several points to note.

1. *branch* must be a branch that already exists(main is the default branch that already exists), the plugin cannot create its own branch for uploading.
2. If *path* left empty, file will be uploaded in the root of the repository; if set to `image/`, (**attention `/`** ) files will be uploaded to the image folder; **if set to `image`, files will be combined with *image* and uploaded to the root, with a name like `image123456xyz.png`**.
3. Keep the token safe, it is important and confidential.
4. *github* has a limit on upload size. It is not recommended to upload files that are too large to github.
5. Files with the same name are not allowed in the same path, which is a convention I have never seen violated, as well as in github. Checking *random filename* will help you avoid making mistakes in this detail. If you do need to upload a file with a special file name at one time, you can uncheck this item, just remember to check the duplicate name problem mentioned above.
