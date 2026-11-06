const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const uiDir = path.join(root, 'src/ui')
const compDir = path.join(root, 'src/components')
const outFile = path.join(uiDir, 'component-variable.css')

const SKIP_FILES = new Set([
    'bk.css',
    'variable.css',
    'global-variable.css',
    'component-variable.css',
    'reset.css',
    'iconfont.css',
    'transition.css',
    'navigation.css',
    'navigation-menu.css',
    'navigation-menu-item.css',
    'navigation-menu-group.css',
    'create-menu-item.css'
])

const SKIP_VUE_DIRS = new Set(['navigation', 'color-picker'])

const FILE_COMPONENT = {
    'create-button.css': 'button',
    'create-button-hover.css': 'button',
    'create-square-button.css': 'button',
    'date-picker.base.css': 'date-picker',
    'tooltips.css': 'popover',
    'scroller.css': 'scroller'
}

const COLOR_PROPS = new Set([
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
    'caret-color'
])

const EXCLUDE_HEX = new Set([
    'FF0000', '00FF00', '0000FF', '00FFFF', 'FF00FF', 'FFFF00', '000000'
])

function read (file) {
    return fs.readFileSync(file, 'utf8')
}

function stripComments (css) {
    return css.replace(/\/\*[\s\S]*?\*\//g, ' ').replace(/(^|[^:\\])\/\/.*$/gm, '$1')
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
    if (!nameMatch) return token
    const name = nameMatch[1]
    if (!vars[name] || (seen && seen.has(name))) return token
    const nextSeen = new Set(seen || [])
    nextSeen.add(name)
    return resolveDollar(vars[name], vars, nextSeen)
}

function expandHex (hex) {
    let value = hex.slice(1)
    if (value.length === 3 || value.length === 4) {
        value = value.split('').map(char => char + char).join('')
    }
    return value.toUpperCase()
}

function namedColor (value) {
    const map = { white: 'FFFFFF', black: '000000', red: 'FF0000', transparent: null }
    const key = value.toLowerCase()
    if (Object.prototype.hasOwnProperty.call(map, key)) return map[key]
    return undefined
}

function hexFromRgb (r, g, b) {
    return [r, g, b].map(channel => {
        const num = Math.max(0, Math.min(255, Number(channel)))
        return Math.round(num).toString(16).padStart(2, '0')
    }).join('').toUpperCase()
}

function parseAlpha (alpha) {
    if (alpha === undefined) return 1
    const text = String(alpha).trim()
    if (text.endsWith('%')) return Number(text.slice(0, -1)) / 100
    return Number(text)
}

function classifyColor (rawInput, vars) {
    const original = String(rawInput).trim().replace(/!important/i, '').trim()
    const resolved = resolveDollar(original, vars)
    if (/^(darken|lighten|color)\(/i.test(resolved)) return null
    if (resolved.startsWith('$')) return null
    const hex = resolved.match(/^#([0-9a-fA-F]{3,8})$/)
    if (hex) {
        const full = expandHex(resolved)
        if (full.length === 6) return { kind: 'solid', display: `#${full}`, tokenKey: full }
        if (full.length === 8 && full.slice(6) === 'FF') {
            return { kind: 'solid', display: `#${full.slice(0, 6)}`, tokenKey: full.slice(0, 6) }
        }
        return null
    }
    const named = namedColor(resolved)
    if (named === null) return null
    if (named) return { kind: 'solid', display: `#${named}`, tokenKey: named }
    const rgb = resolved.match(/^rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)\s*(?:,\s*([0-9.]+%?)\s*)?\)$/i)
    if (rgb) {
        const alpha = parseAlpha(rgb[4])
        if (rgb[4] && alpha !== 1) return null
        const key = hexFromRgb(rgb[1], rgb[2], rgb[3])
        return { kind: 'solid', display: `#${key}`, tokenKey: key }
    }
    return null
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

function splitArgs (text) {
    const args = []
    let current = ''
    let depth = 0
    let quote = null
    for (let i = 0; i < text.length; i += 1) {
        const char = text[i]
        if (quote) {
            current += char
            if (char === quote) quote = null
            continue
        }
        if (char === '"' || char === "'") {
            quote = char
            current += char
            continue
        }
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

function themeOf (selector) {
    const rules = [
        ['primary', /(^|[^a-z])primary([^a-z]|$)/],
        ['success', /(^|[^a-z])success([^a-z]|$)/],
        ['warning', /(^|[^a-z])warning([^a-z]|$)/],
        ['danger', /(^|[^a-z])danger([^a-z]|$)/],
        ['error', /(^|[^a-z])error([^a-z]|$)/],
        ['info', /(^|[^a-z])info([^a-z]|$)/]
    ]
    const text = stripComments(selector).toLowerCase()
    for (let i = 0; i < rules.length; i += 1) {
        if (rules[i][1].test(text)) return rules[i][0]
    }
    return ''
}

function statesOf (selector) {
    const text = stripComments(selector).toLowerCase()
    const states = []
    if (/disabled/.test(text)) states.push('disabled')
    if (/:hover|\.hover|is-hover/.test(text)) states.push('hover')
    if (/:active|\.active|is-active/.test(text)) states.push('active')
    if (/:focus|is-focus/.test(text)) states.push('focus')
    if (/:checked|is-checked/.test(text)) states.push('checked')
    if (/selected|is-select/.test(text)) states.push('selected')
    return states
}

function loadLayer1 () {
    const css = stripComments(read(path.join(uiDir, 'global-variable.css')))
    const exact = Object.create(null)
    const radius = Object.create(null)
    const re = /(--bk-[a-z0-9-]+)\s*:\s*([^;]+);/g
    let match = re.exec(css)
    while (match) {
        const name = match[1]
        const value = match[2].trim()
        if (name.includes('radius')) {
            radius[value.replace(/\s+/g, '').toLowerCase()] = { token: name, fallback: value }
            if (value === '0') radius['0px'] = { token: name, fallback: '0' }
        } else {
            const parsed = classifyColor(value, {})
            if (parsed && parsed.tokenKey && !exact[parsed.tokenKey]) {
                exact[parsed.tokenKey] = { token: name, fallback: parsed.display }
            }
        }
        match = re.exec(css)
    }
    return { exact, radius }
}

function loadFillMap () {
    const text = read(path.join(root, 'docs/bkui-vue2-近似色决策.md'))
    const start = text.indexOf('## 填上的颜色')
    const end = text.indexOf('## 不填的颜色')
    const fill = Object.create(null)
    text.slice(start, end).split('\n').forEach(line => {
        if (!line.startsWith('| #')) return
        const cells = line.split('|').slice(1, -1).map(cell => cell.trim())
        const parsed = classifyColor(cells[0], {})
        if (!parsed) return
        fill[parsed.tokenKey] = {
            token: cells[2],
            fallback: parsed.display
        }
    })
    return fill
}

function tokenInfo (tokenKey, exact, fill) {
    if (!tokenKey || EXCLUDE_HEX.has(tokenKey)) return null
    if (exact[tokenKey]) return exact[tokenKey]
    if (fill[tokenKey]) return fill[tokenKey]
    return null
}

function componentOf (fileName) {
    if (FILE_COMPONENT[fileName]) return FILE_COMPONENT[fileName]
    return fileName.replace(/\.css$/, '')
}

function isMixinParam (selector, name) {
    const match = String(selector).match(/@define-mixin\s+([\w-]+)/)
    if (!match || !mixinIndex[match[1]]) return false
    return mixinIndex[match[1]].params.some(param => param.name === name)
}

let mixinIndex = Object.create(null)

function colorVarName (componentId, selector, tokenName) {
    const short = tokenName.replace('--bk-color-', '')
    const theme = themeOf(selector)
    const states = statesOf(selector)
    const parts = [componentId]
    if (theme) parts.push(theme)
    if (states.length) parts.push(states.join('-'))
    parts.push(short)
    return `--bk-${parts.join('-')}`
}

function radiusVarName (componentId, tokenName) {
    return `--bk-${componentId}-radius-${tokenName.replace('--bk-radius-', '')}`
}

function extractMixinMeta (css) {
    const mixins = Object.create(null)
    const re = /@define-mixin\s+([\w-]+)\s*([^{]*)\{/g
    let match = re.exec(css)
    while (match) {
        const name = match[1]
        const start = match.index + match[0].length
        let depth = 1
        let index = start
        while (index < css.length && depth > 0) {
            if (css[index] === '{') depth += 1
            else if (css[index] === '}') depth -= 1
            index += 1
        }
        const body = css.slice(start, index - 1)
        const params = splitArgs(match[2].trim()).map(part => {
            const bits = part.split(':')
            return { name: bits[0].trim().replace(/^\$/, ''), fallback: bits.slice(1).join(':').trim() }
        })
        const unsafe = new Set()
        const fnRe = /(?:color|darken|lighten)\(/gi
        let fnMatch = fnRe.exec(body)
        while (fnMatch) {
            const full = readBalanced(body, fnMatch.index)
            params.forEach(param => {
                if (new RegExp(`\\$${param.name}(?![A-Za-z0-9_-])`).test(full)) unsafe.add(param.name)
            })
            fnRe.lastIndex = fnMatch.index + full.length
            fnMatch = fnRe.exec(body)
        }
        const shadowRe = /(?:box-shadow|text-shadow)\s*:[^;]*/gi
        let shadowMatch = shadowRe.exec(body)
        while (shadowMatch) {
            params.forEach(param => {
                if (new RegExp(`\\$${param.name}(?![A-Za-z0-9_-])`).test(shadowMatch[0])) unsafe.add(param.name)
            })
            shadowMatch = shadowRe.exec(body)
        }
        mixins[name] = { params, unsafe }
        match = re.exec(css)
    }
    return mixins
}

function scanCss (css) {
    const items = []
    const stack = []
    let i = 0
    let paren = 0
    let quote = null
    let stmtStart = 0
    let preludeStart = 0
    while (i < css.length) {
        if (!quote && css.startsWith('/*', i)) {
            const end = css.indexOf('*/', i + 2)
            i = end < 0 ? css.length : end + 2
            continue
        }
        if (!quote && css[i] === '/' && css[i + 1] === '/') {
            const end = css.indexOf('\n', i)
            i = end < 0 ? css.length : end + 1
            continue
        }
        const char = css[i]
        if (quote) {
            if (char === '\\') {
                i += 2
                continue
            }
            if (char === quote) quote = null
            i += 1
            continue
        }
        if (char === '"' || char === "'") {
            quote = char
            i += 1
            continue
        }
        if (char === '(') {
            paren += 1
            i += 1
            continue
        }
        if (char === ')') {
            if (paren > 0) paren -= 1
            i += 1
            continue
        }
        if (paren > 0) {
            i += 1
            continue
        }
        if (char === '{') {
            items.push({
                type: 'prelude',
                start: preludeStart,
                end: i,
                text: css.slice(preludeStart, i),
                selector: stack.join(' ')
            })
            stack.push(stripComments(css.slice(preludeStart, i)).trim())
            stmtStart = i + 1
            preludeStart = i + 1
            i += 1
            continue
        }
        if (char === '}') {
            stack.pop()
            stmtStart = i + 1
            preludeStart = i + 1
            i += 1
            continue
        }
        if (char === ';') {
            items.push({
                type: 'stmt',
                start: stmtStart,
                end: i,
                text: css.slice(stmtStart, i),
                selector: stack.join(' ')
            })
            stmtStart = i + 1
            preludeStart = i + 1
            i += 1
            continue
        }
        i += 1
    }
    return items
}

function createSession (exact, fill, radiusMap, mixins) {
    const defs = new Map()
    const counts = { color: 0, radius: 0, files: 0 }

    function remember (name, token, fallback) {
        if (!defs.has(name)) defs.set(name, { token, fallbacks: Object.create(null) })
        const item = defs.get(name)
        item.fallbacks[fallback] = (item.fallbacks[fallback] || 0) + 1
    }

    function chosenFallback (item) {
        return Object.keys(item.fallbacks).sort((a, b) => item.fallbacks[b] - item.fallbacks[a] || a.localeCompare(b))[0]
    }

    function rewriteColorText (value, componentId, selector) {
        let out = ''
        let index = 0
        let changed = false
        while (index < value.length) {
            if (value.startsWith('/*', index)) {
                const end = value.indexOf('*/', index + 2)
                const next = end < 0 ? value.length : end + 2
                out += value.slice(index, next)
                index = next
                continue
            }
            const rest = value.slice(index)
            const skipped = rest.match(/^(?:color|darken|lighten|url|var)\(/i)
            if (skipped) {
                const full = readBalanced(value, index)
                out += full
                index += full.length
                continue
            }
            const rgb = rest.match(/^rgba?\(/i)
            if (rgb) {
                const full = readBalanced(value, index)
                const parsed = classifyColor(full, sessionVars())
                const info = parsed && tokenInfo(parsed.tokenKey, exact, fill)
                if (info) {
                    const name = colorVarName(componentId, selector, info.token)
                    remember(name, info.token, parsed.display)
                    out += `var(${name})`
                    changed = true
                } else {
                    out += full
                }
                index += full.length
                continue
            }
            const hex = rest.match(/^#(?:[0-9a-fA-F]{8}|[0-9a-fA-F]{6}|[0-9a-fA-F]{4}|[0-9a-fA-F]{3})(?![0-9a-fA-F])/)
            const dollar = rest.match(/^\$[A-Za-z_][\w-]*/)
            const named = rest.match(/^(?:white|black|red)\b/i)
            if (dollar && isMixinParam(selector, dollar[0].slice(1))) {
                out += dollar[0]
                index += dollar[0].length
                continue
            }
            const found = hex || dollar || named
            if (found) {
                const parsed = classifyColor(found[0], sessionVars())
                const info = parsed && tokenInfo(parsed.tokenKey, exact, fill)
                if (info) {
                    const name = colorVarName(componentId, selector, info.token)
                    remember(name, info.token, info.fallback === parsed.display ? parsed.display : parsed.display)
                    remember(name, info.token, parsed.display)
                    out += `var(${name})`
                    changed = true
                    counts.color += 1
                } else {
                    out += found[0]
                }
                index += found[0].length
                continue
            }
            out += value[index]
            index += 1
        }
        return changed ? out : null
    }

    let activeVars = Object.create(null)
    function sessionVars () {
        return activeVars
    }

    function rewriteRadiusText (value, componentId) {
        const important = /!important/i.test(value)
        const cleaned = value.replace(/!important/ig, '').trim().toLowerCase()
        if (!cleaned || cleaned === 'inherit' || cleaned === 'unset' || cleaned === 'initial') return null
        if (cleaned === '50%' || cleaned === '100%') return null
        if (/[,%]/.test(cleaned)) return null
        const parts = cleaned.split(/\s+/)
        if (parts.length > 1 && new Set(parts).size > 1) return null
        if (parts.length > 1) return null
        const info = radiusMap[cleaned]
        if (!info) return null
        const name = radiusVarName(componentId, info.token)
        remember(name, info.token, info.fallback)
        counts.radius += 1
        return `var(${name})${important ? ' !important' : ''}`
    }

    function rewriteCore (core, componentId, selector) {
        const text = core.trim()
        if (!text || text.startsWith('@import') || text.startsWith('$') || text.startsWith('@extend') || text.startsWith('@include')) {
            return null
        }
        if (text.startsWith('@mixin')) {
            const match = text.match(/^@mixin\s+([\w-]+)\s*([\s\S]*)$/)
            if (!match) return null
            const meta = mixins[match[1]]
            const args = splitArgs(match[2])
            let changed = false
            const nextArgs = args.map((arg, argIndex) => {
                const param = meta && meta.params[argIndex]
                if (param && meta.unsafe.has(param.name)) return arg
                const next = rewriteColorText(arg, componentId, selector)
                if (!next) return arg
                changed = true
                return next
            })
            if (!changed) return null
            return `@mixin ${match[1]} ${nextArgs.join(', ')}`
        }
        if (text.startsWith('@define-mixin')) {
            return text.replace(/:\s*([^,]+)/g, (full, value) => {
                const next = rewriteColorText(value.trim(), componentId, selector)
                if (!next) return full
                return `: ${next}`
            })
        }
        if (text.startsWith('@')) return null
        const colon = text.indexOf(':')
        if (colon <= 0) return null
        const prop = text.slice(0, colon).trim().toLowerCase()
        const rawValue = text.slice(colon + 1)
        const leading = rawValue.match(/^\s*/)[0]
        const value = rawValue.trim()
        let nextValue = null
        if (prop === 'border-radius' || /-radius$/.test(prop)) nextValue = rewriteRadiusText(value, componentId)
        else if (COLOR_PROPS.has(prop)) nextValue = rewriteColorText(value, componentId, selector)
        if (!nextValue) return null
        return `${text.slice(0, colon + 1)}${leading}${nextValue}`
    }

    function transformCss (css, componentId, vars) {
        activeVars = vars
        const items = scanCss(css)
        const edits = []
        items.forEach(item => {
            const raw = item.text
            const leading = raw.match(/^\s*/)[0]
            const trailing = raw.match(/\s*$/)[0]
            const core = raw.trim()
            if (!core) return
            const selector = item.type === 'prelude' ? `${item.selector} ${core}` : item.selector
            let next = null
            if (item.type === 'prelude') {
                const replaced = core.replace(/@define-mixin\s+[\w-]+\s*[^;{]*/g, header => {
                    return header.replace(/:\s*([^,\n]+)/g, (full, value) => {
                        const color = rewriteColorText(value.trim(), componentId, item.selector)
                        if (!color) return full
                        return `: ${color}`
                    })
                })
                if (replaced !== core) next = replaced
            } else {
                next = rewriteCore(core, componentId, selector)
            }
            if (!next || next === core) return
            edits.push({ start: item.start, end: item.end, text: `${leading}${next}${trailing}` })
        })
        if (!edits.length) return css
        let output = css
        edits.sort((a, b) => b.start - a.start).forEach(edit => {
            output = output.slice(0, edit.start) + edit.text + output.slice(edit.end)
        })
        counts.files += 1
        return output
    }

    return { defs, counts, chosenFallback, transformCss }
}

function loadMixins () {
    const mixins = Object.create(null)
    function take (file) {
        Object.assign(mixins, extractMixinMeta(stripComments(read(file))))
    }
    fs.readdirSync(uiDir).forEach(name => {
        if (name.endsWith('.css')) take(path.join(uiDir, name))
    })
    fs.readdirSync(path.join(uiDir, 'mixins')).forEach(name => {
        if (name.endsWith('.css')) take(path.join(uiDir, 'mixins', name))
    })
    return mixins
}

function cssFiles () {
    const files = []
    fs.readdirSync(uiDir).forEach(name => {
        if (!name.endsWith('.css') || SKIP_FILES.has(name)) return
        files.push(path.join(uiDir, name))
    })
    fs.readdirSync(path.join(uiDir, 'mixins')).forEach(name => {
        if (!name.endsWith('.css') || SKIP_FILES.has(name)) return
        files.push(path.join(uiDir, 'mixins', name))
    })
    return files
}

function vueFiles () {
    const files = []
    fs.readdirSync(compDir).forEach(dir => {
        if (SKIP_VUE_DIRS.has(dir)) return
        const folder = path.join(compDir, dir)
        if (!fs.statSync(folder).isDirectory()) return
        walk(folder, dir, files)
    })
    return files
}

function walk (folder, componentId, files) {
    fs.readdirSync(folder).forEach(name => {
        const full = path.join(folder, name)
        if (fs.statSync(full).isDirectory()) {
            walk(full, componentId, files)
            return
        }
        if (/\.(vue|js)$/.test(name)) files.push({ file: full, componentId })
    })
}

function fileParsesHex (text) {
    return /substring\(1\)|A-Fa-f0-9/.test(text)
}

function rewriteQuotedColors (text, componentId, session, vars, exact, fill) {
    const re = /(['"`])(#[0-9a-fA-F]{3,8})\1/g
    let changed = false
    const output = text.replace(re, (full, quote, hex, offset) => {
        const lineStart = text.lastIndexOf('\n', offset) + 1
        const lineEnd = text.indexOf('\n', offset)
        const line = text.slice(lineStart, lineEnd < 0 ? text.length : lineEnd)
        if (/^\s*\/\//.test(line) || /^\s*\*/.test(line)) return full
        const parsed = classifyColor(hex, vars)
        const info = parsed && tokenInfo(parsed.tokenKey, exact, fill)
        if (!info) return full
        const interesting = /(color|background|border|fill|stroke|style|theme|default)\s*[:=]/i.test(line)
            || /(color|background|border|fill|stroke)/i.test(line)
        if (!interesting) return full
        const name = colorVarName(componentId, line, info.token)
        session.defs.set(name, session.defs.get(name) || { token: info.token, fallbacks: Object.create(null) })
        const item = session.defs.get(name)
        item.fallbacks[parsed.display] = (item.fallbacks[parsed.display] || 0) + 1
        session.counts.color += 1
        changed = true
        return `${quote}var(${name})${quote}`
    })
    return changed ? output : text
}

function transformVue (file, componentId, globalVars, session, exact, fill) {
    const original = read(file)
    const localVars = Object.assign(Object.create(null), globalVars, parseDollarVars(stripComments(original)))
    let output = original
    let changed = false
    output = output.replace(/<style([^>]*)>([\s\S]*?)<\/style>/gi, (full, attrs, css) => {
        const styleVars = Object.assign(Object.create(null), localVars, parseDollarVars(stripComments(css)))
        const next = session.transformCss(css, componentId, styleVars)
        if (next === css) return full
        changed = true
        return `<style${attrs}>${next}</style>`
    })
    if (!fileParsesHex(original)) {
        const withoutStyle = output.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, match => match.replace(/./g, ' '))
        const rewritten = rewriteQuotedColors(withoutStyle, componentId, session, localVars, exact, fill)
        if (rewritten !== withoutStyle) {
            let built = ''
            const styleRe = /<style[^>]*>[\s\S]*?<\/style>/gi
            let last = 0
            let styleMatch = styleRe.exec(output)
            while (styleMatch) {
                built += rewritten.slice(last, styleMatch.index) + output.slice(styleMatch.index, styleMatch.index + styleMatch[0].length)
                last = styleMatch.index + styleMatch[0].length
                styleMatch = styleRe.exec(output)
            }
            built += rewritten.slice(last)
            output = built
            changed = true
        }
    }
    return changed ? output : original
}

function writeDefs (session) {
    const lines = ['/* 第二层组件变量。引用第一层，默认值是替换前的旧色。 */', '', ':root {']
    const names = Array.from(session.defs.keys()).sort()
    names.forEach(name => {
        const item = session.defs.get(name)
        const fallback = session.chosenFallback(item)
        lines.push(`    ${name}: var(${item.token}, ${fallback});`)
    })
    lines.push('}', '')
    return lines.join('\n')
}

function main () {
    const dry = process.argv.includes('--dry')
    const only = (process.argv.find(arg => arg.startsWith('--only=')) || '').slice(7)
    if (!dry && fs.existsSync(outFile) && !process.argv.includes('--force')) {
        console.error('component-variable.css 已存在。确认要重跑时加 --force')
        process.exit(1)
    }
    const layer1 = loadLayer1()
    const fill = loadFillMap()
    const mixins = loadMixins()
    const globalVars = parseDollarVars(stripComments(read(path.join(uiDir, 'variable.css'))))
    mixinIndex = mixins
    const session = createSession(layer1.exact, fill, layer1.radius, mixins)
    const changed = []

    cssFiles().forEach(file => {
        const name = path.basename(file)
        const componentId = componentOf(name)
        if (only && componentId !== only && name.indexOf(only) === -1) return
        const css = read(file)
        const vars = Object.assign(Object.create(null), globalVars, parseDollarVars(stripComments(css)))
        const next = session.transformCss(css, componentId, vars)
        if (process.env.DUMP === name) fs.writeFileSync(path.join(root, 'tool/dump.css'), next)
        if (next !== css) {
            changed.push(path.relative(root, file))
            if (!dry) fs.writeFileSync(file, next)
        }
    })

    if (!only) {
        // Vue 模板不能按整文件遮罩后再拼回去，会把 style 插进脚本。模板色值另行手改。
    }

    const defs = writeDefs(session)
    if (!dry) {
        fs.writeFileSync(outFile, defs)
        const variableFile = path.join(uiDir, 'variable.css')
        const variable = read(variableFile)
        if (!variable.includes('./component-variable.css')) {
            fs.writeFileSync(variableFile, variable.replace(
                "@import './global-variable.css';",
                "@import './global-variable.css';\n@import './component-variable.css';"
            ))
        }
    }
    console.log(JSON.stringify({
        dry,
        files: changed.length,
        colors: session.counts.color,
        radii: session.counts.radius,
        variables: session.defs.size,
        sample: Array.from(session.defs.keys()).filter(name => name.startsWith('--bk-button')).slice(0, 24)
    }, null, 2))
}

main()
