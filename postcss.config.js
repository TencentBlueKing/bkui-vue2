/*
 * Tencent is pleased to support the open source community by making
 * 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 *
 * Copyright (C) 2025 Tencent.  All rights reserved.
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
 * @file postcss 配置
 *
 * Copyright © 2012-2025 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

// https://github.com/michael-ciniawsky/postcss-load-config
const valueParser = require('postcss-value-parser')
const colorFn = require('css-color-function')

// 转换 color() 函数为 rgba()
function transformColor (string) {
  return valueParser(string).walk(function (node) {
    if (node.type !== 'function' || node.value !== 'color') {
      return
    }
    try {
      node.value = colorFn.convert(valueParser.stringify(node))
      node.type = 'word'
    } catch (e) {
      // 转换失败时保持原值
    }
  }).toString()
}

// 创建一个在 Declaration 级别处理 color() 函数的插件
const colorFunctionProcessor = () => {
  return {
    postcssPlugin: 'color-function-processor',
    Declaration (decl) {
      if (decl.value && decl.value.includes('color(')) {
        decl.value = transformColor(decl.value)
      }
    }
  }
}
colorFunctionProcessor.postcss = true

module.exports = function (ctx) {
  const plugins = [
    // 把 import 的内容转换为 inline
    // @see https://github.com/postcss/postcss-import#postcss-import
    require('postcss-import')(),

    // 循环，本插件需要放在 postcss-nested 和 postcss-simple-vars 前面
    // @see https://github.com/antyakushev/postcss-for#postcss-for-plugin
    require('postcss-for'),

    // mixins，本插件需要放在 postcss-simple-vars 和 postcss-nested 插件前面
    // @see https://github.com/postcss/postcss-mixins#postcss-mixins-
    require('postcss-mixins')(),

    // 用于在 URL ( )上重新定位、内嵌或复制。
    // @see https://github.com/postcss/postcss-url#postcss-url
    require('postcss-url')({ url: 'rebase' }),

    // 这个插件可以在写 nested 样式时省略开头的 &
    // @see https://github.com/postcss/postcss-nested#postcss-nested-
    require('postcss-nested')(),

    // 将 @at-root 里的规则放入到根节点
    // @see https://github.com/OEvgeny/postcss-atroot#postcss-at-root-
    require('postcss-atroot')(),

    // 提供 @extend 语法
    // @see https://github.com/jonathantneal/postcss-extend-rule#postcss-extend-rule-
    require('postcss-extend-rule')(),

    // @see https://github.com/postcss/postcss-simple-vars#postcss-simple-variables-
    // 必须在 postcss-color-function 和 postcss-preset-env 之前处理变量
    require('postcss-simple-vars')({
      unknown: function (node, name, result) {
        node.warn(result, 'Unknown variable ' + name)
      },
      variables: function () {
        return require('./src/ui/variable.js')
      }
    }),

    // 移除注释
    // @see https://github.com/ben-eb/postcss-discard-comments#postcss-discard-comments---
    require('postcss-discard-comments')(),

    // 类似于 stylus，直接引用属性而不需要变量定义
    // @see https://github.com/simonsmith/postcss-property-lookup#postcss-property-lookup-
    require('postcss-property-lookup')(),

    // 条件判断
    require('postcss-conditionals-renewed'),

    // cssnext 已经不再维护，推荐使用 postcss-preset-env
    require('postcss-preset-env')({
      // see https://github.com/csstools/postcss-preset-env#options
      stage: 0,
      autoprefixer: {
        grid: true
      },
      features: {
        // 禁用颜色函数处理，由自定义插件处理
        'color-function': false,
        // 禁用 :is() 伪类转换，避免复杂选择器警告
        'is-pseudo-class': false
      }
    }),

    // 处理 color() 函数，在所有 mixin/变量处理完成后执行
    colorFunctionProcessor()
  ]

  // 添加压缩插件
  if (ctx.options && ctx.options.min) {
    plugins.push(require('cssnano')())
  }

  return { plugins }
}
