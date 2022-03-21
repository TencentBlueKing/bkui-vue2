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
  <section>
    <div class="example-item">
      <bk-form :label-width="200" :model="formData" :rules="rules" ref="validateForm1">
        <bk-form-item label="测试环境地址" :property="'docker_hub'" :error-display-type="'normal'">
          <bk-input v-model="formData.docker_hub"></bk-input>
        </bk-form-item>
        <bk-form-item label="涉及外部域名" :property="'extra_domains'" :error-display-type="'normal'">
          <bk-input v-model="formData.extra_domains"></bk-input>
        </bk-form-item>
      </bk-form>
    </div>
  </section>
</template>

<script>
import { bkForm, bkFormItem, bkInput } from '@'

export default {
  components: {
    bkForm,
    bkFormItem,
    bkInput
  },
  data () {
    return {
      isChecking: false,
      formData: {
        docker_hub: '',
        extra_domains: ''
      },
      rules: {
        docker_hub: [
          {
            validator: function (val) {
              return val === '' || /^(http(s)?:\/\/)\w+[^\s]+(\.[^\s]+){1,}$/.test(val)
            },
            message: '地址格式不对',
            trigger: 'blur'
          }
        ],
        extra_domains: [
          {
            validator: function (val) {
              return val === '' || /^[\u65e0]$|^(?=^.{3,255}$)([a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+;?)+$/.test(val)
            },
            message: '域名格式不对',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async checkName (val) {
      const resutl = await this.asyncCheck(val)
      return resutl
    },
    async asyncCheck (val) {
      // 模拟异步请求
      const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          if (val === 'admin') {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject(false)
          } else {
            resolve(true)
          }
        }, 2000)
      })
      const result = await p.then(res => {
        return true
      }).catch(res => {
        return false
      })
      return result
    },
    submitData () {
      alert(JSON.stringify(this.formData))
    },
    changeDate (oldDay, newDay) {
      this.formData.date = newDay
    },
    validate1 () {
      this.isChecking = true
      this.$refs.validateForm1.validate().then(validator => {
        alert('验证成功！')
        this.isChecking = false
      }, validator => {
        this.isChecking = false
        // 显示第一个出错位置
        // alert(`${validator.field}：${validator.content}`)
      })
    },
    validate2 () {
      this.isChecking = true
      this.$refs.validateForm2.validate().then(validator => {
        alert('验证成功！')
        this.isChecking = false
      }, validator => {
        this.isChecking = false
        // 显示第一个出错位置
        // alert(`${validator.field}：${validator.content}`)
      })
    },
    clearError1 () {
      this.$refs.validateForm1.clearError()
    },
    addEmail () {
      this.dynamicFormData.emails.push({ value: '' })
    },
    checkData () {
      this.$refs.dynamicForm.validate().then(validator => {
        alert('验证成功！')
      }, validator => {
        // 显示第一个出错位置
        alert(validator.content)
      })
    }
  }
}
</script>
