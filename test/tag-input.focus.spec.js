const assert = require('assert')
const fs = require('fs')
const path = require('path')
const vm = require('vm')

function loadTagInputComponent () {
  const filePath = path.resolve(__dirname, '../src/components/tag-input/tag-input.vue')
  const content = fs.readFileSync(filePath, 'utf8')
  const scriptMatch = content.match(/<script>([\s\S]*?)<\/script>/)

  if (!scriptMatch) {
    throw new Error('Cannot find tag-input script block')
  }

  const stubs = `
    const listRender = {}
    const tagRender = {}
    const bkPopover = {}
    const bkLoading = {}
    const bkTooltips = {}
    const bkOverflowTips = {}
    const locale = { mixin: {} }
    const emitter = {}
  `

  const script = scriptMatch[1]
    .split('\n')
    .filter(line => !line.trim().startsWith('import '))
    .join('\n')
    .replace('export default', 'module.exports =')

  const targetModule = { exports: {} }
  vm.runInNewContext(`${stubs}\n${script}`, {
    module: targetModule,
    exports: targetModule.exports,
    setTimeout,
    clearTimeout
  }, {
    filename: filePath
  })

  return targetModule.exports
}

function getDefaultPropValue (config) {
  if (!Object.prototype.hasOwnProperty.call(config, 'default')) {
    return undefined
  }

  if (typeof config.default === 'function' && config.type !== Function) {
    return config.default()
  }

  return config.default
}

function createRefs () {
  const tagList = {
    childNodes: [],
    appendChild (node) {
      this.childNodes = this.childNodes.filter(item => item !== node)
      this.childNodes.push(node)
      node.parentNode = this
    },
    insertBefore (newElement, targetElement) {
      this.childNodes = this.childNodes.filter(item => item !== newElement)
      const targetIndex = this.childNodes.indexOf(targetElement)
      const insertIndex = targetIndex === -1 ? this.childNodes.length : targetIndex
      this.childNodes.splice(insertIndex, 0, newElement)
      newElement.parentNode = this
    },
    querySelectorAll () {
      return []
    }
  }
  const staffInput = {
    id: 'staffInput',
    offsetLeft: 0,
    offsetTop: 0,
    getAttribute (name) {
      return name === 'role' ? 'input' : null
    },
    nextSibling: null,
    parentNode: tagList
  }

  tagList.childNodes.push(staffInput)

  return {
    bkTagSelector: {
      clientWidth: 300
    },
    tagInputDropdown: {
      instance: {
        state: {
          isShown: false
        },
        set () {},
        show () {
          this.state.isShown = true
        },
        popperInstance: {
          update () {}
        }
      }
    },
    selectorList: {
      scrollTop: 0,
      removeEventListener () {},
      addEventListener () {}
    },
    tagList,
    staffInput,
    input: {
      style: {},
      focus () {}
    }
  }
}

function createTagInputInstance (propOverrides) {
  const component = loadTagInputComponent()
  const props = Object.keys(component.props).reduce((result, key) => {
    result[key] = getDefaultPropValue(component.props[key])
    return result
  }, {})

  const emitted = []
  const vm = {
    ...props,
    ...propOverrides,
    emitted,
    $refs: createRefs(),
    $emit (...args) {
      emitted.push(args)
    },
    dispatch () {},
    t (key) {
      return key
    },
    $nextTick (callback) {
      if (typeof callback === 'function') {
        callback()
      }
      return Promise.resolve()
    }
  }

  Object.assign(vm, component.data.call(vm))
  Object.keys(component.methods).forEach(methodName => {
    vm[methodName] = component.methods[methodName].bind(vm)
  })
  component.created.call(vm)
  vm.bkTagSelector = vm.$refs.bkTagSelector
  vm.popoverInstance = vm.$refs.tagInputDropdown

  return vm
}

function createSelectedSingleTagInput (propOverrides = {}) {
  return createTagInputInstance({
    value: ['apple'],
    list: [
      { id: 'apple', name: 'Apple' },
      { id: 'banana', name: 'Banana' }
    ],
    maxData: 1,
    allowCreate: true,
    trigger: 'focus',
    ...propOverrides
  })
}

function focusInput (vm) {
  vm.focusInputer({
    target: {
      className: 'bk-tag-input'
    }
  })
}

function testSingleSelectKeepsEditModeByDefault () {
  const vm = createSelectedSingleTagInput()

  focusInput(vm)

  assert.deepStrictEqual(Array.from(vm.tagList), [])
  assert.strictEqual(vm.localTagList.length, 0)
  assert.strictEqual(vm.curInputValue, 'apple')
  assert.deepStrictEqual(Array.from(vm.renderList).map(item => item.id), ['apple', 'banana'])
}

function testSingleSelectCanKeepSelectedTagOnFocus () {
  const vm = createSelectedSingleTagInput({
    keepSelectedTagOnFocus: true
  })

  assert.deepStrictEqual(Array.from(vm.tagList), ['apple'])
  assert.strictEqual(vm.localTagList[0].name, 'Apple')

  focusInput(vm)

  assert.deepStrictEqual(Array.from(vm.tagList), ['apple'])
  assert.strictEqual(vm.localTagList.length, 1)
  assert.strictEqual(vm.localTagList[0].name, 'Apple')
  assert.strictEqual(vm.curInputValue, '')

  vm.curInputValue = 'ba'
  vm.handleInput({
    target: {
      value: 'ba'
    }
  })

  assert.deepStrictEqual(Array.from(vm.tagList), ['apple'])
  assert.deepStrictEqual(Array.from(vm.renderList).map(item => item.id), ['banana'])
  assert.strictEqual(vm.emitted.some(([eventName]) => eventName === 'remove'), false)
}

function run () {
  testSingleSelectKeepsEditModeByDefault()
  testSingleSelectCanKeepSelectedTagOnFocus()
}

run()
