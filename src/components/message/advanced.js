
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
 * @file message entry
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */
import JSONFormatter from 'json-formatter-js'
import ClipboardJS from 'clipboard'
import locale from 'bk-magic-vue/lib/locale'

const IMessageActionType = {
  /**
   * 联系助手：默认直接拉起企业微信与助手的聊天，需要在 message.assistant 配置对应的企微群ID
   */
  ASSISTANT: 'assistant',

  /**
   * 展开详情：展开面向开发的详情
   */
  DETAILS: 'details',

  /**
   * 图钉按钮：点击后，Message 不会自动消失
   */
  FIX: 'fix',

  /**
   * 关闭：点击关闭，Message 消失
   */
  CLOSE: 'close'
}

const MessageContentType = {
  KEY_VALUE: 'key-value',
  JSON: 'json'
}

const sortActionIdList = [
  IMessageActionType.ASSISTANT,
  IMessageActionType.DETAILS,
  IMessageActionType.FIX,
  IMessageActionType.CLOSE
]

export default {
  name: 'bk-message-advanced',
  mixins: [locale.mixin],
  props: {
    message: {
      type: Object,
      default: () => ({})
    },
    actions: {
      type: Array,
      default: () => ([])
    },
    tipsIcon: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      toolOperation: {
        isFix: false,
        isDetailShow: false
      },
      isInstallClipboardJS: false,
      copyStatus: '',
      copyStatusTimer: null
    }
  },
  mounted () {
    this.addMouseKeyEvent()
  },
  beforeDestroy () {
    this.addMouseKeyEvent(true)
  },
  computed: {
    defActionList () {
      return {
        [IMessageActionType.ASSISTANT]: {
          id: IMessageActionType.ASSISTANT,
          icon: (h) => h('span', { class: 'bk-icon icon-assistant' }),
          text: () => this.t('bk.message.assistant'),
          onClick: (e) => this.handleHeplerClick(e)
        },
        [IMessageActionType.DETAILS]: {
          id: IMessageActionType.DETAILS,
          icon: (h) => (this.toolOperation.isDetailShow ? h('span', { class: 'bk-icon icon-angle-double-up' }) : h('span', { class: 'bk-icon icon-angle-double-down' })),
          text: () => this.t('bk.message.details'),
          onClick: (e) => this.setDetailsShow(e)
        },
        [IMessageActionType.FIX]: {
          id: IMessageActionType.FIX,
          icon: (h) => (this.toolOperation.isFix ? h('span', { class: 'bk-icon icon-fix-shape' }) : h('span', { class: 'bk-icon icon-fix-line' })),
          classList: this.toolOperation.isFix ? 'fixed' : '',
          onClick: (e) => this.fixMesage(e)
        },
        [IMessageActionType.CLOSE]: {
          id: IMessageActionType.CLOSE,
          classList: 'normal-color',
          icon: (h) => h('span', { class: 'bk-message-close' }, [
            h('i', { class: 'bk-icon icon-close' })
          ]),
          onClick: this.handleCloseClick
        }
      }
    },
    actionList () {
      if (this.actions && this.actions.length > 0) {
        const resultList = this.actions.map((action) => {
          const id = action.id.toLocaleLowerCase()
          const defAction = this.defActionList[id]
          const defClickFn = defAction.onClick
          const target = Object.assign({}, this.defActionList[id] || {}, action)
          target.id = id

          if (action.classList !== undefined) {
            const classList = Array.isArray(action.classList) ? action.classList : [action.classList]
            let defClassList = []
            if (defAction.classList !== undefined) {
              defClassList = Array.isArray(defAction.classList) ? defAction.classList : [defAction.classList]
            }

            target.classList = [...defClassList, ...classList]
          }

          if (typeof action.onClick === 'function') {
            target.onClick = () => {
              const resp = Reflect.apply(action.onClick, this, [])
              if ((typeof resp === 'undefined' || resp) && typeof defClickFn === 'function') {
                Reflect.apply(defClickFn, this, [])
              }
            }

            return target
          }

          target.onClick = defClickFn
          return target
        })
        const appendList = sortActionIdList
          .filter(id => !resultList.some(action => action.id === id))
          .map(id => this.defActionList[id])
        resultList.push(...appendList)
        return resultList
      }

      return sortActionIdList.map(id => this.defActionList[id])
    },
    isDetailShow () {
      return this.toolOperation.isDetailShow
    }
  },
  methods: {
    addMouseKeyEvent (remove = false) {
      if (remove) {
        document.removeEventListener('keydown', this.handleMouseKeyEvent)
        return
      }

      document.addEventListener('keydown', this.handleMouseKeyEvent)
    },
    handleMouseKeyEvent (e) {
      const { ctrlKey, altKey, keyCode } = e
      const { isFix } = this.toolOperation
      if (ctrlKey && altKey && keyCode === 80) {
        isFix && this.fixMesage(e, false)
        return
      }

      if (altKey && keyCode === 80) {
        !isFix && this.fixMesage(e, true)
      }
    },
    handleCloseClick () {
      this.$emit('close')
    },
    handleHeplerClick (e) {
      if (this.message.assistant) {
        window.open(this.message.assistant, '_blank')
      }
    },
    setDetailsShow (e, isShow) {
      this.toolOperation.isDetailShow = isShow !== undefined ? isShow : !this.isDetailShow
      this.$emit('message-show', this.isDetailShow)
      this.fixMesage(e, this.isDetailShow)

      if (
        this.isDetailShow
        && typeof this.message === 'object'
        && !this.message.hasOwnProperty('componentOptions')
      ) {
        if (this.message.type === MessageContentType.JSON || !this.message.type) {
          const targetJson = this.parseJson(this.message.details)
          const formatter = new JSONFormatter(targetJson)
          setTimeout(() => {
            if (this.$refs.refJsonContent) {
              this.$refs.refJsonContent.innerHTML = ''
              this.$refs.refJsonContent.append(formatter.render())
            }

            this.copyMessage()
          })
        }

        if (this.message.type === MessageContentType.KEY_VALUE) {
          setTimeout(() => {
            this.copyMessage()
            this.setCopyValueItems()
          })
        }
      }
    },
    fixMesage (e, isFix) {
      this.toolOperation.isFix = isFix !== undefined ? isFix : !this.toolOperation.isFix
      this.$emit('fix-message', this.toolOperation.isFix)
    },
    parseJson (value) {
      let targetJson = value
      if (typeof value === 'string') {
        try {
          targetJson = JSON.parse(value)
        } catch (e) {
          console.error(`Format Json Error: ${e}`)
        }
      }

      return targetJson
    },
    setCopyValueItems () {
      const copyInstance = new ClipboardJS(this.$refs.refJsonContent.querySelectorAll('span.copy-value'), {
        text: trigger => trigger.innerHTML
      })

      this.registerCopyCallback(copyInstance)
    },
    registerCopyCallback (copyInstance, complete) {
      ['success', 'error'].forEach((theme) => {
        copyInstance.on(theme, (e) => {
          console.log('registerCopyCallback theme', theme)
          const target = this.$refs.refCopyStatus
          this.copyStatus = theme
          this.$nextTick(() => {
            if (target) {
              const { offsetLeft, offsetWidth, offsetTop } = e.trigger
              target.classList.remove(...['success', 'error', 'is-hidden'])
              target.classList.add(...[theme, 'is-show'])
              const msgTree = e.trigger.closest('.message-tree')
              const msgTreeScrollTop = msgTree ? msgTree.scrollTop : 0
              const transX = offsetLeft + offsetWidth / 2 - 41
              const transY = offsetTop - msgTreeScrollTop - 40
              target.style.setProperty('transform', `translate(${transX}px, ${transY}px`)

              this.copyStatusTimer && clearTimeout(this.copyStatusTimer)
              this.copyStatusTimer = setTimeout(() => {
                target.classList.remove(...['is-show'])
                target.classList.add(...['is-hidden'])
              }, 2000)
            }

            if (typeof complete === 'function') {
              complete()
            }
          })
        })
      })
    },
    parseToString (value) {
      let targetStr = value
      if (typeof value === 'object') {
        try {
          targetStr = JSON.stringify(value)
        } catch (e) {
          console.error(`JSON.stringify Error: ${e}`)
        }
      }

      return targetStr
    },
    copyMessage () {
      const copyInstance = new ClipboardJS(this.$refs.refCopyMsgDiv, {
        text: () => this.parseToString(this.message.details)
      })

      this.registerCopyCallback(copyInstance)
    }
  },
  render (h) {
    const renderMsgDetail = (msg) => {
      if (msg.type === MessageContentType.KEY_VALUE) {
        const target = this.parseJson(msg.details || {})
        const keys = Object.keys(target)
        return keys.map(key => (
          h('div', { class: 'message-row' }, [
            h('label', key),
            h('span', { class: 'copy-value' }, target[key])
          ])
        ))
      }

      return null
    }

    const renderMessageActions = () => {
      const renderIcon = ({ icon }) => {
        if (typeof icon === 'function') {
          return Reflect.apply(icon, this, [h])
        }

        return h('span', { class: icon })
      }

      const renderText = ({ text }) => {
        let content
        if (typeof text === 'function') {
          content = Reflect.apply(text, this, [h])
        }

        if (content === undefined) {
          return
        }

        if (typeof content === 'string') {
          return h('span', { class: 'message-action-text' }, [content])
        }

        return content
      }

      const handleActionClick = (e, action) => {
        if (action.readonly || action.disabled) {
          return
        }

        if (typeof action.onClick === 'function') {
          Reflect.apply(action.onClick, this, [e, action])
        }
      }

      const renderActionList = () => this.actionList.map((action) => {
        if (action.disabled) {
          return null
        }

        if (typeof action.render === 'function') {
          return Reflect.apply(action.render, this, [])
        }

        const classList = Array.isArray(action.classList) ? action.classList.join(' ') : action.classList

        return h('div', {
          class: ['tool', action.id, classList],
          on: { click: e => handleActionClick(e, action) }
        }, [
          renderIcon(action),
          renderText(action)
        ])
      })

      return renderActionList()
    }

    const iconMap = {
      success: 'bk-icon icon-check-circle-shape',
      error: 'bk-icon icon-close-circle-shape'
    }

    return h('div', { class: 'bk-message-content multi' }, [
      h('div', { class: 'overview' }, [
        h('div', { class: 'left-content' }, [
          h('div', { class: 'bk-message-icon' }, [
            h('i', { class: ['bk-icon', this.tipsIcon] })
          ]),
          h('div', { class: 'describe' }, this.message.title || `【${this.message.code}】${this.message.overview} ${this.message.suggestion}`)
        ]),
        h('div', { class: 'tools' }, [renderMessageActions()])
      ]),
      this.isDetailShow
        ? h('div', { class: 'message-detail' }, [
          h('div', { class: 'message-copy', ref: 'refCopyMsgDiv' }, [
            h('span', { class: 'bk-icon icon-copy-shape' })
          ]),
          h('div', { class: ['copy-status', this.copyStatus], ref: 'refCopyStatus' }, [
            h('div', { class: 'inner' }, [
              h('span', { class: [iconMap[this.copyStatus], this.copyStatus] }),
              this.copyStatus === 'success' ? this.t('bk.message.copySuccess') : this.t('bk.message.copyFailed')
            ])
          ]),
          h('div', { class: 'message-tree', ref: 'refJsonContent' }, [
            renderMsgDetail(this.message)
          ])
        ]) : null
    ])
  }
}
