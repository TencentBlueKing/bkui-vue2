<script>
    import { bkUpload } from '@'

    export default {
        components: {
            bkUpload
        },
        data () {
            return {
                delay: true,
                limit: 2,
                files1: [
                    {
                        name: 'image.png',
                        status: 'done',
                        url: './example/static/images/preview/2.png'
                    }
                ],
                file2: [
                    {
                        name: 'r_project_page.csv',
                        url: 'https://power-backend-1252002024.cos.ap-guangzhou.myqcloud.com/20211018101752r_project_page.csv'
                    }
                ]
            }
        },
        methods: {
            testSuccess (file, fileList) {
                console.log(file, fileList, 'success')
            },
            testProgress (e, file, fileList) {
                console.log(e, file, fileList, 'progress')
            },
            testErr (file, fileList) {
                console.log(file, fileList, 'error')
            },
            testDone (fileList) {
                console.log(fileList, 'done')
            },
            testExceed (file, fileList) {
                this.$bkMessage({
                    theme: 'error',
                    message: `最多上传${this.limit}个文件`,
                    offsetY: 80
                })
            },
            handleRes (response) {
                console.log(response)
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>

[[toc]]

## Upload 文件上传

### 基础用法 {page=#/upload}

:::demo 上传组件提供图片和文件上传的功能，由 `accept` 属性来定义允许上传的文件类型，默认为 `*`

```html
<template>
    <bk-upload
        :tip="'只允许上传JPG、PNG、JPEG、ZIP的文件'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        @on-success="testSuccess"
        @on-progress="testProgress"
        @on-done="testDone"
        @on-error="testErr"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        methods: {
            testSuccess (file, fileList) {
                console.log(file, fileList, 'success')
            },
            testProgress (e, file, fileList) {
                console.log(e, file, fileList, 'progress')
            },
            testDone () {
                console.log('done')
            },
            testErr (file, fileList) {
                console.log(file, fileList, 'error')
            },
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 上传图片 {page=#/upload}

:::demo 配置 accept 属性，限制用户只允许上传 jpg、jpeg、png 格式的图片

```html
<template>
    <bk-upload
        :tip="'只允许上传JPG、PNG、JPEG的文件'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
        :accept="'image/png,image/jpeg,image/jpg'"
    ></bk-upload>
    <br />
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 上传 zip 文件 {page=#/upload}

:::demo 配置 accept 属性，限制用户只允许上传 zip 格式的文件

```html
<template>
    <bk-upload
        :tip="'只允许上传ZIP的文件'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
        :accept="'.zip'"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 设置文件大小 {page=#/upload}

:::demo 配置 size 属性，限制上传文件的大小

```html
<template>
    <bk-upload
        :tip="'最大上传5(Mb)的文件'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
        :size="5"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 设置上传文件个数 {page=#/upload}

:::demo 配置 limit 属性，设置上传文件个数

```html
<template>
    <bk-upload
        :tip="'最多上传2个文件'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
        :limit="limit"
        @on-exceed="testExceed"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        data () {
            return {
                limit: 2
            }
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            },
            testExceed (file, fileList) {
                this.$bkMessage({
                    theme: 'error',
                    message: `最多上传${this.limit}个文件`,
                    offsetY: 80
                })
            }
        }
    }
</script>
```

:::

### 点击按钮上传 {page=#/upload}

:::demo 设置 theme 属性为 button

```html
<template>
    <bk-upload
        :theme="'button'"
        :tip="'最大上传5(Mb)的文件'"
        :with-credentials="true"
        :files="file2"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
        :size="5"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        data () {
            return {
                file2: [
                    {
                        name: 'r_project_page.csv',
                        url: 'https://power-backend-1252002024.cos.ap-guangzhou.myqcloud.com/20211018101752r_project_page.csv'
                    }
                ]
            }
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 大文件分片上传 {page=#/upload}

**本示例不可用，只展示代码，需要的后端代码如下**

:::demo 设置 slice-upload 属性为 true，设置 slice-url 分片上传路径地址，设置 merge-url 合并分片的路径地址，设置 chunk-size 分片大小。

```html
<template>
    <bk-upload
        :theme="'button'"
        :tip="'最大上传5000(Mb)的文件'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :slice-upload="true"
        :slice-url="'/api/file/upload'"
        :merge-url="'/api/file/merge_chunks'"
        :chunk-size="10"
        :size="5000"
        :limit="5"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'
    export default {
        components: {
            bkUpload
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

```js
// 本示例需要的后端代码
const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const multer = require('koa-multer')
const serve = require('koa-static')
const path = require('path')
const fs = require('fs-extra')
const koaBody = require('koa-body')

const uploadPath = path.join(__dirname, 'uploads')
const uploadTempPath = path.join(uploadPath, 'temp')
const upload = multer({ dest: uploadTempPath })
const router = new Router()

const mkdirsSync = (dirname) => {
  if (fs.existsSync(dirname)) {
    return true
  } else {
    if (mkdirsSync(path.dirname(dirname))) {
      fs.mkdirSync(dirname)
      return true
    }
  }
}

app.use(koaBody())

router.post('/file/upload', upload.single('file'), async (ctx, next) => {
  console.log('file upload...')
  // 根据文件hash创建文件夹，把默认上传的文件移动当前hash文件夹下。方便后续文件合并。
  const { index, hash } = ctx.req.body

  const chunksPath = path.join(uploadPath, hash, '/')
  if (!fs.existsSync(chunksPath)) mkdirsSync(chunksPath)
  fs.renameSync(ctx.req.file.path, chunksPath + hash + '-' + index)
  ctx.status = 200
  ctx.body = { id: 'Success' }
  // ctx.res.end('Success')
})

router.post('/file/merge_chunks', async (ctx, next) => {
  const { name, total, hash } = ctx.request.body
  // 根据hash值，获取分片文件。
  // 创建存储文件
  // 合并
  const chunksPath = path.join(uploadPath, hash, '/')
  const filePath = path.join(uploadPath, name)
  // 读取所有的chunks 文件名存放在数组中
  const chunks = fs.readdirSync(chunksPath)
  // 创建存储文件
  fs.writeFileSync(filePath, '')
  if (chunks.length !== total || chunks.length === 0) {
    ctx.status = 500
    ctx.res.end('切片文件数量不符合')
    return
  }
  for (let i = 0; i < total; i++) {
    // 追加写入到文件中
    fs.appendFileSync(filePath, fs.readFileSync(chunksPath + hash + '-' + i))
    // 删除本次使用的chunk
    fs.unlinkSync(chunksPath + hash + '-' + i)
  }
  fs.rmdirSync(chunksPath)
  // 文件合并成功，可以把文件信息进行入库。
  ctx.status = 200
  ctx.body = { id: 'Success' }
  // ctx.res.end('Success');
})
app.use(router.routes())
app.use(router.allowedMethods())
app.use(serve(`${__dirname}/static`))
app.listen(8000, () => {
  console.log('Listening at 8000')
})
```

:::

### 照片墙 {page=#/upload}

:::demo 设置 theme 属性为 picture，限制文件类型为图片类型，比如：png，jpeg，jpg

```html
<template>
    <bk-upload
        :theme="'picture'"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 头像上传 {page=#/upload}

:::demo 设置 theme 属性为 picture，multiple 属性设置为 false，并限制文件类型为图片类型，比如：png，jpeg，jpg

```html
<template>
    <bk-upload
        :theme="'picture'"
        :multiple="false"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 编辑头像 {page=#/upload}

:::demo files填入已经上传过的图片

```html
<template>
    <bk-upload
        :files="files1"
        :theme="'picture'"
        :multiple="false"
        :with-credentials="true"
        :handle-res-code="handleRes"
        :url="'https://jsonplaceholder.typicode.com/posts/'"
    ></bk-upload>
</template>
<script>
    import { bkUpload } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkUpload
        },
        data () {
            return {
                files1: [
                    {
                        name: 'image.png',
                        status: 'done',
                        url: './example/static/images/preview/2.png'
                    }
                ]
            }
        },
        methods: {
            handleRes (response) {
                if (response.id) {
                    return true
                }
                return false
            }
        }
    }
</script>
```

:::

### 属性 {page=#/upload}
| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| theme| 上传组件类型 | String | 支持拖拽和点击(draggable)、按钮(button)、图片卡片(picture) | 'draggable' |
| accept | 可选的文件类型。theme为 picture时且accept没有配置时，可接受文件文类型为：'image/png,image/jpeg,image/jpg'。 | String | 参考 [input 元素的 accept 属性](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept)，尽量使用文件扩展名 | —— |
| url | 服务器地址（必传） | String | —— | 0 |
| header | 请求头 `{ name: " ", value: " " }` | Array,Object | —— | —— |
| handle-res-code | 处理返回码的函数，默认参数 response，需要返回 true 或 false | Function | —— | true |
| multiple | 是否支持多选 | Boolean | `true` / `false` | true |
| name | 后台读取文件的 key | String | —— | 'upload_file' |
| size | 限制上传文件体积 `{ maxFileSize: 1, maxImgSize: 1 }`| Number, Object| —— | 5(MB) |
| limit | 限制上传文件个数| Number | —— | —— |
| form-data-attributes | 自定义上传属性 | `Array | [{ name: 'attrName', value: Object }]` | —— | —— |
| with-credentials | 是否允许带上 cookie | Boolean | —— | false |
| tip | 提示信息 | String | —— | —— |
| delay-time | 上传完毕后列表消失时间 | Number | -- | 0 |
| validate-name | 用来验证文件名是否合法的 | RegExp | -- | -- |
| custom-request | 覆盖默认的上传行为，自定义上传的实现 | Function | -- | -- |
| ext-cls | 配置自定义样式类名，传入的类会被加在组件最外层的 DOM `.bk-upload` 上 | String | —— | —— |
| files | 默认图片 | Array | —— | —— |
| slice-upload | 是否采用大文件分片上传 | Boolean | true/false | false |
| slice-url | 分片上传chunk服务器路径 | String | —— | —— |
| merge-url | 分片上传合并chunk服务器路径 | String | —— | —— |
| chunk-size | 分片大小 | Number | —— | 10M

### 事件 {page=#/upload}
| 事件名称 | 说明 | 回调参数 |
|------|------|------|
| on-done | 所有文件上传完毕后的事件 | fileList |
| on-progress | 文件上传进行时的事件 | e, file，fileList |
| on-success | 文件上传成功后的事件 | file，fileList |
| on-error | 文件上传失败后的事件 | file，fileList |
| on-exceed | 文件上传个数超出限制后的事件 | file，fileList |
| on-delete | 文件上传成功后，点击删除文件触发的事件 | file（删除的哪个文件对象），fileList（删除后的文件列表） |
