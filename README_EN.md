![magicbox](img/logo-en.png)
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

## BlueKing Community
- [BK-CMDB](https://github.com/Tencent/bk-cmdb)：BlueKing CMDB is an enterprise-level management platform designed for assets and applications.
- [BK-CI](https://github.com/Tencent/bk-ci)：BlueKing Continuous Integration platform is a free, open source CI service, which allows developers to automatically create - test - release workflow, and continuously, efficiently deliver their high-quality products.
- [BK-BCS](https://github.com/Tencent/bk-bcs)：BlueKing Container Service is a container-based basic service platform that provides management service to microservice businesses.
- [BK-PaaS](https://github.com/Tencent/bk-PaaS)：BlueKing PaaS is an open development platform that allows developers to efficiently create, develop, set up, and manage SaaS apps.
- [BK-SOPS](https://github.com/Tencent/bk-sops)：BlueKing SOPS is a system that features workflow arrangement and execution using a graphical interface. It's a lightweight task scheduling and arrangement SaaS product of the Blueking system.
- [BK-JOB](https://github.com/Tencent/bk-job)：BlueKing JOB is a set of operation and maintenance script management platform with the ability to handle a large number of tasks concurrently.
- [BK-BASE](https://github.com/Tencent/bk-base)：BlueKing BASE  is a basic computing platform focusing on the field of operation and maintenance, creating a one-stop, low-threshold basic service.

## Contributing

For bkui-vue2 branch management, issues, and pr specifications, read the [CONTRIBUTING(In Chinese)](CONTRIBUTING.md)

If you are interested in contributing, check out the [CONTRIBUTING.md], also join our [Tencent OpenSource Plan](https://opensource.tencent.com/contribution).

## License

bkui-vue2 is based on the MIT protocol. Please refer to [LICENSE](LICENSE.txt).
