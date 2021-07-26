![magicbox](img/magicbox.png)
---

[![license](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat)](https://github.com/TencentBlueKing/bkui-vue2/blob/master/LICENSE.txt) [![Release Version](https://img.shields.io/npm/v/bk-magic-vue.svg)](https://github.com/Tencent/bk-PaaS/releases) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/TencentBlueKing/bkui-vue2/pulls)

English | [简体中文](README.md)

# bk-magic-vue

A UI library base on BlueKing Magicbox and Vue2

## Install

```bash
$ npm install --save bk-magic-vue
```


## Use

### Import All

```js
import bkMagicVue from 'bk-magic-vue'
import 'bk-magic-vue/dist/bk-magic-vue.min.css'
Vue.use(bkMagicVue)
```

### Import necessary components

We need [babel-plugin-import-bk-magic-vue](https://www.npmjs.com/package/babel-plugin-import-bk-magic-vue) to import necessary components.

first, install `babel-plugin-import-bk-magic-vue`

```bash
npm i babel-plugin-import-bk-magic-vue -D
```

then, you need to add the `plugins` configuration in the `.babelrc` file of the project.

```js
// baseLibName is bk-magic-vue package name，the defaults is bk-magic-vue
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

after that, you can import necessary components like this

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

## Develop
```bash
npm run dev
```

## Build
```bash
npm run build
```
