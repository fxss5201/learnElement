---
home: true
title: learnElement
lang: zh-CN
description: learn Element-ui
meta:
  - name: learnElement
    content: learnElement, learn Element-ui
actionText: 快速查看 →
actionLink: /packages/
footer: MIT Licensed | Copyright © 2020-present fxss5201
---

## 项目说明 ##

运行本项目，需要将 VuePress 安装为本地依赖：

``` Shell
# 将本项目克隆到本地
git clone git@github.com:fxss5201/learnElement.git
# git clone https://github.com/fxss5201/learnElement.git

# 安装依赖
npm install

# 开始写作
npm run docs:dev

# 构建
npm run docs:build
```

其他相关配置请查看 [VuePress官网](https://vuepress.vuejs.org/zh/) 。

另外本项目的部署方式采用的是 [GitHub Pages](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)，相应的`deploy.sh`文件已经创建好，md文档编写好了之后上传github，再执行


``` Shell
npm run deploy
```

会自动构建并将构建好的静态页面自动上传到github上对应的分支。