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
  <div class="bk-select"
    :class="[{
      'is-focus': focus,
      'is-disabled': disabled,
      'is-readonly': readonly,
      'is-loading': loading,
      'is-unselected': isUnselected,
      'is-default-trigger': !$scopedSlots.trigger,
      'has-prefix-icon': !!prefixIcon,
      'only-bottom-border': behavior === 'simplicity'
    }, wrapperCls, fontSizeCls, extCls]"
    :data-placeholder="localPlaceholder"
    tabindex="0"
    ref="bkSelect"
    @keydown.enter.prevent="show"
    @keydown.tab="close"
    @keydown.esc.stop.prevent="close">
    <template v-if="!$scopedSlots.trigger">
      <template v-if="loading">
        <img class="bk-select-loading" src="../../ui/images/spinner.svg">
      </template>
      <template v-else>
        <i class="bk-select-clear bk-icon icon-close-circle-shape"
          v-if="clearable && !isUnselected && !disabled && !readonly"
          @click.prevent.stop="reset">
        </i>
        <i class="bk-select-angle bk-icon icon-angle-down"></i>
      </template>
    </template>
    <bk-popover class="bk-select-dropdown"
      ref="selectDropdown"
      trigger="click"
      placement="bottom-start"
      theme="light bk-select-dropdown"
      animation="slide-toggle"
      :offset="-1"
      :distance="popoverDistance"
      :z-index="zIndex"
      :on-show="handleDropdownShow"
      :on-hide="handleDropdownHide"
      :tippy-options="renderPopoverOptions">
      <i :class="['bk-select-prefix-icon', prefixIcon]" v-if="prefixIcon"></i>
      <slot name="trigger" v-bind="$props">
        <bk-select-tag v-if="multiple && displayTag"
          :width-limit="isTagWidthLimit"
          ref="bkSelectTag"
          @create-tag="handleCreateTag"></bk-select-tag>
        <template v-else>
          <input
            v-if="allowCreate && !multiple"
            class="bk-select-name"
            ref="createInput"
            @change="handleInputChange"
            :class="fontSizeCls"
            :value="selectedName || value"
            :title="selectedName" />
          <div class="bk-select-name" v-else
            :class="fontSizeCls"
            :title="selectedName">
            {{selectedName}}
          </div>
        </template>
      </slot>
      <div slot="content" class="bk-select-dropdown-content"
        :class="[popoverCls, extPopoverCls]"
        :style="popoverStyle">
        <div class="bk-select-search-wrapper" v-if="showSearch">
          <slot name="search" v-bind="$props">
            <i class="left-icon bk-icon icon-search"></i>
            <input class="bk-select-search-input"
              :class="fontSizeCls"
              ref="searchInput"
              type="text"
              :placeholder="localSearchPlaceholder"
              v-model="searchValue"
              @keydown.enter="ensureSearch"
              @keydown.tab="handleClose"
              @keydown.esc.stop.prevent="handleClose">
          </slot>
        </div>
        <div class="bk-options-wrapper"
          v-bkloading="{ isLoading: searchLoading }"
          :style="{ maxHeight: scrollHeight + 'px' }">
          <ul class="bk-options" ref="optionList"
            :class="{
              'bk-options-single': !multiple
            }"
            :style="{ maxHeight: scrollHeight + 'px' }">
            <bk-option-all
              ref="selectAllOption"
              v-if="multiple && showSelectAll && !searchValue">
            </bk-option-all>
            <bk-option v-for="item in allowCreateData"
              :key="item.id"
              :id="item.id"
              :name="item.name"
              v-show="false">
            </bk-option>
            <bk-virtual-scroll ref="virtualScroll"
              :item-height="itemHeight"
              class="bk-virtual-select"
              :style="{ height: scrollHeight + 'px', width: '100%' }"
              @virtual-scroll-scroll-bar-mouse="virtualScrollScrollBarMouse"
              v-if="enableVirtualScroll">
              <template slot-scope="item">
                <virtual-option :item="item.data" :render-func="virtualScrollRender"></virtual-option>
              </template>
            </bk-virtual-scroll>
            <slot v-else></slot>
            <div class="bk-select-bottom-loading" v-if="scrollEndLoading.isLoading">
              <bk-spin v-bind="scrollEndLoading">{{ scrollEndLoading.text }}</bk-spin>
            </div>
          </ul>
        </div>
        <template v-if="showEmpty">
          <div class="bk-select-empty" :class="fontSizeCls" v-if="!options.length">
            {{ emptyText || t('bk.select.dataEmpty') }}
          </div>
          <div class="bk-select-empty" :class="fontSizeCls" v-else-if="showSearch && unmatchedCount === options.length">
            {{ emptyText || t('bk.select.searchEmpty') }}
          </div>
        </template>
        <div class="bk-select-extension" :class="fontSizeCls" v-if="$slots.extension">
          <slot name="extension"></slot>
        </div>
      </div>
    </bk-popover>
  </div>
</template>

<script>
import bkPopover from '@/components/popover'
import bkOptionAll from './option-all'
import bkLoading from '@/components/loading/directive'
import locale from 'bk-magic-vue/lib/locale'
import emitter from '@/mixins/emitter'
import zIndex from '@/mixins/z-index'
import bkSelectTag from './select-tag.vue'
import pinyin from '@/utils/pinyin'
import bkVirtualScroll from '@/components/virtual-scroll'
import virtualOption from './virtual-option'
import { dropdownMarginBottom } from '@/ui/variable'
import { debounce } from '@/utils/util'
import bkSpin from '@/components/spin'
import bkOption from './option.vue'

export default {
  name: 'bk-select',
  components: {
    bkPopover,
    bkOptionAll,
    bkSelectTag,
    bkVirtualScroll,
    virtualOption,
    bkSpin,
    bkOption
  },
  directives: {
    bkloading: bkLoading
  },
  mixins: [emitter, locale.mixin, zIndex],
  props: {
    value: {
      type: [String, Number, Array],
      default: ''
    },
    isTagWidthLimit: {
      type: Boolean,
      default: true
    },
    multiple: Boolean,
    showSelectAll: Boolean,
    scrollHeight: {
      type: Number,
      default: 216
    },
    popoverMinWidth: Number,
    popoverWidth: Number,
    popoverOptions: {
      type: Object,
      default () {
        return {}
      }
    },
    placeholder: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: true
    },
    allowCreate: Boolean,
    allowEnter: {
      type: Boolean,
      default: true
    },
    disabled: Boolean,
    readonly: Boolean,
    loading: Boolean,
    searchable: Boolean,
    searchableMinCount: {
      type: Number,
      default: 0
    },
    searchIgnoreCase: {
      type: Boolean,
      default: true
    },
    searchPlaceholder: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '',
      validator (val) {
        return ['', 'large', 'small'].includes(val)
      }
    },
    remoteMethod: {
      type: Function
    },
    emptyText: {
      type: String,
      default: ''
    },
    // normal: 12px
    // medium: 14px
    // large: 16px
    fontSize: {
      type: String,
      default: 'normal'
    },
    // 外部设置的 class name
    extCls: {
      type: String,
      default: ''
    },
    // 外部设置的 popover class name
    extPopoverCls: {
      type: String,
      default: ''
    },
    prefixIcon: {
      type: String,
      default: ''
    },
    displayTag: Boolean,
    autoHeight: {
      type: Boolean,
      default: true
    },
    collapseTag: {
      type: Boolean,
      default: true
    },
    searchWithPinyin: Boolean,
    enableVirtualScroll: {
      type: Boolean,
      default: false
    },
    virtualScrollRender: Function,
    list: Array,
    idKey: {
      type: String,
      default: 'id'
    },
    displayKey: {
      type: String,
      default: 'name'
    },
    itemHeight: {
      type: Number,
      default: 32
    },
    // 是否显示空数据提示（自定义slot内容时可能需要设置）
    showEmpty: {
      type: Boolean,
      default: true
    },
    // 是否在初始化的时候展示下拉列表
    showOnInit: {
      type: Boolean,
      default: false
    },
    behavior: {
      type: String,
      default: 'normal',
      validate (v) {
        return ['simplicity', 'normal'].indexOf(v) > -1
      }
    },
    enableScrollLoad: {
      type: Boolean,
      default: false
    },
    scrollLoading: {
      type: Object,
      default: () => ({})
    },
    selectedStyle: {
      type: String,
      default: 'check' // check or checkbox
    }
  },
  provide () {
    return {
      select: this,
      optionGroup: null
    }
  },
  data () {
    let selected = this.value
    if (this.multiple && !Array.isArray(selected)) {
      selected = []
    }
    return {
      ready: false,
      focus: false,
      selected: selected,
      options: [],
      optionsMap: {},
      selectedOptions: this.multiple ? [] : null,
      defaultWidth: 0,
      selectSize: this.size,
      searchValue: '',
      searchTimer: null,
      searchLoading: false,
      // 是否自动更新selectOptions（嵌套tree-select时需要在value变化时更新selectOptions）
      autoUpdate: false,
      renderPopoverOptions: {},
      popoverDistance: 10 + parseInt(dropdownMarginBottom),
      optionList: null,
      allowCreateData: []
    }
  },
  computed: {
    selectedName () {
      if (this.selectedOptions) {
        if (this.multiple) {
          return this.selectedOptions.map(option => option.name).join(',')
        }
        return this.selectedOptions.name
      }
      return null
    },
    isRemoteSearch () {
      return typeof this.remoteMethod === 'function'
    },
    shouldUpdate () {
      return !this.isRemoteSearch || !this.searchValue
    },
    isUnselected () {
      if (this.multiple) {
        return !this.selected.length
      }
      return this.selected === ''
    },
    unmatchedCount () {
      return this.options.filter(option => option.unmatched).length
    },
    localPlaceholder () {
      return this.placeholder ? this.placeholder : this.t('bk.select.pleaseselect')
    },
    dropdownActive () {
      return !(this.disabled || this.loading || this.readonly)
    },
    popoverStyle () {
      return {
        width: (this.popoverWidth ? this.popoverWidth : this.defaultWidth) + 'px',
        minWidth: (this.popoverMinWidth ? this.popoverMinWidth : this.defaultWidth) + 'px'
      }
    },
    fontSizeCls () {
      let cls = ''
      if (this.fontSize === 'medium') {
        cls = 'medium-font'
      } else if (this.fontSize === 'large') {
        cls = 'large-font'
      }
      return cls
    },
    wrapperCls () {
      const wrapperCls = []
      if (this.selectSize) {
        wrapperCls.push(`bk-select-${this.selectSize}`)
      }

      return wrapperCls
    },
    popoverCls () {
      const wrapperCls = []
      if (this.selectSize) {
        wrapperCls.push(`bk-select-popover-${this.selectSize}`)
      }

      return wrapperCls
    },
    localSearchPlaceholder () {
      return this.searchPlaceholder ? this.searchPlaceholder : this.t('bk.select.searchPlaceholder')
    },
    scrollEndLoading () {
      return Object.assign({
        isLoading: false,
        text: '加载中',
        size: 'mini',
        theme: 'info',
        icon: 'circle-2-1',
        placement: 'right'
      }, this.scrollLoading)
    },
    showSearch () {
      return this.searchable && this.options.length >= this.searchableMinCount
    }
  },
  watch: {
    value (value) {
      if (!this.isSame(value, this.selected)) {
        this.selected = value
      }
    },
    focus (focus) {
      if (!focus) {
        this.resetSearchValue()
        this.dispatch('bk-form-item', 'form-blur')
        if (this.enableScrollLoad) this.optionList = null
      }
      this.$nextTick(() => {
        this.$emit('toggle', focus)
        this.dispatch('bk-form-item', 'form-focus')
        if (focus) {
          this.showVirtualScroll()
          if (this.enableScrollLoad) this.handleScroll()
        }
      })
    },
    dropdownActive () {
      this.setDropdownState()
    },
    searchValue (val) {
      this.searchTimer && clearTimeout(this.searchTimer)
      this.searchTimer = setTimeout(() => {
        if (this.isRemoteSearch) {
          this.remoteSearch()
        } else {
          this.search()
        }
      }, 100)
    },
    selected (value, oldValue) {
      if (this.shouldUpdate || this.autoUpdate) {
        this.setSelectedOptions()
      }
      if (this.allowCreate && this.displayTag && this.multiple && Array.isArray(value)) {
        this.allowCreateData = this.allowCreateData.filter(item => value.includes(item.id))
      }
      this.$emit('input', value)
      this.$emit('change', value, oldValue)
      this.dispatch('bk-form-item', 'form-change')
    },
    list: {
      handler (val) {
        if (this.enableVirtualScroll) {
          this.optionsMap = {}
          this.options = val.map((option) => (Object.seal({
            ...option,
            id: option[this.idKey],
            name: option[this.displayKey],
            lowerName: String(option[this.displayKey]).toLowerCase(),
            unmatched: false
          })))
          // 分开赋值提高性能
          this.options.forEach((option) => {
            this.optionsMap[option.id] = option
          })
        }
      },
      immediate: true
    },
    options () {
      this.updatePopoverPosition()
      this.setSelectedOptions()
      this.showVirtualScroll()
    },
    size (val) {
      this.selectSize = val
    },
    multiple (v) {
      if (v) {
        this.selectedOptions = []
        this.selected = []
      }
    },
    popoverOptions: {
      handler (v) {
        this.renderPopoverOptions = Object.assign({}, v)
      },
      immediate: true
    }
  },
  created () {
    this.$nextTick(() => {
      this.setSelectedOptions()
    })
  },
  mounted () {
    this.setDropdownState()
    this.setDropdownCallback()
    this.showOnInit && this.show()
  },
  methods: {
    /**
     * 监听 virtual-scroll 的 virtual-scroll-scroll-bar-mouse 事件
     */
    virtualScrollScrollBarMouse (idx) {
      const renderPopoverOptions = Object.assign({}, this.renderPopoverOptions)
      renderPopoverOptions.hideOnClick = idx !== 'down'
      this.renderPopoverOptions = Object.assign({}, renderPopoverOptions)
    },

    showVirtualScroll () {
      const list = this.options.filter(option => !option.unmatched)
      if (this.$refs.virtualScroll && this.enableVirtualScroll) this.$refs.virtualScroll.setListData(list)
    },

    setSelectedOptions () {
      if (this.multiple) {
        const existOptions = this.selectedOptions.filter(option => this.selected.includes(option.id))
        const newSelected = this.selected.filter(value => !existOptions.some(option => option.id === value))
        newSelected.forEach(value => {
          const option = this.optionsMap[value]
          if (option) {
            existOptions.push(option)
          }
        })
        const selectedOptions = []
        this.selected.forEach(value => {
          const option = existOptions.find(option => option.id === value)
          if (option) {
            selectedOptions.push(option)
          }
        })
        this.selectedOptions = selectedOptions
      } else {
        this.selectedOptions = this.optionsMap[this.selected]
      }
    },
    getPopoverInstance () {
      return this.$refs.selectDropdown.instance
    },
    close () {
      const popover = this.getPopoverInstance()
      popover.hide()
    },
    show () {
      const popover = this.getPopoverInstance()
      popover.show()
    },
    updatePopoverPosition () {
      if (this.focus) {
        const popover = this.getPopoverInstance()
        popover.popperInstance.scheduleUpdate()
      }
    },
    setDropdownState () {
      const popover = this.getPopoverInstance()
      if (this.dropdownActive) {
        popover.enable()
      } else {
        popover.disable()
      }
    },
    setDropdownCallback () {
      const popover = this.getPopoverInstance()
      popover.set({
        onShown: () => {
          if (this.showSearch) {
            this.$refs.searchInput && this.$refs.searchInput.focus()
          }
        }
      })
    },
    handleDropdownShow () {
      this.defaultWidth = this.$el.offsetWidth
      if (this.autoHeight) this.focus = true
    },
    handleDropdownHide () {
      this.focus = false
    },
    handleInputChange (e) {
      const value = e.target.value
      this.$emit('input', value)
      this.$emit('change', value, this.value)
    },
    registerOption (option) {
      if (this.enableVirtualScroll) return
      this.options.push(option)
      this.$set(this.optionsMap, option.id, option)
    },
    removeOption (option) {
      if (this.enableVirtualScroll) return
      const index = this.options.indexOf(option)
      if (index > -1) {
        this.options.splice(index, 1)
      }
    },
    selectOption (option) {
      if (this.multiple) {
        if (!this.shouldUpdate) {
          this.selectedOptions.push(option)
        }
        this.selected = [...this.selected, option.id]
      } else {
        if (!this.shouldUpdate) {
          this.selectedOptions = option
        }
        this.selected = option.id
        this.close()
      }
      this.$nextTick(() => {
        this.$emit('selected', this.selected, this.selectedOptions)
      })
      this.focusTagInput()
    },
    unselectOption (option) {
      if (this.multiple) {
        if (!this.shouldUpdate) {
          this.selectedOptions = this.selectedOptions.filter(selectedOption => selectedOption.id !== option.id)
        }
        this.selected = this.selected.filter(value => value !== option.id)
      } else {
        this.setSelectedOptions = null
        this.reset()
      }
      this.$nextTick(() => {
        this.$emit('selected', this.selected, this.selectedOptions)
      })
    },
    reset () {
      this.selectedOptions = this.multiple ? [] : null
      const prevSelected = this.multiple ? [...this.selected] : this.selected
      this.selected = this.multiple ? [] : ''
      this.$nextTick(() => {
        this.$emit('clear', prevSelected)
      })
    },
    selectAll () {
      this.selected = this.options.filter(option => !option.disabled).map(option => option.id)
    },
    search () {
      this.searchLoading = true
      let searchValue = String(this.searchValue).trim()
      if (searchValue) {
        if (this.searchIgnoreCase) {
          searchValue = searchValue.toLowerCase()
        }
        this.options.forEach(option => {
          if (this.searchIgnoreCase) {
            option.unmatched = option.lowerName.indexOf(searchValue) < 0
          } else {
            option.unmatched = option.name.indexOf(searchValue) < 0
          }
          if (option.unmatched && this.searchWithPinyin) {
            const pinyinList = pinyin.parse(this.searchIgnoreCase ? option.lowerName : option.name).map(v => {
              if (v.type === 2) {
                return v.target.toLowerCase()
              }
              return v.target
            })
            const pinyinStr = pinyinList.reduce((res, cur) => res + cur[0], '')
            option.unmatched = pinyinList.join('').indexOf(searchValue) < 0 && pinyinStr.indexOf(searchValue) < 0
          }
        })
      } else {
        this.options.forEach(option => {
          option.unmatched = false
        })
      }
      this.showVirtualScroll()
      this.searchLoading = false
    },
    async remoteSearch () {
      try {
        this.searchLoading = true
        await this.remoteMethod(this.searchValue)
      } catch (e) {
        console.error(e)
      } finally {
        this.searchLoading = false
      }
    },
    resetSearchValue () {
      this.searchValue = ''
    },
    isSame (source, target) {
      const isArray = Array.isArray(source) && Array.isArray(target)
      if (isArray) {
        if (source.length !== target.length) {
          return false
        }
        return !source.some((value, index) => value !== target[index])
      }
      return source === target
    },
    handleClose () {
      this.close()
      this.$refs.bkSelect && this.$refs.bkSelect.focus()
    },
    ensureSearch () {
      if (!this.allowEnter) {
        return false
      }
      let option = {}
      this.options.some((item) => {
        // 根据unmatched，过滤的列表值确定筛选不对,所以根据name重新查找
        const searchValue = this.searchValue
        let data = item
        if (item.$options) {
          data = item.$options.propsData
        }
        const name = data.name
        if (typeof name === 'string' && this.searchWithPinyin) {
          const pinyinList = pinyin.parse(name).map(v => {
            if (v.type === 2) {
              return v.target.toLowerCase()
            }
            return v.target
          })
          const pinyinStr = pinyinList.reduce((res, cur) => res + cur[0], '')
          if (pinyinList.join('').indexOf(searchValue) !== -1 || pinyinStr.indexOf(searchValue) !== -1) {
            option = data
            return true
          }
          return pinyinList.join('').indexOf(searchValue) !== -1 || pinyinStr.indexOf(searchValue) !== -1
        } else {
          if (`${name}`.includes(this.searchValue)) {
            option = data
            return true
          }
        }
        return false
      })
      if (option && Object.keys(option).length !== 0) {
        if (this.multiple && this.selected.includes(option.id)) {
          return false
        }
        this.selectOption(option)
      } else {
        if (this.allowCreate) {
          this.$refs.createInput.value = this.searchValue
          this.handleInputChange({ target: { value: this.searchValue } })
        }
      }
    },
    handleTabRemove (options) {
      this.$emit('tab-remove', options)
    },
    handleScroll () {
      this.optionList = this.$refs.optionList
      this.optionList.onscroll = debounce(this.listenScroll, 300, this.optionList)
    },
    listenScroll (e, optionList) {
      if (this.scrollEndLoading.isLoading) return
      if (optionList.scrollHeight - (optionList.clientHeight + optionList.scrollTop) < 30) {
        this.$emit('scroll-end', true)
      }
    },
    handleCreateTag (value) {
      if (!value
        || this.optionsMap[value]
        || this.allowCreateData.find(item => item.id === value)) return

      this.allowCreateData.push({
        id: value,
        name: value
      })
      this.selected.push(value)
    },
    focusTagInput () {
      this.$refs.bkSelectTag && this.$refs.bkSelectTag.focusInput()
    }
  }
}
</script>

<style>
  @import '../../ui/select.css';
</style>
