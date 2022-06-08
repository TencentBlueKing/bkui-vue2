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
  <div style="background: red">
    <bk-dropdown-menu @show="dropdownShow" @hide="dropdownHide" ref="dropdown">
      <div class="dropdown-trigger-btn" style="padding-left: 19px;" slot="dropdown-trigger">
        <span>更多操作</span>
        <i :class="['bk-icon icon-angle-down',{ 'icon-flip': isDropdownShow }]"></i>
      </div>
      <ul class="bk-dropdown-list" slot="dropdown-content">
        <li><a href="javascript:;" @click="triggerHandler">1111环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">222环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">生产环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">预发布环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">测试环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">正式环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">开发环境</a></li>
        <li><a href="javascript:;" @click="triggerHandler">调试环境</a></li>
      </ul>
    </bk-dropdown-menu>
  </div>
</template>
<script>

import { bkDropdownMenu } from '@'

export default {
  components: {
    bkDropdownMenu
  },
  data () {
    return {
      isDropdownShow: false,
      isLargeDropdownShow: false
    }
  },
  methods: {
    dropdownShow () {
      console.warn('dropdownShow')
      this.isDropdownShow = true
    },
    dropdownHide () {
      console.error('dropdownHide')
      this.isDropdownShow = false
    },
    triggerHandler () {
      this.$refs.dropdown.hide()
    }
  }
}
</script>

<style>
.dropdown-trigger-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #c4c6cc;
    height: 32px;
    min-width: 68px;
    border-radius: 2px;
    padding: 0 15px;
}
.dropdown-trigger-text {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    min-width: 68px;
    color: #3a84ff;
    cursor: pointer;
}
.dropdown-trigger-text .bk-icon {
    font-size: 22px;
}
.dropdown-trigger-btn.bk-icon {
    font-size: 18px;
    color: #979BA5;
}
.dropdown-trigger-btn .bk-icon {
    font-size: 22px;
}
.dropdown-trigger-btn:hover {
    cursor: pointer;
    border-color: #979ba5;
}
</style>
