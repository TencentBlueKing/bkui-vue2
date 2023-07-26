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
    <bk-table :row-auto-height="true" style="margin-top: 15px;" :data="data" :size="size" :pagination="pagination"
      @page-change="handlePageChange" @page-limit-change="handlePageLimitChange">
      <bk-table-column type="selection" width="60" fixed="left"></bk-table-column>
      <bk-table-column type="index" label="序列" width="60"></bk-table-column>
      <bk-table-column label="名称/内网IP" width="130" prop="ip"></bk-table-column>
      <bk-table-column label="来源" width="130" prop="source"></bk-table-column>
      <bk-table-column label="状态" width="130" prop="status"></bk-table-column>
      <bk-table-column label="创建时间" width="130" prop="create_time"></bk-table-column>
      <bk-table-column label="操作" width="130" fixed="right">
        <template slot-scope="props">
          <bk-button class="mr10" theme="primary" text :disabled="props.row.status === '创建中'"
            @click="reset(props.row)">重置</bk-button>
          <bk-button class="mr10" theme="primary" text @click="remove(props.row)">移除</bk-button>
          <bk-popover class="dot-menu" placement="bottom-start" theme="dot-menu light" trigger="click"
            :arrow="false" offset="15" :distance="0">
            <span class="dot-menu-trigger"></span>
            <ul class="dot-menu-list" slot="content">
              <li class="dot-menu-item">导入</li>
              <li class="dot-menu-item">导出</li>
            </ul>
          </bk-popover>
        </template>
      </bk-table-column>
    </bk-table>
  </div>
</template>
<script>
import { bkTable, bkTableColumn, bkButton, bkPopover } from '@'

export default {
  components: {
    bkTable,
    bkTableColumn,
    bkButton,
    bkPopover
  },
  data () {
    return {
      size: 'small',
      data: [
        {
          ip: '192.168.0.1',
          source: 'QQ',
          status: '创建中',
          create_time: '2018-05-25 15:02:24',
          children: [
            {
              name: '用户管理',
              count: '23',
              creator: 'person2',
              create_time: '2017-10-10 11:12',
              desc: '用户管理'
            },
            {
              name: '模块管理',
              count: '2',
              creator: 'person1',
              create_time: '2017-10-10 11:12',
              desc: '无数据测试'
            }
          ]
        },
        {
          ip: '192.168.0.2',
          source: '微信',
          status: '正常',
          create_time: '2018-05-25 15:02:24',
          children: [
            {
              name: '用户管理',
              count: '23',
              creator: 'person2',
              create_time: '2017-10-10 11:12',
              desc: '用户管理'
            },
            {
              name: '模块管理',
              count: '2',
              creator: 'person1',
              create_time: '2017-10-10 11:12',
              desc: '无数据测试'
            }
          ]
        },
        {
          ip: '192.168.0.3',
          source: 'QQ',
          status: '创建中',
          create_time: '2018-05-25 15:02:24',
          children: [
            {
              name: '用户管理',
              count: '23',
              creator: 'person2',
              create_time: '2017-10-10 11:12',
              desc: '用户管理'
            },
            {
              name: '模块管理',
              count: '2',
              creator: 'person1',
              create_time: '2017-10-10 11:12',
              desc: '无数据测试'
            }
          ]
        }
      ],
      pagination: {
        current: 1,
        count: 500,
        limit: 20
      }
    }
  },
  methods: {
    handlePageLimitChange () {
      console.log('handlePageLimitChange', arguments)
    },
    toggleTableSize () {
      const size = ['small', 'medium', 'large']
      const index = (size.indexOf(this.size) + 1) % 3
      this.size = size[index]
    },
    handlePageChange (page) {
      this.pagination.current = page
    }
  }
}
</script>

<style lang="postcss">
  .dot-menu {
      display: inline-block;
      vertical-align: middle;
  }

  .tippy-tooltip.dot-menu-theme {
      padding: 0;
  }

  .dot-menu-trigger {
      display: block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      border-radius: 50%;
      text-align: center;
      font-size: 0;
      color: #979BA5;
      cursor: pointer;
  }

  .dot-menu-trigger:hover {
      color: #3A84FF;
      background-color: #EBECF0;
  }

  .dot-menu-trigger:before {
      content: "";
      display: inline-block;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background-color: currentColor;
      box-shadow: 0 -4px 0 currentColor, 0 4px 0 currentColor;
  }

  .dot-menu-list {
      margin: 0;
      padding: 5px 0;
      min-width: 50px;
      list-style: none;
  }

  .dot-menu-list .dot-menu-item {
      padding: 0 10px;
      font-size: 12px;
      line-height: 26px;
      cursor: pointer;

      &:hover {
          background-color: #eaf3ff;
          color: #3a84ff;
      }
  }
</style>
