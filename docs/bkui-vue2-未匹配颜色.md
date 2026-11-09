# bkui-vue2 对不上第一层的颜色

> 这是改代码之前的底稿。当前源码里还没接上变量的颜色，看 [未覆盖颜色](./bkui-vue2-未覆盖颜色.md)。

只收录和 `global-variable.css` 色值不完全相同的颜色。同一种色值已合并，出现次数写在表里，没有少记。

第一层只有实色。下面这些都算对不上：旧色板里的色、带透明度的色、`darken()`、`color()`。

`color()` 写成 `色值 / 透明度`，例如 `#979BA5 / 10%`。

color-picker 里的纯红、纯绿、纯蓝是取色器色板，不是界面主题色，也列在表里。

样式实色 150 个，阴影 22 个，模板/脚本 9 个。

## 样式里的颜色

不同色值 150 个。

| 色值 | 出现次数 | 组件 | 当前写法 |
| --- | --- | --- | --- |
| #63656E | 103 | alert、big-tree、breadcrumb、button、cascade、checkbox、collapse、color-picker、common、date-picker、dialog、diff、dropdown-menu、exception、form、input、link、loading、message、navigation、navigation-menu-item、notify、pagination、popconfirm、process、radio、radio-button、round-progress、search-select、search-select-menu、select、spin、steps、swiper、tab、table、tag、tag-input、time-picker、timeline、upload、version-detail | #63656e、$fnMainColor、$newBlackColor2、#63656E、$defaultColor、$headerColor |
| #2DCB56 | 60 | alert、badge、button、common、form、link、loading、message、notify、process、progress、spin、steps、switcher、upload | #2dcb56、$newGreenColor、$successColor |
| #FF9C01 | 44 | alert、badge、button、common、dialog、diff、link、message、notify、progress、steps、timeline | #ff9c01、$newOrangeColor、$warningColor |
| #3C96FF | 18 | checkbox、input、loading、radio、search-select、spin、tag-input、tree | $formBorderFocusColor、$primaryColor、#3c96ff |
| #C3CDD7 | 15 | badge、big-tree、cascade、form、process、select、table、tree | $borderColor、#c3cdd7、$fnMinorColor |
| #FFB848 | 11 | button、form、loading、spin、star | $newOrangeColor1、$warningColor、#ffb848 |
| #EB9000 | 10 | button、link | $newOrangeColor4、#eb9000 |
| #1AB943 | 9 | button | $newGreenColor4 |
| #2761DD | 9 | button | $newMainColor4 |
| #DB2626 | 9 | button | $newRedColor4 |
| #EAF3FF | 9 | cascade、pagination、select、table、tag-input | $hoverBackground、#eaf3ff、#EAF3FF |
| #F4F6FA | 9 | cascade、input、select、table、tag-input | $selectedBackground、rgba(244, 246, 250, 1)、#f4f6fa、#F4F6FA |
| #FAFAFA | 8 | cascade、dropdown-menu、form、select、table、tag-input | #fafafa、$defaultHoverColor |
| #333333 | 7 | popover、version-detail | #333 |
| #88C3FF | 6 | steps | $infoColor |
| #D8D8D8 | 6 | timeline | #d8d8d8 |
| rgba(0, 0, 0, 0.6) | 6 | dialog、image-viewer、upload、zoom-image | rgba(0, 0, 0, 0.6)、rgba(0, 0, 0, .6) |
| #0082FF | 5 | breadcrumb、button、upload | $primaryHoverColor、#0082ff |
| #DFE0E5 | 5 | table | $tableBorderColor |
| #30D878 | 4 | loading、timeline | #30d878 |
| #999999 | 4 | timeline、version-detail | #999 |
| #DDE4EB | 4 | dropdown-menu、transfer | $scrollbarColor、$borderInlineColor |
| #E6E9EA | 4 | diff、search-select、transfer | #e6e9ea |
| #FFB400 | 4 | loading、timeline | #ffb400 |
| #39424E | 3 | loading | #39424e |
| #40C024 | 3 | timeline | #40c024 |
| #45E35F | 3 | button | $newGreenColor1 |
| #94F5A4 | 3 | alert、link、message | #94f5a4、$successDisabledColor、$newGreenColor2 |
| #96A2B9 | 3 | navigation | #96A2B9 |
| #C0C4CC | 3 | table、tree | $tableCaretColor、#c0c4cc |
| #EA3536 | 3 | color-picker、tag | #ea3536、$danger-color |
| #ECF5FF | 3 | table | $tableCurrentRowBackground |
| #EEEEEE | 3 | switcher | #eee |
| #F0F8FF | 3 | alert、message | #f0f8ff、$newMainColor5 |
| rgba(121, 121, 121, 0.4) | 3 | virtual-scroll | rgba(121, 121, 121, 0.4) |
| rgba(234, 243, 255, 0.7) | 3 | search-select-menu | rgba(234, 243, 255, 0.7) |
| #14A568 | 2 | tag | $success-color |
| #26323D | 2 | popover | #26323d |
| #44E360 | 2 | link | $successHoverColor |
| #66748F | 2 | navigation-menu-group | #66748F、#66748f |
| #8F3AFF | 2 | diff | #8f3aff |
| #C5C7D1 | 2 | star、swiper | #c5c7d1 |
| #F0F2F5 | 2 | card | #f0f2f5 |
| #F2FFF4 | 2 | alert、message | #f2fff4 |
| #FD9C9C | 2 | link、message | $dangerDisabledColor、$newRedColor2 |
| #FE5657 | 2 | link | $dangerHoverColor |
| #FE9C00 | 2 | tag | $warning-color |
| #FF0000 | 2 | color-picker | red |
| #FFB849 | 2 | link | $warningHoverColor |
| #FFD695 | 2 | link、message | $warningDisabledColor、$newOrangeColor2 |
| #FFE8C3 | 2 | dialog、message | $newOrangeColor3 |
| #FFEDED | 2 | alert、message | #ffeded、$newRedColor5 |
| #FFF4E2 | 2 | alert、message | #fff4e2、$newOrangeColor5 |
| rgba(0, 0, 0, 0.4) | 2 | image-viewer | rgba(0, 0, 0, .4)、$newBlackColor4 |
| rgba(255, 255, 255, 0.05) | 2 | navigation、navigation-menu-item | rgba(255, 255, 255, 0.05) |
| rgba(255, 255, 255, 0.06) | 2 | navigation-menu-item | rgba(255, 255, 255, 0.06) |
| rgba(255, 255, 255, 0.9) | 2 | loading | rgba(255, 255, 255, 0.9) |
| #000000 | 1 | color-picker | #000 |
| #0000FF | 1 | color-picker | #00f |
| #00C873 | 1 | button | $successHoverColor |
| #00FF00 | 1 | color-picker | #0f0 |
| #00FFFF | 1 | color-picker | #0ff |
| #144212 | 1 | diff | #144212 |
| #14A568 / 10% | 1 | tag | color($success-color a(10%)) |
| #14A568 / 30% | 1 | tag | color($success-color a(30%)) |
| #1BB943 | 1 | link | #1bb943 |
| #1D1D1D | 1 | diff | #1d1d1d |
| #212121 | 1 | diff | #212121 |
| #253047 | 1 | navigation | rgba(37, 48, 71, 1) |
| #263247 | 1 | navigation | rgba(38, 50, 71, 1) |
| #292929 | 1 | diff | #292929 |
| #2D3324 | 1 | diff | #2d3324 |
| #2D8CF0 | 1 | date-picker | #2d8cf0 |
| #2DCB9D | 1 | message | #2dcb9d |
| #34383E | 1 | version-detail | #34383e |
| #3785FF | 1 | table | #3785FF |
| #3A3C42 | 1 | navigation | #3A3C42 |
| #3A84FF / 10% | 1 | tag | color($info-color a(10%)) |
| #3A84FF / 30% | 1 | tag | color($info-color a(30%)) |
| #3F4046 | 1 | pagination | #3f4046 |
| #3FC06D | 1 | dialog | #3fc06d |
| #422321 | 1 | diff | #422321 |
| #4CD084 | 1 | loading | #4cd084 |
| #4EC9B0 | 1 | diff | #4ec9b0 |
| #569CD6 | 1 | diff | #569cd6 |
| #575961 | 1 | table | #575961 |
| #57A3F1 | 1 | loading | #57a3f1 |
| #608B4E | 1 | diff | #608b4e |
| #660000 | 1 | diff | #600 |
| #666666 | 1 | timeline | #666 |
| #7AB9FA | 1 | button | $infoHoverColor |
| #8F8F89 | 1 | diff | #8f8f89 |
| #8F929B | 1 | navigation-menu-item | #8f929b |
| #979BA5 / 10% | 1 | tag | color($default-color a(10%)) |
| #979BA5 / 15% | 1 | tag | color($default-color a(15%)) |
| #989DAB | 1 | pagination | #989dab |
| #9A5334 | 1 | diff | #9a5334 |
| #9B9B9B | 1 | diff | #9b9b9b |
| #9FA3AE | 1 | message | #9FA3AE |
| #A0A0A0 | 1 | virtual-render | #a0a0a0 |
| #B8D7A3 | 1 | diff | #b8d7a3 |
| #BD63C5 | 1 | diff | #bd63c5 |
| #C5DAFF | 1 | alert | #c5daff |
| #D3D9E4 | 1 | navigation | #D3D9E4 |
| #DA2726 | 1 | link | #da2726 |
| #DCDEE5 / 60% | 1 | tag | color($border-color a(60%)) |
| #DCFFE2 | 1 | message | $newGreenColor3 |
| #DD1144 | 1 | version-detail | #d14 |
| #DDDDDD | 1 | version-detail | #ddd |
| #DDFFDD | 1 | diff | #dfd |
| #DEE0EA | 1 | navigation | rgba(222, 224, 234, 1) |
| #DFDFDF | 1 | version-detail | #dfdfdf |
| #E1E1E8 | 1 | version-detail | #e1e1e8 |
| #E5F6EA | 1 | dialog | #e5f6ea |
| #E6E6E6 | 1 | button | #e6e6e6 |
| #E8EAEC | 1 | time-picker | #e8eaec |
| #EA3536 / 10% | 1 | tag | color($danger-color a(10%)) |
| #EA3536 / 30% | 1 | tag | color($danger-color a(30%)) |
| #EAECF2 | 1 | navigation | rgba(234, 236, 242, 1) |
| #EEF6FE | 1 | transfer | #eef6fe |
| #F1F7FF | 1 | big-tree | #f1f7ff |
| #F2F4F8 | 1 | input | #f2f4f8 |
| #F6F6F6 | 1 | version-detail | #f6f6f6 |
| #F72239 | 1 | button | $dangerHoverColor |
| #F7F7F7 | 1 | date-picker | #f7f7f7 |
| #FAF9FD | 1 | button | #faf9fd |
| #FD6154 | 1 | loading | #fd6154 |
| #FE9C00 / 10% | 1 | tag | color($warning-color a(10%)) |
| #FE9C00 / 30% | 1 | tag | color($warning-color a(30%)) |
| #FF00FF | 1 | color-picker | #f0f |
| #FF4D51 | 1 | table | #ff4d51 |
| #FF9600 | 1 | button | $warningHoverColor |
| #FFB726 | 1 | loading | #ffb726 |
| #FFD2D2 | 1 | alert | #ffd2d2 |
| #FFDFAC | 1 | alert | #ffdfac |
| #FFF4F4 | 1 | form | #fff4f4 |
| #FFFF00 | 1 | color-picker | #ff0 |
| darken(#63656E, 10%) | 1 | button | darken($fnMainColor, 10%) |
| rgba(0, 0, 0, 0.1) | 1 | version-detail | rgba(0, 0, 0, .1) |
| rgba(0, 0, 0, 0.15) | 1 | version-detail | rgba(0,0,0,0.15) |
| rgba(0, 0, 0, 0.3) | 1 | image-viewer | rgba(0, 0, 0, .3) |
| rgba(0, 0, 0, 0.5) | 1 | image-viewer | rgba(0,0,0,.5) |
| rgba(0, 0, 0, 0.7) | 1 | image-viewer | rgba(0,0,0,0.70) |
| rgba(0, 0, 0, 0.8) | 1 | popover | rgba(0, 0, 0, .8) |
| rgba(121, 121, 121, 0.5) | 1 | virtual-scroll | rgba(121, 121, 121, 0.5) |
| rgba(121, 121, 121, 0.55) | 1 | virtual-scroll | rgba(121, 121, 121, 0.55) |
| rgba(186, 188, 192, 0.2) | 1 | message | rgba(186, 188, 192, 0.2) |
| rgba(254, 221, 220, 0.4) | 1 | upload | rgba(254, 221, 220, 0.4) |
| rgba(31, 45, 61, 0.4) | 1 | swiper | rgba(31,45,61,.4) |
| rgba(31, 45, 61, 0.6) | 1 | swiper | rgba(31,45,61,.6) |

## 阴影里的颜色

不同色值 22 个。

| 色值 | 出现次数 | 组件 | 当前写法 |
| --- | --- | --- | --- |
| rgba(0, 0, 0, 0.1) | 8 | back-top、cascade、date-picker、fixed-navbar、search-select-menu、select、tag-input | rgba(0,0,0,0.10)、rgba(0,0,0,.1)、rgba(0, 0, 0, 0.1)、rgba(0, 0, 0, .1) |
| rgba(0, 0, 0, 0.15) | 4 | color-picker、dialog、notify | rgba(0, 0, 0, .15)、rgba(0, 0, 0, 0.15)、rgba(0,0,0,0.15) |
| rgba(0, 0, 0, 0.2) | 4 | card、sideslider、tab | rgba(0,0,0,0.2)、rgba(0, 0, 0, 0.2)、rgba(0, 0, 0, .2) |
| rgba(58, 132, 255, 0.4) | 4 | cascade、pagination、select | rgba(58, 132, 255, 0.4) |
| #0000001A | 2 | message | #0000001a |
| #3C96FF | 2 | radio、radio-button | $formBorderFocusColor |
| rgba(204, 204, 204, 0.3) | 2 | search-select、version-detail | rgba(204, 204, 204, 0.3) |
| #2DCB56 | 1 | switcher | $newGreenColor |
| rgba(0, 0, 0, 0.3) | 1 | color-picker | rgba(0, 0, 0, 0.3) |
| rgba(0, 0, 0, 0.4) | 1 | color-picker | rgba(0, 0, 0, 0.4) |
| rgba(0, 0, 0, 0.6) | 1 | color-picker | rgba(0, 0, 0, .6) |
| rgba(16, 37, 74, 0.1) | 1 | message | rgba(16, 37, 74, 0.1) |
| rgba(16, 68, 29, 0.1) | 1 | message | rgba(16, 68, 29, 0.1) |
| rgba(45, 140, 240, 0.2) | 1 | color-picker | rgba(45, 140, 240, .2) |
| rgba(45, 140, 240, 0.5) | 1 | color-picker | rgba(45, 140, 240, .5) |
| rgba(51, 60, 72, 0.1) | 1 | dropdown-menu | rgba(51, 60, 72, 0.1) |
| rgba(58, 132, 255, 0.3) | 1 | slider | rgba(58, 132, 255, 0.30) |
| rgba(58, 132, 255, 0.9) | 1 | slider | rgba(58, 132, 255, 0.9) |
| rgba(64, 112, 203, 0.06) | 1 | navigation | rgba(64, 112, 203, 0.06) |
| rgba(75, 51, 13, 0.1) | 1 | message | rgba(75, 51, 13, 0.1) |
| rgba(86, 34, 34, 0.1) | 1 | message | rgba(86, 34, 34, 0.1) |
| rgba(99, 83, 83, 0.2) | 1 | card | rgba(99, 83, 83, 0.2) |

## 模板 / 脚本里的颜色

不同色值 9 个。

| 色值 | 出现次数 | 组件 | 当前写法 |
| --- | --- | --- | --- |
| #D3D9E4 | 6 | navigation | #D3D9E4 |
| #182132 | 5 | navigation | #182132 |
| #63656E | 4 | navigation | #63656E |
| #151D2C | 2 | navigation | #151D2C |
| #3A3C42 | 2 | navigation | #3A3C42 |
| #3E4655 | 2 | navigation | #3E4655 |
| #ACB9D1 | 2 | navigation | #ACB9D1 |
| #B0BDD5 | 1 | navigation | #B0BDD5 |
| #DFE0E5 | 1 | table | #DFE0E5 |

# 按组件

## alert 警告提示

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | #63656e | color | .bk-alert |
| #94F5A4 | 1 | 样式 | #94f5a4 | border-color | .bk-alert-success |
| #F2FFF4 | 1 | 样式 | #f2fff4 | background-color | .bk-alert-success |
| #2DCB56 | 1 | 样式 | #2dcb56 | color | .bk-alert-success.icon-info |
| #C5DAFF | 1 | 样式 | #c5daff | border-color | .bk-alert-info |
| #F0F8FF | 1 | 样式 | #f0f8ff | background-color | .bk-alert-info |
| #FFDFAC | 1 | 样式 | #ffdfac | border-color | .bk-alert-warning |
| #FFF4E2 | 1 | 样式 | #fff4e2 | background-color | .bk-alert-warning |
| #FF9C01 | 1 | 样式 | #ff9c01 | color | .bk-alert-warning.icon-info |
| #FFD2D2 | 1 | 样式 | #ffd2d2 | border-color | .bk-alert-error |
| #FFEDED | 1 | 样式 | #ffeded | background-color | .bk-alert-error |

## back-top 回到顶部

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0,0,0,0.10) | box-shadow | .bk-back-to-top |

## badge 徽标

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #FF9C01 | 2 | 样式 | $newOrangeColor | border-color | .done.bk-step-number.bk-step-icon、.bk-step-number.bk-step-icon.bk-step-text |
| #FF9C01 | 2 | 样式 | $newOrangeColor | color | .done.bk-step-number.bk-step-icon、.bk-badge.bk-warning.is-icon |
| #FF9C01 | 2 | 样式 | $newOrangeColor | background-image | .done.bk-step-title.bk-step-indicator、.bk-warning.bk-step.done |
| #2DCB56 | 2 | 样式 | $newGreenColor | border-color | .done.bk-step-number.bk-step-icon、.bk-step-number.bk-step-icon.bk-step-text |
| #2DCB56 | 2 | 样式 | $newGreenColor | color | .done.bk-step-number.bk-step-icon、.bk-badge.bk-success.is-icon |
| #2DCB56 | 2 | 样式 | $newGreenColor | background-image | .done.bk-step-title.bk-step-indicator、.bk-success.bk-step.done |
| #C3CDD7 | 1 | 样式 | $borderColor | border | .bk-badge-wrapper.bk-badge |
| #FF9C01 | 1 | 样式 | $newOrangeColor | background-color | .bk-step-number.bk-step-icon.bk-step-text |
| #2DCB56 | 1 | 样式 | $newGreenColor | background-color | .bk-step-number.bk-step-icon.bk-step-text |

## big-tree 大树

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | #63656e | color | .bk-big-tree.bk-big-tree-empty、.bk-big-tree-node.node-options.node-folder-icon:hover |
| #C3CDD7 | 1 | 样式 | #c3cdd7 | border-bottom | .bk-big-tree-node.has-link-line.is-root |
| #C3CDD7 | 1 | 样式 | #c3cdd7 | border-left | .bk-big-tree-node.has-link-line |
| #F1F7FF | 1 | 样式 | #f1f7ff | background-color | .bk-big-tree-node:hover |

## breadcrumb 面包屑

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #0082FF | 2 | 样式 | $primaryHoverColor | color | .bk-breadcrumb.is-link:hover、.bk-breadcrumb |
| #63656E | 1 | 样式 | $fnMainColor | color | .bk-breadcrumb.is-link |

## button 按钮

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 9 | 样式 | $newBlackColor2 | color | .bk-button、.bk-button.bk-default.hover:hover |
| #2DCB56 | 8 | 样式 | $newGreenColor | border-color | .bk-button.bk-success、.bk-success.is-loading.hover:hover |
| #FF9C01 | 8 | 样式 | $newOrangeColor | border-color | .bk-button.bk-warning、.bk-warning.is-loading.hover:hover |
| #2DCB56 | 6 | 样式 | $newGreenColor | background-color | .bk-success.is-loading.hover:hover、.bk-success.is-loading.active:active |
| #FF9C01 | 6 | 样式 | $newOrangeColor | background-color | .bk-warning.is-loading.hover:hover、.bk-warning.is-loading.active:active |
| #2761DD | 4 | 样式 | $newMainColor4 | background-color | .bk-button.bk-primary.active:active、.bk-primary.is-outline.active:active |
| #2761DD | 4 | 样式 | $newMainColor4 | border-color | .bk-button.bk-primary.active:active、.bk-primary.is-outline.active:active |
| #1AB943 | 4 | 样式 | $newGreenColor4 | background-color | .bk-button.bk-success.active:active、.bk-success.is-outline.active:active |
| #1AB943 | 4 | 样式 | $newGreenColor4 | border-color | .bk-button.bk-success.active:active、.bk-success.is-outline.active:active |
| #2DCB56 | 4 | 样式 | $newGreenColor | color | .bk-button.bk-success.is-outline、.bk-button-text.bk-success |
| #EB9000 | 4 | 样式 | $newOrangeColor4 | background-color | .bk-button.bk-warning.active:active、.bk-warning.is-outline.active:active |
| #EB9000 | 4 | 样式 | $newOrangeColor4 | border-color | .bk-button.bk-warning.active:active、.bk-warning.is-outline.active:active |
| #FF9C01 | 4 | 样式 | $newOrangeColor | color | .bk-button.bk-warning.is-outline、.bk-button-text.bk-warning |
| #DB2626 | 4 | 样式 | $newRedColor4 | background-color | .bk-button.bk-danger.active:active、.bk-danger.is-outline.active:active |
| #DB2626 | 4 | 样式 | $newRedColor4 | border-color | .bk-button.bk-danger.active:active、.bk-danger.is-outline.active:active |
| #63656E | 3 | 样式 | $newBlackColor2 | background-color | .bk-button.bk-default.bk-button-loading、.bk-button-text.bk-default.bk-button-loading |
| #0082FF | 2 | 样式 | $primaryHoverColor | color | .bk-text-button:hover、.bk-text-button.bk-primary:hover |
| #FAF9FD | 1 | 样式 | #faf9fd | background-color | .bk-button.bk-default.is-disabled |
| #2DCB56 | 1 | 样式 | $newGreenColor | background | .bk-button.bk-success |
| #45E35F | 1 | 样式 | $newGreenColor1 | background-color | .bk-button.bk-success.hover:hover |
| #45E35F | 1 | 样式 | $newGreenColor1 | border-color | .bk-button.bk-success.hover:hover |
| #FF9C01 | 1 | 样式 | $newOrangeColor | background | .bk-button.bk-warning |
| #FFB848 | 1 | 样式 | $newOrangeColor1 | background-color | .bk-button.bk-warning.hover:hover |
| #FFB848 | 1 | 样式 | $newOrangeColor1 | border-color | .bk-button.bk-warning.hover:hover |
| #2761DD | 1 | 样式 | $newMainColor4 | color | .bk-button-text.bk-primary.active:active |
| #45E35F | 1 | 样式 | $newGreenColor1 | color | .bk-button-text.bk-success.hover:hover |
| #1AB943 | 1 | 样式 | $newGreenColor4 | color | .bk-button-text.bk-success.active:active |
| #FFB848 | 1 | 样式 | $newOrangeColor1 | color | .bk-button-text.bk-warning.hover:hover |
| #EB9000 | 1 | 样式 | $newOrangeColor4 | color | .bk-button-text.bk-warning.active:active |
| #DB2626 | 1 | 样式 | $newRedColor4 | color | .bk-button-text.bk-danger.active:active |
| #E6E6E6 | 1 | 样式 | #e6e6e6 | color | .bk-text-button.is-disabled |
| #63656E | 1 | 样式 | $fnMainColor | color | .bk-text-button.bk-default |
| darken(#63656E, 10%) | 1 | 样式 | darken($fnMainColor, 10%) | color | .bk-text-button.bk-default:hover |
| #7AB9FA | 1 | 样式 | $infoHoverColor | color | .bk-text-button.bk-info:hover |
| #00C873 | 1 | 样式 | $successHoverColor | color | .bk-text-button.bk-success:hover |
| #FF9600 | 1 | 样式 | $warningHoverColor | color | .bk-text-button.bk-warning:hover |
| #F72239 | 1 | 样式 | $dangerHoverColor | color | .bk-text-button.bk-danger:hover |

## card 卡片

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #F0F2F5 | 1 | 样式 | #f0f2f5 | border-bottom | .bk-card.collapse |
| #F0F2F5 | 1 | 样式 | #f0f2f5 | border-top | .bk-card-foot |
| rgba(0, 0, 0, 0.2) | 1 | 阴影 | rgba(0,0,0,0.2) | box-shadow | .bk-card-border-none |
| rgba(99, 83, 83, 0.2) | 1 | 阴影 | rgba(99, 83, 83, 0.2) | box-shadow | .bk-card:hover |

## cascade 级联选择

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 3 | 样式 | $fnMainColor | color | .bk-cascade-dropdown-content、.bk-cascade-tag-list.bk-cascade-tag-item.remove-key:hover |
| #C3CDD7 | 2 | 样式 | $fnMinorColor | color | .bk-cascade.is-default-trigger.is-unselected、.bk-cascade-search-input |
| #FAFAFA | 2 | 样式 | #fafafa | background-color | .bk-cascade.is-disabled、.bk-cascade.is-readonly.is-loading |
| #EAF3FF | 2 | 样式 | $hoverBackground | background-color | .bk-options-single.bk-option.is-highlight:hover、.bk-cascade-options.bk-option.is-highlight:hover |
| #F4F6FA | 2 | 样式 | $selectedBackground | background-color | .bk-options-single.bk-option.is-selected、.bk-cascade-options.bk-option.is-selected |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-cascade |
| #63656E | 1 | 样式 | #63656E | color | .bk-option-none |
| rgba(58, 132, 255, 0.4) | 2 | 阴影 | rgba(58, 132, 255, 0.4) | box-shadow | .bk-cascade.is-focus、.bk-cascade:focus |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0,0,0,.1) | box-shadow | .tippy-tooltip.bk-cascade-dropdown-theme |

## checkbox 复选框

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #3C96FF | 1 | 样式 | $formBorderFocusColor | border-color | .bk-form-checkbox.bk-checkbox:focus |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-form-checkbox.bk-checkbox-text |

## collapse 折叠面板

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | $fnMainColor | color | .bk-collapse、.bk-collapse.bk-collapse-content |

## color-picker 颜色选择器

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 3 | 样式 | $newBlackColor2 | color | .bk-color-picker、.bk-color-picker.bk-color-picker-text |
| #FF0000 | 2 | 样式 | red | background | .bk-color-picker-hue |
| #000000 | 1 | 样式 | #000 | background | .bk-color-picker-saturation.bk-color-picker-saturation-black |
| #FFFF00 | 1 | 样式 | #ff0 | background | .bk-color-picker-hue |
| #00FF00 | 1 | 样式 | #0f0 | background | .bk-color-picker-hue |
| #00FFFF | 1 | 样式 | #0ff | background | .bk-color-picker-hue |
| #0000FF | 1 | 样式 | #00f | background | .bk-color-picker-hue |
| #FF00FF | 1 | 样式 | #f0f | background | .bk-color-picker-hue |
| #EA3536 | 1 | 样式 | #ea3536 | background | .bk-color-picker-empty |
| rgba(0, 0, 0, 0.15) | 2 | 阴影 | rgba(0, 0, 0, .15) | box-shadow | .bk-color-picker.bk-color-picker-color.bk-color-picker-color-square、.bk-color-picker-recommend-container.bk-color-picker-recommend.bk-color-picker-recommend-color |
| rgba(45, 140, 240, 0.2) | 1 | 阴影 | rgba(45, 140, 240, .2) | box-shadow | .bk-color-picker.bk-color-picker-show-dropdown |
| rgba(0, 0, 0, 0.6) | 1 | 阴影 | rgba(0, 0, 0, .6) | box-shadow | .bk-color-picker-hue.bk-color-picker-hue-pointer.bk-color-picker-hue-rectangle |
| rgba(45, 140, 240, 0.5) | 1 | 阴影 | rgba(45, 140, 240, .5) | box-shadow | .bk-color-picker-saturation.bk-color-picker-hue.bk-color-picker-recommend:focus |
| rgba(0, 0, 0, 0.3) | 1 | 阴影 | rgba(0, 0, 0, 0.3) | box-shadow | .bk-color-picker-pointer.bk-color-picker-circle |
| rgba(0, 0, 0, 0.4) | 1 | 阴影 | rgba(0, 0, 0, 0.4) | box-shadow | .bk-color-picker-pointer.bk-color-picker-circle |

## common 公共样式

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #FF9C01 | 1 | 样式 | $newOrangeColor | background-color | .bk-bg-warning |
| #2DCB56 | 1 | 样式 | $newGreenColor | background-color | .bk-bg-success |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-text-default |
| #FF9C01 | 1 | 样式 | $newOrangeColor | color | .bk-text-warning |
| #2DCB56 | 1 | 样式 | $newGreenColor | color | .bk-text-success |

## date-picker 日期选择

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 4 | 样式 | $newBlackColor2 | color | .bk-date-picker-rel.bk-date-picker-editor、.bk-date-picker-cells |
| #F7F7F7 | 1 | 样式 | #f7f7f7 | color | .bk-date-picker-cells-cell-disabled.bk-date-picker-cells-cell-selected |
| #2D8CF0 | 1 | 样式 | #2d8cf0 | color | .bk-picker-panel-icon-btn:hover |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0, 0, 0, 0.1) | box-shadow | .bk-date-picker-dropdown |

## dialog 对话框

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 4 | 样式 | $newBlackColor2 | color | .bk-dialog-wrapper.bk-dialog-body、.bk-info-box.bk-dialog-sub-header.bk-dialog-header-inner |
| rgba(0, 0, 0, 0.6) | 3 | 样式 | rgba(0, 0, 0, 0.6) | background-color | .bk-dialog-mask、@keyframes mask-fading 100% |
| #FFE8C3 | 1 | 样式 | $newOrangeColor3 | background-color | .bk-info-box.bk-dialog-mark.bk-dialog-warning |
| #FF9C01 | 1 | 样式 | $newOrangeColor | color | .bk-info-box.bk-dialog-mark.bk-dialog-warning |
| #E5F6EA | 1 | 样式 | #e5f6ea | background-color | .bk-info-box.bk-dialog-mark.bk-dialog-success |
| #3FC06D | 1 | 样式 | #3fc06d | color | .bk-info-box.bk-dialog-mark.bk-dialog-success |
| rgba(0, 0, 0, 0.15) | 1 | 阴影 | rgba(0, 0, 0, 0.15) | box-shadow | .bk-dialog-wrapper.bk-dialog-content |

## diff 差异对比

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #E6E9EA | 2 | 样式 | #e6e9ea | background-color | .bk-diff.d2h-file-diff、.bk-diff.d2h-file-side-diff |
| #8F3AFF | 2 | 样式 | #8f3aff | color | .dark.hljs-string.hljs-meta-string、.hljs-function.hljs-title.hljs-formula |
| #1D1D1D | 1 | 样式 | #1d1d1d | background | .bk-diff.dark.d2h-diff-table |
| #8F8F89 | 1 | 样式 | #8f8f89 | color | .dark.d2h-code-linenumber.d2h-code-side-linenumber |
| #212121 | 1 | 样式 | #212121 | background | .dark.d2h-code-linenumber.d2h-code-side-linenumber |
| #DDFFDD | 1 | 样式 | #dfd | background-color | .d2h-code-linenumber.d2h-code-side-linenumber.d2h-change |
| #422321 | 1 | 样式 | #422321 | background-color | .bk-diff.dark.d2h-del |
| #2D3324 | 1 | 样式 | #2d3324 | background-color | .bk-diff.dark.d2h-ins |
| #292929 | 1 | 样式 | #292929 | background-color | .bk-diff.dark.d2h-emptyplaceholder |
| #569CD6 | 1 | 样式 | #569cd6 | color | .bk-diff.dark.hljs-link |
| #4EC9B0 | 1 | 样式 | #4ec9b0 | color | .dark.hljs-built_in.hljs-type |
| #B8D7A3 | 1 | 样式 | #b8d7a3 | color | .dark.hljs-number.hljs-class |
| #9A5334 | 1 | 样式 | #9a5334 | color | .dark.hljs-regexp.hljs-template-tag |
| #63656E | 1 | 样式 | #63656e | color | .dark.hljs-comment.hljs-quote |
| #608B4E | 1 | 样式 | #608b4e | color | .bk-diff.dark.hljs-doctag |
| #9B9B9B | 1 | 样式 | #9b9b9b | color | .hljs-meta.hljs-meta-keyword.hljs-tag |
| #BD63C5 | 1 | 样式 | #bd63c5 | color | .dark.hljs-variable.hljs-template-variable |
| #FF9C01 | 1 | 样式 | #ff9c01 | color | .hljs-attr.hljs-attribute.hljs-builtin-name |
| #144212 | 1 | 样式 | #144212 | background-color | .bk-diff.dark.hljs-addition |
| #660000 | 1 | 样式 | #600 | background-color | .bk-diff.dark.hljs-deletion |

## dropdown-menu 下拉菜单

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #FAFAFA | 1 | 样式 | #fafafa | background-color | .bk-dropdown-menu.disabled.disabled |
| #DDE4EB | 1 | 样式 | $scrollbarColor | background | .bk-dropdown-menu.bk-dropdown-list |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-dropdown-menu.bk-dropdown-list |
| rgba(51, 60, 72, 0.1) | 1 | 阴影 | rgba(51, 60, 72, 0.1) | box-shadow | .bk-dropdown-menu.bk-dropdown-content |

## exception 异常页

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | #63656E | color | .bk-exception |

## fixed-navbar 固定导航

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0,0,0,0.10) | box-shadow | .bk-fixed-navbar-wrapper |

## form 表单

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | $fnMainColor | color | .bk-form.bk-form-content.bk-tip-text、.bk-form-tip.bk-tip-text |
| #FAFAFA | 2 | 样式 | #fafafa | background-color | .bk-form-item.is-readonly、.bk-form-item.is-disabled |
| #63656E | 1 | 样式 | #63656E | color | .bk-form.bk-label |
| #C3CDD7 | 1 | 样式 | $fnMinorColor | color | .bk-form |
| #FFB848 | 1 | 样式 | $warningColor | border-color | .bk-form-item.is-warning |
| #2DCB56 | 1 | 样式 | $successColor | border-color | .bk-form-item.is-success |
| #2DCB56 | 1 | 样式 | $successColor | color | .is-success.bk-form-tip.bk-tip-text |
| #FFF4F4 | 1 | 样式 | #fff4f4 | background-color | .is-danger.is-danger.is-danger |

## image-viewer 图片预览

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(0, 0, 0, 0.6) | 1 | 样式 | rgba(0, 0, 0, .6) | background | .bk-image-viewer |
| rgba(0, 0, 0, 0.7) | 1 | 样式 | rgba(0,0,0,0.70) | background | .bk-image-viewer |
| rgba(0, 0, 0, 0.3) | 1 | 样式 | rgba(0, 0, 0, .3) | background-color | .bk-image-viewer |
| rgba(0, 0, 0, 0.4) | 1 | 样式 | rgba(0, 0, 0, .4) | background-color | .bk-image-viewer:hover |
| rgba(0, 0, 0, 0.4) | 1 | 样式 | $newBlackColor4 | background-color | .bk-image-viewer |
| rgba(0, 0, 0, 0.5) | 1 | 样式 | rgba(0,0,0,.5) | background | .bk-image-viewer:hover |

## input 输入框

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 4 | 样式 | $newBlackColor2 | color | .bk-form-control、.bk-form-control.bk-limit-box.strong |
| #F2F4F8 | 1 | 样式 | #f2f4f8 | background-color | .bk-form-control.control-prepend-group |
| #3C96FF | 1 | 样式 | $primaryColor | color | .bk-form-control.input-right-icon:hover |
| #F4F6FA | 1 | 样式 | rgba(244, 246, 250, 1) | background | .bk-input-number.input-number-option.number-option-item:hover |

## link 链接

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #44E360 | 2 | 样式 | $successHoverColor | color | .bk-link.is-success:hover、.bk-link.is-success |
| #FFB849 | 2 | 样式 | $warningHoverColor | color | .bk-link.is-warning:hover、.bk-link.is-warning |
| #FE5657 | 2 | 样式 | $dangerHoverColor | color | .bk-link.is-danger:hover、.bk-link.is-danger |
| #63656E | 1 | 样式 | $defaultColor | color | .bk-link.is-default |
| #2DCB56 | 1 | 样式 | $successColor | color | .bk-link.is-success |
| #1BB943 | 1 | 样式 | #1bb943 | color | .bk-link.is-success:active |
| #94F5A4 | 1 | 样式 | $successDisabledColor | color | .bk-link.is-success.is-disabled |
| #FF9C01 | 1 | 样式 | $warningColor | color | .bk-link.is-warning |
| #EB9000 | 1 | 样式 | #eb9000 | color | .bk-link.is-warning:active |
| #FFD695 | 1 | 样式 | $warningDisabledColor | color | .bk-link.is-warning.is-disabled |
| #DA2726 | 1 | 样式 | #da2726 | color | .bk-link.is-danger:active |
| #FD9C9C | 1 | 样式 | $dangerDisabledColor | color | .bk-link.is-danger.is-disabled |

## loading 加载

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #39424E | 3 | 样式 | #39424e | background-color | @keyframes fade 0%、@-webkit-keyframes fade 0% |
| rgba(255, 255, 255, 0.9) | 2 | 样式 | rgba(255, 255, 255, 0.9) | background-color | .bk-loading、.bk-loading-box.bk-loading |
| #63656E | 2 | 样式 | $fnMainColor | color | .bk-loading、.bk-loading-box.bk-loading |
| #2DCB56 | 2 | 样式 | $successColor | background-color | @keyframes fadeSuccess 0%、@-webkit-keyframes fadeSuccess 0% |
| #3C96FF | 2 | 样式 | $primaryColor | background-color | @keyframes fadePrimary 0%、@-webkit-keyframes fadePrimary 0% |
| #FFB848 | 2 | 样式 | $warningColor | background-color | @keyframes fadeWarning 0%、@-webkit-keyframes fadeWarning 0% |
| #FD6154 | 1 | 样式 | #fd6154 | background-color | .bk-loading.bk-loading1.point1 |
| #FFB726 | 1 | 样式 | #ffb726 | background-color | .bk-loading.bk-loading1.point2 |
| #4CD084 | 1 | 样式 | #4cd084 | background-color | .bk-loading.bk-loading1.point3 |
| #57A3F1 | 1 | 样式 | #57a3f1 | background-color | .bk-loading.bk-loading1.point4 |
| #3C96FF | 1 | 样式 | $primaryColor | background | .point2.point3.point4 |
| #FFB848 | 1 | 样式 | $warningColor | background | .point2.point3.point4 |
| #30D878 | 1 | 样式 | #30d878 | background-color | @keyframes fadeSuccess 0% |
| #3C96FF | 1 | 样式 | #3c96ff | background-color | @keyframes fadePrimary 0% |
| #FFB400 | 1 | 样式 | #ffb400 | background-color | @keyframes fadeWarning 0% |

## message 消息提示

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #F0F8FF | 2 | 样式 | $newMainColor5 | background | .bk-message、.bk-message-primary |
| #63656E | 2 | 样式 | #63656e | color | .message-detail.message-tree.message-row、.message-detail.copy-status.inner |
| #FFEDED | 1 | 样式 | $newRedColor5 | background | .bk-message-error |
| #FD9C9C | 1 | 样式 | $newRedColor2 | color | .bk-message-error.bk-message-close.icon-close |
| #FFF4E2 | 1 | 样式 | $newOrangeColor5 | background | .bk-message-warning |
| #FFE8C3 | 1 | 样式 | $newOrangeColor3 | border-color | .bk-message-warning |
| #FF9C01 | 1 | 样式 | $newOrangeColor | color | .bk-message-warning.bk-message-icon.bk-icon |
| #FFD695 | 1 | 样式 | $newOrangeColor2 | color | .bk-message-warning.bk-message-close.icon-close |
| #F2FFF4 | 1 | 样式 | #f2fff4 | background | .bk-message-success |
| #DCFFE2 | 1 | 样式 | $newGreenColor3 | border-color | .bk-message-success |
| #2DCB56 | 1 | 样式 | $newGreenColor | color | .bk-message-success.bk-message-icon.bk-icon |
| #94F5A4 | 1 | 样式 | $newGreenColor2 | color | .bk-message-success.bk-message-close.icon-close |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-message-content |
| rgba(186, 188, 192, 0.2) | 1 | 样式 | rgba(186, 188, 192, 0.2) | background | .message-tree.message-row.copy-value:hover |
| #9FA3AE | 1 | 样式 | #9FA3AE | color | .multi.message-detail.message-copy |
| #2DCB9D | 1 | 样式 | #2dcb9d | color | .copy-status.success.inner |
| #0000001A | 2 | 阴影 | #0000001a | box-shadow | .message-detail.copy-status.inner |
| rgba(16, 37, 74, 0.1) | 1 | 阴影 | rgba(16, 37, 74, 0.1) | box-shadow | .bk-message |
| rgba(86, 34, 34, 0.1) | 1 | 阴影 | rgba(86, 34, 34, 0.1) | box-shadow | .bk-message-error |
| rgba(75, 51, 13, 0.1) | 1 | 阴影 | rgba(75, 51, 13, 0.1) | box-shadow | .bk-message-warning |
| rgba(16, 68, 29, 0.1) | 1 | 阴影 | rgba(16, 68, 29, 0.1) | box-shadow | .bk-message-success |

## navigation 导航

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #96A2B9 | 3 | 样式 | #96A2B9 | color | .bk-navigation.title-icon、.bk-navigation.title-desc |
| rgba(255, 255, 255, 0.05) | 1 | 样式 | rgba(255, 255, 255, 0.05) | border-bottom | .bk-navigation |
| #63656E | 1 | 样式 | #63656E | color | .navigation-nav.nav-slider.footer-icon |
| #253047 | 1 | 样式 | rgba(37, 48, 71, 1) | background | .nav-slider.footer-icon.is-left:hover |
| #263247 | 1 | 样式 | rgba(38, 50, 71, 1) | background | .nav-slider.footer-icon.is-left:hover |
| #D3D9E4 | 1 | 样式 | #D3D9E4 | color | .nav-slider.footer-icon.is-left:hover |
| #DEE0EA | 1 | 样式 | rgba(222, 224, 234, 1) | background | .navigation-nav.nav-slider.footer-icon:hover |
| #EAECF2 | 1 | 样式 | rgba(234, 236, 242, 1) | background | .navigation-nav.nav-slider.footer-icon:hover |
| #3A3C42 | 1 | 样式 | #3A3C42 | color | .navigation-nav.nav-slider.footer-icon:hover |
| #D3D9E4 | 6 | 模板/脚本 | #D3D9E4 | script | default: '#D3D9E4'、const themeVals = ['#3A3C42', '#D3D9E4'] |
| #182132 | 5 | 模板/脚本 | #182132 | script | default: '#182132'、const themeVals = ['#FFFFFF', '#182132'] |
| #63656E | 4 | 模板/脚本 | #63656E | script | default: '#63656E'、const themeVals = ['#63656E', '#ACB9D1'] |
| #ACB9D1 | 2 | 模板/脚本 | #ACB9D1 | script | default: '#ACB9D1'、const themeVals = ['#63656E', '#ACB9D1'] |
| #3E4655 | 2 | 模板/脚本 | #3E4655 | script | default: '#3E4655'、const themeVals = ['#979BA5', '#3E4655'] |
| #151D2C | 2 | 模板/脚本 | #151D2C | script | default: '#151D2C'、const themeVals = ['#F5F7FA', '#151D2C'] |
| #3A3C42 | 2 | 模板/脚本 | #3A3C42 | script | const themeVals = ['#3A3C42', '#D3D9E4'] |
| #B0BDD5 | 1 | 模板/脚本 | #B0BDD5 | script | const themeVals = ['#63656E', '#B0BDD5'] |
| rgba(64, 112, 203, 0.06) | 1 | 阴影 | rgba(64, 112, 203, 0.06) | box-shadow | .bk-navigation.navigation-container.container-header |

## navigation-menu-group 导航菜单组

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #66748F | 1 | 样式 | #66748F | color | .bk-navigation-menu-group |
| #66748F | 1 | 样式 | #66748f | color | .bk-navigation-menu-group.group-name-wrap |

## navigation-menu-item 导航菜单项

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | #63656e | background | .navigation-menu-item、.navigation-sbmenu.navigation-menu-item |
| rgba(255, 255, 255, 0.06) | 2 | 样式 | rgba(255, 255, 255, 0.06) | background | .navigation-menu-item、.navigation-sbmenu.navigation-menu-item |
| #63656E | 1 | 样式 | #63656e | color | .navigation-sbmenu.navigation-menu-item |
| #8F929B | 1 | 样式 | #8f929b | color | .navigation-sbmenu.navigation-menu-item |
| rgba(255, 255, 255, 0.05) | 1 | 样式 | rgba(255, 255, 255, 0.05) | background | .navigation-sbmenu |

## notify 通知

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #FF9C01 | 1 | 样式 | $newOrangeColor | color | .bk-notify-warning.bk-notify-icon.bk-icon |
| #2DCB56 | 1 | 样式 | $newGreenColor | color | .bk-notify-success.bk-notify-icon.bk-icon |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-notify-content |
| rgba(0, 0, 0, 0.15) | 1 | 阴影 | rgba(0,0,0,0.15) | box-shadow | .bk-notify |

## pagination 分页

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #EAF3FF | 2 | 样式 | $hoverBackground | background-color | .small-jump-options.small-jump-option:hover、.small-jump-options.small-jump-option.is-selected |
| #989DAB | 1 | 样式 | #989dab | color | .bk-page.bk-page-total-count |
| #3F4046 | 1 | 样式 | #3f4046 | color | .bk-page.bk-page-total-count.stress |
| #63656E | 1 | 样式 | #63656e | color | .bk-page.bk-page-jumper |
| #63656E | 1 | 样式 | $fnMainColor | color | .bk-page.page-item.page-button |
| #63656E | 1 | 样式 | #63656E | color | .bk-page.bk-page-small-jump |
| rgba(58, 132, 255, 0.4) | 1 | 阴影 | rgba(58, 132, 255, 0.4) | box-shadow | .bk-page-small-jump.jump-input-wrapper.focus |

## popconfirm 气泡确认

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | #63656e | color | .popconfirm-more.popconfirm-content.content、.bk-popconfirm-content.popconfirm-operate |

## popover 弹出框

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #26323D | 2 | 样式 | #26323d | color | .tippy-tooltip.light-theme、.tippy-tooltip.light-border-theme |
| #333333 | 1 | 样式 | #333 | border-top | .tippy-popper.tippy-arrow |
| #333333 | 1 | 样式 | #333 | border-bottom | .tippy-popper.tippy-arrow |
| #333333 | 1 | 样式 | #333 | border-left | .tippy-popper.tippy-arrow |
| #333333 | 1 | 样式 | #333 | border-right | .tippy-popper.tippy-arrow |
| rgba(0, 0, 0, 0.8) | 1 | 样式 | rgba(0, 0, 0, .8) | background-color | .tippy-tooltip |
| #333333 | 1 | 样式 | #333 | fill | .tippy-roundarrow |
| #333333 | 1 | 样式 | #333 | background-color | .tippy-backdrop |

## process 流程

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 3 | 样式 | $fnMainColor | color | .bk-process.bk-process-toggle、.bk-process |
| #2DCB56 | 3 | 样式 | $newGreenColor | color | .bk-process.bk-process-step.success、.step-item.done.bk-icon |
| #2DCB56 | 2 | 样式 | $newGreenColor | background | .bk-process.success、.bk-process.status-done |
| #2DCB56 | 2 | 样式 | $newGreenColor | border-color | .bk-process.success、.bk-process.status-done |
| #C3CDD7 | 1 | 样式 | $borderColor | border | .bk-process.bk-process-toggle |

## progress 进度条

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #2DCB56 | 1 | 样式 | $newGreenColor | background | .bk-progress.progress-inner.bk-success |
| #FF9C01 | 1 | 样式 | $newOrangeColor | background | .bk-progress.progress-inner.bk-warning |

## radio 单选框

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-form-radio |
| #3C96FF | 1 | 样式 | $formBorderFocusColor | border-color | .bk-form-radio:focus |
| #3C96FF | 1 | 阴影 | $formBorderFocusColor | box-shadow | .bk-form-radio:focus |

## radio-button 单选按钮

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | #63656e | color | .bk-form-radio-button.bk-radio-button-text |
| #3C96FF | 1 | 阴影 | $formBorderFocusColor | box-shadow | .bk-form-radio-button:focus |

## round-progress 环形进度

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | $fnMainColor | color | .bk-round-progress.num |

## search-select 搜索选择

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 4 | 样式 | #63656e | color | .search-select-wrap.bk-search-select、.search-select-wrap.bk-search-select.search-input |
| #3C96FF | 3 | 样式 | #3c96ff | color | .search-select-wrap.bk-search-select.is-focus、.bk-search-select.search-nextfix.search-nextfix-icon:hover |
| #3C96FF | 2 | 样式 | #3c96ff | border-color | .search-select-wrap.bk-search-select.is-focus、.search-nextfix.search-nextfix-icon.is-focus |
| #E6E9EA | 1 | 样式 | #e6e9ea | background | .search-select-wrap.bk-search-select |
| rgba(204, 204, 204, 0.3) | 1 | 阴影 | rgba(204, 204, 204, 0.3) | box-shadow | .search-select-wrap.bk-search-select |

## search-select-menu 搜索选择菜单

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(234, 243, 255, 0.7) | 3 | 样式 | rgba(234, 243, 255, 0.7) | background-color | .bk-search-list:hover、.bk-search-list.is-hover.is-disabled:hover |
| #63656E | 1 | 样式 | #63656e | color | .bk-search-list |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0, 0, 0, .1) | box-shadow | .tippy-tooltip.bk-search-select-theme-theme |

## select 选择器

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #C3CDD7 | 4 | 样式 | $fnMinorColor | color | .bk-select.is-default-trigger.is-unselected、.bk-select.bk-select-name.allow-create |
| #F4F6FA | 2 | 样式 | $selectedBackground | background-color | .bk-options-single.bk-option.is-selected、.bk-options.bk-option.is-selected |
| #EAF3FF | 2 | 样式 | $hoverBackground | background-color | .bk-options-single.bk-option.is-highlight:hover、.bk-options.bk-option.is-highlight:hover |
| #63656E | 1 | 样式 | $newBlackColor2 | color | .bk-select |
| #FAFAFA | 1 | 样式 | #fafafa | background-color | .bk-select.is-readonly.is-loading |
| #63656E | 1 | 样式 | $fnMainColor | color | .bk-select-dropdown-content |
| #63656E | 1 | 样式 | #63656E | color | .bk-select-tag-container.is-available.icon-close:hover |
| rgba(58, 132, 255, 0.4) | 1 | 阴影 | rgba(58, 132, 255, 0.4) | box-shadow | .bk-select.is-focus |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0,0,0,.1) | box-shadow | .tippy-tooltip.bk-select-dropdown-theme |

## sideslider 侧栏

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(0, 0, 0, 0.2) | 2 | 阴影 | rgba(0, 0, 0, 0.2) | box-shadow | .bk-sideslider.left、.bk-sideslider.right |

## slider 滑块

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(58, 132, 255, 0.3) | 1 | 阴影 | rgba(58, 132, 255, 0.30) | box-shadow | .bk-slider-button.slider-button:hover |
| rgba(58, 132, 255, 0.9) | 1 | 阴影 | rgba(58, 132, 255, 0.9) | box-shadow | .bk-slider-button.slider-button:focus |

## spin 加载图标

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #3C96FF | 2 | 样式 | $primaryColor | background-color | .bk-spin-rotation.bk-spin-rotation-primary-wait.rotate、@keyframes fadePrimary 0% |
| #2DCB56 | 2 | 样式 | $successColor | background-color | .bk-spin-rotation.bk-spin-rotation-success-wait.rotate、@keyframes fadeSuccess 0% |
| #FFB848 | 2 | 样式 | $warningColor | background-color | .bk-spin-rotation.bk-spin-rotation-warning-wait.rotate、@keyframes fadeWarning 0% |
| #3C96FF | 2 | 样式 | $primaryColor | color | .bk-spin.bk-spin-icon、.bk-spin.bk-spin-icon-primary |
| #63656E | 1 | 样式 | #63656e | background-color | .bk-spin-rotation.bk-spin-rotation-info-wait.rotate |
| #2DCB56 | 1 | 样式 | $successColor | color | .bk-spin.bk-spin-icon-success |
| #FFB848 | 1 | 样式 | $warningColor | color | .bk-spin.bk-spin-icon-warning |
| #63656E | 1 | 样式 | $fnMainColor | color | .bk-spin.bk-spin-title |

## star 星星

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #C5C7D1 | 1 | 样式 | #c5c7d1 | fill | .bk-rate-stars.bk-rate-star |
| #FFB848 | 1 | 样式 | #ffb848 | fill | .bk-rate-stars.bk-rate-star.bk-yellow |

## steps 步骤条

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | $fnMainColor | color | .bk-step.done.bk-step-title、.current.bk-step-title.bk-step-description |
| #88C3FF | 2 | 样式 | $infoColor | border-color | .done.bk-step-number.bk-step-icon、.bk-step-number.bk-step-icon.bk-step-text |
| #88C3FF | 2 | 样式 | $infoColor | background-image | .done.bk-step-title.bk-step-indicator、.bk-steps.bk-step.done |
| #2DCB56 | 2 | 样式 | $newGreenColor | border-color | .done.bk-step-number.bk-step-icon、.bk-step-number.bk-step-icon.bk-step-text |
| #2DCB56 | 2 | 样式 | $newGreenColor | background-image | .done.bk-step-title.bk-step-indicator、.bk-steps.bk-step.done |
| #FF9C01 | 2 | 样式 | $newOrangeColor | border-color | .done.bk-step-number.bk-step-icon、.bk-step-number.bk-step-icon.bk-step-text |
| #FF9C01 | 2 | 样式 | $newOrangeColor | background-image | .done.bk-step-title.bk-step-indicator、.bk-steps.bk-step.done |
| #63656E | 1 | 样式 | #63656e | color | .bk-steps.bk-step.bk-step-title |
| #88C3FF | 1 | 样式 | $infoColor | color | .done.bk-step-number.bk-step-icon |
| #88C3FF | 1 | 样式 | $infoColor | background-color | .bk-step-number.bk-step-icon.bk-step-text |
| #2DCB56 | 1 | 样式 | $newGreenColor | color | .done.bk-step-number.bk-step-icon |
| #2DCB56 | 1 | 样式 | $newGreenColor | background-color | .bk-step-number.bk-step-icon.bk-step-text |
| #FF9C01 | 1 | 样式 | $newOrangeColor | color | .done.bk-step-number.bk-step-icon |
| #FF9C01 | 1 | 样式 | $newOrangeColor | background-color | .bk-step-number.bk-step-icon.bk-step-text |

## swiper 轮播

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | $fnMainColor | background | .bk-swiper-index |
| #C5C7D1 | 1 | 样式 | #c5c7d1 | background | .bk-swiper-index.bk-current-index |
| rgba(31, 45, 61, 0.4) | 1 | 样式 | rgba(31,45,61,.4) | background | .bk-swiper-nav |
| rgba(31, 45, 61, 0.6) | 1 | 样式 | rgba(31,45,61,.6) | background | .bk-swiper-nav:hover |

## switcher 开关

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #2DCB56 | 1 | 样式 | $newGreenColor | background | .bk-switcher.is-checked |
| #2DCB56 | 1 | 样式 | $newGreenColor | border | .bk-switcher.bk-switcher-outline.is-checked |
| #2DCB56 | 1 | 样式 | $newGreenColor | background-color | .bk-switcher.bk-switcher-outline.is-checked |
| #2DCB56 | 1 | 样式 | $newGreenColor | color | .bk-switcher-outline.is-checked.switcher-label |
| #EEEEEE | 1 | 样式 | #eee | border-color | .bk-switcher.bk-switcher-outline.is-disabled |
| #EEEEEE | 1 | 样式 | #eee | color | .bk-switcher-outline.is-disabled.switcher-label |
| #EEEEEE | 1 | 样式 | #eee | background-color | .bk-switcher.bk-switcher-outline.is-disabled |
| #2DCB56 | 1 | 阴影 | $newGreenColor | box-shadow | .bk-switcher.is-checked:focus |

## tab 选项卡

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 1 | 样式 | $headerColor | color | .bk-tab-header |
| rgba(0, 0, 0, 0.2) | 1 | 阴影 | rgba(0, 0, 0, .2) | box-shadow | .bk-tab-label-wrapper.bk-tab-scroll-controller |

## table 表格

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 4 | 样式 | $fnMainColor | color | .bk-table、.bk-table-fixed-footer-wrapper |
| #ECF5FF | 3 | 样式 | $tableCurrentRowBackground | background-color | .bk-table-striped.bk-table-body.current-row、.hover-row.bk-table-row-striped.current-row |
| #63656E | 2 | 样式 | #63656e | color | .bk-table.bk-table-column-filter-trigger.is-open、.bk-table-column-setting.bk-table-setting-icon:hover |
| #DFE0E5 | 2 | 样式 | $tableBorderColor | background-color | .bk-table-group.bk-table-border.bk-table-outer-border |
| #575961 | 1 | 样式 | #575961 | color | .bk-table |
| #FF4D51 | 1 | 样式 | #ff4d51 | background | .bk-table.required |
| #C0C4CC | 1 | 样式 | $tableCaretColor | border-bottom-color | .bk-table.bk-table-sort-caret.ascending |
| #C0C4CC | 1 | 样式 | $tableCaretColor | border-top-color | .bk-table.bk-table-sort-caret.descending |
| #DFE0E5 | 1 | 样式 | $tableBorderColor | border-bottom | .bk-table-fixed.bk-table-fixed-right |
| #FAFAFA | 1 | 样式 | #fafafa | background-color | .bk-table-striped.bk-table-body.bk-table-row-striped |
| #3785FF | 1 | 样式 | #3785FF | background | .bk-table-column-resize-head |
| #C3CDD7 | 1 | 样式 | $fnMinorColor | color | .bk-table-empty-text.bk-table-empty-icon |
| #DFE0E5 | 1 | 样式 | $tableBorderColor | border-top | .bk-table-pagination-wrapper |
| #DFE0E5 | 1 | 样式 | $tableBorderColor | border-left | .bk-table-column-setting |
| #EAF3FF | 1 | 样式 | #eaf3ff | background-color | .bk-table-filter-panel.panel-list.panel-item:hover |
| #F4F6FA | 1 | 样式 | #f4f6fa | background-color | .panel-list.panel-item.is-selected |
| #DFE0E5 | 1 | 模板/脚本 | #DFE0E5 | script | <div class="bk-table-bottom-loading" style="border-top: 1px solid #dfe0e5; bottom: 1px;" v-if="scrollEndLoading.isLoading"></div> |

## tag 标签

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #979BA5 / 10% | 1 | 样式 | color($default-color a(10%)) | background-color | .bk-tag |
| #DCDEE5 / 60% | 1 | 样式 | color($border-color a(60%)) | border-color | .bk-tag |
| #63656E | 1 | 样式 | $font-color | color | .bk-tag |
| #14A568 / 10% | 1 | 样式 | color($success-color a(10%)) | background-color | .bk-tag-success |
| #14A568 / 30% | 1 | 样式 | color($success-color a(30%)) | border-color | .bk-tag-success |
| #14A568 | 1 | 样式 | $success-color | color | .bk-tag-success |
| #3A84FF / 10% | 1 | 样式 | color($info-color a(10%)) | background-color | .bk-tag-info |
| #3A84FF / 30% | 1 | 样式 | color($info-color a(30%)) | border-color | .bk-tag-info |
| #FE9C00 / 10% | 1 | 样式 | color($warning-color a(10%)) | background-color | .bk-tag-warning |
| #FE9C00 / 30% | 1 | 样式 | color($warning-color a(30%)) | border-color | .bk-tag-warning |
| #FE9C00 | 1 | 样式 | $warning-color | color | .bk-tag-warning |
| #EA3536 / 10% | 1 | 样式 | color($danger-color a(10%)) | background-color | .bk-tag-danger |
| #EA3536 / 30% | 1 | 样式 | color($danger-color a(30%)) | border-color | .bk-tag-danger |
| #EA3536 | 1 | 样式 | $danger-color | color | .bk-tag-danger |
| #14A568 | 1 | 样式 | $success-color | background | .bk-tag-filled.bk-tag-success |
| #FE9C00 | 1 | 样式 | $warning-color | background | .bk-tag-filled.bk-tag-warning |
| #EA3536 | 1 | 样式 | $danger-color | background | .bk-tag-filled.bk-tag-danger |
| #979BA5 / 15% | 1 | 样式 | color($default-color a(15%)) | background | .bk-tag-checkable:hover |

## tag-input 标签输入

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 4 | 样式 | $fnMainColor | color | .bk-tag-input.tag-list.remove-key、.bk-tag-selector.bk-tag-input.tag |
| #F4F6FA | 3 | 样式 | #F4F6FA | background-color | .bk-selector-list.bk-selector-list-item.bk-selector-selected、.bk-selector-list.bk-selector-list-item.bk-selector-actived |
| #EAF3FF | 2 | 样式 | #EAF3FF | background-color | .bk-selector-list.bk-selector-list-item:hover |
| #FAFAFA | 1 | 样式 | $defaultHoverColor | background | .bk-tag-selector.bk-tag-input.disabled |
| #3C96FF | 1 | 样式 | $primaryColor | color | .bk-selector-list.bk-selector-list-item.bk-selector-selected |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0, 0, 0, .1) | box-shadow | .tippy-tooltip.bk-select-dropdown-theme |
| rgba(0, 0, 0, 0.1) | 1 | 阴影 | rgba(0, 0, 0, 0.1) | box-shadow | .bk-selector-list |

## time-picker 时间选择

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | $newBlackColor2 | color | .bk-time-picker-cells-list.bk-time-picker-cells-ul.bk-time-picker-cells-cell、.bk-time-picker-header |
| #E8EAEC | 1 | 样式 | #e8eaec | background | .bk-time-picker-with-range.bk-picker-panel-content |

## timeline 时间轴

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #D8D8D8 | 2 | 样式 | #d8d8d8 | border | .bk-timeline.bk-timeline-dot、.bk-timeline.bk-timeline-dot.bk-timeline-icon |
| #D8D8D8 | 1 | 样式 | #d8d8d8 | border-left | .bk-timeline.bk-timeline-dot |
| #63656E | 1 | 样式 | #63656e | color | .bk-timeline.bk-timeline-dot.bk-timeline-title |
| #666666 | 1 | 样式 | #666 | color | .bk-timeline.bk-timeline-dot.bk-timeline-content |
| #40C024 | 1 | 样式 | #40c024 | color | .bk-timeline.bk-timeline-item-green.bk-timeline-icon |
| #40C024 | 1 | 样式 | #40c024 | border-color | .bk-timeline.bk-timeline-item-green.bk-timeline-icon |
| #40C024 | 1 | 样式 | #40c024 | background | .bk-timeline-item-green.bk-timeline-item-filled.bk-timeline-icon |
| #FF9C01 | 1 | 样式 | $newOrangeColor | color | .bk-timeline.bk-timeline-item-yellow.bk-timeline-icon |
| #FF9C01 | 1 | 样式 | $newOrangeColor | border-color | .bk-timeline.bk-timeline-item-yellow.bk-timeline-icon |
| #FF9C01 | 1 | 样式 | $newOrangeColor | background | .bk-timeline-item-yellow.bk-timeline-item-filled.bk-timeline-icon |
| #D8D8D8 | 1 | 样式 | #d8d8d8 | color | .bk-timeline.bk-timeline-item-gray.bk-timeline-icon |
| #D8D8D8 | 1 | 样式 | #d8d8d8 | border-color | .bk-timeline.bk-timeline-item-gray.bk-timeline-icon |
| #D8D8D8 | 1 | 样式 | #d8d8d8 | background | .bk-timeline-item-gray.bk-timeline-item-filled.bk-timeline-icon |
| #999999 | 1 | 样式 | #999 | border-left | .bk-timeline.bk-timeline-item-default |
| #999999 | 1 | 样式 | #999 | color | .bk-timeline.bk-timeline-item-default.bk-timeline-icon |
| #999999 | 1 | 样式 | #999 | border | .bk-timeline.bk-timeline-item-default.bk-timeline-icon |
| #FFB400 | 1 | 样式 | #ffb400 | border-left | .bk-timeline.bk-timeline-item-warning |
| #FFB400 | 1 | 样式 | #ffb400 | color | .bk-timeline.bk-timeline-item-warning.bk-timeline-icon |
| #FFB400 | 1 | 样式 | #ffb400 | border | .bk-timeline.bk-timeline-item-warning.bk-timeline-icon |
| #30D878 | 1 | 样式 | #30d878 | border-left | .bk-timeline.bk-timeline-item-success |
| #30D878 | 1 | 样式 | #30d878 | color | .bk-timeline.bk-timeline-item-success.bk-timeline-icon |
| #30D878 | 1 | 样式 | #30d878 | border | .bk-timeline.bk-timeline-item-success.bk-timeline-icon |

## transfer 穿梭框

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #DDE4EB | 2 | 样式 | $borderInlineColor | border-bottom | .source-list.target-list.slot-header、.source-list.target-list.header |
| #DDE4EB | 1 | 样式 | $borderInlineColor | border | .bk-transfer.source-list.target-list |
| #EEF6FE | 1 | 样式 | #eef6fe | background-color | .source-list.target-list.content:hover |
| #E6E9EA | 1 | 样式 | #e6e9ea | background-color | .source-list.target-list.content |

## tree 树

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #C3CDD7 | 2 | 样式 | $borderColor | border-top | .bk-has-border-tree、.bk-has-border-tree.leaf |
| #C0C4CC | 1 | 样式 | #c0c4cc | color | .bk-tree.tree-drag-node.tree-expanded-icon |
| #3C96FF | 1 | 样式 | $formBorderFocusColor | border-color | .bk-tree.bk-form-checkbox:focus |
| #C3CDD7 | 1 | 样式 | $borderColor | border-left | .bk-has-border-tree |

## upload 上传

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | $newBlackColor2 | color | .draggable.file-wrapper.drop-upload、.bk-upload.tip |
| rgba(0, 0, 0, 0.6) | 1 | 样式 | rgba(0, 0, 0, .6) | background | .bk-upload.pic-item.mask |
| #2DCB56 | 1 | 样式 | $newGreenColor | background | .bk-upload.progress-bar-wrapper.progress-bar |
| #2DCB56 | 1 | 样式 | $successColor | background | .bk-upload.progress-bar-wrapper.success |
| #0082FF | 1 | 样式 | #0082ff | border | .bk-upload.isdrag |
| rgba(254, 221, 220, 0.4) | 1 | 样式 | rgba(254, 221, 220, 0.4) | background | .all-file.file-item.file-item-fail |
| #63656E | 1 | 样式 | $fnMainColor | color | .all-file.file-item.close-upload:hover |
| #2DCB56 | 1 | 样式 | $newGreenColor | color | .file-info.file-message.done |

## version-detail 版本详情

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 2 | 样式 | #63656E | color | .bk-version.left-list.item-title、.left-list.item-active.item-date |
| rgba(0, 0, 0, 0.1) | 1 | 样式 | rgba(0, 0, 0, .1) | background | .bk-version.left-list |
| #34383E | 1 | 样式 | #34383e | color | .bk-version |
| #333333 | 1 | 样式 | #333 | color | .bk-version |
| #DD1144 | 1 | 样式 | #d14 | color | .bk-version |
| #E1E1E8 | 1 | 样式 | #e1e1e8 | border | .bk-version |
| #F6F6F6 | 1 | 样式 | #f6f6f6 | background-color | .bk-version |
| #DDDDDD | 1 | 样式 | #ddd | border | .bk-version |
| rgba(0, 0, 0, 0.15) | 1 | 样式 | rgba(0,0,0,0.15) | border | .bk-version |
| #DFDFDF | 1 | 样式 | #dfdfdf | border-left | .bk-version |
| #999999 | 1 | 样式 | #999 | color | .bk-version |
| rgba(204, 204, 204, 0.3) | 1 | 阴影 | rgba(204, 204, 204, 0.3) | box-shadow | .bk-version.left-list |

## virtual-render 虚拟渲染

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| #A0A0A0 | 1 | 样式 | #a0a0a0 | background-color | .bk-virtual-render.bk-scroll-x |

## virtual-scroll 虚拟滚动

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(121, 121, 121, 0.4) | 3 | 样式 | rgba(121, 121, 121, 0.4) | background | .bk-scroll-home.bk-min-nav:hover、.bk-scroll-home.bk-min-nav-slide.bk-nav-show |
| rgba(121, 121, 121, 0.5) | 1 | 样式 | rgba(121, 121, 121, 0.5) | background | .bk-scroll-home.bk-min-nav-slide:hover |
| rgba(121, 121, 121, 0.55) | 1 | 样式 | rgba(121, 121, 121, 0.55) | background | .bk-scroll-home.bk-min-nav-slide:active |

## zoom-image 缩放图片

| 色值 | 出现次数 | 来源 | 当前写法 | 属性 | 示例位置 |
| --- | --- | --- | --- | --- | --- |
| rgba(0, 0, 0, 0.6) | 1 | 样式 | rgba(0, 0, 0, 0.6) | background | .bk-zoom-image.bk-full-screen |

# 对不上的圆角

| 组件 | 建议变量 | 当前值 | 说明 |
| --- | --- | --- | --- |
| back-top | --bk-back-top-radius | 26px | 例如 .bk-back-to-top。共 1 处 |
| badge | --bk-badge-radius | 18px | 例如 .bk-badge-wrapper.bk-badge。共 1 处 |
| big-tree | --bk-big-tree-radius | 3px | 例如 .bk-big-tree。共 1 处 |
| cascade | --bk-cascade-radius | 3px | 例如 .bk-cascade-options、.bk-cascade-panel.bk-cascade-panel-ul。共 2 处 |
| color-picker | --bk-color-picker-radius | 1px | 例如 .bk-color-picker-hue.bk-color-picker-hue-pointer.bk-color-picker-hue-rectangle、.bk-color-picker-empty。共 2 处 |
| color-picker | --bk-color-picker-radius-2 | 3px | 例如 .bk-color-picker-recommend-container.bk-color-picker-recommend.bk-color-picker-recommend-color。共 1 处 |
| date-picker | --bk-date-picker-radius | 3px | 例如 .bk-date-picker-cells-year.bk-date-picker-cells-month。共 1 处 |
| dropdown-menu | --bk-dropdown-menu-radius | 20px | 例如 .bk-dropdown-menu.bk-dropdown-list。共 1 处 |
| fixed-navbar | --bk-fixed-navbar-radius | 26px | 例如 .bk-fixed-navbar-wrapper。共 1 处 |
| image-viewer | --bk-image-viewer-radius | 22px | 例如 .bk-image-viewer。共 1 处 |
| loading | --bk-loading-radius | 19px | 例如 .bk-loading.bk-loading1.point。共 1 处 |
| loading | --bk-loading-radius-2 | 3px | 例如 .bk-loading2.bk-spin-loading-mini.rotate。共 1 处 |
| loading | --bk-loading-radius-3 | 5px | 例如 .bk-loading2.bk-spin-loading-small.rotate。共 1 处 |
| pagination | --bk-pagination-radius | 3px | 例如 .small-jump-options。共 1 处 |
| progress | --bk-progress-radius | 50px | 例如 .bk-progress.progress-bar、.bk-progress.progress-inner。共 2 处 |
| search-select | --bk-search-select-radius | 20px | 例如 .search-select-wrap.bk-search-select。共 1 处 |
| search-select-menu | --bk-search-select-menu-radius | 3px | 例如 .bk-search-list。共 1 处 |
| select | --bk-select-radius | 3px | 例如 .bk-options、.bk-options.bk-virtual-select.bk-min-nav-slide。共 2 处 |
| switcher | --bk-switcher-radius | 100px | 例如 .bk-switcher。共 1 处 |
| switcher | --bk-switcher-radius-2 | 50px | 例如 .bk-switcher。共 1 处 |
| table | --bk-table-radius | 3px | 例如 .bk-table-setting-content.content-scroller、.bk-table-filter-panel.panel-list。共 2 处 |
| tag-input | --bk-tag-input-radius | 3px | 例如 .bk-selector-list.outside-ul。共 2 处 |
| tree | --bk-tree-radius | 3px | 例如 .bk-tree.node-title。共 1 处 |
| upload | --bk-upload-radius | 1px | 例如 .bk-upload.progress-bar-wrapper、.bk-upload.progress-bar-wrapper.progress-bar。共 2 处 |
| version-detail | --bk-version-detail-radius | 3px | 例如 .bk-version。共 2 处 |
