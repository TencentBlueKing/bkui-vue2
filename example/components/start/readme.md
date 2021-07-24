[[toc]]

## 快速上手

本节介绍如何在项目中结合 `webpack` 一起使用 `bk-magic-vue`。

### 引入 bk-magic-vue {page=#/start}

`bk-magic-vue` 支持两种引入方式，一种是全量引入，一种是按需引入部分组件。我们先介绍如何完整引入 `bk-magic-vue`。

### 完整引入 {page=#/start}

在 `webpack` 入口 `main.js` 中如下配置：

```js
import Vue from 'vue'
import App from './App'
import router from './router'

// 全量引入 bk-magic-vue
import bkMagic from '{{BASE_LIB_NAME}}'
// 全量引入 bk-magic-vue 样式
import '{{BASE_LIB_NAME}}/dist/bk-magic-vue.min.css'

Vue.use(bkMagic)

new Vue({
    el: '#root',
    router,
    template: '<App />',
    components: {App}
})
```

### 按需引入 {page=#/start}

:::info
特别需要注意的是，按需引入是在使用的时候做的处理，即仅仅只是引入 `import { bkButton } from '{{BASE_LIB_NAME}}'` 组件，但没有任何使用到 `bkButton` 组件时，那么 `bkButton` 组件并不会被引入。
:::

按需引入我们需要借助 [babel-plugin-import-bk-magic-vue](https://www.npmjs.com/package/babel-plugin-import-bk-magic-vue) 来实现。

首先，安装 `babel-plugin-import-bk-magic-vue`

```bash
npm i babel-plugin-import-bk-magic-vue -D
```

然后需要在项目的 `.babelrc` 文件中 `plugins` 增加一行配置

```js
{
    "presets": ...,
    "plugins": [
        ...
        ["import-bk-magic-vue", {
            "baseLibName": "{{BASE_LIB_NAME}}"
        }]
    ]
}
```

之后就可以用如下语法形式来实现按需引用了

```js
import { bkButton } from '{{BASE_LIB_NAME}}'
import { bkButton as cc } from '{{BASE_LIB_NAME}}'
import { bkButton, bkDropdownMenu } from '{{BASE_LIB_NAME}}'
import { bkButton as cc, bkDropdownMenu as dd } from '{{BASE_LIB_NAME}}'
console.log(bkButton)
console.log(cc)
console.log(bkDropdownMenu)
console.log(dd)
```

### 全局配置 {page=#/start}

在引入组件库时，可以传入一个全局配置对象。该对象目前支持`zIndex` 字段。`zIndex` 设置弹框的初始 z-index（默认值：2000）。按照引入组件库的方式，具体操作如下：

完整引入：

```js
import Vue from 'vue'
import bkMagicVue from '{{BASE_LIB_NAME}}'
Vue.use(bkMagicVue, { zIndex: 3000 })
```

按需引入：

```js
import Vue from 'vue'
import { bkButton } from '{{BASE_LIB_NAME}}'

Vue.prototype.$BK_EL = { zIndex: 3000 }
Vue.use(bkButton)
```

按照以上设置，项目中弹框的初始 z-index 为 3000。

### 组件库暴露出来的一些工具方法 {page=#/start}

从 `2.1.11` 版本开始，组件库开始暴露出内部一些与组件逻辑无关的、通用的方法。目前暴露出来的有四个，分别如下：

:::info
无论是全量引入还是按需引入组件库或者是根本没有引入组件库，都可以使用如下方式使用组件库提供的工具方法
:::

```js
// tippy 单独引入方式：
import tippy from '{{BASE_LIB_NAME}}/lib/utils/tippy'

// deepmerge 单独引入方式：
import deepmerge from '{{BASE_LIB_NAME}}/lib/utils/deepmerge'

// popManager 单独引入方式：
import popManager from '{{BASE_LIB_NAME}}/lib/utils/pop-manager'

// zIndexManager 单独引入方式：
import zIndexManager from '{{BASE_LIB_NAME}}/lib/utils/z-index-manager'

// pinyin 单独引入方式：
import pinyin from '{{BASE_LIB_NAME}}/lib/utils/pinyin'

// Icon 图标组件使用 svg 图标时，需要单独引入
import '{{BASE_LIB_NAME}}/lib/utils/svg-icon'
```
