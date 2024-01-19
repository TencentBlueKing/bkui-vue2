<script>
    import { bkProcess, bkButton, bkLink } from '@'
    const defaultStatusList = () => (
        [
            {
                content: '创建应用',
                status: 'done',
                steps: [
                    {
                        content: '创建应用1',
                        status: 'done' // 'error' | 'loading'
                    },
                    {
                        content: '创建应用2',
                        status: 'done'
                    }
                ]
            },
            {
                content: '完善资料',
                status: 'error',
                statusIcon: 'close-circle-shape',
                steps: [
                    {
                        content: '完善资料1',
                        status: 'done'
                    },
                    {
                        content: '完善资料2',
                        status: 'error'
                    }
                ]
            },
            {
                content: '下载代码',
                status: false,
                steps: [
                    {
                        content: '下载代码1',
                        status: false,
                    },
                    {
                        content: '下载代码2',
                        status: false,
                    },
                    {
                        content: '下载代码3',
                        status: false,
                    },
                    {
                        content: '下载代码4',
                        status: false,
                    }
                ]
            },
            {
                content: '测试部署',
                status: false,
                steps: [
                    {
                        content: '测试部署1',
                        status: false,
                    },
                    {
                        content: '测试部署2',
                        status: false,
                    }
                ]
            },
            {
                content: '开发完成',
                steps: [
                    {
                        content: '开发完成1',
                    },
                    {
                        content: '开发完成2',
                    }
                ]
            }
        ]
    )

    const defaultListWithVNode = function() {
        const createElement = this.$createElement
        return (
            [
                {
                    content: '创建应用',
                    status: 'done',
                    steps: [
                        {
                            content: '创建应用1',
                            status: 'done' // 'error' | 'loading'
                        },
                        {
                            content: '创建应用2',
                            status: 'done'
                        }
                    ]
                },
                {
                    content: '完善资料',
                    status: 'error',
                    statusIcon: 'close-circle-shape',
                    steps: [
                        {
                            content: '完善资料1',
                            status: 'done'
                        },
                        {
                            content: '完善资料2',
                            status: 'error'
                        }
                    ]
                },
                {
                    content: '下载代码',
                    status: false,
                    steps: [
                        {
                            content: '下载代码1',
                            status: false,
                        },
                        {
                            content: '下载代码2',
                            status: false,
                        },
                        {
                            content: createElement('span', { style: { color: 'blue' } }, [createElement('b', '下载代码3')]),
                            status: false,
                        },
                        {
                            content: createElement(bkLink, { class: 'custom-link', props: { underline: true } }, '下载代码4'),
                            status: false,
                        }
                    ]
                },
                {
                    content: '测试部署',
                    status: false,
                    steps: [
                        {
                            content: '测试部署1',
                            status: false,
                        },
                        {
                            content: '测试部署2',
                            status: false,
                        }
                    ]
                },
                {
                    content: '开发完成',
                    steps: [
                        {
                            content: '开发完成1',
                        },
                        {
                            content: '开发完成2',
                        }
                    ]
                }
            ]
        )
    }

    export default {
        components: {
            bkProcess,
            bkButton
        },
        data () {
            this.getDefaultListWithVNode = defaultListWithVNode.bind(this)
            return {
                process: 1,
                loadingProcess: 2,
                list: [
                    {
                        content: '创建应用'
                    },
                    {
                        content: '完善资料',
                    },
                    {
                        content: '下载代码'
                    },
                    {
                        content: '测试部署'
                    },
                    {
                        content: '开发完成'
                    }
                ],
                loadingList: [
                    {
                        content: '创建应用'
                    },
                    {
                        content: '完善资料',
                        isLoading: true
                    },
                    {
                        content: '下载代码'
                    },
                    {
                        content: '测试部署',
                        isLoading: true
                    },
                    {
                        content: '开发完成'
                    }
                ],
                curProcess: 1,
                dataList: [
                    {
                        content: '创建应用',
                        steps: [
                            {
                                content: '创建应用1',
                                isLoading: true
                            },
                            {
                                content: '创建应用2',
                                isLoading: true
                            }
                        ]
                    },
                    {
                        content: '完善资料',
                        steps: [
                            {
                                content: '完善资料1',
                                isLoading: true
                            },
                            {
                                content: '完善资料2',
                                isLoading: true
                            }
                        ]
                    },
                    {
                        content: '下载代码',
                        steps: [
                            {
                                content: '下载代码1',
                                isLoading: false
                            },
                            {
                                content: '下载代码2',
                                isLoading: true
                            },
                            {
                                content: '下载代码3',
                                isLoading: false
                            },
                            {
                                content: '下载代码4',
                                isLoading: true
                            }
                        ]
                    },
                    {
                        content: '测试部署',
                        steps: [
                            {
                                content: '测试部署1',
                                isLoading: true
                            },
                            {
                                content: '测试部署2',
                                isLoading: false
                            }
                        ]
                    },
                    {
                        content: '开发完成',
                        steps: [
                            {
                                content: '开发完成1',
                                isLoading: true
                            },
                            {
                                content: '开发完成2',
                                isLoading: false
                            }
                        ]
                    }
                ],
                dataStatusList: defaultStatusList(),
                dataListWithVNode: this.getDefaultListWithVNode()
            }
        },
        methods: {
            change (process, data) {
                alert('当前process:' + process)
                console.log(process)
                console.log(data)
            },
            changeEvent (process, data) {
                console.log(process)
                console.log(data)
            },
            changeProcess (process, data) {
                console.log(process)
                console.log(data)
            },
            handleStepChange (step, stepIndex, processIndex) {
                console.log(step, stepIndex, processIndex)
            },
            next () {
                this.curProcess++
            },
            reset () {
                this.curProcess = 1
            },
            statusNext () {
                const status = ['done', 'error', 'loading']
                const next = this.curProcess % this.dataStatusList.length
                this.dataStatusList[next].status = status[Math.floor(Math.random() * status.length)]
                this.dataStatusList[next].statusIcon = ''

                this.dataStatusList[next].steps.forEach(step => {
                    step.status = status[Math.floor(Math.random() * status.length)]
                    // or
                    // this.$set(step, 'status', status[Math.floor(Math.random() * status.length)])
                })
                this.curProcess++
            },
            statusReset () {
                this.dataStatusList = defaultStatusList()
                this.curProcess = 1
            },
            vNodeListNext () {
                const status = ['done', 'error', 'loading']
                const next = this.curProcess % this.dataListWithVNode.length
                this.dataListWithVNode[next].status = status[Math.floor(Math.random() * status.length)]
                this.dataListWithVNode[next].statusIcon = ''

                this.dataListWithVNode[next].steps.forEach(step => {
                    step.status = status[Math.floor(Math.random() * status.length)]
                })
                this.curProcess++
            },
            vNodeListReset () {
                this.dataListWithVNode = this.getDefaultListWithVNode()
                this.curProcess = 1
            }
        }
    }
</script>
<style>
    .custom-link.bk-link .bk-link-text {
        font-size: 12px;
    }
</style>

[[toc]]

## Process 步骤

### 基础用法 {page=#/process}

:::demo 默认配置 `list`、`cur-process`、`display-key`，`list` 和 `cur-process` 以及 `display-key` 为必传，配置 `controllable` 可控制 process 前后跳转

```html
<template>
    <bk-process
        :list="list"
        :cur-process.sync="process"
        :display-key="'content'"
        @process-changed="change"
        :controllable="true"></bk-process>
</template>
<script>
    import { bkProcess } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkProcess
        },
        data () {
            return {
                process: 1,
                list: [
                    {
                        content: '创建应用'
                    },
                    {
                        content: '完善资料',
                    },
                    {
                        content: '下载代码'
                    },
                    {
                        content: '测试部署'
                    },
                    {
                        content: '开发完成'
                    }
                ]
            }
        },
        methods: {
            change (process, data) {
                alert('当前process:' + process)
                console.log(process)
                console.log(data)
            }
        }
    }
</script>
```
:::

### 增加loading {page=#/process}

:::demo 在 `list` 数据源中配置 `isLoading` 属性

```html
<template>
    <bk-process
        :list="loadingList"
        :cur-process.sync="loadingProcess"
        :display-key="'content'"
        @process-changed="changeEvent"
        :controllable="true"></bk-process>
</template>
<script>
    import { bkProcess } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkProcess
        },
        data () {
            return {
                loadingProcess: 2,
                loadingList: [
                    {
                        content: '创建应用'
                    },
                    {
                        content: '完善资料',
                        isLoading: true
                    },
                    {
                        content: '下载代码'
                    },
                    {
                        content: '测试部署',
                        isLoading: true
                    },
                    {
                        content: '开发完成'
                    }
                ]
            }
        },
        methods: {
            changeEvent (process, data) {
                console.log(process)
                console.log(data)
            }
        }
    }
</script>
```
:::

### 配置子步骤 {page=#/process}

:::demo 在 `list` 数据源中配置 `steps` 属性

```html
<template>
    <div>
        <bk-button type="primary" v-if="curProcess <= dataList.length" @click="next" style="margin-top: 20px; margin-bottom: 20px;">{{curProcess === dataList.length ? '完成' : '下一步' }}</bk-button>
        <bk-button type="primary" @click="reset" style="margin-top: 20px; margin-bottom: 20px;" v-else>重置</bk-button>
        <bk-process
            :list="dataList"
            :cur-process.sync="curProcess"
            :display-key="'content'"
            :show-steps="true"
            :controllable="true"
            @process-changed="changeProcess"
        ></bk-process>
    </div>
</template>
<script>
    import { bkProcess, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkProcess,
            bkButton
        },
        data () {
            return {
                curProcess: 1,
                dataList: [
                    {
                        content: '创建应用',
                        steps: [
                            {
                                content: '创建应用1',
                                isLoading: true
                            },
                            {
                                content: '创建应用2',
                                isLoading: true
                            }
                        ]
                    },
                    {
                        content: '完善资料',
                        steps: [
                            {
                                content: '完善资料1',
                                isLoading: true
                            },
                            {
                                content: '完善资料2',
                                isLoading: true
                            }
                        ]
                    },
                    {
                        content: '下载代码',
                        steps: [
                            {
                                content: '下载代码1',
                                isLoading: false
                            },
                            {
                                content: '下载代码2',
                                isLoading: true
                            },
                            {
                                content: '下载代码3',
                                isLoading: false
                            },
                            {
                                content: '下载代码4',
                                isLoading: true
                            }
                        ]
                    },
                    {
                        content: '测试部署',
                        steps: [
                            {
                                content: '测试部署1',
                                isLoading: true
                            },
                            {
                                content: '测试部署2',
                                isLoading: false
                            }
                        ]
                    },
                    {
                        content: '开发完成',
                        steps: [
                            {
                                content: '开发完成1',
                                isLoading: true
                            },
                            {
                                content: '开发完成2',
                                isLoading: false
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            changeProcess (process, data) {
                console.log(process)
                console.log(data)
            },
            next () {
                this.curProcess++
            },
            reset () {
                this.curProcess = 1
            }
        }
    }
</script>
```
:::


### 步骤状态配置 {page=#/process}

:::demo 配置 `steps` 的不同状态，使用 `status` 属性设置当前步骤状态，支持 `default`、`done`、`loading`、`error` 和 布尔值 `false` 表示不显示状态图标，当配置 `status` 后 `isLoading` 无效。除 `default` 状态外其它状态都拥有默认的图标，可以通过 `statusIcon` 属性自定义状态图标，如 `statusIcon: 'circle-shape'` 支持Icon图标组件中的图标。

```html
<template>
    <div>
        <bk-button type="primary" v-if="curProcess <= dataStatusList.length" @click="statusNext" style="margin-top: 20px; margin-bottom: 20px;">{{curProcess === dataStatusList.length ? '完成' : '下一步' }}</bk-button>
        <bk-button type="primary" @click="statusReset" style="margin-top: 20px; margin-bottom: 20px;" v-else>重置</bk-button>
        <bk-process
            :list="dataStatusList"
            :cur-process.sync="curProcess"
            :display-key="'content'"
            :show-steps="true"
            :controllable="false"
            @process-changed="changeProcess">
        </bk-process>
    </div>
</template>
<script>
    import { bkProcess, bkButton } from '{{BASE_LIB_NAME}}'

    const defaultStatusList = () => (
        [
            {
                content: '创建应用',
                status: 'done',
                steps: [
                    {
                        content: '创建应用1',
                        status: 'done' // 'error' | 'loading' ｜ false
                    },
                    {
                        content: '创建应用2',
                        status: 'done'
                    }
                ]
            },
            {
                content: '完善资料',
                status: 'error',
                statusIcon: 'close-circle-shape',
                steps: [
                    {
                        content: '完善资料1',
                        status: 'done'
                    },
                    {
                        content: '完善资料2',
                        status: 'error'
                    }
                ]
            },
            {
                content: '下载代码',
                status: false,
                steps: [
                    {
                        content: '下载代码1',
                        status: false,
                    },
                    {
                        content: '下载代码2',
                        status: false,
                    },
                    {
                        content: '下载代码3',
                        status: false,
                    },
                    {
                        content: '下载代码4',
                        status: false,
                    }
                ]
            },
            {
                content: '测试部署',
                status: false,
                steps: [
                    {
                        content: '测试部署1',
                        status: false,
                    },
                    {
                        content: '测试部署2',
                        status: false,
                    }
                ]
            },
            {
                content: '开发完成',
                steps: [
                    {
                        content: '开发完成1',
                    },
                    {
                        content: '开发完成2',
                    }
                ]
            }
        ]
    )

    export default {
        components: {
            bkProcess,
            bkButton
        },
        data () {
            return {
                curProcess: 1,
                dataStatusList: defaultStatusList()
            }
        },
        methods: {
            changeProcess (process, data) {
                console.log(process)
                console.log(data)
            },
            statusNext () {
                const status = ['done', 'error', 'loading']
                const next = this.curProcess % this.dataStatusList.length

                // 随机父步骤状态
                this.dataStatusList[next].status = status[Math.floor(Math.random() * status.length)]
                this.dataStatusList[next].statusIcon = ''

                // 随机子步骤状态
                this.dataStatusList[next].steps.forEach(step => {
                    step.status = status[Math.floor(Math.random() * status.length)]
                    // or status为动态创建
                    // this.$set(step, 'status', status[Math.floor(Math.random() * status.length)])
                })

                this.curProcess++
            },
            statusReset () {
                this.dataStatusList = defaultStatusList()
                this.curProcess = 1
            }
        }
    }
</script>
```

:::
### 子步骤支持 VNode {page=#/process}

:::demo `steps.content` 配置为 VNode，可以更加灵活的控制显示内容。使用 `step-change` 事件实现点击步骤项时的行为监听。

```html
<template>
    <div>
        <bk-button type="primary" v-if="curProcess <= dataListWithVNode.length" @click="vNodeListNext" style="margin-top: 20px; margin-bottom: 20px;">{{curProcess === dataListWithVNode.length ? '完成' : '下一步' }}</bk-button>
        <bk-button type="primary" @click="vNodeListReset" style="margin-top: 20px; margin-bottom: 20px;" v-else>重置</bk-button>
        <bk-process
            :list="dataListWithVNode"
            :cur-process.sync="curProcess"
            :display-key="'content'"
            :show-steps="true"
            :controllable="false"
            @step-change="handleStepChange">
        </bk-process>
    </div>
</template>
<script>
    import { bkProcess, bkButton, bkLink } from '{{BASE_LIB_NAME}}'

    const defaultListWithVNode = function() {
        const createElement = this.$createElement
        return (
            [
                {
                    content: '创建应用',
                    status: 'done',
                    steps: [
                        {
                            content: '创建应用1',
                            status: 'done' // 'error' | 'loading'
                        },
                        {
                            content: '创建应用2',
                            status: 'done'
                        }
                    ]
                },
                {
                    content: '完善资料',
                    status: 'error',
                    statusIcon: 'close-circle-shape',
                    steps: [
                        {
                            content: '完善资料1',
                            status: 'done'
                        },
                        {
                            content: '完善资料2',
                            status: 'error'
                        }
                    ]
                },
                {
                    content: '下载代码',
                    status: false,
                    steps: [
                        {
                            content: '下载代码1',
                            status: false,
                        },
                        {
                            content: '下载代码2',
                            status: false,
                        },
                        {
                            content: createElement('span', { style: { color: 'blue' } }, [createElement('b', '下载代码3')]),
                            status: false,
                        },
                        {
                            content: createElement(bkLink, { class: 'custom-link', props: { underline: true } }, '下载代码4'),
                            status: false,
                        }
                    ]
                },
                {
                    content: '测试部署',
                    status: false,
                    steps: [
                        {
                            content: '测试部署1',
                            status: false,
                        },
                        {
                            content: '测试部署2',
                            status: false,
                        }
                    ]
                },
                {
                    content: '开发完成',
                    steps: [
                        {
                            content: '开发完成1',
                        },
                        {
                            content: '开发完成2',
                        }
                    ]
                }
            ]
        )
    }

    export default {
        components: {
            bkProcess,
            bkButton
        },
        data () {
            this.getDefaultListWithVNode = defaultListWithVNode.bind(this)
            return {
                curProcess: 1,
                dataListWithVNode: this.getDefaultListWithVNode()
            }
        },
        methods: {
            vNodeListNext () {
                const status = ['done', 'error', 'loading']
                const next = this.curProcess % this.dataListWithVNode.length
                this.dataListWithVNode[next].status = status[Math.floor(Math.random() * status.length)]
                this.dataListWithVNode[next].statusIcon = ''

                this.dataListWithVNode[next].steps.forEach(step => {
                    step.status = status[Math.floor(Math.random() * status.length)]
                })
                this.curProcess++
            },
            vNodeListReset () {
                this.dataListWithVNode = this.getDefaultListWithVNode()
                this.curProcess = 1
            },
            handleStepChange (step, stepIndex, processIndex) {
                console.log(step, stepIndex, processIndex)
            }
        }
    }
</script>
<style>
    .custom-link.bk-link .bk-link-text {
        font-size: 12px;
    }
</style>
```
:::
### 属性 {page=#/process}
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| list | process 数据源（必传） | Array | —— | —— |
| display-key | 循环 list 时，显示字段的 key 值(必传) | String | —— |  ——  |
| controllable | 步骤可否被控制前后跳转 | Boolean | true/false | false |
| show-steps | 是否显示子步骤操作按钮 | Boolean | true/false | false |
| cur-process | 当前步骤的索引值（必传），支持 .sync 修饰符 | Number  | —— | 0 |
| ext-cls | 配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-process` 上 | String | —— | —— |

### 事件 {page=#/process}
| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| process-changed | 当前步骤变化时的回调  | 变化后的步骤 process / 变化后 process 对于的数据 data |
| step-change | 步骤变化时的回调，当点击父节点时 stepIndex 为 null | step, stepIndex, processIndex |
