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
 * @file rate 组件单测
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

import rate from '@/components/rate'
import { mount } from '@vue/test-utils'
import { createTestComp } from '../helpers'

describe('rate', () => {
  it('render the correct props', () => {
    const chooseRateHandler = jest.fn()
    const wrapper = mount(
      createTestComp(
        `<bk-rate :rate="rate" :edit="true" :width="18" :height="18" @score="chooseRate"></bk-rate>`,
        {
          components: {
            bkRate: rate
          },
          data () {
            return {
              rate: 1
            }
          },
          methods: {
            chooseRate: chooseRateHandler
          }
        }
      ),
      { sync: false }
    )
    const svg = wrapper.findAll('svg').at(4)
    svg.trigger('click')
    expect(chooseRateHandler).toBeCalled()
    expect(svg.attributes('style')).toBe('width: 18px; height: 18px; min-width: 18px;')
  })
})
