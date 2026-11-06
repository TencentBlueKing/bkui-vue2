const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const uiDir = path.join(root, 'src/ui')
const compDir = path.join(root, 'src/components')
const outFile = path.join(root, 'docs/bkui-vue2-未覆盖颜色.md')

const SKIP_FILES = new Set([
    'bk.css',
    'variable.css',
    'global-variable.css',
    'component-variable.css',
    'iconfont.css'
])

const FILE_COMPONENT = {
    'create-button.css': 'button',
    'create-button-hover.css': 'button',
    'create-square-button.css': 'button',
    'create-label.css': 'tag',
    'date-picker.base.css': 'date-picker',
    'tooltips.css': 'popover',
    'scroller.css': 'scroller',
    'create-menu-item.css': 'navigation'
}

const NAV = new Set([
    'navigation',
    'navigation-menu',
    'navigation-menu-item',
    'navigation-menu-group'
])

function walk (dir, list) {
    fs.readdirSync(dir).forEach(name => {
        const full = path.join(dir, name)
        if (fs.statSync(full).isDirectory()) walk(full, list)
        else list.push(full)
    })
    return list
}

function rel (file) {
    return path.relative(root, file).split(path.sep).join('/')
}

function stripBlock (text) {
    return text.replace(/\/\*[\s\S]*?\*\//g, block => block.replace(/[^\n]/g, ' '))
}

function stripCssComments (css) {
    return stripBlock(css).replace(/^\s*\/\/.*$/gm, line => ' '.repeat(line.length))
}

function stripJsComments (code) {
    const noBlock = stripBlock(code).replace(/<!--[\s\S]*?-->/g, block => block.replace(/[^\n]/g, ' '))
    return noBlock.split('\n').map(line => {
        let quote = null
        for (let i = 0; i < line.length - 1; i += 1) {
            const char = line[i]
            if (quote) {
                if (char === '\\') {
                    i += 1
                    continue
                }
                if (char === quote) quote = null
                continue
            }
            if (char === '"' || char === "'" || char === '`') {
                quote = char
                continue
            }
            if (char === '/' && line[i + 1] === '/') {
                return line.slice(0, i) + ' '.repeat(line.length - i)
            }
        }
        return line
    }).join('\n')
}

function lineAt (text, index) {
    let line = 1
    const end = Math.min(index, text.length)
    for (let i = 0; i < end; i += 1) {
        if (text[i] === '\n') line += 1
    }
    return line
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

function resolveChain (name, vars, seen) {
    const bag = seen || new Set()
    if (bag.has(name) || !vars[name]) return null
    bag.add(name)
    return vars[name].replace(/\$([A-Za-z_][\w-]*)/g, (full, inner) => {
        const next = resolveChain(inner, vars, bag)
        return next == null ? full : next
    })
}

function expandHex (hex) {
    let value = hex.slice(1)
    if (value.length === 3 || value.length === 4) {
        value = value.split('').map(char => char + char).join('')
    }
    return value.toUpperCase()
}

function formatAlpha (alpha) {
    const percent = alpha * 100
    const rounded = Math.round(percent * 10) / 10
    if (Math.abs(rounded - Math.round(rounded)) < 0.05) return `${Math.round(rounded)}%`
    return `${rounded.toFixed(1)}%`
}

function hexFromChannels (r, g, b) {
    return [r, g, b].map(channel => {
        const num = Math.max(0, Math.min(255, Math.round(Number(channel))))
        return num.toString(16).padStart(2, '0')
    }).join('').toUpperCase()
}

function parseAlpha (alpha) {
    if (alpha === undefined || alpha === null || alpha === '') return 1
    const text = String(alpha).trim()
    if (text.endsWith('%')) return Number(text.slice(0, -1)) / 100
    return Number(text)
}

function hslToRgb (h, s, l) {
    const sat = s / 100
    const light = l / 100
    const k = n => (n + h / 30) % 12
    const a = sat * Math.min(light, 1 - light)
    const f = n => light - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)))
    return [f(0), f(8), f(4)].map(channel => Math.round(channel * 255))
}

function colorFromHex (raw, writing) {
    const body = raw.slice(1)
    if (![3, 4, 6, 8].includes(body.length)) return null
    const full = expandHex(raw)
    if (full.length === 8) {
        const alpha = parseInt(full.slice(6), 16) / 255
        const tokenKey = full.slice(0, 6)
        if (alpha >= 0.999) {
            return { kind: 'solid', display: `#${tokenKey}`, tokenKey, writing: writing || raw }
        }
        return {
            kind: 'alpha',
            display: `#${tokenKey} / ${formatAlpha(alpha)}`,
            tokenKey,
            alpha,
            writing: writing || raw
        }
    }
    return { kind: 'solid', display: `#${full}`, tokenKey: full, writing: writing || raw }
}

function colorFromRgb (r, g, b, alphaText, writing) {
    const tokenKey = hexFromChannels(r, g, b)
    const alpha = parseAlpha(alphaText)
    if (alphaText === undefined || alpha >= 0.999) {
        return { kind: 'solid', display: `#${tokenKey}`, tokenKey, writing }
    }
    return {
        kind: 'alpha',
        display: `#${tokenKey} / ${formatAlpha(alpha)}`,
        tokenKey,
        alpha,
        writing
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

function maskNamedCalls (text, names) {
    let out = ''
    for (let i = 0; i < text.length; i += 1) {
        let masked = false
        names.forEach(name => {
            if (masked) return
            if (!text.toLowerCase().startsWith(`${name}(`, i)) return
            const prev = i > 0 ? text[i - 1] : ''
            if (prev && /[\w-]/.test(prev)) return
            const raw = readBalanced(text, i + name.length)
            const full = text.slice(i, i + name.length + raw.length)
            out += ' '.repeat(full.length)
            i += full.length - 1
            masked = true
        })
        if (!masked) out += text[i]
    }
    return out
}

function findNamedCalls (text, names) {
    const found = []
    for (let i = 0; i < text.length; i += 1) {
        names.forEach(name => {
            if (!text.toLowerCase().startsWith(`${name}(`, i)) return
            const prev = i > 0 ? text[i - 1] : ''
            if (prev && /[\w-]/.test(prev)) return
            const raw = readBalanced(text, i + name.length)
            found.push(text.slice(i, i + name.length + raw.length))
            i += name.length + raw.length - 1
        })
    }
    return found
}

function resolveDollars (text, vars, params) {
    return text.replace(/\$([A-Za-z_][\w-]*)/g, (full, name) => {
        if (params.has(name)) return full
        const resolved = resolveChain(name, vars)
        return resolved == null ? full : resolved
    })
}

function prettyHexes (text) {
    return text.replace(/#([0-9a-fA-F]{3,8})\b/g, hex => {
        const body = hex.slice(1)
        if (![3, 4, 6, 8].includes(body.length)) return hex
        return `#${expandHex(hex)}`
    }).replace(/\s+/g, ' ').trim()
}

function extractLiterals (text) {
    const hits = []
    const used = []
    function cover (start, end) {
        return used.some(range => start < range[1] && end > range[0])
    }
    function take (re, build) {
        re.lastIndex = 0
        let match = re.exec(text)
        while (match) {
            const start = match.index + match[1].length
            const raw = match[2]
            const end = start + raw.length
            if (!cover(start, end)) {
                const item = build(raw, match)
                if (item) {
                    hits.push(item)
                    used.push([start, end])
                }
            }
            match = re.exec(text)
        }
    }
    take(/(^|[^-\w])(#[0-9a-fA-F]{3,8})(?![\w])/g, raw => colorFromHex(raw, raw))
    take(/(^|[^-\w])(rgba?\(\s*[0-9.]+\s+[0-9.]+\s+[0-9.]+(?:\s*\/\s*[0-9.]+%?)?\s*\))/gi, raw => {
        const parts = raw.match(/rgba?\(\s*([0-9.]+)\s+([0-9.]+)\s+([0-9.]+)(?:\s*\/\s*([0-9.]+%?))?\s*\)/i)
        return colorFromRgb(parts[1], parts[2], parts[3], parts[4], raw)
    })
    take(/(^|[^-\w])(rgba?\(\s*[0-9.]+\s*,\s*[0-9.]+\s*,\s*[0-9.]+(?:\s*,\s*[0-9.]+%?)?\s*\))/gi, raw => {
        const parts = raw.match(/rgba?\(\s*([0-9.]+)\s*,\s*([0-9.]+)\s*,\s*([0-9.]+)(?:\s*,\s*([0-9.]+%?))?\s*\)/i)
        return colorFromRgb(parts[1], parts[2], parts[3], parts[4], raw)
    })
    take(/(^|[^-\w])(hsla?\(\s*[0-9.]+\s*,\s*[0-9.]+%\s*,\s*[0-9.]+%(?:\s*,\s*[0-9.]+%?)?\s*\))/gi, raw => {
        const parts = raw.match(/hsla?\(\s*([0-9.]+)\s*,\s*([0-9.]+)%\s*,\s*([0-9.]+)%(?:\s*,\s*([0-9.]+%?))?\s*\)/i)
        const rgb = hslToRgb(Number(parts[1]), Number(parts[2]), Number(parts[3]))
        return colorFromRgb(rgb[0], rgb[1], rgb[2], parts[4], raw)
    })
    const named = { white: 'FFFFFF', black: '000000', red: 'FF0000', blue: '0000FF', green: '00FF00', yellow: 'FFFF00' }
    take(/(^|[^-\w])(white|black|red|blue|green|yellow)(?![\w-])/gi, raw => {
        return colorFromHex(`#${named[raw.toLowerCase()]}`, raw)
    })
    return hits
}

function baseOfFunction (resolved) {
    const literals = extractLiterals(resolved)
    return literals.find(item => item.tokenKey) || null
}

function propLabel (prop) {
    const name = prop.toLowerCase()
    if (name === 'color') return '文字'
    if (name.startsWith('background')) return '背景'
    if (name === 'fill') return '填充'
    if (name === 'stroke') return '描边'
    if (name === 'caret-color') return '光标'
    if (name === 'scrollbar-color') return '滚动条'
    if (name.includes('shadow')) return '阴影'
    if (name.startsWith('--')) return `自定义变量 ${prop} 的默认值`
    if (name.startsWith('border') || name.startsWith('outline')) return '边框'
    return prop
}

function isShadowProp (prop) {
    const name = prop.toLowerCase()
    return name === 'box-shadow' || name === '-webkit-box-shadow' || name === 'text-shadow'
}

function formatSelector (stack) {
    const medias = []
    const parts = []
    stack.forEach(frame => {
        if (!frame) return
        if (frame.startsWith('@media') || frame.startsWith('@supports')) medias.push(frame.replace(/\s+/g, ' '))
        else if (!frame.startsWith('@define-mixin') && !frame.startsWith('@mixin')) parts.push(frame.replace(/\s+/g, ' '))
    })
    let selector = ''
    parts.forEach(part => {
        if (!selector) selector = part
        else if (part.includes('&')) selector = part.replace(/&/g, selector)
        else selector = `${selector} ${part}`
    })
    selector = selector.replace(/\s+/g, ' ').trim()
    if (medias.length) selector += `（${medias.join(' ')}）`
    return selector
}

function currentParams (stack) {
    const params = new Set()
    stack.forEach(frame => {
        const match = frame.match(/@define-mixin\s+[\w-]+\s+([\s\S]*)/)
        if (!match) return
        match[1].split(',').forEach(part => {
            const name = part.trim().match(/^\$([A-Za-z_][\w-]*)/)
            if (name) params.add(name[1])
        })
    })
    return params
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
            args.push(current.trim())
            current = ''
        } else current += char
    }
    if (current.trim()) args.push(current.trim())
    return args
}

function componentOf (file) {
    const base = path.basename(file)
    if (FILE_COMPONENT[base]) return FILE_COMPONENT[base]
    if (file.includes(`${path.sep}components${path.sep}`)) {
        return file.split(`${path.sep}components${path.sep}`)[1].split(path.sep)[0]
    }
    return base.replace(/\.css$/, '')
}

function loadLayer1 () {
    const css = stripCssComments(fs.readFileSync(path.join(uiDir, 'global-variable.css'), 'utf8'))
    const exact = Object.create(null)
    const re = /--bk-color-([a-z]+)-(\d+)\s*:\s*(#[0-9a-fA-F]{6})/g
    let match = re.exec(css)
    while (match) {
        const tokenKey = match[3].slice(1).toUpperCase()
        exact[tokenKey] = `${match[1][0].toUpperCase()}${match[1].slice(1)}-${match[2]}`
        match = re.exec(css)
    }
    return exact
}

const groups = new Map()
const seenComponents = new Set()
const coveredLines = new Set()
const mixinMeta = new Map()

function addHit (hit) {
    const key = [hit.bucket, hit.component, hit.display].join('|')
    if (!groups.has(key)) {
        groups.set(key, {
            bucket: hit.bucket,
            component: hit.component,
            display: hit.display,
            tokenKey: hit.tokenKey || '',
            writings: new Set(),
            places: [],
        notes: new Set(),
        alpha: hit.alpha
    })
    }
    const group = groups.get(key)
    if (hit.writing) group.writings.add(hit.writing)
    if (hit.note) group.notes.add(hit.note)
    if (hit.alpha === 0) group.alpha = 0
    const placeKey = `${hit.place.file}:${hit.place.line}:${hit.place.where}`
    if (!group.places.some(place => `${place.file}:${place.line}:${place.where}` === placeKey)) {
        group.places.push(hit.place)
    }
}

function tokenNote (tokenKey, exact, prefix) {
    const lead = prefix || ''
    if (!tokenKey) return lead ? `${lead}无同色` : '无同色'
    if (exact[tokenKey]) return `${lead ? `${lead}等于 ` : '等于 '}${exact[tokenKey]}`
    if (tokenKey === '000000') return `${lead ? `${lead}是纯黑` : '纯黑'}，第一层没有这支色`
    return lead ? `${lead}无同色` : '无同色'
}

function bucketFor (component, file, value, prop, kind, tokenKey, exact) {
    if (NAV.has(component)) return 'nav'
    if (file.includes(`${path.sep}color-picker${path.sep}`) && !file.endsWith('.css')) return 'picker'
    if (file.endsWith('color-picker.css') && /linear-gradient/i.test(value || '')) return 'picker'
    if (kind === 'fn') return 'fn'
    if (isShadowProp(prop)) return 'shadow'
    if (kind === 'alpha') return 'alpha'
    if (exact[tokenKey]) return 'exact'
    return 'match'
}

function pushColor (info) {
    const { item, prop, component, file, value, selector, line, exact, writing, note } = info
    const bucket = bucketFor(component, file, value, prop, item.kind, item.tokenKey, exact)
    let compare = tokenNote(item.tokenKey, exact, item.kind === 'alpha' ? '底色' : '')
    if (item.kind === 'fn') compare = item.compare
    if (item.alpha === 0) compare += '，全透明'
    let extra = note || ''
    if (component === 'loading' && item.tokenKey === 'FFFFFF' && /\.(vue|js)$/.test(file)) {
        extra = '要保留十六进制。加载组件会检查颜色是不是 # 开头，写成 var() 会失效。'
    }
    const where = [selector, propLabel(prop)].filter(Boolean).join(' · ')
    addHit({
        bucket,
        component,
        display: item.display,
        tokenKey: item.tokenKey,
        alpha: item.alpha,
        writing: writing || item.writing,
        note: extra,
        place: { file: rel(file), line, where }
    })
    coveredLines.add(`${rel(file)}:${line}`)
}

function colorsInValue (value, vars, params) {
    const withoutVar = maskNamedCalls(value, ['var', 'url'])
    const functions = []
    findNamedCalls(withoutVar, ['darken', 'lighten', 'color']).forEach(raw => {
        if ([...params].some(name => raw.includes(`$${name}`))) return
        const resolved = prettyHexes(resolveDollars(raw, vars, params))
        const base = baseOfFunction(resolved)
        functions.push({
            kind: 'fn',
            display: resolved,
            tokenKey: base ? base.tokenKey : '',
            writing: raw.replace(/\s+/g, ' ').trim(),
            compare: base
                ? `基于 ${base.display.startsWith('#') ? base.display.split(' / ')[0] : resolved}，${tokenNote(base.tokenKey, params.exact || {}, '该实色')}`
                : '颜色函数，没有可对照的实色'
        })
    })
    const rest = maskNamedCalls(withoutVar, ['darken', 'lighten', 'color'])
    const literals = []
    const dollarRe = /\$([A-Za-z_][\w-]*)/g
    let match = dollarRe.exec(rest)
    const consumed = []
    while (match) {
        consumed.push([match.index, match.index + match[0].length])
        if (!params.has(match[1])) {
            const resolved = resolveChain(match[1], vars)
            if (resolved && !resolved.includes('var(')) {
                extractLiterals(resolved).forEach(item => {
                    literals.push(Object.assign({}, item, { writing: `$${match[1]}` }))
                })
            }
        }
        match = dollarRe.exec(rest)
    }
    let plain = rest
    consumed.reverse().forEach(range => {
        plain = plain.slice(0, range[0]) + ' '.repeat(range[1] - range[0]) + plain.slice(range[1])
    })
    extractLiterals(plain).forEach(item => literals.push(item))
    return { functions, literals }
}

function registerMixin (frame) {
    const match = frame.match(/@define-mixin\s+([\w-]+)\s*([\s\S]*)/)
    if (!match) return
    const params = match[2].split(',').map(part => {
        const item = part.trim().match(/^\$([A-Za-z_][\w-]*)\s*(?::\s*([\s\S]+))?$/)
        if (!item) return null
        return { name: item[1], defaultValue: (item[2] || '').trim() }
    }).filter(Boolean)
    mixinMeta.set(match[1], { params, uses: [] })
}

function noteMixinColor (stack, prop, value) {
    const frame = [...stack].reverse().find(item => item.startsWith('@define-mixin'))
    if (!frame) return
    const name = frame.match(/@define-mixin\s+([\w-]+)/)[1]
    const meta = mixinMeta.get(name)
    if (!meta) return
    const lower = prop.toLowerCase()
    const isColor = lower === 'color'
        || lower.startsWith('background')
        || lower.startsWith('border')
        || lower.startsWith('outline')
        || lower === 'fill'
        || lower === 'stroke'
        || lower.includes('shadow')
    if (!isColor) return
    meta.params.forEach(param => {
        if (!new RegExp(`\\$${param.name}\\b`).test(value)) return
        const label = propLabel(prop)
        if (!meta.uses.some(use => use.param === param.name && use.label === label)) {
            meta.uses.push({ param: param.name, label })
        }
    })
}

function recordMixinCall (decl, selector, line, file, component, vars, exact) {
    const match = decl.match(/^@mixin\s+([\w-]+)\s*([\s\S]*)$/)
    if (!match) return
    const meta = mixinMeta.get(match[1])
    if (!meta || !meta.uses.length) return
    const args = match[2].trim() ? splitArgs(match[2].trim()) : []
    const labelsByParam = new Map()
    meta.uses.forEach(use => {
        if (!labelsByParam.has(use.param)) labelsByParam.set(use.param, [])
        if (!labelsByParam.get(use.param).includes(use.label)) labelsByParam.get(use.param).push(use.label)
    })
    labelsByParam.forEach((labels, paramName) => {
        const index = meta.params.findIndex(param => param.name === paramName)
        if (index < 0) return
        const provided = args[index]
        const raw = provided !== undefined && provided !== '' ? provided : meta.params[index].defaultValue
        if (!raw || raw.startsWith('var(')) return
        const variant = index > 0 && args[0] && !/^(#|\$|var\()/.test(args[0]) ? args[0] : ''
        const called = `${match[1]}${variant ? ` ${variant}` : ''}${args.length ? '' : ' 默认参数'}`
        const found = colorsInValue(raw, vars, new Set())
        found.functions.concat(found.literals).forEach(item => {
            pushColor({
                item,
                prop: labels.join('、'),
                component,
                file,
                value: raw,
                selector: [selector, called].filter(Boolean).join(' · '),
                line,
                exact,
                writing: raw
            })
        })
    })
}

function recordDecl (decl, stack, line, file, component, vars, exact) {
    const params = currentParams(stack)
    params.exact = exact
    const selector = formatSelector(stack)
    if (decl.startsWith('@mixin theme-color')) {
        const args = splitArgs(decl.replace(/^@mixin\s+theme-color\s+/, ''))
        const jobs = [
            ['background-color', args[0], args[3]],
            ['border-color', args[1], args[4]],
            ['color', args[2], '']
        ]
        jobs.forEach(job => {
            if (!job[1] || job[1].startsWith('var(')) return
            const resolved = resolveDollars(job[1], vars, params)
            if (job[2]) {
                const raw = `color(${resolved} a(${job[2]}))`
                const pretty = prettyHexes(raw)
                const base = baseOfFunction(pretty)
                pushColor({
                    item: {
                        kind: 'fn',
                        display: pretty,
                        tokenKey: base ? base.tokenKey : '',
                        writing: `${job[1]} / ${job[2]}`,
                        compare: base ? tokenNote(base.tokenKey, exact, '底色') : '颜色函数，没有可对照的实色'
                    },
                    prop: job[0],
                    component,
                    file,
                    value: decl,
                    selector,
                    line,
                    exact
                })
            } else {
                colorsInValue(resolved, vars, new Set()).literals.forEach(item => {
                    pushColor({
                        item,
                        prop: job[0],
                        component,
                        file,
                        value: decl,
                        selector,
                        line,
                        exact,
                        writing: job[1]
                    })
                })
            }
        })
        return
    }
    if (decl.startsWith('@mixin ')) {
        recordMixinCall(decl, selector, line, file, component, vars, exact)
        return
    }
    if (decl.startsWith('@') || decl.startsWith('$')) return
    const colon = decl.indexOf(':')
    if (colon < 1) return
    const prop = decl.slice(0, colon).trim()
    if (!prop || prop.startsWith('$') || prop.includes('{')) return
    const value = decl.slice(colon + 1).trim()
    noteMixinColor(stack, prop, value)
    const found = colorsInValue(value, vars, params)
    found.functions.concat(found.literals).forEach(item => {
        pushColor({
            item,
            prop,
            component,
            file,
            value,
            selector,
            line,
            exact
        })
    })
}

function scanCss (css, file, vars, exact, baseIndex, fullText) {
    const text = stripCssComments(css)
    const component = componentOf(file)
    seenComponents.add(component)
    const local = parseDollarVars(text)
    const scope = Object.assign({}, vars, local)
    const stack = []
    let buf = ''
    let bufStart = 0
    let quote = null
    for (let i = 0; i < text.length; i += 1) {
        const char = text[i]
        if (quote) {
            buf += char
            if (char === quote && text[i - 1] !== '\\') quote = null
            continue
        }
        if (char === '"' || char === "'") {
            quote = char
            buf += char
            continue
        }
        if (char === '{') {
            const prelude = buf.trim()
            if (prelude.startsWith('@define-mixin')) registerMixin(prelude)
            stack.push(prelude)
            buf = ''
            bufStart = i + 1
            continue
        }
        if (char === ';' || char === '}') {
            const decl = buf.trim()
            if (decl) {
                recordDecl(decl, stack, lineAt(fullText || text, (baseIndex || 0) + bufStart), file, component, scope, exact)
            }
            buf = ''
            bufStart = i + 1
            if (char === '}') stack.pop()
            continue
        }
        if (!buf.trim()) bufStart = i
        buf += char
    }
}

function scanJsColors (text, file, vars, exact) {
    const component = componentOf(file)
    seenComponents.add(component)
    const clean = stripJsComments(text)
    const re = /#[0-9a-fA-F]{3,8}\b|rgba?\([^)]+\)|hsla?\([^)]+\)/g
    let match = re.exec(clean)
    while (match) {
        const raw = match[0]
        if (/^#/.test(raw) && ![3, 4, 6, 8].includes(raw.length - 1)) {
            match = re.exec(clean)
            continue
        }
        const literals = extractLiterals(` ${raw}`)
        literals.forEach(item => {
            const line = lineAt(clean, match.index)
            const lineText = clean.split('\n')[line - 1] || ''
            pushColor({
                item,
                prop: jsProp(clean, match.index, lineText),
                component,
                file,
                value: lineText,
                selector: '',
                line,
                exact
            })
        })
        match = re.exec(clean)
    }
}

function jsProp (text, index, line) {
    if (/options\.color\s*=/.test(line)) return '加载背景色的兜底值'
    const direct = line.match(/([A-Za-z][\w-]*)\s*[:=]/)
    const labels = {
        backgroundColor: '背景',
        background: '背景',
        borderRight: '右边框',
        borderTopColor: '边框',
        borderColor: '边框',
        fill: '填充'
    }
    if (direct && labels[direct[1]]) return labels[direct[1]]
    const before = text.slice(Math.max(0, index - 800), index)
    const owners = []
    function collect (re, suffix) {
        let found = re.exec(before)
        while (found) {
            owners.push({ index: found.index, label: `${found[1]}${suffix}` })
            found = re.exec(before)
        }
    }
    collect(/([A-Za-z][\w-]*)\s*:\s*\{/g, '')
    collect(/([A-Za-z][\w-]*)\s*[:=]\s*\[/g, ' 列表')
    if (owners.length) {
        owners.sort((a, b) => a.index - b.index)
        const owner = owners[owners.length - 1].label
        return owner.includes('列表') ? `${owner}里的颜色` : `${owner} 的默认值`
    }
    if (direct) return direct[1]
    return '颜色'
}

function scanVue (file, vars, exact) {
    const content = fs.readFileSync(file, 'utf8')
    const styleRe = /<style[^>]*>([\s\S]*?)<\/style>/gi
    let match = styleRe.exec(content)
    while (match) {
        const innerStart = match.index + match[0].indexOf(match[1])
        scanCss(match[1], file, vars, exact, innerStart, content)
        match = styleRe.exec(content)
    }
    const rest = content.replace(styleRe, block => block.replace(/[^\n]/g, ' '))
    scanJsColors(rest, file, vars, exact)
}

function cell (value) {
    return String(value).replace(/\|/g, '\\|').replace(/\r?\n/g, ' ')
}

function placeText (places) {
    return places
        .slice()
        .sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line)
        .map(place => `\`${place.file}:${place.line}\` ${place.where}`.trim())
        .join('<br>')
}

function section (title, intro, bucket) {
    const rows = [...groups.values()].filter(group => group.bucket === bucket)
    const lines = [`## ${title}`, '', intro, '']
    if (!rows.length) {
        lines.push('无。', '')
        return lines
    }
    const byComponent = new Map()
    rows.forEach(row => {
        if (!byComponent.has(row.component)) byComponent.set(row.component, [])
        byComponent.get(row.component).push(row)
    })
    const names = [...byComponent.keys()].sort((a, b) => {
        const diff = byComponent.get(b).length - byComponent.get(a).length
        return diff || a.localeCompare(b)
    })
    lines.push(`共 ${rows.length} 条，出现 ${rows.reduce((sum, row) => sum + row.places.length, 0)} 处。`, '')
    names.forEach(name => {
        lines.push(`### ${name}`, '')
        if (name === 'diff' && bucket === 'match') {
            lines.push('这些是代码对比里的高亮色，不是按钮、表格这类界面色。', '')
        }
        lines.push('| 颜色 | 次数 | 对照 | 写法 | 用在哪里 |')
        lines.push('| --- | --- | --- | --- | --- |')
        byComponent.get(name)
            .sort((a, b) => b.places.length - a.places.length || a.display.localeCompare(b.display))
            .forEach(row => {
                const note = [...row.notes].filter(Boolean).join(' ')
                const where = placeText(row.places) + (note ? `<br>${note}` : '')
                lines.push(`| ${cell(row.display)} | ${row.places.length} | ${cell(row.compare || '')} | ${cell([...row.writings].join('、'))} | ${where} |`)
            })
        lines.push('')
    })
    return lines
}

function main () {
    const exact = loadLayer1()
    const globalVars = parseDollarVars(stripCssComments(fs.readFileSync(path.join(uiDir, 'variable.css'), 'utf8')))
    const cssFiles = walk(uiDir, []).filter(file => file.endsWith('.css') && !SKIP_FILES.has(path.basename(file)))
    cssFiles.forEach(file => {
        const css = fs.readFileSync(file, 'utf8')
        scanCss(css, file, globalVars, exact, 0, null)
    })
    walk(compDir, []).filter(file => /\.(vue|js)$/.test(file)).forEach(file => {
        scanVue(file, globalVars, exact)
    })
    groups.forEach(group => {
        const base = group.bucket === 'fn' ? baseOfFunction(group.display) : null
        const tokenKey = base ? base.tokenKey : group.tokenKey
        if (group.bucket === 'fn' && !base) group.compare = '颜色函数，没有可对照的实色'
        else if (group.bucket === 'alpha' || group.bucket === 'shadow' || group.bucket === 'fn') {
            group.compare = tokenNote(tokenKey, exact, '底色')
        } else group.compare = tokenNote(tokenKey, exact, '')
        if (group.alpha === 0) group.compare += '，全透明'
    })

    const buckets = ['match', 'exact', 'alpha', 'shadow', 'fn']
    const indexNames = new Set()
    groups.forEach(group => {
        if (buckets.includes(group.bucket)) indexNames.add(group.component)
    })
    const notComponent = new Set(['clearfix', 'ellipsis', 'init-box', 'create-rotate', 'scroller'])
    const covered = [...seenComponents]
        .filter(name => !NAV.has(name) && name !== 'color-picker' && !notComponent.has(name))
        .filter(name => ![...groups.values()].some(group => group.component === name && buckets.includes(group.bucket)))
        .sort()

    const lines = [
        '# bkui-vue2 还没接上变量的颜色',
        '',
        '2026-11-06 按当前源码重扫。已经写成 `var(--bk-...)` 的不在这里，注释里的颜色也不算。',
        '',
        'diff、version-detail 上次 review 定为不在配色范围，下面仍会列出，不用再匹配。导航和取色器色板同样不用匹配。Loading 白色兜底要保留十六进制。',
        '',
        '复制成功图标原来的 `#2DCB9D` 已按指定改成 Success-02，所以不在下面。',
        '',
        '「对照」只写色值完全相同的第一层变量，不做近似判断。第一节现在只剩 diff 和 version-detail，上次已定为不匹配。',
        '',
        '导航按约定不接。取色器的色带和推荐色不进主题变量。这两部分放在最后，不用匹配。',
        '',
        '`diff.css` 另外引了 highlight.js 的 googlecode 主题和 diff2html 的样式。那两份是第三方色板，没有逐条拆开。下面只列本仓库源码里写死的颜色。',
        '',
        '图标字体 `iconfont.css` 不在这份清单里。',
        '',
        '## 组件一览',
        '',
        '| 组件 | 待匹配实色 | 漏接同色 | 透明色 | 阴影 | 颜色函数 |',
        '| --- | --- | --- | --- | --- | --- |'
    ]
    ;[...indexNames].sort().forEach(name => {
        const count = bucket => [...groups.values()].filter(group => group.component === name && group.bucket === bucket).length
        lines.push(`| ${name} | ${count('match')} | ${count('exact')} | ${count('alpha')} | ${count('shadow')} | ${count('fn')} |`)
    })
    lines.push('')
    lines.push(`颜色都已经接上变量的组件：${covered.length ? covered.join('、') : '无'}。`, '')
    lines.push(...section(
        '需要你匹配的实色',
        '这些颜色和第一层任何色值都不一样，代码里仍是写死的。',
        'match'
    ))
    lines.push(...section(
        '色值和第一层相同，但代码没接上',
        '色值已经等于某一层变量，只是源码里还没写成变量。',
        'exact'
    ))
    lines.push(...section(
        '带透明度的颜色',
        '不含阴影。第一层只有实色，透明度需要单独决定。',
        'alpha'
    ))
    lines.push(...section(
        '阴影里的颜色',
        '下面只剩源码里还写死的投影和聚焦光圈。已经接到投影变量或 color-mix 的不在这里。',
        'shadow'
    ))
    lines.push(...section(
        '颜色函数',
        '`darken()`、`lighten()`、`color()` 在构建时会算成固定颜色。',
        'fn'
    ))
    lines.push(...section(
        '导航',
        '按约定维持写死的颜色，不用匹配。',
        'nav'
    ))
    lines.push(...section(
        '取色器色带和推荐色',
        '取色器自己的色带、推荐色、白色兜底，不用匹配进主题变量。',
        'picker'
    ))
    fs.writeFileSync(outFile, `${lines.join('\n').replace(/\n{3,}/g, '\n\n')}\n`)
    console.log(`wrote ${rel(outFile)} groups ${groups.size}`)
    buckets.concat(['nav', 'picker']).forEach(bucket => {
        const rows = [...groups.values()].filter(group => group.bucket === bucket)
        console.log(bucket, rows.length, 'places', rows.reduce((sum, row) => sum + row.places.length, 0))
    })
}

main()
