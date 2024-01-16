<script>
    import { bkBadge, bkTable, bkTableColumn, bkButton } from '@'

    export default {
        components: {
            bkBadge,
            bkButton,
            bkTable,
            bkTableColumn
        },
        data () {
            return {
                customBadge: {
                    visible: true
                },
                badgeStatusMap: {
                    '完成': 'success',
                    '进行中': 'primary',
                    '失败': 'danger',
                },
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎虎虎虎',
                    status: '完成',
                    order: 2,
                    address: '上海市普陀区金沙江路 1518 弄',
                    tag: '家'
                }, {
                  date: '2016-05-04',
                  name: '王小虎',
                  status: '进行中',
                  order: 3,
                  address: '上海市普陀区金沙江路 1517 弄',
                  tag: '公司'
                }, {
                  date: '2016-05-01',
                  name: '王小虎',
                  status: '失败',
                  order: 4,
                  address: '上海市普陀区金沙江路 1519 弄',
                  tag: '家'
                }]
            }
        },
        methods: {
            handleHideBadge () {
                this.customBadge.visible = !this.customBadge.visible
            },
            handleBadgeHover () {
                console.log('hover')
            },
            handleBadgelLeave () {
                console.log('leave')
            }
        }
    }
</script>

[[toc]]

## Badge 标记

可以出现在任意 DOM 节点角上的数字或状态标记

### 基础用法 {page=#/badge}

:::demo 用默认配置初始化组件
```html
<template>
    <bk-badge class="mr40" :theme="'warning'">
        <bk-button :theme="'primary'" :title="'位于右上角'">
            位于右上角
        </bk-button>
    </bk-badge>

    <bk-badge class="mr40" :theme="'info'" :position="'bottom-right'">
        <bk-button :theme="'default'" :title="'位于右下角'">
            位于右下角
        </bk-button>
    </bk-badge>

    <bk-badge class="mr40" :theme="'success'" :position="'bottom-left'">
        <bk-button :theme="'primary'" :title="'位于左下角'">
            位于左下角
      </bk-button>
    </bk-badge>

    <bk-badge class="mr40" :theme="'danger'" :position="'top-left'">
        <bk-button :theme="'primary'" :title="'位于左上角'">
             位于左下角
        </bk-button>
    </bk-badge>
</template>
<script>
    import { bkBadge, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkBadge,
            bkButton
        }
    }
</script>
```
:::

### 不包裹任何元素，独立使用 {page=#/badge}

:::demo 可在不包裹任何元素情况下，独立使用 badge
```html
<template>
    <bk-table class="my-table" :data="tableData" style="width: 100%" :max-height="400">
        <bk-table-column prop="name" label="姓名" width="180">
            <template slot-scope="props">
                <span style="position: relative">
                    {{props.row.name}}
                    <bk-badge theme="danger" :val="props.row.order"></bk-badge>
                </span>
            </template>
        </bk-table-column>
        <bk-table-column prop="name" label="进度" width="180">
            <template slot-scope="props">
                <span style="position: relative">
                    <bk-badge dot :theme="badgeStatusMap[props.row.status]"></bk-badge>
                    {{props.row.status}}
                </span>
            </template>
        </bk-table-column>
        <bk-table-column prop="address" label="地址">
        </bk-table-column>
    </bk-table>
</template>
<script>
    import { bkTable, bkTableColumn, bkBadge } from '{{BASE_LIB_NAME}}'
    export default {
        components: {
            bkTable,
            bkBadge,
            bkTableColumn,
            bkPopover
        },
        data () {
            return {
                badgeStatusMap: {
                    '完成': 'success',
                    '进行中': 'primary',
                    '失败': 'danger',
                },
                tableData: [
                    {
                        date: '2016-05-02',
                        name: '王小虎',
                        status: '完成',
                        order: 2,
                        address: '上海市普陀区金沙江路 1518 弄',
                        tag: '家'
                    },
                    {
                        date: '2016-05-04',
                        name: '王小虎',
                        status: '进行中',
                        order: 3,
                        address: '上海市普陀区金沙江路 1517 弄',
                        tag: '公司'
                    },
                    {
                        date: '2016-05-01',
                        name: '王小虎',
                        status: '失败',
                        order: 4,
                        address: '上海市普陀区金沙江路 1519 弄',
                        tag: '家'
                    }
                ]
            }
        }
    }
</script>

```
:::

### 可自定义最大值 {page=#/badge}

:::demo 配置参数 `val` 的值
```html
<template>
    <bk-badge class="mr40" :theme="'danger'" :max="99" :val="150">
        <bk-button :theme="'primary'" :title="'评论'">
            评论
        </bk-button>
    </bk-badge>
</template>
<script>
    import { bkBadge, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkBadge,
            bkButton
        }
    }
</script>
```
:::

### 自定义内容 {page=#/badge}

:::demo 参数`val`支持数字或字符串
```html
<template>
    <bk-badge class="mr40" :theme="'success'" :val="'成功'">
        <bk-button :theme="'primary'" :title="'评论'">
            评论
        </bk-button>
    </bk-badge>

    <bk-badge class="mr40" :theme="'danger'" :val="'失败'">
        <bk-button :theme="'primary'" :title="'评论'">
            评论
        </bk-button>
    </bk-badge>

    <bk-badge class="mr40" :theme="'danger'" :max="99" :val="200" :visible="customBadge.visible">
        <bk-button :theme="'primary'" :title="'点击可隐藏badge'" @click="handleHideBadge">
            点击可切换显示 badge
        </bk-button>
    </bk-badge>
</template>

<script>
    import { bkBadge, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkBadge,
            bkButton
        },
        data () {
            return {
                customBadge: {
                    visible: true
                }
            }
        },
        methods: {
            handleHideBadge () {
                this.customBadge.visible = false
            },
            handleBadgeHover () {
                console.log('hover')
            },
            handleBadgelLeave () {
                console.log('leave')
            }
        }
    }
</script>
```
:::

### 无内容红点 {page=#/badge}

:::demo 配置参数 `dot`
```html
<template>
    <bk-badge class="mr40" dot :theme="'danger'">
        <bk-button :theme="'primary'" :title="'消息'">
            消息
        </bk-button>
    </bk-badge>
</template>
<script>
    import { bkBadge, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkBadge,
            bkButton
        }
    }
</script>
```
:::
### 自定义显示字符长度 {page=#/badge}

:::demo 配置参数 `valLength`，默认为3，为标准化字母和汉字，一个汉字长度算作2
```html
<template>
    <bk-badge class="mr40" :theme="'danger'" val="message">
        <bk-button :theme="'primary'" :title="'消息'">
            消息
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" :theme="'warning'" val="message" val-length="7">
        <bk-button :theme="'primary'" :title="'消息'">
            消息
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" :theme="'info'" val="提示消息">
        <bk-button :theme="'default'" :title="'消息'">
            消息
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" :theme="'success'" val="提示消息" val-length="8">
        <bk-button :theme="'primary'" :title="'消息'">
            消息
        </bk-button>
    </bk-badge>
</template>
<script>
    import { bkBadge, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkBadge,
            bkButton
        }
    }
</script>
```
:::


### 配置 Radius {page=#/badge}

:::demo 配置参数 `radius`
```html
<template>
    <bk-badge class="mr40" val="Hot!" :theme="'danger'" radius="0" position="right">
        <bk-button :theme="'primary'" :title="'消息'" :text="true" style="padding: 0 5px;">
            正方形
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" val="1000" :theme="'warning'" radius="18px">
        <bk-button :theme="'primary'" :title="'消息'">
            椭圆
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" :theme="'info'" val="1" radius="100%">
        <bk-button :theme="'default'" :title="'消息'">
            圆形
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" :theme="'success'" val="10" radius="50%">
        <bk-button :theme="'primary'" :title="'消息'">
            圆形
        </bk-button>
    </bk-badge>
    <bk-badge class="mr40" :theme="'warning'"  val="数字等" radius="20%">
        <bk-button :theme="'primary'" :title="'消息'">
            圆角四边形
        </bk-button>
    </bk-badge>
</template>
<script>
    import { bkBadge, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkBadge,
            bkButton
        }
    }
</script>
```
:::


### 属性 {page=#/badge}
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| theme | 组件的主题色 | String | `primary` `info` `warning` `danger` `success` 或16进制颜色值 | primary |
| val | 组件显示的值 | Number / String | —— | 1 |
| icon | 组件显示图标；当设置 icon 时，将忽略设置的 value 值 | String | 参考[蓝鲸 ICON](ICON_URL) | —— |
| max | 组件显示的最大值，当 value 超过 max，显示数字 +；仅当设置了 Number 类型的 value 值时生效 | Number | —— | —— |
| dot | 是否仅显示小圆点；当设置 dot 为 true 时，value, icon, max 均会被忽略 | Boolean | —— | —— |
| visible | 是否显示组件 | Boolean | —— | —— |
| position | 组件相对于其兄弟组件的位置 | String | `top-right` `bottom-right` `bottom-left` `top-left` | top-right |
| ext-cls | 配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-badge-wrapper` 上 | String | —— | —— |
| radius | 配置自定义弧度，以实现多种形状 | String|Number | —— | 18px |
| valLength | 配置val字符显示长度，最大值建议英文不超过3个字母，中文不超过2个汉字(一个汉字长度算作2) | Number | —— | 3 |
### 事件 {page=#/badge}
| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| hover | 广播给父组件 mouseover 事件 | —— |
| leave | 广播给父组件 mouseleave 事件 | —— |
