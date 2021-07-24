![magicbox](img/magicbox.png)
---

[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/TencentBlueKing/bkui-vue2/blob/master/LICENSE.txt) [![Release Version](https://img.shields.io/npm/v/bk-magic-vue.svg)](https://github.com/Tencent/bk-PaaS/releases) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/TencentBlueKing/bkui-vue2/pulls)

[English](README_EN.md) | 简体中文

# bk-magic-vue

基于蓝鲸 Magicbox 和 Vue 的前端组件库

## 安装

```bash
$ npm install --save bk-magic-vue
```


## 使用

### 全量引入

```js
import bkMagicVue from 'bk-magic-vue'
import 'bk-magic-vue/dist/bk-magic-vue.min.css'
Vue.use(bkMagicVue)
```

### 按需引入

按需引入我们需要借助 [babel-plugin-import-bk-magic-vue](https://www.npmjs.com/package/babel-plugin-import-bk-magic-vue) 来实现。

首先，安装 `babel-plugin-import-bk-magic-vue`

```bash
npm i babel-plugin-import-bk-magic-vue -D
```

然后需要在项目的 `.babelrc` 文件中 `plugins` 增加配置

```js
// baseLibName 是 bk-magic-vue 组件库的 package name，默认值为 bk-magic-vue
{
    "presets": ...,
    "plugins": [
        ...
        ["import-bk-magic-vue", {
            "baseLibName": "bk-magic-vue"
        }]
    ]
}
```

之后就可以用如下语法形式来实现按需引用了

```js
import { bkButton } from 'bk-magic-vue'
import { bkButton as cc } from 'bk-magic-vue'
import { bkButton, bkDropdownMenu } from 'bk-magic-vue'
import { bkButton as cc, bkDropdownMenu as dd } from 'bk-magic-vue'
console.log(bkButton)
console.log(cc)
console.log(bkDropdownMenu)
console.log(dd)
```

## 开发
```bash
npm run dev
```

## 构建
```bash
npm run build
```
