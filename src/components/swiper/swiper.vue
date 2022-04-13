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
  <section
    ref="swiper"
    :class="['bk-swiper-home', extCls]"
    :style="{
      width: `${realWidth}px`,
      height: `${realHeight}px`
    }"
    v-if="sourceList.length"
  >
    <hgroup :style="{ width: `${swiperMainWith}px`, transform: `translateX(${imageTransfer}px)` }"
      :class="[{ 'bk-transition': isTransition }, 'bk-swiper-main']"
      @mousedown="moveStart"
      @mousemove="moving"
      @mouseup="moveEnd"
      @mouseout="moveEnd"
      @transitionend="transitionend"
    >
      <h3 class="bk-swiper-card" v-for="(pic, index) in dataList" :key="index" :style="{ 'width': `${realWidth}px` }">
        <slot :data="pic">
          <span @click="goToLink(pic.link)"
            :class="[{ 'bk-swiper-link': pic.link }, pic.class, 'bk-swiper-img']"
            :style="{ 'background-image': `url(${pic.url})`, 'background-color': pic.color }"
          >
          </span>
        </slot>
      </h3>
    </hgroup>
    <ul class="bk-swiper-index">
      <li v-for="(pic, index) in sourceList"
        :key="index"
        :class="{ 'bk-current-index': currentIndex === index + 1 }"
        @mouseover="changeIndex(index + 1)"
      >
      </li>
    </ul>
    <span class="bk-swiper-nav bk-nav-prev" @click="changeIndex(currentIndex - 1)">
      <i class="bk-swiper-nav-icon"></i>
    </span>
    <span class="bk-swiper-nav bk-nav-next" @click="changeIndex(currentIndex + 1)">
      <i class="bk-swiper-nav-icon"></i>
    </span>
  </section>
</template>

<script>
const getElementSize = (node) => {
  if (node === undefined) {
    return {
      height: 0,
      width: 0
    }
  }
  const computedStyle = getComputedStyle(node)
  const width = node.clientWidth - parseFloat(computedStyle.paddingTop) - parseFloat(computedStyle.paddingBottom)
  const height = node.clientHeight - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight)
  return {
    height,
    width
  }
}

export default {
  name: 'bk-swiper',

  props: {
    pics: {
      type: Array,
      default: () => []
    },

    list: {
      type: Array,
      default: () => []
    },

    isLoop: {
      type: Boolean,
      default: true
    },

    loopTime: {
      type: Number,
      default: 8000
    },

    // 外部设置的 class name
    extCls: {
      type: String,
      default: ''
    },

    height: {
      type: [Number, String],
      default: 0
    },

    width: {
      type: [Number, String],
      default: 0
    }
  },

  data () {
    return {
      currentIndex: 1, // 轮播图索引
      isStartMove: false,
      isTransition: false,
      startMovePoint: 0,
      mouseDistance: 0,
      loopId: '',
      isClick: false,
      realWidth: 0,
      realHeight: 0,
      resizeObserver: {}
    }
  },

  computed: {
    sourceList () {
      return this.list.length > 0 ? this.list : this.pics
    },

    dataList () {
      const first = this.sourceList[0]
      const last = this.sourceList.slice(-1)
      return [...last, ...this.sourceList, first]
    },

    swiperMainWith () {
      return this.realWidth * this.dataList.length
    },

    imageTransfer () {
      const indexMove = this.realWidth * this.currentIndex
      const imageMove = indexMove - this.mouseDistance
      return -imageMove
    }
  },

  watch: {
    currentIndex: {
      handler (val) {
        if (val <= 0 || val > this.dataList.length - 2) return

        this.$emit('index-change', val)
      },
      immediate: true
    },

    height () {
      this.calcSize()
    },

    width () {
      this.calcSize()
    }
  },

  mounted () {
    this.initStatus()
  },

  beforeDestroy () {
    this.destoryStatus()
  },

  methods: {
    calcSize () {
      const swiperParentSize = getElementSize(this.$refs.swiper && this.$refs.swiper.parentElement)
      this.realWidth = +this.width > 0 ? this.width : swiperParentSize.width || 400
      this.realHeight = +this.height > 0 ? this.height : swiperParentSize.height || 300
    },

    initStatus () {
      this.calcSize()
      this.startLoop()
      this.watchParentSizeChange()

      document.addEventListener('visibilitychange', this.visChange)
    },

    destoryStatus () {
      this.endLoop()
      this.endWatchParentSizeChange()
      document.removeEventListener('visibilitychange', this.visChange)
    },

    watchParentSizeChange () {
      const parentEle = this.$refs.swiper && this.$refs.swiper.parentElement
      if (!parentEle || !window.ResizeObserver) {
        return
      }
      this.resizeObserver = new ResizeObserver(() => {
        this.calcSize()
      })
      this.resizeObserver.observe(parentEle)
    },

    endWatchParentSizeChange () {
      if (this.resizeObserver && this.resizeObserver.disconnect) {
        this.resizeObserver.disconnect()
      }
    },

    goToLink (link) {
      if (this.isClick && link) window.open(link, '_blank')
    },

    visChange (event) {
      const hidden = event.target.hidden || false
      if (hidden) this.endLoop()
      else this.startLoop()
    },

    changeIndex (index) {
      this.isTransition = true
      this.startLoop()
      this.changeCurrentIndex(index)
    },

    moveStart (event) {
      this.endLoop()
      event.preventDefault()
      this.isTransition = false
      this.isStartMove = true
      this.startMovePoint = event.clientX
    },

    moving (event) {
      if (!this.isStartMove) return
      const mouseMove = event.clientX - this.startMovePoint
      this.mouseDistance = mouseMove
    },

    moveEnd (event) {
      if (!this.isStartMove) return

      const threshold = this.realWidth / 3
      const absMouseDis = Math.abs(this.mouseDistance)

      this.isClick = this.isStartMove && absMouseDis < 5
      if (absMouseDis > threshold) {
        const index = this.currentIndex - absMouseDis / this.mouseDistance
        this.changeCurrentIndex(index)
      }
      this.startLoop()
      this.isTransition = true
      this.isStartMove = false
      this.mouseDistance = 0
    },

    changeCurrentIndex (val) {
      const picLength = this.dataList.length
      if (val <= -1) {
        val = picLength - 2
      } else if (this.currentIndex >= picLength) {
        val = 1
      }
      this.currentIndex = val
    },

    transitionend () {
      const picLength = this.dataList.length - 1
      if (this.currentIndex <= 0) {
        this.isTransition = false
        this.currentIndex = picLength - 1
      } else if (this.currentIndex >= picLength) {
        this.isTransition = false
        this.currentIndex = 1
      }
    },

    startLoop () {
      if (!this.isLoop) return

      this.endLoop()
      this.loopId = window.setTimeout(() => {
        this.isTransition = true
        this.changeCurrentIndex(this.currentIndex + 1)
        this.startLoop()
      }, this.loopTime)
    },

    endLoop () {
      window.clearTimeout(this.loopId)
    }
  }
}
</script>

<style>
  @import '../../ui/swiper.css';
</style>
