# bk-table 组件实现说明文档

## 1. 组件架构概览

bk-table 是一个功能丰富的 Vue2 表格组件，采用**分层架构**设计，主要包含以下模块：

```
table/
├── table.vue              # 主组件（容器）
├── table-store.js         # 状态管理（核心数据仓库）
├── table-layout.js        # 布局管理（尺寸计算）
├── table-header.js        # 表头组件
├── table-body.js          # 表体组件
├── table-footer.js        # 表尾组件（汇总行）
├── table-column.js        # 列定义组件
├── table-setting.js       # 表格设置组件
├── table-setting-content.vue
├── filter-panel.vue       # 筛选面板
├── layout-observer.js     # 布局观察者 Mixin
├── use-shift-key.js       # Shift 多选 Hook
├── util.js                # 工具函数
└── index.js               # 入口文件
```

### 1.1 架构图

```
┌─────────────────────────────────────────────────────────────┐
│                        table.vue                            │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    TableStore                        │   │
│  │  (状态管理: data, selection, columns, sort, filter) │   │
│  └─────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                    TableLayout                       │   │
│  │  (布局管理: 宽度、高度、滚动条计算)                    │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                             │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐        │
│  │ table-header │ │ table-body   │ │ table-footer │        │
│  │ (表头)       │ │ (表体)       │ │ (汇总行)     │        │
│  └──────────────┘ └──────────────┘ └──────────────┘        │
│                                                             │
│  ┌──────────────────────────────────────────────────────┐  │
│  │                 Fixed Columns (左/右固定列)           │  │
│  │  ┌─────────────┐              ┌─────────────┐        │  │
│  │  │ left-fixed  │              │ right-fixed │        │  │
│  │  └─────────────┘              └─────────────┘        │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘

     ▲                    ▲
     │                    │
┌────┴────┐         ┌─────┴─────┐
│ table-  │         │ filter-   │
│ column  │         │ panel     │
│ (列定义) │         │ (筛选面板) │
└─────────┘         └───────────┘
```

---

## 2. 核心模块详解

### 2.1 TableStore（状态管理）

`table-store.js` 是整个组件的**数据中心**，采用类似 Vuex 的 mutations 模式管理状态。

#### 2.1.1 核心状态 (states)

```javascript
this.states = {
  // 行标识
  rowKey: null,
  
  // 列相关
  _columns: [],              // 原始列配置
  originColumns: [],         // 包含固定列顺序的列
  columns: [],               // 最终渲染的列（打平后）
  fixedColumns: [],          // 左固定列
  rightFixedColumns: [],     // 右固定列
  leafColumns: [],           // 叶子列
  fixedLeafColumns: [],      // 左固定叶子列
  rightFixedLeafColumns: [], // 右固定叶子列
  
  // 数据相关
  data: null,                // 当前显示的数据
  filteredData: null,        // 过滤后的数据
  _data: null,               // 原始数据副本
  
  // 排序相关
  sortingColumn: null,       // 当前排序列
  sortProp: null,            // 排序字段
  sortOrder: null,           // 排序顺序 (ascending/descending/null)
  
  // 选择相关
  isAllSelected: false,      // 是否全选
  selection: [],             // 已选择的行
  reserveSelection: false,   // 数据更新后保留选择
  selectable: null,          // 行是否可选函数
  
  // 其他状态
  currentRow: null,          // 当前高亮行
  hoverRow: null,            // 悬停行索引
  filters: {},               // 筛选条件
  expandRows: [],            // 展开的行
  defaultExpandAll: false,   // 默认展开所有
  isComplex: false           // 是否有固定列
}
```

#### 2.1.2 Mutations（状态变更方法）

| Mutation 名称 | 功能描述 |
|--------------|---------|
| `setData` | 设置表格数据，触发过滤、排序、选择更新 |
| `changeSortCondition` | 改变排序条件，重新排序数据 |
| `sort` | 执行排序操作 |
| `filterChange` | 改变筛选条件 |
| `insertColumn` | 插入列配置 |
| `removeColumn` | 移除列配置 |
| `setHoverRow` | 设置悬停行 |
| `setCurrentRow` | 设置当前高亮行 |
| `rowSelectedChanged` | 行选择状态变更 |
| `toggleAllSelection` | 切换全选状态 |

#### 2.1.3 核心方法

```javascript
// 提交状态变更
commit(name, ...args) {
  const mutations = this.mutations
  if (mutations[name]) {
    mutations[name].apply(this, [this.states].concat(args))
  }
}

// 更新列配置
updateColumns()

// 判断行是否选中
isSelected(row)

// 清空选择
clearSelection()

// 切换行选择
toggleRowSelection(row, selected)

// 切换行展开
toggleRowExpansion(row, expanded)

// 更新全选状态
updateAllSelected()

// 触发布局更新
scheduleLayout(updateColumns)
```

---

### 2.2 TableLayout（布局管理）

`table-layout.js` 负责计算和管理表格的尺寸布局，采用**观察者模式**通知子组件。

#### 2.2.1 核心属性

```javascript
this.observers = []          // 布局观察者列表
this.table = null            // 表格实例引用
this.store = null            // 状态仓库引用

// 尺寸属性
this.height = null           // 表格高度
this.scrollX = false         // 是否有横向滚动
this.scrollY = false         // 是否有纵向滚动
this.bodyWidth = null        // 表体宽度
this.fixedWidth = null       // 左固定列宽度
this.rightFixedWidth = null  // 右固定列宽度
this.tableHeight = null      // 表格总高度
this.headerHeight = 44       // 表头高度
this.appendHeight = 0        // append 插槽高度
this.footerHeight = 44       // 表尾高度
this.paginationHeight = 0    // 分页高度
this.viewportHeight = null   // 可视区域高度
this.bodyHeight = null       // 表体高度
this.fixedBodyHeight = null  // 固定列表体高度
this.gutterWidth = scrollbarWidth() // 滚动条宽度
this.rowsHeight = {}         // 各行高度缓存
```

#### 2.2.2 核心方法

| 方法名 | 功能描述 |
|-------|---------|
| `setHeight(value)` | 设置表格高度 |
| `setMaxHeight(value)` | 设置最大高度 |
| `updateElsHeight()` | 更新各元素高度 |
| `updateColumnsWidth()` | 更新列宽度（核心计算逻辑） |
| `updateScrollY()` | 更新纵向滚动状态 |
| `syncRowHeight()` | 同步行高度（用于固定列） |
| `addObserver(observer)` | 添加布局观察者 |
| `removeObserver(observer)` | 移除布局观察者 |
| `notifyObservers(event)` | 通知所有观察者 |

#### 2.2.3 列宽计算逻辑

```
1. 遍历所有列，收集设置了 width 的列和 flex 列
2. 计算所有列的最小宽度总和 bodyMinWidth
3. 比较 bodyMinWidth 与表格可用宽度：
   - 如果 bodyMinWidth <= 可用宽度：无横向滚动，flex 列平分剩余宽度
   - 如果 bodyMinWidth > 可用宽度：有横向滚动，flex 列使用最小宽度
4. 计算固定列总宽度
5. 通知观察者更新列宽
```

---

### 2.3 LayoutObserver（布局观察者 Mixin）

`layout-observer.js` 是一个 Vue Mixin，让子组件能够响应布局变化。

```javascript
export default {
  created() {
    this.tableLayout.addObserver(this)  // 注册为观察者
  },
  
  destroyed() {
    this.tableLayout.removeObserver(this)  // 移除观察者
  },
  
  computed: {
    tableLayout() {
      // 获取 layout 实例（从 props 或父组件）
      let layout = this.layout
      if (!layout && this.table) {
        layout = this.table.layout
      }
      return layout
    }
  },
  
  methods: {
    // 列宽变化回调：更新 colgroup 中的 col 元素宽度
    onColumnsChange(layout) {
      const cols = this.$el.querySelectorAll('colgroup > col')
      // ... 更新 col 的 width 属性
    },
    
    // 滚动状态变化回调：更新 gutter 列宽度
    onScrollableChange(layout) {
      // ... 更新 gutter 相关样式
    }
  }
}
```

---

## 3. 子组件详解

### 3.1 table-header.js（表头组件）

#### 核心功能
- 渲染表头行（支持多级表头）
- 处理排序点击
- 处理筛选面板
- 处理列宽拖拽

#### Props

| Prop | 类型 | 说明 |
|------|-----|------|
| `fixed` | String | 固定位置 ('left'/'right'/undefined) |
| `store` | Object | TableStore 实例 |
| `border` | Boolean | 是否显示边框 |
| `defaultSort` | Object | 默认排序配置 |

#### 多级表头处理

```javascript
// 将原始列配置转换为行数组
const convertToRows = (originColumns) => {
  // 1. 遍历计算每列的 level（层级）
  // 2. 计算每列的 colSpan（跨列数）
  // 3. 计算每列的 rowSpan（跨行数）
  // 4. 按层级分组返回
  return rows
}
```

---

### 3.2 table-body.js（表体组件）

#### 核心功能
- 渲染数据行和单元格
- 处理行/单元格事件
- 支持展开行
- 支持虚拟滚动

#### Props

| Prop | 类型 | 说明 |
|------|-----|------|
| `store` | Object | TableStore 实例 |
| `stripe` | Boolean | 是否显示斑马纹 |
| `context` | Object | 上下文对象 |
| `rowClassName` | String/Function | 行类名 |
| `rowStyle` | Object/Function | 行样式 |
| `fixed` | String | 固定位置 |
| `highlight` | Boolean | 高亮当前行 |

#### 渲染逻辑

```javascript
render(h) {
  // 1. 判断是否启用虚拟滚动
  if (this.virtualRender) {
    return (
      <bk-virtual-render list={this.data} ...>
        {/* 虚拟滚动渲染 */}
      </bk-virtual-render>
    )
  }
  
  // 2. 普通渲染
  return (
    <table class="bk-table-body">
      <colgroup>...</colgroup>
      <tbody>
        {this._l(this.data, (row, $index) => [
          // 数据行
          <tr>...</tr>,
          // 展开行（如果有）
          this.store.isRowExpanded(row) ? <tr>...</tr> : ''
        ])}
      </tbody>
    </table>
  )
}
```

---

### 3.3 table-column.js（列定义组件）

#### 核心功能
- 定义列的配置
- 生成列的渲染函数
- 管理列的生命周期

#### Props

| Prop | 类型 | 默认值 | 说明 |
|------|-----|-------|------|
| `type` | String | 'default' | 列类型 (selection/index/expand/setting/default) |
| `label` | String | - | 列标题 |
| `prop/property` | String | - | 数据字段名 |
| `width` | Number | - | 列宽度 |
| `minWidth` | Number | 80 | 最小宽度 |
| `maxWidth` | Number | - | 最大宽度 |
| `fixed` | Boolean/String | false | 固定位置 |
| `sortable` | Boolean/String | false | 是否可排序 |
| `sortMethod` | Function | - | 自定义排序方法 |
| `resizable` | Boolean | true | 是否可拖拽宽度 |
| `formatter` | Function | - | 格式化函数 |
| `filters` | Array | - | 筛选选项 |
| `filterMethod` | Function | - | 筛选方法 |
| `selectable` | Function | - | 行是否可选 |
| `showOverflowTooltip` | Boolean/Object | - | 溢出提示 |

#### 列类型默认配置

```javascript
const defaults = {
  default: { order: '' },
  selection: {
    width: 48, minWidth: 48, realWidth: 48,
    align: 'is-center', headerAlign: 'is-center'
  },
  expand: {
    width: 48, minWidth: 48, realWidth: 48,
    align: 'is-center', headerAlign: 'is-center'
  },
  index: {
    width: 48, minWidth: 48, realWidth: 48,
    align: 'is-center', headerAlign: 'is-center'
  },
  setting: {
    width: 42, maxWidth: 42, minWidth: 42, realWidth: 42,
    headerAlign: 'is-center', fixed: 'right'
  }
}
```

#### 列渲染逻辑

```javascript
// 四种特殊类型列的渲染逻辑
const forced = {
  selection: {
    renderHeader: (h, { store, column }) => <bk-checkbox ... />,
    renderCell: (h, { row, column, store, $index }) => <bk-checkbox ... />
  },
  index: {
    renderHeader: (h, { column }) => column.label || '#',
    renderCell: (h, { $index, column }) => <div>{ $index + 1 }</div>
  },
  expand: {
    renderHeader: (h, { column }) => column.label || '',
    renderCell: (h, data) => <div class="bk-table-expand-icon">...</div>
  },
  setting: {
    renderHeader: (h, { column, fixed }) => <bk-table-setting ... />,
    renderCell: () => ''
  }
}
```

---

### 3.4 table-footer.js（表尾组件）

#### 核心功能
- 渲染汇总行
- 自动计算数值列总和

#### Props

| Prop | 类型 | 说明 |
|------|-----|------|
| `store` | Object | TableStore 实例 |
| `summaryMethod` | Function | 自定义汇总方法 |
| `sumText` | String | 汇总行首列文本 |
| `border` | Boolean | 是否显示边框 |

#### 默认汇总逻辑

```javascript
// 如果没有自定义 summaryMethod，使用默认逻辑
this.columns.forEach((column, index) => {
  if (index === 0) {
    sums[index] = this.sumText  // 首列显示"合计"
    return
  }
  // 尝试将列数据转为数字并求和
  const values = this.store.states.data.map(item => Number(item[column.property]))
  // ... 计算精度和总和
})
```

---

## 4. 数据流详解

### 4.1 数据初始化流程

```
用户传入 data prop
        │
        ▼
table.vue created()
        │
        ├─► 创建 TableStore 实例
        │       └─► 初始化 states
        │
        └─► 创建 TableLayout 实例
                └─► 初始化布局属性
        │
        ▼
table.vue watch data (immediate)
        │
        ▼
store.commit('setData', data)
        │
        ├─► 应用筛选条件
        ├─► 应用排序
        ├─► 更新选择状态
        └─► 更新展开行
        │
        ▼
table.vue mounted()
        │
        ├─► store.updateColumns()
        └─► this.doLayout()
                │
                ├─► layout.updateElsHeight()
                └─► layout.updateColumnsWidth()
                        │
                        └─► notifyObservers('columns')
                                │
                                └─► 子组件 onColumnsChange()
```

### 4.2 排序数据流

```
用户点击排序按钮
        │
        ▼
table-header.handleSortClick()
        │
        ├─► 更新 states.sortingColumn
        ├─► 更新 states.sortProp
        └─► 更新 states.sortOrder
        │
        ▼
store.commit('changeSortCondition')
        │
        ├─► sortData() 重新排序
        └─► table.$emit('sort-change', {...})
        │
        ▼
layout.updateScrollY()
```

### 4.3 选择数据流

```
用户点击复选框
        │
        ▼
table-column renderCell (selection)
        │
        ▼
store.commit('rowSelectedChanged', row, index)
        │
        ├─► toggleRowSelection() 切换选择状态
        ├─► 处理 Shift 多选逻辑
        └─► store.updateAllSelected()
        │
        ▼
table.$emit('selection-change', selection)
table.$emit('select', selection, row)
```

### 4.4 筛选数据流

```
用户操作筛选面板
        │
        ▼
filter-panel.confirmFilter()
        │
        ▼
store.commit('filterChange', { column, values })
        │
        ├─► 更新 states.filters
        ├─► 应用所有筛选条件
        ├─► 排序过滤后的数据
        └─► table.$emit('filter-change', filters)
        │
        ▼
layout.updateScrollY()
```

---

## 5. 组件间数据共享机制

### 5.1 依赖注入关系

```
table.vue (主组件)
    │
    ├─► 创建 store (TableStore)
    ├─► 创建 layout (TableLayout)
    │
    └─► 通过 props 传递给子组件
            │
            ├─► table-header (props: store, border, defaultSort)
            ├─► table-body (props: store, stripe, context, ...)
            ├─► table-footer (props: store, summaryMethod, sumText, ...)
            └─► table-column (访问 owner.store)
```

### 5.2 数据访问方式

#### 子组件访问 store 和 layout

```javascript
// table-body.js / table-header.js / table-footer.js
export default {
  props: {
    store: { required: true }  // 通过 props 接收
  },
  
  computed: {
    table() {
      return this.$parent  // 父组件即 table.vue
    },
    columns() {
      return this.store.states.columns  // 访问 store 状态
    },
    data() {
      return this.store.states.data
    }
  }
}
```

#### table-column 访问 store

```javascript
// table-column.js
export default {
  computed: {
    owner() {
      // 向上查找 table 组件
      let parent = this.$parent
      while (parent && !parent.tableId) {
        parent = parent.$parent
      }
      return parent
    }
  },
  
  mounted() {
    // 通过 owner 访问 store
    this.owner.store.commit('insertColumn', this.columnConfig, ...)
  }
}
```

### 5.3 观察者模式（Layout 更新通知）

```javascript
// layout-observer.js (Mixin)
export default {
  created() {
    this.tableLayout.addObserver(this)  // 注册
  },
  destroyed() {
    this.tableLayout.removeObserver(this)  // 注销
  },
  methods: {
    onColumnsChange(layout) { /* 列变化处理 */ },
    onScrollableChange(layout) { /* 滚动变化处理 */ }
  }
}

// table-layout.js
class TableLayout {
  notifyObservers(event) {
    this.observers.forEach(observer => {
      switch (event) {
        case 'columns':
          observer.onColumnsChange(this)
          break
        case 'scrollable':
          observer.onScrollableChange(this)
          break
      }
    })
  }
}
```

---

## 6. Props 完整说明

### 6.1 table.vue Props

| Prop | 类型 | 默认值 | 说明 |
|------|-----|-------|------|
| `data` | Array | [] | 表格数据 |
| `size` | String | 'small' | 尺寸 (small/medium/large) |
| `height` | String/Number | - | 固定高度 |
| `maxHeight` | String/Number | - | 最大高度 |
| `fit` | Boolean | true | 列宽自适应 |
| `stripe` | Boolean | false | 斑马纹 |
| `border` | Boolean | false | 纵横边框 |
| `outerBorder` | Boolean | true | 外边框 |
| `rowBorder` | Boolean | true | 行边框 |
| `colBorder` | Boolean | false | 列边框 |
| `rowKey` | String/Function | - | 行标识字段 |
| `showHeader` | Boolean | true | 显示表头 |
| `showSummary` | Boolean | false | 显示汇总行 |
| `sumText` | String | '合计' | 汇总行首列文本 |
| `summaryMethod` | Function | - | 自定义汇总方法 |
| `rowClassName` | String/Function | - | 行类名 |
| `rowStyle` | Object/Function | - | 行样式 |
| `cellClassName` | String/Function | - | 单元格类名 |
| `cellStyle` | Object/Function | - | 单元格样式 |
| `headerRowClassName` | String/Function | - | 表头行类名 |
| `headerRowStyle` | Object/Function | - | 表头行样式 |
| `headerCellClassName` | String/Function | - | 表头单元格类名 |
| `headerCellStyle` | Object/Function | - | 表头单元格样式 |
| `highlightCurrentRow` | Boolean | false | 高亮当前行 |
| `currentRowKey` | String/Number | - | 当前行 key |
| `expandRowKeys` | Array | - | 展开行的 keys |
| `defaultExpandAll` | Boolean | false | 默认展开所有 |
| `defaultSort` | Object | - | 默认排序 { prop, order } |
| `spanMethod` | Function | - | 合并单元格方法 |
| `selectOnIndeterminate` | Boolean | true | 半选时点击全选 |
| `pagination` | Object | {} | 分页配置 |
| `autoScrollToTop` | Boolean | false | 翻页后滚动到顶部 |
| `extCls` | String | '' | 额外类名 |
| `setting` | Object | { columns: [] } | 表格设置配置 |
| `cellAttributes` | Function/Object | - | 单元格属性 |
| `headerCellAttributes` | Function/Object | - | 表头单元格属性 |
| `virtualRender` | Object/Boolean | false | 虚拟滚动配置 |
| `scrollLoading` | Object | { isLoading: false } | 滚动加载配置 |
| `shiftMultiChecked` | Boolean | false | 启用 Shift 多选 |
| `darkHeader` | Boolean | false | 深色表头 |
| `rowAutoHeight` | Boolean | false | 行自动高度 |

---

## 7. Events 事件

| 事件名 | 参数 | 说明 |
|-------|-----|------|
| `selection-change` | selection | 选择变化 |
| `select` | selection, row | 行被选中 |
| `select-all` | selection | 全选切换 |
| `sort-change` | { column, prop, order } | 排序变化 |
| `filter-change` | filters, allFilters | 筛选变化 |
| `current-change` | currentRow, oldCurrentRow | 当前行变化 |
| `expand-change` | row, expandRows | 展开行变化 |
| `row-click` | row, event, column, rowIndex, columnIndex | 行点击 |
| `row-dblclick` | row, event, column, rowIndex, columnIndex | 行双击 |
| `row-contextmenu` | row, event, column, rowIndex, columnIndex | 行右键 |
| `cell-click` | row, column, cell, event, rowIndex, columnIndex | 单元格点击 |
| `cell-dblclick` | row, column, cell, event, rowIndex, columnIndex | 单元格双击 |
| `cell-mouse-enter` | row, column, cell, event | 鼠标进入单元格 |
| `cell-mouse-leave` | row, column, cell, event | 鼠标离开单元格 |
| `row-mouse-enter` | index, event, row | 鼠标进入行 |
| `row-mouse-leave` | index, event, row | 鼠标离开行 |
| `header-click` | column, event | 表头点击 |
| `header-contextmenu` | column, event | 表头右键 |
| `header-dragend` | newWidth, oldWidth, column, event | 列宽拖拽结束 |
| `page-change` | page, limit | 页码变化 |
| `page-limit-change` | currentLimit, prevLimit | 每页条数变化 |
| `scroll-end` | - | 滚动到底部 |

---

## 8. Methods 方法

| 方法名 | 参数 | 说明 |
|-------|-----|------|
| `clearSelection` | - | 清空选择 |
| `toggleRowSelection` | row, selected | 切换行选择状态 |
| `toggleAllSelection` | - | 切换全选 |
| `setCurrentRow` | row | 设置当前行 |
| `toggleRowExpansion` | row, expanded | 切换行展开状态 |
| `clearSort` | - | 清空排序 |
| `clearFilter` | - | 清空筛选 |
| `doLayout` | - | 重新布局 |
| `sort` | prop, order | 手动排序 |
| `scrollToTop` | - | 滚动到顶部 |

---

## 9. 特殊功能实现

### 9.1 固定列实现

固定列通过**复制表格**的方式实现，左右各有独立的表格元素：

```html
<!-- 主表格 -->
<div class="bk-table-header-wrapper">...</div>
<div class="bk-table-body-wrapper">...</div>

<!-- 左固定列（覆盖在左侧） -->
<div class="bk-table-fixed" v-if="fixedColumns.length > 0">
  <div class="bk-table-fixed-header-wrapper">...</div>
  <div class="bk-table-fixed-body-wrapper">...</div>
</div>

<!-- 右固定列（覆盖在右侧） -->
<div class="bk-table-fixed-right" v-if="rightFixedColumns.length > 0">
  <div class="bk-table-fixed-header-wrapper">...</div>
  <div class="bk-table-fixed-body-wrapper">...</div>
</div>
```

滚动同步通过监听主表格的 scroll 事件实现：

```javascript
this.bodyWrapper.addEventListener('scroll', function() {
  // 同步 header 滚动
  headerWrapper.scrollLeft = this.scrollLeft
  // 同步固定列的纵向滚动
  refs.fixedBodyWrapper.scrollTop = this.scrollTop
  refs.rightFixedBodyWrapper.scrollTop = this.scrollTop
})
```

### 9.2 虚拟滚动实现

当数据量大时，可启用虚拟滚动优化性能：

```javascript
// table-body.js
if (this.virtualRender) {
  return (
    <bk-virtual-render
      list={this.data}
      height={this.virtualRenderOpt.height}
      lineHeight={this.virtualRenderOpt.lineHeight}
      {...{
        scopedSlots: {
          default: (slot) => (
            <table>
              <tbody>{this._l(slot.data, renderRows)}</tbody>
            </table>
          )
        }
      }}
    />
  )
}
```

### 9.3 Shift 多选实现

`use-shift-key.js` 实现了按住 Shift 键批量选择的功能：

```javascript
// 记录起点和终点
const store = { start: null, end: null }

// 监听 Shift 键
const handleKeyDown = (e) => {
  if (e.key === 'Shift') isShiftKeyDown = true
}

// 选择时计算范围
const setStore = (row, index) => {
  if (!isShiftKeyDown) return false
  if (store.start === null) {
    store.start = { index, row }
    return false
  }
  store.end = { index, row }
  return true  // 返回 true 表示需要批量选择
}

// 在 rowSelectedChanged 中处理
if (this.table.shiftMulti.setStore(row, index)) {
  const { start, end } = this.table.shiftMulti.getStore()
  this.table.data.slice(start.index, end.index + 1).forEach(child => {
    states.selection.push(child)
  })
}
```

---

## 10. 工具函数

### util.js 导出的函数

| 函数名 | 功能 |
|-------|-----|
| `getValueByPath(object, prop)` | 按路径获取对象属性值 |
| `getPropByPath(obj, path, strict)` | 按路径获取属性（返回 { o, k, v }） |
| `getCell(event)` | 从事件获取 TD 元素 |
| `orderBy(array, sortKey, reverse, sortMethod, sortBy)` | 数组排序 |
| `getColumnById(table, columnId)` | 通过 ID 获取列配置 |
| `getColumnByCell(table, cell)` | 通过单元格获取列配置 |
| `getRowIdentity(row, rowKey)` | 获取行标识 |
| `isShallowEqual(current, previous)` | 浅比较对象 |
| `createFuncWrapper(handler)` | 创建防抖函数包装器 |

---

## 11. 总结

bk-table 组件的核心设计思想：

1. **分层架构**：主组件 + 状态管理 + 布局管理 + 子组件，职责清晰
2. **集中式状态管理**：TableStore 统一管理所有状态，通过 commit 触发变更
3. **观察者模式**：TableLayout 通知子组件响应布局变化
4. **组合式设计**：通过 table-column 声明式定义列
5. **性能优化**：支持虚拟滚动、防抖处理、行高缓存等
