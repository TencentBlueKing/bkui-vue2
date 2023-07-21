
import JSONFormatter from 'json-formatter-js'
import ClipboardJS from 'clipboard'
import locale from 'bk-magic-vue/lib/locale'

/**
 * @file message entry
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

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
  computed: {
    defActionList () {
      return {
        [IMessageActionType.ASSISTANT]: {
          id: IMessageActionType.ASSISTANT,
          icon: (h) => h('span', { class: 'bk-icon icon-weixin-pro' }),
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
    }
  },
  methods: {
    handleCloseClick () {
      this.$emit('close')
    },
    handleHeplerClick (e) {
      if (this.message.assistant) {
        window.open(this.message.assistant, '_blank')
      }
    },
    setDetailsShow (e, isShow) {
      this.toolOperation.isDetailShow = isShow !== undefined ? isShow : !this.toolOperation.isDetailShow
      this.fixMesage(e, this.toolOperation.isDetailShow)

      if (
        this.toolOperation.isDetailShow
        && typeof this.message === 'object'
        && (this.message.type === MessageContentType.JSON || !this.message.type)
      ) {
        const targetJson = this.parseJson(this.message.details)
        const formatter = new JSONFormatter(targetJson)
        setTimeout(() => {
          if (this.$refs.refJsonContent) {
            this.$refs.refJsonContent.innerHTML = ''
            this.$refs.refJsonContent.append(formatter.render())
          }
        })
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
    copyMessage () {
      if (this.isInstallClipboardJS) {
        return
      }

      const copyInstance = new ClipboardJS(this.$refs.refCopyMsgDiv, {
        text: () => this.message.details
      });

      ['success', 'error'].forEach((theme) => {
        copyInstance.on(theme, () => {
          const target = this.$refs.refCopyStatus
          this.copyStatus = theme
          if (target) {
            target.classList.remove(...['success', 'error', 'is-hidden'])
            target.classList.add(...[theme, 'is-show'])
            this.copyStatusTimer && clearTimeout(this.copyStatusTimer)
            this.copyStatusTimer = setTimeout(() => {
              target.classList.remove(...['is-show'])
              target.classList.add(...['is-hidden'])
            }, 2000)
          }
        })
        this.isInstallClipboardJS = true
        setTimeout(() => {
          this.$refs.refCopyMsgDiv.click()
        })
      })
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
            target[key]
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
      this.toolOperation.isDetailShow
        ? h('div', { class: 'message-detail' }, [
          h('div', { class: 'message-copy', ref: 'refCopyMsgDiv', on: { click: this.copyMessage } }, [
            h('span', { class: 'bk-icon icon-copy-shape' }),
            h('div', { class: ['copy-status', this.copyStatus], ref: 'refCopyStatus' }, [
              h('div', { class: 'inner' }, [
                h('span', { class: [iconMap[this.copyStatus], this.copyStatus] }),
                this.copyStatus === 'success' ? this.t('bk.message.copySuccess') : this.t('bk.message.copyFailed')
              ])
            ])
          ]),
          h('div', { class: 'message-tree', ref: 'refJsonContent' }, [
            renderMsgDetail(this.message)
          ])
        ]) : null
    ])
  }
}
