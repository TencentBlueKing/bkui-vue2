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

export default (props) => {
    let isShiftKeyDown = false
    const store = {
      start: null,
      end: null
    }
  
    const handleKeyDown = (e) => {
      if (e.key === 'Shift') {
        isShiftKeyDown = true
        document.body.style.userSelect = 'none'
      }
    }
  
    const handleKeyUp = (e) => {
      if (e.key === 'Shift') {
        isShiftKeyDown = false
        document.body.style.userSelect = ''
        clearStore()
      }
    }
  
    const setStartStore = (row, index) => {
      store.start = { index, row }
    }
  
    const setStore = (row, index) => {
      if (!isShiftKeyDown) {
        return false
      }
  
      if (store.start === null && store.end === null) {
        store.start = { index, row }
        return false
      }
  
      store.end = { index, row }
      return true
    }
  
    const clearStore = () => {
      store.start = null
      store.end = null
    }
  
    const init = () => {
      if (props.shiftMultiChecked) {
        window.addEventListener('keydown', handleKeyDown)
        window.addEventListener('keyup', handleKeyUp)
      }
    }
  
    const getStore = () => {
      const { start, end } = store
      const startRow = start.index < end.index ? start : end
      const endRow = start.index < end.index ? end : start
      return {
        start: startRow,
        end: endRow
      }
    }
  
    const onUnmounted = () => {
      if (props.shiftMultiChecked) {
        window.removeEventListener('keydown', handleKeyDown)
        window.removeEventListener('keyup', handleKeyUp)
        clearStore()
      }
    }
  
    const isShift = () => isShiftKeyDown
  
    return {
      isShiftKeyDown,
      setStartStore,
      isShift,
      onUnmounted,
      setStore,
      getStore,
      clearStore,
      init
    }
  }
