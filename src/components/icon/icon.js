/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) is licensed under the MIT License.
 *
 * License for 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition):
 *
 * ---------------------------------------------------
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
 * documentation files (the "Software"), to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
 * to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of
 * the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
 * THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
 * CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
*/

/**
 * @file icon
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

export default ({
  fontLibrary = 'bk-icon',
  prefix = 'icon'
} = {}) => ({
  name: fontLibrary,
  props: {
    type: {
      type: String,
      required: true
    },
    svg: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '1em'
    },
    height: {
      type: String,
      default: '1em'
    },
    size: {
      type: String,
      default: 'inherit'
    }
  },
  render (h) {
    if (this.svg) {
      return h('svg', {
        style: {
          'width': this.width,
          'height': this.height,
          'font-size': this.size
        },
        attrs: {
          'fill': 'currentColor',
          'aria-hidden': true
        },
        props: this.$attrs,
        on: this.$listeners
      }, [
        h('use', {
          attrs: {
            'xlink:href': `#${prefix}-${this.type}`
          }
        })
      ])
    }
    const classes = {
      [fontLibrary]: true,
      [`${prefix}-${this.type}`]: true
    }
    return h('i', {
      style: {
        'font-size': this.size
      },
      class: classes,
      props: this.$attrs,
      on: this.$listeners
    })
  }
})
