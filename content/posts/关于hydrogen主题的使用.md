---
title: 关于hydrogen主题的使用
tags:
 - hexo
 - 计算机
 - 编程
 - 前端
date: 2026-01-09
category: 计算机
---

## 引入

我在 [关于这几天重写hydrogen主题的事](https://www.coderfrish.me/2026/07/22/关于这几天重写hydrogen主题的事/) 一文中引出了hydrogen主题，如果你刚好正在使用我的博客主题或者刚想使用我的博客主题，那么这篇文章对你很有帮助。

## 安装须知

本博客主题的所需依赖在以下已列出
- hexo-renderer-markdown-it 或者 hexo-renderer-marked
- hexo-renderer-pug
- hexo-renderer-stylus
- hexo-generator-index
- hexo-generator-tag
- hexo-generator-category
- hexo-generator-json-content

> 注意，如果使用了hexo-renderer-marked依赖是无法使用数学公式的，这里推荐使用hexo-renderer-markdown-it

## 如何使用

### 1 - 安装主题

下载hydrogen主题可以使用两种方法

git下载（不推荐）

```bash
git clone https://github.com/CoderFrish/hexo-theme-hydrogen.git themes/hydrogen
```

npm下载（推荐）

```bash
npm install hexo-theme-hydrogen
```

配置主题，需要在根目录下的 `_config.yml` 文件做出配置

```diff
- theme: 原来的主题
+ theme: hydrogen
```

### 2 - 如何使用数学公式（拓展，如果不需要可以不用看）

请检测以下 `package.json` 文件，判断是否安装了 `hexo-renderer-marked` 依赖，如果安装了，请输入以下指令

```bash
npm uninstall hexo-renderer-marked
npm install hexo-renderer-markdown-it
```

安装数学公式处理所需的库

```bash
npm install katex @renbaoshuo/markdown-it-katex
```

配置markdown渲染插件，需要在根目录下的 `_config.yml` 文件做出配置

```diff
+ markdown:
+   plugins:
+     - name: '@renbaoshuo/markdown-it-katex'
```

### 3 - 关于如何使用关于页面

只需要在 `source` 文件夹里面创建 `about/index.md` 或者 `about.md`

about页面的格式大概为

```markdown
---
layout: about
---

#{你的markdown内容}
```

### 4 - 如何使用管理友情链接的文件

友情链接的文件一般在 `source/_data/friends.json` 文件中

大概为

```json
[
  {
    "avatar": "图标",
    "description": "介绍",
    "url": "网址",
    "title": "标题"
  }
]
```
