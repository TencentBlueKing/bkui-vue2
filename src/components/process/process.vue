<!--
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 *
 * Terms of the MIT License:
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
-->

<template>
  <div class="bk-process" :class="extCls">
    <ul :style="{ paddingBottom: paddingBottom + 'px' }">
      <li v-for="(item, index) in dataList" :key="index"
        :style="{ cursor: controllables ? 'pointer' : '' }"
        :class="{
          success: isDone(index),
          current: (item.isLoading && isCurrent(index)) || (item.status && isCurrent(index)),
          'status-error': isErrorStatus(item),
          'status-done': isDoneStatus(item),
          'status-loading': isLoadingStatus(item),
          'status-default': isDefaultStatus(item)
        }"
        @click="toggle(item, index)">

        <div class="bk-process-item" :style="{ cursor: hasStepChangeEvent ? 'pointer' : '' }"
          @click="toggleStepItem(item, null, index)">
          {{item[displayKey]}}
          <template v-if="item.status">
            <i :class="['bk-icon', `icon-${item.statusIcon}`]" v-if="isBuiltinIcon(item.statusIcon)"></i>
            <spin-loading v-else-if="isLoadingStatus(item)" theme-class="bk-spin-loading-white" />
            <i class="bk-icon icon-close-circle" v-else-if="isErrorStatus(item)" />
            <i class="bk-icon icon-check-circle" v-else-if="isDoneStatus(item)" />
          </template>
          <template v-else>
            <spin-loading v-if="item.isLoading && isCurrent(index)" theme-class="bk-spin-loading-white" />
            <i class="bk-icon icon-check-circle" v-else-if="item.status !== false"></i>
          </template>
        </div>

        <dl class="bk-process-step" ref="stepsDom" v-show="item.steps && item.steps.length && showFlag">
          <dd v-for="(step, stepIndex) in item.steps" :key="stepIndex"
            :style="{ cursor: hasStepChangeEvent ? 'pointer' : '' }"
            @click="toggleStepItem(step, stepIndex, index)"
            :class="['step-item', { done: isDoneStatus(step), error: isErrorStatus(step), loading: isLoadingStatus(item) }]">
            <v-node-content v-if="isVNode(step[displayKey])" :content="step[displayKey]">
              <step-status-icon :icon="getStepStatusIcon(step)" />
            </v-node-content>
            <template v-else>
              {{step[displayKey]}}
              <step-status-icon v-if="step.status" :icon="getStepStatusIcon(step)" />
              <template v-else>
                <spin-loading v-if="step.isLoading && isCurrent(index)" theme-class="bk-spin-loading-primary steps-loading" />
                <i class="bk-icon icon-check-1" v-else-if="step.status !== false"></i>
              </template>
            </template>
          </dd>
        </dl>
      </li>
    </ul>
    <a href="javascript:;" class="bk-process-toggle" @click="toggleProcess" v-if="toggleFlag">
      <i class="bk-icon"
        :class="showFlag ? 'icon-angle-up' : 'icon-angle-down'"></i>
    </a>
  </div>
</template>
<script>
/**
 *  bk-process
 *  @module components/process
 *  @desc process组件
 *  @param list {Array} - process数据源
 *  @param controllable {Boolean} - 步骤可否被控制前后跳转，默认为false
 *  @param showSteps {Boolean} - 是否显示子步骤
 *  @param curProcess {Number} - 当前process的索引值，从1开始；支持.sync修饰符
 *  @param displayKey {String} - 显示字段的key值
 *  @example
    <bk-process
      :list="list"
      :cur-process.sync="process"
      :show-steps="true"
      :display-key="'content'"
      @process-changed="change"
      :controllable="true">
    </bk-process>
*/
import { isVNode } from '@/utils/dom'

export default {
  name: 'bk-process',
  components: {
    SpinLoading: {
      functional: true,
      render: (h, ctx) => (
        <div class="bk-spin-loading bk-spin-loading-mini" { ...{ class: ctx.props.themeClass } }>
          <div class="rotate rotate1"></div>
          <div class="rotate rotate2"></div>
          <div class="rotate rotate3"></div>
          <div class="rotate rotate4"></div>
          <div class="rotate rotate5"></div>
          <div class="rotate rotate6"></div>
          <div class="rotate rotate7"></div>
          <div class="rotate rotate8"></div>
        </div>
      )
    },
    VNodeContent: {
      functional: true,
      render: (h, ctx) => (
        <div class="step-item-custom">
          {ctx.props.content}
          {ctx.children}
        </div>
      )
    },
    StepStatusIcon: {
      functional: true,
      render: (h, ctx) => ctx.props.icon
    }
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    controllable: {
      type: Boolean,
      default: false
    },
    showSteps: {
      type: Boolean,
      default: false
    },
    curProcess: {
      type: Number,
      default: 0
    },
    displayKey: {
      type: String,
      required: true
    },
    // 外部设置的 class name
    extCls: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      toggleFlag: false,
      showFlag: this.showSteps,
      dataList: this.list,
      controllables: this.controllable,
      paddingBottom: 0,
      maxBottom: 0,
      stepsClientHeight: 32
    }
  },
  computed: {
    hasStepChangeEvent () {
      return !!(this.$listeners || {})['step-change']
    }
  },
  watch: {
    list: {
      handler: function (value) {
        this.initToggleFlag(value)
        this.dataList = [...value]
        this.calculateMaxBottom(value)
      },
      deep: true
    },
    curProcess (newValue, oldValue) {
      if (newValue > this.list.length + 1) {
        return
      }
      this.setParentProcessLoad(this.list)
    }
  },
  created () {
    this.setParentProcessLoad(this.list)
  },
  mounted () {
    this.initToggleFlag(this.list)
    this.calculateMaxBottom(this.list)
    if (this.showFlag) {
      this.paddingBottom = this.maxBottom
    } else {
      this.paddingBottom = 0
    }
  },
  methods: {
    /**
     * init child process 显示按钮
     *
     * @param {Array} list process 数据源
     */
    initToggleFlag (list) {
      if (!list.length) {
        this.toggleFlag = false
      } else {
        for (let i = 0; i < list.length; i++) {
          if (list[i].steps && list[i].steps.length) {
            // this.controllables = false
            this.toggleFlag = true
            break
          }
        }
      }
    },

    /**
     * parent process loading设置
     *
     * @param {Array} list process 数据源
     */
    setParentProcessLoad (list) {
      const dataList = [...list]
      const curProcess = this.curProcess - 1 || 0
      if (!dataList.length) {
        return
      }
      if (curProcess === dataList.length) {
        this.$set(dataList[curProcess - 1], 'isLoading', false)
      } else {
        for (let i = 0; i < dataList.length; i++) {
          let loadFlag = false
          if (dataList[curProcess].steps && dataList[curProcess].steps.length) {
            const steps = dataList[curProcess].steps
            loadFlag = steps.some(item => item.isLoading)
            if (loadFlag) {
              if (curProcess > 0) {
                this.$set(dataList[curProcess - 1], 'isLoading', false)
              }
              this.$set(dataList[curProcess], 'isLoading', true)
            }
          }
        }
      }
      this.list.splice(0, this.list.length, ...dataList)
    },

    /**
     * 展开/收起 child process
     */
    toggleProcess () {
      this.showFlag = !this.showFlag
      if (this.showFlag) {
        this.paddingBottom = this.maxBottom
      } else {
        this.paddingBottom = 0
      }
    },

    /**
     * 计算最大 padding-bottom
     */
    calculateMaxBottom (list) {
      const processList = [...list]
      const stepsLengthList = []
      if (!processList.length) {
        this.maxBottom = 0
        return
      }
      processList.forEach(item => {
        if (item.steps) {
          stepsLengthList.push(item.steps.length)
        }
      })
      this.maxBottom = Math.max.apply(null, stepsLengthList) * this.stepsClientHeight
    },

    /**
     * 控制步骤前后跳转
     *
     * @param {Object} index 当前process 数据
     * @param {Number} index 当前process 索引
     */
    toggle (item, index) {
      if (!this.controllables) {
        return
      }
      this.$emit('update:curProcess', index + 1)
      this.$emit('process-changed', index + 1, item)
    },
    toggleStepItem (step, stepIndex, processIndex) {
      // 点击父节点时stepIndex值为null
      this.$emit('step-change', step, stepIndex, processIndex)
    },
    isCurrent (index) {
      return this.curProcess === index + 1
    },
    isDone (index) {
      return this.curProcess >= index + 1
    },
    isBuiltinIcon (icon) {
      return typeof icon === 'string' && !!icon
    },
    isLoadingStatus (item) {
      return item.status === 'loading'
    },
    isErrorStatus (item) {
      return item.status === 'error'
    },
    isDoneStatus (item) {
      return item.status === 'done'
    },
    isDefaultStatus (item) {
      return item.status === 'default'
    },
    isVNode (content) {
      return isVNode(content)
    },
    getStepStatusIcon (step) {
      const customIcon = <i class={['bk-icon', `icon-${step.statusIcon}`]}></i>
      const loadingIcon = <spin-loading theme-class="bk-spin-loading-primary steps-loading" />
      const errorIcon = <i class="bk-icon icon-close error" />
      const doneIcon = <i class="bk-icon icon-check-1 done" />
      if (this.isBuiltinIcon(step.statusIcon)) return customIcon
      if (this.isLoadingStatus(step)) return loadingIcon
      if (this.isErrorStatus(step)) return errorIcon
      if (this.isDoneStatus(step)) return doneIcon
    }
  }
}
</script>
<style>
  @import '../../ui/process.css';
</style>
