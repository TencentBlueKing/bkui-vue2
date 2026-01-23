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
 * @file rollup plugin
 *
 * Copyright © 2012-2025 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

const { resolve } = require('path')
const rollupVue = require('rollup-plugin-vue')
const rollupResolve = require('@rollup/plugin-node-resolve').default
const rollupBabel = require('@rollup/plugin-babel').default
const rollupCommonjs = require('@rollup/plugin-commonjs')
const rollupPostcss = require('rollup-plugin-postcss')
const rollupAlias = require('@rollup/plugin-alias')
const rollupCleanup = require('rollup-plugin-cleanup')
const rollupReplace = require('@rollup/plugin-replace')

const rollupCustomImage = require('./rollup-plugin-custom-image')

const config = require('./config')
module.exports = [
  rollupReplace({
    preventAssignment: true,
    'process.env': JSON.stringify(config.build.env)
  }),
  rollupCustomImage(),
  rollupAlias({
    entries: [
      { find: '@', replacement: resolve('src') },
      { find: 'bk-magic-vue/lib', replacement: resolve('src') }
    ]
  }),
  rollupVue({
    // https://github.com/vuejs/rollup-plugin-vue/blob/master/docs/options.md
    css: false,
    template: {
      isProduction: true,
      compilerOptions: {
        preserveWhitespace: false
      }
    }
  }),
  rollupPostcss({
    // 设置为 true 那么 index.js 中的 import ui/common.css 会以 styleInject 的形式打入到 bk-magic-vue.js 中
    inject: false
  }),
  rollupBabel({
    babelHelpers: 'runtime',
    babelrc: false,
    exclude: ['node_modules/**'],
    presets: [
      [
        '@babel/preset-env',
        {
          // 设置' modules': false，否则 Babel 会在 Rollup 有机会做处理之前，
          // 将我们的模块转成 CommonJS，导致 Rollup 的一些处理失败。
          modules: false,
          targets: {
            browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
            node: 'current'
          },
          debug: false
        }
      ],
      ['@vue/babel-preset-jsx']
    ],
    plugins: [
      '@babel/plugin-transform-async-to-generator',
      '@babel/plugin-transform-object-assign',
      'date-fns',
      '@vue/babel-plugin-transform-vue-jsx',
      '@babel/plugin-syntax-jsx',
      '@babel/plugin-syntax-dynamic-import',
      ['@babel/plugin-transform-runtime', {
        corejs: 3,
        helpers: true
      }]
    ],
    extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue']
  }),
  rollupResolve({
    mainFields: ['module', 'main', 'jsnext:main'],
    browser: true,
    extensions: ['.js', '.vue']
  }),
  rollupCommonjs(),
  rollupCleanup({
    comments: 'none'
  })
]
