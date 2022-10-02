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
 * @file markdown-it-github-link plugin
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

const exampleRouteConfig = require('../example/components.config')

const kebabCase = string => string
  .replace(/([a-z])([A-Z])/g, '$1-$2')
  .replace(/[\s_]+/g, '-')
  .toLowerCase()

function getTokensText (tokens) {
  return tokens
    .filter(t => ['text', 'code_inline'].includes(t.type))
    .map(t => t.content)
    .join('')
}

function findRouter (name) {
  let ret = null
  const groupLen = exampleRouteConfig.groups.length
  for (let i = 0; i < groupLen; i++) {
    const group = exampleRouteConfig.groups[i]
    const componentLen = group.components.length
    for (let j = 0; j < componentLen; j++) {
      const component = group.components[j]
      if (component.name === name) {
        ret = component
        break
      }
    }
  }
  return ret
}

module.exports = function replace (md, opts) {
  md.core.ruler.push('github-link', state => {
    const tokens = state.tokens
    for (let id = 0; id < tokens.length; id++) {
      const token = tokens[id]
      if (token.type !== 'heading_open') {
        continue
      }
      if (token.tag !== 'h2') {
        continue
      }
      const space = () => Object.assign(new state.Token('text', '', 0), { content: ' ' })
      const content = getTokensText(tokens[id + 1].children)

      const urlPrefix = 'https://github.com/TencentBlueKing/bkui-vue2/blob/staging/example/components'

      const linkTokens = [
        Object.assign(new state.Token('link_open', 'a', 1), {
          attrs: [
            ['href', `${urlPrefix}/${kebabCase(findRouter(content).id)}/readme.md`],
            ['target', '_blank'],
            ['style', 'color: #1f2f3d;']
          ]
        }),
        Object.assign(new state.Token('svg_open', 'svg', 1), {
          attrs: [
            ['v-bk-tooltips.right', '"去 Github 编辑"'],
            ['preserveAspectRatio', 'xMidYMid meet'],
            ['class', 'github-link'],
            ['viewBox', '0 0 24 24'],
            ['width', ' 24px'],
            ['height', '24px']
          ]
        }),
        Object.assign(new state.Token('path_open', 'path', 1), {
          attrs: [
            ['fill', 'currentColor'],
            ['d', 'M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476c0-.237-.013-1.024-.013-1.862c-2.512.463-3.162-.612-3.362-1.175c-.113-.288-.6-1.175-1.025-1.413c-.35-.187-.85-.65-.013-.662c.788-.013 1.35.725 1.538 1.025c.9 1.512 2.338 1.087 2.912.825c.088-.65.35-1.087.638-1.337c-2.225-.25-4.55-1.113-4.55-4.938c0-1.088.387-1.987 1.025-2.688c-.1-.25-.45-1.275.1-2.65c0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337c1.912-1.3 2.75-1.024 2.75-1.024c.55 1.375.2 2.4.1 2.65c.637.7 1.025 1.587 1.025 2.687c0 3.838-2.337 4.688-4.562 4.938c.362.312.675.912.675 1.85c0 1.337-.013 2.412-.013 2.75c0 .262.188.574.688.474A10.016 10.016 0 0 0 22 12c0-5.525-4.475-10-10-10z']
          ]
        }),
        new state.Token('path_close', 'path', -1),
        new state.Token('svg_close', 'svg', -1),
        new state.Token('link_close', 'a', -1)
      ]

      linkTokens['push'](space())
      state.tokens[id + 1].children['push'](...linkTokens)
    }
  })
}
