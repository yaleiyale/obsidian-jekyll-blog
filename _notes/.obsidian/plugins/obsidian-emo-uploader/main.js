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
var import_obsidian10 = __toModule(require("obsidian"));

// src/settings-tab.ts
var import_obsidian5 = __toModule(require("obsidian"));

// src/Parms/parms_cloudinary.ts
var CLOUDINARY_DEFAULT_PARMS = {
  required: {
    name: "",
    present: ""
  },
  folder: ""
};

// src/Parms/parms_github.ts
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

// src/Parms/parms_imgurl.ts
var IMGURL_DEFAULT_PARMS = {
  required: {
    uid: "",
    token: ""
  }
};

// src/Parms/parms_smms.ts
var SMMS_DEFAULT_PARMS = {
  required: {
    token: ""
  }
};

// src/config.ts
var HostingProvider;
(function(HostingProvider3) {
  HostingProvider3["Github"] = "Github";
  HostingProvider3["Smms"] = "SM.MS";
  HostingProvider3["ImgURL"] = "ImgURL";
  HostingProvider3["Cloudinary"] = "Cloudinary";
})(HostingProvider || (HostingProvider = {}));
var supportList = [HostingProvider.Github, HostingProvider.Smms, HostingProvider.ImgURL, HostingProvider.Cloudinary];
var DEFAULT_SETTINGS = {
  choice: HostingProvider.Github,
  github_parms: GITHUB_DEFAULT_PARMS,
  smms_parms: SMMS_DEFAULT_PARMS,
  imgurl_parms: IMGURL_DEFAULT_PARMS,
  cloudinary_parms: CLOUDINARY_DEFAULT_PARMS
};

// src/Tab/tab_cloudinary.ts
var import_obsidian = __toModule(require("obsidian"));
function display(containerEl, plugin) {
  const parms = plugin.config.cloudinary_parms;
  containerEl.createEl("h3", { text: "Cloudinary Settings" });
  new import_obsidian.Setting(containerEl).setName("Cloud Name").setDesc("The name of your Cloudinary Cloud Account").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.name).onChange((value) => __async(this, null, function* () {
      parms.required.name = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian.Setting(containerEl).setName("Cloudinary Upload Template").setDesc("Cloudinary Upload Preference string").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.present).onChange((value) => __async(this, null, function* () {
      parms.required.present = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian.Setting(containerEl).setName("Cloudinary Upload Folder").setDesc("Folder name to use in Cloudinary.  Note, this will be ignored if you have a folder set in your Cloudinary Upload Preset").addText((text) => {
    text.setPlaceholder("obsidian -> obsidian/pic.png").setValue(parms.folder).onChange((value) => __async(this, null, function* () {
      parms.folder = value;
      yield plugin.saveSettings();
    }));
  });
}

// src/Tab/tab_github.ts
var import_obsidian2 = __toModule(require("obsidian"));
function display2(containerEl, plugin) {
  const parms = plugin.config.github_parms;
  containerEl.createEl("h3", { text: "Github Settings" });
  new import_obsidian2.Setting(containerEl).setName("owner").setDesc("the account owner of the repository").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.owner).onChange((value) => __async(this, null, function* () {
      parms.required.owner = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian2.Setting(containerEl).setName("repo").setDesc("the name of the repository").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.repo).onChange((value) => __async(this, null, function* () {
      parms.required.repo = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian2.Setting(containerEl).setName("branch").setDesc("target branch").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.branch).onChange((value) => __async(this, null, function* () {
      parms.required.branch = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian2.Setting(containerEl).setName("token").setDesc("Github token").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.token).onChange((value) => __async(this, null, function* () {
      parms.required.token = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian2.Setting(containerEl).setName("message").setDesc("commit message").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.message).onChange((value) => __async(this, null, function* () {
      parms.required.message = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian2.Setting(containerEl).setName("path").setDesc("target path").addText((text) => {
    text.setPlaceholder("obsidian/ -> obsidian/pic.png").setValue(parms.path).onChange((value) => __async(this, null, function* () {
      parms.path = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian2.Setting(containerEl).setName("random filename").setDesc("Random file names will greatly avoid duplicate file names. If you are sure that you need to use the original file name during this upload, make sure that no duplicate naming will occur under the path you choose.").addToggle((toggle) => {
    toggle.setValue(parms.random);
    toggle.onChange((value) => __async(this, null, function* () {
      parms.random = value;
      yield plugin.saveSettings();
    }));
  });
}

// src/Tab/tab_imgurl.ts
var import_obsidian3 = __toModule(require("obsidian"));
function display3(containerEl, plugin) {
  const parms = plugin.config.imgurl_parms;
  containerEl.createEl("h3", { text: "ImgURL Settings" });
  new import_obsidian3.Setting(containerEl).setName("uid").setDesc("ImgURL uid").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.uid).onChange((value) => __async(this, null, function* () {
      parms.required.uid = value;
      yield plugin.saveSettings();
    }));
  });
  new import_obsidian3.Setting(containerEl).setName("token").setDesc("ImgURL token").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.token).onChange((value) => __async(this, null, function* () {
      parms.required.token = value;
      yield plugin.saveSettings();
    }));
  });
}

// src/Tab/tab_smms.ts
var import_obsidian4 = __toModule(require("obsidian"));
function display4(containerEl, plugin) {
  const parms = plugin.config.smms_parms;
  containerEl.createEl("h3", { text: "SM.MS Settings" });
  new import_obsidian4.Setting(containerEl).setName("token").setDesc("SM.MS token").addText((text) => {
    text.setPlaceholder("").setValue(parms.required.token).onChange((value) => __async(this, null, function* () {
      parms.required.token = value;
      yield plugin.saveSettings();
    }));
  });
}

// src/settings-tab.ts
var EmoUploaderSettingTab = class extends import_obsidian5.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "General Settings" });
    new import_obsidian5.Setting(containerEl).setName("target").setDesc("Choose your target. Make sure you have completely filled in the necessary parameters of the selected platform.").addDropdown((dropdown) => {
      supportList.forEach((record) => {
        dropdown.addOption(record, record);
      });
      dropdown.setValue(this.plugin.config.choice).onChange((value) => __async(this, null, function* () {
        this.plugin.config.choice = value;
        yield this.plugin.saveSettings();
      }));
    });
    display2(containerEl, this.plugin);
    display4(containerEl, this.plugin);
    display3(containerEl, this.plugin);
    display(containerEl, this.plugin);
  }
};

// src/Uploader/uploader_github.ts
var import_obsidian6 = __toModule(require("obsidian"));

// src/Utils/FileHelper.ts
function readasArrayBuffer(file) {
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

// src/Uploader/uploader.ts
var Uploader = class {
  isValid() {
    let result = true;
    for (const i in this.required) {
      result && (result = notEmpty(this.required[i]));
      if (!result)
        return false;
    }
    return true;
  }
};
function notEmpty(value) {
  return value.length > 0;
}

// src/Uploader/uploader_github.ts
var GithubUploader = class extends Uploader {
  constructor(parms) {
    super();
    this.required = parms.required;
    this.path = parms.path;
    this.random = parms.random;
  }
  upload(file) {
    return __async(this, null, function* () {
      let filePath = "";
      if (this.random) {
        const startSuffix = file.name.lastIndexOf(".");
        filePath = this.path + getFileName();
        filePath += startSuffix > 0 ? file.name.substring(startSuffix) : "";
      } else {
        filePath = this.path + file.name;
      }
      const jsonBody = {
        owner: this.required.owner,
        repo: this.required.repo,
        branch: this.required.branch,
        path: filePath,
        message: this.required.message,
        content: yield getBase64(file)
      };
      const form = JSON.stringify(jsonBody);
      const req = {
        url: `https://api.github.com/repos/${this.required.owner}/${this.required.repo}/contents/${filePath}`,
        method: "PUT",
        headers: {
          Authorization: `token ${this.required.token}`
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian6.request)(req).then(() => {
          const MarkdownText = `![](https://fastly.jsdelivr.net/gh/${this.required.owner}/${this.required.repo}@${this.required.branch}/${filePath})`;
          resolve(MarkdownText);
        }).catch((err) => {
          reject(err);
          console.log(err);
        });
      });
    });
  }
};

// src/Uploader/uploader_imgurl.ts
var import_obsidian7 = __toModule(require("obsidian"));

// src/Utils/ReqFormData.ts
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
      yield readasArrayBuffer(file).then((picBuffer) => {
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

// src/Uploader/uploader_imgurl.ts
var ImgurlUploader = class extends Uploader {
  constructor(parms) {
    super();
    this.required = parms.required;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      formData.addParm("uid", this.required.uid);
      formData.addParm("token", this.required.token);
      yield formData.addFile("file", file);
      const form = formData.pack();
      const req = {
        url: "https://www.imgurl.org/api/v2/upload",
        method: "POST",
        contentType: "multipart/form-data",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian7.request)(req).then((res) => {
          const json = JSON.parse(res);
          const MarkdownText = `![](${json.data.url})`;
          resolve(MarkdownText);
        }).catch((err) => {
          reject(err);
          console.log(err);
        });
      });
    });
  }
};

// src/Uploader/uploader_cloudinary.ts
var import_obsidian8 = __toModule(require("obsidian"));
var CloudinaryUploader = class extends Uploader {
  constructor(parms) {
    super();
    this.required = parms.required;
    this.folder = parms.folder;
  }
  upload(file) {
    return __async(this, null, function* () {
      const randomBoundary = Date.now().toString(16);
      const formData = new ReqFormData(randomBoundary);
      formData.addParm("upload_preset", this.required.present);
      formData.addParm("folder", this.folder);
      yield formData.addFile("file", file);
      const form = formData.pack();
      const req = {
        url: `https://api.cloudinary.com/v1_1/${this.required.name}/auto/upload`,
        method: "POST",
        contentType: "multipart/form-data",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian8.request)(req).then((res) => {
          const json = JSON.parse(res);
          const MarkdownText = `![](${json.secure_url})`;
          resolve(MarkdownText);
        }).catch((err) => {
          reject(err);
          console.log(err);
        });
      });
    });
  }
};

// src/Uploader/uploader_smms.ts
var import_obsidian9 = __toModule(require("obsidian"));
var SmmsUploader = class extends Uploader {
  constructor(parms) {
    super();
    this.required = parms.required;
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
        contentType: "multipart/form-data",
        headers: {
          "Content-Type": "multipart/form-data;boundary=" + randomBoundary,
          Authorization: this.required.token
        },
        body: form
      };
      return yield new Promise((resolve, reject) => {
        (0, import_obsidian9.request)(req).then((res) => {
          const json = JSON.parse(res);
          const MarkdownText = `![](${json.data.url})`;
          resolve(MarkdownText);
        }).catch((err) => {
          reject(err);
          console.log(err);
        });
      });
    });
  }
};

// src/main.ts
var Emo = class extends import_obsidian10.Plugin {
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
          default:
            console.log(new import_obsidian10.Notice("Emo broken. Check your choice", 2e3));
            return;
        }
        if (uploader.isValid()) {
          evt.preventDefault();
          for (const file of files) {
            const randomString = (Math.random() * 10086).toString(36).slice(-6);
            const pastePlaceText = `![uploading...](${randomString})
`;
            editor.replaceSelection(pastePlaceText);
            uploader.upload(file).then((MarkdownText) => this.replaceText(editor, pastePlaceText, MarkdownText)).catch((err) => {
              console.log(new import_obsidian10.Notice(err, 2e3));
            });
          }
        } else {
          console.log(new import_obsidian10.Notice("Emo need more prams", 2e3));
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
