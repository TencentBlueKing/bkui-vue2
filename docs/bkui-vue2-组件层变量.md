# bkui-vue2 第二层组件变量（草案）

根据组件当前样式整理，并已写进组件代码。导航三块没有改。

- 默认值仍是组件现在的旧色，只在第一层变量缺失时兜底。近似色一旦引用第一层，显示会变成第一层色值。
- 完全一致的，引用第一层。
- 近似色按 `bkui-vue2-近似色决策.md` 填上。填上之后显示的是第一层色值，默认值仍是旧色，只做兜底。
- 导航（navigation、navigation-menu-group、navigation-menu-item）整份不接入，维持写死色值。
- 其余仍写「无」的是特例，先维持写死，不再补变量。明细在 `bkui-vue2-未匹配颜色.md`。
- 变量名末尾的 `-2`、`-3` 表示同一个状态里还有第二种、第三种颜色。常见情况是主题色和白色文字分开。
- 背景和边框是同一个色时，合成一个 `color` 变量。只有文字时用 `text-color`。
- 圆形 `50%` / `100%`、不对称圆角不做成变量，写在「保留原值的圆角」。

建议变量 864 条。导航三块不接入后，760 条引用了第一层，104 条仍是「无」。

## alert 警告提示

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-alert-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-alert。近似填入，显示变成 #4D4F56 |
| --bk-alert-error-text-color | --bk-color-danger-02 | #EA3636 | 当前 #ea3636。text。例如 .bk-alert-error.icon-info |
| --bk-alert-error-border-color | --bk-color-danger-05 | #FFD2D2 | 当前 #ffd2d2。border。例如 .bk-alert-error。近似填入，显示变成 #FFDDDD |
| --bk-alert-error-bg | --bk-color-danger-06 | #FFEDED | 当前 #ffeded。bg。例如 .bk-alert-error。近似填入，显示变成 #FFEBEB |
| --bk-alert-info-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-alert-info.icon-info |
| --bk-alert-info-border-color | --bk-color-brand-05 | #C5DAFF | 当前 #c5daff。border。例如 .bk-alert-info。近似填入，显示变成 #CDDFFE |
| --bk-alert-info-bg | --bk-color-brand-07 | #F0F8FF | 当前 #f0f8ff。bg。例如 .bk-alert-info。近似填入，显示变成 #F0F5FF |
| --bk-alert-success-text-color | --bk-color-success-02 | #2DCB56 | 当前 #2dcb56。text。例如 .bk-alert-success.icon-info。近似填入，显示变成 #2CAF5E |
| --bk-alert-success-border-color | --bk-color-success-05 | #94F5A4 | 代码变量 `--bk-alert-success-success-05`。2026-11-06 从 Success-04 改到 Success-05，与 info / warning / error 的边框档位一致。显示 `#CBF0DA` |
| --bk-alert-success-bg | --bk-color-success-07 | #F2FFF4 | 当前 #f2fff4。bg。例如 .bk-alert-success。近似填入，显示变成 #EBFAF0 |
| --bk-alert-warning-text-color | --bk-color-warning-02 | #FF9C01 | 当前 #ff9c01。text。例如 .bk-alert-warning.icon-info。近似填入，显示变成 #F59500 |
| --bk-alert-warning-border-color | --bk-color-warning-05 | #FFDFAC | 当前 #ffdfac。border。例如 .bk-alert-warning。近似填入，显示变成 #FCE5C0 |
| --bk-alert-warning-bg | --bk-color-warning-07 | #FFF4E2 | 当前 #fff4e2。bg。例如 .bk-alert-warning。近似填入，显示变成 #FDF4E8 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-alert-radius-s | --bk-radius-s | 2px | 例如 .bk-alert。共 1 处 |

## back-top 回到顶部

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-back-top-text-color | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .bk-back-to-top.bk-icon |
| --bk-back-top-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #ffffff。bg。例如 .bk-back-to-top |
| --bk-back-top-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-back-to-top.bk-icon:hover |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-back-top-radius | 无 | 26px | 例如 .bk-back-to-top。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-back-to-top |

## badge 徽标

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-badge-border-color | --bk-color-neutral-04 | #C3CDD7 | 当前 $borderColor。border。例如 .bk-badge-wrapper.bk-badge。近似填入，显示变成 #C4C6CC |
| --bk-badge-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-badge-wrapper.bk-badge |
| --bk-badge-danger-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 9 处 |
| --bk-badge-danger-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg/border。例如 .bk-step-number.bk-step-icon.bk-step-text、.bk-badge.bk-danger.is-icon。共 3 处 |
| --bk-badge-error-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 2 处 |
| --bk-badge-info-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 7 处 |
| --bk-badge-info-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg/border。例如 .bk-step-number.bk-step-icon.bk-step-text、.bk-badge.bk-info.is-icon。共 3 处 |
| --bk-badge-primary-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 7 处 |
| --bk-badge-primary-color-2 | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 2 处 |
| --bk-badge-primary-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg/border。例如 .bk-step-number.bk-step-icon.bk-step-text、.bk-badge.bk-primary.is-icon。共 3 处 |
| --bk-badge-success-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 7 处。近似填入，显示变成 #2CAF5E |
| --bk-badge-success-color-2 | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 2 处 |
| --bk-badge-success-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg/border。例如 .bk-step-number.bk-step-icon.bk-step-text、.bk-badge.bk-success.is-icon。共 3 处 |
| --bk-badge-warning-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 2 处 |
| --bk-badge-warning-color-2 | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 7 处。近似填入，显示变成 #F59500 |
| --bk-badge-warning-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg/border。例如 .bk-step-number.bk-step-icon.bk-step-text、.bk-badge.bk-warning.is-icon。共 3 处 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-badge-radius | 无 | 18px | 例如 .bk-badge-wrapper.bk-badge。共 1 处 |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #FFFFFF | --bk-color-neutral-10 | badge/badge.vue | const style = (this.icon && { color: this.theme \|\| '', borderColor: 'transparent', backgroundColor: '#fff' }) \|\| { |
| #FFFFFF | --bk-color-neutral-10 | badge/badge.vue | color: this.hexTheme ? '#fff' : '', |

## big-tree 大树

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-big-tree-border-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。border。例如 .node-options.node-checkbox.is-indeterminate |
| --bk-big-tree-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-big-tree.bk-big-tree-empty。近似填入，显示变成 #4D4F56 |
| --bk-big-tree-color | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text/border。例如 .bk-big-tree-node.node-options.node-folder-icon、.bk-big-tree-node.node-options.node-checkbox。共 2 处 |
| --bk-big-tree-border-color-2 | --bk-color-neutral-04 | #C3CDD7 | 当前 #c3cdd7。border。例如 .bk-big-tree-node.has-link-line.is-root、.bk-big-tree-node.has-link-line。共 2 处。近似填入，显示变成 #C4C6CC |
| --bk-big-tree-bg | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .bk-big-tree |
| --bk-big-tree-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .node-options.node-checkbox.is-indeterminate |
| --bk-big-tree-checked-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。border/bg。例如 .node-options.node-checkbox.is-checked。共 2 处 |
| --bk-big-tree-checked-border-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。border。例如 .node-options.node-checkbox.is-checked |
| --bk-big-tree-disabled-checked-bg | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .node-checkbox.is-checked.is-disabled |
| --bk-big-tree-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。border。例如 .node-options.node-checkbox.is-disabled |
| --bk-big-tree-hover-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-big-tree-node.node-options.node-folder-icon:hover。近似填入，显示变成 #4D4F56 |
| --bk-big-tree-hover-bg | --bk-color-brand-07 | #F1F7FF | 当前 #f1f7ff。bg。例如 .bk-big-tree-node:hover。近似填入，显示变成 #F0F5FF |
| --bk-big-tree-selected-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。bg/text。例如 .bk-big-tree-node.is-selected.node-icon、.bk-big-tree-node.is-selected.node-content。共 2 处 |
| --bk-big-tree-selected-bg | --bk-color-brand-06 | #E1ECFF | 当前 #e1ecff。bg。例如 .bk-big-tree-node.is-selected |
| --bk-big-tree-selected-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-big-tree-node.is-selected.node-icon |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-big-tree-radius-s | --bk-radius-s | 2px | 例如 .bk-big-tree-node.node-options.node-checkbox。共 1 处 |
| --bk-big-tree-radius | 无 | 3px | 例如 .bk-big-tree。共 1 处 |

## breadcrumb 面包屑

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-breadcrumb-text-color | --bk-color-brand-02 | #0082FF | 当前 $primaryHoverColor。text。例如 .bk-breadcrumb。近似填入，显示变成 #3A84FF |
| --bk-breadcrumb-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-breadcrumb.is-link。近似填入，显示变成 #4D4F56 |
| --bk-breadcrumb-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-breadcrumb。共 2 处 |
| --bk-breadcrumb-hover-text-color | --bk-color-brand-02 | #0082FF | 当前 $primaryHoverColor。text。例如 .bk-breadcrumb.is-link:hover。近似填入，显示变成 #3A84FF |

## button 按钮

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-button-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-text-button |
| --bk-button-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2、$fnMainColor。text/bg。例如 .bk-button、.bk-button.bk-default.bk-button-loading。共 7 处。近似填入，显示变成 #4D4F56 |
| --bk-button-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-button、.bk-button-hover。共 2 处 |
| --bk-button-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-button、.bk-button.bk-button-loading。共 4 处 |
| --bk-button-active-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text。例如 .bk-button.bk-default.active:active、.bk-button-text.bk-default.active:active。共 4 处 |
| --bk-button-active-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-default.is-loading.active:active。共 2 处 |
| --bk-button-active-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-default.is-loading.active:active。共 2 处 |
| --bk-button-danger-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-button-hover.bk-danger。近似填入，显示变成 #4D4F56 |
| --bk-button-danger-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-button-hover.bk-danger |
| --bk-button-danger-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。bg/border/text。例如 .bk-button.bk-danger、.is-loading.is-outline.bk-button-loading。共 9 处 |
| --bk-button-danger-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor、#fff。text/bg。例如 .bk-button.bk-danger、.bk-button.bk-danger.is-outline。共 4 处 |
| --bk-button-danger-active-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-danger.is-loading.active:active |
| --bk-button-danger-active-color | --bk-color-danger-01 | #DB2626 | 当前 $newRedColor4。bg/border/text。例如 .bk-button.bk-danger.active:active、.bk-danger.is-outline.active:active。共 9 处。近似填入，显示变成 #E71818 |
| --bk-button-danger-active-color-2 | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。bg/border。例如 .bk-danger.is-loading.active:active。共 2 处 |
| --bk-button-danger-active-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.active.bk-button-loading:active、.bk-danger.is-outline.active:active。共 5 处 |
| --bk-button-danger-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-button-hover.bk-danger.is-disabled |
| --bk-button-danger-disabled-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。bg/border。例如 .bk-button.bk-danger.is-disabled、.bk-button-hover.bk-danger.is-disabled。共 3 处 |
| --bk-button-danger-disabled-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。text/bg。例如 .bk-button.bk-danger.is-disabled、.bk-button-hover.bk-danger.is-disabled。共 2 处 |
| --bk-button-danger-hover-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-danger.is-loading.hover:hover |
| --bk-button-danger-hover-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。bg/border。例如 .bk-danger.is-loading.hover:hover、.bk-danger.is-outline.hover:hover。共 8 处 |
| --bk-button-danger-hover-text-color | --bk-color-danger-03 | #F72239 | 当前 $dangerHoverColor。text。例如 .bk-text-button.bk-danger:hover。改走 Danger-03，显示 #FF5656 |
| --bk-button-danger-hover-color-2 | --bk-color-danger-03 | #FF5656 | 当前 $newRedColor1。bg/border/text。例如 .bk-button.bk-danger.hover:hover、.bk-button-text.bk-danger.hover:hover。共 3 处 |
| --bk-button-danger-hover-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.hover.bk-button-loading:hover、.bk-danger.is-outline.hover:hover。共 5 处 |
| --bk-button-disabled-active-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .is-outline.is-disabled.active:active、.bk-button-text.is-disabled.active:active。共 4 处 |
| --bk-button-disabled-active-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .is-outline.is-disabled.active:active。共 3 处 |
| --bk-button-disabled-active-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .is-outline.is-disabled.active:active。共 3 处 |
| --bk-button-disabled-hover-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .is-outline.is-disabled.hover:hover、.bk-button-text.is-disabled.hover:hover。共 5 处 |
| --bk-button-disabled-hover-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .is-outline.is-disabled.hover:hover、.bk-button-group.bk-button.is-disabled:hover。共 4 处 |
| --bk-button-disabled-hover-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .is-outline.is-disabled.hover:hover。共 3 处 |
| --bk-button-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-button.bk-default.is-disabled、.bk-button.is-outline.is-disabled。共 6 处 |
| --bk-button-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-button.bk-default.is-disabled、.bk-button.is-outline.is-disabled。共 5 处 |
| --bk-button-disabled-text-color-2 | --bk-color-neutral-06 | #E6E6E6 | 当前 #e6e6e6。text。例如 .bk-text-button.is-disabled。近似填入，显示变成 #EAEBF0 |
| --bk-button-disabled-bg | --bk-color-neutral-09 | #FAF9FD | 当前 #faf9fd。bg。例如 .bk-button.bk-default.is-disabled。近似填入，显示变成 #FAFBFD |
| --bk-button-disabled-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-button.is-outline.is-disabled、.bk-button-text.bk-default.is-disabled。共 4 处 |
| --bk-button-hover-text-color | --bk-color-brand-03 | #0082FF | 当前 $primaryHoverColor。text。例如 .bk-text-button:hover。改走 Brand-03，显示 #699DF4。按钮组边框仍用 brand-02 |
| --bk-button-hover-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text。例如 .bk-button-group.bk-button.hover:hover。共 2 处 |
| --bk-button-hover-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-button.bk-default.hover:hover、.bk-button-text.bk-default.hover:hover。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-button-hover-border-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。border。例如 .bk-button.bk-default.hover:hover、.bk-button-text.bk-default.hover:hover。共 2 处 |
| --bk-button-hover-border-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-default.is-loading.hover:hover。共 2 处 |
| --bk-button-hover-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-default.is-loading.hover:hover。共 2 处 |
| --bk-button-hover-text-color-3 | --bk-color-neutral-01 | darken(#63656E, 10%) | 当前 darken($fnMainColor, 10%)。text。例如 .bk-text-button.bk-default:hover。改接 Neutral-01，显示 #313238，不再用 darken |
| --bk-button-info-text-color | --bk-color-brand-03 | #699DF4 | 当前 $newMainColor1。text。例如 .bk-text-button.bk-info |
| --bk-button-info-hover-text-color | --bk-color-brand-04 | #7AB9FA | 当前 $infoHoverColor。text。例如 .bk-text-button.bk-info:hover。近似填入，显示变成 #A3C5FD |
| --bk-button-primary-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/border/text。例如 .bk-button.bk-primary、.is-loading.is-outline.bk-button-loading。共 9 处 |
| --bk-button-primary-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-button-hover.bk-primary。近似填入，显示变成 #4D4F56 |
| --bk-button-primary-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-button-hover.bk-primary |
| --bk-button-primary-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor、#fff。text/bg。例如 .bk-button.bk-primary、.bk-button.bk-primary.is-outline。共 4 处 |
| --bk-button-primary-active-color | --bk-color-brand-01 | #2761DD | 当前 $newMainColor4。bg/border/text。例如 .bk-button.bk-primary.active:active、.bk-primary.is-outline.active:active。共 9 处。近似填入，显示变成 #1768EF |
| --bk-button-primary-active-color-2 | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/border。例如 .bk-primary.is-loading.active:active。共 2 处 |
| --bk-button-primary-active-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-primary.is-loading.active:active |
| --bk-button-primary-active-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.active.bk-button-loading:active、.bk-primary.is-outline.active:active。共 5 处 |
| --bk-button-primary-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-button-hover.bk-primary.is-disabled |
| --bk-button-primary-disabled-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。bg/border。例如 .bk-button.bk-primary.is-disabled、.bk-button-hover.bk-primary.is-disabled。共 3 处 |
| --bk-button-primary-disabled-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。text/bg。例如 .bk-button.bk-primary.is-disabled、.bk-button-hover.bk-primary.is-disabled。共 2 处 |
| --bk-button-primary-hover-text-color | --bk-color-brand-03 | #0082FF | 当前 $primaryHoverColor。text。例如 .bk-text-button.bk-primary:hover。改走 Brand-03，显示 #699DF4 |
| --bk-button-primary-hover-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/border。例如 .bk-primary.is-loading.hover:hover、.bk-primary.is-outline.hover:hover。共 8 处 |
| --bk-button-primary-hover-color-2 | --bk-color-brand-03 | #699DF4 | 当前 $newMainColor1。bg/border/text。例如 .bk-button.bk-primary.hover:hover、.bk-button-text.bk-primary.hover:hover。共 3 处 |
| --bk-button-primary-hover-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-primary.is-loading.hover:hover |
| --bk-button-primary-hover-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.hover.bk-button-loading:hover、.bk-primary.is-outline.hover:hover。共 5 处 |
| --bk-button-selected-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text。例如 .bk-button-group.bk-button.is-selected。共 2 处 |
| --bk-button-selected-bg | --bk-color-brand-06 | #E1ECFF | 当前 $newMainColor3。bg。例如 .bk-button-group.bk-button.is-selected |
| --bk-button-success-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg/border/text。例如 .bk-button.bk-success、.is-loading.is-outline.bk-button-loading。共 9 处。近似填入，显示变成 #2CAF5E |
| --bk-button-success-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-button-hover.bk-success。近似填入，显示变成 #4D4F56 |
| --bk-button-success-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-button-hover.bk-success |
| --bk-button-success-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor、#fff。text/bg。例如 .bk-button.bk-success、.bk-button.bk-success.is-outline。共 4 处 |
| --bk-button-success-active-color | --bk-color-success-01 | #1AB943 | 当前 $newGreenColor4。bg/border/text。例如 .bk-button.bk-success.active:active、.bk-success.is-outline.active:active。共 9 处。近似填入，显示变成 #299E56 |
| --bk-button-success-active-color-2 | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg/border。例如 .bk-success.is-loading.active:active。共 2 处。近似填入，显示变成 #2CAF5E |
| --bk-button-success-active-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-success.is-loading.active:active |
| --bk-button-success-active-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.active.bk-button-loading:active、.bk-success.is-outline.active:active。共 5 处 |
| --bk-button-success-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-button-hover.bk-success.is-disabled |
| --bk-button-success-disabled-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。bg/border。例如 .bk-button.bk-success.is-disabled、.bk-button-hover.bk-success.is-disabled。共 3 处 |
| --bk-button-success-disabled-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。text/bg。例如 .bk-button.bk-success.is-disabled、.bk-button-hover.bk-success.is-disabled。共 2 处 |
| --bk-button-success-hover-text-color | --bk-color-success-03 | #00C873 | 当前 $successHoverColor。text。例如 .bk-text-button.bk-success:hover。改走 Success-03，显示 #65C389 |
| --bk-button-success-hover-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg/border。例如 .bk-success.is-loading.hover:hover、.bk-success.is-outline.hover:hover。共 8 处。近似填入，显示变成 #2CAF5E |
| --bk-button-success-hover-color-2 | --bk-color-success-03 | #45E35F | 当前 $newGreenColor1。bg/border/text。例如 .bk-button.bk-success.hover:hover、.bk-button-text.bk-success.hover:hover。共 3 处。近似填入，显示变成 #65C389 |
| --bk-button-success-hover-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-success.is-loading.hover:hover |
| --bk-button-success-hover-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.hover.bk-button-loading:hover、.bk-success.is-outline.hover:hover。共 5 处 |
| --bk-button-warning-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-button-hover.bk-warning。近似填入，显示变成 #4D4F56 |
| --bk-button-warning-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-button-hover.bk-warning |
| --bk-button-warning-color | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。bg/border/text。例如 .bk-button.bk-warning、.is-loading.is-outline.bk-button-loading。共 9 处。近似填入，显示变成 #F59500 |
| --bk-button-warning-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor、#fff。text/bg。例如 .bk-button.bk-warning、.bk-button.bk-warning.is-outline。共 4 处 |
| --bk-button-warning-active-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-warning.is-loading.active:active |
| --bk-button-warning-active-color | --bk-color-warning-01 | #EB9000 | 当前 $newOrangeColor4。bg/border/text。例如 .bk-button.bk-warning.active:active、.bk-warning.is-outline.active:active。共 9 处。近似填入，显示变成 #E38B02 |
| --bk-button-warning-active-color-2 | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。bg/border。例如 .bk-warning.is-loading.active:active。共 2 处。近似填入，显示变成 #F59500 |
| --bk-button-warning-active-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.active.bk-button-loading:active、.bk-warning.is-outline.active:active。共 5 处 |
| --bk-button-warning-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-button-hover.bk-warning.is-disabled |
| --bk-button-warning-disabled-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。bg/border。例如 .bk-button.bk-warning.is-disabled、.bk-button-hover.bk-warning.is-disabled。共 3 处 |
| --bk-button-warning-disabled-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。text/bg。例如 .bk-button.bk-warning.is-disabled、.bk-button-hover.bk-warning.is-disabled。共 2 处 |
| --bk-button-warning-hover-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-warning.is-loading.hover:hover |
| --bk-button-warning-hover-text-color | --bk-color-warning-03 | #FF9600 | 当前 $warningHoverColor。text。例如 .bk-text-button.bk-warning:hover。改走 Warning-03，显示 #F8B64F |
| --bk-button-warning-hover-color | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。bg/border。例如 .bk-warning.is-loading.hover:hover、.bk-warning.is-outline.hover:hover。共 8 处。近似填入，显示变成 #F59500 |
| --bk-button-warning-hover-color-2 | --bk-color-warning-03 | #FFB848 | 当前 $newOrangeColor1。bg/border/text。例如 .bk-button.bk-warning.hover:hover、.bk-button-text.bk-warning.hover:hover。共 3 处。近似填入，显示变成 #F8B64F |
| --bk-button-warning-hover-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg/text。例如 .is-outline.hover.bk-button-loading:hover、.bk-warning.is-outline.hover:hover。共 5 处 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-button-radius-none | --bk-radius-none | 0 | 例如 .bk-button-group.bk-button。共 1 处 |
| --bk-button-radius-s | --bk-radius-s | 2px | 例如 .bk-button、.bk-button-hover。共 2 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 100% | 3 | .bk-button.bk-button-loading |
| 50% | 3 | .bk-button.bk-button-icon-loading.loading |
| 2px 0 0 2px | 1 | .bk-button-group.bk-button |
| 0 2px 2px 0 | 1 | .bk-button-group.bk-button |

## card 卡片

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-card-text-color | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .bk-card-head.bk-card-head-icon |
| --bk-card-text-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .bk-card.bk-card-head.card-edit |
| --bk-card-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。border。例如 .bk-card |
| --bk-card-border-color-2 | --bk-color-neutral-07 | #F0F2F5 | 当前 #f0f2f5。border。例如 .bk-card.collapse、.bk-card-foot。共 2 处。近似填入，显示变成 #F0F1F5 |
| --bk-card-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-card |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-card-radius-s | --bk-radius-s | 2px | 例如 .bk-card。共 1 处 |

## cascade 级联选择

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-cascade-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor、#3A84FF。text。例如 .bk-cascade-options.bk-option-content.bk-option-icon、.bk-button-icon-loading。共 2 处 |
| --bk-cascade-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2、$fnMainColor、#63656E。text。例如 .bk-cascade、.bk-cascade-dropdown-content。共 4 处。近似填入，显示变成 #4D4F56 |
| --bk-cascade-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5、$newBlackColor3、#979BA5。text。例如 .bk-cascade.bk-cascade-angle、.bk-cascade-options.bk-option-group.bk-option-group-name。共 4 处 |
| --bk-cascade-text-color-4 | --bk-color-neutral-04 | #C3CDD7 | 当前 $fnMinorColor。text。例如 .bk-cascade-search-input。近似填入，显示变成 #C4C6CC |
| --bk-cascade-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor、#c4c6cc。border/bg。例如 .bk-cascade、.bk-cascade.bk-cascade-clear。共 2 处 |
| --bk-cascade-color-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1、#dcdee5、#DCDEE5。border/bg。例如 .bk-cascade-dropdown-content、.bk-cascade-options。共 6 处 |
| --bk-cascade-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $itemBackground。bg。例如 .bk-cascade-tag-list.bk-cascade-tag-item |
| --bk-cascade-bg-2 | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-cascade.is-readonly.is-loading。近似填入，显示变成 #FAFBFD |
| --bk-cascade-bg-3 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-cascade-extension |
| --bk-cascade-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、#ffffff。text/bg/border。例如 .bk-cascade.bk-cascade-clear、.bk-cascade-dropdown-content。共 4 处 |
| --bk-cascade-disabled-selected-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $disabledColor。text。例如 .bk-option.is-selected.is-disabled、.is-selected.is-disabled.bk-option-icon。共 2 处 |
| --bk-cascade-disabled-selected-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $disabledBackground。bg。例如 .bk-option.is-selected.is-disabled |
| --bk-cascade-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .bk-cascade.is-disabled、.bk-cascade-options.bk-option.is-disabled。共 2 处 |
| --bk-cascade-disabled-bg | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-cascade.is-disabled。近似填入，显示变成 #FAFBFD |
| --bk-cascade-disabled-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $disabledBackground。bg。例如 .bk-cascade-options.bk-option.is-disabled |
| --bk-cascade-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-cascade.is-focus、.bk-cascade:focus。共 2 处 |
| --bk-cascade-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-cascade-options.bk-option.is-highlight:hover |
| --bk-cascade-hover-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-cascade-tag-list.bk-cascade-tag-item.remove-key:hover。近似填入，显示变成 #4D4F56 |
| --bk-cascade-hover-bg | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。bg。例如 .bk-cascade.bk-cascade-clear:hover |
| --bk-cascade-hover-bg-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .bk-cascade-tag-list.bk-cascade-tag-item:hover |
| --bk-cascade-hover-bg-3 | --bk-color-brand-07 | #EAF3FF | 当前 $hoverBackground。bg。例如 .bk-options-single.bk-option.is-highlight:hover、.bk-cascade-options.bk-option.is-highlight:hover。共 2 处。近似填入，显示变成 #F0F5FF |
| --bk-cascade-hover-bg-4 | --bk-color-neutral-07 | #F0F1F5 | 当前 #f0f1f5。bg。例如 .bk-cascade-extension:hover |
| --bk-cascade-selected-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-cascade-options.bk-option.is-selected |
| --bk-cascade-selected-text-color-2 | --bk-color-neutral-04 | #C3CDD7 | 当前 $fnMinorColor。text。例如 .bk-cascade.is-default-trigger.is-unselected。近似填入，显示变成 #C4C6CC |
| --bk-cascade-selected-bg | --bk-color-neutral-08 | #F4F6FA | 当前 $selectedBackground。bg。例如 .bk-options-single.bk-option.is-selected、.bk-cascade-options.bk-option.is-selected。共 2 处。近似填入，显示变成 #F5F7FA |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-cascade-radius-s | --bk-radius-s | 2px | 例如 .bk-cascade、.bk-cascade-dropdown-content。共 4 处 |
| --bk-cascade-radius | 无 | 3px | 例如 .bk-cascade-options、.bk-cascade-panel.bk-cascade-panel-ul。共 2 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 2 | .bk-cascade.bk-cascade-clear |
| 0px 0px 1px 1px | 1 | .bk-cascade-extension |

## checkbox 复选框

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-checkbox-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-form-checkbox.bk-checkbox-text。近似填入，显示变成 #4D4F56 |
| --bk-checkbox-border-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。border。例如 .bk-form-checkbox.bk-checkbox |
| --bk-checkbox-checked-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/bg。例如 .is-indeterminate.is-checked.bk-checkbox、.bk-form-checkbox.is-checked.bk-checkbox。共 4 处 |
| --bk-checkbox-checked-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg/border。例如 .is-indeterminate.is-checked.bk-checkbox、.bk-form-checkbox.is-checked.bk-checkbox。共 2 处 |
| --bk-checkbox-disabled-checked-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border/bg。例如 .is-disabled.is-checked.bk-checkbox。共 2 处 |
| --bk-checkbox-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-form-checkbox.is-disabled.bk-checkbox |
| --bk-checkbox-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-form-checkbox.is-disabled.bk-checkbox |
| --bk-checkbox-focus-border-color | --bk-color-brand-02 | #3C96FF | 当前 $formBorderFocusColor。border。例如 .bk-form-checkbox.bk-checkbox:focus。近似填入，显示变成 #3A84FF |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-checkbox-radius-s | --bk-radius-s | 2px | 例如 .is-indeterminate.is-checked.bk-checkbox、.bk-form-checkbox.bk-checkbox。共 2 处 |

## collapse 折叠面板

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-collapse-text-color | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-collapse、.bk-collapse.bk-collapse-content。共 2 处。近似填入，显示变成 #4D4F56 |

## collapse-item 折叠项

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-collapse-item-text-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-collapse-item.bk-collapse-item-detail |
| --bk-collapse-item-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-collapse-item.is-disabled |
| --bk-collapse-item-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-collapse-item-header.custom-trigger-layout.custom-trigger-angle:hover、.bk-collapse-item.bk-collapse-item-hover:hover。共 2 处 |

## color-picker 颜色选择器

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-color-picker-color | 无 | #000000 | 当前 #000。gradient。例如 .bk-color-picker-saturation.bk-color-picker-saturation-black |
| --bk-color-picker-color-2 | 无 | #0000FF | 当前 #00f。gradient。例如 .bk-color-picker-hue |
| --bk-color-picker-color-3 | 无 | #00FF00 | 当前 #0f0。gradient。例如 .bk-color-picker-hue |
| --bk-color-picker-color-4 | 无 | #00FFFF | 当前 #0ff。gradient。例如 .bk-color-picker-hue |
| --bk-color-picker-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-color-picker.bk-color-picker-show-dropdown |
| --bk-color-picker-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-color-picker、.bk-color-picker.bk-color-picker-text。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-color-picker-text-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-color-picker.bk-color-picker-icon.icon-angle-down |
| --bk-color-picker-color-5 | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border/text。例如 .bk-color-picker、.bk-color-picker.bk-color-picker-color.bk-color-picker-color-square。共 3 处 |
| --bk-color-picker-bg | --bk-color-danger-02 | #EA3536 | 当前 #ea3536。bg。例如 .bk-color-picker-empty。近似填入，显示变成 #EA3636 |
| --bk-color-picker-border-color-2 | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。border。例如 .bk-color-picker-recommend-container |
| --bk-color-picker-color-6 | 无 | #FF0000 | 当前 red。gradient。例如 .bk-color-picker-hue。共 2 处 |
| --bk-color-picker-color-7 | 无 | #FF00FF | 当前 #f0f。gradient。例如 .bk-color-picker-hue |
| --bk-color-picker-color-8 | 无 | #FFFF00 | 当前 #ff0。gradient。例如 .bk-color-picker-hue |
| --bk-color-picker-bg-2 | --bk-color-neutral-10 | #FFFFFF | 滑块手柄用 neutral-10。饱和度白渐变是取色蒙层，维持 #fff 到透明白，不进变量 |
| --bk-color-picker-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-color-picker.bk-color-picker-disabled.bk-color-picker-text、.bk-color-picker-disabled.bk-color-picker-icon.icon-angle-down。共 2 处 |
| --bk-color-picker-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-color-picker.bk-color-picker-disabled |
| --bk-color-picker-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-color-picker.bk-color-picker-disabled |
| --bk-color-picker-error-border-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。border。例如 .bk-color-picker-input-part.bk-color-picker-input-value.error |
| --bk-color-picker-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-color-picker-input.bk-color-picker-input-part.bk-color-picker-input-value:focus |
| --bk-color-picker-hover-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-color-picker:hover:focus |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-color-picker-radius | 无 | 1px | 例如 .bk-color-picker-hue.bk-color-picker-hue-pointer.bk-color-picker-hue-rectangle、.bk-color-picker-empty。共 2 处 |
| --bk-color-picker-radius-s | --bk-radius-s | 2px | 例如 .bk-color-picker、.bk-color-picker-input.bk-color-picker-input-part.bk-color-picker-input-value。共 2 处 |
| --bk-color-picker-radius-2 | 无 | 3px | 例如 .bk-color-picker-recommend-container.bk-color-picker-recommend.bk-color-picker-recommend-color。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-color-picker-pointer.bk-color-picker-circle |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #FFFFFF | --bk-color-neutral-10 | color-picker/color-picker.vue | :style="{ background: colorStr \|\| '#FFF' }"></span> |
| #FFFFFF | --bk-color-neutral-10 | color-picker/color-picker.vue | const whiteColorObj = formatColor('#FFFFFF') |
| #FFFFFF | --bk-color-neutral-10 | color-picker/utils.js | colorParam = '#FFFFFF' |

## common 公共样式

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-common-text-color | --bk-color-neutral-01 | #313238 | 当前 $newBlackColor1。text。例如 .bk-text-main |
| --bk-common-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-text-default。近似填入，显示变成 #4D4F56 |
| --bk-common-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-text-minor |
| --bk-common-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-bg-default |
| --bk-common-danger-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。bg/text。例如 .bk-bg-danger、.bk-text-danger。共 2 处 |
| --bk-common-primary-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/text。例如 .bk-bg-primary、.bk-text-primary。共 2 处 |
| --bk-common-success-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg/text。例如 .bk-bg-success、.bk-text-success。共 2 处。近似填入，显示变成 #2CAF5E |
| --bk-common-warning-color | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。bg/text。例如 .bk-bg-warning、.bk-text-warning。共 2 处。近似填入，显示变成 #F59500 |

## compose-form-item 组合表单项

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-compose-form-item-radius-none | --bk-radius-none | 0 | 例如 .bk-date-picker-editor.bk-tag-input.bk-search-select。共 1 处 |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #FAFBFD | --bk-color-neutral-09 | compose-form-item/compose-form-item.js | default: '#FAFBFD' |

## date-picker 日期选择

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-date-picker-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-date-picker-cells-focused、.bk-date-picker-cells-cell-today。共 4 处 |
| --bk-date-picker-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-date-picker-rel.bk-date-picker-editor、.bk-date-picker-cells。共 4 处。近似填入，显示变成 #4D4F56 |
| --bk-date-picker-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5、$newBlackColor3。text。例如 .bk-date-picker-footer-wrapper、.bk-date-picker-top-wrapper。共 4 处 |
| --bk-date-picker-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border/text。例如 .bk-date-picker-rel.bk-date-picker-editor、.bk-date-picker-rel.bk-date-picker-editor.only-bottom-border。共 7 处 |
| --bk-date-picker-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1、#dcdee5。border。例如 .bk-date-picker-dropdown、.bk-date-picker-footer-wrapper。共 5 处 |
| --bk-date-picker-bg | --bk-color-brand-06 | #E1ECFF | 当前 $newMainColor3。bg。例如 .bk-date-picker-cells-cell-range |
| --bk-date-picker-bg-2 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3、#fafbfd。bg。例如 .bk-date-picker-rel.bk-date-picker-editor.readonly、.bk-date-picker-footer-wrapper。共 4 处 |
| --bk-date-picker-bg-3 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-date-picker-dropdown |
| --bk-date-picker-disabled-hover-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-date-picker-cells-cell-week-label.bk-date-picker-cells-cell-disabled.bk-date-picker-cells-cell-disabled:hover:hover |
| --bk-date-picker-disabled-hover-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-date-picker-cells-cell-disabled.bk-date-picker-cells-cell-disabled:hover |
| --bk-date-picker-disabled-selected-bg | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。bg。例如 .bk-date-picker-cells-cell-disabled.bk-date-picker-cells-cell-selected |
| --bk-date-picker-disabled-selected-text-color | --bk-color-neutral-08 | #F7F7F7 | 当前 #f7f7f7。text。例如 .bk-date-picker-cells-cell-disabled.bk-date-picker-cells-cell-selected。近似填入，显示变成 #F5F7FA |
| --bk-date-picker-disabled-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor、#c4c6cc。text/border。例如 .bk-date-picker-rel.bk-date-picker-editor、.bk-date-picker-header.up-to-now.disabled。共 4 处 |
| --bk-date-picker-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-date-picker-editor.only-bottom-border.readonly |
| --bk-date-picker-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-date-picker-rel.bk-date-picker-editor |
| --bk-date-picker-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-date-picker-rel.bk-date-picker-editor.only-bottom-border:focus、.bk-date-picker-rel.bk-date-picker-editor:focus。共 2 处 |
| --bk-date-picker-hover-selected-bg | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg。例如 .bk-date-picker-cells-cell-selected.bk-date-picker-cells-cell-selected:hover |
| --bk-date-picker-hover-selected-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。text。例如 .bk-date-picker-cells-cell-selected.bk-date-picker-cells-cell-selected:hover |
| --bk-date-picker-hover-text-color | --bk-color-brand-03 | #2D8CF0 | 当前 #2d8cf0。text。例如 .bk-picker-panel-icon-btn:hover。近似填入，显示变成 #699DF4 |
| --bk-date-picker-hover-text-color-2 | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-date-picker-header.bk-date-picker-header-label:hover |
| --bk-date-picker-hover-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。border/text。例如 .bk-date-picker-rel.bk-date-picker-editor:hover、.bk-date-picker-rel.clear-action:hover。共 2 处 |
| --bk-date-picker-hover-bg | --bk-color-brand-06 | #E1ECFF | 当前 $newMainColor3。bg。例如 .bk-picker-panel-sidebar.bk-picker-panel-shortcut:hover |
| --bk-date-picker-hover-bg-2 | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-date-picker-cells-cell:hover |
| --bk-date-picker-selected-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-date-picker-cells-cell-today.bk-date-picker-cells-cell-selected |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-date-picker-radius-none | --bk-radius-none | 0 | 例如 .bk-date-picker-cells-cell-range。共 1 处 |
| --bk-date-picker-radius-s | --bk-radius-s | 2px | 例如 .bk-date-picker-rel.bk-date-picker-editor、.bk-date-picker-dropdown。共 2 处 |
| --bk-date-picker-radius | 无 | 3px | 例如 .bk-date-picker-cells-year.bk-date-picker-cells-month。共 1 处 |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #C4C6CC | --bk-color-neutral-04 | date-picker.base.css .picker-icon | 图标 fill 用 CSS `currentColor`，颜色来自 `.icon-wrapper` 的 `--bk-date-picker-neutral-04`。不写在 SVG `fill` 展示属性上 |

## dialog 对话框

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-dialog-text-color | --bk-color-neutral-01 | #313238 | 当前 $newBlackColor1。text。例如 .bk-dialog-wrapper.bk-dialog-header.bk-dialog-header-inner |
| --bk-dialog-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-dialog-wrapper.bk-dialog-body。近似填入，显示变成 #4D4F56 |
| --bk-dialog-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-dialog-wrapper.bk-dialog-close |
| --bk-dialog-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-dialog-wrapper.bk-dialog-footer |
| --bk-dialog-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-dialog-wrapper.bk-dialog-footer |
| --bk-dialog-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-dialog-wrapper.bk-dialog-content |
| --bk-dialog-error-text-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。text。例如 .bk-info-box.bk-dialog-mark.bk-dialog-error |
| --bk-dialog-error-bg | --bk-color-danger-05 | #FFDDDD | 当前 $newRedColor3。bg。例如 .bk-info-box.bk-dialog-mark.bk-dialog-error |
| --bk-dialog-hover-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-dialog-wrapper.bk-dialog-close:hover |
| --bk-dialog-info-text-color | --bk-color-neutral-01 | #313238 | 当前 $newBlackColor1。text。例如 .bk-info-box.bk-dialog-type-header.header |
| --bk-dialog-info-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-info-box.bk-dialog-sub-header.bk-dialog-header-inner、.bk-dialog-wrapper.bk-info-box.bk-dialog-type-body。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-dialog-info-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-dialog-wrapper.bk-info-box.bk-dialog-footer |
| --bk-dialog-bg-3 | 无 | rgba(0, 0, 0, 0.6) | 当前 rgba(0, 0, 0, 0.6)。bg。例如 .bk-dialog-mask、@keyframes mask-fading 100%。共 3 处 |
| --bk-dialog-success-text-color | --bk-color-success-02 | #3FC06D | 当前 #3fc06d。text。例如 .bk-info-box.bk-dialog-mark.bk-dialog-success。近似填入，显示变成 #2CAF5E |
| --bk-dialog-success-bg | --bk-color-success-07 | #E5F6EA | 当前 #e5f6ea。bg。例如 .bk-info-box.bk-dialog-mark.bk-dialog-success。近似填入，显示变成 #EBFAF0 |
| --bk-dialog-success-text-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-dialog-warning.bk-dialog-error.bk-dialog-success |
| --bk-dialog-warning-text-color | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。text。例如 .bk-info-box.bk-dialog-mark.bk-dialog-warning。近似填入，显示变成 #F59500 |
| --bk-dialog-warning-bg | --bk-color-warning-05 | #FFE8C3 | 当前 $newOrangeColor3。bg。例如 .bk-info-box.bk-dialog-mark.bk-dialog-warning。近似填入，显示变成 #FCE5C0 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-dialog-radius-none | --bk-radius-none | 0 | 例如 .bk-dialog.bk-dialog-fullscreen.bk-dialog-content、.bk-dialog-wrapper.bk-info-box.bk-dialog-footer。共 2 处 |
| --bk-dialog-radius-s | --bk-radius-s | 2px | 例如 .bk-dialog-wrapper.bk-dialog-content、.bk-dialog-wrapper.bk-dialog-footer。共 2 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 3 | .bk-dialog-wrapper.bk-dialog-close |

## diff 差异对比

暗色 `.bk-diff.dark` 的背景、分隔线和语法色维持原字面量，不引用浅色 neutral。浅色滚动条、注释和分栏线仍走组件变量。

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-diff-bg | 无 | #144212 | 当前 #144212。bg。例如 .bk-diff.dark.hljs-addition |
| --bk-diff-bg-2 | 无 | #1D1D1D | 暗色表格底，维持 #1d1d1d |
| --bk-diff-bg-3 | 无 | #212121 | 暗色行号底，维持 #212121 |
| --bk-diff-bg-4 | 无 | #292929 | 暗色空占位，维持 #292929 |
| --bk-diff-bg-5 | 无 | #2D3324 | 当前 #2d3324。bg。例如 .bk-diff.dark.d2h-ins |
| --bk-diff-border-color | 无 | #313238 | 暗色分栏线，维持 #313238 |
| --bk-diff-text-color | 无 | #3A84FF | 暗色语法色，维持 #3a84ff |
| --bk-diff-bg-6 | 无 | #422321 | 当前 #422321。bg。例如 .bk-diff.dark.d2h-del |
| --bk-diff-text-color-2 | 无 | #4EC9B0 | 当前 #4ec9b0。text。例如 .dark.hljs-built_in.hljs-type |
| --bk-diff-text-color-3 | 无 | #569CD6 | 当前 #569cd6。text。例如 .bk-diff.dark.hljs-link |
| --bk-diff-text-color-4 | 无 | #608B4E | 当前 #608b4e。text。例如 .bk-diff.dark.hljs-doctag |
| --bk-diff-text-color-5 | 无 | #63656E | 暗色注释，维持 #63656e |
| --bk-diff-bg-7 | 无 | #660000 | 当前 #600。bg。例如 .bk-diff.dark.hljs-deletion |
| --bk-diff-text-color-6 | 无 | #8F3AFF | 当前 #8f3aff。text。例如 .dark.hljs-string.hljs-meta-string、.hljs-function.hljs-title.hljs-formula。共 2 处 |
| --bk-diff-text-color-7 | 无 | #8F8F89 | 暗色行号字，维持 #8f8f89 |
| --bk-diff-text-color-8 | 无 | #979BA5 | 暗色默认字，维持 #979ba5 |
| --bk-diff-text-color-9 | 无 | #9A5334 | 当前 #9a5334。text。例如 .dark.hljs-regexp.hljs-template-tag |
| --bk-diff-text-color-10 | 无 | #9B9B9B | 暗色 meta，维持 #9b9b9b |
| --bk-diff-text-color-11 | 无 | #B8D7A3 | 当前 #b8d7a3。text。例如 .dark.hljs-number.hljs-class |
| --bk-diff-text-color-12 | 无 | #BD63C5 | 当前 #bd63c5。text。例如 .dark.hljs-variable.hljs-template-variable |
| --bk-diff-text-color-13 | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .bk-diff.hljs-comment.hljs-quote |
| --bk-diff-bg-8 | 无 | #DDFFDD | 暗色变更行，维持 #dfd |
| --bk-diff-bg-9 | --bk-color-neutral-06 | #E6E9EA | 当前 #e6e9ea。bg。例如 .bk-diff.d2h-file-diff、.bk-diff.d2h-file-side-diff。共 2 处。近似填入，显示变成 #EAEBF0 |
| --bk-diff-text-color-14 | 无 | #EA3636 | 暗色参数，维持 #ea3636 |
| --bk-diff-text-color-15 | 无 | #FF9C01 | 暗色属性名，维持 #ff9c01 |
| --bk-diff-border-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。border。例如 .d2h-files-diff.d2h-file-side-diff.d2h-code-wrapper |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-diff-radius-s | --bk-radius-s | 2px | 例如 .bk-diff.d2h-file-diff、.bk-diff.d2h-file-side-diff。共 2 处 |

## divider 分割线

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-divider-info-text-color | --bk-color-neutral-01 | #313238 | 当前 $newBlackColor1。text。例如 .bk-divider.bk-divider-info |
| --bk-divider-info-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultLightColor。bg。例如 .bk-divider.bk-divider-info |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #DCDEE5 | --bk-color-neutral-05 | divider/divider.vue | default: '#dcdee5' |

## dropdown-menu 下拉菜单

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-dropdown-menu-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-dropdown-menu.bk-dropdown-list。近似填入，显示变成 #4D4F56 |
| --bk-dropdown-menu-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border/bg。例如 .bk-dropdown-menu.bk-dropdown-content。共 2 处 |
| --bk-dropdown-menu-bg | --bk-color-neutral-05 | #DDE4EB | 当前 $scrollbarColor。bg。例如 .bk-dropdown-menu.bk-dropdown-list。近似填入，显示变成 #DCDEE5 |
| --bk-dropdown-menu-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-dropdown-menu.bk-dropdown-content |
| --bk-dropdown-menu-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-dropdown-menu.disabled.disabled |
| --bk-dropdown-menu-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-dropdown-menu.disabled.disabled |
| --bk-dropdown-menu-disabled-bg | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-dropdown-menu.disabled.disabled。近似填入，显示变成 #FAFBFD |
| --bk-dropdown-menu-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-dropdown-menu.bk-dropdown-list:hover |
| --bk-dropdown-menu-hover-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-dropdown-menu.bk-dropdown-list:hover |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-dropdown-menu-radius | 无 | 20px | 例如 .bk-dropdown-menu.bk-dropdown-list。共 1 处 |
| --bk-dropdown-menu-radius-s | --bk-radius-s | 2px | 例如 .bk-dropdown-menu.bk-dropdown-content。共 2 处 |

## exception 异常页

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-exception-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656E。text。例如 .bk-exception。近似填入，显示变成 #4D4F56 |

## fixed-navbar 固定导航

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-fixed-navbar-text-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-fixed-navbar-wrapper.fixed-navbar-item |
| --bk-fixed-navbar-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #ffffff。bg。例如 .bk-fixed-navbar-wrapper |
| --bk-fixed-navbar-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-fixed-navbar-wrapper.fixed-navbar-item:hover |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-fixed-navbar-radius | 无 | 26px | 例如 .bk-fixed-navbar-wrapper。共 1 处 |

## form 表单

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-form-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656E、$fnMainColor。text。例如 .bk-form.bk-label、.bk-form.bk-form-content.bk-tip-text。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-form-color | --bk-color-neutral-03 | #979BA5 | 当前 #979BA5。text/border。例如 .bk-label.bk-label-text.bk-icon、.bk-form.bk-label.has-desc。共 2 处 |
| --bk-form-text-color-2 | --bk-color-neutral-04 | #C3CDD7 | 当前 $fnMinorColor。text。例如 .bk-form。近似填入，显示变成 #C4C6CC |
| --bk-form-text-color-3 | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor、#EA3636。text。例如 .bk-form.bk-form-content.tooltips-icon、.bk-form-item.is-required.bk-label。共 2 处 |
| --bk-form-bg | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-form-item.is-readonly。近似填入，显示变成 #FAFBFD |
| --bk-form-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-form |
| --bk-form-danger-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。border/text。例如 .bk-form-item.is-danger.is-error、.is-danger.is-error.bk-textarea-wrapper。共 6 处 |
| --bk-form-danger-color-2 | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor。border/text。例如 .is-danger.is-danger.is-danger、.is-danger.bk-form-tip.bk-tip-text。共 4 处 |
| --bk-form-danger-bg | --bk-color-danger-07 | #FFF4F4 | 当前 #fff4f4。bg。例如 .is-danger.is-danger.is-danger。近似填入，显示变成 #FFF0F0 |
| --bk-form-disabled-bg | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-form-item.is-disabled。近似填入，显示变成 #FAFBFD |
| --bk-form-error-text-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。text。例如 .bk-form.bk-form-content.form-error-tip |
| --bk-form-success-color | --bk-color-success-02 | #2DCB56 | 当前 $successColor。border/text。例如 .bk-form-item.is-success、.is-success.bk-form-tip.bk-tip-text。共 2 处。近似填入，显示变成 #2CAF5E |
| --bk-form-warning-border-color | --bk-color-warning-03 | #FFB848 | 当前 $warningColor。border。例如 .bk-form-item.is-warning。近似填入，显示变成 #F8B64F |

## image 图片

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-image-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-image |
| --bk-image-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-image |

## image-viewer 图片预览

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-image-viewer-text-color | --bk-color-neutral-03 | #979BA5 | 当前 $tipsColor。text。例如 .bk-image-viewer.quit-tips |
| --bk-image-viewer-text-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 $imgWrapTextColor、#C4C6CC。text。例如 .bk-image-viewer。共 3 处 |
| --bk-image-viewer-text-color-3 | --bk-color-neutral-05 | #DCDEE5 | 当前 #DCDEE5。text。例如 .bk-image-viewer |
| --bk-image-viewer-border-color | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultLightColor。border。例如 .bk-image-viewer |
| --bk-image-viewer-error-text-color | --bk-color-neutral-01 | #313238 | 当前 $newBlackColor1。text。例如 .bk-image-viewer |
| --bk-image-viewer-hover-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor、#fff、$defaultLightColor。text。例如 .bk-image-viewer:hover、.bk-image-viewer.bk-icon:hover。共 3 处 |
| --bk-image-viewer-hover-bg | 无 | rgba(0, 0, 0, 0.4) | 当前 rgba(0, 0, 0, .4)。bg。例如 .bk-image-viewer:hover |
| --bk-image-viewer-hover-bg-2 | 无 | rgba(0, 0, 0, 0.5) | 当前 rgba(0,0,0,.5)。bg。例如 .bk-image-viewer:hover |
| --bk-image-viewer-bg | 无 | rgba(0, 0, 0, 0.3) | 当前 rgba(0, 0, 0, .3)。bg。例如 .bk-image-viewer |
| --bk-image-viewer-bg-2 | 无 | rgba(0, 0, 0, 0.4) | 当前 $newBlackColor4。bg。例如 .bk-image-viewer |
| --bk-image-viewer-bg-3 | 无 | rgba(0, 0, 0, 0.6) | 当前 rgba(0, 0, 0, .6)。bg。例如 .bk-image-viewer |
| --bk-image-viewer-bg-4 | 无 | rgba(0, 0, 0, 0.7) | 当前 rgba(0,0,0,0.70)。bg。例如 .bk-image-viewer |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-image-viewer-radius | 无 | 22px | 例如 .bk-image-viewer。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-image-viewer |

## input 输入框

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-input-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-form-control.control-active.bk-textarea-wrapper |
| --bk-input-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-form-control、.bk-form-control.bk-limit-box.strong。共 4 处。近似填入，显示变成 #4D4F56 |
| --bk-input-text-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3、#979ba5。text。例如 .bk-form-control.bk-limit-box、.bk-input-number.input-number-option.number-option-item。共 2 处 |
| --bk-input-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text/border。例如 .bk-form-control.control-active.bk-textarea-wrapper、.bk-form-control.group-box。共 7 处 |
| --bk-input-border-color-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-form-password.bk-form-select.bk-form-textarea |
| --bk-input-bg | --bk-color-neutral-07 | #F2F4F8 | 当前 #f2f4f8。bg。例如 .bk-form-control.control-prepend-group。近似填入，显示变成 #F0F1F5 |
| --bk-input-bg-2 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-form-control.control-disable.bk-textarea-wrapper、.bk-form-password.bk-form-select.bk-form-textarea。共 2 处 |
| --bk-input-bg-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-form-control.control-active.bk-textarea-wrapper、.bk-form-password.bk-form-select.bk-form-textarea。共 3 处 |
| --bk-input-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-form-select.bk-form-textarea.only-bottom-border、.bk-form-password.bk-form-select.bk-form-textarea。共 2 处 |
| --bk-input-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-form-password.bk-form-select.bk-form-textarea |
| --bk-input-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-form-select.bk-form-textarea.only-bottom-border:focus、.bk-form-password.bk-form-select.bk-form-textarea:focus。共 2 处 |
| --bk-input-focus-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-form-password.bk-form-select.bk-form-textarea:focus |
| --bk-input-focus-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-form-password.bk-form-select.bk-form-textarea:focus |
| --bk-input-hover-text-color | --bk-color-brand-02 | #3C96FF | 当前 $primaryColor。text。例如 .bk-form-control.input-right-icon:hover。近似填入，显示变成 #3A84FF |
| --bk-input-hover-text-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-form-control.control-icon.clear-icon:hover |
| --bk-input-hover-bg | --bk-color-neutral-08 | #F4F6FA | 当前 rgba(244, 246, 250, 1)。bg。例如 .bk-input-number.input-number-option.number-option-item:hover。近似填入，显示变成 #F5F7FA |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-input-radius-none | --bk-radius-none | 0 | 例如 .bk-form-password.bk-form-select.bk-form-textarea、.group-text.bk-dropdown-menu.bk-button。共 2 处 |
| --bk-input-radius-s | --bk-radius-s | 2px | 例如 .bk-form-control.group-box、.bk-form-password.bk-form-select.bk-form-textarea。共 3 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 0 2px 2px 0 | 2 | .bk-form-password.bk-form-select.bk-form-textarea |
| 2px 0 0 2px | 2 | .bk-form-password.bk-form-select.bk-form-textarea |

## link 链接

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-link-text-color | --bk-color-neutral-02 | #63656E | 当前 $defaultColor。text。例如 .bk-link.is-default。近似填入，显示变成 #4D4F56 |
| --bk-link-danger-text-color | --bk-color-danger-02 | #EA3636 | 当前 $dangerColor。text。例如 .bk-link.is-danger |
| --bk-link-danger-text-color-2 | --bk-color-danger-03 | #FE5657 | 当前 $dangerHoverColor。text。例如 .bk-link.is-danger。近似填入，显示变成 #FF5656 |
| --bk-link-danger-active-text-color | --bk-color-danger-01 | #DA2726 | 当前 #da2726。text。例如 .bk-link.is-danger:active。近似填入，显示变成 #E71818 |
| --bk-link-danger-disabled-text-color | --bk-color-danger-04 | #FD9C9C | 当前 $dangerDisabledColor。text。例如 .bk-link.is-danger.is-disabled。近似填入，显示变成 #F8B4B4 |
| --bk-link-danger-hover-text-color | --bk-color-danger-03 | #FE5657 | 当前 $dangerHoverColor。text。例如 .bk-link.is-danger:hover。近似填入，显示变成 #FF5656 |
| --bk-link-disabled-text-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $defaultDisabledColor。text。例如 .bk-link.is-default.is-disabled |
| --bk-link-hover-text-color | --bk-color-neutral-03 | #979BA5 | 当前 $defaultHoverColor。text。例如 .bk-link.is-default:hover |
| --bk-link-primary-text-color | --bk-color-brand-02 | #3A84FF | 当前 $primaryColor。text。例如 .bk-link.is-primary |
| --bk-link-primary-text-color-2 | --bk-color-brand-03 | #699DF4 | 当前 $primaryHoverColor。text。例如 .bk-link.is-primary |
| --bk-link-primary-active-text-color | --bk-color-brand-01 | #1768EF | 当前 #1768ef。text。例如 .bk-link.is-primary:active |
| --bk-link-primary-disabled-text-color | --bk-color-brand-04 | #A3C5FD | 当前 $primaryDisabledColor。text。例如 .bk-link.is-primary.is-disabled |
| --bk-link-primary-hover-text-color | --bk-color-brand-03 | #699DF4 | 当前 $primaryHoverColor。text。例如 .bk-link.is-primary:hover |
| --bk-link-success-text-color | --bk-color-success-02 | #2DCB56 | 当前 $successColor。text。例如 .bk-link.is-success。近似填入，显示变成 #2CAF5E |
| --bk-link-success-text-color-2 | --bk-color-success-03 | #44E360 | 当前 $successHoverColor。text。例如 .bk-link.is-success。近似填入，显示变成 #65C389 |
| --bk-link-success-active-text-color | --bk-color-success-01 | #1BB943 | 当前 #1bb943。text。例如 .bk-link.is-success:active。近似填入，显示变成 #299E56 |
| --bk-link-success-disabled-text-color | --bk-color-success-04 | #94F5A4 | 当前 $successDisabledColor。text。例如 .bk-link.is-success.is-disabled。近似填入，显示变成 #A1E3BA |
| --bk-link-success-hover-text-color | --bk-color-success-03 | #44E360 | 当前 $successHoverColor。text。例如 .bk-link.is-success:hover。近似填入，显示变成 #65C389 |
| --bk-link-warning-text-color | --bk-color-warning-02 | #FF9C01 | 当前 $warningColor。text。例如 .bk-link.is-warning。近似填入，显示变成 #F59500 |
| --bk-link-warning-text-color-2 | --bk-color-warning-03 | #FFB849 | 当前 $warningHoverColor。text。例如 .bk-link.is-warning。近似填入，显示变成 #F8B64F |
| --bk-link-warning-active-text-color | --bk-color-warning-01 | #EB9000 | 当前 #eb9000。text。例如 .bk-link.is-warning:active。近似填入，显示变成 #E38B02 |
| --bk-link-warning-disabled-text-color | --bk-color-warning-04 | #FFD695 | 当前 $warningDisabledColor。text。例如 .bk-link.is-warning.is-disabled。近似填入，显示变成 #F9D090 |
| --bk-link-warning-hover-text-color | --bk-color-warning-03 | #FFB849 | 当前 $warningHoverColor。text。例如 .bk-link.is-warning:hover。近似填入，显示变成 #F8B64F |

## loading 加载

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-loading-bg | --bk-color-success-02 | #2DCB56 | 当前 $successColor。bg。例如 @keyframes fadeSuccess 0%、@-webkit-keyframes fadeSuccess 0%。共 2 处。近似填入，显示变成 #2CAF5E |
| --bk-loading-bg-2 | 无 | #30D878 | 当前 #30d878。bg。例如 @keyframes fadeSuccess 0% |
| --bk-loading-bg-3 | --bk-color-neutral-02 | #39424E | 当前 #39424e。bg。例如 @keyframes fade 0%、@-webkit-keyframes fade 0%。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-loading-bg-4 | --bk-color-brand-02 | #3C96FF | 当前 $primaryColor、#3c96ff。bg。例如 @keyframes fadePrimary 0%、@-webkit-keyframes fadePrimary 0%。共 3 处。近似填入，显示变成 #3A84FF |
| --bk-loading-bg-5 | 无 | #4CD084 | 当前 #4cd084。bg。例如 .bk-loading.bk-loading1.point3 |
| --bk-loading-bg-6 | --bk-color-brand-03 | #57A3F1 | 当前 #57a3f1。bg。例如 .bk-loading.bk-loading1.point4。近似填入，显示变成 #699DF4 |
| --bk-loading-text-color | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-loading、.bk-loading-box.bk-loading。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-loading-bg-7 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5、#979BA5。bg。例如 .point2.point3.point4。共 2 处 |
| --bk-loading-bg-8 | --bk-color-danger-03 | #FD6154 | 当前 #fd6154。bg。例如 .bk-loading.bk-loading1.point1。近似填入，显示变成 #FF5656 |
| --bk-loading-bg-9 | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor、#ff5656。bg。例如 @keyframes fadeDanger 0%、@-webkit-keyframes fadeDanger 0%。共 3 处 |
| --bk-loading-bg-10 | --bk-color-warning-02 | #FFB400 | 当前 #ffb400。bg。例如 @keyframes fadeWarning 0%。近似填入，显示变成 #F59500 |
| --bk-loading-bg-11 | --bk-color-warning-03 | #FFB726 | 当前 #ffb726。bg。例如 .bk-loading.bk-loading1.point2。近似填入，显示变成 #F8B64F |
| --bk-loading-bg-12 | --bk-color-warning-03 | #FFB848 | 当前 $warningColor。bg。例如 @keyframes fadeWarning 0%、@-webkit-keyframes fadeWarning 0%。共 2 处。近似填入，显示变成 #F8B64F |
| --bk-loading-bg-13 | --bk-color-neutral-10 | #FFFFFF | 当前 rgb(255, 255, 255)、white。bg。例如 @keyframes fadeWhite 0%、@-webkit-keyframes fadeWhite 0%。共 3 处 |
| --bk-loading-danger-bg | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor。bg。例如 .point2.point3.point4 |
| --bk-loading-primary-bg | --bk-color-brand-02 | #3C96FF | 当前 $primaryColor。bg。例如 .point2.point3.point4。近似填入，显示变成 #3A84FF |
| --bk-loading-bg-14 | 无 | rgba(255, 255, 255, 0.9) | 当前 rgba(255, 255, 255, 0.9)。bg。例如 .bk-loading、.bk-loading-box.bk-loading。共 2 处 |
| --bk-loading-warning-bg | --bk-color-warning-03 | #FFB848 | 当前 $warningColor。bg。例如 .point2.point3.point4。近似填入，显示变成 #F8B64F |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-loading-radius-xxl | --bk-radius-xxl | 12px | 例如 .bk-loading2.bk-spin-loading-large.rotate。共 1 处 |
| --bk-loading-radius | 无 | 19px | 例如 .bk-loading.bk-loading1.point。共 1 处 |
| --bk-loading-radius-2 | 无 | 3px | 例如 .bk-loading2.bk-spin-loading-mini.rotate。共 1 处 |
| --bk-loading-radius-3 | 无 | 5px | 例如 .bk-loading2.bk-spin-loading-small.rotate。共 1 处 |
| --bk-loading-radius-xl | --bk-radius-xl | 8px | 例如 .bk-spin-loading.bk-loading2.rotate。共 1 处 |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #FFFFFF | --bk-color-neutral-10 | loading/directive.js | options.color = options.color \|\| '#ffffff' |
| #FFFFFF | --bk-color-neutral-10 | loading/loading.js | options.color = options.color \|\| '#ffffff' |
| #FFFFFF | --bk-color-neutral-10 | loading/loading.vue | default: '#ffffff' |

## message 消息提示

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-message-text-color | --bk-color-neutral-01 | #313238 | 当前 #313238。text。例如 .message-detail.message-tree.message-row |
| --bk-message-text-color-2 | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor、#3a84ff。text。例如 .bk-message-copy、.tools.tool.fix。共 3 处 |
| --bk-message-text-color-3 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2、#63656e。text。例如 .bk-message-content、.message-detail.message-tree.message-row。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-message-text-color-4 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3、#979ba5。text。例如 .bk-message-close.bk-icon、.bk-message-copy.copied。共 3 处 |
| --bk-message-text-color-5 | --bk-color-neutral-03 | #9FA3AE | 当前 #9FA3AE。text。例如 .multi.message-detail.message-copy。近似填入，显示变成 #979BA5 |
| --bk-message-text-color-6 | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .tools.tool.bk-message-close、.tools.tool.close。共 2 处 |
| --bk-message-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。border。例如 .message-detail.copy-status.inner。共 2 处 |
| --bk-message-border-color-2 | --bk-color-brand-06 | #E1ECFF | 当前 $newMainColor3。border。例如 .bk-message |
| --bk-message-bg | --bk-color-brand-07 | #F0F8FF | 当前 $newMainColor5。bg。例如 .bk-message。近似填入，显示变成 #F0F5FF |
| --bk-message-bg-2 | --bk-color-neutral-08 | #F5F7FA | 当前 #F5F7FA。bg。例如 .multi.message-detail.message-copy |
| --bk-message-color | --bk-color-neutral-10 | #FFFFFF | 当前 #ffffff、#fff。text/bg。例如 .bk-message-icon、.bk-message-icon.bk-icon。共 5 处 |
| --bk-message-error-text-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor、#ea3636。text。例如 .bk-message-error.bk-message-icon.bk-icon、.copy-status.error.inner。共 2 处 |
| --bk-message-error-text-color-2 | --bk-color-danger-04 | #FD9C9C | 当前 $newRedColor2。text。例如 .bk-message-error.bk-message-close.icon-close。近似填入，显示变成 #F8B4B4 |
| --bk-message-error-border-color | --bk-color-danger-05 | #FFDDDD | 当前 $newRedColor3。border。例如 .bk-message-error |
| --bk-message-error-bg | --bk-color-danger-06 | #FFEDED | 当前 $newRedColor5。bg。例如 .bk-message-error。近似填入，显示变成 #FFEBEB |
| --bk-message-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .tools.tool.fix:hover、.multi.message-detail.message-copy:hover。共 2 处 |
| --bk-message-hover-text-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .tools.tool.bk-message-close:hover、.tools.tool.close:hover。共 3 处 |
| --bk-message-hover-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-message-close.bk-icon:hover |
| --bk-message-hover-bg-2 | --bk-color-brand-07 | #F0F5FF | 当前 #F0F5FF。bg。例如 .multi.message-detail.message-copy:hover |
| --bk-message-hover-bg-3 | --bk-color-neutral-07 | #F0F1F5 | 详情复制项 hover。原 rgba(186, 188, 192, 0.2)，评审改为 neutral-07，不用白色 |
| --bk-message-primary-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-message-primary.bk-message-icon.bk-icon |
| --bk-message-primary-text-color-2 | --bk-color-brand-04 | #A3C5FD | 当前 $newMainColor2。text。例如 .bk-message-primary.bk-message-close.icon-close |
| --bk-message-primary-border-color | --bk-color-brand-06 | #E1ECFF | 当前 $newMainColor3。border。例如 .bk-message-primary |
| --bk-message-primary-bg | --bk-color-brand-07 | #F0F8FF | 当前 $newMainColor5。bg。例如 .bk-message-primary。近似填入，显示变成 #F0F5FF |
| --bk-message-success-text-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。text。例如 .bk-message-success.bk-message-icon.bk-icon。近似填入，显示变成 #2CAF5E |
| --bk-message-success-text-color-2 | --bk-color-success-02 | #2DCB9D | 复制成功图标。2026-11-05 指定改用 Success-02。代码复用 `--bk-message-success-success-02`，显示变成 #2CAF5E |
| --bk-message-success-text-color-3 | --bk-color-success-04 | #94F5A4 | 当前 $newGreenColor2。text。例如 .bk-message-success.bk-message-close.icon-close。近似填入，显示变成 #A1E3BA |
| --bk-message-success-border-color | --bk-color-success-05 | #DCFFE2 | 当前 $newGreenColor3。border。例如 .bk-message-success。近似填入，显示变成 #CBF0DA |
| --bk-message-success-bg | --bk-color-success-07 | #F2FFF4 | 当前 #f2fff4。bg。例如 .bk-message-success。近似填入，显示变成 #EBFAF0 |
| --bk-message-warning-text-color | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。text。例如 .bk-message-warning.bk-message-icon.bk-icon。近似填入，显示变成 #F59500 |
| --bk-message-warning-text-color-2 | --bk-color-warning-04 | #FFD695 | 当前 $newOrangeColor2。text。例如 .bk-message-warning.bk-message-close.icon-close。近似填入，显示变成 #F9D090 |
| --bk-message-warning-border-color | --bk-color-warning-05 | #FFE8C3 | 当前 $newOrangeColor3。border。例如 .bk-message-warning。近似填入，显示变成 #FCE5C0 |
| --bk-message-warning-bg | --bk-color-warning-07 | #FFF4E2 | 当前 $newOrangeColor5。bg。例如 .bk-message-warning。近似填入，显示变成 #FDF4E8 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-message-radius-s | --bk-radius-s | 2px | 例如 .bk-message、.multi.message-detail.message-tree。共 3 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 2 | .bk-message-icon.bk-icon |
| 0 2px 0 6px | 1 | .multi.message-detail.message-copy |

## navigation 导航

导航不接入颜色变量，色值维持现在的写死值。下面只留清单，引用列全部为「无」。

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-navigation-text-color | 无 | #313238 | 当前 #313238。text。例如 .bk-navigation.navigation-container.container-header |
| --bk-navigation-text-color-2 | 无 | #63656E | 当前 #63656E。text。例如 .navigation-nav.nav-slider.footer-icon |
| --bk-navigation-text-color-3 | 无 | #96A2B9 | 当前 #96A2B9。text。例如 .bk-navigation.title-icon、.bk-navigation.title-desc。共 3 处 |
| --bk-navigation-border-color | 无 | #DCDEE5 | 当前 #dcdee5。border。例如 .bk-navigation.navigation-container.container-header |
| --bk-navigation-bg | 无 | #F5F7FA | 当前 #F5F7FA。bg。例如 .bk-navigation.navigation-container.container-content |
| --bk-navigation-bg-2 | 无 | #FFFFFF | 当前 #fff。bg。例如 .bk-navigation.navigation-container.container-header |
| --bk-navigation-hover-color | 无 | #253047 | 当前 rgba(37, 48, 71, 1)。gradient。例如 .nav-slider.footer-icon.is-left:hover |
| --bk-navigation-hover-color-2 | 无 | #263247 | 当前 rgba(38, 50, 71, 1)。gradient。例如 .nav-slider.footer-icon.is-left:hover |
| --bk-navigation-hover-text-color | 无 | #3A3C42 | 当前 #3A3C42。text。例如 .navigation-nav.nav-slider.footer-icon:hover |
| --bk-navigation-hover-text-color-2 | 无 | #D3D9E4 | 当前 #D3D9E4。text。例如 .nav-slider.footer-icon.is-left:hover |
| --bk-navigation-hover-color-3 | 无 | #DEE0EA | 当前 rgba(222, 224, 234, 1)。gradient。例如 .navigation-nav.nav-slider.footer-icon:hover |
| --bk-navigation-hover-color-4 | 无 | #EAECF2 | 当前 rgba(234, 236, 242, 1)。gradient。例如 .navigation-nav.nav-slider.footer-icon:hover |
| --bk-navigation-border-color-2 | 无 | rgba(255, 255, 255, 0.05) | 当前 rgba(255, 255, 255, 0.05)。border。例如 .bk-navigation |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 100% | 1 | .navigation-nav.nav-slider.footer-icon |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #D3D9E4 | 无 | navigation/navigation-menu.vue | default: '#D3D9E4' |
| #FFFFFF | 无 | navigation/navigation-menu.vue | default: '#FFFFFF' |
| #182132 | 无 | navigation/navigation-menu.vue | default: '#182132' |
| #ACB9D1 | 无 | navigation/navigation-menu.vue | default: '#ACB9D1' |
| #63656E | 无 | navigation/navigation-menu.vue | default: '#63656E' |
| #FFFFFF | 无 | navigation/navigation-menu.vue | default: '#FFFFFF' |
| #D3D9E4 | 无 | navigation/navigation-menu.vue | default: '#D3D9E4' |
| #3E4655 | 无 | navigation/navigation-menu.vue | default: '#3E4655' |
| #D3D9E4 | 无 | navigation/navigation-menu.vue | default: '#D3D9E4' |
| #FFFFFF | 无 | navigation/navigation-menu.vue | default: '#FFFFFF' |
| #151D2C | 无 | navigation/navigation-menu.vue | default: '#151D2C' |
| #EAEBF0 | 无 | navigation/navigation-menu.vue | const themeVals = ['#EAEBF0', 'linear-gradient(90deg,rgba(37,48,71,1) 0%,rgba(32,42,60,1) 100%)'] |
| #3A3C42 | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A3C42', '#D3D9E4'] |
| #D3D9E4 | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A3C42', '#D3D9E4'] |
| #E1ECFF | 无 | navigation/navigation-menu.vue | const themeVals = ['#E1ECFF', 'linear-gradient(90deg,rgba(63,135,255,1) 0%,rgba(58,132,255,1) 100%)'] |
| #3A84FF | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A84FF', '#FFFFFF'] |
| #FFFFFF | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A84FF', '#FFFFFF'] |
| #FFFFFF | 无 | navigation/navigation-menu.vue | const themeVals = ['#FFFFFF', '#182132'] |
| #182132 | 无 | navigation/navigation-menu.vue | const themeVals = ['#FFFFFF', '#182132'] |
| #63656E | 无 | navigation/navigation-menu.vue | const themeVals = ['#63656E', '#ACB9D1'] |
| #ACB9D1 | 无 | navigation/navigation-menu.vue | const themeVals = ['#63656E', '#ACB9D1'] |
| #63656E | 无 | navigation/navigation-menu.vue | const themeVals = ['#63656E', '#B0BDD5'] |
| #B0BDD5 | 无 | navigation/navigation-menu.vue | const themeVals = ['#63656E', '#B0BDD5'] |
| #3A3C42 | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A3C42', '#D3D9E4'] |
| #D3D9E4 | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A3C42', '#D3D9E4'] |
| #3A84FF | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A84FF', '#FFFFFF'] |
| #FFFFFF | 无 | navigation/navigation-menu.vue | const themeVals = ['#3A84FF', '#FFFFFF'] |
| #F5F7FA | 无 | navigation/navigation-menu.vue | const themeVals = ['#F5F7FA', '#151D2C'] |
| #151D2C | 无 | navigation/navigation-menu.vue | const themeVals = ['#F5F7FA', '#151D2C'] |
| #979BA5 | 无 | navigation/navigation-menu.vue | const themeVals = ['#979BA5', '#3E4655'] |
| #3E4655 | 无 | navigation/navigation-menu.vue | const themeVals = ['#979BA5', '#3E4655'] |
| #63656E | 无 | navigation/navigation-menu.vue | const themeVals = ['#63656E', '#D3D9E4'] |
| #D3D9E4 | 无 | navigation/navigation-menu.vue | const themeVals = ['#63656E', '#D3D9E4'] |
| #FFFFFF | 无 | navigation/navigation-menu.vue | const themeVals = ['#FFFFFF', '#FFFFFF'] |
| #FFFFFF | 无 | navigation/navigation-menu.vue | const themeVals = ['#FFFFFF', '#FFFFFF'] |
| #DCDEE5 | 无 | navigation/navigation.vue | borderRight: navigationType !== 'top-bottom' ? 'none' : '1px solid #DCDEE5' |
| #182132 | 无 | navigation/navigation.vue | default: '#182132' |
| #182132 | 无 | navigation/navigation.vue | default: '#182132' |
| #182132 | 无 | navigation/navigation.vue | const defTheme = ['#182132', '#FFFFFF'] |
| #FFFFFF | 无 | navigation/navigation.vue | const defTheme = ['#182132', '#FFFFFF'] |

## navigation-menu-group 导航菜单组

导航不接入颜色变量，色值维持现在的写死值。下面只留清单，引用列全部为「无」。

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-navigation-menu-group-text-color | 无 | #66748F | 当前 #66748F、#66748f。text。例如 .bk-navigation-menu-group、.bk-navigation-menu-group.group-name-wrap。共 2 处 |

## navigation-menu-item 导航菜单项

导航不接入颜色变量，色值维持现在的写死值。下面只留清单，引用列全部为「无」。

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-navigation-menu-item-color | 无 | #63656E | 当前 #63656e。bg/text。例如 .navigation-menu-item、.navigation-sbmenu.navigation-menu-item。共 3 处 |
| --bk-navigation-menu-item-text-color | 无 | #8F929B | 当前 #8f929b。text。例如 .navigation-sbmenu.navigation-menu-item |
| --bk-navigation-menu-item-text-color-2 | 无 | #C4C6CC | 当前 #C4C6CC、#c4c6cc。text。例如 .navigation-menu-item、.navigation-sbmenu。共 3 处 |
| --bk-navigation-menu-item-bg | 无 | #F0F1F5 | 当前 #F0F1F5。bg。例如 .navigation-menu-item.group-theme、.navigation-sbmenu.navigation-menu-item.group-theme。共 2 处 |
| --bk-navigation-menu-item-bg-2 | 无 | rgba(255, 255, 255, 0.05) | 当前 rgba(255, 255, 255, 0.05)。bg。例如 .navigation-sbmenu |
| --bk-navigation-menu-item-bg-3 | 无 | rgba(255, 255, 255, 0.06) | 当前 rgba(255, 255, 255, 0.06)。bg。例如 .navigation-menu-item、.navigation-sbmenu.navigation-menu-item。共 2 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 2 | .navigation-menu-item |

## notify 通知

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-notify-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-notify-content.bk-notify-content-text.showMoreBtn |
| --bk-notify-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-notify-content。近似填入，显示变成 #4D4F56 |
| --bk-notify-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-notify-close.bk-icon |
| --bk-notify-border-color | --bk-color-neutral-07 | #F0F1F5 | 当前 rgba(240,241,245,1)。border。例如 .bk-notify |
| --bk-notify-color | --bk-color-neutral-10 | #FFFFFF | 当前 rgba(255,255,255,1)、#ffffff。bg/text。例如 .bk-notify、.bk-notify-icon。共 3 处 |
| --bk-notify-error-text-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。text。例如 .bk-notify-error.bk-notify-icon.bk-icon |
| --bk-notify-hover-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-notify-close.bk-icon:hover |
| --bk-notify-primary-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-notify-primary.bk-notify-icon.bk-icon |
| --bk-notify-success-text-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。text。例如 .bk-notify-success.bk-notify-icon.bk-icon。近似填入，显示变成 #2CAF5E |
| --bk-notify-warning-text-color | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。text。例如 .bk-notify-warning.bk-notify-icon.bk-icon。近似填入，显示变成 #F59500 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-notify-radius-s | --bk-radius-s | 2px | 例如 .bk-notify。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 2 | .bk-notify-icon.bk-icon |

## pagination 分页

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-pagination-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text。例如 .page-item.cur-page.page-button、.bk-page-small-jump.jump-input-wrapper.focus。共 3 处 |
| --bk-pagination-text-color | --bk-color-neutral-01 | #3F4046 | 当前 #3f4046。text。例如 .bk-page.bk-page-total-count.stress。近似填入，显示变成 #313238 |
| --bk-pagination-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 #63656e、$fnMainColor、#63656E。text。例如 .bk-page.bk-page-jumper、.bk-page.page-item.page-button。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-pagination-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-page-small-jump.btn-pre.btn-next |
| --bk-pagination-text-color-4 | --bk-color-neutral-03 | #989DAB | 当前 #989dab。text。例如 .bk-page.bk-page-total-count。近似填入，显示变成 #979BA5 |
| --bk-pagination-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border/text。例如 .bk-page.page-item.page-button、.bk-page-small-jump.page-total.focus。共 2 处 |
| --bk-pagination-color-3 | --bk-color-neutral-05 | #DCDEE5 | 当前 #DCDEE5、#dcdee5。text/bg。例如 .btn-pre.btn-next.disable、.small-jump-options。共 2 处 |
| --bk-pagination-color-4 | --bk-color-neutral-07 | #F0F1F5 | 当前 #f0f1f5。border/bg。例如 .bk-page.bk-page-count.page-select-small、.bk-page.bk-page-small-jump.jump-input-wrapper。共 4 处 |
| --bk-pagination-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、$defaultColor。bg。例如 .bk-page.page-item.page-button、.bk-page-small-jump.jump-input-wrapper.focus。共 2 处 |
| --bk-pagination-disabled-hover-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .page-item.disabled.page-button:hover |
| --bk-pagination-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .page-item.disabled.page-button |
| --bk-pagination-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .page-item.disabled.page-button |
| --bk-pagination-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .page-item.disabled.page-button |
| --bk-pagination-hover-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 #3A84FF。border。例如 .bk-page.bk-page-small-jump.jump-input:hover:focus |
| --bk-pagination-hover-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor、#3A84FF。text/border。例如 .bk-page.page-item.page-button:hover、.bk-page-small-jump.btn-pre.btn-next:hover。共 4 处 |
| --bk-pagination-hover-bg | --bk-color-brand-06 | #E1ECFF | 当前 #e1ecff。bg。例如 .bk-page.bk-page-count.page-select-small:hover、.bk-page.bk-page-small-jump.jump-input-wrapper:hover。共 2 处 |
| --bk-pagination-hover-bg-2 | --bk-color-brand-07 | #EAF3FF | 当前 $hoverBackground。bg。例如 .small-jump-options.small-jump-option:hover。近似填入，显示变成 #F0F5FF |
| --bk-pagination-selected-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .small-jump-options.small-jump-option.is-selected |
| --bk-pagination-selected-bg | --bk-color-brand-07 | #EAF3FF | 当前 $hoverBackground。bg。例如 .small-jump-options.small-jump-option.is-selected。近似填入，显示变成 #F0F5FF |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-pagination-radius-none | --bk-radius-none | 0 | 例如 .bk-page.bk-page-compact.page-item。共 1 处 |
| --bk-pagination-radius-s | --bk-radius-s | 2px | 例如 .bk-page.bk-page-count.page-select-small、.bk-page.page-item。共 4 处 |
| --bk-pagination-radius | 无 | 3px | 例如 .small-jump-options。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 2px 0 0 2px | 1 | .bk-page.bk-page-compact.page-item |
| 0 2px 2px 0 | 1 | .bk-page.bk-page-compact.page-item |

## popconfirm 气泡确认

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-popconfirm-text-color | --bk-color-neutral-01 | #313238 | 当前 #313238。text。例如 .popconfirm-more.popconfirm-content.title |
| --bk-popconfirm-text-color-2 | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-popconfirm-content.popconfirm-operate |
| --bk-popconfirm-text-color-3 | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .popconfirm-more.popconfirm-content.content、.bk-popconfirm-content.popconfirm-operate。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-popconfirm-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。border。例如 .bk-popconfirm-content.popconfirm-operate |
| --bk-popconfirm-bg | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .bk-popconfirm-content.popconfirm-split |
| --bk-popconfirm-hover-text-color | --bk-color-brand-03 | #699DF4 | 当前 #699df4。text。例如 .bk-popconfirm-content.popconfirm-operate:hover |
| --bk-popconfirm-hover-border-color | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。border。例如 .bk-popconfirm-content.popconfirm-operate:hover |
| --bk-popconfirm-primary-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。bg/border。例如 .bk-popconfirm-content.popconfirm-operate.primary。共 2 处 |
| --bk-popconfirm-primary-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-popconfirm-content.popconfirm-operate.primary |
| --bk-popconfirm-primary-hover-color | --bk-color-brand-03 | #699DF4 | 当前 #699df4。bg/border。例如 .bk-popconfirm-content.popconfirm-operate.primary:hover。共 2 处 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-popconfirm-radius-s | --bk-radius-s | 2px | 例如 .bk-popconfirm-content.popconfirm-operate。共 1 处 |

## popover 弹出框

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-popover-text-color | --bk-color-neutral-01 | #26323D | 当前 #26323d。text。例如 .tippy-tooltip.light-theme、.tippy-tooltip.light-border-theme。共 2 处。近似填入，显示变成 #313238 |
| --bk-popover-color | --bk-color-neutral-01 | #333333 | 当前 #333。border/text/bg。例如 .tippy-popper.tippy-arrow、.tippy-roundarrow。共 6 处。近似填入，显示变成 #313238 |
| --bk-popover-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。border。例如 .tippy-tooltip.light-border-theme、.tippy-tooltip.light-border-theme.tippy-arrow。共 2 处 |
| --bk-popover-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg。例如 .tippy-tooltip、.tippy-tooltip.light-theme。共 3 处 |
| --bk-popover-bg | 无 | rgba(0, 0, 0, 0.8) | 当前 rgba(0, 0, 0, .8)。bg。例如 .tippy-tooltip |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-popover-radius-m | --bk-radius-m | 4px | 例如 .tippy-tooltip。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .tippy-backdrop |

## process 流程

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-process-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。text/bg/border。例如 .step-item.done.bk-icon、.bk-process.status-done。共 3 处。近似填入，显示变成 #2CAF5E |
| --bk-process-color-2 | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/border。例如 .bk-process.current。共 2 处 |
| --bk-process-text-color | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-process.bk-process-toggle、.bk-process。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-process-border-color | --bk-color-neutral-04 | #C3CDD7 | 当前 $borderColor。border。例如 .bk-process.bk-process-toggle。近似填入，显示变成 #C4C6CC |
| --bk-process-color-3 | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg/border。例如 .bk-process。共 2 处 |
| --bk-process-color-4 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。border/text。例如 .bk-process、.bk-process.status-done。共 3 处 |
| --bk-process-error-color | --bk-color-danger-03 | #FF5656 | 当前 $newRedColor1。text/bg/border。例如 .bk-process-step.step-item.error、.step-item.error.bk-icon。共 4 处 |
| --bk-process-error-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-process.status-error |
| --bk-process-hover-active-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/border。例如 .bk-process.bk-process-toggle.active:hover。共 2 处 |
| --bk-process-hover-active-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-process.bk-process-toggle.active:hover |
| --bk-process-success-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。text/bg/border。例如 .bk-process.bk-process-step.success、.bk-process.success。共 4 处。近似填入，显示变成 #2CAF5E |
| --bk-process-success-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-process.success |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-process.bk-process-toggle |
| 13px 0 0 13px | 1 | .bk-process |
| 0 13px 13px 0 | 1 | .bk-process |

## progress 进度条

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-progress-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 #F0F1F5。bg。例如 .bk-progress.progress-bar |
| --bk-progress-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-progress.inner-text |
| --bk-progress-danger-bg | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor。bg。例如 .bk-progress.progress-inner.bk-danger |
| --bk-progress-primary-bg | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg。例如 .bk-progress.progress-inner.bk-primary |
| --bk-progress-success-bg | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg。例如 .bk-progress.progress-inner.bk-success。近似填入，显示变成 #2CAF5E |
| --bk-progress-warning-bg | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。bg。例如 .bk-progress.progress-inner.bk-warning。近似填入，显示变成 #F59500 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-progress-radius | 无 | 50px | 例如 .bk-progress.progress-bar、.bk-progress.progress-inner。共 2 处 |

## radio 单选框

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-radio-bg | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg。例如 .bk-form-radio.icon-check |
| --bk-radio-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-form-radio。近似填入，显示变成 #4D4F56 |
| --bk-radio-border-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。border。例如 .bk-form-radio |
| --bk-radio-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg/text。例如 .bk-form-radio。共 2 处 |
| --bk-radio-checked-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-form-radio.is-checked |
| --bk-radio-disabled-checked-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-form-radio.is-checked |
| --bk-radio-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-form-radio.bk-radio-text |
| --bk-radio-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-form-radio |
| --bk-radio-disabled-text-color-2 | --bk-color-neutral-09 | #FAFBFD | 当前 rgba(250, 251, 253, 1)。text。例如 .bk-form-radio |
| --bk-radio-focus-border-color | --bk-color-brand-02 | #3C96FF | 当前 $formBorderFocusColor。border。例如 .bk-form-radio:focus。近似填入，显示变成 #3A84FF |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 2 | .bk-form-radio.icon-check |

## radio-button 单选按钮

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-radio-button-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-form-radio-button.bk-radio-button-text。近似填入，显示变成 #4D4F56 |
| --bk-radio-button-border-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。border。例如 .bk-form-radio-button.bk-radio-button-text |
| --bk-radio-button-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-form-radio-button.bk-radio-button-text |
| --bk-radio-button-checked-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-form-radio-button.bk-radio-button-input.bk-radio-button-text:checked |
| --bk-radio-button-checked-bg | --bk-color-brand-06 | #E1ECFF | 当前 #E1ECFF。bg。例如 .bk-form-radio-button.bk-radio-button-input.bk-radio-button-text:checked |
| --bk-radio-button-disabled-text-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。text。例如 .bk-form-radio-button.bk-radio-button-input.bk-radio-button-text:disabled |
| --bk-radio-button-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 rgba(250, 251, 253, 1)。bg。例如 .bk-form-radio-button.bk-radio-button-input.bk-radio-button-text:disabled |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-radio-button-radius-none | --bk-radius-none | 0 | 例如 .bk-form-radio-button.bk-radio-button-text。共 1 处 |

## resize-layout 伸缩布局

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-resize-layout-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-resize-proxy.left.right、.bk-resize-proxy.top.bottom。共 2 处 |
| --bk-resize-layout-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .bk-resize-layout.bk-resize-layout-aside |
| --bk-resize-layout-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1、#dcdee5。border/bg。例如 .bk-resize-layout、.bk-resize-layout.bk-resize-layout-aside。共 6 处 |
| --bk-resize-layout-text-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-resize-layout.bk-resize-layout-aside.bk-resize-collapse |
| --bk-resize-layout-hover-bg | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。gradient/bg。例如 .bk-resize-layout.bk-resize-layout-aside.bk-resize-trigger:hover、.bk-resize-layout.bk-resize-layout-aside.bk-resize-collapse:hover。共 9 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 0px 6px 6px 0px | 1 | .bk-resize-layout.bk-resize-layout-aside.bk-resize-collapse |

## round-progress 环形进度

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-round-progress-text-color | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-round-progress.num。近似填入，显示变成 #4D4F56 |

## search-select 搜索选择

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-search-select-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .search-select-wrap.bk-search-select、.search-select-wrap.bk-search-select.search-input。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-search-select-text-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .bk-search-select.search-input.chip-clear |
| --bk-search-select-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。border/text。例如 .search-select-wrap.bk-search-select、.bk-search-select.search-input.input-before。共 5 处 |
| --bk-search-select-bg | --bk-color-neutral-06 | #E6E9EA | 当前 #e6e9ea。bg。例如 .search-select-wrap.bk-search-select。近似填入，显示变成 #EAEBF0 |
| --bk-search-select-text-color-3 | --bk-color-danger-02 | #EA3636 | 当前 #ea3636。text。例如 .search-select-wrap.bk-select-tips |
| --bk-search-select-bg-2 | --bk-color-neutral-07 | #F0F1F5 | 当前 #f0f1f5。bg。例如 .search-select-wrap.bk-search-select.search-input |
| --bk-search-select-focus-color | --bk-color-brand-02 | #3C96FF | 当前 #3c96ff。border/text。例如 .search-select-wrap.bk-search-select.is-focus、.search-nextfix.search-nextfix-icon.is-focus。共 4 处。近似填入，显示变成 #3A84FF |
| --bk-search-select-focus-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .search-select-wrap.bk-search-select.is-focus、.search-nextfix.search-nextfix-icon.is-focus。共 2 处 |
| --bk-search-select-hover-text-color | --bk-color-brand-02 | #3C96FF | 当前 #3c96ff。text。例如 .bk-search-select.search-nextfix.search-nextfix-icon:hover。近似填入，显示变成 #3A84FF |
| --bk-search-select-hover-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-search-select.search-input.chip-clear:hover。近似填入，显示变成 #4D4F56 |
| --bk-search-select-hover-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .bk-search-select.search-nextfix.search-clear:hover |
| --bk-search-select-hover-bg | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .search-select-wrap.bk-search-select.search-input:hover |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-search-select-radius | 无 | 20px | 例如 .search-select-wrap.bk-search-select。共 1 处 |
| --bk-search-select-radius-s | --bk-radius-s | 2px | 例如 .search-select-wrap.bk-search-select、.search-select-wrap.bk-search-select.search-input。共 2 处 |

## search-select-menu 搜索选择菜单

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-search-select-menu-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-search-list.item-name、.bk-search-list.item-icon。共 2 处 |
| --bk-search-select-menu-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-search-list。近似填入，显示变成 #4D4F56 |
| --bk-search-select-menu-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。border/bg。例如 .bk-search-list、.bk-search-list.is-group。共 6 处 |
| --bk-search-select-menu-disabled-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-search-list.is-hover.is-disabled:hover |
| --bk-search-select-menu-disabled-hover-bg | 无 | rgba(234, 243, 255, 0.7) | 当前 rgba(234, 243, 255, 0.7)。bg。例如 .bk-search-list.is-hover.is-disabled:hover |
| --bk-search-select-menu-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .bk-search-list.is-disabled |
| --bk-search-select-menu-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-search-list:hover、.bk-search-list.footer-btn:hover。共 2 处 |
| --bk-search-select-menu-hover-bg | 无 | rgba(234, 243, 255, 0.7) | 当前 rgba(234, 243, 255, 0.7)。bg。例如 .bk-search-list:hover、.bk-search-list.footer-btn:hover。共 2 处 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-search-select-menu-radius-s | --bk-radius-s | 2px | 例如 .bk-search-list、.tippy-tooltip.bk-search-select-theme-theme。共 2 处 |
| --bk-search-select-menu-radius | 无 | 3px | 例如 .bk-search-list。共 1 处 |

## select 选择器

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-select-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-options.bk-option-content.bk-option-icon、.bk-select-create-hint.hint-value。共 2 处 |
| --bk-select-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2、$fnMainColor。text。例如 .bk-select、.bk-select-dropdown-content。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-select-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5、$newBlackColor3、#979BA5。text。例如 .bk-select.bk-select-angle、.bk-select-search-wrapper.left-icon。共 4 处 |
| --bk-select-text-color-4 | --bk-color-neutral-04 | #C3CDD7 | 当前 $fnMinorColor。text。例如 .bk-select.bk-select-name.allow-create、.bk-select-search-input。共 3 处。近似填入，显示变成 #C4C6CC |
| --bk-select-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor、#c4c6cc。border/text。例如 .bk-select、.bk-select.only-bottom-border。共 3 处 |
| --bk-select-color-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1、#dcdee5。border/bg。例如 .only-bottom-border.is-readonly.is-loading、.bk-select.is-readonly.is-loading。共 8 处 |
| --bk-select-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 #f0f1f5。bg。例如 .bk-select-tag-container.bk-select-tag、.bk-select-tag-container.bk-select-overflow-tag。共 2 处 |
| --bk-select-bg-2 | --bk-color-neutral-08 | #F5F7FA | 当前 #F5F7FA。bg。例如 .bk-select-create-hint |
| --bk-select-bg-3 | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-select.is-readonly.is-loading。近似填入，显示变成 #FAFBFD |
| --bk-select-bg-4 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-select-extension |
| --bk-select-bg-5 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-select-dropdown-content |
| --bk-select-disabled-selected-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $formBorderColor、$disabledColor。text。例如 .is-unselected.is-disabled.is-readonly、.bk-option.is-selected.is-disabled。共 3 处 |
| --bk-select-disabled-selected-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $disabledBackground。bg。例如 .bk-option.is-selected.is-disabled |
| --bk-select-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .bk-select.is-disabled.bk-select-angle、.bk-options.bk-option.is-disabled。共 2 处 |
| --bk-select-disabled-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。border。例如 .bk-select.only-bottom-border.is-disabled、.bk-select.is-disabled。共 2 处 |
| --bk-select-disabled-bg | --bk-color-neutral-09 | #FAFBFD | 当前 #fafbfd。bg。例如 .bk-select.is-disabled |
| --bk-select-disabled-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $disabledBackground。bg。例如 .bk-options.bk-option.is-disabled |
| --bk-select-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff、$newMainColor。border。例如 .bk-select:focus、.bk-select.only-bottom-border.is-focus。共 3 处 |
| --bk-select-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-options.bk-option.is-highlight:hover |
| --bk-select-hover-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 #63656E。text。例如 .bk-select-tag-container.is-available.icon-close:hover。近似填入，显示变成 #4D4F56 |
| --bk-select-hover-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .bk-select.bk-select-clear:hover |
| --bk-select-hover-bg | --bk-color-neutral-05 | #DCDEE5 | 当前 #DCDEE5。bg。例如 .bk-select-tag-container.is-available.bk-select-tag:hover |
| --bk-select-hover-bg-2 | --bk-color-brand-07 | #EAF3FF | 当前 $hoverBackground。bg。例如 .bk-options-single.bk-option.is-highlight:hover、.bk-options.bk-option.is-highlight:hover。共 2 处。近似填入，显示变成 #F0F5FF |
| --bk-select-hover-bg-3 | --bk-color-neutral-07 | #F0F1F5 | 当前 #f0f1f5。bg。例如 .bk-select-extension:hover |
| --bk-select-selected-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-options.bk-option.is-selected |
| --bk-select-selected-text-color-2 | --bk-color-neutral-04 | #C3CDD7 | 当前 $fnMinorColor。text。例如 .bk-select.is-default-trigger.is-unselected。近似填入，显示变成 #C4C6CC |
| --bk-select-selected-bg | --bk-color-neutral-08 | #F4F6FA | 当前 $selectedBackground。bg。例如 .bk-options-single.bk-option.is-selected、.bk-options.bk-option.is-selected。共 2 处。近似填入，显示变成 #F5F7FA |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-select-radius-s | --bk-radius-s | 2px | 例如 .bk-select、.bk-select-dropdown-content。共 3 处 |
| --bk-select-radius | 无 | 3px | 例如 .bk-options、.bk-options.bk-virtual-select.bk-min-nav-slide。共 2 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 0px 0px 1px 1px | 1 | .bk-select-extension |

## sideslider 侧栏

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-sideslider-text-color | --bk-color-neutral-01 | #313238 | 当前 $newBlackColor1。text。例如 .bk-sideslider |
| --bk-sideslider-bg | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。bg。例如 .bk-sideslider |
| --bk-sideslider-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #DCDEE5、#dcdee5。border。例如 .bk-sideslider。共 2 处 |
| --bk-sideslider-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff、#FFFFFF。bg/text。例如 .bk-sideslider。共 4 处 |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #DCDEE5 | --bk-color-neutral-05 | sideslider/sideslider.vue | :style="{ borderTopColor: !needBorder ? 'transparent' : '#dcdee5', backgroundColor: !needBorder ? '#fafbfd' : '#ffffff' }"> |
| #FAFBFD | --bk-color-neutral-09 | sideslider/sideslider.vue | :style="{ borderTopColor: !needBorder ? 'transparent' : '#dcdee5', backgroundColor: !needBorder ? '#fafbfd' : '#ffffff' }"> |
| #FFFFFF | --bk-color-neutral-10 | sideslider/sideslider.vue | :style="{ borderTopColor: !needBorder ? 'transparent' : '#dcdee5', backgroundColor: !needBorder ? '#fafbfd' : '#ffffff' }"> |

## slider 滑块

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-slider-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff、$newMainColor。bg/border。例如 .bk-slider.bk-slider-runway.bk-slider-bar、.bk-slider-button.slider-button。共 2 处 |
| --bk-slider-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。bg/border。例如 .bk-slider.bk-slider-runway.disable、.bk-slider-button.slider-button。共 2 处 |
| --bk-slider-bg | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .bk-slider.bk-slider-runway |
| --bk-slider-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-slider.bk-slider-interval、.bk-slider-button.slider-button。共 2 处 |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-slider-radius-s | --bk-radius-s | 2px | 例如 .bk-slider.bk-slider-runway。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 100% | 1 | .bk-slider.bk-slider-interval |
| 50% | 1 | .bk-slider-button.slider-button |

## spin 加载图标

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-spin-bg | --bk-color-success-02 | #2DCB56 | 当前 $successColor。bg。例如 @keyframes fadeSuccess 0%。近似填入，显示变成 #2CAF5E |
| --bk-spin-color | --bk-color-brand-02 | #3C96FF | 当前 $primaryColor。text/bg。例如 .bk-spin.bk-spin-icon、@keyframes fadePrimary 0%。共 2 处。近似填入，显示变成 #3A84FF |
| --bk-spin-text-color | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-spin.bk-spin-title。近似填入，显示变成 #4D4F56 |
| --bk-spin-bg-2 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。bg。例如 @keyframes fadeInfo 0% |
| --bk-spin-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。bg/text。例如 .bk-spin-rotation.bk-spin-rotation-default-wait.rotate、.bk-spin.bk-spin-icon-default。共 3 处 |
| --bk-spin-bg-3 | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor。bg。例如 @keyframes fadeDanger 0% |
| --bk-spin-bg-4 | --bk-color-warning-03 | #FFB848 | 当前 $warningColor。bg。例如 @keyframes fadeWarning 0%。近似填入，显示变成 #F8B64F |
| --bk-spin-danger-color | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor。bg/text。例如 .bk-spin-rotation.bk-spin-rotation-danger-wait.rotate、.bk-spin.bk-spin-icon-danger。共 2 处 |
| --bk-spin-info-bg | --bk-color-neutral-02 | #63656E | 当前 #63656e。bg。例如 .bk-spin-rotation.bk-spin-rotation-info-wait.rotate。近似填入，显示变成 #4D4F56 |
| --bk-spin-info-text-color | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。text。例如 .bk-spin.bk-spin-icon-info |
| --bk-spin-primary-color | --bk-color-brand-02 | #3C96FF | 当前 $primaryColor。bg/text。例如 .bk-spin-rotation.bk-spin-rotation-primary-wait.rotate、.bk-spin.bk-spin-icon-primary。共 2 处。近似填入，显示变成 #3A84FF |
| --bk-spin-success-color | --bk-color-success-02 | #2DCB56 | 当前 $successColor。bg/text。例如 .bk-spin-rotation.bk-spin-rotation-success-wait.rotate、.bk-spin.bk-spin-icon-success。共 2 处。近似填入，显示变成 #2CAF5E |
| --bk-spin-warning-color | --bk-color-warning-03 | #FFB848 | 当前 $warningColor。bg/text。例如 .bk-spin-rotation.bk-spin-rotation-warning-wait.rotate、.bk-spin.bk-spin-icon-warning。共 2 处。近似填入，显示变成 #F8B64F |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-spin-radius-xl | --bk-radius-xl | 8px | 例如 .bk-spin.bk-spin-rotation.rotate。共 1 处 |

## star 星星

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-star-text-color | --bk-color-neutral-04 | #C5C7D1 | 当前 #c5c7d1。text。例如 .bk-rate-stars.bk-rate-star。近似填入，显示变成 #C4C6CC |
| --bk-star-text-color-2 | --bk-color-warning-03 | #FFB848 | 当前 #ffb848。text。例如 .bk-rate-stars.bk-rate-star.bk-yellow。近似填入，显示变成 #F8B64F |

## steps 步骤条

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-steps-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 6 处 |
| --bk-steps-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e、$fnMainColor。text。例如 .bk-steps.bk-step.bk-step-title、.bk-step.done.bk-step-title。共 3 处。近似填入，显示变成 #4D4F56 |
| --bk-steps-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5。border/text。例如 .bk-steps.bk-step.bk-step-indicator、.bk-steps.bk-step.bk-step-description。共 4 处 |
| --bk-steps-bg | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。gradient/bg。例如 .bk-step.bk-step-title.bk-step-indicator、.bk-steps.bk-step。共 3 处 |
| --bk-steps-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text/bg。例如 .bk-step-number.bk-step-icon.bk-step-text、.bk-steps.bk-step.bk-step-indicator。共 2 处 |
| --bk-steps-danger-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 8 处 |
| --bk-steps-danger-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-step-number.bk-step-icon.bk-step-text |
| --bk-steps-error-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 4 处 |
| --bk-steps-error-color-2 | --bk-color-danger-03 | #FF5656 | 当前 $newRedColor1。bg/border/text。例如 .current.bk-step-error.bk-step-indicator、.bk-step-error.bk-step-title.bk-step-description。共 3 处 |
| --bk-steps-info-color | --bk-color-brand-04 | #88C3FF | 当前 $infoColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 6 处。近似填入，显示变成 #A3C5FD |
| --bk-steps-info-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-step-number.bk-step-icon.bk-step-text |
| --bk-steps-success-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 6 处。近似填入，显示变成 #2CAF5E |
| --bk-steps-success-color-2 | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 2 处 |
| --bk-steps-success-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-step-number.bk-step-icon.bk-step-text |
| --bk-steps-warning-color | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。gradient。例如 .bk-step-error.bk-step-title.bk-step-indicator、.done.current.bk-step-error。共 2 处 |
| --bk-steps-warning-color-2 | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。border/text/gradient/bg。例如 .done.bk-step-number.bk-step-icon、.done.bk-step-title.bk-step-indicator。共 6 处。近似填入，显示变成 #F59500 |
| --bk-steps-warning-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。text。例如 .bk-step-number.bk-step-icon.bk-step-text |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-steps.bk-step.bk-step-indicator |

## swiper 轮播

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-swiper-bg | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。bg。例如 .bk-swiper-index。近似填入，显示变成 #4D4F56 |
| --bk-swiper-bg-2 | --bk-color-neutral-04 | #C5C7D1 | 当前 #c5c7d1。bg。例如 .bk-swiper-index.bk-current-index。近似填入，显示变成 #C4C6CC |
| --bk-swiper-border-color | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。border。例如 .bk-swiper-nav.bk-swiper-nav-icon。共 2 处 |
| --bk-swiper-hover-bg | 无 | rgba(31, 45, 61, 0.6) | 当前 rgba(31,45,61,.6)。bg。例如 .bk-swiper-nav:hover |
| --bk-swiper-bg-3 | 无 | rgba(31, 45, 61, 0.4) | 当前 rgba(31,45,61,.4)。bg。例如 .bk-swiper-nav |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-swiper-radius-s | --bk-radius-s | 2px | 例如 .bk-swiper-index。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-swiper-nav |

## switcher 开关

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-switcher-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。bg/border/text。例如 .bk-switcher、.bk-switcher.bk-switcher-outline。共 4 处 |
| --bk-switcher-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg/text。例如 .bk-switcher、.bk-switcher.switcher-label。共 3 处 |
| --bk-switcher-checked-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg/border/text。例如 .bk-switcher.is-checked、.bk-switcher.bk-switcher-outline.is-checked。共 4 处。近似填入，显示变成 #2CAF5E |
| --bk-switcher-disabled-color | --bk-color-neutral-07 | #EEEEEE | 当前 #eee。border/text/bg。例如 .bk-switcher.bk-switcher-outline.is-disabled、.bk-switcher-outline.is-disabled.switcher-label。共 3 处。近似填入，显示变成 #F0F1F5 |
| --bk-switcher-disabled-bg | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-switcher.bk-switcher-outline.is-disabled |
| --bk-switcher-primary-checked-bg | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg。例如 .bk-switcher.is-checked.primary |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-switcher-radius | 无 | 100px | 例如 .bk-switcher。共 1 处 |
| --bk-switcher-radius-xxl | --bk-radius-xxl | 12px | 例如 .bk-switcher.bk-switcher-large。共 1 处 |
| --bk-switcher-radius-s | --bk-radius-s | 2px | 例如 .bk-switcher.bk-switcher-square。共 2 处 |
| --bk-switcher-radius-2 | 无 | 50px | 例如 .bk-switcher。共 1 处 |

## tab 选项卡

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tab-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。bg/border。例如 .bk-tab-label-list-has-bar、.bk-tab-label-list.bk-tab-label-item.simulate-border-right。共 2 处 |
| --bk-tab-text-color | --bk-color-neutral-02 | #63656E | 当前 $headerColor。text。例如 .bk-tab-header。近似填入，显示变成 #4D4F56 |
| --bk-tab-bg | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。bg。例如 .bk-tab-label-wrapper.bk-tab-label-list.bk-tab-label-item、.bk-tab-label-list.bk-tab-label-item.bk-tab-close-controller。共 2 处 |
| --bk-tab-bg-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。bg/gradient。例如 .position-left.position-right.bk-tab-header、.bk-tab-header。共 2 处 |
| --bk-tab-bg-3 | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-tab.bk-tab-card-tab.bk-tab-header、.bk-tab-extension-controller.bk-tab-add-controller.bk-tab-scroll-controller。共 4 处 |
| --bk-tab-bg-4 | --bk-color-neutral-09 | #FAFBFD | 当前 $headerBackgroundColor。bg。例如 .bk-tab.bk-tab-border-card.bk-tab-header、.bk-tab-label-wrapper.bk-tab-extension-controller.bk-tab-add-controller。共 4 处 |
| --bk-tab-bg-5 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-tab-card.bk-tab-extension-controller.bk-tab-add-controller、.bk-tab-extension-controller.bk-tab-add-controller.bk-tab-scroll-controller。共 4 处 |
| --bk-tab-active-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-tab-label-list.bk-tab-label-item.active |
| --bk-tab-active-bg | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。bg。例如 .bk-tab-label-list.is-last.active |
| --bk-tab-active-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-tab-label-list.bk-tab-label-item.active、.bk-tab-label-wrapper.bk-tab-label-list.active。共 4 处 |
| --bk-tab-disabled-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-tab-label-list.bk-tab-label-item.is-disabled:hover |
| --bk-tab-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-tab-label-wrapper.bk-tab-scroll-controller.disabled、.bk-tab-label-list.bk-tab-label-item.is-disabled。共 2 处 |
| --bk-tab-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-tab-label-wrapper.bk-tab-extension-controller.bk-tab-add-controller:hover、.bk-tab-label-wrapper.bk-tab-scroll-controller:hover。共 2 处 |
| --bk-tab-hover-bg | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。bg。例如 .bk-tab-label-list.bk-tab-label-item.bk-tab-close-controller:hover |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tab-radius-none | --bk-radius-none | 0 | 例如 .bk-tab-label-wrapper.has-scroller.bk-tab-label-list。共 1 处 |
| --bk-tab-radius-s | --bk-radius-s | 2px | 例如 .bk-tab。共 1 处 |
| --bk-tab-radius-m | --bk-radius-m | 4px | 例如 .bk-tab.bk-tab-card-tab。共 1 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 2px 2px 0 0 | 2 | .bk-tab.bk-tab-border-card.bk-tab-header |
| 4px 4px 0 0 | 2 | .bk-tab.bk-tab-card-tab.bk-tab-header |
| 2px 0 0 0 | 2 | .bk-tab-label-wrapper.has-add.bk-tab-label-list |
| 50% | 1 | .bk-tab-label-list.bk-tab-label-item.bk-tab-close-controller |
| 0 0 2px 2px | 1 | .bk-tab-section |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #DCDEE5 | --bk-color-neutral-05 | tab/tab.vue | backgroundImage: `linear-gradient(transparent ${this.labelHeight - diffValue}px, #dcdee5 1px)` |

## table 表格

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-table-text-color | --bk-color-neutral-01 | #313238 | 当前 #313238。text。例如 .bk-table.bk-table-header-label、.bk-table-setting-content.content-title。共 2 处 |
| --bk-table-bg | --bk-color-brand-02 | #3785FF | 当前 #3785FF。bg。例如 .bk-table-column-resize-head。近似填入，显示变成 #3A84FF |
| --bk-table-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text/border。例如 .bk-table.bk-table-column-filter-trigger.is-filtered、.ascending.bk-table-sort-caret.ascending。共 3 处 |
| --bk-table-text-color-2 | --bk-color-neutral-02 | #575961 | 当前 #575961。text。例如 .bk-table。近似填入，显示变成 #4D4F56 |
| --bk-table-text-color-3 | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor、#63656e。text。例如 .bk-table、.bk-table.bk-table-column-filter-trigger.is-open。共 5 处。近似填入，显示变成 #4D4F56 |
| --bk-table-text-color-4 | --bk-color-neutral-03 | #979BA5 | 当前 #979ba5、#979BA5。text。例如 .bk-table-bottom-loading.bk-table-bottom-loading-spin.bk-spin-title、.bk-table-column-setting.bk-table-setting-icon。共 3 处 |
| --bk-table-border-color | --bk-color-neutral-04 | #C0C4CC | 当前 $tableCaretColor。border。例如 .bk-table.bk-table-sort-caret.ascending、.bk-table.bk-table-sort-caret.descending。共 2 处。近似填入，显示变成 #C4C6CC |
| --bk-table-text-color-5 | --bk-color-neutral-04 | #C3CDD7 | 当前 $fnMinorColor。text。例如 .bk-table-empty-text.bk-table-empty-icon。近似填入，显示变成 #C4C6CC |
| --bk-table-text-color-6 | --bk-color-neutral-04 | #C4C6CC | 当前 #C4C6CC、#c4c6cc。text。例如 .bk-table.bk-table-column-filter-trigger、.bk-table-expand-icon。共 2 处 |
| --bk-table-color-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5、#DCDEE5。bg/border。例如 .bk-table-setting-content.content-scroller、.bk-table-setting-content.content-options。共 3 处 |
| --bk-table-color-3 | --bk-color-neutral-05 | #DFE0E5 | 当前 $tableBorderColor。bg/border。例如 .bk-table-group.bk-table-border.bk-table-outer-border、.bk-table-fixed.bk-table-fixed-right。共 5 处。近似填入，显示变成 #DCDEE5 |
| --bk-table-bg-2 | --bk-color-brand-07 | #ECF5FF | 当前 $tableCurrentRowBackground。bg。例如 .bk-table-striped.bk-table-body.current-row、.bk-table-body.bk-table-row.current-row。共 2 处。近似填入，显示变成 #F0F5FF |
| --bk-table-color-4 | --bk-color-neutral-07 | #F0F1F5 | 当前 $tableDarkHeader、#F0F1F5。bg/border。例如 .bk-table.bk-table-dark-header、.bk-table-filter-panel.panel-search。共 3 处 |
| --bk-table-bg-3 | --bk-color-neutral-08 | #F5F7FA | 当前 $baseBackgroundColor。bg。例如 .bk-table.is-group、.bk-table-fixed-right。共 4 处 |
| --bk-table-bg-4 | --bk-color-neutral-09 | #FAFAFA | 当前 #fafafa。bg。例如 .bk-table-striped.bk-table-body.bk-table-row-striped。近似填入，显示变成 #FAFBFD |
| --bk-table-bg-5 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3、#FAFBFD。bg。例如 .bk-table、.bk-table-setting-content.content-options。共 2 处 |
| --bk-table-bg-6 | --bk-color-danger-03 | #FF4D51 | 当前 #ff4d51。bg。例如 .bk-table.required。近似填入，显示变成 #FF5656 |
| --bk-table-text-color-7 | --bk-color-danger-03 | #FF5656 | 当前 $dangerColor。text。例如 .setting-title.setting-subtitle.is-limit |
| --bk-table-bg-7 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-table、.bk-table.bk-table-body.bk-table-expanded-cell。共 3 处 |
| --bk-table-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc。text。例如 .panel-list.panel-item.is-disabled |
| --bk-table-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .bk-table-filter-panel.panel-list.panel-item:hover |
| --bk-table-hover-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-table-column-setting.bk-table-setting-icon:hover。近似填入，显示变成 #4D4F56 |
| --bk-table-hover-bg | --bk-color-brand-07 | #EAF3FF | 当前 #eaf3ff。bg。例如 .bk-table-filter-panel.panel-list.panel-item:hover。近似填入，显示变成 #F0F5FF |
| --bk-table-hover-bg-2 | --bk-color-brand-07 | #ECF5FF | 当前 $tableCurrentRowBackground。bg。例如 .hover-row.bk-table-row-striped.current-row。近似填入，显示变成 #F0F5FF |
| --bk-table-hover-bg-3 | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-table:hover |
| --bk-table-hover-bg-4 | --bk-color-neutral-08 | #F5F7FA | 当前 #f5f7fa。bg。例如 .bk-table-body.bk-table-row.hover-row |
| --bk-table-hover-bg-5 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-table.bk-table-body.bk-table-expanded-cell:hover |
| --bk-table-selected-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3a84ff。text。例如 .panel-list.panel-item.is-selected |
| --bk-table-selected-bg | --bk-color-neutral-08 | #F4F6FA | 当前 #f4f6fa。bg。例如 .panel-list.panel-item.is-selected。近似填入，显示变成 #F5F7FA |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-table-radius-s | --bk-radius-s | 2px | 例如 .bk-table-group.bk-table-border.bk-table-outer-border。共 1 处 |
| --bk-table-radius | 无 | 3px | 例如 .bk-table-setting-content.content-scroller、.bk-table-filter-panel.panel-list。共 2 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 1 | .bk-table.required |

### 模板 / 脚本里的颜色

| 当前值 | 引用的第一层变量 | 位置 | 前文 |
| --- | --- | --- | --- |
| #DFE0E5 | --bk-color-neutral-05 | table/table.vue | <div class="bk-table-bottom-loading" style="border-top: 1px solid #dfe0e5; bottom: 1px;" v-if="scrollEndLoading.isLoading"></div> |

## tag 标签

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tag-bg | --bk-color-brand-02 | #3A84FF | 当前 $info-color。bg。例如 .bk-tag-check |
| --bk-tag-text-color | --bk-color-neutral-02 | #63656E | 当前 $font-color。text。例如 .bk-tag。近似填入，显示变成 #4D4F56 |
| --bk-tag-bg-2 | --bk-color-neutral-03 | #979BA5 | 当前 $default-color。bg。例如 .bk-tag-filled.bk-tag |
| --bk-tag-bg-3 | 无 | #979BA5 / 10% | 当前 color($default-color a(10%))。bg。例如 .bk-tag |
| --bk-tag-border-color | 无 | #DCDEE5 / 60% | 当前 color($border-color a(60%))。border。例如 .bk-tag |
| --bk-tag-text-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $base-color。text。例如 .bk-tag-filled、.bk-tag-check。共 2 处 |
| --bk-tag-danger-color | --bk-color-danger-02 | #EA3536 | 当前 $danger-color。text/bg。例如 .bk-tag-danger、.bk-tag-filled.bk-tag-danger。共 2 处。近似填入，显示变成 #EA3636 |
| --bk-tag-danger-bg | 无 | #EA3536 / 10% | 当前 color($danger-color a(10%))。bg。例如 .bk-tag-danger |
| --bk-tag-danger-border-color | 无 | #EA3536 / 30% | 当前 color($danger-color a(30%))。border。例如 .bk-tag-danger |
| --bk-tag-hover-bg | --bk-color-brand-02 | #3A84FF | 当前 $info-color。bg。例如 .bk-tag-check:hover |
| --bk-tag-hover-bg-2 | 无 | #979BA5 / 15% | 当前 color($default-color a(15%))。bg。例如 .bk-tag-checkable:hover |
| --bk-tag-hover-text-color | --bk-color-neutral-10 | #FFFFFF | 当前 $base-color。text。例如 .bk-tag-check:hover |
| --bk-tag-info-color | --bk-color-brand-02 | #3A84FF | 当前 $info-color。text/bg。例如 .bk-tag-info、.bk-tag-filled.bk-tag-info。共 2 处 |
| --bk-tag-info-bg | 无 | #3A84FF / 10% | 当前 color($info-color a(10%))。bg。例如 .bk-tag-info |
| --bk-tag-info-border-color | 无 | #3A84FF / 30% | 当前 color($info-color a(30%))。border。例如 .bk-tag-info |
| --bk-tag-success-color | --bk-color-success-01 | #14A568 | 当前 $success-color。text/bg。例如 .bk-tag-success、.bk-tag-filled.bk-tag-success。共 2 处。近似填入，显示变成 #299E56 |
| --bk-tag-success-bg | 无 | #14A568 / 10% | 当前 color($success-color a(10%))。bg。例如 .bk-tag-success |
| --bk-tag-success-border-color | 无 | #14A568 / 30% | 当前 color($success-color a(30%))。border。例如 .bk-tag-success |
| --bk-tag-warning-color | --bk-color-warning-02 | #FE9C00 | 当前 $warning-color。text/bg。例如 .bk-tag-warning、.bk-tag-filled.bk-tag-warning。共 2 处。近似填入，显示变成 #F59500 |
| --bk-tag-warning-bg | 无 | #FE9C00 / 10% | 当前 color($warning-color a(10%))。bg。例如 .bk-tag-warning |
| --bk-tag-warning-border-color | 无 | #FE9C00 / 30% | 当前 color($warning-color a(30%))。border。例如 .bk-tag-warning |

## tag-input 标签输入

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tag-input-text-color | --bk-color-brand-02 | #3A84FF | 当前 #3A84FF。text。例如 .bk-tag-selector.highlight-text、.highlight-text。共 2 处 |
| --bk-tag-input-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .bk-tag-input.tag-list.remove-key、.bk-tag-selector.bk-tag-input.tag。共 4 处。近似填入，显示变成 #4D4F56 |
| --bk-tag-input-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 #979BA5。text。例如 .bk-selector-list.bk-selector-group-item.group-name |
| --bk-tag-input-color | --bk-color-neutral-04 | #C4C6CC | 当前 #c4c6cc、$newGreyColor、$formBorderColor。border/text。例如 .bk-tag-selector.bk-tag-input、.bk-tag-input.fix-height.tag-list。共 12 处 |
| --bk-tag-input-color-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5、#DCDEE5。bg/border。例如 .bk-selector-list.outside-ul。共 3 处 |
| --bk-tag-input-color-3 | --bk-color-neutral-07 | #F0F1F5 | 当前 #F0F1F5。border/bg。例如 .bk-tag-input.tag-list.key-node、.bk-tag-selector.bk-tag-input.tag。共 3 处 |
| --bk-tag-input-bg | --bk-color-neutral-08 | #F4F6FA | 当前 #F4F6FA。bg。例如 .bk-selector-list.bk-selector-list-item.bk-selector-actived。近似填入，显示变成 #F5F7FA |
| --bk-tag-input-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-tag-selector.bk-tag-input、.bk-tag-input.fix-height.tag-list。共 6 处 |
| --bk-tag-input-active-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-tag-input.active.fix-height、.active.fix-height.tag-list。共 2 处 |
| --bk-tag-input-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-selector-list-item.disabled.text |
| --bk-tag-input-disabled-bg | --bk-color-neutral-09 | #FAFAFA | 当前 $defaultHoverColor。bg。例如 .bk-tag-selector.bk-tag-input.disabled。近似填入，显示变成 #FAFBFD |
| --bk-tag-input-disabled-bg-2 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg。例如 .bk-selector-list.bk-selector-list-item.disabled |
| --bk-tag-input-hover-text-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-tag-selector.bk-tag-input.clear-icon:hover |
| --bk-tag-input-hover-bg | --bk-color-brand-07 | #EAF3FF | 当前 #EAF3FF。bg。例如 .bk-selector-list.bk-selector-list-item:hover。共 2 处。近似填入，显示变成 #F0F5FF |
| --bk-tag-input-selected-text-color | --bk-color-brand-02 | #3C96FF | 当前 $primaryColor。text。例如 .bk-selector-list.bk-selector-list-item.bk-selector-selected。近似填入，显示变成 #3A84FF |
| --bk-tag-input-selected-bg | --bk-color-neutral-08 | #F4F6FA | 当前 #F4F6FA。bg。例如 .bk-selector-list.bk-selector-list-item.bk-selector-selected。共 2 处。近似填入，显示变成 #F5F7FA |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tag-input-radius-none | --bk-radius-none | 0 | 例如 .bk-tag-input.dropdown-actions.bk-button。共 1 处 |
| --bk-tag-input-radius-s | --bk-radius-s | 2px | 例如 .bk-tag-selector.bk-tag-input、.bk-tag-selector.bk-tag-input.tag-list。共 5 处 |
| --bk-tag-input-radius | 无 | 3px | 例如 .bk-selector-list.outside-ul。共 2 处 |

## time-picker 时间选择

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-time-picker-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-time-picker-now、.bk-time-picker-cells。共 2 处 |
| --bk-time-picker-text-color-2 | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .bk-time-picker-cells-list.bk-time-picker-cells-ul.bk-time-picker-cells-cell、.bk-time-picker-header。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-time-picker-text-color-3 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .bk-time-picker-cells-title-wrapper.bk-time-picker-cells-title |
| --bk-time-picker-border-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border。例如 .bk-time-picker-now、.bk-time-picker-header。共 2 处 |
| --bk-time-picker-bg | --bk-color-brand-06 | #E1ECFF | 当前 $newMainColor3。bg。例如 .bk-time-picker-cells |
| --bk-time-picker-bg-2 | --bk-color-neutral-06 | #E8EAEC | 当前 #e8eaec。bg。例如 .bk-time-picker-with-range.bk-picker-panel-content。近似填入，显示变成 #EAEBF0 |
| --bk-time-picker-bg-3 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .bk-time-picker-now |
| --bk-time-picker-active-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-time-picker-cells-title-wrapper.bk-time-picker-cells-title.active |
| --bk-time-picker-disabled-hover-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-time-picker-cells-list.bk-time-picker-cells-ul.bk-time-picker-cells-cell-disabled:hover |
| --bk-time-picker-disabled-hover-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-time-picker-cells-list.bk-time-picker-cells-ul.bk-time-picker-cells-cell-disabled:hover |
| --bk-time-picker-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .bk-time-picker-cells-list.bk-time-picker-cells-ul.bk-time-picker-cells-cell-disabled |
| --bk-time-picker-hover-selected-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-time-picker-cells-ul.bk-time-picker-cells-cell-selected.bk-time-picker-cells-cell-selected:hover |
| --bk-time-picker-hover-bg | --bk-color-neutral-07 | #F0F1F5 | 当前 $newGreyColor2。bg。例如 .bk-time-picker-cells-list.bk-time-picker-cells-ul.bk-time-picker-cells-cell:hover |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-time-picker-radius-none | --bk-radius-none | 0 | 例如 .bk-time-picker-with-range.bk-time-picker-cells-list、.bk-picker-panel-content.bk-picker-panel-content.bk-time-picker-cells-list。共 4 处 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 2px 0 0 2px | 1 | .bk-time-picker-cells-list |
| 0 2px 2px 0 | 1 | .bk-time-picker-cells-list |

## timeline 时间轴

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-timeline-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text/border/bg。例如 .bk-timeline.bk-timeline-item-blue.bk-timeline-icon、.bk-timeline-item-blue.bk-timeline-item-filled.bk-timeline-icon。共 3 处 |
| --bk-timeline-color-2 | 无 | #40C024 | 当前 #40c024。text/border/bg。例如 .bk-timeline.bk-timeline-item-green.bk-timeline-icon、.bk-timeline-item-green.bk-timeline-item-filled.bk-timeline-icon。共 3 处 |
| --bk-timeline-text-color | --bk-color-neutral-02 | #63656E | 当前 #63656e。text。例如 .bk-timeline.bk-timeline-dot.bk-timeline-title。近似填入，显示变成 #4D4F56 |
| --bk-timeline-text-color-2 | --bk-color-neutral-02 | #666666 | 当前 #666。text。例如 .bk-timeline.bk-timeline-dot.bk-timeline-content。近似填入，显示变成 #4D4F56 |
| --bk-timeline-color-3 | --bk-color-neutral-03 | #999999 | 当前 #999。border/text。例如 .bk-timeline.bk-timeline-item-default、.bk-timeline.bk-timeline-item-default.bk-timeline-icon。共 3 处。近似填入，显示变成 #979BA5 |
| --bk-timeline-color-4 | --bk-color-neutral-05 | #D8D8D8 | 当前 #d8d8d8。border/text/bg。例如 .bk-timeline.bk-timeline-dot、.bk-timeline.bk-timeline-dot.bk-timeline-icon。共 6 处。近似填入，显示变成 #DCDEE5 |
| --bk-timeline-color-5 | --bk-color-danger-02 | #EA3636 | 当前 $newRedColor。text/border/bg。例如 .bk-timeline.bk-timeline-item-red.bk-timeline-icon、.bk-timeline-item-red.bk-timeline-item-filled.bk-timeline-icon。共 3 处 |
| --bk-timeline-color-6 | --bk-color-warning-02 | #FF9C01 | 当前 $newOrangeColor。text/border/bg。例如 .bk-timeline.bk-timeline-item-yellow.bk-timeline-icon、.bk-timeline-item-yellow.bk-timeline-item-filled.bk-timeline-icon。共 3 处。近似填入，显示变成 #F59500 |
| --bk-timeline-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-timeline.bk-timeline-dot、.bk-timeline.bk-timeline-dot.bk-timeline-icon。共 2 处 |
| --bk-timeline-danger-color | --bk-color-danger-03 | #FF5656 | 当前 #ff5656。border/text。例如 .bk-timeline.bk-timeline-item-danger、.bk-timeline.bk-timeline-item-danger.bk-timeline-icon。共 3 处 |
| --bk-timeline-primary-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text。例如 .bk-timeline.bk-timeline-item-primary、.bk-timeline.bk-timeline-item-primary.bk-timeline-icon。共 3 处 |
| --bk-timeline-success-color | 无 | #30D878 | 当前 #30d878。border/text。例如 .bk-timeline.bk-timeline-item-success、.bk-timeline.bk-timeline-item-success.bk-timeline-icon。共 3 处 |
| --bk-timeline-warning-color | --bk-color-warning-02 | #FFB400 | 当前 #ffb400。border/text。例如 .bk-timeline.bk-timeline-item-warning、.bk-timeline.bk-timeline-item-warning.bk-timeline-icon。共 3 处。近似填入，显示变成 #F59500 |

### 保留原值的圆角

这些是圆形或不对称圆角，不做成组件变量。

| 当前值 | 出现次数 | 示例 |
| --- | --- | --- |
| 50% | 2 | .bk-timeline.bk-timeline-dot |

## transfer 穿梭框

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-transfer-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .source-list.target-list.header |
| --bk-transfer-text-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .source-list.target-list.empty |
| --bk-transfer-border-color | --bk-color-neutral-05 | #DDE4EB | 当前 $borderInlineColor。border。例如 .bk-transfer.source-list.target-list、.source-list.target-list.slot-header。共 3 处。近似填入，显示变成 #DCDEE5 |
| --bk-transfer-bg | --bk-color-neutral-06 | #E6E9EA | 当前 #e6e9ea。bg。例如 .source-list.target-list.content。近似填入，显示变成 #EAEBF0 |
| --bk-transfer-border-color-2 | --bk-color-neutral-07 | #F0F1F5 | 当前 #f0f1f5。border。例如 .bk-transfer.transfer-search-input |
| --bk-transfer-bg-2 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg。例如 .source-list.target-list.slot-header、.source-list.target-list.header。共 2 处 |
| --bk-transfer-bg-3 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .bk-transfer.source-list.target-list |
| --bk-transfer-disabled-text-color | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor。text。例如 .target-list.header.disabled、.target-list.content.is-disabled。共 2 处 |
| --bk-transfer-disabled-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg。例如 .target-list.content.is-disabled |
| --bk-transfer-hover-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .source-list.target-list.content:hover |
| --bk-transfer-hover-bg | --bk-color-brand-07 | #EEF6FE | 当前 #eef6fe。bg。例如 .source-list.target-list.content:hover。近似填入，显示变成 #F0F5FF |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-transfer-radius-s | --bk-radius-s | 2px | 例如 .bk-transfer.source-list.target-list、.source-list.target-list.content。共 2 处 |

## tree 树

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tree-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/bg。例如 .bk-tree.bk-form-checkbox。共 4 处 |
| --bk-tree-border-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。border。例如 .bk-tree.bk-form-checkbox |
| --bk-tree-text-color | --bk-color-neutral-04 | #C0C4CC | 当前 #c0c4cc。text。例如 .bk-tree.tree-drag-node.tree-expanded-icon。近似填入，显示变成 #C4C6CC |
| --bk-tree-border-color-2 | --bk-color-neutral-04 | #C3CDD7 | 当前 $borderColor。border。例如 .bk-has-border-tree、.bk-has-border-tree.leaf。共 3 处。近似填入，显示变成 #C4C6CC |
| --bk-tree-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #fff。bg/border。例如 .bk-tree.bk-form-checkbox。共 2 处 |
| --bk-tree-disabled-color | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。border/bg。例如 .bk-tree.bk-form-checkbox。共 2 处 |
| --bk-tree-disabled-color-2 | --bk-color-neutral-09 | #FAFBFD | 当前 $newGreyColor3。bg/border。例如 .bk-tree.bk-form-checkbox。共 2 处 |
| --bk-tree-focus-border-color | --bk-color-brand-02 | #3C96FF | 当前 $formBorderFocusColor。border。例如 .bk-tree.bk-form-checkbox:focus。近似填入，显示变成 #3A84FF |
| --bk-tree-selected-text-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text。例如 .bk-tree.node-selected |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-tree-radius-s | --bk-radius-s | 2px | 例如 .bk-tree.bk-form-checkbox。共 2 处 |
| --bk-tree-radius | 无 | 3px | 例如 .bk-tree.node-title。共 1 处 |

## upload 上传

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-upload-border-color | --bk-color-brand-02 | #0082FF | 当前 #0082ff。border。例如 .bk-upload.isdrag。近似填入，显示变成 #3A84FF |
| --bk-upload-bg | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。bg。例如 .bk-upload.progress-bar-wrapper.progress-bar。近似填入，显示变成 #2CAF5E |
| --bk-upload-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。text/bg。例如 .pic-item.fail-status.reupload、.draggable.file-wrapper.click-upload。共 3 处 |
| --bk-upload-text-color | --bk-color-neutral-02 | #63656E | 当前 $newBlackColor2。text。例如 .draggable.file-wrapper.drop-upload、.bk-upload.tip。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-upload-text-color-2 | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .picture.file-wrapper.upload-btn |
| --bk-upload-color-2 | --bk-color-neutral-04 | #C4C6CC | 当前 $newGreyColor、rgba(196, 198, 204, 1)。border/text。例如 .bk-upload.pic-item、.bk-upload.pic-item.delete-file。共 8 处 |
| --bk-upload-bg-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 $newGreyColor1。bg。例如 .bk-upload.progress-bar-wrapper |
| --bk-upload-bg-3 | --bk-color-neutral-09 | #FAFBFD | 当前 rgba(250, 251, 253, 1)。bg。例如 .bk-upload.all-file.file-item |
| --bk-upload-color-3 | --bk-color-danger-03 | #FF5656 | 当前 $newRedColor1。border/text/bg。例如 .bk-upload.pic-item.fail、.pic-item.fail-status.delete-file。共 5 处 |
| --bk-upload-color-4 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。bg/text。例如 .bk-upload.pic-item.uploading-status、.bk-upload.pic-item.fail-status。共 3 处 |
| --bk-upload-error-text-color | --bk-color-neutral-03 | #979BA5 | 当前 $newBlackColor3。text。例如 .pic-item.fail.error-image-icon、.pic-item.fail-status.error-pic。共 2 处 |
| --bk-upload-error-text-color-2 | --bk-color-danger-03 | #FF5656 | 当前 $newRedColor1。text。例如 .file-item.file-info.error-msg |
| --bk-upload-focus-border-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border。例如 .bk-upload.draggable.file-wrapper:focus、.picture.file-wrapper.upload-btn:focus。共 2 处 |
| --bk-upload-hover-color | --bk-color-brand-02 | #3A84FF | 当前 $newMainColor。border/text。例如 .bk-upload.draggable.file-wrapper:hover、.draggable.file-wrapper.upload-icon:hover。共 5 处 |
| --bk-upload-hover-text-color | --bk-color-neutral-02 | #63656E | 当前 $fnMainColor。text。例如 .all-file.file-item.close-upload:hover。近似填入，显示变成 #4D4F56 |
| --bk-upload-hover-text-color-2 | --bk-color-danger-03 | #FF5656 | 当前 $newRedColor1。text。例如 .pic-item.fail-status.delete-file:hover、.file-item.file-item-fail.close-upload:hover。共 2 处 |
| --bk-upload-hover-text-color-3 | --bk-color-neutral-10 | #FFFFFF | 当前 $defaultColor。text。例如 .bk-upload.pic-item.delete-file:hover |
| --bk-upload-info-text-color | --bk-color-success-02 | #2DCB56 | 当前 $newGreenColor。text。例如 .file-info.file-message.done。近似填入，显示变成 #2CAF5E |
| --bk-upload-bg-4 | 无 | rgba(0, 0, 0, 0.6) | 当前 rgba(0, 0, 0, .6)。bg。例如 .bk-upload.pic-item.mask |
| --bk-upload-bg-5 | 无 | rgba(254, 221, 220, 0.4) | 当前 rgba(254, 221, 220, 0.4)。bg。例如 .all-file.file-item.file-item-fail |
| --bk-upload-success-bg | --bk-color-success-02 | #2DCB56 | 当前 $successColor。bg。例如 .bk-upload.progress-bar-wrapper.success。近似填入，显示变成 #2CAF5E |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-upload-radius | 无 | 1px | 例如 .bk-upload.progress-bar-wrapper、.bk-upload.progress-bar-wrapper.progress-bar。共 2 处 |
| --bk-upload-radius-s | --bk-radius-s | 2px | 例如 .bk-upload.pic-item、.bk-upload.button.file-wrapper。共 6 处 |

## version-detail 版本详情

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-version-detail-text-color | --bk-color-neutral-01 | #313238 | 当前 #313238。text。例如 .left-list.item-active.item-title、.bk-version。共 2 处 |
| --bk-version-detail-text-color-2 | --bk-color-neutral-01 | #333333 | 当前 #333。text。例如 .bk-version。近似填入，显示变成 #313238 |
| --bk-version-detail-text-color-3 | --bk-color-neutral-01 | #34383E | 当前 #34383e。text。例如 .bk-version。近似填入，显示变成 #313238 |
| --bk-version-detail-bg | --bk-color-brand-02 | #3A84FF | 当前 #3A84FF。bg。例如 .bk-version.left-list.item-active |
| --bk-version-detail-text-color-4 | --bk-color-neutral-02 | #63656E | 当前 #63656E。text。例如 .bk-version.left-list.item-title、.left-list.item-active.item-date。共 2 处。近似填入，显示变成 #4D4F56 |
| --bk-version-detail-bg-2 | --bk-color-brand-03 | #699DF4 | 当前 #699DF4。bg。例如 .bk-version.left-list.item-current |
| --bk-version-detail-text-color-5 | --bk-color-neutral-03 | #979BA5 | 当前 #979BA5。text。例如 .bk-version.left-list.item-date |
| --bk-version-detail-text-color-6 | --bk-color-neutral-03 | #999999 | 当前 #999。text。例如 .bk-version。近似填入，显示变成 #979BA5 |
| --bk-version-detail-bg-3 | --bk-color-neutral-04 | #C4C6CC | 当前 #C4C6CC。bg。例如 .bk-version.left-list |
| --bk-version-detail-color | --bk-color-neutral-05 | #DCDEE5 | 当前 #DCDEE5、#dcdee5。border/bg。例如 .bk-version.left-fill、.bk-version.left-list。共 9 处 |
| --bk-version-detail-text-color-7 | 无 | #DD1144 | 当前 #d14。text。例如 .bk-version |
| --bk-version-detail-border-color | --bk-color-neutral-05 | #DDDDDD | 当前 #ddd。border。例如 .bk-version。近似填入，显示变成 #DCDEE5 |
| --bk-version-detail-border-color-2 | --bk-color-neutral-05 | #DFDFDF | 当前 #dfdfdf。border。例如 .bk-version。近似填入，显示变成 #DCDEE5 |
| --bk-version-detail-border-color-3 | --bk-color-neutral-05 | #E1E1E8 | 当前 #e1e1e8。border。例如 .bk-version。近似填入，显示变成 #DCDEE5 |
| --bk-version-detail-bg-4 | --bk-color-neutral-08 | #F6F6F6 | 当前 #f6f6f6。bg。例如 .bk-version。近似填入，显示变成 #F5F7FA |
| --bk-version-detail-bg-5 | --bk-color-neutral-09 | #FAFBFD | 当前 #FAFBFD。bg。例如 .bk-version |
| --bk-version-detail-color-2 | --bk-color-neutral-10 | #FFFFFF | 当前 #FFFFFF。text/bg。例如 .bk-version.left-list.item-current、.bk-version.left-list.item-active。共 2 处 |
| --bk-version-detail-hover-active-color | --bk-color-brand-02 | #3A84FF | 当前 #3A84FF。bg/border。例如 .bk-version.resize-line.drag-content:hover:active、.bk-version.resize-line:hover:active。共 3 处 |
| --bk-version-detail-hover-bg | --bk-color-neutral-10 | #FFFFFF | 当前 #FFFFFF。bg。例如 .bk-version.left-list:hover |
| --bk-version-detail-bg-6 | 无 | rgba(0, 0, 0, 0.1) | 当前 rgba(0, 0, 0, .1)。bg。例如 .bk-version.left-list |
| --bk-version-detail-border-color-4 | 无 | rgba(0, 0, 0, 0.15) | 当前 rgba(0,0,0,0.15)。border。例如 .bk-version |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-version-detail-radius-s | --bk-radius-s | 2px | 例如 .bk-version.left-list.item-current、.bk-version。共 2 处 |
| --bk-version-detail-radius | 无 | 3px | 例如 .bk-version。共 2 处 |
| --bk-version-detail-radius-l | --bk-radius-l | 6px | 例如 .bk-version.left-list。共 1 处 |

## virtual-render 虚拟渲染

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-virtual-render-bg | --bk-color-neutral-03 | #A0A0A0 | 当前 #a0a0a0。bg。scrollbar-color 与 webkit thumb 共用 Neutral-03，显示 #979BA5 |
| --bk-virtual-render-bg-2 | --bk-color-neutral-05 | #DCDEE5 | 当前 #dcdee5。bg。例如 .bk-virtual-render.bk-scroll-y |

### 圆角

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-virtual-render-radius-xl | --bk-radius-xl | 8px | 例如 .bk-virtual-render.bk-scroll-x、.bk-virtual-render.bk-scroll-y。共 2 处 |

## virtual-scroll 虚拟滚动

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-virtual-scroll-active-bg | 无 | rgba(121, 121, 121, 0.55) | 当前 rgba(121, 121, 121, 0.55)。bg。例如 .bk-scroll-home.bk-min-nav-slide:active |
| --bk-virtual-scroll-hover-bg | 无 | rgba(121, 121, 121, 0.4) | 当前 rgba(121, 121, 121, 0.4)。bg。例如 .bk-scroll-home.bk-min-nav:hover |
| --bk-virtual-scroll-hover-bg-2 | 无 | rgba(121, 121, 121, 0.5) | 当前 rgba(121, 121, 121, 0.5)。bg。例如 .bk-scroll-home.bk-min-nav-slide:hover |
| --bk-virtual-scroll-bg | 无 | rgba(121, 121, 121, 0.4) | 当前 rgba(121, 121, 121, 0.4)。bg。例如 .bk-scroll-home.bk-min-nav-slide.bk-nav-show、.bk-scroll-home.bk-bottom-scroll。共 2 处 |

## zoom-image 缩放图片

### 颜色

| 组件变量 | 引用的第一层变量 | 默认值 | 说明 |
| --- | --- | --- | --- |
| --bk-zoom-image-bg | 无 | rgba(0, 0, 0, 0.6) | 当前 rgba(0, 0, 0, 0.6)。bg。例如 .bk-zoom-image.bk-full-screen |
