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
  <div>
    <bk-tag-input
      v-model="tags"
      :placeholder="placeholder"
      :list="list"
      :display-key="'name'"
      :search-key="'id'"
      :allow-create="allowCreate"
      :paste-fn="pasteFn"
      @change="change">
    </bk-tag-input>
    <div style="height: 20px"></div>
    <bk-tag-input
      v-model="tag1"
      :list="list"
      :has-delete-icon="hasDeleteIcon"
      :allow-create="allowCreate"
      :free-paste="true"
      @change="change">
    </bk-tag-input>
  </div>
</template>
<script>
import { bkTagInput } from '@'
export default {
  components: {
    bkTagInput
  },
  data () {
    return {
      placeholder: '请输入城市',
      tags: ['shenzhen'],
      list: [
        { id: 'shenzhen', name: '深圳' },
        { id: 'guangzhou', name: '广州' },
        { id: 'beijing', name: '北京' },
        { id: 'shanghai', name: '上海' },
        { id: 'hangzhou', name: '杭州' },
        { id: 'nanjing', name: '南京' },
        { id: 'chognqing', name: '重庆' },
        { id: 'taibei', name: '台北' },
        { id: '111', name: '111' },
        { id: '222', name: '222' },
        { id: '333', name: '333' },
        { id: 'haikou', name: '海口' }
      ],
      placeholder: '请输入城市',
      allowCreate: true,
      hasDeleteIcon: true,
      tag1: ['shenzhen'],
    }
  },
  methods: {
    change (tags) {
      console.error(tags)
    },
    pasteFn (val) {
      console.error(val)
      // 粘贴的值需要在 tag-input 的 list 里存在，同时在这个 pasteFn 里要将粘贴的值转换为 tag-input 需要的数据结构
      // 例如下面粘贴的是 222 333
      // 111 222 333
      const ret = val.split(' ').map(val => {
        return {
          id: val,
          name: val
        }
      })
      return ret
    },
    change (tags) {
      console.log(tags)
    }
  }
}
</script>
