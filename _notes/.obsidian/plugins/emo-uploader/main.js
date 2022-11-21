var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => Emo
});
var import_obsidian14 = __toModule(require("obsidian"));

// src/settings-tab.ts
var import_obsidian7 = __toModule(require("obsidian"));

// src/parms/parms-cloudinary.ts
var CLOUDINARY_DEFAULT_PARMS = {
  required: {
    name: "",
    present: ""
  },
  folder: ""
};

// src/parms/parms-github.ts
var GITHUB_DEFAULT_PARMS = {
  required: {
    owner: "",
    repo: "",
    branch: "main",
    token: "",
    message: "upload from emo-uploader\xB7Github"
  },
  path: "",
  random: true
};

// src/parms/parms-imgbb.ts
var IMGBB_DEFAULT_PARMS = {
  required: {
    key: ""
  }
};

// src/parms/parms-imgur.ts
var IMGUR_DEFAULT_PARMS = {
  required: {
    emoid: "4547d4aee97ce8f"
  },
  clientid: ""
};

// src/parms/parms-imgurl.ts
var IMGURL_DEFAULT_PARMS = {
  required: {
    uid: "",
    token: ""
  }
};

// src/parms/parms-smms.ts
var SMMS_DEFAULT_PARMS = {
  required: {
    token: ""
  }
};

// src/config.ts
var HostingProvider;
(function(HostingProvider2) {
  HostingProvider2["Github"] = "Github";
  HostingProvider2["Smms"] = "SM.MS";
  HostingProvider2["ImgURL"] = "ImgURL";
  HostingProvider2["Cloudinary"] = "Cloudinary";
  HostingProvider2["Imgbb"] = "imgbb";
  HostingProvider2["Imgur"] = "Imgur";
})(HostingProvider || (HostingProvider = {}));
var supportList = [
  HostingProvider.Github,
  HostingProvider.Smms,
  HostingProvider.ImgURL,
  HostingProvider.Cloudinary,
  HostingProvider.Imgbb,
  HostingProvider.Imgur
];
var DEFAULT_SETTINGS = {
  choice: HostingProvider.Github,
  github_parms: GITHUB_DEFAULT_PARMS,
  smms_parms: SMMS_DEFAULT_PARMS,
  imgurl_parms: IMGURL_DEFAULT_PARMS,
  cloudinary_parms: CLOUDINARY_DEFAULT_PARMS,
  imgbb_parms: IMGBB_DEFAULT_PARMS,
  imgur_parms: IMGUR_DEFAULT_PARMS
};

// src/fragment/fragment-cloudinary.ts
var import_obsidian = __toModule(require("obsidian"));

// src/base/emo-fragment.ts
var EmoFragment = class {
  constructor(name, kind, el, plugin) {
    this.kind = kind;
    this.element = el.createDiv(name);
    this.display(this.element, plugin);
    this.element.hide();
  }
  update(choice) {
    this.kind === choice ? this.element.show() : this.element.hide();
  }
};

// src/fragment/fragment-cloudinary.ts
var CloudinaryFragment = class extends EmoFragment {
  display(el, plugin) {
    const parms = plugin.config.cloudinary_parms;
    el.createEl("h3", { text: "Cloudinary Settings" });
    new import_obsidian.Setting(el).setName("Cloud Name").setDesc("The name of your Cloudinary Cloud Account").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.name).onChange((value) => __async(this, null, function* () {
        parms.required.name = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(el).setName("Cloudinary Upload Template").setDesc("Cloudinary Upload Preference string").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.present).onChange((value) => __async(this, null, function* () {
        parms.required.present = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian.Setting(el).setName("Cloudinary Upload Folder").setDesc("Folder name to use in Cloudinary.  Note, this will be ignored if you have a folder set in your Cloudinary Upload Preset").addText((text) => {
      text.setPlaceholder("obsidian -> obsidian/pic.png").setValue(parms.folder).onChange((value) => __async(this, null, function* () {
        parms.folder = value;
        yield plugin.saveSettings();
      }));
    });
  }
};

// src/fragment/fragment-github.ts
var import_obsidian2 = __toModule(require("obsidian"));
var GithubFragment = class extends EmoFragment {
  display(el, plugin) {
    const parms = plugin.config.github_parms;
    el.createEl("h3", { text: "Github Settings" });
    new import_obsidian2.Setting(el).setName("owner").setDesc("the account owner of the repository").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.owner).onChange((value) => __async(this, null, function* () {
        parms.required.owner = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(el).setName("repo").setDesc("the name of the repository").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.repo).onChange((value) => __async(this, null, function* () {
        parms.required.repo = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(el).setName("branch").setDesc("target branch").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.branch).onChange((value) => __async(this, null, function* () {
        parms.required.branch = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(el).setName("token").setDesc("Github token").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.token).onChange((value) => __async(this, null, function* () {
        parms.required.token = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(el).setName("message").setDesc("commit message").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.message).onChange((value) => __async(this, null, function* () {
        parms.required.message = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(el).setName("path").setDesc("target path").addText((text) => {
      text.setPlaceholder("obsidian/ -> obsidian/pic.png").setValue(parms.path).onChange((value) => __async(this, null, function* () {
        parms.path = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian2.Setting(el).setName("random filename").setDesc("Random file names will greatly avoid duplicate file names. If you are sure that you need to use the original file name during this upload, make sure that no duplicate naming will occur under the path you choose.").addToggle((toggle) => {
      toggle.setValue(parms.random);
      toggle.onChange((value) => __async(this, null, function* () {
        parms.random = value;
        yield plugin.saveSettings();
      }));
    });
  }
};

// src/fragment/fragment-imgbb.ts
var import_obsidian3 = __toModule(require("obsidian"));
var ImgbbFragment = class extends EmoFragment {
  display(el, plugin) {
    const parms = plugin.config.imgbb_parms;
    el.createEl("h3", { text: "imgbb Settings" });
    new import_obsidian3.Setting(el).setName("key").setDesc("imgbb key").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.key).onChange((value) => __async(this, null, function* () {
        parms.required.key = value;
        yield plugin.saveSettings();
      }));
    });
  }
};

// src/fragment/fragment-imgurl.ts
var import_obsidian4 = __toModule(require("obsidian"));
var ImgurlFragment = class extends EmoFragment {
  display(el, plugin) {
    const parms = plugin.config.imgurl_parms;
    el.createEl("h3", { text: "ImgURL Settings" });
    new import_obsidian4.Setting(el).setName("uid").setDesc("ImgURL uid").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.uid).onChange((value) => __async(this, null, function* () {
        parms.required.uid = value;
        yield plugin.saveSettings();
      }));
    });
    new import_obsidian4.Setting(el).setName("token").setDesc("ImgURL token").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.token).onChange((value) => __async(this, null, function* () {
        parms.required.token = value;
        yield plugin.saveSettings();
      }));
    });
  }
};

// src/fragment/fragment-smms.ts
var import_obsidian5 = __toModule(require("obsidian"));
var SmmsFragment = class extends EmoFragment {
  display(el, plugin) {
    const parms = plugin.config.smms_parms;
    el.createEl("h3", { text: "SM.MS Settings" });
    new import_obsidian5.Setting(el).setName("token").setDesc("SM.MS token").addText((text) => {
      text.setPlaceholder("").setValue(parms.required.token).onChange((value) => __async(this, null, function* () {
        parms.required.token = value;
        yield plugin.saveSettings();
      }));
    });
  }
};

// src/fragment/fragment-imgur.ts
var import_obsidian6 = __toModule(require("obsidian"));
var ImgurFragment = class extends EmoFragment {
  display(el, plugin) {
    const parms = plugin.config.imgur_parms;
    el.createEl("h3", { text: "Tips for Anonymous Upload" });
    el.createEl("h5", { text: "Imgur upload will produce the link in this format: ![deletehash](url)" });
    el.createEl("h5", { text: "deletehash is used to delete the image you just uploaded" });
    el.createEl("h5", { text: "If your note will be used for publicity, please remember to delete it in time" });
    el.createEl("h3", { text: "Imgur Settings" });
    new import_obsidian6.Setting(el).setName("id").setDesc("The built-in ID has a daily usage limit, if it is temporarily invalid, you can use your own client ID to upload and delete").addText((text) => {
      text.setPlaceholder("").setValue(parms.clientid).onChange((value) => __async(this, null, function* () {
        parms.clientid = value;
        yield plugin.saveSettings();
      }));
    });
    let hash = "";
    new import_obsidian6.Setting(el).setName("delete").setDesc("If you want to delete the image on Imgur, delete it here with the deletehash").addText((text) => {
      text.setPlaceholder("deletehash").onChange((value) => __async(this, null, function* () {
        hash = value;
      }));
    }).addButton((bt) => {
      bt.setButtonText("Delete").onClick(() => {
        let auth = "Client-ID ";
        if (parms.clientid !== "") {
          auth += parms.clientid;
        } else
          auth += parms.required.emoid;
        const req = {
          url: "https://api.imgur.com/3/image/" + hash,
          method: "DELETE",
          headers: {
            Authorization: auth
          }
        };
        (0, import_obsidian6.request)(req).then(() => {
          console.log(new import_obsidian6.Notice("delete done", 2e3));
        }).catch(() => {
          console.log(new import_obsidian6.Notice("delete fail", 2e3));
        });
      });
    });
  }
};

// src/settings-tab.ts
var EmoUploaderSettingTab = class extends import_obsidian7.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.fragmentList = [];
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Target" });
    const pick = new import_obsidian7.Setting(containerEl).setName("target hosting").setDesc("Choose your target. Before uploading, make sure you have completely filled in the necessary parameters of the selected platform.");
    const githubFragment = new GithubFragment("github", HostingProvider.Github, containerEl, this.plugin);
    this.fragmentList.push(githubFragment);
    const cloudinaryFragment = new CloudinaryFragment("cloudinary", HostingProvider.Cloudinary, containerEl, this.plugin);
    this.fragmentList.push(cloudinaryFragment);
    const smmsFragment = new SmmsFragment("smms", HostingProvider.Smms, containerEl, this.plugin);
    this.fragmentList.push(smmsFragment);
    const imgurlFragment = new ImgurlFragment("imgurl", HostingProvider.ImgURL, containerEl, this.plugin);
    this.fragmentList.push(imgurlFragment);
    const imgbbFragment = new ImgbbFragment("imgbb", HostingProvider.Imgbb, containerEl, this.plugin);
    this.fragmentList.push(imgbbFragment);
    const imgurFragment = new ImgurFragment("imgur", HostingProvider.Imgur, containerEl, this.plugin);
    this.fragmentList.push(imgurFragment);
    this.fragmentList.forEach((element) => {
      element.update(this.plugin.config.choice);
    });
    pick.addDropdown((dropdown) => {
      supportList.forEach((record) => {
        dropdown.addOption(record, record);
      });
      dropdown.setValue(this.plugin.config.choice).onChange((value) => __async(this, null, function* () {
        this.plugin.config.choice = value;
        yield this.plugin.saveSettings();
        this.fragmentList.forEach((element) => {
          element.update(this.plugin.config.choice);
        });
      }));
    });
  }
};

// src/uploader/uploader-github.ts
var import_obsidian8 = __toModule(require("obsidian"));

// src/utils/file-helper.ts
function getArrayBuffer(file) {
  return __async(this, null, function* () {
    return yield new Promise((resolve, reject) => {
      const reader = new FileReader();
      let fileResult;
      reader.readAsArrayBuffer(file);
      reader.onload = () => {
        fileResult = reader.result;
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.onloadend = () => {
        resolve(fileResult);
      };
    });
  });
}
function getBase64(file) {
  return __async(this, null, function* () {
    return yield new Promise((resolve, reject) => {
      const reader = new FileReader();
      let fileResult;
      reader.readAsDataURL(file);
      reader.onload = () => {
        fileResult = reader.result;
        fileResult = fileResult.slice(fileResult.indexOf(",") + 1);
      };
      reader.onerror = (error) => {
        reject(error);
      };
      reader.onloadend = () => {
        resolve(fileResult);
      };
    });
  });
}
function getFileName() {
  const time = Date.parse(new Date().toString());
  return time.toString() + (Math.random() * 10086).toString(36).slice(-6);
}

// src/base/emo-uploader.ts
var EmoUploader = class {
  isValid() {
    let result = true;
    for (const i in this.parms.required) {
      result && (result = notEmpty(this.parms.required[i]));
      if (!result)
        return false;
    }
    return true;
  }
};
function notEmpty(value) {
  return value.length > 0;
}

// src/uploader/uploader-github.ts
var GithubUploader = class extends EmoUploader {
  constructor(githubParms) {
    super();
    this.parms = githubParms;
  }
  upload(file) {
    return __async(this, null, function* () {
      let filePath = "";
      if (this.parms.random) {
        const startSuffix = file.name.lastIndexOf(".");
        filePath = this.parms.path + getFileName();
        filePath += startSuffix > 0 ? file.name.substring(startSuffix) : "";
      } else {
        filePath = this.parms.path + file.name;
      }
      const jsonBody = {
        owner: this.parms.required.owner,
        repo: this.parms.required.repo,
        branch: this.parms.required.branch,
        path: filePath,
        message: this.parms.required.message,
        content: yield getBase64(file)
      };
      const form = JSON.stringify(jsonBody);
      const req = {
        url: `https://api.github.com/repos/${this.parms.required.owner}/${this.parms.required.repo}/contents/${filePath}`,
        method: "PUT",
        headers: {
          Authorization: `token ${this.parms.required.token}`
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian8.request)(req).then(() => {
          const markdownText = `![](https://fastly.jsdelivr.net/gh/${this.parms.required.owner}/${this.parms.required.repo}@${this.parms.required.branch}/${filePath})`;
          resolve(markdownText);
        }).catch((err) => {
          reject("Github");
          console.log(err);
        });
      });
    });
  }
};

// src/uploader/uploader-imgurl.ts
var import_obsidian9 = __toModule(require("obsidian"));

// src/utils/req-formdata.ts
var ReqFormData = class {
  constructor(random) {
    this.result = [];
    this.randomBoundary = random;
    this.boundary = "--" + this.randomBoundary;
    this.endBoundary = this.boundary + "--";
  }
  addParm(name, value) {
    let data = this.boundary + "\r\n";
    data += 'Content-Disposition: form-data; name="' + name + '"\r\n\r\n';
    data += value + "\r\n";
    for (let i = 0; i < data.length; i++) {
      this.result.push(data.charCodeAt(i));
    }
  }
  addFile(name, file) {
    return __async(this, null, function* () {
      let data = this.boundary + "\r\n";
      data += 'Content-Disposition: form-data; name="' + name + '"; filename="' + file.name + '"\r\n';
      data += "Content-Type: " + file.type + "\r\n\r\n";
      for (let i = 0; i < data.length; i++) {
        this.result.push(data.charCodeAt(i));
      }
      yield getArrayBuffer(file).then((picBuffer) => {
        const picArray = new Uint8Array(picBuffer);
        this.result = this.result.concat(Array.prototype.slice.call(picArray));
      });
      const endTag = "\r\n";
      for (let i = 0; i < endTag.length; i++) {
        this.result.push(endTag.charCodeAt(i));
      }
      return true;
    });
  }
  pack() {
    const endBoundaryArray = [];
    for (let i = 0; i < this.endBoundary.length; i++) {
      endBoundaryArray.push(this.endBoundary.charCodeAt(i));
    }
    this.result = this.result.concat(endBoundaryArray);
    const form = new Uint8Array(this.result).buffer;
    return form;
  }
};

// src/uploader/uploader-imgurl.ts
var ImgurlUploader = class extends EmoUploader {
  constructor(imgurlParms) {
    super();
    this.parms = imgurlParms;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      formData.addParm("uid", this.parms.required.uid);
      formData.addParm("token", this.parms.required.token);
      yield formData.addFile("file", file);
      const form = formData.pack();
      const req = {
        url: "https://www.imgurl.org/api/v2/upload",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian9.request)(req).then((res) => {
          const json = JSON.parse(res);
          const markdownText = `![](${json.data.url})`;
          resolve(markdownText);
        }).catch((err) => {
          reject("ImgURL");
          console.log(err);
        });
      });
    });
  }
};

// src/uploader/uploader-cloudinary.ts
var import_obsidian10 = __toModule(require("obsidian"));
var CloudinaryUploader = class extends EmoUploader {
  constructor(cloudinaryParms) {
    super();
    this.parms = cloudinaryParms;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      formData.addParm("upload_preset", this.parms.required.present);
      formData.addParm("folder", this.parms.folder);
      yield formData.addFile("file", file);
      const form = formData.pack();
      const req = {
        url: `https://api.cloudinary.com/v1_1/${this.parms.required.name}/auto/upload`,
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian10.request)(req).then((res) => {
          const json = JSON.parse(res);
          const markdownText = `![](${json.secure_url})`;
          resolve(markdownText);
        }).catch((err) => {
          reject("Cloudinary");
          console.log(err);
        });
      });
    });
  }
};

// src/uploader/uploader-smms.ts
var import_obsidian11 = __toModule(require("obsidian"));
var SmmsUploader = class extends EmoUploader {
  constructor(smmsParms) {
    super();
    this.parms = smmsParms;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      formData.addParm("format", "json");
      yield formData.addFile("smfile", file);
      const form = formData.pack();
      const req = {
        url: "https://sm.ms/api/v2/upload",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary,
          Authorization: this.parms.required.token
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian11.request)(req).then((res) => {
          const json = JSON.parse(res);
          let url = "";
          try {
            url = json.data.url;
          } catch (error) {
            url = json.images;
          }
          const markdownText = `![](${url})`;
          resolve(markdownText);
        }).catch((err) => {
          reject("SM.MS");
          console.log(err);
        });
      });
    });
  }
};

// src/uploader/uploader-imgbb.ts
var import_obsidian12 = __toModule(require("obsidian"));
var ImgbbUploader = class extends EmoUploader {
  constructor(imgbbParms) {
    super();
    this.parms = imgbbParms;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      formData.addParm("key", this.parms.required.key);
      yield formData.addFile("image", file);
      const form = formData.pack();
      const req = {
        url: "https://api.imgbb.com/1/upload",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian12.request)(req).then((res) => {
          const json = JSON.parse(res);
          const url = json.data.url;
          const markdownText = `![](${url})`;
          resolve(markdownText);
        }).catch((err) => {
          reject("imgbb");
          console.log(err);
        });
      });
    });
  }
};

// src/uploader/uploader-imgur.ts
var import_obsidian13 = __toModule(require("obsidian"));
var ImgurUploader = class extends EmoUploader {
  constructor(imgurlParms) {
    super();
    this.parms = imgurlParms;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      yield formData.addFile("image", file);
      const form = formData.pack();
      let auth = "Client-ID ";
      if (this.parms.clientid !== "") {
        auth += this.parms.clientid;
      } else
        auth += this.parms.required.emoid;
      const req = {
        url: "https://api.imgur.com/3/upload",
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary,
          Authorization: auth
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian13.request)(req).then((res) => {
          const json = JSON.parse(res);
          const deleteurl = json.data.deletehash;
          const url = json.data.link;
          const markdownText = `![${deleteurl}](${url})`;
          resolve(markdownText);
        }).catch((err) => {
          reject("imgur");
          console.log(err);
        });
      });
    });
  }
};

// src/main.ts
var Emo = class extends import_obsidian14.Plugin {
  setupPasteHandler() {
    this.registerEvent(this.app.workspace.on("editor-paste", (evt, editor) => __async(this, null, function* () {
      const { files } = evt.clipboardData;
      let uploader;
      if (files.length > 0) {
        switch (this.config.choice) {
          case HostingProvider.Github:
            uploader = new GithubUploader(this.config.github_parms);
            break;
          case HostingProvider.ImgURL:
            uploader = new ImgurlUploader(this.config.imgurl_parms);
            break;
          case HostingProvider.Cloudinary:
            uploader = new CloudinaryUploader(this.config.cloudinary_parms);
            break;
          case HostingProvider.Smms:
            uploader = new SmmsUploader(this.config.smms_parms);
            break;
          case HostingProvider.Imgbb:
            uploader = new ImgbbUploader(this.config.imgbb_parms);
            break;
          case HostingProvider.Imgur:
            uploader = new ImgurUploader(this.config.imgur_parms);
            break;
          default:
            console.log(new import_obsidian14.Notice("Emo broken. Check your target", 2e3));
            return;
        }
        if (uploader.isValid()) {
          evt.preventDefault();
          for (const file of files) {
            const randomString = (Math.random() * 10086).toString(36).slice(-6);
            const pastePlaceText = `![uploading...](${randomString})
`;
            editor.replaceSelection(pastePlaceText);
            uploader.upload(file).then((markdownText) => this.replaceText(editor, pastePlaceText, markdownText)).catch((part) => {
              this.replaceText(editor, pastePlaceText, `[${part} upload error]()`);
              console.log(new import_obsidian14.Notice(part + " upload error", 2e3));
            });
          }
        } else {
          console.log(new import_obsidian14.Notice("Emo need more prams", 2e3));
          console.log(uploader);
        }
      }
    })));
  }
  replaceText(editor, target, replacement) {
    target = target.trim();
    const lines = [];
    for (let i = 0; i < editor.lineCount(); i++) {
      lines.push(editor.getLine(i));
    }
    for (let i = 0; i < lines.length; i++) {
      const ch = lines[i].indexOf(target);
      if (ch !== -1) {
        const from = { line: i, ch };
        const to = { line: i, ch: ch + target.length };
        editor.replaceRange(replacement, from, to);
        break;
      }
    }
  }
  onload() {
    return __async(this, null, function* () {
      console.log("loading  Emo uploader");
      yield this.loadSettings();
      this.setupPasteHandler();
      this.addSettingTab(new EmoUploaderSettingTab(this.app, this));
    });
  }
  onunload() {
    console.log("unloading Emo uploader");
  }
  loadSettings() {
    return __async(this, null, function* () {
      this.config = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
    });
  }
  saveSettings() {
    return __async(this, null, function* () {
      yield this.saveData(this.config);
    });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
