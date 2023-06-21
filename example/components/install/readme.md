[[toc]]

## 安装

### CDN {page=#/install}

直接在页面上引入 js 和 css 文件即可开始使用

``` html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/bk-magic-vue.min.css">
<!-- 引入组件库 -->
<script src="https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/bk-magic-vue.min.js"></script>
```

### Hello World {page=#/install}

通过引用上述文件，可以很容易写出一个 Hello World 页面

```html
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <title> index </title>
        <!-- 引入 bk-magic-vue 组件库样式 -->
        <link rel="stylesheet" href="https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/bk-magic-vue.css">
        <style type="text/css">
            .demo-btn {
                margin: 20px;
            }
        </style>
      </head>
    <body>
        <div id="app">
            <bk-button class="demo-btn" :type="'primary'" @click="helloWorldCallback">
                Hello World
            </bk-button>
            <bk-date-picker class="mr15" v-model="initDateTime" :placeholder="'选择日期'"></bk-date-picker>
            <bk-diff :old-content="oldCode" :new-content="newCode"></bk-diff>
            <span v-bk-tooltips="topStart" class="top-start">
                <i class="bk-icon icon-info-circle-shape"></i>
            </span>
            <bk-popover placement="right">
                <bk-button>超长</bk-button>
                <div slot="content" style="white-space: normal;">
                    <div class="bk-text-primary pt10 pb5 pl10 pr10">
                        今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错
                        今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错
                        今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错
                        今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错
                        今天天气不错今天天气不错今天天气不错今天天气不错今天天气不错
                    </div>
                </div>
            </bk-popover>
        </div>
        <!-- 引入 Vue -->
        <script src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-5-y/vue/2.5.22/vue.js"></script>
        <!-- 引入 bk-magic-vue 组件库 -->
        <script src="https://magicbox.bk.tencent.com/static_api/v3/components_vue/2.0/bk-magic-vue.js"></script>
        <script type="text/javascript">
            window.onload = function () {
                new Vue({
                    el: '#app',
                    data () {
                        return {
                            initDateTime: '2019-03-03 12:12:12',
                            oldCode: 'Vue.component("app-exception", Exception)\n// Vue.component("app-auth", AuthComponent)',
                            newCode: 'Vue.component("app-exception", Exception)',
                            topStart: {
                                content: '提示信息',
                                showOnInit: true,
                                placements: ['top-start']
                            }
                        }
                    },
                    methods: {
                        helloWorldCallback () {
                            alert('hello world')
                        }
                    }
                })
            }
        </script>
    </body>
</html>

```

### NPM 安装 {page=#/install}

组件库已发布至 [npm](https://www.npmjs.com/package/bk-magic-vue)，只需要在项目根目录下执行以下命令便可以安装 `bk-magic-vue`。

```bash
$ npm i bk-magic-vue --save
```

我们更加推荐通过 `NPM` 安装 `bk-magic-vue`，并使用 `webpack` 作为构建工具，具体细节请阅读快速上手章节。
