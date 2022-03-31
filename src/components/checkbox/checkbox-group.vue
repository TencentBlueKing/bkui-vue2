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
  <div class="bk-form-control" :name="name">
    <slot></slot>
  </div>
</template>

<script>
/**
 * bk-checkbox-group
 * @module components/checkbox
 * @desc 单选框组合
 * @param name {String} - 名称
 * @example
    <bk-checkbox
        value="demo"
        v-model="value">
    </bk-checkbox>
  */
import { getGroupName } from './checkbox-name.js'

export default {
  name: 'bk-checkbox-group',
  provide () {
    return {
      handleAddItem: this.handleAddItem,
      handleRemoveItem: this.handleRemoveItem
    }
  },
  props: {
    value: {
      type: Array,
      default () {
        return []
      }
    },
    name: {
      type: [String, Number],
      default () {
        return getGroupName()
      }
    }
  },
  data () {
    return {
      checkboxItems: [],
      isCheckboxGroup: true,
      localValue: [...this.value]
    }
  },
  watch: {
    value (value) {
      this.localValue = [...value]
    }
  },
  methods: {
    handleAddItem (item) {
      if (!item || this.checkboxItems.includes(item)) return

      this.checkboxItems.push(item)
    },
    handleRemoveItem (item) {
      const index = this.checkboxItems.indexOf(item)
      if (index > -1) {
        this.checkboxItems.splice(index, 1)
      }
    },
    handleChange (checked, value) {
      const oldValue = [...this.localValue]
      const localValue = []
      this.checkboxItems.forEach(checkbox => {
        const params = checkbox.getValue()
        if (params.isChecked) {
          localValue.push(params.value)
        }
      })
      this.localValue = localValue
      this.$emit('input', this.localValue)
      this.$emit('change', this.localValue, oldValue)
    }
  }
}
</script>
