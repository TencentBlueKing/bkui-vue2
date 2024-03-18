
const instanceStore = new WeakMap()
let activeModal

const appendMaskDiv = (target) => {
  const div = document.createElement('div')
  div.style.setProperty('position', 'fixed')
  div.style.setProperty('left', '0')
  div.style.setProperty('top', '0')
  div.style.setProperty('width', '100%')
  div.style.setProperty('height', '100%')
  if (target.firstChild) {
    return target.insertBefore(div, target.firstChild)
  }

  return null
}

const loopSetMaskStyle = (modal, show) => {
  if (!modal) {
    return
  }

  if (instanceStore.has(modal)) {
    const { mask, backgroundColor } = instanceStore.get(modal)
    if (mask) {
      mask.style.setProperty('background-color', show ? 'transparent' : backgroundColor)
    }
  }
}

const showMask = (options) => {
  if (!options.el || options.showMask === false) {
    return
  }

  if (!instanceStore.has(options.el)) {
    const mask = appendMaskDiv(options.el)
    mask.style.setProperty('background-color', options.backgroundColor)
    instanceStore.set(options.el, {
      ...options,
      mask,
      referenceParent: activeModal
    })

    if (typeof options.onClick === 'function') {
      mask.addEventListener('click', options.onClick)
    }
  }

  const mask = instanceStore.get(options.el).mask
  if (mask) {
    mask.style.setProperty('display', 'inherit')
  }

  loopSetMaskStyle(activeModal, options.showMask)
  activeModal = options.el
}

const hideMask = (options) => {
  if (options.el && instanceStore.has(options.el)) {
    const { referenceParent, mask } = instanceStore.get(options.el)
    activeModal = referenceParent
    loopSetMaskStyle(referenceParent, false)
    if (mask) {
      mask.style.setProperty('display', 'none')
    }
  }
}

export default { showMask, hideMask }
