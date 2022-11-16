[[toc]]

## 更新日志

<bk-alert type="info">
  <div slot="title" style="font-weight: 700; font-size: 14px; color: #333;">如项目中 Vue 依赖版本小于 2.7，则需安装 bk-magic-vue@vue2.5-latest</div>
</bk-alert>

<div class="changelog-wrapper">

### 2.5.3-beta.2 {page=#/changelog}

* **[fix]**:
    - [Input 输入框](#/input) 修复 windows 系统下， 输入 `-1234` 后光标移动到 `-` 号前面再次输入数字的问题
    - [TimePicker 时间选择器](#/time-picker) 修复编辑后，值没有更新的问题

---

### 2.5.3-beta.1 {page=#/changelog}

* **[fix]**:
    - [Input 输入框](#/input) 修复 输入 `-1234` 后光标移动到 `-` 号前面再次输入数字的问题

---

### 2.5.2 {page=#/changelog}
###### 2022.11.06

* **[fix]**:
    - [Tooltips 工具提示 （指令）](#/tooltips) 修复配置 allowHTML 为 true 时，content 属性配置为 DOM Selector 的问题

---

### 2.5.1 {page=#/changelog}
###### 2022.11.01

* **[breaking]**:
    - **Vue 更新至 2.7.x。如项目中 Vue 依赖版本小于 2.7，则需安装 bk-magic-vue@vue2.5-latest**
* **[add]**:
    - [TimePicker 时间选择器](#/time-picker) 新增 `此刻`，便于快速选择当前时间
    - [Table 表格](#/table) 添加深色表头、自定义表头配色等属性
    - [Card 卡片](#/card) 添加展开收起动画
    - [Tag 标签](#/tag) 抛出 click 事件，允许在组件上支持监听 click 事件 [#319](https://github.com/TencentBlueKing/bkui-vue2/issues/319)
* **[fix]**:
    - [Pagination 分页](#/pagination) 小型分页器，页码跳转限制输入整数
    - [Sideslider 侧栏](#/sideslider) Sideslider 侧栏销毁后删除 dom 节点
    - [Cascade 级联选框](#/cascade) 修复当层级过多宽度超过其上方的下拉框时，展示错误的问题 [#293](https://github.com/TencentBlueKing/bkui-vue2/issues/293)
    - [Select 下拉选框](#/select) 修复配置了 allow-create 和搜索框，就会自动聚焦到搜索框上的问题 [#298](https://github.com/TencentBlueKing/bkui-vue2/issues/298)
    - [Tooltips 工具提示 （指令）](#/tooltips) 修复 tooltip allowHTML 配置单词拼错的问题
* **[update]**:
    - [Navigation 导航](#/navigation) 样式优化
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 样式优化
    - [Table 表格](#/table) 示例优化
    - [TimePicker 时间选择器](#/time-picker) 新增示例
    - [Sideslider 侧栏](#/sideslider) 示例优化
    - 优化部分组件样式
    - 所有示例新增 github 文档链接地址

---

### 2.4.14 {page=#/changelog}

* **[update]**:
    - tooltips 配置

---

### 2.4.13 {page=#/changelog}

* **[add]**:
    - [Transfer 穿梭框](#/transfer) 支持设置 disabled 状态
* **[fix]**:
    - [Input 输入框](#/input) 修复当不配置 `precision` 属性时无法输入小数点的问题
    - [Transfer 穿梭框](#/transfer) 修复 Transfer 穿梭框组件设置排序不生效的问题
    - [Select 下拉选框](#/select) bugfix: select 分组选中状态

---

### 2.4.12 {page=#/changelog}
###### 2022.07.22

* **[add]**:
    - [SearchSelect 查询选择器](#/searchselect) 新增 `input-unfocus-clear` 属性及 `input-click-outside` 事件，支持失焦时清空输入框内容
    - [Select 下拉选框](#/select) 新增 `searchable-min-count` 属性，支持配置当选项数量超过一定数量时才会（默认 0 个）显示搜索框，仅在开启搜索时生效
* **[fix]**:
    - [Input 输入框](#/input) 修复 type 为 number 时数字小键盘输入不生效问题 [#287](https://github.com/TencentBlueKing/bkui-vue2/issues/287)
    - [Slider 滑动选择器](#/slider) 修复 `min-value`, `max-value` 输入框问题
* **[update]**:
    - [Table 表格](#/table) 移除 `showPaginationInfo` 属性并兼容已有逻辑
    - [Table 表格](#/table) `virtual-render` 属性配置说明补充
    - [Select 下拉选框](#/select) `id-key` 属性文档调整

---

### 2.4.11 {page=#/changelog}
###### 2022.06.10

* **[add]**:
    - [Select 下拉选框](#/select) 新增 `allow-enter` 属性，用户在输入框输入关键词后，按下 enter 直接选择搜索结果，默认为 `true` [#273](https://github.com/TencentBlueKing/bkui-vue2/issues/273)
    - [Select 下拉选框](#/select) 新增[创建自定义选项](#/select?anchor=chuang-jian-zi-ding-yi-xuan-xiang) [#256](https://github.com/TencentBlueKing/bkui-vue2/issues/256)
* **[fix]**:
    - [Radio 单选框](#/radio) 修复多个 radio-group name 有可能一样的问题 [#272](https://github.com/TencentBlueKing/bkui-vue2/issues/272)
    - [Switcher 开关](#/switcher) Switcher 组件 size 属性默认值修改为 `normal` [#270](https://github.com/TencentBlueKing/bkui-vue2/issues/270)
    - [Input 输入框](#/input) 修复数字文本框输入非法字符问题 [#269](https://github.com/TencentBlueKing/bkui-vue2/issues/269)
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 修复 dropdown-menu 高度的问题
* **[update]**:
    - [Divider 分割线](#/divider) divider 组件样式用 class 实现而不是行内样式 [#271](https://github.com/TencentBlueKing/bkui-vue2/issues/271)
    - [Swiper 轮播图](#/swiper) 优化 swiper 计算高度、宽度的规则

---

### 2.4.9 {page=#/changelog}
###### 2022.05.19

* **[add]**:
    - [Table 表格](#/table) 翻页事件 `page-change`，返回参数增加`每页条数`
    - [Pagination 分页](#/pagination) 支持[跳转分页](#/pagination?anchor=tiao-zhuan-fen-ye)
    - [Info 提示框](#/info-box) 新增 `closeFn`，用来单独配置[关闭的回调函数](#/info-box?anchor=guan-bi-icon-hui-diao-zi-ding-yi)，默认与 `cancelFn` 一致
    - [Tab 选项卡](#/tab) 支持新增按钮前添加[自定义插槽内容](#/tab?anchor=xin-zeng-an-niu-qian-tian-jia-zi-ding-yi-cha-cao-nei-rong)
* **[fix]**:
    - [Spin 加载中](#/spin) spin 组件增加 default 类型
    - [ResizeLayout 可拉伸布局](#/resize-layout) 修复拖动中设置了 disabled=true 不再触发 handleMouseMove 方法的问题 [#251](https://github.com/TencentBlueKing/bkui-vue2/issues/251)
    - [TimePicker 时间选择器](#/time-picker) 修复时间组件支持失焦后生效的问题 [#235](https://github.com/TencentBlueKing/bkui-vue2/issues/235)
    - [Loading 加载](#/loading) 修复 loading 指令出现 el.viewmodel.$mount 读取错误的问题 [#258](https://github.com/TencentBlueKing/bkui-vue2/issues/258)
* **[update]**:
    - [Select 下拉选框](#/select) 调整下拉框禁用时箭头颜色

---

### 2.4.8 {page=#/changelog}
###### 2022.04.21

* **[add]**:
    - [DatePicker 日期选择器](#/date-picker) 新增 `cell-class` 配置项以支持自定义日期样式 [#229](https://github.com/TencentBlueKing/bkui-vue2/issues/229)
    - [Table 表格](#/table) `bk-table-column` 增加 `tippy-options` 属性自定义配置表格的设置弹层 [#232](https://github.com/TencentBlueKing/bkui-vue2/issues/232)
* **[fix]**:
    - [Slider 滑动选择器](#/slider) 修复 min-value 设置为负值时无法正确渲染的问题 [#231](https://github.com/TencentBlueKing/bkui-vue2/issues/231)
    - [TimePicker 时间选择器](#/time-picker) 修复 timer-picker 弹框偶发不会关闭的问题（页面存在多个 timer-picker 时 clickoutside 混乱的问题）
* **[update]**:
    - [Swiper 轮播图](#/swiper) 监听父容器高宽变化
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 优化虚拟滚动折叠展开逻辑
    - [Info 提示框](#/info-box) `maskClose`, `escClose` 默认值改为 `true`
    - [Color 色彩](#/color), [Font 字体](#/font) 文档页面样式优化

---

### 2.4.7 {page=#/changelog}
###### 2022.03.24

* **[add]**:
    - [Select 下拉选框](#/select) [支持自定义输入](#/select?anchor=zhi-chi-zi-ding-yi-shu-ru) [#224](https://github.com/TencentBlueKing/bkui-vue2/issues/224)
    - [Select 下拉选框](#/select) [支持滚动加载](#/select?anchor=xia-la-lie-biao-gun-dong-fen-ye) [#223](https://github.com/TencentBlueKing/bkui-vue2/issues/223)
* **[fix]**:
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 修复 show 和 hide 事件无法监听的问题 [#217](https://github.com/TencentBlueKing/bkui-vue2/issues/217)

---

### 2.4.6 {page=#/changelog}
###### 2022.03.03

* **[add]**:
    - [Badge 标记](#/badge) badge 组件支持[不包裹任何元素，独立使用](#/badge?anchor=bu-bao-guo-ren-he-yuan-su-du-li-shi-yong) [#18](https://github.com/TencentBlueKing/bkui-vue2/issues/18)
    - [Big Tree 大树](#/big-tree) 新增 enable-title-tip 配置用来开启节点的 title 提示（浏览器的 title 提示）
    - [Cascade 级联选框](#/cascade) 支持触发表单校验
* **[fix]**:
    - [Table 表格](#/table) 修复表格会被外部 white-space 样式影响问题
    - [Affix 图钉](#/affix) 修复 affix 组件设置 target 后无宽度问题
    - [Input 输入框](#/input) 数字输入框，修复设置最大最小输入范围清空内容后，点击加减控制图标，无论限制范围(min, max)，都会从 1 开始递增的问题

---

### 2.4.5 {page=#/changelog}
###### 2022.01.20

* **[add]**:
    - [Upload 文件上传](#/upload) 新增[大文件分片上传](#/upload?anchor=da-wen-jian-fen-pian-shang-chuan)
    - [Select 下拉选框](#/select) 新增下拉框高度在[标签多选](#/select?anchor=duo-xuan)形式是否自动撑开的配置 `auto-height`
* **[fix]**:
    - [Cascade 级联选框](#/cascade) 修复禁用状态下依旧能删除 tag 的问题
    - [Table 表格](#/table) 修复开启定位和自动行高拖动修改列宽，影响行高没有重新计算定位行高的问题
* **[update]**:
    - [ZoomImage 缩放图组件](#/zoom-image) 样式优化
    - [Divider 分割线](#/divider) 样式优化
    - [Image 图片](#/image) 示例优化

---

### 2.4.4 {page=#/changelog}
###### 2022.01.10

* **[fix]**:
    - [Loading 加载](#/loading) 修复计算变量 set 问题

---

### 2.4.3 {page=#/changelog}
###### 2022.01.05

* **[fix]**:
    - [Table 表格](#/table) 添加 tippy-options 属性，对翻页下拉的自定义配置 [#188](https://github.com/TencentBlueKing/bkui-vue2/issues/188)
    - 去掉代码中无用的日志

---

### 2.4.2 {page=#/changelog}
###### 2021.12.31

* **[fix]**:
    - 修复 provide/inject 无默认值的问题
    - 修复示例页面的一些小问题

---

### 2.4.1 {page=#/changelog}
###### 2021.12.30

* **[add]**:
    - [Process 步骤](#/process) 支持自定义步骤状态 [#182](https://github.com/TencentBlueKing/bkui-vue2/issues/182)
    - [Spin 加载中](#/spin) 新增 info 主题 [#183](https://github.com/TencentBlueKing/bkui-vue2/issues/183)
    - [Image 图片](#/image) 图片预览增加蒙层关闭配置，增加 tooltips 以及样式优化
* **[fix]**:
    - [Dialog 对话框](#/dialog) dialog 组件自定义 z-index 不生效 [#180](https://github.com/TencentBlueKing/bkui-vue2/issues/180)
* **[update]**:
    - [Table 表格](#/table) table 底部加载样式调整 [#183](https://github.com/TencentBlueKing/bkui-vue2/issues/183)
    - [Checkbox 多选框](#/checkbox) 更改 checkbox-group 注册子组件方式
    - [Cascade 级联选框](#/cascade) 组件支持自定义节点展示的内容

---

### 2.4.0 {page=#/changelog}
###### 2021.12.10

* **[add]**:
    - [Select 下拉选框](#/select) 支持[分组全选](#/select?anchor=fen-zu--quan-xuan) [#56](https://github.com/TencentBlueKing/bkui-vue2/issues/56)
    - [SearchSelect 查询选择器](#/searchselect) 新增 overflow 下 tag 加入 +num 显示 [#145](https://github.com/TencentBlueKing/bkui-vue2/issues/145)
    - [Table 表格](#/table) 新增[底部加载](#/table?anchor=di-bu-jia-zai) [#147](https://github.com/TencentBlueKing/bkui-vue2/issues/147)
    - [Big Tree 大树](#/big-tree) 增加 [size 选项](#/big-tree?anchor=shu-de-chi-cun)
    - [DatePicker 日期选择器](#/date-picker) 新增 `header` slot
    - [Breadcrumb 面包屑](#/breadcrumb) [支持返回配置以及前置插槽](#/breadcrumb?anchor=zhi-chi-fan-hui-pei-zhi-yi-ji-qian-zhi-cha-cao)
* **[fix]**:
    - [Loading 加载](#/loading) 修复 z-index 的默认值 0 导致不传参时层级错误问题
    - [Select 下拉选框](#/select) 修复 z-index 设置不生效问题
    - [TagInput 标签输入框](#/tag) tag-input 修复单选在多个 search-key 下出错的问题
    - [Table 表格](#/table) 修复 table 组件在 dialog 中高度失效问题；修复 table 组件开启 tooltip 后快速滚动列表 tooltip 不能及时消失的问题
    - [Cascade 级联选框](#/cascade) 修复级联菜单多选情况下动态加载的问题；修复级联菜单宽度小时，tag 上删除按钮样式错乱的问题

---

### 2.3.10 {page=#/changelog}
###### 2021.11.11

* **[add]**:
    - [BackTop 返回顶部](#/back-top) 新增返回顶部组件 [#144](https://github.com/TencentBlueKing/bkui-vue2/issues/144)
    - [Input 输入框](#/input) 新增 [hover 时才显示 clear 按钮](#/input?anchor=hover-shi-cai-xian-shi-clear-an-niu) [#20](https://github.com/TencentBlueKing/bkui-vue2/issues/20)
    - [Progress 进度条](#/progress) 添加 fixed 小数点位数配置
    - [Notify 通知提示](#/notify) 支持[使用HTML方式渲染Message内容](#/notify?anchor=shi-yonghtml-fang-shi-xuan-ranmessage-nei-rong) [#137](https://github.com/TencentBlueKing/bkui-vue2/issues/137)
    - [Message 消息提示](#/message) 修复 message 位置计算的问题
* **[fix]**:
    - [Tab 选项卡](#/tab) 修复文档单词拼写错误
    - [Tree 树](#/tree) 修复 checkbox 选中状态模糊样式问题
* **[update]**:
    - [Table 表格](#/table) 样式优化

---

### 2.3.9 {page=#/changelog}
###### 2021.10.28

* **[add]**:
    - [Tab 选项卡](#/tab) 新增[自定义新增按钮](#/tab?anchor=zi-ding-yi-xin-zeng-an-niu) [#88](https://github.com/TencentBlueKing/bkui-vue2/issues/88)
    - [Cascade 级联选框](#/cascade) 新增 `ext-popover-cls` 属性，用于给弹窗框添加样式 [#110](https://github.com/TencentBlueKing/bkui-vue2/issues/110)
    - [Cascade 级联选框](#/cascade) 新增 `limit-one-line` 属性，支持只显示一行
* **[fix]**:
    - [Pagination 分页](#/pagination) 修复 Pagination 紧凑效果 鼠标移到最后一个出现显示异常的问题 [#95](https://github.com/TencentBlueKing/bkui-vue2/issues/95)
    - [Cascade 级联选框](#/cascade) 修复设置 scroll-width 在第二级以后不生效的问题
    - [Tree 树](#/tree) 修复树组件跨组件拖拽问题 [#94](https://github.com/TencentBlueKing/bkui-vue2/issues/94)
    - [Upload 文件上传](#/upload) 修复 upload 组件文字显示问题; 修复 button 类型回填问题 [#99](https://github.com/TencentBlueKing/bkui-vue2/issues/99)
    - [Table 表格](#/table) 表格宽度计算
    - 修复 [DropdownMenu 下拉菜单], [Select 下拉选框], [DatePicker 日期选择器] 下拉间距不统一的问题 [#98](https://github.com/TencentBlueKing/bkui-vue2/issues/98)
* **[update]**:
    - [Slider 滑动选择器](#/slider) 滑动选择器输入框样式优化 [#100](https://github.com/TencentBlueKing/bkui-vue2/issues/100)

---

### 2.3.8 {page=#/changelog}
###### 2021.10.14

* **[add]**:
    - [Affix 图钉](#/affix) 新增 Affix 图钉组件
    - [Loading 加载](#/loading) 新增[标签用法](#/loading?anchor=biao-qian-yong-fa)
    - [Card 卡片](#/card) card 的 header-slot 支持传入 disableHeaderStyle 禁用行高
    - [Tab 选项卡](#/tab) 新增 [ActiveBar 样式配置](#/tab?anchor=activebar-yang-shi)
    - [Tree 树](#/tree) 修复 Tree 异步加载时 loading 图标靠下的问题
    - [Card 卡片](#/card) card 的 header-slot 支持传入 disableHeaderStyle 禁用行高
* **[fix]**:
    - [Button 基础按钮](#/button) 修复 button 组件在 text=true 时 theme 失效的问题
    - [Select 下拉选框](#/select) 修复 select 开启虚拟滚动时鼠标拖动滚动条到最后，select自动关闭的问题
    - [Tab 选项卡](#/tab) 修复 border-card 嵌入 unborder-card 样式问题
    - 修复表单内 SearchSelect 查询选择器、Select 下拉选框、Checkbox 多选框、Radio 单选框无法正常校验的问题
* **[update]**:
    - [Tree 树](#/tree) 节点边距优化
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 优化虚拟滚动折叠展开逻辑

---

### 2.3.7 {page=#/changelog}
###### 2021.09.23

* **[add]**:
    - [TagInput 标签输入框](#/tag) 增加 clear 按钮在 hover 才显示的交互
    - [Dialog 对话框](#/dialog) 增加 dialog 关闭时逻辑 beforeClose
* **[fix]**:
    - [Table 表格](#/table) 修复 table-column 宽度计算的问题；修复 Table 虚拟滚动自适应宽度样式问题
    - [Swiper 轮播图](#/swiper) 修复动态设置 list/pics 属性时没有更新尺寸的问题
    - [Form 表单](#/form) 表单验证问题修复
    - [TimePicker 时间选择器](#/time-picker) 修复禁止选择的时间，滚动可以选择的问题
    - 导出 bkVirtualRender 组件以及 css

---

### 2.3.6 {page=#/changelog}
###### 2021.09.10

* **[add]**:
    - [Spin 加载中](#/spin) 新增 Spin 组件
    - [v-bk-copy 复制指令](#/directives?anchor=v-bk-copy) 新增复制指令
    - [Table 表格](#/table?anchor=xu-ni-gun-dong-xuan-ran-pei-zhi) 支持虚拟滚动渲染配置
* **[fix]**:
    - [Upload 文件上传](#/upload) 修复 upload 组件图片回填没有动态监听的问题
    - [Tab 选项卡](#/tab) 修复 `type` 配置为 `unborder-card` 时，标识选中的边框样式位置不正确的问题；修复组件 tab 一开始下划线没有，点击后才出现的问题
    - [Cascade 级联选框](#/cascade) 修复多选框不能选择的问题；cascade 级联选框 搜索选中第三层目录时，handleChange 回调方法里的 selectList 参数为空的问题
    - [Table 表格](#/table) 修复调用 clearFilter 方法时会出现栈溢出的问题
    - [Form 表单](#/form) 修复 form 组件的背景色没有设置的问题

---

### 2.3.5 {page=#/changelog}
###### 2021.09.02

* **[add]**:
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 下拉框增加 position-fixed 属性支持
    - support vetur intelil sence
* **[fix]**:
    - [Table 表格](#/table) 修复 table 组件调用 clearFilter 方法时会出现栈溢出的问题
    - [Breadcrumb 面包屑](#/breadcrumb) 修复面包屑组件颜色问题
    - [Cascade 级联选框](#/cascade) 修复 cascade 级联选框搜索选中第三层目录时，handleChange 里的 selectList 值为空的问题
* **[update]**:
    - [Slider 滑动选择器](#/slider) 滑动选择器滑动结束时应该删除绑定的事件
    - [Tree 树](#/tree) 拖曳时，鼠标样式去掉绿色加号

---

### 2.3.4 {page=#/changelog}
###### 2021.07.21

* **[add]**:
    - [Tab 选项卡](#/tab) 新增[拖拽排序](#/tab?anchor=tuo-zhuai-pai-xu)

---

### 2.3.3 {page=#/changelog}
###### 2021.07.13

* **[fix]**:
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 修复 popover 实例销毁问题

---

### 2.3.2 {page=#/changelog}
###### 2021.07.09

* **[add]**:
    - [FixedNavbar 悬浮导航](#/fixed-navbar) 新增悬浮导航组件
    - [Cascade 级联选框](#/cascade) 级联选择器增加搜索 search 事件
* **[fix]**:
    - [Form 表单](#/form) 修复 form-item 清除错误没有清理完全的问题
    - [Button 基础按钮](#/button) 修改 button 默认宽度 & 间距
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 修复下拉菜单出现方向错乱的问题
* **[update]**:
    - [TagInput 标签输入框](#/tag) 边框颜色调整
    - [Popover 弹出框提示](#/popover) 更新配置

---


### 2.3.1 {page=#/changelog}
###### 2021.06.02

* **[add]**:
    - [Message 消息提示](#/message) message 组件新增[内容隐藏时自动显示复制按钮](#/message?anchor=nei-rong-chao-chu-bei-jie-duan-shi-xian-shi-fu-zhi-an-niu)
* **[fix]**:
    - [Sideslider 侧栏](#/sideslider) 修复 sideslider 默认打开时，show-mask 属性不生效的问题
    - [TagInput 标签输入框](#/tag) 修复 tag-input 组件存在 xss 漏洞的问题
* **[update]**:
    - [Icon 图标](#/icon) icon 组件使用文档更新

---

### 2.3.0 {page=#/changelog}
###### 2021.04.29

* **[fix]**:
    - [Slider 滑动选择器](#/slider) 修复 value 外部值变化，组件状态不更新的问题
* **[update]**:
    - highlight 版本更新

---

### 2.2.19 {page=#/changelog}
###### 2021.04.13

* **[fix]**:
    - [Upload 文件上传](#/upload) 修复 accept 动态改变失效问题
    - [Table 表格](#/table) 修复表格在没有初始列的情况下引起死锁的问题

---

### 2.2.18 {page=#/changelog}
###### 2021.04.08

* **[fix]**:
    - rollup 新增 replace 插件解决环境变量 `process.env` 的问题

---

### 2.2.17 {page=#/changelog}
###### 2021.04.07

* **[add]**:
    - [ResizeLayout 可拉伸布局](#/resize-layout) 新增 ResizeLayout 可拉伸布局组件
    - [Tab 选项卡](#/tab) 选项卡切换时添加过度动画；增加 tab 的 labelHeight 配置
    - [Transfer 穿梭框](#/transfer) 增加左右选项卡 slot 配置，参见[自定义 选项卡 模板](#/transfer?anchor=zi-ding-yi-xuan-xiang-qia-mo-ban)
    - [Steps 步骤](#/steps) 支持[自定义步骤状态](#/steps?anchor=zi-ding-yi-bu-zou-zhuang-tai)
    - [Input 输入框](#/input) 支持 input-style 配置
* **[fix]**:
    - [Big Tree 大树](#/big-tree) 修复动态设置连线时显示错误的问题
    - [Table 表格](#/table) 修复无弹性宽度列时表格样式异常的问题
    - [Cascade 级联选框](#/cascade) id 为 0、null、'' 支持
    - [Select 下拉选框](#/select) 修复 select 的事件触发与 tag 展示问题；修复 [tree-select](#/select?anchor=tree-select) 搜索内容后，再勾选节点时不会触发 opions 更新的问题
    - [Input 输入框](#/input) 修复 ResizeObserver 兼容问题。老旧浏览器也不设置 polyfill 了 <!-- 2.2.17-beta.4 -->
    - [Slider 滑动选择器](#/slider) 修复 slider 组件中使用 Vue.use 来加载 input 组件导致组件库调用者设置的 namespace 失效的问题。应该使用局部注册的方式来加载其他组件，使用 use 的问题会导致组件库调用者设置的 namespace 失效 <!-- 2.2.17-beta.3 -->
    - [Tab 选项卡](#/tab) 修复选项卡 parent 获取问题 <!-- 2.2.17-beta.2 -->
    - [Radio 单选框](#/radio) [radio-button](#/radio?anchor=radio-button) 修复禁用态按钮 z-index：-1 的样式在某些布局下不显示的问题 <!-- 2.2.17-beta.2 -->
    - [Popconfirm 弹出确认框](#/popconfirm) 去掉 popconfirm 的默认宽度，由用户设置或内容自动撑开 <!-- 2.2.17-beta.1 -->
    - [Info 提示框](#/info-box) 确定按钮 loading 时，closeIcon 会自动隐藏

---

### 2.2.16 {page=#/changelog}
###### 2021.03.10

* **[fix]**:
    - `bk-star` 补充组件 name

---

### 2.2.15 {page=#/changelog}
###### 2021.03.10

* **[add]**:
    - [Tag 标签](#/tags) 新增 Tag 标签组件
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 添加索引区插槽
    - [Select 下拉选框] 新增[简约风格选择器](#/select?anchor=jian-yue-feng-ge-xuan-ze-qi)；新增[收藏案例](#/select?anchor=shou-cang-an-li)
    - [Loading 加载](#/loading) 组件增加 [spin](#/loading?anchor=pei-zhi-mode-loading-de-xian-shi-xing-shi) 配置
    - [DatePicker 日期选择器](#/date-picker) 新增[简约风格日期选择器](#/date-picker?anchor=jian-yue-feng-ge-ri-qi-xuan-ze-qi)
    - [TimePicker 时间选择器](#/time-picker) 新增[简约风格时间选择器](#/time-picker?anchor=jian-yue-feng-ge-shi-jian-xuan-ze-qi)
    - [Input 输入框](#/input) 新增[简约风格输入框](#/input?anchor=jian-yue-feng-ge-shu-ru-kuang)
    - [Collapse 折叠面板](#/collapse) 支持配置[展开/收起动画状态改变的回调事件](#/collapse?anchor=zhan-kai-shou-qi-dong-hua-zhuang-tai-gai-bian-de-hui-diao-shi-jian)
* **[fix]**:
    - [Pagination 分页](#/pagination) 修复小型分页组件不对齐问题
* **[update]**:
    - [Table 表格](#/table) setHeight 时，当 el 不存在时，不再判断 value
    - [Loading 加载](#/loading) 当设置 immediate 为 true 去除 transition enter 时的 duration
    - [Popconfirm 弹出确认框](#/popconfirm) 样式优化

---

### 2.2.14 {page=#/changelog}
###### 2021.02.04

* **[fix]**:
    - [ComposeFormItem 表单项组合](#/compose-form-item) 补充组件 name

---

### 2.2.13 {page=#/changelog}
###### 2021.02.02

* **[add]**:
    - [ComposeFormItem 表单项组合](#/compose-form-item) 新增表单组合组件 <!-- 2.2.13-beta.2 -->
    - [Card 卡片](#/card) collapse-status 状态支持 sync
    - [Checkbox 多选框](#/checkbox) 添加 before-change 配置
    - [Table 表格](#/table) table-column 添加 before-select-change, before-select-all-change 配置
* **[fix]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 修改布局，取消外层遮挡
    - [Tree 树](#/tree) 修复用 jsx 的方式去使用 tpl 会报错的问题
    - [Info 提示框](#/info-box) 多个 info 实例关闭不生效 <!-- 2.2.13-beta.3 -->
    - [Input 输入框](#/input) 修复 input 在 value 为 null 时，可能报错的问题 <!-- 2.2.13-beta.1 -->
    - [TagInput 标签输入框](#/tag) 修复单选状态下删除并失焦时未更新数据的问题
* **[update]**:
    - [Upload 文件上传](#/upload) 更新上传 zip 文件示例的 accept 属性配置 <!-- 2.2.13-beta.2 -->

---

### 2.2.12 {page=#/changelog}
###### 2021.01.07

* **[add]**:
    - [Pagination 分页](#/pagination) 添加[小型分页](#/pagination?anchor=xiao-xing-fen-ye)
    - [Select 下拉选框](#/select) 添加[分组-展开\收起功能](#/select?anchor=fen-zu--zhan-kai-shou-qi-gong-neng)
    - [Exception 异常提示](#/exception) 新增登入提示类型及灰色底示例
* **[fix]**:
    - [Tab 选项卡](#/tab) 修复选项卡位置为左右时, bk-tab-section 没有空间的问题
    - [Input 输入框](#/input) 添加 show-word-limit 配置，修复字数限制显示逻辑

---

### 2.2.11 {page=#/changelog}
###### 2020.12.22

* **[add]**:
    - [Select 下拉选框](#/select) 新增 show-on-init 默认展示下拉列表的配置 <!-- 2.2.10-prev.1 -->
    - [Tab 选项卡](#/tab) 新增 render-label 配置 <!-- 2.2.10-prev.1 -->
    - [Big Tree 大树](#/big-tree) 新增默认选中节点展开 <!-- 2.2.10-prev.1 -->
    - [Timeline 时间轴](#/timeline) 标题支持 [slot](#/timeline?anchor=zhi-chi-slot) <!-- 2.2.10-prev.1 -->
* **[fix]**:
    - [Collapse 折叠面板](#/collapse) 修复 collapse 手风琴模式下的双击展开逻辑 <!-- 2.2.10-prev.1 -->
    - [Input 输入框](#/input) 修复 input 在无 icon 时，maxlength 位置错位的问题 <!-- 2.2.10-prev.1 -->
    - [Table 表格](#/table) 固定列对齐问题修复 <!-- 2.2.10-prev.1 -->

---

### 2.2.9 {page=#/changelog}
###### 2020.12.08

* **[add]**:
    - [Table 表格](#/table) 表格行/单元格点击事件回调参数提供行索引及列索引 <!-- 2.2.9-prev.1 -->
    - [Table 表格](#/table) 支持 `auto-scroll-to-top` 配置，表格分页变化时容器可自动滚动到顶部 <!-- 2.2.9-prev.1 -->
    - [Big Tree 大树](#/big-tree) 增加目录结构属性 `isFolder` <!-- 2.2.9-prev.1 -->
    - [ColorPicker 颜色选择器](#/color-picker) 支持 transfer 配置，控制颜色面板是否出现在 body 内 <!-- 2.2.9-prev.1 -->
    - [Steps 步骤](#/steps) title 支持点击 <!-- 2.2.9-prev.1 -->
    - [Upload 文件上传](#/upload?anchor=bian-ji-tou-xiang) 编辑头像，图片回传。theme 默认为 picture，默认值选择 jpg 与 png <!-- 2.2.9-prev.1 -->
    - [TimePicker 时间选择器](#/time-picker) 新增取消起止时间的限制属性 `allow-cross-day`，[允许时间段进行跨天选择](#/time-picker?anchor=yun-xu-shi-jian-duan-jin-xing-kua-tian-xuan-ze) <!-- 2.2.9-beta.1 -->
* **[fix]**:
    - [Big Tree 大树](#/big-tree) 修复连线时候，结点不对齐 <!-- 2.2.9-prev.1 -->
    - [SearchSelect 查询选择器](#/searchselect) keyenter事件派发触发时机在数据改变之后
* **[update]**:
    - [Table 表格](#/table) 存在固定列时，避免二次渲染不可见的单元格 <!-- 2.2.9-prev.1 -->
    - [Divider 分割线](#/divider) 分割线默认颜色优化
    - [Tooltips 工具提示 （指令）](#/tooltips) 文档补充 allowHtml 配置相关说明
    - [Image 图片](#/image) 图片 UI、交互、功能增强
    - [TimePicker 时间选择器](#/time-picker) 修复 `allow-cross-day` 属性生效限制, 此属性只在 time-picker 组件 type 为 timerange 时生效 <!-- 2.2.9-beta.2 -->

---

### 2.2.8 {page=#/changelog}
###### 2020.11.25

* **[add]**:
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 增加内容区滚动 <!-- 2.2.8 -->
    - [Timeline 时间轴](#/timeline) 支持设置 font 相关默认样式 <!-- 2.2.8 -->
    - [Icon 图标](#/icon) 支持[使用 svg 图标](#/icon?anchor=shi-yong-svg-tu-biao-zhi-chi-cai-se-tu-biao) <!-- 2.2.8 -->
* **[update]**:
    - [Tree 树](#/tree) 文档实例更新: 自定义模板时未显示增加按钮修复 <!-- 2.2.8 -->

---

### 2.2.7 {page=#/changelog}
###### 2020.11.18

* **[add]**:
    - [Steps 步骤](#/steps) 添加 beforeChange 钩子函数 <!-- 2.2.7-beta.3 -->
    - [TagInput 标签输入框](#/tag) 添加 createTagValidator 自定义标签校验函数 <!-- 2.2.7-beta.3 -->
* **[fix]**:
    - [Select 下拉选框](#/select) 修复 select 多选后清空异常问题；修复 placeholder 不显示的问题 <!-- 2.2.7-beta.4 -->
    - [Dialog 对话框](#/dialog) 修复页面切换后 dialog 组件产生的 dom 不销毁的问题 <!-- 2.2.7-beta.1 -->

---

### 2.2.6 {page=#/changelog}
###### 2020.11.10

* **[add]**:
    - [Divider 分割线](#/divider) 新增分割线组件 <!-- 2.2.6 -->
    - [SearchSelect 查询选择器](#/searchselect) 支持上下按键选择 <!-- 2.2.6 -->
    - [Alert 警告](#/alert?anchor=zi-ding-yislot) 支持 slot <!-- 2.2.6 -->
    - [Select 下拉选框](#/select?anchor=tree-select) 支持 tree-select <!-- 2.2.6 -->
    - [RoundProgress 圆形进度](#/round-progress) 支持设置进度条值的单位 `num-unit`；支持直接设置进度条里面显示的内容 `content` <!-- 2.2.6-beta.2 -->
    - [Big Tree 大树](#/big-tree) 新增 `options.folderKey` 配置，可设置节点 `是否是目录`。可用来设置空目录和子节点的不同展现形式 <!-- 2.2.6-beta.2 -->
    - [Big Tree 大树](#/big-tree) 新增左侧缩进配置项 `padding` <!-- 2.2.6-beta.1 -->
    - [ColorPicker 颜色选择器](#/color-picker) 支持禁用状态 <!-- 2.2.6-beta.1 -->
    - [Popover 弹出框提示](#/popover) 新增[引用 (ref) 方法](#/popover?anchor=yin-yong-ref-fang-fa)示例
    - [Pagination 分页](#/pagination) `limit` 配置支持 `.sync` 修饰符
* **[fix]**:
    - [SearchSelect 查询选择器](#/searchselect) 修复选项为空报错问题 <!-- 2.2.6 -->
    - [Collapse 折叠面板](#/collapse) 修复手风琴模式，初次点击不生效的问题 <!-- 2.2.6 -->
* **[update]**:
    - [ColorPicker 颜色选择器](#/color-picker) ColorPicker 颜色选择器颜色未选择时样式修改 <!-- 2.2.6 -->

---

### 2.2.5 {page=#/changelog}
###### 2020.10.14

* **[add]**:
    - [Breadcrumb 面包屑](#/breadcrumb) 新增面包屑组件 <!-- 2.2.5-beta.3 -->
    - [Image 图片](#/image) 新增图片组件 <!-- 2.2.5-beta.2 -->
    - [Cascade 级联选框](#/cascade) 支持数据 key 的配置
    - [Transfer 穿梭框](#/transfer) sourcelist 支持赋值空数组
* **[fix]**:
    - [Input 输入框](#/input) 修复设置 value 时，清除 icon 点击无效的问题 <!-- 2.2.5-beta.5 -->
    - [Upload 文件上传](#/upload) 图片文件 accept 属性限制无效问题修复
    - 修复 dialog 嵌套 sideslider 层级问题
* **[update]**:
    - [Navigation 导航](#/navigation) 子组件名称优化 `navigation-group` => `navigation-menu-group` <!-- 2.2.5-beta.1 -->
    - [Upload 文件上传](#/upload) 文件大小校验错误增加异常抛出；limit 设置为 1 时，重新上传时支持覆盖原上传文件；文案修改
    - [Navigation 导航](#/navigation) 示例优化
    - [DropdownMenu 下拉菜单](#/dropdown-menu)，[Select 下拉选框](#/select) 优化禁用的样式
    - [Info 提示框](#/info-box)，[Dialog 对话框](#/dialog) 提示框确定按钮配置异步 loading

---

### 2.2.4 {page=#/changelog}
###### 2020.09.15

* **[add]**:
    - [Pagination 分页](#/pagination) 新增[小型分页](#/pagination?anchor=xiao-xing-fen-ye)
* **[fix]**:
    - [Upload 文件上传](#/upload) 修复超出限制提示出现后无法再次上传的问题

---

### 2.2.3 {page=#/changelog}
###### 2020.09.15

* **[add]**:
    - [Upload 文件上传](#/upload) 支持限制文件上传个数；tab 支持
    - [Loading 加载](#/loading) 支持配置自定义 zIndex
    - [Big Tree 大树](#/big-tree) 新增 is-checked 样式绑定
    - [Select 下拉选框](#/select) 新增[虚拟滚动](#/select?anchor=kai-qi-xu-ni-gun-dong)
* **[update]**:
    - [Tooltips 工具提示 （指令）](#/tooltips) 动画时间 `duration` 优化为 `0`，默认情况下，提示内容会直接出现，不会存在延迟

---

### 2.2.2 {page=#/changelog}
###### 2020.09.01

* **[add]**:
    - [ColorPicker 颜色选择器](#/color-picker) 打开面板时，光标定位到 HEX 输入框并选中内容
    - [Info 提示框](#/info-box) 支持配置宽度
    - [Badge 标记](#/badge) 新增白色描边
* **[fix]**:
    - [Input 输入框](#/input) 动态修改 input 的 padding-right，防止图标与内容冲突
    - [Dialog 对话框](#/dialog) 修复弹框消失后，body 上加的 padding 没有去掉的问题
* **[update]**:
    - [Tab 选项卡](#/tab) 调整 v-for bk-tab-label-item key 值 <!-- 2.2.2-beta.1 -->
    - [Upload 文件上传](#/upload) 上传组件错误信息设置行高，避免被父组件样式影响 <!-- 2.2.2-beta.1 -->
    - [自定义指令 v-bk-overflow-tips](#/directives?anchor=v-bk-overflow-tips) 优化溢出判断

---

### 2.2.1 {page=#/changelog}
###### 2020.08.18

* **[add]**:
    - tab 支持：[Slider 滑动选择器](#/slider)
    - [Switcher 开关](#/switcher) 增加 `pre-check` 配置，用于[前置状态检测](#/switcher?anchor=qian-zhi-zhuang-tai-jian-ce)
    - [Loading 加载](#/loading) 引入 zIndexManager
    - [ColorPicker 颜色选择器](#/color-picker) 增加展开收起三角 icon 动画
    - [Table 表格](#/table) bk-table-column 新增 filter-searchable 配置，用于配置筛选项是否可搜索
* **[fix]**:
    - [Big Tree 大树](#/big-tree) 修复开启虚拟滚动后搜索为空默认UI滚动条异常的问题
    - 修复 popManager container 没有激活导致遮罩在弹框前面的问题 <!-- 2.2.1-beta.2 -->
    - 修复全量引入组件库时，[Transition 过度动画](#/transition)  未注册 name 的问题 <!-- 2.2.1-beta.1 -->
* **[update]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 优化虚拟滚动滚动体验
    - [Radio 单选框](#/radio)、[Checkbox 多选框](#/checkbox) 聚焦样式优化
    - [Select 下拉选框](#/select) 下拉选项文本溢出显示优化

---

### 2.2.0 {page=#/changelog}
###### 2020.08.04

* **[add]**:
    - tab 支持：[Select 下拉选框](#/select), [DropdownMenu 下拉菜单](#/dropdown-menu), [ColorPicker 颜色选择器](#/color-picker), [Switcher 开关](#/switcher), [Cascade 级联选框](#/cascade), [Checkbox 多选框](#/checkbox), [Radio 单选框](#/radio), [Input 输入框](#/input) <!-- 2.2.0-beta.1 -->
    - [Upload 文件上传](#/upload) 支持自定义上传配置 `custom-request` <!-- 2.2.0-beta.1 -->
    - [Navigation 导航](#/navigation) 新增 bk-navigation-menu-group 用于导航栏分组 <!-- 2.2.0-beta.1 -->
    - [Form 表单](#/form) 表单异步验证请求失败后验证状态支持回退；表单增加自动验证配置 `auto-check` <!-- 2.2.0-beta.2 -->
    - [Switcher 开关](#/switcher?anchor=zhi-chi-loading-yun-xu-yi-bu-chu-li) 增加 loading 效果，允许异步处理 <!-- 2.2.0-beta.2 -->
    - [Upload 文件上传](#/upload) 增加头像上传、照片墙功能；样式调整
    - 新增 [Transition 过度动画](#/transition) 组件
* **[fix]**:
    - [TagInput 标签输入框](#/tag) 修复 tag-input 左右移位时，生产环境报错的问题 <!-- 2.2.0-beta.1 -->
    - [Table 表格](#/table) 修正表格行 hover 背景色在不同设置下表现不一致的问题
    - [Select 下拉选框](#/select) 修复搜索后全选不可用的问题
* **[update]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 优化滚动距离为实际滚轮，页面滚动距离根据滚轮力度变化 <!-- 2.2.0-beta.1 -->
    - [Steps 步骤](#/steps) 样式优化 <!-- 2.2.0-beta.1 -->

---

### 2.1.20 {page=#/changelog}
###### 2020.07.21

* **[add]**:
    - [Icon 图标](#/icon) 新增 size 配置；文档更新，新增 icon 分类 <!-- 2.1.20 -->
    - [Card 卡片](#/card?anchor=qia-pian---zhan-kai-shou-qi) 添加默认展开&默认收起配置项 `collapse-status` <!-- 2.1.20-beta.2 -->
    - [Popover 弹出框提示](#/popover) 设置 popover 支持自定义 appendTo <!-- 2.1.20-beta.1 -->
* **[fix]**:
    - [Table 表格](#/table) 修复表头固定和表单设置功能同时开启时表单右边框层级低被覆盖的问题 <!-- 2.1.20 -->
* **[update]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 修改滚动距离为固定 60px <!-- 2.1.20-beta.1 -->

---

### 2.1.19 {page=#/changelog}
###### 2020.07.07

* **[fix]**:
    - [DatePicker 日期选择器](#/date-picker) 修复 datetime 类型，format 为 `yyyy-MM-dd HH:mm` 时，时间面板样式错误的问题 <!-- 2.1.19-beta.4 -->
    - [Upload 文件上传](#/upload) 修复删除上传成功文件时，只剩下最后一个文件还会发送上传请求的问题；修复上传多个文件时，导致之前上传成功的请求再次发送的问题 <!-- 2.1.19-beta.3 -->
    - [Dialog 对话框](#/dialog) 修复示例代码 && 修复 show-mask 失效问题 <!-- 2.1.19-beta.2 -->
    - [Tree 树](#/tree) 样式问题修复 <!-- 2.1.19-beta.2 -->
    - [TagInput 标签输入框](#/tag) 修复 taginput 组件单选时，下拉列表项顺序问题 <!-- 2.1.19-beta.1 -->
    - 修复 pop manager 回调函数导致遮罩问题 <!-- 2.1.19-beta.2 -->
* **[update]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 监听外层元素的 style 属性，发生变化的时候重新计算组件内的状态信息 <!-- 2.1.19 -->
    - [Card 卡片](#/card) 展开收起范围优化 <!-- 2.1.19-beta.1 -->

---

### 2.1.18 {page=#/changelog}
###### 2020.06.23

* **[add]**:
    - [Card 卡片](#/card) 新增 card 组件 <!-- 2.1.19 -->
* **[fix]**:
    - [Navigation 导航](#/navigation) 修复在没有左侧 menu 栏下内容最大宽度问题 <!-- 2.1.19 -->
    - [Dialog 对话框](#/dialog) 修复 Dialog 嵌套层级问题 <!-- 2.1.18-beta.1 -->
    - [版本更新明细显示组件](#/version-detail) 修复滚动条及拖拽问题 <!-- 2.1.18-beta.1 -->
    - 修复全量引入组件库时，color-picker 组件报错的问题 <!-- 2.1.18-beta.1 -->
* **[update]**:
    - [Tree 树](#/tree) 样式更新 <!-- 2.1.19 -->
    - 初始化激活 pop manager 遮罩，防止遮罩容器出现在弹窗之后 <!-- 2.1.18-beta.2 -->
    - [Exception 异常提示](#/exception) 优化样式；替换各个类型图片为 svg；新增 empty(无内容)，search-empty(搜索无内容) 两种异常类型 <!-- 2.1.18-beta.1 -->
    - [代码规范](#/spec) 更新代码规范 <!-- 2.1.18-beta.3 -->

---

### 2.1.17 {page=#/changelog}
###### 2020.06.09

* **[add]**:
    - [Transfer 穿梭框](#/transfer) 新增 show-overflow-tips 配置。文本溢出时，是否使用气泡显示全部内容
    - [Swiper 轮播图](#/swiper) [轮播支持通过slot自定义内容](#/swiper?anchor=lun-bo-nei-rong-tong-guoslot-zi-ding-yi)
    - [Big Tree 大树](#/big-tree) 添加 node-height/configurable 配置；添加虚拟滚动 <!-- 2.1.17-beta.3 -->
    - [Table 表格](#/table) 添加 cell-attributes/header-cell-attributes 配置，添加 before-expand-change 配置 <!-- 2.1.17-beta.1 -->
    - [Popconfirm 弹出确认框](#/popconfirm) 添加 trigger 属性，支持自定义触发方式 <!-- 2.1.17-beta.1 -->
* **[fix]**:
    - [Select 下拉选框](#/select) 修复拼音搜索时导致的搜索问题 <!-- 2.1.17-beta.3 -->
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 修复没有滚动条情况下宽度的计算 <!-- 2.1.17-beta.3 -->
    - [Collapse 折叠面板](#/collapse) 修复手风琴模式下，点击无法收起的问题 <!-- 2.1.17-beta.1 -->
    - [Navigation 导航](#/navigation) 修复 menu item 图标颜色配置失效问题 <!-- 2.1.17-beta.1 -->
* **[update]**:
    - [Diff 差异对比](#/diff) 更新暗黑主题配色 <!-- 2.1.17-beta.1 -->
    - [Collapse 折叠面板](#/collapse) 优化自定义触发区域布局 <!-- 2.1.17-beta.1 -->

---

### 2.1.16 {page=#/changelog}
###### 2020.05.29

* **[add]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 添加横向滚动事件 <!-- 2.1.16 -->
    - [Navigation 导航](#/navigation) 新增对左侧菜单栏 icon 在不同状态下的颜色配置 <!-- 2.1.16-prev.1 -->
    - [Badge 标记](#/badge) 添加 radius, valLength 设置，调整自定义 border 样式 <!-- 2.1.16-beta.4 -->
    - [Tab 选项卡](#/tab) 添加 change-on-hover, change-on-hover-delay 配置，用于鼠标悬停切换 tab <!-- 2.1.16-beta.4 -->
    - [Sideslider 侧栏](#/sideslider) 添加 show-mask 配置，用于配置是否显示遮罩 <!-- 2.1.16-beta.4 -->
* **[fix]**:
    - [Select 下拉选框](#/select) 修复 multiple 配置变更时引发的错误 <!-- 2.1.16-beta.4 -->
    - [Navigation 导航](#/navigation) 修复父级菜单闭合时在左侧闭合时后展开会重新打开的问题 <!-- 2.1.16-prev.1 -->
    - [Dialog 对话框](#/dialog) 修复嵌套 dialog 和独立 dialog 混淆使用时无法弹出的问题 <!-- 2.1.16-beta.3 -->
* **[update]**:
    - [Diff 差异对比](#/diff) 更新暗黑主题配色 <!-- 2.1.16-beta.4 -->
    - [自定义指令 v-bk-overflow-tips](#/directives?anchor=v-bk-overflow-tips) 优化 props 配置实现方式，支持全局设置默认 props <!-- 2.1.16-beta.2 -->
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 添加 list 属性；修改 addListData 和 setListData 的交互；修改滚动取消默认行为逻辑 <!-- 2.1.16-beta.2 -->
    - [RoundProgress 圆形进度](#/round-progress) radius 改为 width（兼容以前的 radius） <!-- 2.1.16-beta.2 -->

---

### 2.1.15 {page=#/changelog}
###### 2020.05.15

* **[add]**:
    - [SearchSelect 查询选择器](#/searchselect) 选择框中 footer 按钮支持国际化 <!-- 2.1.15-beta.5 -->
    - [Switcher 开关](#/switcher) switcher组件新增 true-value/false-value 属性，支持自定义其真/假值 <!-- 2.1.15-beta.5 -->
    - [Popover 弹出框提示](#/popover) light 主题箭头的阴影效果 <!-- 2.1.15-beta.3 -->
    - [TagInput 标签输入框](#/tag) tag-input 增加失焦点自动选中 <!-- 2.1.15-beta.1 -->
* **[fix]**:
    - [Switcher 开关](#/switcher) 修复switcher双向绑定的问题 <!-- 2.1.15-beta.6 -->
    - [Dialog 对话框](#/dialog) 修复嵌套 dialog 和独立 dialog 混淆使用时无法弹出的问题 <!-- 2.1.15-beta.5 -->
    - [版本更新明细显示组件](#/version-detail) 修复样式中颜色值错误问题 <!-- 2.1.15-beta.3 -->
    - [Input 输入框](#/input) 修复 input 清空图标在不可编辑状态下未隐藏 <!-- 2.1.15-beta.3 -->
    - [Navigation 导航](#/navigation) 修复导航样例上左侧栏层级超出顶部的问题 <!-- 2.1.15-beta.1 -->
* **[update]**:
    - [ColorPicker 颜色选择器](#/color-picker) 预设值支持空和相关逻辑优化 <!-- 2.1.15-prev.1 -->
    - [Cascade 级联选框](#/cascade) 支持 popoverOptions 属性；下拉选项不换行，文字超出出现省略号；组件外部给value赋值为 `[]` 时，清除组件当前选中的值 <!-- 2.1.15-beta.5 -->
    - [Table 表格](#/table) 修复文档错误及遗漏 <!-- 2.1.15-beta.5 -->
    - [Select 下拉选框](#/select) 滚动调圆角调整 <!-- 2.1.15-beta.5 -->
    - [Popover 弹出框提示](#/popover) 三角阴影样式更新 <!-- 2.1.15-beta.4 -->
    - [Form 表单](#/form) 示例样式调整 <!-- 2.1.15-beta.3 -->

---

### 2.1.14 {page=#/changelog}
###### 2020.04.27

* **[add]**:
    - [Select 下拉选框](#/select) 新增 search-with-pinyin 属性用于配置是否启用中文拼音搜索及拼音首字母搜索功能 <!-- 2.1.14-prev.1 -->
    - [版本更新明细显示组件](#/version-detail) 新增版本更新明细显示组件 <!-- 2.1.14-prev.1 -->
    - [DatePicker 日期选择器](#/date-picker) 时间面板支持滚动选中 <!-- 2.1.14-beta.1 -->
* **[update]**:
    - [DatePicker 日期选择器](#/date-picker) 时间组件选择时间滚轮滚动时才触发 change 事件 <!-- 2.1.14-beta.3 -->
    - [Dialog 对话框](#/dialog) 遮罩增加过渡动画
    - [Diff 差异对比](#/diff) 修复对比内容相同时不会显示内容 <!-- 2.1.14-beta.2 -->

---

### 2.1.13 {page=#/changelog}
###### 2020.04.14

* **[add]**:
    - [ZoomImage 缩放图组件](#/zoom-image) 增加 ZoomImage 组件 <!-- 2.1.13-prev.1 -->
    - [Collapse 折叠面板](#/collapse) 折叠面板添加[自定义触发区域](#/collapse?anchor=zi-ding-yi-chu-fa-qu-yu) <!-- 2.1.13-prev.1 -->
    - [DatePicker 日期选择器](#/date-picker) 支持[自定义 footer](#/date-picker?anchor=zi-ding-yi-footer) <!-- 2.1.13-prev.1 -->
    - [自定义指令](#/directives) [v-bk-overflow-tips](#/directives?anchor=v-bk-overflow-tips) 增加配置项，可配置 tippy 相关属性 <!-- 2.1.13-beta.1 -->
    - [SearchSelect 查询选择器](#/searchselect) 新增 validateMessage 属性用于配置校验信息；新增 validate 提示校验插槽；新增搜索子项可配置自定义 placeholder 及校验函数 <!-- 2.1.13-prev.2 -->
* **[fix]**:
    - [SearchSelect 查询选择器](#/searchselect) 修复window下excel复制换行数据时出现不能替换换行的问题 <!-- 2.1.13-prev.2 -->
* **[update]**:
    - [Dialog 对话框](#/dialog) 文档修正 <!-- 2.1.13-prev.1 -->
    - [Table 表格](#/table) 文档修正 <!-- 2.1.13-prev.1 -->
    - [Input 输入框](#/input) 修复 input number 类型下未配置 precision，初始化小数会被格式为整数的问题 <!-- 2.1.13-beta.2 -->
    - [Big Tree 大树](#/big-tree) big-tree 优化内部API实现，避免执行错误导致外部程序中断 <!-- 2.1.13-beta.1 -->

---

### 2.1.12 {page=#/changelog}
###### 2020.03.31

* **[add]**:
    - [Select 下拉选框](#/select) 增加下拉选择搜索框 placeholder 配置；新增 tag 显示效果 <!-- 2.1.12-beta.3 -->
    - [DatePicker 日期选择器](#/date-picker) DatePicker支持默认值来自于快捷项 <!-- 2.1.12-beta.2 -->
    - [Table 表格](#/table) 增加前置插槽，便于放置跨页全选提示信息 <!-- 2.1.12-beta.2 -->
    - [Swiper 轮播图](#/swiper) 添加参数控制轮播图高宽 <!-- 2.1.12-beta.1 -->
    - [Form 表单](#/form) form 增加 icon 的提示方式 <!-- 2.1.12-beta.1 -->
* **[fix]**:
    - [Table 表格](#/table) 修复部分非默认类型列表头对齐错误的问题 <!-- 2.1.12-beta.3 -->
    - [Form 表单](#/form) 修复 form label 样式问题 <!-- 2.1.12-prev.1 -->
* **[update]**:
    - [ColorPicker 颜色选择器](#/color-picker) 交互及样式优化 <!-- 2.1.12-beta.2 -->
    - [Cascade 级联选框](#/cascade) 修复 cascade 组件问题 <!-- 2.1.12-beta.2 -->
    - [Upload 文件上传](#/upload) 上传成功时也会暴露出删除按钮 <!-- 2.1.12-beta.2 -->
    - [Form 表单](#/form) 优化表单的验证，之前验证信息的行高太小 <!-- 2.1.12-prev.1 -->
    - [Slider 滑动选择器](#/slider) 滑动选择器支持设置值 <!-- 2.1.12-prev.1 -->

---

### 2.1.11 {page=#/changelog}
###### 2020.03.17

* **[add]**:
    - [Cascade 级联选框](#/cascade) 添加级联选框组件 <!-- 2.1.11-beta.4 -->
    - [ColorPicker 颜色选择器](#/color-picker) 增加颜色选择器 <!-- 2.1.11-beta.4 -->
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 新增文字类型样式的示例 <!-- 2.1.11-beta.1 -->
    - [DatePicker 日期选择器](#/date-picker) 时间选择器支持快捷选中文案展示 <!-- 2.1.11-beta.1 -->
    - [TagInput 标签输入框](#/tag) 增加是否允许连续操作配置项 <!-- 2.1.11-beta.1 -->
    - [Transfer 穿梭框](#/transfer) 增加[搜索](#/transfer?anchor=zuo-ce-dai-sou-suo) <!-- 2.1.11-beta.1 -->
    - 组件库暴露出内部一些与组件逻辑无关的、通用的方法。参见[组件库暴露出来的一些工具方法](#/start?anchor=zu-jian-ku-bao-lu-chu-lai-de-yi-xie-gong-ju-fang-fa) <!-- 2.1.11-beta.4 -->
* **[fix]**:
    - [TagInput 标签输入框](#/tag) 标签选择器修复单选时出现多个选择问题；修复 input 框定位问题 <!-- 2.1.11-beta.1 -->
    - [DatePicker 日期选择器](#/date-picker) 配置 shortcuts 关闭弹层时，`pick-success` 事件触发时机调整  <!-- 2.1.11-beta.4 -->
* **[update]**:
    - [DatePicker 日期选择器](#/date-picker) 点击确定后，文本框会失去焦点 <!-- 2.1.11-beta.4 -->
    - [Sideslider 侧栏](#/sideslider) 增加 `transfer` 配置，为 `true` 时，`sideslider` 会挂载在 `body` 上。默认为 `false` <!-- 2.1.11-beta.3 -->
    - [SearchSelect 查询选择器](#/searchselect) 查询选择器 tag <!-- 样式修改2.1.11-beta.1 -->
    - [Timeline 时间轴](#/timeline) 文档示例更新 <!-- 2.1.11-beta.1 -->
    - [Tab 选项卡](#/tab) 选中条长度修改 <!-- 2.1.11-beta.4 -->
    - [TagInput 标签输入框](#/tag) 标签样式更新 <!-- 2.1.11-beta.4 -->

---

### 2.1.10 {page=#/changelog}
###### 2020.03.03

* **[add]**:
    - [Alert 警告](#/alert) 增加 Alert 警告组件
    - [Transfer 穿梭框](#/transfer) 新增 `always-show-close` 属性，配置为 true，可直接显示右侧删除图标，默认为 true
    - [Input 输入框](#/input) 新增 `native-attributes` 属性，可支持 html 原生属性透传，参见 [HTML 原生属性透传](#/input?anchor=html-yuan-sheng-shu-xing-tou-chuan)
    - [TagInput 标签输入框](#/tag) 增加 clearable 属性
    - [DatePicker 日期选择器](#/date-picker) 增加 [up-to-now 属性](#/date-picker?anchor=ri-qi-fan-wei-yi-ji-ri-qi-shi-jian-fan-wei-xuan-ze-qi-zhong-zhi-shi-jian-pei-zhi-wei-zhi-jin)，使日期范围以及日期时间范围选择器终止时间配置为“至今”
* **[fix]**:
    - [Transfer 穿梭框](#/transfer) 修复穿梭框图标偏小，且未上下居中
    - [Form 表单](#/form) 表单动态校验能增不能减的问题；修复表单动态删除报错问题
    - [Input 输入框](#/input) 修复 textarea disabled 样式问题
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 修复样式问题
    - [TagInput 标签输入框](#/tag) 修复单选时，一键清空 icon 消失的问题；修复单选时，del 删除内容，blur 又自动恢复的问题
    - [Table 表格](#/table) 修复 align 设置为 right 不生效的问题
    - 修复全量引入时，[Link 文字链接](#/link)、[Popconfirm 弹出确认框](#/popconfirm)、[v-bk-overflow-tips](#/directives?anchor=v-bk-overflow-tips) 样式没有引入的问题
    - 修复按需引入 [v-bk-overflow-tips](#/directives?anchor=v-bk-overflow-tips) 时引用不到的问题
    - 修复打包后无法引入图标的问题
* **[update]**:
    - [Form 表单](#/form) 表单间距、验证方式调整
    - [Transfer 穿梭框](#/transfer) 修改 transfer 的 icon 颜色
    - [Table 表格](#/table) 筛选/排序/设置交互样式优化
    - [Select 下拉选框](#/select) 交互样式优化

---

### 2.1.9 {page=#/changelog}
###### 2020.02.18

* **[add]**:
    - 添加全局 zIndexManager 管理弹框的层级，参见[全局配置](#/start?anchor=quan-ju-pei-zhi)
    - [Popconfirm 弹出确认框](#/popconfirm) 新增 Popconfirm 弹出确认框组件
    - [Link 文字链接](#/link) 新增 Link 文字链接组件
    - [bk-overflow-tips 指令](#/directives?anchor=v-bk-overflow-tips) 新增 bk-overflow-tips 指令
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 增加 disabled 状态样式
    - [Input 输入框](#/input) 增加 icon click 回调事件（left-icon-click、right-icon-click）；新增 size 属性
    - [TagInput 标签输入框](#/tag) 单选允许显示清除
    - [Select 下拉选框](#/select) 新增 size 属性
    - [SearchSelect 查询选择器](#/searchselect) 新增 clearable 属性用于设置是否可清空；新增属性 showPopoverTagChange 用于设置生成或者删除标签时是否显示一级子列表
    - [Table 表格](#/table) 添加通用设置列，参见[设置功能](#/table?anchor=she-zhi-gong-neng)
    - [Big Tree 大树](#/big-tree) 添加 display-matched-node-descendants 配置；添加 check-only-available-strictly 配置
* **[fix]**:
    - [TagInput 标签输入框](#/tag) 修复 TagInput 弹框投影与其他 select 弹框投影不一致的问题；修复 disabled 状态显示清除 icon 的问题；修复 TagInput 组件最外层容器定高的问题
    - [Dialog 对话框](#/dialog) 修复 mask 遮罩层触发 mouseup 事件触发导致弹窗关闭的问题；修复 dialog 在 window 出现时导致主体内容闪动的问题
    - [Sideslider 侧栏](#/sideslider) 改为 v-if 渲染同时修复封装单独组件时不出现遮罩的问题
    - [DatePicker 日期选择器](#/date-picker) 日期范围选择器出现两个当前日期样式（focus 样式问题）
    - [Big Tree 大树](#/big-tree) 修复外部搜索重置时所有节点会被展开的问题
* **[update]**:
    - 顶导优化
    - 图标切换成[icon-cool](https://www.npmjs.com/package/@icon-cool/bk-icon-magic_box)
    - [TagInput 标签输入框](#/tag) tag 文案过长显示省略号
    - [Switcher 开关](#/switcher) size 属性更新
    - [Steps 步骤](#/steps) 新的设计优化（默认虚线，支持 size/status 等）
    - [Timeline 时间轴](#/timeline) 新的设计优化（新的样式，支持节点图标/颜色/大小等设置）
    - [Table 表格](#/table) 完善 bk-table 列筛选功能；完善 bk-table 单元格文本溢出提示功能
    - [Input 输入框](#/input) 响应 type 属性的变化
    - [Collapse 折叠面板](#/collapse) item 通过 v-if 控制时的默认状态
    - [DatePicker 日期选择器](#/date-picker) 开启时间范围设置时，结束时间由原来的 00:00:00 改为 23:59:59
    - [Collapse 折叠面板](#/collapse) 修改处理逻辑
    - [DatePicker 日期选择器](#/date-picker) editable 属性默认改为 true
    - [Big Tree 大树](#/big-tree) 适配自定义搜索的非字符串类型参数

---

### 2.1.8 {page=#/changelog}
###### 2019.12.23

* **[add]**:
    - [Icon 图标](#/icon) 新增 icon 图标组件
    - [Tab 选项卡](#/tab) 添加 show-header 配置，panel 添加 disabled 配置项
    - [Popover 弹出框提示](#/popover) 添加 disabled 配置
    - [Tooltips 工具提示](#/tooltips) 添加 disabled 配置
    - [Select 下拉选框](#/select) 添加 prefix-icon 配置项
    - [Table 表格](#/table) header 中的 checkbox 禁用判断
    - [SearchSelect 查询选择器](#/searchselect) 新增 popover-zindex 属性用于设置下拉列表的层级
    - [Swiper 轮播图](#/info-box) 新增轮播容器 height 配置
    - [Loading 加载](#/loading) 添加 size theme delay immediate 配置项
    - [Collapse 折叠面板](#/collapse) 新增 disabled 属性
    - [Big Tree 大树](#/big-tree) 添加 lazy-disabled 配置
    - [TagInput 标签输入框](#/tag) 添加数据清空事件
* **[fix]**:
    - [Navigation 导航](#/navigation) 修复 navigation 例子中在小于 1366 屏幕下的样式错误问题
    - [Info 提示框](#/info-box) 修复 subtitle 不居中问题
    - [Switcher 开关](#/info-box) selected 属性没有用到，示例文档中 selected 属性改为 value
    - [TagInput 标签输入框](#/tag) 修复 loading 效果，修复标签 index 问题；修复一键清除 icon 与 tag 重叠样式的问题；修复禁用可清除的 bug
    - [Tree 树组件](#/tree) 修复根节点无子节点数据时 check 事件禁止传递的问题
    - [SearchSelect 查询选择器](#/searchselect) 修复在输入中文过程中按下 enter 键出现显示两段英文的问题；修复 search-select 设置 number 类型时小键盘下不能输入数字的问题；将导航例子中的 postcss 转换为 css；修复不传入 data 属性的时候弹窗为空的问题；修复删除标签时列表不能重新定位的问题
    - [Big Tree 大树](#/big-tree) 修复搜索结果插槽未进行命名的问题
    - [Input 输入框](#/input) 修复 type === password && clearable === true 时图标重叠的问题
    - [Form 表单](#/form) 修复表单验证对空数组、0 等情况判断；修复 checkbox value（非用户手点）改变触发 chnage 事件；修复 textare focus 样式问题
* **[update]**:
    - [Big Tree 大树](#/big-tree) 扩展树实例 addNode 参数为对象的用法；添加搜索结果为空的展示
    - [SearchSelect 查询选择器](#/searchselect) 新增右侧 icon 点击事件，可以直接生成 tag；修复按下 enter 键后会触发两次 hide 事件问题；分组添加 show-count 是否显示分组子项总数的配置；优化内部记住选中 menu 的索引改为 id；在生成标签或者输入之后将不再显示 placeholder；新增组合 click(cmd/ctrl + click) 适应浏览器默认行为
    - [Table 表格](#/table) 扩大 expand、selection 类型列的点击热区
    - [Sideslider 侧栏](#/sideslider) 过渡动画优化
    - [Navigation 导航](#/navigation) 将导航链接改为 a 标签渲览,用以适应一些浏览器默认行为
    - [Button 按钮](#/button) button 组件设置为 text 按钮时，padding 需要去掉

---

### 2.1.7 {page=#/changelog}
###### 2019.10.31

* **[add]**:
    - [Tab 选项卡](#/tab) 添加 validate-active 配置，详细请查看 [bk-tab 选项卡属性](#/tab?anchor=bk-tab-xuan-xiang-qia-shu-xing)
    - [Select 下拉选框](#/select) select 支持 poppver 自定义 class
    - [Collapse 折叠面板](#/collapse) 添加 item 隐藏方式配置项
    - [TagInput 标签输入框](#/tag) tag-input 组件支持多个字段搜索，接受 search-key 为数组
* **[fix]**:
    - [Navigation 导航](#/navigation) 修复 menu create 没有获取当前选中的子项导致的一些问题
    - [Checkbox 多选框](#/checkbox) checkbox 状态赋值逻辑与计算属性 selected 的判断逻辑保持一致
    - [Sideslider 侧栏](#/sideslider) 修复 scroll bar 样式 bug
    - [Button 按钮](#/button) 修复按钮始终响应 enter 事件的问题
    - [Form 表单](#/form) 修复 bk-form-content 和 bk-label 不对齐问题
* **[update]**:
    - [Navigation 导航](#/navigation) 重构
    - 以下五个组件 `font-size` 配置更新，现在支持三个配置 `normal`、`medium`、`large`（分别表示 `12px`、`14px`、`16px`），默认为 `normal`
        - [Select 下拉选框](#/select)
        - [DropdownMenu 下拉菜单](#/dropdown-menu)
        - [Input 输入框](#/input)
        - [DatePicker 日期选择器](#/date-picker)
        - [TimePicker 时间选择器](#/time-picker)

---

### 2.1.6 {page=#/changelog}
###### 2019.10.21

* **[add]**:
    - [VirtualScroll 虚拟滚动](#/virtual-scroll) 新增 VirtualScroll 虚拟滚动组件
    - [Tree 树组件](#/tree) 增加拖拽配置 `drag-sort`，可交换位置
    - [Diff 内容差异对比](#/diff) 组件增加[暗黑主题](#/diff?anchor=an-hei-zhu-ti-pei-zhi)
    - [Upload 文件上传](#/upload) 增加自定义上传属性 `formDataAttributes`
    - [Message 消息提示](#/message) 去掉之前的 `isSingleLine` 配置；增加显示内容行数的配置 `ellipsisLine`，可自定义需要缩略的行数，具体参见[属性](#/message?anchor=shu-xing)
    - [TagInput 标签输入框](#/tag) 支持分组、搜索高亮等
* **[fix]**:
    - [TagInput 标签输入框](#/tag) 修复在点击最后一个选中项时无法聚焦 input 最后的问题；修复 blur 事件与 click 事件之间触发的优先问题；修复一直点击同一个 tag 项会一直闪烁的问题；修复选中值的排版受到外部标签的 line-height 影响会错乱的问题；修复点击 tag 选项不能聚焦的问题；修复 tag-input 在允许自定义标签输入时 enter 键造成的 form 提交冲突
    - [Pagination 分页](#/pagination) 修复 limit 初始化触发 limit-change 事件
    - [Input 输入框](#/input) 多行文本输入框设置了 maxlength 但没有提供 value 时会报错
* **[update]**:
    - [Sideslider 侧栏](#/sideslider) 优化交互动画的流畅度
    - [Select 下拉选框](#/select) 接入表单验证机制
    - [Form 表单](#/form) 表单验证时验证规则可以在 form 上统一配置
    - 每个组件加上自定义 class 配置
    - 弹出层层级 `z-index` 调整

---

### 2.1.5 {page=#/changelog}
###### 2019.09.26

* **[add]**：
    - [Pagination 分页](#/pagination) 添加已勾选/总数量的配置
    - [Navigation 导航](#/navigation) bk-navigation-menu 新增 before-nav-change 属性，在点击 menu-item 子项时触发，返回 false 代表不改变 navId 值
    - [Radio 单选框](#/radio) 新增 [radio-button](#/radio?anchor=radio-button)
    - [Dialog 对话框](#/dialog) 增加 `render-directive` 配置用来设置弹框的渲染方式
    - [DropdownMenu 下拉菜单](#/dropdown-menu) 增加 [`14px` 配置](#/dropdown-menu?anchor=14px-zi-hao)
* **[fix]**：
    - [TagInput 标签输入框](#/tag) 修复属性值被修改及输入搜索不到导致的问题
    - [Slider 滑动选择器](#/slider) 修复 slider 数据绑定的问题；修复 slider 设置 min-value 时，样式错乱的问题
    - [Input 输入框](#/input) 修复在高精度下加减 1 时的精度问题；修复浮点数下右侧加减 1 会超越 min/max 值的问题；修复 input-number 在超出最大值之后，默认转换为最大值导致 value 没有被修改问题；修复默认设置 precision 为 0 导致无法输入小数问题；默认不设置 precision 属性值，保留用户输入原貌；新增 show-controls 属性，用来控制是否显示右侧加减 1 控制栏
* **[update]**：
    - [SearchSelect 查询选择器](#/searchselect) 优化下拉列表样式；添加禁用选项的功能
    - [Navigation 导航](#/navigation) 优化 before-nav-change 方法报错时主动捕获
    - [Select 下拉选框](#/select) 搜索重构；删除键盘事件；修复向上弹出时，选项变化引起的位置异常；[key 值绑定说明](#/select?anchor=bk-option-xia-la-kuang-xuan-xiang-shu-xing)
    - [Big Tree 大树](#/big-tree) 去除特殊示例逻辑

---

### 2.1.4 {page=#/changelog}
###### 2019.08.22

* **[add]**:
    - [DatePicker 日期选择器](#/date-picker?anchor=ke-bian-ji) 支持文本框可编辑
    - [TimePicker 时间选择器](#/time-picker?anchor=ke-bian-ji) 支持文本框可编辑
* **[fix]**：
    - [DatePicker 日期选择器](#/date-picker) 修复开启日期时间范围配置时，从日期面板切换到时间面板的时候，时间没有被默认选中的问题

---

### 2.1.3 {page=#/changelog}
###### 2019.08.22

* **[add]**:
    - [Input 输入框](#/input) 支持 clear 事件
    - 文档页面单个组件内的导航引导
    - 文档页面提供组件搜索
* **[fix]**：
    - [Button 按钮](#/button) 修复 button 组件开启 disabled 选项后 v-bk-tooltips 指令无效的问题
* **[update]**：
    - 文档信息优化

---

### 2.1.1 {page=#/changelog}
###### 2019.08.15

* **[add]**:
    - [Big Tree 大树](#/big-tree) 支持异步加载子节点
    - [SearchSelect 查询选择器](#/searchselect) 新增 input-type 属性设置 input 的类型
    - [DatePicker 日期选择器](#/date-picker) 增加添加字体配置 `font-size`
    - [Select 下拉选框](#/select) 添加字体配置
* **[fix]**：
    - [Big Tree 大树](#/big-tree) 修复节点勾选后祖先节点的勾选状态不正确的问题；修复未显示 checkbox 的节点也会被当做已勾选节点的问题；修复无法添加一级节点的问题
    - [Input 输入框](#/input) 修复 safari 上 placeholder 不能居中
    - [Table 表格](#/table) 折叠图标旋转 90 度
* **[update]**:
    - [Select 下拉选框](#/select) 样式修改
    - [Button 按钮](#/button) 按钮组样式调整

---

### 2.1.0 {page=#/changelog}
###### 2019.08.08

* **[add]**:
    - 增加[自定义配置](#/config)
    - [Info 提示框](#/info-box) 增加 `container` 配置，支持设置弹框出现在哪个容器内
    - [DatePicker 日期选择器](#/date-picker) 增加 `shortcut-close` 配置，用来设置点击快捷方式选择日期时间后是否可以关闭弹层；添加 clearable 属性
    - [Form 表单](#/form) 单个表单项验证支持异步；label 支持提示功能
    - [Big Tree 大树](#/big-tree) 新增组件
    - [Navigation 导航](#/navigation) 新增 navigation-item hover 效果
    - [Select 下拉选框](#/select) 添加 popoverOptions 属性；添加自定义 trigger 功能
    - [Steps 步骤](#/steps) 支持垂直方向
    - [SearchSelect 查询选择器](#/searchselect) 新增属性 readonly、wrapZindex、defaultFocus；新增默认超出高度整体浮动效果
    - [Input 输入框](#/input) 新增[密码框](#/input?anchor=mi-ma-kuang)；增加 watch placeholder；支持数字类型设置 min、max
    - [Sideslider 侧栏](#/sideslider) 支持 header slot
    - [Switcher 开关](#/switcher) 支持选中时禁用
* **[fix]**：
    - 国际化问题
    - 修复国际化示例和 bk-tab 示例代码 ESLint 报错的问题
    - 加上 favicon
    - [Tree 树组件](#/tree) 修复 tree 子节点选中时会触发兄弟节点选中的问题
    - [Select 下拉选框](#/select) 修复下拉远程搜索问题；修复滚动问题；修复 select 组件多选时，反选选项不会更新 selectedNameCache，导致出现重叠的问题；修复 select 通过代码变化 value 时，上次的 value 没有消失，会和 placeholder 有重影
    - [Sideslider 侧栏](#/sideslider) 修复 beforeClose 函数未阻止关闭的问题；修复在阴影区域 mouseup 会触发 click 导致面板关闭的问题
    - [Dialog 对话框](#/dialog) 修复 dialog 标题中的英文字符显示不全有遮挡
    - [Tab 选项卡](#/tab) bk-tab 样式 type 属性外层是 border-card，里面的 unborder-card 样式会被影响
    - [Info 提示框](#/info-box) info box 点击确认需要手动关闭的问题
    - [Table 表格](#/table) 修复表格组件内置 id 设置不正确引发事件不派发的问题
* **[update]**:
    - tippy 升级
    - 主要字体颜色改为 `#63656e`
    - .npmignore
    - [Tree 树组件](#/tree) tree 组件多选时初始化节点状态调整
    - [Button 按钮](#/button) 修复不能自定义设置 button 原生属性
    - [Select 下拉选框](#/select) reset 方法设置重置 selectedNameCache
    - [TagInput 标签输入框](#/tag) 修改弹出下拉方式
    - [Dialog 对话框](#/dialog) dialog 点击确定时可配置不关闭弹窗；修改 confirm 自定义 callback
    - [Loading 加载](#/loading) 修改指令注册实现方式
    - [Slider 滑动选择器](#/slider) 支持配置 hover 时显示当前值
    - [Input 输入框](#/input) maxlength / minlength 类型修改
    - [Table 表格](#/table) 添加销毁判断，避免陷入死循环
    - 样式更新：[Transfer 穿梭框](#/transfer)、[Process 步骤](#/process)、[Switcher 开关](#/switcher)、[Dialog 对话框](#/dialog)、[Select 下拉选框](#/select)、[DropdownMenu 下拉菜单](#/dropdown-menu)、[Collapse 折叠面板](#/collapse)、[Rate 评分](#/rate)、[Tab 选项卡](#/tab)、[TagInput 标签输入框](#/tag)、[Navigation 导航](#/navigation)、[Sideslider 侧栏](#/sideslider)、[Tooltips 工具提示](#/tooltips)、[Popover 弹出框提示](#/popover)、[DatePicker 日期选择器](#/date-picker)、[TimePicker 时间选择器](#/time-picker)、[Message 消息提示](#/message)、[Steps 步骤](#/steps)、[SearchSelect 查询选择器](#/searchselect)、[RoundProgress 圆形进度](#/round-progress)、[Input 输入框](#/input)

---

### 2.0.7 {page=#/changelog}
###### 2019.06.26

* **[add]**:
    - <a href="https://docs.bk.tencent.com/blueapps/bkui/introduction.html" target="_blank">蓝鲸前端开发脚手架</a>
* **[fix]**:
    - [Table 表格](#/table) 修复边框缺失问题
    - [Tree 树组件](#/tree) 修复 tree 组件父节点不能设置禁用的问题
    - [Upload 文件上传](#/upload) header 传入数组时 bug 修复
    - [TagInput 标签输入框](#/tag) 修复标签输入框复制粘贴 bug
    - [Dialog 对话框](#/dialog) fix dialog inline-block space bug
    - [DatePicker 日期选择器](#/date-picker) 修复弹框中点击空白处日期选择器不会关闭的问题
    - [TimePicker 时间选择器](#/time-picker) 修复弹框中点击空白处时间选择器不会关闭的问题
    - [Tooltips 工具提示](#/tooltips) 全量引入时导出指令
    - [v-bk-clickoutside 指令](#/clickoutside) 全量引入时导出指令
    - add @vue/babel-preset-jsx for vue jsx
    - add extensions option to rollup-plugin-babel options
* **[update]**：
    - [Navigation 导航](#/navigation) 优化 navigation-item 样式表现；加入分组上下间距
    - [Select 下拉选框](#/select) 区分单选多选选中时的表现；添加 popoverWidth 属性，控制下拉列表宽度
    - [Switcher 开关](#/switcher) 增加尺寸和主题配置
    - [Radio 单选框](#/radio) 修改选中样式的实现方式
    - [Navigation 导航](#/navigation) bk-navigation 新增 toggle-click 事件
    - [Navigation 导航](#/navigation) 优化 bk-navigaiton-menu 及 bk-navigation-menu-item 代码
    - 本地开发、打包构建性能优化

---

### 2.0.6 {page=#/changelog}
###### 2019.06.13

* **[add]**：
    - [AnimateNumber 动画数字](#/animate-number) 新增 AnimateNumber 动画数字组件
    - [Rate 评分](#/rate) 新增 Rate 评分组件
    - [Swiper 轮播图](#/swiper) 新增 Swiper 轮播图组件
    - [SearchSelect](#/searchselect) 新增属性 showCondition 配置是否显示条件子项（或）
    - [TagInput 标签输入框](#/tag) 新增 filter-callback 过滤函数配置项
    - [Navigation 导航](#/navigation) 新增 bk-navigation header 插槽
* **[fix]**：
    - [Select 下拉选框](#/select) 修复无法滚动及动画闪烁问题
    - [SearchSelect](#/searchselect) 修复 bk-search-select 子项联想空格问题及弹窗阴影减小
    - [SearchSelect 查询选择器](#/searchselect) 修复 bk-search-select 键对应的值为空时按回车报错的 bug
    - [Table 表格](#/table) 修复固定列表现不正确的问题
    - [Table 表格](#/table) 修复自定义排序时标识不生效的问题
    - [Table 表格](#/table) bk-table 禁用的 selection 可以被点击
    - [Tree 树](#/tree) 修复子节点半选触发父节点全选的问题
* **[update]**：
    - [SearchSelect](#/searchselect) 去除全局 multiable 属性，将 multiable 设置到到对应选项中配置中，独自配置是否多选
    - [v-bk-clickoutside 指令](#/clickoutside) 按需引入时导出指令
    - [Tooltips 工具提示](#/tooltips) 按需引入时导出指令
    - [Navigation 导航](#/navigation) 优化代码
    - [Tree 树](#/tree) on-check 调整为只对当前节点生效，之前是父节点触发 on-check 事件其子节点 on-check 事件都会触发
    - [Tree 树](#/tree) 搜索时空数据文案显示实现逻辑调整，由组件内部配置调整为通过 $ref 调用方法实现，参见[示例](#/tree?anchor=jie-dian-guo-lu)
    - example 文档添加 BASE_LIB_NAME 占位符
    - build component 构建优化
    - 更新 eslint-config-bk
    - 添加 core-js@2
    - 组件库 export 优化

---

### 2.0.0 {page=#/changelog}
###### 2019.05.20

`bk-magic-vue` 根据蓝鲸前端规范、设计规范并结合我们业务开发过程中的积累沉淀，提供一套基础组件，供开发人员使用。

</div>
<script>
    import { getActualTop } from '../../../src/utils/util'
    import { bkAlert } from '@'
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual'
    }
    else {
        window.onunload= () => window.scrollTo(0, 0)
    }
    export default {
        components: {
          bkAlert
        },
        data () {
            return {
            }
        },
        watch: {
            '$route' (to, from) {
                const ver = to.query.v
                if (!ver) {
                    window.scrollTo(0, 0)
                    return
                }
                this.jumpVer(ver)
            }
        },
        mounted () {
            const ver = this.$route.query.v
            if (!ver) {
                return
            }
            this.jumpVer(ver)
        },
        methods: {
            jumpVer (ver) {
                const node = document.getElementById(ver)
                if (!node) {
                    window.scrollTo(0, 0)
                    return
                }
                this.$nextTick(() => {
                    const top = getActualTop(node)
                    window.scrollTo(0, top - 70)
                })
            }
        }
    }
</script>
