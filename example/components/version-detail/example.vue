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
    <bk-version-detail
      :current-version="2"
      :finished="finished"
      :show.sync="show"
      :version-list="versionList"
      :version-detail="versionDetail"
      :get-version-detail="handleGetVersionDetail"
      :get-version-list="handleGetVersionList"
      @change="handleChange">
      <template slot-scope="content">
        <div v-if="content.detail" class="bk-version-markdown-theme">
          <h1>【{{content.detail}}】版本更新明细</h1>
          <div v-for="(group, index) in currentDetailList" :key="index">
            <h3 >{{group.type}}</h3>
            <ul>
              <li v-for="(detail, dIndex) in group.detail" :key="dIndex">{{ detail }}</li>
            </ul>
          </div>
        </div>
      </template>
    </bk-version-detail>
    <bk-button @click="show = !show" theme="primary">点击查看日志详情</bk-button>
    <div class="example-item">
      <bk-version-detail
        :current-version="2"
        :finished="finished"
        :show.sync="mdShow"
        :md-mode="true"
        :version-list="versionList"
        :version-detail="versionDetail"
        :get-version-detail="handleGetMdDetail"
        :get-version-list="handleGetVersionList"
        @change="handleChange">
      </bk-version-detail>
      <bk-button @click="mdShow = !mdShow" theme="primary">查看markdown格式日志</bk-button>
    </div>
  </div>
</template>
<script>
import { bkVersionDetail, bkButton } from '@'
export default {
  components: {
    bkVersionDetail,
    bkButton
  },
  data () {
    return {
      finished: false,
      show: false,
      mdShow: false,
      versionDetail: '',
      versionList: [
        {
          title: 'V3.2.3',
          date: '2020.04.26'
        },
        {
          title: 'V3.2.1',
          date: '2020.04.25'
        },
        {
          title: 'V3.2.0',
          date: '2020.04.24'
        },
        {
          title: 'V3.2.0',
          date: '2020.04.23'
        },
        {
          title: 'V3.1.3',
          date: '2020.04.22'
        },
        {
          title: 'V3.1.2',
          date: '2020.04.20'
        },
        {
          title: 'V3.1.1',
          date: '2020.04.19'
        },
        {
          title: 'V3.1.0',
          date: '2020.04.18'
        },
        {
          title: 'V3.0.3',
          date: '2020.04.18'
        }
      ],
      currentDetailList: []
    }
  },
  methods: {
    handleGetVersionList (v) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.versionList.push({
            title: 'V3.2.3 -- ' + (+Date.now()),
            date: '2020.04.26'
          })
          this.finished = this.versionList.length > 15
          resolve()
        }, 1000)
      })
    },
    handleGetVersionDetail (v) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.versionDetail = v.title
          this.currentDetailList = [
            {
              type: '新增',
              detail: [
                  '[新增] 内置 ES6+ 语言转义能力增强',
                  '[新增] 任务通知中心',
                  '[新增] 控制台新增命令 cleanAppCache',
                  '[新增] 云开发云调用快速启动模板',
                  '[新增] 插件增加工具回退时的保护机制'
              ]
            },
            {
                type: '优化',
                detail: [
                    '[优化] 素材管理，不再维护的提示',
                    '[优化] 任务通知中心',
                    '[优化] 控制台新增命令 cleanAppCache',
                    '[优化] 上传时版本号推荐',
                    '[优化] project.config.json 中新增设置 uploadWithSourceMap'
                ]
            },
            {
                type: '修复',
                detail: [
                    '[修复] 体验评分“iPhone X兼容”检验规则',
                    '[修复] sitemap，控制台显示当前页面是否索引',
                    '[修复] createUDPSocket bindUDPSocket 改为同步接口',
                    '[修复] 代码保护默认打开',
                    '[修复] 工具启动默认打开项目',
                ]
            }
          ]
          resolve()
        }, 1000)
      })
    },
    handleGetMdDetail (v) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.versionDetail = `# 【${v.title}】更新日志\n### 新增\n\n- [新增] 内置\` ES6+\` 语言转义能力增强\n- [新增] 任务通知中心\n- [新增] 控制台新增命令 cleanAppCache\n### 优化\n- [优化] 上传时版本号推荐\n- [优化] 云开发云调用快速启动模板\n- [优化] 插件增加工具回退时的保护机制\n- [优化] 素材管理，不再维护的提示\n- [优化] 体验评分支持“iPhone X兼容”检验规则\n### 修复\n- [修复] sitemap，控制台显示当前页面是否索引\n- [修复] project.config.json 中新增设置 uploadWithSourceMap\n- [修复] createUDPSocket bindUDPSocket 改为同步接口\n- [修复] 代码保护默认打开\n- [修复] 增加设置是否工具启动默认打开项目\n`
          resolve()
        }, 1000)
      })
    },
    handleChange (val) {
      if (!val) {
        this.versionDetail = ''
      }
    }
  }
}
</script>