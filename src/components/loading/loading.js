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
 * @file loading instance
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

import Vue from 'vue'
import { isVNode } from '@/utils/dom'
import LoadingView from './loading.vue'

const LoadingConstructor = Vue.extend(LoadingView)

let instance

const Loading = function (options = {}) {
    if (typeof options === 'string') {
        options = {
            title: options
        }
    }

    options.type = 'fixed'
    options.opacity = options.opacity || 0.9
    options.color = options.color || '#ffffff'
    instance = new LoadingConstructor({
        propsData: options
    })

    if (isVNode(instance.title)) {
        instance.$slots.title = [instance.title]
        instance.title = null
    } else {
        delete instance.$slots.title
    }

    instance.viewmodel = instance.$mount()
    document.body.appendChild(instance.viewmodel.$el)
    instance.$dom = instance.viewmodel.$el
    instance.viewmodel.isShow = true

    return instance.viewmodel
}

Loading.hide = function () {
    instance.viewmodel.hide = true
}

Vue.prototype.$bkLoading = Loading

export default Loading
