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
 * @file rollup-plugin-custom-image
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

const { readFileSync } = require('fs')
const { extname } = require('path')
const { createFilter } = require('rollup-pluginutils')

const mimeTypes = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml'
}

module.exports = function image (options = {}) {
  const filter = createFilter(options.include, options.exclude)

  return {
    name: 'custom-image',

    load (id) {
      if (!filter(id)) {
        return null
      }

      const mime = mimeTypes[extname(id)]
      if (!mime) {
        return null
      }

      const data = readFileSync(id, 'base64')

      // rollup 1.x 不需要修改 ast 了
      // const code = `var img = new Image(); img.src = 'data:${mime};base64,${data}'; export default img.src;`
      // const ast = {
      //     type: 'Program',
      //     sourceType: 'module',
      //     start: 0,
      //     end: null,
      //     body: []
      // }
      // return { ast, code, map: { mappings: '' } }
      return `var img = new Image(); img.src = 'data:${mime};base64,${data}'; export default img.src;`
    }
  }
}
