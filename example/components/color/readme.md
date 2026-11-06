[[toc]]

## Color 色彩

`bk-magic-vue` 使用以下调色板的颜色作为开发与设计规范，为构建的产品提供一致的外观视觉感受。颜色主要分为主色、辅助色、中性色三部分，主色部分为蓝鲸系列产品使用的主题色；而辅助色主要适用于状态类标识，也会用到个别需要特殊处理的元素；中性色主要使用在文字、边框、线条、背景等等。

### 主色 {page=#/color}
产品主色，蓝色代表严谨、理性和科技。色块背景使用第一层变量，改变量后色块会跟着变。

<div class="color-scale">
    <div class="color-scale-list">
        <div class="color-chip is-light" style="background-color: var(--bk-color-brand-01);"><span class="chip-level">01 按压</span><span class="chip-var"><span>--bk-color-</span><span>brand-01</span></span><span class="chip-hex">#1768EF</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-brand-02);"><span class="chip-level">02 主色</span><span class="chip-var"><span>--bk-color-</span><span>brand-02</span></span><span class="chip-hex">#3A84FF</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-brand-03);"><span class="chip-level">03 悬浮</span><span class="chip-var"><span>--bk-color-</span><span>brand-03</span></span><span class="chip-hex">#699DF4</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-brand-04);"><span class="chip-level">04 强描边</span><span class="chip-var"><span>--bk-color-</span><span>brand-04</span></span><span class="chip-hex">#A3C5FD</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-brand-05);"><span class="chip-level">05 弱描边</span><span class="chip-var"><span>--bk-color-</span><span>brand-05</span></span><span class="chip-hex">#CDDFFE</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-brand-06);"><span class="chip-level">06 标签底</span><span class="chip-var"><span>--bk-color-</span><span>brand-06</span></span><span class="chip-hex">#E1ECFF</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-brand-07);"><span class="chip-level">07 提示底</span><span class="chip-var"><span>--bk-color-</span><span>brand-07</span></span><span class="chip-hex">#F0F5FF</span></div>
    </div>
    <div class="color-tips">强调、突出、链接等</div>
</div>

### 辅助色 {page=#/color}
运维行业主要是对线上业务进行维护和检测，更为注重业务健康状况，为此使用红（危险）、橙（预警）、绿（健康）三种颜色作为辅助色。

<div class="color-scale">
    <div class="color-scale-list">
        <div class="color-chip is-light" style="background-color: var(--bk-color-danger-01);"><span class="chip-level">01 按压</span><span class="chip-var"><span>--bk-color-</span><span>danger-01</span></span><span class="chip-hex">#E71818</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-danger-02);"><span class="chip-level">02 主色</span><span class="chip-var"><span>--bk-color-</span><span>danger-02</span></span><span class="chip-hex">#EA3636</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-danger-03);"><span class="chip-level">03 悬浮</span><span class="chip-var"><span>--bk-color-</span><span>danger-03</span></span><span class="chip-hex">#FF5656</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-danger-04);"><span class="chip-level">04 强描边</span><span class="chip-var"><span>--bk-color-</span><span>danger-04</span></span><span class="chip-hex">#F8B4B4</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-danger-05);"><span class="chip-level">05 弱描边</span><span class="chip-var"><span>--bk-color-</span><span>danger-05</span></span><span class="chip-hex">#FFDDDD</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-danger-06);"><span class="chip-level">06 标签底</span><span class="chip-var"><span>--bk-color-</span><span>danger-06</span></span><span class="chip-hex">#FFEBEB</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-danger-07);"><span class="chip-level">07 提示底</span><span class="chip-var"><span>--bk-color-</span><span>danger-07</span></span><span class="chip-hex">#FFF0F0</span></div>
    </div>
    <div class="color-tips">危险、致命</div>
</div>

<div class="color-scale">
    <div class="color-scale-list">
        <div class="color-chip is-light" style="background-color: var(--bk-color-warning-01);"><span class="chip-level">01 按压</span><span class="chip-var"><span>--bk-color-</span><span>warning-01</span></span><span class="chip-hex">#E38B02</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-warning-02);"><span class="chip-level">02 主色</span><span class="chip-var"><span>--bk-color-</span><span>warning-02</span></span><span class="chip-hex">#F59500</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-warning-03);"><span class="chip-level">03 悬浮</span><span class="chip-var"><span>--bk-color-</span><span>warning-03</span></span><span class="chip-hex">#F8B64F</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-warning-04);"><span class="chip-level">04 强描边</span><span class="chip-var"><span>--bk-color-</span><span>warning-04</span></span><span class="chip-hex">#F9D090</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-warning-05);"><span class="chip-level">05 弱描边</span><span class="chip-var"><span>--bk-color-</span><span>warning-05</span></span><span class="chip-hex">#FCE5C0</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-warning-06);"><span class="chip-level">06 标签底</span><span class="chip-var"><span>--bk-color-</span><span>warning-06</span></span><span class="chip-hex">#FDEED8</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-warning-07);"><span class="chip-level">07 提示底</span><span class="chip-var"><span>--bk-color-</span><span>warning-07</span></span><span class="chip-hex">#FDF4E8</span></div>
    </div>
    <div class="color-tips">预警、提醒</div>
</div>

<div class="color-scale">
    <div class="color-scale-list">
        <div class="color-chip is-light" style="background-color: var(--bk-color-success-01);"><span class="chip-level">01 按压</span><span class="chip-var"><span>--bk-color-</span><span>success-01</span></span><span class="chip-hex">#299E56</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-success-02);"><span class="chip-level">02 主色</span><span class="chip-var"><span>--bk-color-</span><span>success-02</span></span><span class="chip-hex">#2CAF5E</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-success-03);"><span class="chip-level">03 悬浮</span><span class="chip-var"><span>--bk-color-</span><span>success-03</span></span><span class="chip-hex">#65C389</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-success-04);"><span class="chip-level">04 强描边</span><span class="chip-var"><span>--bk-color-</span><span>success-04</span></span><span class="chip-hex">#A1E3BA</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-success-05);"><span class="chip-level">05 弱描边</span><span class="chip-var"><span>--bk-color-</span><span>success-05</span></span><span class="chip-hex">#CBF0DA</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-success-06);"><span class="chip-level">06 标签底</span><span class="chip-var"><span>--bk-color-</span><span>success-06</span></span><span class="chip-hex">#DAF6E5</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-success-07);"><span class="chip-level">07 提示底</span><span class="chip-var"><span>--bk-color-</span><span>success-07</span></span><span class="chip-hex">#EBFAF0</span></div>
    </div>
    <div class="color-tips">健康、正常、完成</div>
</div>

### 中性色 {page=#/color}
在中性色的设计上加入环境色，使颜色更自然，和主题色搭配更为和谐。

<div class="color-scale">
    <div class="color-scale-list is-neutral">
        <div class="color-chip is-light" style="background-color: var(--bk-color-neutral-01);"><span class="chip-level">01 标题</span><span class="chip-var"><span>--bk-color-</span><span>neutral-01</span></span><span class="chip-hex">#313238</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-neutral-02);"><span class="chip-level">02 正文</span><span class="chip-var"><span>--bk-color-</span><span>neutral-02</span></span><span class="chip-hex">#4D4F56</span></div>
        <div class="color-chip is-light" style="background-color: var(--bk-color-neutral-03);"><span class="chip-level">03 辅助</span><span class="chip-var"><span>--bk-color-</span><span>neutral-03</span></span><span class="chip-hex">#979BA5</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-04);"><span class="chip-level">04 禁用</span><span class="chip-var"><span>--bk-color-</span><span>neutral-04</span></span><span class="chip-hex">#C4C6CC</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-05);"><span class="chip-level">05 强描边</span><span class="chip-var"><span>--bk-color-</span><span>neutral-05</span></span><span class="chip-hex">#DCDEE5</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-06);"><span class="chip-level">06 弱描边</span><span class="chip-var"><span>--bk-color-</span><span>neutral-06</span></span><span class="chip-hex">#EAEBF0</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-07);"><span class="chip-level">07 条纹底</span><span class="chip-var"><span>--bk-color-</span><span>neutral-07</span></span><span class="chip-hex">#F0F1F5</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-08);"><span class="chip-level">08 页面底</span><span class="chip-var"><span>--bk-color-</span><span>neutral-08</span></span><span class="chip-hex">#F5F7FA</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-09);"><span class="chip-level">09 弱背景</span><span class="chip-var"><span>--bk-color-</span><span>neutral-09</span></span><span class="chip-hex">#FAFBFD</span></div>
        <div class="color-chip" style="background-color: var(--bk-color-neutral-10);"><span class="chip-level">10 容器底</span><span class="chip-var"><span>--bk-color-</span><span>neutral-10</span></span><span class="chip-hex">#FFFFFF</span></div>
    </div>
    <div class="color-tips">字体、图标、边框、底色、背景</div>
</div>

### 使用规范 {page=#/color}

<div class="color-spec">
    <div>1. 重点表示、强调、链接以及带有明确指示性</div>
    <div>2. 警示灯引起注意类标识</div>
    <div>3. 次级标题、内容文字，主要文字使用颜色</div>
</div>
