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
- [BK-CMDB](https://github.com/Tencent/bk-cmdb)：蓝鲸配置平台（蓝鲸CMDB）是一个面向资产及应用的企业级配置管理平台。
- [BK-CI](https://github.com/Tencent/bk-ci)：蓝鲸持续集成平台是一个开源的持续集成和持续交付系统，可以轻松将你的研发流程呈现到你面前。
- [BK-BCS](https://github.com/Tencent/bk-bcs)：蓝鲸容器管理平台是以容器技术为基础，为微服务业务提供编排管理的基础服务平台。
- [BK-PaaS](https://github.com/Tencent/bk-PaaS)：蓝鲸PaaS平台是一个开放式的开发平台，让开发者可以方便快捷地创建、开发、部署和管理SaaS应用。
- [BK-SOPS](https://github.com/Tencent/bk-sops)：标准运维（SOPS）是通过可视化的图形界面进行任务流程编排和执行的系统，是蓝鲸体系中一款轻量级的调度编排类SaaS产品。
- [BK-JOB](https://github.com/Tencent/bk-job)：蓝鲸作业平台(Job)是一套运维脚本管理系统，具备海量任务并发处理能力。
- [BK-BASE](https://github.com/Tencent/bk-base)：蓝鲸基础计算平台(BK-BASE)是一个专注于运维领域的的基础平台，打造一站式、低门槛的基础服务。

## Contributing
对于项目感兴趣，想一起贡献并完善项目请参阅[Contributing Guide](CONTRIBUTING.md)。

[腾讯开源激励计划](https://opensource.tencent.com/contribution) 鼓励开发者的参与和贡献，期待你的加入。

## FAQ

请查看 [FAQ](docs/faq.md)

## License

基于 MIT 协议， 详细请参考[LICENSE](LICENSE.txt)
