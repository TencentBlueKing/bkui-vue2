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
  <li class="bk-option"
    :class="{
      'is-selected': isSelected,
      'is-disabled': disabled,
      'is-highlight': isHighlight
    }"
    v-show="!unmatched"
    @click="handleOptionClick">
    <div class="bk-option-content">
      <slot>
        <div class="bk-option-content-default" :title="name">
          <template v-if="selectedStyle === 'checkbox' && select.multiple">
            <bk-checkbox :value="isSelected">{{name}}</bk-checkbox>
          </template>
          <template v-else>
            <i class="bk-option-icon bk-icon icon-check-1" v-if="select.multiple && isSelected"></i>
            <span class="bk-option-name" :class="select.fontSizeCls">
              {{name}}
            </span>
          </template>
        </div>
      </slot>
    </div>
  </li>
</template>

<script>
import BkCheckbox from '@/components/checkbox'
export default {
  name: 'bk-option',
  components: {
    'bk-checkbox': BkCheckbox
  },
  props: {
    id: {
      type: [String, Number],
      required: true
    },
    name: {
      type: [String, Number],
      required: true
    },
    disabled: Boolean
  },
  inject: ['select', 'optionGroup'],
  data () {
    return {
      unmatched: false,
      isHighlight: false // todo: 解决性能问题，暂时关闭键盘上下键选择的功能
    }
  },
  computed: {
    isSelected () {
      if (this.select.multiple && Array.isArray(this.select.selected)) {
        return this.select.selected.includes(this.id)
      }
      return this.select.selected === this.id
    },
    lowerName () {
      return String(this.name).toLowerCase()
    },
    selectedStyle () {
      return this.select.selectedStyle
    }
  },
  created () {
    this.select.registerOption(this)
    if (this.optionGroup) {
      this.optionGroup.registerOption(this)
    }
  },
  beforeDestroy () {
    this.select.removeOption(this)
    if (this.optionGroup) {
      this.optionGroup.removeOption(this)
    }
  },
  methods: {
    handleOptionClick () {
      if (this.disabled) {
        return false
      }
      const select = this.select
      if (this.isSelected && select.multiple) {
        select.unselectOption(this)
      } else if (!this.isSelected) {
        select.selectOption(this)
      }
      if (!select.multiple) {
        select.close()
      }
    }
  }
}
</script>
