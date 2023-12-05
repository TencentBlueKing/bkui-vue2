<template>
  <section>
    <h2>
      <i href="javascript:void(0)" class="back-icon bk-icon icon-arrows-left" @click="back"></i>
      Tooltips 工具提示 （指令实现）更多示例
    </h2>
    <div class="example-item">
      <a class="bk-text-danger f14" v-bk-tooltips="config">长内容</a>
    </div>
    <!-- <div class="example-item">
      <bk-button disabled v-bk-tooltips="'禁用提示'">
        删除
      </bk-button>
    </div> -->
    <div class="example-item">
      <bk-button
        v-bk-tooltips="{ content: '*', allowHTML: false }">
        allowHTML - false
      </bk-button>
    </div>
    <div class="example-item">
      <bk-button
        v-bk-tooltips="{ content: '<div style=\'color: red\'>asdasd</div>', allowHTML: true }">
        allowHTML - true
      </bk-button>
    </div>
    <div class="example-item">
      <bk-button
        v-bk-tooltips="{ content: '<div style=\'color: red\'>asdasd</div>', allowHTML: true, html: '<div style=\'color: green\'>配置了 html 属性，content、allowHTML 均不会生效</div>' }">
        html 配置优先级最高
      </bk-button>
    </div>
    <div class="example-item">
      <bk-button
        v-bk-tooltips="{ content: '#aaaccc', allowHTML: true, theme: 'light' }">
        content 为 DOM Selector
      </bk-button>
    </div>

    <div id="aaaccc">
      <p style="height: 20px; background-color: #ffe8c3; color: #3a84ff">我是 div</p>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import { bkTooltips, bkButton } from '@'

Vue.use(bkTooltips)

export default {
  components: {
    bkButton
  },
  data () {
    return {
      config: {
        allowHTML: true,
        // content: '提示信息',
        // showOnInit: true,
        // placements: ['left']
        content: 'light 主题',
        // html: '<div style="color:red">12312</div>',
        theme: 'light',
        onShow: this.onShow,
        onShown: this.onShown,
        onHide: this.onClose,
        // allowHtml: true,
        width: 240,
        offset: 1000,
        placement: 'auto-start'
      }
    }
  },
  methods: {
    back () {
      window.history.go(-1)
    },
    onShow () {
      this.$bkMessage({
        theme: 'success',
        message: 'onShow'
      })
    },
    onShown () {
      this.$bkMessage({
        theme: 'success',
        message: 'onShown'
      })
    },
    onClose () {
      this.$bkMessage({
        theme: 'error',
        message: 'onClose'
      })
    }
  }
}
</script>
