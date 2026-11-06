# bkui-vue2 还没接上变量的颜色

2026-11-06 按当前源码重扫。已经写成 `var(--bk-...)` 的不在这里，注释里的颜色也不算。

diff、version-detail 上次 review 定为不在配色范围，下面仍会列出，不用再匹配。导航和取色器色板同样不用匹配。Loading 白色兜底要保留十六进制。

复制成功图标原来的 `#2DCB9D` 已按指定改成 Success-02，所以不在下面。

「对照」只写色值完全相同的第一层变量，不做近似判断。第一节现在只剩 diff 和 version-detail，上次已定为不匹配。

导航按约定不接。取色器的色带和推荐色不进主题变量。这两部分放在最后，不用匹配。

`diff.css` 另外引了 highlight.js 的 googlecode 主题和 diff2html 的样式。那两份是第三方色板，没有逐条拆开。下面只列本仓库源码里写死的颜色。

图标字体 `iconfont.css` 不在这份清单里。

## 组件一览

| 组件 | 待匹配实色 | 漏接同色 | 透明色 | 阴影 | 颜色函数 |
| --- | --- | --- | --- | --- | --- |
| back-top | 0 | 0 | 0 | 1 | 0 |
| button | 0 | 0 | 0 | 0 | 1 |
| color-picker | 0 | 0 | 0 | 8 | 0 |
| dialog | 0 | 0 | 2 | 0 | 0 |
| diff | 11 | 0 | 0 | 0 | 1 |
| dropdown-menu | 0 | 0 | 0 | 1 | 0 |
| fixed-navbar | 0 | 0 | 0 | 1 | 0 |
| image-viewer | 0 | 0 | 5 | 0 | 0 |
| loading | 0 | 1 | 1 | 0 | 0 |
| message | 0 | 0 | 1 | 1 | 0 |
| popover | 0 | 0 | 1 | 0 | 0 |
| search-select | 0 | 0 | 0 | 1 | 0 |
| search-select-menu | 0 | 0 | 1 | 0 | 0 |
| sideslider | 0 | 0 | 1 | 1 | 0 |
| swiper | 0 | 0 | 2 | 0 | 0 |
| switcher | 0 | 0 | 0 | 1 | 0 |
| tab | 0 | 0 | 0 | 1 | 0 |
| table | 0 | 0 | 0 | 1 | 0 |
| tag | 0 | 0 | 0 | 0 | 11 |
| tag-input | 0 | 0 | 0 | 1 | 0 |
| time-picker | 0 | 0 | 0 | 0 | 1 |
| transfer | 0 | 0 | 0 | 0 | 1 |
| upload | 0 | 0 | 2 | 0 | 0 |
| version-detail | 1 | 0 | 2 | 1 | 0 |
| virtual-scroll | 0 | 0 | 3 | 0 | 0 |
| zoom-image | 0 | 0 | 1 | 0 | 0 |

颜色都已经接上变量的组件：affix、alert、animate-number、badge、big-tree、breadcrumb、breadcrumb-item、card、cascade、checkbox、checkbox-group、col、collapse、collapse-item、common、compose-form-item、container、date-picker、divider、exception、form、form-item、icon、image、info-box、input、link、notify、option、option-group、overflow-tips、pagination、popconfirm、process、progress、radio、radio-button、radio-group、rate、reset、resize-layout、round-progress、row、select、slider、spin、star、steps、tab-panel、table-column、table-setting-content、timeline、transition、tree、virtual-render。

## 需要你匹配的实色

这些颜色和第一层任何色值都不一样，代码里仍是写死的。

共 12 条，出现 13 处。

### diff // 不处理

这些是代码对比里的高亮色，不是按钮、表格这类界面色。

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #8F3AFF | 2 | 无同色 | #8f3aff | `src/ui/diff.css:137` .bk-diff.dark .hljs-string, .hljs-meta-string · 文字<br>`src/ui/diff.css:149` .bk-diff.dark .hljs-subst, .hljs-function, .hljs-title, .hljs-formula · 文字 |
| #144212 | 1 | 无同色 | #144212 | `src/ui/diff.css:208` .bk-diff.dark .hljs-addition · 背景 |
| #2D3324 | 1 | 无同色 | #2d3324 | `src/ui/diff.css:102` .bk-diff.dark .d2h-ins · 背景 |
| #422321 | 1 | 无同色 | #422321 | `src/ui/diff.css:96` .bk-diff.dark .d2h-del · 背景 |
| #4EC9B0 | 1 | 无同色 | #4ec9b0 | `src/ui/diff.css:127` .bk-diff.dark .hljs-built_in, .hljs-type · 文字 |
| #569CD6 | 1 | 无同色 | #569cd6 | `src/ui/diff.css:121` .bk-diff.dark .hljs-link · 文字 |
| #608B4E | 1 | 无同色 | #608b4e | `src/ui/diff.css:162` .bk-diff.dark .hljs-doctag · 文字 |
| #660000 | 1 | 无同色 | #600 | `src/ui/diff.css:214` .bk-diff.dark .hljs-deletion · 背景 |
| #9A5334 | 1 | 无同色 | #9a5334 | `src/ui/diff.css:142` .bk-diff.dark .hljs-regexp, .hljs-template-tag · 文字 |
| #B8D7A3 | 1 | 无同色 | #b8d7a3 | `src/ui/diff.css:132` .bk-diff.dark .hljs-number, .hljs-class · 文字 |
| #BD63C5 | 1 | 无同色 | #bd63c5 | `src/ui/diff.css:173` .bk-diff.dark .hljs-variable, .hljs-template-variable · 文字 |

### version-detail

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #DD1144 | 1 | 无同色 | #d14 | `src/ui/version-detail.css:271` .bk-version-markdown-theme code · 文字 |

## 色值和第一层相同，但代码没接上

色值已经等于某一层变量，只是源码里还没写成变量。

共 1 条，出现 3 处。

### loading 

| 颜色      | 次数  | 对照            | 写法      | 用在哪里                                                                                                                                                                                                      |
| ------- | --- | ------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| #FFFFFF | 3   | 等于 Neutral-10 | #ffffff | `src/components/loading/directive.js:102` 加载背景色的兜底值<br>`src/components/loading/loading.js:50` 加载背景色的兜底值<br>`src/components/loading/loading.vue:162` color 的默认值<br>要保留十六进制。加载组件会检查颜色是不是 # 开头，写成 var() 会失效。 |

## 带透明度的颜色

不含阴影。第一层只有实色，透明度需要单独决定。

共 22 条，出现 33 处。

### image-viewer // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 40% | 2 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .4)、$newBlackColor4 | `src/ui/image-viewer.css:72` .bk-image-viewer-btn:hover · 背景<br>`src/ui/image-viewer.css:120` .bk-image-viewer-actions · 背景 |
| #000000 / 30% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .3) | `src/ui/image-viewer.css:67` .bk-image-viewer-btn · 背景 |
| #000000 / 50% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0,0,0,.5) | `src/ui/image-viewer.css:124` .bk-image-viewer-actions:hover · 背景 |
| #000000 / 60% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .6) | `src/ui/image-viewer.css:14` .bk-image-viewer-wrapper · 背景 |
| #000000 / 70% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0,0,0,0.70) | `src/ui/image-viewer.css:37` .bk-image-viewer-header · 背景 |

### virtual-scroll // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #797979 / 40% | 3 | 底色无同色 | rgba(121, 121, 121, 0.4) | `src/ui/virtual-scroll.css:41` .bk-scroll-home .bk-min-nav:hover + span · 背景<br>`src/ui/virtual-scroll.css:53` .bk-scroll-home .bk-min-nav-slide.bk-nav-show · 背景<br>`src/ui/virtual-scroll.css:65` .bk-scroll-home .bk-bottom-scroll · 背景 |
| #797979 / 50% | 1 | 底色无同色 | rgba(121, 121, 121, 0.5) | `src/ui/virtual-scroll.css:56` .bk-scroll-home .bk-min-nav-slide:hover · 背景 |
| #797979 / 55% | 1 | 底色无同色 | rgba(121, 121, 121, 0.55) | `src/ui/virtual-scroll.css:59` .bk-scroll-home .bk-min-nav-slide:active · 背景 |

### dialog // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 60% | 4 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.6) | `src/components/dialog/dialog.vue:616` 背景<br>`src/ui/dialog.css:9` .bk-dialog-mask · 背景<br>`src/ui/dialog.css:338` @keyframes mask-fading 100% · 背景<br>`src/ui/dialog.css:344` @keyframes mask-hidding 0% · 背景 |
| #000000 / 0% | 3 | 底色是纯黑，第一层没有这支色，全透明 | rgba(0, 0, 0, 0) | `src/ui/dialog.css:43` .bk-dialog-wrapper * · -webkit-tap-highlight-color<br>`src/ui/dialog.css:335` @keyframes mask-fading 0% · 背景<br>`src/ui/dialog.css:348` @keyframes mask-hidding 100% · 背景 |

### swiper // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #1F2D3D / 40% | 1 | 底色无同色 | rgba(31,45,61,.4) | `src/ui/swiper.css:64` .bk-swiper-nav · 背景 |
| #1F2D3D / 60% | 1 | 底色无同色 | rgba(31,45,61,.6) | `src/ui/swiper.css:91` .bk-swiper-nav:hover · 背景 |

### upload  // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 60% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .6) | `src/ui/upload.css:76` .bk-upload .pic-item .mask · 背景 |
| #FEDDDC / 40% | 1 | 底色无同色 | rgba(254, 221, 220, 0.4) | `src/ui/upload.css:258` .bk-upload .all-file .file-item.file-item-fail · 背景 |

### version-detail // 不处理 

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 10% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .1) | `src/ui/version-detail.css:123` .bk-version-left .left-list::-webkit-scrollbar · 背景 |
| #000000 / 15% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0,0,0,0.15) | `src/ui/version-detail.css:285` .bk-version-markdown-theme pre · 边框 |

### loading 
> 讨论：是否能写成变量 Neutral-10, alpha 值0.9，读不到变量时再填现在的值

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #FFFFFF / 90% | 2 | 底色等于 Neutral-10 | rgba(255, 255, 255, 0.9) | `src/ui/loading.css:17` .bk-loading · 背景<br>`src/ui/loading.css:442` .bk-loading-box, .bk-loading · 背景 |

### message

| 颜色            | 次数  | 对照    | 写法                       | 用在哪里                                                                                                                 | 替换颜色    |
| ------------- | --- | ----- | ------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------- |
| #BABCC0 / 20% | 1   | 底色无同色 | rgba(186, 188, 192, 0.2) | `src/ui/message.css:288` .bk-message-content.multi .message-detail .message-tree .message-row .copy-value:hover · 背景 | #FFFFFF |

### popover // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 80% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .8) | `src/ui/popover.css:498` .tippy-tooltip · 背景 |

### search-select-menu

| 颜色            | 次数  | 对照    | 写法                       | 用在哪里                                                                                                                                                                                                                                                                                          | 替换颜色    |
| ------------- | --- | ----- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| #EAF3FF / 70% | 3   | 底色无同色 | rgba(234, 243, 255, 0.7) | `src/ui/search-select-menu.css:25` .bk-search-list-condition:hover · 背景<br>`src/ui/search-select-menu.css:74` .bk-search-list-menu-item.is-hover, .bk-search-list-menu-item:not(.is-disabled):hover · 背景<br>`src/ui/search-select-menu.css:107` .bk-search-list-footer .footer-btn:hover · 背景 | #F0F5FF |

### sideslider // 不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 60% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.6) | `src/components/sideslider/sideslider.vue:180` 背景 |

### zoom-image //不处理

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 60% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.6) | `src/ui/zoom-image.css:15` .bk-zoom-image .bk-full-screen · 背景 |

## 阴影里的颜色 //不处理

下面只剩源码里还写死的投影和聚焦光圈。已经接到投影变量或 color-mix 的不在这里。

共 19 条，出现 23 处。

### color-picker

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 15% | 2 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .15) | `src/ui/color-picker.css:80` .bk-color-picker .bk-color-picker-color .bk-color-picker-color-square · 阴影<br>`src/ui/color-picker.css:212` .bk-color-picker-recommend-container .bk-color-picker-recommend .bk-color-picker-recommend-color · 阴影 |
| #000000 / 30% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.3) | `src/ui/color-picker.css:242` .bk-color-picker-pointer .bk-color-picker-circle · 阴影 |
| #000000 / 40% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.4) | `src/ui/color-picker.css:242` .bk-color-picker-pointer .bk-color-picker-circle · 阴影 |
| #000000 / 60% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .6) | `src/ui/color-picker.css:148` .bk-color-picker-hue .bk-color-picker-hue-pointer .bk-color-picker-hue-rectangle · 阴影 |
| #2D8CF0 / 20% | 1 | 底色无同色 | rgba(45, 140, 240, .2) | `src/ui/color-picker.css:53` .bk-color-picker.bk-color-picker-show-dropdown · 阴影 |
| #2D8CF0 / 50% | 1 | 底色无同色 | rgba(45, 140, 240, .5) | `src/ui/color-picker.css:224` .bk-color-picker-saturation, .bk-color-picker-hue, .bk-color-picker-recommend:focus · 阴影 |
| #3A84FF | 1 | 底色等于 Brand-02 | $newMainColor | `src/ui/color-picker.css:215` .bk-color-picker-recommend-container .bk-color-picker-recommend .bk-color-picker-recommend-color.bk-color-picker-recommend-selected-color · 阴影 |
| #FFFFFF | 1 | 底色等于 Neutral-10 | #fff | `src/ui/color-picker.css:242` .bk-color-picker-pointer .bk-color-picker-circle · 阴影 |

### back-top

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 10% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0,0,0,0.10) | `src/ui/back-top.css:10` .bk-back-to-top · 阴影 |

### dropdown-menu

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #CCCCCC / 30% | 1 | 底色无同色 | hsla(0,0%,80%,.3) | `src/ui/dropdown-menu.css:93` .bk-dropdown-menu .bk-dropdown-list::-webkit-scrollbar-thumb · 阴影 |

### fixed-navbar

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 10% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0,0,0,0.10) | `src/ui/fixed-navbar.css:10` .bk-fixed-navbar-wrapper · 阴影 |

### message

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 10.2% | 2 | 底色是纯黑，第一层没有这支色 | #0000001a | `src/ui/message.css:333` .bk-message-content.multi .message-detail .copy-status .inner · 阴影<br>`src/ui/message.css:352` .bk-message-content.multi .message-detail .copy-status .inner::after · 阴影 |

### search-select

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #CCCCCC / 30% | 1 | 底色无同色 | rgba(204, 204, 204, 0.3) | `src/ui/search-select.css:161` .search-select-wrap .bk-search-select::-webkit-scrollbar-thumb · 阴影 |

### sideslider

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 20% | 2 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.2) | `src/ui/sideslider.css:29` .bk-sideslider-wrapper.left · 阴影<br>`src/ui/sideslider.css:33` .bk-sideslider-wrapper.right · 阴影 |

### switcher

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 20% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, .2) | `src/ui/switcher.css:29` .bk-switcher:after · 阴影 |

### tab

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 5% | 2 | 底色是纯黑，第一层没有这支色 | rgb(0 0 0 / .05) | `src/ui/tab.css:396` .bk-tab-label-wrapper.has-scroller.has-add .bk-tab-add-controller.next-right · 阴影<br>`src/ui/tab.css:430` .bk-tab-label-wrapper.has-scroller.has-add .bk-tab-add-custom.next-right · 阴影 |

### table

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 12% | 1 | 底色是纯黑，第一层没有这支色 | $tableFixedBoxShadow | `src/ui/table.css:326` .bk-table-fixed, .bk-table-fixed-right · 阴影 |

### tag-input

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #000000 / 10% | 1 | 底色是纯黑，第一层没有这支色 | rgba(0, 0, 0, 0.1) | `src/components/tag-input/result-list.vue:99` .bk-selector-list · 阴影 |

### version-detail

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #CCCCCC / 30% | 1 | 底色无同色 | rgba(204, 204, 204, 0.3) | `src/ui/version-detail.css:129` .bk-version-left .left-list::-webkit-scrollbar-thumb · 阴影 |

## 颜色函数

`darken()`、`lighten()`、`color()` 在构建时会算成固定颜色。

共 15 条，出现 16 处。

### tag

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| color(#14A568 a(10%)) | 1 | 底色无同色 | $success-color / 10% | `src/ui/tag.css:43` .bk-tag-success · 背景 |
| color(#14A568 a(30%)) | 1 | 底色无同色 | $success-color / 30% | `src/ui/tag.css:43` .bk-tag-success · 边框 |
| color(#3A84FF a(10%)) | 1 | 底色等于 Brand-02 | $info-color / 10% | `src/ui/tag.css:46` .bk-tag-info · 背景 |
| color(#3A84FF a(30%)) | 1 | 底色等于 Brand-02 | $info-color / 30% | `src/ui/tag.css:46` .bk-tag-info · 边框 |
| color(#979BA5 a(10%)) | 1 | 底色等于 Neutral-03 | $default-color / 10% | `src/ui/tag.css:19` .bk-tag · 背景 |
| color(#979BA5 a(15%)) | 1 | 底色等于 Neutral-03 | color($default-color a(15%)) | `src/ui/tag.css:87` .bk-tag-checkable:hover · 背景 |
| color(#DCDEE5 a(60%)) | 1 | 底色等于 Neutral-05 | $border-color / 60% | `src/ui/tag.css:19` .bk-tag · 边框 |
| color(#EA3536 a(10%)) | 1 | 底色无同色 | $danger-color / 10% | `src/ui/tag.css:52` .bk-tag-danger · 背景 |
| color(#EA3536 a(30%)) | 1 | 底色无同色 | $danger-color / 30% | `src/ui/tag.css:52` .bk-tag-danger · 边框 |
| color(#FE9C00 a(10%)) | 1 | 底色无同色 | $warning-color / 10% | `src/ui/tag.css:49` .bk-tag-warning · 背景 |
| color(#FE9C00 a(30%)) | 1 | 底色无同色 | $warning-color / 30% | `src/ui/tag.css:49` .bk-tag-warning · 边框 |

### button

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| darken(#63656E, 10%) | 1 | 底色无同色 | darken($fnMainColor, 10%) | `src/ui/button.css:664` .bk-text-button.bk-default:hover · 文字 |

### diff

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| color(transparent lightness(80%)) | 2 | 颜色函数，没有可对照的实色 | color(transparent lightness(80%)) | `src/ui/diff.css:19` .bk-diff .d2h-file-diff::-webkit-scrollbar · 背景<br>`src/ui/diff.css:55` .bk-diff .d2h-file-side-diff::-webkit-scrollbar · 背景 |

### time-picker

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| color(transparent lightness(80%)) | 1 | 颜色函数，没有可对照的实色 | color(transparent lightness(80%)) | `src/ui/time-picker.css:120` .bk-time-picker-cells-list::-webkit-scrollbar · 背景 |

### transfer

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| color(transparent lightness(80%)) | 1 | 颜色函数，没有可对照的实色 | color(transparent lightness(80%)) | `src/ui/transfer.css:107` .bk-transfer .source-list, .target-list .content::-webkit-scrollbar · 背景 |

## 导航

按约定维持写死的颜色，不用匹配。

共 32 条，出现 73 处。

### navigation

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #FFFFFF | 9 | 等于 Neutral-10 | #fff、#FFFFFF | `src/components/navigation/navigation-menu.vue:66` itemActiveColor 的默认值<br>`src/components/navigation/navigation-menu.vue:82` itemActiveIconColor 的默认值<br>`src/components/navigation/navigation-menu.vue:98` itemChildIconActiveColor 的默认值<br>`src/components/navigation/navigation-menu.vue:146` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:152` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:176` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:200` themeVals 列表里的颜色<br>`src/components/navigation/navigation.vue:187` defTheme 列表里的颜色<br>`src/ui/navigation.css:142` .bk-navigation-wrapper .navigation-container .container-header · 背景 |
| #D3D9E4 | 7 | 无同色 | #D3D9E4 | `src/components/navigation/navigation-menu.vue:58` itemHoverColor 的默认值<br>`src/components/navigation/navigation-menu.vue:86` itemHoverIconColor 的默认值<br>`src/components/navigation/navigation-menu.vue:94` itemChildIconHoverColor 的默认值<br>`src/components/navigation/navigation-menu.vue:134` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:170` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:194` themeVals 列表里的颜色<br>`src/ui/navigation.css:120` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon.is-left:hover · 文字 |
| #63656E | 6 | 无同色 | #63656e、#63656E | `src/components/navigation/navigation-menu.vue:78` itemDefaultIconColor 的默认值<br>`src/components/navigation/navigation-menu.vue:158` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:164` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:194` themeVals 列表里的颜色<br>`src/ui/mixins/create-menu-item.css:44` .$(name)-default-icon · 背景<br>`src/ui/navigation.css:98` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon · 文字 |
| #182132 | 5 | 无同色 | #182132 | `src/components/navigation/navigation-menu.vue:70` itemDefaultBgColor 的默认值<br>`src/components/navigation/navigation-menu.vue:152` themeVals 列表里的颜色<br>`src/components/navigation/navigation.vue:145` headThemeColor 的默认值<br>`src/components/navigation/navigation.vue:149` themeColor 的默认值<br>`src/components/navigation/navigation.vue:187` defTheme 列表里的颜色 |
| #3A84FF | 4 | 等于 Brand-02 | rgba(58,132,255,1)、#3A84FF | `src/components/navigation/navigation-menu.vue:62` itemActiveBgColor 的默认值<br>`src/components/navigation/navigation-menu.vue:140` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:146` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:176` themeVals 列表里的颜色 |
| #253047 | 3 | 无同色 | rgba(37, 48, 71, 1)、rgba(37,48,71,1) | `src/components/navigation/navigation-menu.vue:54` itemHoverBgColor 的默认值<br>`src/components/navigation/navigation-menu.vue:128` themeVals 列表里的颜色<br>`src/ui/navigation.css:119` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon.is-left:hover · 背景 |
| #3A3C42 | 3 | 无同色 | #3A3C42 | `src/components/navigation/navigation-menu.vue:134` themeVals 列表里的颜色<br>`src/components/navigation/navigation-menu.vue:170` themeVals 列表里的颜色<br>`src/ui/navigation.css:126` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon:hover · 文字 |
| #96A2B9 | 3 | 无同色 | #96A2B9 | `src/ui/navigation.css:19` .bk-navigation-title .title-icon · 文字<br>`src/ui/navigation.css:27` .bk-navigation-title .title-desc · 文字<br>`src/ui/navigation.css:117` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon.is-left · 文字 |
| #151D2C | 2 | 无同色 | #151D2C | `src/components/navigation/navigation-menu.vue:102` subMenuOpenBgColor 的默认值<br>`src/components/navigation/navigation-menu.vue:182` themeVals 列表里的颜色 |
| #202A3C | 2 | 无同色 | rgba(32,42,60,1) | `src/components/navigation/navigation-menu.vue:54` itemHoverBgColor 的默认值<br>`src/components/navigation/navigation-menu.vue:128` themeVals 列表里的颜色 |
| #3E4655 | 2 | 无同色 | #3E4655 | `src/components/navigation/navigation-menu.vue:90` itemChildIconDefaultColor 的默认值<br>`src/components/navigation/navigation-menu.vue:188` themeVals 列表里的颜色 |
| #3F87FF | 2 | 无同色 | rgba(63,135,255,1) | `src/components/navigation/navigation-menu.vue:62` itemActiveBgColor 的默认值<br>`src/components/navigation/navigation-menu.vue:140` themeVals 列表里的颜色 |
| #ACB9D1 | 2 | 无同色 | #ACB9D1 | `src/components/navigation/navigation-menu.vue:74` itemDefaultColor 的默认值<br>`src/components/navigation/navigation-menu.vue:158` themeVals 列表里的颜色 |
| #DCDEE5 | 2 | 等于 Neutral-05 | #dcdee5、#DCDEE5 | `src/components/navigation/navigation.vue:58` 右边框<br>`src/ui/navigation.css:148` .bk-navigation-wrapper .navigation-container .container-header · 边框 |
| #F5F7FA | 2 | 等于 Neutral-08 | #F5F7FA | `src/components/navigation/navigation-menu.vue:182` themeVals 列表里的颜色<br>`src/ui/navigation.css:168` .bk-navigation-wrapper .navigation-container .container-content · 背景 |
| #263247 | 1 | 无同色 | rgba(38, 50, 71, 1) | `src/ui/navigation.css:119` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon.is-left:hover · 背景 |
| #313238 | 1 | 等于 Neutral-01 | #313238 | `src/ui/navigation.css:157` .bk-navigation-wrapper .navigation-container .container-header-title · 文字 |
| #4070CB / 6% | 1 | 无同色 | rgba(64, 112, 203, 0.06) | `src/ui/navigation.css:147` .bk-navigation-wrapper .navigation-container .container-header · 阴影 |
| #979BA5 | 1 | 等于 Neutral-03 | #979BA5 | `src/components/navigation/navigation-menu.vue:188` themeVals 列表里的颜色 |
| #B0BDD5 | 1 | 无同色 | #B0BDD5 | `src/components/navigation/navigation-menu.vue:164` themeVals 列表里的颜色 |
| #DEE0EA | 1 | 无同色 | rgba(222, 224, 234, 1) | `src/ui/navigation.css:125` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon:hover · 背景 |
| #E1ECFF | 1 | 等于 Brand-06 | #E1ECFF | `src/components/navigation/navigation-menu.vue:140` themeVals 列表里的颜色 |
| #EAEBF0 | 1 | 等于 Neutral-06 | #EAEBF0 | `src/components/navigation/navigation-menu.vue:128` themeVals 列表里的颜色 |
| #EAECF2 | 1 | 无同色 | rgba(234, 236, 242, 1) | `src/ui/navigation.css:125` .bk-navigation-wrapper .navigation-nav .nav-slider-footer .footer-icon:hover · 背景 |
| #F0F1F5 | 1 | 等于 Neutral-07 | #F0F1F5 | `src/ui/mixins/create-menu-item.css:71` .$(name)[group].group-theme:after · 背景 |
| #FFFFFF / 5% | 1 | 等于 Neutral-10 | rgba(255, 255, 255, 0.05) | `src/ui/navigation.css:13` .bk-navigation-title · 边框 |
| #FFFFFF / 6% | 1 | 等于 Neutral-10 | rgba(255, 255, 255, 0.06) | `src/ui/mixins/create-menu-item.css:64` .$(name)[group]:after · 背景 |

### navigation-menu-item

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #C4C6CC | 2 | 等于 Neutral-04 | #C4C6CC、#c4c6cc | `src/ui/navigation-menu-item.css:3` navigationItem 默认参数 · 文字<br>`src/ui/navigation-menu-item.css:12` .navigation-sbmenu · 文字 |
| #63656E | 1 | 无同色 | #63656e | `src/ui/navigation-menu-item.css:45` .navigation-sbmenu-content · navigationItem navigation-menu-item · 文字 |
| #8F929B | 1 | 无同色 | #8f929b | `src/ui/navigation-menu-item.css:45` .navigation-sbmenu-content · navigationItem navigation-menu-item · 文字 |
| #FFFFFF / 5% | 1 | 等于 Neutral-10 | rgba(255, 255, 255, 0.05) | `src/ui/navigation-menu-item.css:56` .navigation-sbmenu[group]:after · 背景 |

### navigation-menu-group

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #66748F | 2 | 无同色 | #66748F、#66748f | `src/ui/navigation-menu-group.css:7` .bk-navigation-menu-group · 文字<br>`src/ui/navigation-menu-group.css:10` .bk-navigation-menu-group .group-name-wrap · 文字 |

## 取色器色带和推荐色

取色器自己的色带、推荐色、白色兜底，不用匹配进主题变量。

共 20 条，出现 25 处。

### color-picker

| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |
| --- | --- | --- | --- | --- |
| #FFFFFF | 5 | 等于 Neutral-10 | #FFF、#FFFFFF、#fff、#ffffff | `src/components/color-picker/color-picker.vue:44` style<br>`src/components/color-picker/color-picker.vue:91` whiteColorObj<br>`src/components/color-picker/components/recommend-colors.vue:37` style<br>`src/components/color-picker/components/recommend-colors.vue:147` 颜色<br>`src/components/color-picker/utils.js:41` colorParam |
| #000000 | 2 | 纯黑，第一层没有这支色 | #000、#000000 | `src/components/color-picker/components/recommend-colors.vue:144` 颜色<br>`src/ui/color-picker.css:123` .bk-color-picker-saturation .bk-color-picker-saturation-black · 背景 |
| #0000FF | 1 | 无同色 | #00f | `src/ui/color-picker.css:139` .bk-color-picker-hue · 背景 |
| #00CED1 | 1 | 无同色 | #00ced1 | `src/components/color-picker/components/recommend-colors.vue:140` 颜色 |
| #00FF00 | 1 | 无同色 | #0f0 | `src/ui/color-picker.css:139` .bk-color-picker-hue · 背景 |
| #00FFFF | 1 | 无同色 | #0ff | `src/ui/color-picker.css:139` .bk-color-picker-hue · 背景 |
| #3A84FF | 1 | 等于 Brand-02 | #3a84ff | `src/components/color-picker/components/recommend-colors.vue:141` 颜色 |
| #494949 | 1 | 无同色 | #494949 | `src/components/color-picker/components/recommend-colors.vue:145` 颜色 |
| #90EE90 | 1 | 无同色 | #90ee90 | `src/components/color-picker/components/recommend-colors.vue:138` 颜色 |
| #9B9B9B | 1 | 无同色 | #9B9B9B | `src/components/color-picker/components/recommend-colors.vue:146` 颜色 |
| #A933F5 | 1 | 无同色 | #a933f5 | `src/components/color-picker/components/recommend-colors.vue:142` 颜色 |
| #DB7093 | 1 | 无同色 | #db7093 | `src/components/color-picker/components/recommend-colors.vue:143` 颜色 |
| #DDFFFF | 1 | 无同色 | #ddffff | `src/components/color-picker/components/recommend-colors.vue:139` 颜色 |
| #FF0000 | 1 | 无同色 | red | `src/ui/color-picker.css:139` .bk-color-picker-hue · 背景 |
| #FF00FF | 1 | 无同色 | #f0f | `src/ui/color-picker.css:139` .bk-color-picker-hue · 背景 |
| #FF4500 | 1 | 无同色 | #ff4500 | `src/components/color-picker/components/recommend-colors.vue:135` 颜色 |
| #FF8C00 | 1 | 无同色 | #ff8c00 | `src/components/color-picker/components/recommend-colors.vue:136` 颜色 |
| #FFD700 | 1 | 无同色 | #ffd700 | `src/components/color-picker/components/recommend-colors.vue:137` 颜色 |
| #FFFF00 | 1 | 无同色 | #ff0 | `src/ui/color-picker.css:139` .bk-color-picker-hue · 背景 |
| #FFFFFF / 0% | 1 | 等于 Neutral-10，全透明 | hsla(0, 0%, 100%, 0) | `src/ui/color-picker.css:120` .bk-color-picker-saturation .bk-color-picker-saturation-white · 背景 |

