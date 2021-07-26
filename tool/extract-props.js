const { resolve, extname, basename, relative, sep } = require('path')
const { readFileSync, writeFileSync, readdirSync, statSync } = require('fs')
const templateCompiler = require('vue-template-compiler')
const { transform } = require('@babel/core')
const componentCompilerUtils = require('@vue/component-compiler-utils')

const plugin = require('./extract-plugin')

/**
 * src/components 下的所有组件文件集合
 *
 * @type {Array}
 */
const components = []

/**
 * 遍历 src/components 下的文件
 *
 * @param {string} filePath 遍历的目录
 */
;(function walk (filePath) {
    const dirList = readdirSync(filePath)
    dirList.forEach(item => {
        if (statSync(filePath + sep + item).isDirectory()) {
            walk(filePath + sep + item)
        } else {
            const ext = extname(item)
            if (ext === '.vue' || ext === '.js') {
                // const tmp = relative('.', filePath + sep + item)
                //     .replace(basename(relative('.', filePath + sep + item)), '')
                //     .replace(`src/components${sep}`, '')

                const absolutePath = relative('.', filePath + sep + item)
                const relativePath = absolutePath.replace(`src/components${sep}`, '')

                // new RegExp(`([^${sep}]*)${sep}.*`).test(tmp)

                new RegExp(`([^${sep}]*)${sep}.*`).test(relativePath)

                components.push({
                    dirName: RegExp.$1,
                    // fileName: basename(item).replace(ext, ''),
                    fileName: basename(item),
                    extName: extname(item),
                    relativePath: relativePath,
                    absolutePath: absolutePath
                    // filePath: relative('.', filePath + sep + item)
                })
            }
        }
    })
})(resolve(__dirname, '..', 'src/components'))

// console.error(components)
// writeFileSync(resolve(__dirname, './components.json'), JSON.stringify(components, null, 4), 'utf8')

const ret = {}

components.forEach((component, index) => {
    if (!ret[component.dirName]) {
        ret[component.dirName] = {}
    }

    ret[component.dirName][component.relativePath] = {}

    let source = ''
    let code = ''

    if (component.extName === '.vue') {
        source = readFileSync(resolve(__dirname, '..', component.absolutePath), 'utf-8')

        const sfcDescriptor = componentCompilerUtils.parse({
            compiler: templateCompiler,
            source,
            needMap: false
        })
        code = sfcDescriptor.script.content.replace(/^\/\/$/mg, '')
    } else if (component.extName === '.js') {
        source = readFileSync(resolve(__dirname, '..', component.absolutePath), 'utf-8')
        code = source.replace(/^\/\/$/mg, '')
    }

    transform(code, {
        presets: [
            [
                '@babel/preset-env',
                {
                    'modules': 'commonjs',
                    'targets': {
                        'node': 'current'
                    },
                    'debug': false
                }
            ]
        ],
        plugins: [
            [plugin, { result: ret[component.dirName][component.relativePath] }],
            ['@babel/plugin-transform-modules-commonjs', {
                noInterop: true
            }],
            'syntax-jsx'
        ]
    })
})

writeFileSync(resolve(__dirname, './ret.json'), JSON.stringify(ret, null, 4), 'utf8')
