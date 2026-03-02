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
 * @file webpack base config
 *
 * Copyright © 2012-2025 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

const { resolve } = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const ESLintPlugin = require('eslint-webpack-plugin')

const { assetsPath } = require('./util')

const LIBRARY_ROOT = resolve(__dirname, '../src')
const NODE_MODULES_DIR = resolve(__dirname, '../node_modules')
const EXAMPLE_DIR = resolve(__dirname, '../example')
const mdLoaderOption = require('./md-loader-option')

const hljsLanguageConfig = require('./hljs-language-config')

const isDev = process.env.NODE_ENV === 'dev'

module.exports = {
  // 启用 Webpack 5 持久化缓存，大幅提升二次启动速度
  cache: {
    type: 'filesystem',
    cacheDirectory: resolve(__dirname, '../node_modules/.cache/webpack'),
    buildDependencies: {
      config: [__filename]
    }
  },
  watchOptions: {
    ignored: /node_modules/,
    // 减少文件系统轮询频率
    poll: false
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [NODE_MODULES_DIR],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      // for example
      'bk-magic-vue$': resolve('src'),
      // for rollup build component
      'bk-magic-vue/lib': resolve('src'),
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            include: [LIBRARY_ROOT, EXAMPLE_DIR],
            transformAssetUrls: {
              video: 'src',
              source: 'src',
              img: 'src',
              image: 'xlink:href'
            }
          }
        }
      },
      {
        test: /\.js$/,
        include: [LIBRARY_ROOT, EXAMPLE_DIR],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false
          }
        }
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: 'vue-markdown-loader/lib/markdown-compiler',
            options: mdLoaderOption
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: assetsPath('images/[name].[hash:7][ext]')
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {
          filename: assetsPath('fonts/[name].[hash:7][ext]')
        }
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    // 开发模式下使用缓存和异步检查，提升启动速度
    new ESLintPlugin({
      extensions: ['js', 'vue'],
      context: resolve(__dirname, '..'),
      files: ['src', 'build'],
      exclude: ['node_modules'],
      cache: true,
      cacheLocation: resolve(__dirname, '../node_modules/.cache/.eslintcache'),
      // 开发模式下只检查修改的文件，且不阻塞编译
      lintDirtyModulesOnly: isDev,
      threads: isDev
    }),
    new webpack.ContextReplacementPlugin(/brace\/mode$/, /^\.\/(json|python|sh|text)$/),
    new webpack.ContextReplacementPlugin(
      /highlight\.js\/lib\/languages$/,
      new RegExp(`^./(${hljsLanguageConfig.join('|')})$`)
    )
  ]
}
