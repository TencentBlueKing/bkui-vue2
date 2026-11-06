const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const uiDir = path.join(root, 'src/ui')
const compDir = path.join(root, 'src/components')
const outDir = path.join(root, 'tool/out')

const SKIP_CSS = new Set([
    'bk.css',
    'variable.css',
    'global-variable.css',
    'reset.css',
    'iconfont.css',
    'transition.css'
])

const NAMES = {
    affix: '固钉',
    alert: '警告提示',
    'back-top': '回到顶部',
    badge: '徽标',
    'big-tree': '大树',
    breadcrumb: '面包屑',
    button: '按钮',
    card: '卡片',
    cascade: '级联选择',
    checkbox: '复选框',
    collapse: '折叠面板',
    'collapse-item': '折叠项',
    'color-picker': '颜色选择器',
    common: '公共样式',
    'compose-form-item': '组合表单项',
    container: '容器',
    col: '列',
    'date-picker': '日期选择',
    dialog: '对话框',
    diff: '差异对比',
    divider: '分割线',
    'dropdown-menu': '下拉菜单',
    exception: '异常页',
    'fixed-navbar': '固定导航',
    form: '表单',
    image: '图片',
    'image-viewer': '图片预览',
    'info-box': '信息框',
    input: '输入框',
    link: '链接',
    loading: '加载',
    message: '消息提示',
    navigation: '导航',
    'navigation-menu': '导航菜单',
    'navigation-menu-group': '导航菜单组',
    'navigation-menu-item': '导航菜单项',
    notify: '通知',
    'overflow-tips': '溢出提示',
    pagination: '分页',
    popconfirm: '气泡确认',
    popover: '弹出框',
    process: '流程',
    progress: '进度条',
    radio: '单选框',
    'radio-button': '单选按钮',
    rate: '评分',
    'resize-layout': '伸缩布局',
    'round-progress': '环形进度',
    row: '行',
    'search-select': '搜索选择',
    'search-select-menu': '搜索选择菜单',
    select: '选择器',
    sideslider: '侧栏',
    slider: '滑块',
    spin: '加载图标',
    star: '星星',
    steps: '步骤条',
    swiper: '轮播',
    switcher: '开关',
    tab: '选项卡',
    table: '表格',
    tag: '标签',
    'tag-input': '标签输入',
    timeline: '时间轴',
    'time-picker': '时间选择',
    tooltips: '文字提示',
    transfer: '穿梭框',
    tree: '树',
    upload: '上传',
    'version-detail': '版本详情',
    'virtual-render': '虚拟渲染',
    'virtual-scroll': '虚拟滚动',
    'zoom-image': '缩放图片'
}

function stripComments (css) {
    return css
        .replace(/\/\*[\s\S]*?\*\//g, '')
        .replace(/(^|[^:\\])\/\/.*$/gm, '$1')
}

function read (file) {
    return fs.readFileSync(file, 'utf8')
}

function parseDollarVars (css) {
    const vars = Object.create(null)
    const re = /(^|[{\s;])\$([A-Za-z_][\w-]*)\s*:\s*([^;]+);/g
    let match = re.exec(css)
    while (match) {
        vars[match[2]] = match[3].trim()
        match = re.exec(css)
    }
    return vars
}

function resolveDollar (expr, vars, seen) {
    const token = String(expr).trim()
    const nameMatch = token.match(/^\$([A-Za-z_][\w-]*)$/)
    if (!nameMatch) {
        return token
    }
    const name = nameMatch[1]
    if (!vars[name] || (seen && seen.has(name))) {
        return token
    }
    const nextSeen = new Set(seen || [])
    nextSeen.add(name)
    return resolveDollar(vars[name], vars, nextSeen)
}

function expandHex (hex) {
    let value = hex.slice(1)
    if (value.length === 3) {
        value = value.split('').map(char => char + char).join('')
    }
    if (value.length === 4) {
        value = value.split('').map(char => char + char).join('')
    }
    return value.toUpperCase()
}

function namedColor (value) {
    const map = {
        white: 'FFFFFF',
        black: '000000',
        red: 'FF0000',
        transparent: null
    }
    const key = value.toLowerCase()
    if (Object.prototype.hasOwnProperty.call(map, key)) {
        return map[key]
    }
    return undefined
}

function hexFromRgb (r, g, b) {
    return [r, g, b].map(channel => {
        const num = Number(channel)
        return Math.max(0, Math.min(255, num)).toString(16).padStart(2, '0')
    }).join('').toUpperCase()
}

function parseAlpha (alpha) {
    if (alpha === undefined) {
        return 1
    }
    const text = String(alpha).trim()
    if (text.endsWith('%')) {
        return Number(text.slice(0, -1)) / 100
    }
    return Number(text)
}

function classifyColor (rawInput, vars) {
    const original = String(rawInput).trim().replace(/!important/i, '').trim()
    const resolved = resolveDollar(original, vars)
    const source = original.startsWith('$') ? original : resolved

    const fn = resolved.match(/^(darken|lighten)\(\s*([^,]+)\s*,\s*([^)]+)\)\s*$/i)
    if (fn) {
        const inner = classifyColor(fn[2], vars)
        return {
            kind: 'function',
            display: `${fn[1].toLowerCase()}(${inner.display}, ${fn[3].trim()})`,
            token: null,
            source
        }
    }

    const colorFn = resolved.match(/^color\(\s*([^)]+?)\s+a\(\s*([^)]+?)\s*\)\s*\)$/i)
    if (colorFn) {
        const inner = classifyColor(colorFn[1], vars)
        const base = inner && inner.display ? inner.display : colorFn[1].trim()
        return {
            kind: 'function',
            display: `${base} / ${colorFn[2].trim()}`,
            token: null,
            source
        }
    }

    if (resolved.startsWith('$')) {
        return { kind: 'unknown', display: resolved, token: null, source }
    }

    const hex = resolved.match(/^#([0-9a-fA-F]{3,8})$/)
    if (hex) {
        const full = expandHex(resolved)
        if (full.length === 6) {
            return { kind: 'solid', display: `#${full}`, tokenKey: full, source }
        }
        if (full.length === 8 && full.slice(6) === 'FF') {
            return { kind: 'solid', display: `#${full.slice(0, 6)}`, tokenKey: full.slice(0, 6), source }
        }
        return { kind: 'alpha', display: `#${full}`, token: null, source }
    }

    const named = namedColor(resolved)
    if (named === null) {
        return null
    }
    if (named) {
        return { kind: 'solid', display: `#${named}`, tokenKey: named, source }
    }

    const rgb = resolved.match(/^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*(?:,\s*([0-9.]+%?)\s*)?\)$/i)
    if (rgb) {
        const alpha = parseAlpha(rgb[4])
        const key = hexFromRgb(rgb[1], rgb[2], rgb[3])
        if (!rgb[4] || alpha === 1) {
            return { kind: 'solid', display: `#${key}`, tokenKey: key, source }
        }
        if (alpha === 0) {
            return null
        }
        const alphaText = String(Math.round(alpha * 1000) / 1000)
        return {
            kind: 'alpha',
            display: `rgba(${Number(rgb[1])}, ${Number(rgb[2])}, ${Number(rgb[3])}, ${alphaText})`,
            token: null,
            source
        }
    }

    return null
}

function loadLayer1 () {
    const css = stripComments(read(path.join(uiDir, 'global-variable.css')))
    const colorMap = Object.create(null)
    const radiusMap = Object.create(null)
    const re = /(--bk-[a-z0-9-]+)\s*:\s*([^;]+);/g
    let match = re.exec(css)
    while (match) {
        const name = match[1]
        const value = match[2].trim()
        if (name.includes('radius')) {
            radiusMap[value.replace(/\s+/g, '').toLowerCase()] = name
            if (value === '0') {
                radiusMap['0px'] = name
            }
        } else {
            const parsed = classifyColor(value, {})
            if (parsed && parsed.tokenKey) {
                if (!colorMap[parsed.tokenKey]) {
                    colorMap[parsed.tokenKey] = name
                }
            }
        }
        match = re.exec(css)
    }
    return { colorMap, radiusMap }
}

function extractMixins (css) {
    const mixins = Object.create(null)
    const re = /@define-mixin\s+([\w-]+)\s*([^{]*)\{/g
    let match = re.exec(css)
    while (match) {
        const name = match[1]
        const start = match.index + match[0].length
        let depth = 1
        let i = start
        while (i < css.length && depth > 0) {
            if (css[i] === '{') depth += 1
            else if (css[i] === '}') depth -= 1
            i += 1
        }
        const body = css.slice(start, i - 1)
        const params = []
        const rawParams = match[2].trim()
        if (rawParams) {
            splitArgs(rawParams).forEach(part => {
                const bits = part.split(':')
                params.push({
                    name: bits[0].trim().replace(/^\$/, ''),
                    fallback: bits.slice(1).join(':').trim()
                })
            })
        }
        mixins[name] = { params, body }
        match = re.exec(css)
    }
    return mixins
}

function splitArgs (text) {
    const args = []
    let current = ''
    let depth = 0
    for (let i = 0; i < text.length; i += 1) {
        const char = text[i]
        if (char === '(') depth += 1
        if (char === ')') depth -= 1
        if (char === ',' && depth === 0) {
            if (current.trim()) args.push(current.trim())
            current = ''
        } else {
            current += char
        }
    }
    if (current.trim()) args.push(current.trim())
    return args
}

function removeMixinDefs (css) {
    let result = ''
    const re = /@define-mixin\s+[\w-]+\s*[^{]*\{/g
    let last = 0
    let match = re.exec(css)
    while (match) {
        result += css.slice(last, match.index)
        let depth = 1
        let index = match.index + match[0].length
        while (index < css.length && depth > 0) {
            if (css[index] === '{') depth += 1
            else if (css[index] === '}') depth -= 1
            index += 1
        }
        last = index
        match = re.exec(css)
    }
    result += css.slice(last)
    return result
}

function applyMixin (mixin, args) {
    let body = mixin.body
    const pairs = mixin.params.map((param, index) => {
        const arg = args[index] !== undefined && args[index] !== '' ? args[index] : param.fallback
        return { name: param.name, value: arg || '' }
    }).sort((a, b) => b.name.length - a.name.length)

    pairs.forEach(pair => {
        if (!pair.value) return
        const interp = new RegExp(`\\$\\(${pair.name}\\)`, 'g')
        const word = new RegExp(`\\$${pair.name}(?![A-Za-z0-9_-])`, 'g')
        body = body.replace(interp, pair.value).replace(word, pair.value)
    })
    return body
}

function expandMixins (css, mixins) {
    let output = css
    for (let round = 0; round < 6; round += 1) {
        const next = output.replace(/@mixin\s+([\w-]+)\s*([^;]*);/g, (full, name, argText) => {
            const mixin = mixins[name]
            if (!mixin) return ''
            return applyMixin(mixin, splitArgs(argText.trim()))
        })
        if (next === output) break
        output = next
    }
    return output
}

function walkDeclarations (css, visitor) {
    const stack = []
    let buffer = ''
    let paren = 0
    for (let i = 0; i < css.length; i += 1) {
        const char = css[i]
        if (char === '(') paren += 1
        else if (char === ')' && paren > 0) paren -= 1

        if (char === '{' && paren === 0) {
            stack.push(buffer.trim())
            buffer = ''
            continue
        }
        if (char === '}' && paren === 0) {
            stack.pop()
            buffer = ''
            continue
        }
        if (char === ';' && paren === 0) {
            const decl = buffer.trim()
            buffer = ''
            if (decl && decl.indexOf(':') > 0 && !decl.startsWith('@') && !decl.startsWith('$')) {
                const splitAt = decl.indexOf(':')
                const prop = decl.slice(0, splitAt).trim().toLowerCase()
                const value = decl.slice(splitAt + 1).trim()
                visitor(stack.filter(Boolean).join(' '), prop, value)
            }
            continue
        }
        buffer += char
    }
}

function readBalanced (value, openIndex) {
    let depth = 0
    for (let i = openIndex; i < value.length; i += 1) {
        if (value[i] === '(') depth += 1
        else if (value[i] === ')') {
            depth -= 1
            if (depth === 0) return value.slice(openIndex, i + 1)
        }
    }
    return value.slice(openIndex)
}

function findColorTokens (value) {
    const tokens = []
    const re = /#[0-9a-fA-F]{3,8}|\$[A-Za-z_][\w-]*|\b(?:rgba?|hsla?|darken|lighten|color)\(|\b(?:white|black|transparent|red)\b/gi
    let match = re.exec(value)
    while (match) {
        const found = match[0]
        if (found.endsWith('(')) {
            const full = readBalanced(value, match.index)
            tokens.push(full)
            re.lastIndex = match.index + full.length
        } else {
            tokens.push(found)
        }
        match = re.exec(value)
    }
    return tokens
}

const SOLID_PROPS = new Set([
    'color',
    'background',
    'background-color',
    'background-image',
    'border',
    'border-color',
    'border-top',
    'border-right',
    'border-bottom',
    'border-left',
    'border-top-color',
    'border-right-color',
    'border-bottom-color',
    'border-left-color',
    'outline',
    'outline-color',
    'fill',
    'stroke',
    'caret-color',
    'box-shadow',
    'text-shadow'
])

function propKind (prop, value) {
    if (prop === 'border-radius') return 'radius'
    if (prop === 'box-shadow' || prop === 'text-shadow') return 'shadow'
    if (prop === 'background-image' || /gradient\s*\(/i.test(value)) return 'gradient'
    if (prop.indexOf('background') === 0) return 'bg'
    if (prop.indexOf('border') === 0 || prop.indexOf('outline') === 0) return 'border'
    if (prop === 'color' || prop === 'fill' || prop === 'stroke' || prop === 'caret-color') return 'text'
    return null
}

function themeOf (selector) {
    const rules = [
        ['primary', /(^|[^a-z])primary([^a-z]|$)/],
        ['success', /(^|[^a-z])success([^a-z]|$)/],
        ['warning', /(^|[^a-z])warning([^a-z]|$)/],
        ['danger', /(^|[^a-z])danger([^a-z]|$)/],
        ['error', /(^|[^a-z])error([^a-z]|$)/],
        ['info', /(^|[^a-z])info([^a-z]|$)/]
    ]
    const text = selector.toLowerCase()
    for (let i = 0; i < rules.length; i += 1) {
        if (rules[i][1].test(text)) return rules[i][0]
    }
    return ''
}

function statesOf (selector) {
    const text = selector.toLowerCase()
    const states = []
    if (/disabled/.test(text)) states.push('disabled')
    if (/:hover|\.hover|is-hover/.test(text)) states.push('hover')
    if (/:active|\.active|is-active/.test(text)) states.push('active')
    if (/:focus|is-focus/.test(text)) states.push('focus')
    if (/:checked|is-checked/.test(text)) states.push('checked')
    if (/selected|is-select/.test(text)) states.push('selected')
    return states
}

function shortSelector (selector) {
    const classes = selector.match(/\.[\w-]+/g) || []
    const pseudo = selector.match(/:(hover|active|focus|checked|disabled)/g) || []
    const picked = classes.slice(-3).concat(pseudo.slice(0, 2))
    return picked.join('') || selector.slice(0, 80)
}

function radiusToken (value, radiusMap) {
    const compact = value.replace(/\s+/g, '').replace(/!important/i, '').toLowerCase()
    if (compact === '0' || compact === '0px') return radiusMap['0'] || '--bk-radius-none'
    return radiusMap[compact] || null
}

function isShapeRadius (value) {
    const compact = value.replace(/!important/ig, '').trim().toLowerCase()
    if (compact === '50%' || compact === '100%' || compact === '999px' || compact === '999') return false
    if (/[,%]/.test(compact)) return true
    const parts = compact.split(/\s+/)
    return parts.length > 1 && new Set(parts).size > 1
}

function collectFromCss (css, vars, layer1, bucket, origin) {
    walkDeclarations(css, (selector, prop, value) => {
        if (prop === 'border-radius') {
            const cleaned = value.replace(/!important/ig, '').trim()
            if (!cleaned || cleaned === 'inherit' || cleaned === 'unset') return
            bucket.radii.push({
                selector,
                value: cleaned,
                token: isShapeRadius(cleaned) ? null : radiusToken(cleaned, layer1.radiusMap),
                shape: isShapeRadius(cleaned) || cleaned === '50%' || cleaned === '100%',
                origin
            })
            return
        }
        const kind = propKind(prop, value)
        if (!kind || (!SOLID_PROPS.has(prop) && kind !== 'gradient')) return
        if (!SOLID_PROPS.has(prop)) return
        findColorTokens(value).forEach(token => {
            if (/^(transparent|inherit|currentcolor|none|unset|initial)$/i.test(token)) return
            const parsed = classifyColor(token, vars)
            if (!parsed) return
            const record = {
                selector,
                prop,
                kind: parsed.kind === 'solid' ? kind : parsed.kind === 'function' ? kind : kind,
                context: kind,
                display: parsed.display,
                token: parsed.tokenKey ? (layer1.colorMap[parsed.tokenKey] || null) : (parsed.baseToken || null),
                exact: Boolean(parsed.tokenKey && layer1.colorMap[parsed.tokenKey]),
                source: parsed.source,
                fn: parsed.kind !== 'solid',
                origin
            }
            if (kind === 'shadow') bucket.shadows.push(record)
            else bucket.colors.push(record)
        })
    })
}

function prepareCss (file, mixins, globalVars) {
    const raw = stripComments(read(file))
    const localVars = parseDollarVars(raw)
    const vars = Object.assign(Object.create(null), globalVars, localVars)
    const withoutDefs = removeMixinDefs(raw).replace(/@import[^;]+;/g, '')
    const expanded = expandMixins(withoutDefs, mixins)
    return { vars, css: expanded }
}

function componentOfCss (fileName) {
    if (fileName === 'date-picker.base.css') return 'date-picker'
    if (fileName === 'tooltips.css') return 'popover'
    return fileName.replace(/\.css$/, '')
}

function escapeCell (value) {
    return String(value || '').replace(/\|/g, '\\|').replace(/\n/g, ' ')
}

function titleOf (id) {
    const zh = NAMES[id] || id
    return `${id} ${zh}`
}

function buildVariableRows (id, bucket) {
    const groups = new Map()
    bucket.colors.forEach(record => {
        if (record.context === 'shadow') return
        const theme = themeOf(record.selector)
        const states = statesOf(record.selector)
        const key = [theme, states.join('-'), record.display, record.fn ? 'fn' : 'solid'].join('|')
        if (!groups.has(key)) {
            groups.set(key, {
                theme,
                states,
                display: record.display,
                exact: record.exact,
                token: record.exact ? record.token : null,
                fn: record.fn,
                kinds: new Set(),
                sources: new Set(),
                selectors: new Set(),
                count: 0
            })
        }
        const group = groups.get(key)
        group.kinds.add(record.context)
        group.sources.add(record.source)
        group.selectors.add(shortSelector(record.selector))
        group.count += 1
        if (record.exact) group.token = record.token
    })

    const rows = []
    Array.from(groups.values()).sort((a, b) => {
        return `${a.theme}${a.states.join()}${a.display}`.localeCompare(`${b.theme}${b.states.join()}${b.display}`)
    }).forEach(group => {
        const kinds = group.kinds
        let role = 'color'
        const hasText = kinds.has('text')
        const hasBg = kinds.has('bg')
        const hasBorder = kinds.has('border')
        if (hasText && !hasBg && !hasBorder) role = 'text-color'
        else if (hasBg && !hasText && !hasBorder) role = 'bg'
        else if (hasBorder && !hasText && !hasBg) role = 'border-color'
        else if ((hasBg || hasBorder) && !hasText) role = 'color'
        else role = 'color'

        const parts = [id]
        if (group.theme) parts.push(group.theme)
        if (group.states.length) parts.push(group.states.join('-'))
        parts.push(role)
        rows.push({
            name: `--bk-${parts.join('-')}`,
            token: group.token,
            display: group.display,
            note: [
                `当前 ${Array.from(group.sources).slice(0, 3).join('、')}`,
                `${Array.from(kinds).join('/')}`,
                `例如 ${Array.from(group.selectors).slice(0, 2).join('、')}`,
                group.count > 1 ? `共 ${group.count} 处` : ''
            ].filter(Boolean).join('。')
        })
    })

    const nameCount = Object.create(null)
    rows.forEach(row => {
        nameCount[row.name] = (nameCount[row.name] || 0) + 1
    })
    const seen = Object.create(null)
    rows.forEach(row => {
        if (nameCount[row.name] === 1) return
        seen[row.name] = (seen[row.name] || 0) + 1
        if (seen[row.name] > 1) row.name = `${row.name}-${seen[row.name]}`
    })

    const radiusGroups = new Map()
    bucket.radii.forEach(record => {
        const normalized = record.value.replace(/\s+/g, '').toLowerCase()
        if (record.shape || normalized === '50%' || normalized === '100%') {
            bucket.shapeRadii.push(record)
            return
        }
        const key = record.value.replace(/\s+/g, '').toLowerCase()
        if (!radiusGroups.has(key)) {
            radiusGroups.set(key, {
                value: record.value,
                token: record.token,
                selectors: new Set(),
                count: 0
            })
        }
        const group = radiusGroups.get(key)
        group.selectors.add(shortSelector(record.selector))
        group.count += 1
    })

    const radiusRows = []
    Array.from(radiusGroups.values()).sort((a, b) => a.value.localeCompare(b.value)).forEach(group => {
        const tokenSuffix = group.token ? group.token.replace('--bk-radius-', '') : ''
        const base = tokenSuffix ? `--bk-${id}-radius-${tokenSuffix}` : `--bk-${id}-radius`
        radiusRows.push({
            name: base,
            token: group.token,
            display: group.value,
            note: `例如 ${Array.from(group.selectors).slice(0, 2).join('、')}。共 ${group.count} 处`
        })
    })
    const radiusSeen = Object.create(null)
    radiusRows.forEach(row => {
        radiusSeen[row.name] = (radiusSeen[row.name] || 0) + 1
    })
    const radiusUsed = Object.create(null)
    radiusRows.forEach(row => {
        if (radiusSeen[row.name] === 1) return
        radiusUsed[row.name] = (radiusUsed[row.name] || 0) + 1
        if (radiusUsed[row.name] > 1) row.name = `${row.name}-${radiusUsed[row.name]}`
    })

    return { rows, radiusRows }
}

function mdTable (headers, rows) {
    const head = `| ${headers.join(' | ')} |`
    const split = `| ${headers.map(() => '---').join(' | ')} |`
    const body = rows.map(row => `| ${row.map(cell => escapeCell(cell)).join(' | ')} |`)
    return [head, split].concat(body).join('\n')
}

function main () {
    const layer1 = loadLayer1()
    const globalVars = parseDollarVars(stripComments(read(path.join(uiDir, 'variable.css'))))
    const mixins = Object.create(null)
    fs.readdirSync(path.join(uiDir, 'mixins')).forEach(name => {
        if (!name.endsWith('.css')) return
        Object.assign(mixins, extractMixins(stripComments(read(path.join(uiDir, 'mixins', name)))))
    })
    fs.readdirSync(uiDir).forEach(name => {
        if (!name.endsWith('.css') || SKIP_CSS.has(name)) return
        Object.assign(mixins, extractMixins(stripComments(read(path.join(uiDir, name)))))
    })

    const buckets = new Map()
    function bucketFor (id) {
        if (!buckets.has(id)) {
            buckets.set(id, { colors: [], radii: [], shadows: [], shapeRadii: [], scripts: [] })
        }
        return buckets.get(id)
    }

    fs.readdirSync(uiDir).forEach(name => {
        if (!name.endsWith('.css') || SKIP_CSS.has(name)) return
        const id = componentOfCss(name)
        const prepared = prepareCss(path.join(uiDir, name), mixins, globalVars)
        collectFromCss(prepared.css, prepared.vars, layer1, bucketFor(id), name)
    })

    fs.readdirSync(compDir).forEach(dir => {
        const folder = path.join(compDir, dir)
        if (!fs.statSync(folder).isDirectory()) return
        const id = dir
        fs.readdirSync(folder).forEach(name => {
            if (!/\.(vue|js)$/.test(name)) return
            const text = stripComments(read(path.join(folder, name)))
            const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi
            let styleMatch = styleRe.exec(text)
            const styleParts = []
            while (styleMatch) {
                styleParts.push(styleMatch[1])
                styleMatch = styleRe.exec(text)
            }
            if (styleParts.length) {
                const styleCss = styleParts.join('\n').replace(/@import[^;]+;/g, '')
                const localVars = Object.assign(Object.create(null), globalVars, parseDollarVars(styleCss))
                collectFromCss(expandMixins(removeMixinDefs(styleCss), mixins), localVars, layer1, bucketFor(id), `${dir}/${name}`)
            }
            const withoutStyle = text.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
            withoutStyle.split('\n').forEach(line => {
                const hexes = line.match(/#[0-9a-fA-F]{3,8}/g) || []
                hexes.forEach(hex => {
                    const parsed = classifyColor(hex, globalVars)
                    if (!parsed || !parsed.tokenKey) return
                    bucketFor(id).scripts.push({
                        display: parsed.display,
                        token: layer1.colorMap[parsed.tokenKey] || null,
                        exact: Boolean(layer1.colorMap[parsed.tokenKey]),
                        file: `${dir}/${name}`,
                        context: line.trim().slice(0, 140)
                    })
                })
            })
        })
    })

    const ids = Array.from(buckets.keys()).sort()
    const componentBlocks = []
    const unmatched = []
    const unmatchedRadius = []
    let varCount = 0
    let matchedVarCount = 0

    ids.forEach(id => {
        const bucket = buckets.get(id)
        const built = buildVariableRows(id, bucket)
        if (!built.rows.length && !built.radiusRows.length && !bucket.shapeRadii.length && !bucket.scripts.length) {
            return
        }
        const lines = [`## ${titleOf(id)}`, '']
        if (built.rows.length) {
            lines.push('### 颜色')
            lines.push('')
            lines.push(mdTable(
                ['组件变量', '引用的第一层变量', '默认值', '说明'],
                built.rows.map(row => {
                    varCount += 1
                    if (row.token) matchedVarCount += 1
                    else {
                        unmatched.push({
                            id,
                            display: row.display,
                            source: row.note,
                            name: row.name
                        })
                    }
                    return [row.name, row.token || '无', row.display, row.note]
                })
            ))
            lines.push('')
        }
        if (built.radiusRows.length) {
            lines.push('### 圆角')
            lines.push('')
            lines.push(mdTable(
                ['组件变量', '引用的第一层变量', '默认值', '说明'],
                built.radiusRows.map(row => {
                    varCount += 1
                    if (row.token) matchedVarCount += 1
                    else unmatchedRadius.push({ id, display: row.display, name: row.name, note: row.note })
                    return [row.name, row.token || '无', row.display, row.note]
                })
            ))
            lines.push('')
        }
        const shapes = bucket.shapeRadii
        if (shapes.length) {
            const shapeMap = new Map()
            shapes.forEach(item => {
                const key = item.value
                if (!shapeMap.has(key)) shapeMap.set(key, { count: 0, selector: shortSelector(item.selector) })
                shapeMap.get(key).count += 1
            })
            lines.push('### 保留原值的圆角')
            lines.push('')
            lines.push('这些是圆形或不对称圆角，不做成组件变量。')
            lines.push('')
            lines.push(mdTable(
                ['当前值', '出现次数', '示例'],
                Array.from(shapeMap.entries()).map(([value, info]) => [value, String(info.count), info.selector])
            ))
            lines.push('')
        }
        if (bucket.scripts.length) {
            lines.push('### 模板 / 脚本里的颜色')
            lines.push('')
            lines.push(mdTable(
                ['当前值', '引用的第一层变量', '位置', '前文'],
                bucket.scripts.map(item => {
                    if (!item.exact) {
                        unmatched.push({
                            id,
                            display: item.display,
                            source: `${item.file} ${item.context}`,
                            name: '模板/脚本'
                        })
                    }
                    return [item.display, item.token || '无', item.file, item.context]
                })
            ))
            lines.push('')
        }
        componentBlocks.push(lines.join('\n'))
    })

    const rawUnmatched = []
    ids.forEach(id => {
        const bucket = buckets.get(id)
        bucket.colors.forEach(record => {
            if (record.exact && !record.fn) return
            rawUnmatched.push({
                id,
                display: record.display,
                source: record.source,
                prop: record.prop,
                context: record.context,
                selector: shortSelector(record.selector),
                origin: record.origin,
                where: '样式'
            })
        })
        bucket.shadows.forEach(record => {
            if (record.exact && !record.fn) return
            rawUnmatched.push({
                id,
                display: record.display,
                source: record.source,
                prop: record.prop,
                context: 'shadow',
                selector: shortSelector(record.selector),
                origin: record.origin,
                where: '阴影'
            })
        })
        bucket.scripts.forEach(item => {
            if (item.exact) return
            rawUnmatched.push({
                id,
                display: item.display,
                source: item.display,
                prop: 'script',
                context: 'script',
                selector: item.context,
                origin: item.file,
                where: '模板/脚本'
            })
        })
    })

    const byValue = new Map()
    rawUnmatched.forEach(item => {
        const key = `${item.where}|${item.display}`
        if (!byValue.has(key)) {
            byValue.set(key, {
                where: item.where,
                display: item.display,
                count: 0,
                ids: new Set(),
                sources: new Set()
            })
        }
        const group = byValue.get(key)
        group.count += 1
        group.ids.add(item.id)
        group.sources.add(item.source)
    })

    const summaryRows = Array.from(byValue.values()).sort((a, b) => b.count - a.count || a.display.localeCompare(b.display))
    const solidSummary = summaryRows.filter(item => item.where === '样式')
    const shadowSummary = summaryRows.filter(item => item.where === '阴影')
    const scriptSummary = summaryRows.filter(item => item.where === '模板/脚本')

    const detailMap = new Map()
    rawUnmatched.forEach(item => {
        const key = [item.id, item.where, item.display, item.source, item.prop].join('|')
        if (!detailMap.has(key)) {
            detailMap.set(key, Object.assign({}, item, { count: 0, selectors: new Set() }))
        }
        const group = detailMap.get(key)
        group.count += 1
        group.selectors.add(item.selector)
    })
    const details = Array.from(detailMap.values()).sort((a, b) => {
        return a.id.localeCompare(b.id) || a.where.localeCompare(b.where) || b.count - a.count
    })

    const componentDoc = [
        '# bkui-vue2 第二层组件变量（草案）',
        '',
        '根据组件当前样式整理。还没有改组件代码。',
        '',
        '- 默认值是组件现在的颜色或圆角。按这个默认值接上后，外观不变。',
        '- 只有色值、圆角和第一层完全一致时，才填写「引用的第一层变量」。对不上的写「无」。',
        '- 对不上的颜色另见 `bkui-vue2-未匹配颜色.md`，那里按色值列全了。',
        '- 变量名末尾的 `-2`、`-3` 表示同一个状态里还有第二种、第三种颜色。常见情况是主题色和白色文字分开。',
        '- 背景和边框是同一个色时，合成一个 `color` 变量。只有文字时用 `text-color`。',
        '- 圆形 `50%` / `100%`、不对称圆角不做成变量，写在「保留原值的圆角」。',
        '',
        `建议变量 ${varCount} 条，其中能引用第一层 ${matchedVarCount} 条，对不上 ${varCount - matchedVarCount} 条。`,
        '',
        componentBlocks.join('\n')
    ].join('\n')

    function sectionTable (title, rows) {
        if (!rows.length) return `## ${title}\n\n无。\n`
        return [
            `## ${title}`,
            '',
            `不同色值 ${rows.length} 个。`,
            '',
            mdTable(
                ['色值', '出现次数', '组件', '当前写法'],
                rows.map(item => [
                    item.display,
                    String(item.count),
                    Array.from(item.ids).sort().join('、'),
                    Array.from(item.sources).slice(0, 6).join('、')
                ])
            ),
            ''
        ].join('\n')
    }

    const detailByComponent = new Map()
    details.forEach(item => {
        if (!detailByComponent.has(item.id)) detailByComponent.set(item.id, [])
        detailByComponent.get(item.id).push(item)
    })
    const detailBlocks = Array.from(detailByComponent.entries()).map(([id, items]) => {
        return [
            `## ${titleOf(id)}`,
            '',
            mdTable(
                ['色值', '出现次数', '来源', '当前写法', '属性', '示例位置'],
                items.map(item => [
                    item.display,
                    String(item.count),
                    item.where,
                    item.source,
                    item.prop,
                    Array.from(item.selectors).slice(0, 2).join('、')
                ])
            ),
            ''
        ].join('\n')
    })

    const unmatchedDoc = [
        '# bkui-vue2 对不上第一层的颜色',
        '',
        '只收录和 `global-variable.css` 色值不完全相同的颜色。同一种色值已合并，出现次数写在表里，没有少记。',
        '',
        '第一层只有实色。下面这些都算对不上：旧色板里的色、带透明度的色、`darken()`、`color()`。',
        '',
        '`color()` 写成 `色值 / 透明度`，例如 `#979BA5 / 10%`。',
        '',
        'color-picker 里的纯红、纯绿、纯蓝是取色器色板，不是界面主题色，也列在表里。',
        '',
        `样式实色 ${solidSummary.length} 个，阴影 ${shadowSummary.length} 个，模板/脚本 ${scriptSummary.length} 个。`,
        '',
        sectionTable('样式里的颜色', solidSummary),
        sectionTable('阴影里的颜色', shadowSummary),
        sectionTable('模板 / 脚本里的颜色', scriptSummary),
        '# 按组件',
        '',
        detailBlocks.join('\n'),
        '# 对不上的圆角',
        '',
        unmatchedRadius.length
            ? mdTable(
                ['组件', '建议变量', '当前值', '说明'],
                unmatchedRadius.map(item => [item.id, item.name, item.display, item.note])
            )
            : '无。',
        ''
    ].join('\n')

    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(path.join(outDir, 'bkui-vue2-组件层变量.md'), componentDoc)
    fs.writeFileSync(path.join(outDir, 'bkui-vue2-未匹配颜色.md'), unmatchedDoc)

    const button = buckets.get('button')
    const buttonExact = button.colors.filter(item => item.exact).length
    const buttonMiss = button.colors.filter(item => !item.exact).length
    console.log(JSON.stringify({
        components: ids.length,
        vars: varCount,
        matchedVars: matchedVarCount,
        unmatchedValues: solidSummary.length,
        buttonColors: button.colors.length,
        buttonExact,
        buttonMiss
    }, null, 2))
}

main()
