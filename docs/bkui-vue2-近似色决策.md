# 对不上的颜色：填法决策

组件代码已经按这份决定改过。导航三块没有改。

判断顺序：

1. Figma 按钮、导航上读到的文字色：标准文字是 Neutral-2 `#4D4F56`，不是代码里的 `#63656E`。
2. 色差 ΔE ≤ 12 的，填最近的第一层色。
3. 旧的成功 / 警告 / 危险 / 主色整档，即使色差更大，也按 Figma 的档位换。否则主色换了、hover 还停在旧色。
4. 导航组件整份不接入：`navigation`、`navigation-menu-group`、`navigation-menu-item` 维持现在的写死色值，不引用第一层。同一色值在其他组件里可以照常填。
5. 取色器的纯色色板不填。带透明度、阴影、`darken()`、`color()` 不填。

样式实色 150 个里，填 91 个，不填 59 个。不填的都是特例（导航、取色器、透明色、色差过大），先维持写死，不再补变量。

填上之后，组件变量会引用第一层。第一层已经存在，所以这些颜色会变成第一层的色值，不再保持旧色。默认值仍写旧色，只在第一层变量缺失时兜底。

## 填上的颜色

| 当前色 | 次数 | 填成 | 第一层色值 | 色差 | 原因 |
| --- | --- | --- | --- | --- | --- |
| #63656E | 103 | --bk-color-neutral-02 | #4D4F56 | 9.3 | 最近的第一层色，色差 ΔE 9.3 |
| #2DCB56 | 60 | --bk-color-success-02 | #2CAF5E | 20.3 | 旧成功主色。和 Success-2 不是像素近似，但 Figma 成功主色只有这一档。色差 ΔE 20.3 |
| #FF9C01 | 44 | --bk-color-warning-02 | #F59500 | 3.7 | 最近的第一层色，色差 ΔE 3.7 |
| #3C96FF | 18 | --bk-color-brand-02 | #3A84FF | 14.2 | 旧主色。像素更接近 Brand-3，但 Figma 主色和聚焦色是 Brand-2。色差 ΔE 14.2 |
| #C3CDD7 | 15 | --bk-color-neutral-04 | #C4C6CC | 4.0 | 最近的第一层色，色差 ΔE 4.0 |
| #FFB848 | 11 | --bk-color-warning-03 | #F8B64F | 4.8 | 最近的第一层色，色差 ΔE 4.8 |
| #EB9000 | 10 | --bk-color-warning-01 | #E38B02 | 3.1 | 最近的第一层色，色差 ΔE 3.1 |
| #1AB943 | 9 | --bk-color-success-01 | #299E56 | 25.1 | 旧成功按压。按 Figma 的按压档换，色差大。色差 ΔE 25.1 |
| #2761DD | 9 | --bk-color-brand-01 | #1768EF | 6.4 | 最近的第一层色，色差 ΔE 6.4 |
| #DB2626 | 9 | --bk-color-danger-01 | #E71818 | 10.4 | 旧危险按压。像素更接近 Danger-2，按 Figma 按压档换到 Danger-1。色差 ΔE 10.4 |
| #EAF3FF | 9 | --bk-color-brand-07 | #F0F5FF | 1.9 | 最近的第一层色，色差 ΔE 1.9 |
| #F4F6FA | 9 | --bk-color-neutral-08 | #F5F7FA | 0.6 | 最近的第一层色，色差 ΔE 0.6 |
| #FAFAFA | 8 | --bk-color-neutral-09 | #FAFBFD | 1.1 | 最近的第一层色，色差 ΔE 1.1 |
| #333333 | 7 | --bk-color-neutral-01 | #313238 | 4.1 | 最近的第一层色，色差 ΔE 4.1 |
| #88C3FF | 6 | --bk-color-brand-04 | #A3C5FD | 7.0 | 最近的第一层色，色差 ΔE 7.0 |
| #D8D8D8 | 6 | --bk-color-neutral-05 | #DCDEE5 | 4.3 | 最近的第一层色，色差 ΔE 4.3 |
| #0082FF | 5 | --bk-color-brand-02 | #3A84FF | 3.4 | 最近的第一层色，色差 ΔE 3.4 |
| #DFE0E5 | 5 | --bk-color-neutral-05 | #DCDEE5 | 1.3 | 最近的第一层色，色差 ΔE 1.3 |
| #999999 | 4 | --bk-color-neutral-03 | #979BA5 | 5.8 | 最近的第一层色，色差 ΔE 5.8 |
| #DDE4EB | 4 | --bk-color-neutral-05 | #DCDEE5 | 2.5 | 最近的第一层色，色差 ΔE 2.5 |
| #E6E9EA | 4 | --bk-color-neutral-06 | #EAEBF0 | 2.4 | 最近的第一层色，色差 ΔE 2.4 |
| #FFB400 | 4 | --bk-color-warning-02 | #F59500 | 15.8 | 旧橙色，略超出近似阈值，仍按 Warn-2 换。色差 ΔE 15.8 |
| #39424E | 3 | --bk-color-neutral-02 | #4D4F56 | 7.4 | 最近的第一层色，色差 ΔE 7.4 |
| #45E35F | 3 | --bk-color-success-03 | #65C389 | 41.3 | 旧成功 hover。按 Figma 的 hover 档换，色差大。色差 ΔE 41.3 |
| #94F5A4 | 3 | --bk-color-success-04 | #A1E3BA | 23.5 | 旧成功描边。按 Figma 的强描边档换，色差大。色差 ΔE 23.5 |
| #C0C4CC | 3 | --bk-color-neutral-04 | #C4C6CC | 1.5 | 最近的第一层色，色差 ΔE 1.5 |
| #EA3536 | 3 | --bk-color-danger-02 | #EA3636 | 0.3 | 最近的第一层色，色差 ΔE 0.3 |
| #ECF5FF | 3 | --bk-color-brand-07 | #F0F5FF | 1.4 | 最近的第一层色，色差 ΔE 1.4 |
| #EEEEEE | 3 | --bk-color-neutral-07 | #F0F1F5 | 2.3 | 最近的第一层色，色差 ΔE 2.3 |
| #F0F8FF | 3 | --bk-color-brand-07 | #F0F5FF | 2.0 | 最近的第一层色，色差 ΔE 2.0 |
| #14A568 | 2 | --bk-color-success-01 | #299E56 | 7.3 | 最近的第一层色，色差 ΔE 7.3 |
| #26323D | 2 | --bk-color-neutral-01 | #313238 | 5.5 | 最近的第一层色，色差 ΔE 5.5 |
| #44E360 | 2 | --bk-color-success-03 | #65C389 | 41.0 | 链接的成功 hover，跟旧成功 hover 同一档。色差 ΔE 41.0 |
| #C5C7D1 | 2 | --bk-color-neutral-04 | #C4C6CC | 2.2 | 最近的第一层色，色差 ΔE 2.2 |
| #F0F2F5 | 2 | --bk-color-neutral-07 | #F0F1F5 | 0.7 | 最近的第一层色，色差 ΔE 0.7 |
| #F2FFF4 | 2 | --bk-color-success-07 | #EBFAF0 | 2.0 | 最近的第一层色，色差 ΔE 2.0 |
| #FD9C9C | 2 | --bk-color-danger-04 | #F8B4B4 | 13.8 | 旧危险描边，略超出近似阈值，仍按 Danger-4 换。色差 ΔE 13.8 |
| #FE5657 | 2 | --bk-color-danger-03 | #FF5656 | 0.8 | 最近的第一层色，色差 ΔE 0.8 |
| #FE9C00 | 2 | --bk-color-warning-02 | #F59500 | 3.5 | 最近的第一层色，色差 ΔE 3.5 |
| #FFB849 | 2 | --bk-color-warning-03 | #F8B64F | 4.5 | 最近的第一层色，色差 ΔE 4.5 |
| #FFD695 | 2 | --bk-color-warning-04 | #F9D090 | 2.1 | 最近的第一层色，色差 ΔE 2.1 |
| #FFE8C3 | 2 | --bk-color-warning-05 | #FCE5C0 | 1.1 | 最近的第一层色，色差 ΔE 1.1 |
| #FFEDED | 2 | --bk-color-danger-06 | #FFEBEB | 0.9 | 最近的第一层色，色差 ΔE 0.9 |
| #FFF4E2 | 2 | --bk-color-warning-07 | #FDF4E8 | 3.2 | 最近的第一层色，色差 ΔE 3.2 |
| #00C873 | 1 | --bk-color-success-02 | #2CAF5E | 11.5 | 最近的第一层色，色差 ΔE 11.5 |
| #1BB943 | 1 | --bk-color-success-01 | #299E56 | 25.1 | 和旧成功按压几乎同一个色。色差 ΔE 25.1 |
| #1D1D1D | 1 | --bk-color-neutral-01 | #313238 | 10.9 | 最近的第一层色，色差 ΔE 10.9 |
| #212121 | 1 | --bk-color-neutral-01 | #313238 | 9.1 | 最近的第一层色，色差 ΔE 9.1 |
| #292929 | 1 | --bk-color-neutral-01 | #313238 | 5.9 | 最近的第一层色，色差 ΔE 5.9 |
| #2D8CF0 | 1 | --bk-color-brand-03 | #699DF4 | 11.5 | 最近的第一层色，色差 ΔE 11.5 |
| #34383E | 1 | --bk-color-neutral-01 | #313238 | 2.8 | 最近的第一层色，色差 ΔE 2.8 |
| #3785FF | 1 | --bk-color-brand-02 | #3A84FF | 1.0 | 最近的第一层色，色差 ΔE 1.0 |
| #3A3C42 | 1 | --bk-color-neutral-01 | #313238 | 4.5 | 最近的第一层色，色差 ΔE 4.5 |
| #3F4046 | 1 | --bk-color-neutral-01 | #313238 | 6.3 | 最近的第一层色，色差 ΔE 6.3 |
| #3FC06D | 1 | --bk-color-success-02 | #2CAF5E | 6.1 | 最近的第一层色，色差 ΔE 6.1 |
| #575961 | 1 | --bk-color-neutral-02 | #4D4F56 | 4.3 | 最近的第一层色，色差 ΔE 4.3 |
| #57A3F1 | 1 | --bk-color-brand-03 | #699DF4 | 8.2 | 最近的第一层色，色差 ΔE 8.2 |
| #666666 | 1 | --bk-color-neutral-02 | #4D4F56 | 10.5 | 最近的第一层色，色差 ΔE 10.5 |
| #7AB9FA | 1 | --bk-color-brand-04 | #A3C5FD | 10.1 | 最近的第一层色，色差 ΔE 10.1 |
| #8F8F89 | 1 | --bk-color-neutral-03 | #979BA5 | 10.2 | 最近的第一层色，色差 ΔE 10.2 |
| #8F929B | 1 | --bk-color-neutral-03 | #979BA5 | 3.4 | 最近的第一层色，色差 ΔE 3.4 |
| #989DAB | 1 | --bk-color-neutral-03 | #979BA5 | 2.4 | 最近的第一层色，色差 ΔE 2.4 |
| #9B9B9B | 1 | --bk-color-neutral-03 | #979BA5 | 5.7 | 最近的第一层色，色差 ΔE 5.7 |
| #9FA3AE | 1 | --bk-color-neutral-03 | #979BA5 | 3.1 | 最近的第一层色，色差 ΔE 3.1 |
| #A0A0A0 | 1 | --bk-color-neutral-03 | #979BA5 | 6.1 | 最近的第一层色，色差 ΔE 6.1 |
| #C5DAFF | 1 | --bk-color-brand-05 | #CDDFFE | 3.8 | 最近的第一层色，色差 ΔE 3.8 |
| #DA2726 | 1 | --bk-color-danger-01 | #E71818 | 10.8 | 和旧危险按压几乎同一个色。色差 ΔE 10.8 |
| #DCFFE2 | 1 | --bk-color-success-05 | #CBF0DA | 6.3 | 最近的第一层色，色差 ΔE 6.3 |
| #DDDDDD | 1 | --bk-color-neutral-05 | #DCDEE5 | 3.7 | 最近的第一层色，色差 ΔE 3.7 |
| #DDFFDD | 1 | --bk-color-success-05 | #CBF0DA | 7.9 | 最近的第一层色，色差 ΔE 7.9 |
| #DEE0EA | 1 | --bk-color-neutral-05 | #DCDEE5 | 1.7 | 最近的第一层色，色差 ΔE 1.7 |
| #DFDFDF | 1 | --bk-color-neutral-05 | #DCDEE5 | 3.7 | 最近的第一层色，色差 ΔE 3.7 |
| #E1E1E8 | 1 | --bk-color-neutral-05 | #DCDEE5 | 1.4 | 最近的第一层色，色差 ΔE 1.4 |
| #E5F6EA | 1 | --bk-color-success-07 | #EBFAF0 | 2.0 | 最近的第一层色，色差 ΔE 2.0 |
| #E6E6E6 | 1 | --bk-color-neutral-06 | #EAEBF0 | 3.2 | 最近的第一层色，色差 ΔE 3.2 |
| #E8EAEC | 1 | --bk-color-neutral-06 | #EAEBF0 | 1.7 | 最近的第一层色，色差 ΔE 1.7 |
| #EAECF2 | 1 | --bk-color-neutral-06 | #EAEBF0 | 0.7 | 最近的第一层色，色差 ΔE 0.7 |
| #EEF6FE | 1 | --bk-color-brand-07 | #F0F5FF | 1.5 | 最近的第一层色，色差 ΔE 1.5 |
| #F1F7FF | 1 | --bk-color-brand-07 | #F0F5FF | 1.2 | 最近的第一层色，色差 ΔE 1.2 |
| #F2F4F8 | 1 | --bk-color-neutral-07 | #F0F1F5 | 1.0 | 最近的第一层色，色差 ΔE 1.0 |
| #F6F6F6 | 1 | --bk-color-neutral-08 | #F5F7FA | 1.7 | 最近的第一层色，色差 ΔE 1.7 |
| #F72239 | 1 | --bk-color-danger-02 | #EA3636 | 8.3 | 最近的第一层色，色差 ΔE 8.3 |
| #F7F7F7 | 1 | --bk-color-neutral-08 | #F5F7FA | 1.7 | 最近的第一层色，色差 ΔE 1.7 |
| #FAF9FD | 1 | --bk-color-neutral-09 | #FAFBFD | 1.3 | 最近的第一层色，色差 ΔE 1.3 |
| #FD6154 | 1 | --bk-color-danger-03 | #FF5656 | 6.0 | 最近的第一层色，色差 ΔE 6.0 |
| #FF4D51 | 1 | --bk-color-danger-03 | #FF5656 | 3.6 | 最近的第一层色，色差 ΔE 3.6 |
| #FF9600 | 1 | --bk-color-warning-02 | #F59500 | 4.2 | 最近的第一层色，色差 ΔE 4.2 |
| #FFB726 | 1 | --bk-color-warning-03 | #F8B64F | 15.8 | 加载里的橙色，略超出近似阈值，仍按 Warn-3 换。色差 ΔE 15.8 |
| #FFD2D2 | 1 | --bk-color-danger-05 | #FFDDDD | 5.2 | 最近的第一层色，色差 ΔE 5.2 |
| #FFDFAC | 1 | --bk-color-warning-05 | #FCE5C0 | 8.5 | 最近的第一层色，色差 ΔE 8.5 |
| #FFF4F4 | 1 | --bk-color-danger-07 | #FFF0F0 | 1.8 | 最近的第一层色，色差 ΔE 1.8 |

## 不填的颜色

| 当前色 | 次数 | 组件 | 原因 |
| --- | --- | --- | --- |
| rgba(0, 0, 0, 0.6) | 6 | dialog、image-viewer、upload、zoom-image | 带透明度或颜色函数，第一层只有实色 |
| #30D878 | 4 | loading、timeline | 最近的是 success-02 #2CAF5E，色差 ΔE 17.0，超出近似范围 |
| #40C024 | 3 | timeline | 最近的是 success-02 #2CAF5E，色差 ΔE 32.0，超出近似范围 |
| #96A2B9 | 3 | navigation | Figma 导航专色 Navigation/文字-Nomal，第一层没有这支色 |
| rgba(121, 121, 121, 0.4) | 3 | virtual-scroll | 带透明度或颜色函数，第一层只有实色 |
| rgba(234, 243, 255, 0.7) | 3 | search-select-menu | 带透明度或颜色函数，第一层只有实色 |
| #66748F | 2 | navigation-menu-group | 导航分组字，和 Neutral-3 差得比较远 |
| #8F3AFF | 2 | diff | 最近的是 brand-01 #1768EF，色差 ΔE 44.3，超出近似范围 |
| #FF0000 | 2 | color-picker | 取色器色板，不进主题变量 |
| rgba(0, 0, 0, 0.4) | 2 | image-viewer | 带透明度或颜色函数，第一层只有实色 |
| rgba(255, 255, 255, 0.05) | 2 | navigation、navigation-menu-item | 带透明度或颜色函数，第一层只有实色 |
| rgba(255, 255, 255, 0.06) | 2 | navigation-menu-item | 带透明度或颜色函数，第一层只有实色 |
| rgba(255, 255, 255, 0.9) | 2 | loading | 带透明度或颜色函数，第一层只有实色 |
| #000000 | 1 | color-picker | 纯黑。第一层没有这支色，而且它出现在取色器 |
| #0000FF | 1 | color-picker | 取色器色板，不进主题变量 |
| #00FF00 | 1 | color-picker | 取色器色板，不进主题变量 |
| #00FFFF | 1 | color-picker | 取色器色板，不进主题变量 |
| #144212 | 1 | diff | 最近的是 neutral-01 #313238，色差 ΔE 39.4，超出近似范围 |
| #14A568 / 10% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #14A568 / 30% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #253047 | 1 | navigation | 导航深色底，不是中性灰 |
| #263247 | 1 | navigation | 导航深色底，不是中性灰 |
| #2D3324 | 1 | diff | 最近的是 neutral-01 #313238，色差 ΔE 14.4，超出近似范围 |
| #2DCB9D | 1 | message | 2026-11-05 指定改用 Success-02。代码已接到 `--bk-message-success-success-02`，显示变成 #2CAF5E |
| #3A84FF / 10% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #3A84FF / 30% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #422321 | 1 | diff | 最近的是 neutral-01 #313238，色差 ΔE 18.1，超出近似范围 |
| #4CD084 | 1 | loading | 最近的是 success-02 #2CAF5E，色差 ΔE 12.5，超出近似范围 |
| #4EC9B0 | 1 | diff | 最近的是 success-03 #65C389，色差 ΔE 18.5，超出近似范围 |
| #569CD6 | 1 | diff | 最近的是 brand-03 #699DF4，色差 ΔE 18.1，超出近似范围 |
| #608B4E | 1 | diff | 最近的是 success-01 #299E56，色差 ΔE 22.0，超出近似范围 |
| #660000 | 1 | diff | 最近的是 danger-02 #EA3636，色差 ΔE 44.4，超出近似范围 |
| #979BA5 / 10% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #979BA5 / 15% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #9A5334 | 1 | diff | 最近的是 danger-03 #FF5656，色差 ΔE 41.3，超出近似范围 |
| #B8D7A3 | 1 | diff | 最近的是 success-04 #A1E3BA，色差 ΔE 13.2，超出近似范围 |
| #BD63C5 | 1 | diff | 最近的是 brand-02 #3A84FF，色差 ΔE 44.4，超出近似范围 |
| #D3D9E4 | 1 | navigation | 导航文字色，贴近线条灰但不是文本色 |
| #DCDEE5 / 60% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #DD1144 | 1 | version-detail | 最近的是 danger-02 #EA3636，色差 ΔE 16.2，超出近似范围 |
| #EA3536 / 10% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #EA3536 / 30% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #FE9C00 / 10% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #FE9C00 / 30% | 1 | tag | 带透明度或颜色函数，第一层只有实色 |
| #FF00FF | 1 | color-picker | 取色器色板，不进主题变量 |
| #FFFF00 | 1 | color-picker | 取色器色板，不进主题变量 |
| darken(#63656E, 10%) | 1 | button | 带透明度或颜色函数，第一层只有实色 |
| rgba(0, 0, 0, 0.1) | 1 | version-detail | 带透明度或颜色函数，第一层只有实色 |
| rgba(0, 0, 0, 0.15) | 1 | version-detail | 带透明度或颜色函数，第一层只有实色 |
| rgba(0, 0, 0, 0.3) | 1 | image-viewer | 带透明度或颜色函数，第一层只有实色 |
| rgba(0, 0, 0, 0.5) | 1 | image-viewer | 带透明度或颜色函数，第一层只有实色 |
| rgba(0, 0, 0, 0.7) | 1 | image-viewer | 带透明度或颜色函数，第一层只有实色 |
| rgba(0, 0, 0, 0.8) | 1 | popover | 带透明度或颜色函数，第一层只有实色 |
| rgba(121, 121, 121, 0.5) | 1 | virtual-scroll | 带透明度或颜色函数，第一层只有实色 |
| rgba(121, 121, 121, 0.55) | 1 | virtual-scroll | 带透明度或颜色函数，第一层只有实色 |
| rgba(186, 188, 192, 0.2) | 1 | message | 带透明度或颜色函数，第一层只有实色 |
| rgba(254, 221, 220, 0.4) | 1 | upload | 带透明度或颜色函数，第一层只有实色 |
| rgba(31, 45, 61, 0.4) | 1 | swiper | 带透明度或颜色函数，第一层只有实色 |
| rgba(31, 45, 61, 0.6) | 1 | swiper | 带透明度或颜色函数，第一层只有实色 |
