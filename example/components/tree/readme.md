<script>
    import { bkTree, bkButton } from '@'

    export default {
        components: {
            bkTree,
            bkButton
        },
        data () {
            return {
                isEmpty: false,
                treeListOne: [
                    {
                        name: 'tree node1',
                        title: 'tree node1',
                        expanded: true,
                        id: 1,
                        children: [
                            {
                                name: 'tree node 1-1',
                                title: 'tree node 1-1',
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-1-1', title: 'tree node 1-1-1', id: 2 },
                                    { name: 'tree node 1-1-2', title: 'tree node 1-1-2', id: 3 },
                                    { name: 'tree node 1-1-3', title: 'tree node 1-1-3', id: 4 }
                                ]
                            },
                            {
                                title: 'tree node 1-2',
                                name: 'tree node 1-2',
                                id: 5,
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-2-1', title: 'tree node 1-2-1', id: 6 },
                                    { name: 'tree node 1-2-2', title: 'tree node 1-2-2', id: 7 }
                                ]
                            }
                        ]
                    }
                ],
                treeListThree: [
                    {
                        name: 'async nodes',
                        expanded: false,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        async: true,
                        id: 1
                    }
                ],
                treeListTwo: [
                    {
                        name: '??????[????????????????????????1]',
                        expanded: true,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        id: 1,
                        children: [
                            { name: 'testwa.fda.1.1', icon: 'icon-file', id: 2 },
                            { name: 'testwa.fda.1.2', icon: 'icon-file', title: 'testwa.fda.1.2', id: 3 },
                            { name: 'testwa.fda.1.3', icon: 'icon-file', id: 4, parentId: 1 },
                            {
                                name: '??????[???????????????????????????1]',
                                openedIcon: 'icon-folder-open',
                                closedIcon: 'icon-folder',
                                expanded: true,
                                id: 5,
                                children: [
                                    { name: 'testwa.fda.2.1', icon: 'icon-file', id: 6 },
                                    { name: 'testwa.fda.2.2', icon: 'icon-file', id: 7 },
                                    { name: 'testwa.fda.2.3', icon: 'icon-file', id: 8 }
                                ]
                            },
                            { name: '??????[???????????????????????????2]', icon: 'icon-file', id: 9 },
                            { name: '??????[???????????????????????????3]', icon: 'icon-file', id: 10 },
                            { name: '??????[???????????????????????????4]', icon: 'icon-file', id: 11 }
                        ]
                    }
                ],
                treeListFour: [
                    {
                        name: '??????[????????????????????????1]',
                        expanded: true,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        id: 1,
                        children: [
                            { name: 'testwa.fda.1.1', icon: 'icon-file', id: 2 },
                            { name: 'testwa.fda.1.2', icon: 'icon-file', title: 'testwa.fda.1.2', id: 3 },
                            { name: 'testwa.fda.1.3', icon: 'icon-file', id: 4 },
                            {
                                name: '??????[???????????????????????????1]',
                                openedIcon: 'icon-folder-open',
                                closedIcon: 'icon-folder',
                                expanded: true,
                                id: 5,
                                children: [
                                    { name: 'testwa.fda.2.1', icon: 'icon-file', id: 6 },
                                    { name: 'testwa.fda.2.2', icon: 'icon-file', id: 7 },
                                    { name: 'testwa.fda.2.3', icon: 'icon-file', id: 8 }
                                ]
                            },
                            {
                                name: '??????[???????????????????????????2]',
                                icon: 'icon-file',
                                id: 9
                            }
                        ]
                    }
                ],
                treeListFive: [
                    {
                        name: '??????[????????????????????????1]',
                        expanded: true,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        id: 1,
                        children: [
                            { name: 'testwa.fda.1.1', icon: 'icon-file', id: 2 },
                            { name: 'testwa.fda.1.2', icon: 'icon-file', title: 'testwa.fda.1.2', id: 3 },
                            {
                                name: '??????[???????????????????????????1]',
                                openedIcon: 'icon-folder-open',
                                closedIcon: 'icon-folder',
                                id: 5,
                                expanded: true,
                                children: [
                                    { name: 'testwa.fda.2.1', icon: 'icon-file', id: 6 },
                                    { name: 'testwa.fda.2.2', icon: 'icon-file', id: 7 },
                                    { name: 'testwa.fda.2.3', icon: 'icon-file', id: 8 }
                                ]
                            },
                            {name: 'testwa.fda.1.3', icon: 'icon-file', id: 4 },
                            {name: '??????[???????????????????????????2]', icon: 'icon-file', id: 9 }
                        ]
                    }
                ],
                treeListSix: [
                    {
                        name: 'tree node1',
                        title: 'tree node1',
                        expanded: true,
                        id: 1,
                        children: [
                            {
                                name: 'tree node 1-1',
                                title: 'tree node 1-1',
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-1-1', title: 'tree node 1-1-1', id: 2 },
                                    { name: 'tree node 1-1-2', title: 'tree node 1-1-2', id: 3 },
                                    { name: 'tree node 1-1-3', title: 'tree node 1-1-3', id: 4 }
                                ]
                            },
                            {
                                title: 'tree node 1-2',
                                name: 'tree node 1-2',
                                id: 5,
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-2-1', title: "tree node 1-2-1", id: 6 },
                                    { name: 'tree node 1-2-2', title: "tree node 1-2-2", id: 7 }
                                ]
                            }
                        ]
                    }
                ],
                searchWord: '',
                dragSort: false
            }
        },
        methods: {
            nodeClickOne (node) {
                console.log(node)
            },
            nodeClickTwo (node) {
                console.log(node)
            },
            nodeClickThree (node) {
                console.log(node)
            },
            nodeClickFour (node) {
                console.log(node)
            },
            nodeClickFive (node) {
                console.log(node)
            },
            nodeCheckOne (node, checked) {
                console.log(node)
                console.log(checked)
            },
            nodeCheckTwo (node, checked) {
                console.log(node)
                console.log(checked)
            },
            nodeCheckThree (node, checked) {
                console.log(node)
                console.log(checked)
            },
            nodeCheckFour (node, checked) {
                console.log(node)
                console.log(checked)
            },
            nodeExpandedOne (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            nodeExpandedTwo (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            nodeExpandedThree (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            nodeExpandedFour (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            nodeExpandedFive (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            dragNodeEnd (dragNode, targetNode) {
                console.log(dragNode)
                console.log(targetNode)
            },
            randomId () {
                return Math.ceil(Math.random() * 66) * Math.ceil(Math.random() * 88) + 1
            },
            async asyncLoadNodes (node) {
                this.$set(node, 'loading', true)
                let pro = await new Promise((resolve, reject) => {
                    setTimeout(resolve, 2000, [{name: 'async node', async: true, id: this.randomId()}, {name: 'async node', id: this.randomId()}])
                })
                pro.forEach((el) => {
                    if (!node.hasOwnProperty('children')) {
                        this.$set(node, 'children', [])
                    }
                    node.children.push(el)
                })
                this.$set(node, 'loading', false)
            },
            search () {
                this.$refs.tree5.searchNode(this.searchWord)
                const searchResult = this.$refs.tree5.getSearchResult()
                this.isEmpty = searchResult.isEmpty
            },
            dragNodeEnd (dragNode, targetNode) {
                console.log(dragNode)
                console.log(targetNode)
            },
            nodeClickSix (node) {
                console.log(node)
            },
            nodeExpandedSix (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            tpl (node, ctx) {
                let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
                return <span>
                    <span class={titleClass} domPropsInnerHTML={node.title} onClick={() => {this.$refs.tree6.nodeSelected(node)}}></span>
                    <span class="add-button" onClick={() => this.$refs.tree6.addNode(node, {name: 'add node', title: 'add node', id: this.randomId()})}>+</span>
                    <span class="delete-button" onClick={() => this.$refs.tree6.delNode(node.parent, node)}>-</span>
                </span>
            },
            openDragSort () {
                this.dragSort = !this.dragSort
            }
        }
    }
</script>
<style lang="postcss">
    .bk-form-input {
        box-sizing: border-box;
        height: 32px;
        line-height: 1;
        color: #666;
        background-color: #fff;
        border-radius: 2px;
        box-sizing: border-box;
        border: 1px solid #c3cdd7;
        padding: 0 10px;
        font-size: 14px;
        text-align: left;
        vertical-align: middle;
        outline: none;
        resize:none;
        transition: border linear .2s;
    }
    .add-button {
        width: 24px;
        height: 24px;
        line-height: 20px;
        display: inline-block;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-left: 5px;
        font-size: 12px;
        color: rgb(97, 97, 97);
        text-align: center;
        cursor: pointer;
    }
    .delete-button {
        width: 24px;
        height: 24px;
        line-height: 20px;
        display: inline-block;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-left: 5px;
        font-size: 12px;
        color: rgb(63, 63, 63);
        text-align: center;
        cursor: pointer;
    }
</style>

[[toc]]

## Tree ???

????????????????????????????????????????????????????????????

:::exampleLink [????????????](#/tree/example)

### ???????????? {page=#/tree}

:::demo ???????????? `data` ??? `node-key`????????? `has-border` ????????????

```html
<template>
    <bk-tree
        ref="tree1"
        :data="treeListOne"
        :node-key="'id'"
        :has-border="true"
        @on-click="nodeClickOne"
        @on-expanded="nodeExpandedOne">
    </bk-tree>
</template>
<script>
    import { bkTree } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkTree
        },
        data () {
            return {
                treeListOne: [
                    {
                        name: 'tree node1',
                        title: 'tree node1',
                        expanded: true,
                        id: 1,
                        children: [
                            {
                                name: 'tree node 1-1',
                                title: 'tree node 1-1',
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-1-1', title: 'tree node 1-1-1', id: 2 },
                                    { name: 'tree node 1-1-2', title: 'tree node 1-1-2', id: 3 },
                                    { name: 'tree node 1-1-3', title: 'tree node 1-1-3', id: 4 }
                                ]
                            },
                            {
                                title: 'tree node 1-2',
                                name: 'tree node 1-2',
                                id: 5,
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-2-1', title: 'tree node 1-2-1', id: 6 },
                                    { name: 'tree node 1-2-2', title: 'tree node 1-2-2', id: 7 }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            nodeClickOne (node) {
                console.log(node)
            },
            nodeExpandedOne (node, expanded) {
                console.log(node)
                console.log(expanded)
            }
        }
    }
</script>
```
:::

### ???????????? {page=#/tree}

:::demo ?????? `multiple` ??? true ???????????????????????????????????? checkbox

```html
<template>
    <bk-tree
        ref="tree2"
        :data="treeListTwo"
        :multiple="true"
        :node-key="'id'"
        :has-border="true"
        @on-click="nodeClickTwo"
        @on-check="nodeCheckTwo"
        @on-expanded="nodeExpandedTwo">
    </bk-tree>
</template>
<script>
    import { bkTree } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkTree
        },
        data () {
            return {
                treeListTwo: [
                    {
                        name: '??????[????????????????????????1]',
                        expanded: true,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        id: 1,
                        children: [
                            { name: 'testwa.fda.1.1', icon: 'icon-file', id: 2 },
                            { name: 'testwa.fda.1.2', icon: 'icon-file', title: 'testwa.fda.1.2', id: 3 },
                            { name: 'testwa.fda.1.3', icon: 'icon-file', id: 4, parentId: 1 },
                            {
                                name: '??????[???????????????????????????1]',
                                openedIcon: 'icon-folder-open',
                                closedIcon: 'icon-folder',
                                expanded: true,
                                id: 5,
                                children: [
                                    { name: 'testwa.fda.2.1', icon: 'icon-file', id: 6 },
                                    { name: 'testwa.fda.2.2', icon: 'icon-file', id: 7 },
                                    { name: 'testwa.fda.2.3', icon: 'icon-file', id: 8 }
                                ]
                            },
                            { name: '??????[???????????????????????????2]', icon: 'icon-file', id: 9 },
                            { name: '??????[???????????????????????????3]', icon: 'icon-file', id: 10 },
                            { name: '??????[???????????????????????????4]', icon: 'icon-file', id: 11 }
                        ]
                    }
                ]
            }
        },
        methods: {
            nodeClickTwo (node) {
                console.log(node)
            },
            nodeCheckTwo (node, checked) {
                console.log(node)
                console.log(checked)
            },
            nodeExpandedTwo (node, expanded) {
                console.log(node)
                console.log(expanded)
            }
        }
    }
</script>
```
:::

### ?????????????????? {page=#/tree}

:::demo ??? `data` ???????????????????????????????????????????????????????????? `async` ??? true ??????

```html
<template>
    <bk-tree
        ref="tree3"
        :data="treeListThree"
        :node-key="'id'"
        :has-border="true"
        @async-load-nodes="asyncLoadNodes"
        @on-click="nodeClickThree"
        @on-expanded="nodeExpandedThree">
    </bk-tree>
</template>
<script>
    import { bkTree } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkTree
        },
        data () {
            return {
                treeListThree: [
                    {
                        name: 'async nodes',
                        expanded: false,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        async: true,
                        id: 1
                    }
                ]
            }
        },
        methods: {
            nodeClickThree (node) {
                console.log(node)
            },
            nodeExpandedThree (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            randomId () {
                return Math.ceil(Math.random() * 66) * Math.ceil(Math.random() * 88) + 1
            },
            async asyncLoadNodes (node) {
                this.$set(node, 'loading', true)
                const pro = await new Promise((resolve, reject) => {
                    setTimeout(resolve, 2000, [{name: 'async node', async: true, id: this.randomId()}, {name: 'async node', id: this.randomId()}])
                })
                pro.forEach((el) => {
                    if (!node.hasOwnProperty('children')) {
                        this.$set(node, 'children', [])
                    }
                    node.children.push(el)
                })
                this.$set(node, 'loading', false)
            }
        }
    }
</script>
```
:::

### ?????????????????? {page=#/tree}

:::demo ?????? `draggable` ??? true ?????????????????????????????? `drag-sort` ??? true ????????????????????????????????????????????????????????????????????????????????????

```html
<template>
    <bk-button type="primary" @click="openDragSort">{{dragSort ? '????????????????????????' : '????????????????????????'}}</bk-button>
    <bk-tree
        ref="tree4"
        :data="treeListFour"
        :node-key="'id'"
        :draggable="true"
        :drag-sort="dragSort"
        :has-border="true"
        @on-click="nodeClickFour"
        @drag-node-end="dragNodeEnd"
        @on-expanded="nodeExpandedFour">
    </bk-tree>
</template>
<script>
    import { bkTree } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkTree
        },
        data () {
            return {
                treeListFour: [
                    {
                        name: '??????[????????????????????????1]',
                        expanded: true,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        id: 1,
                        children: [
                            { name: 'testwa.fda.1.1', icon: 'icon-file', id: 2 },
                            { name: 'testwa.fda.1.2', icon: 'icon-file', title: 'testwa.fda.1.2', id: 3 },
                            { name: 'testwa.fda.1.3', icon: 'icon-file', id: 4 },
                            {
                                name: '??????[???????????????????????????1]',
                                openedIcon: 'icon-folder-open',
                                closedIcon: 'icon-folder',
                                expanded: true,
                                id: 5,
                                children: [
                                    { name: 'testwa.fda.2.1', icon: 'icon-file', id: 6 },
                                    { name: 'testwa.fda.2.2', icon: 'icon-file', id: 7 },
                                    { name: 'testwa.fda.2.3', icon: 'icon-file', id: 8 }
                                ]
                            },
                            {
                                name: '??????[???????????????????????????2]',
                                icon: 'icon-file',
                                id: 9
                            }
                        ]
                    }
                ],
                dragSort: false
            }
        },
        methods: {
            nodeClickFour (node) {
                console.log(node)
            },
            nodeExpandedFour (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            dragNodeEnd (dragNode, targetNode) {
                console.log(dragNode)
                console.log(targetNode)
            },
            openDragSort () {
                this.dragSort = !this.dragSort
            }
        }
    }
</script>
```
:::

### ???????????? {page=#/tree}

:::demo ?????? ref ?????? searchNode ??????????????????????????? getSearchResult ?????? ????????????????????????

```html
<template>
    <input type="text" class="bk-form-input" v-model="searchWord" placeholder="search..." />
    <bk-button type="primary" style="margin-top: 10px;" @click="search">search</bk-button>
    <bk-tree
        ref="tree5"
        :data="treeListFive"
        :node-key="'id'"
        :multiple="true"
        :has-border="true"
        @on-click="nodeClickFive"
        @on-expanded="nodeExpandedFive">
    </bk-tree>
    <div v-if="isEmpty">????????????????????????</div>
</template>
<script>
    import { bkTree, bkButton } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkTree,
            bkButton
        },
        data () {
            return {
                isEmpty: false,
                searchWord: '',
                treeListFive: [
                    {
                        name: '??????[????????????????????????1]',
                        expanded: true,
                        openedIcon: 'icon-folder-open',
                        closedIcon: 'icon-folder',
                        id: 1,
                        children: [
                            { name: 'testwa.fda.1.1', icon: 'icon-file', id: 2 },
                            { name: 'testwa.fda.1.2', icon: 'icon-file', title: 'testwa.fda.1.2', id: 3 },
                            {
                                name: '??????[???????????????????????????1]',
                                openedIcon: 'icon-folder-open',
                                closedIcon: 'icon-folder',
                                id: 5,
                                expanded: true,
                                children: [
                                    { name: 'testwa.fda.2.1', icon: 'icon-file', id: 6 },
                                    { name: 'testwa.fda.2.2', icon: 'icon-file', id: 7 },
                                    { name: 'testwa.fda.2.3', icon: 'icon-file', id: 8 }
                                ]
                            },
                            { name: 'testwa.fda.1.3', icon: 'icon-file', id: 4 },
                            { name: '??????[???????????????????????????2]', icon: 'icon-file', id: 9 }
                        ]
                    }
                ]
            }
        },
        methods: {
            nodeClickFive (node) {
                console.log(node)
            },
            nodeExpandedFive (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            search () {
                this.$refs.tree5.searchNode(this.searchWord)
                const searchResult = this.$refs.tree5.getSearchResult()
                this.isEmpty = searchResult.isEmpty
            }
        }
    }
</script>
<style lang="postcss">
    .bk-form-input {
        box-sizing: border-box;
        height: 32px;
        line-height: 1;
        color: #666;
        background-color: #fff;
        border-radius: 2px;
        width: 80%;
        box-sizing: border-box;
        border: 1px solid #c3cdd7;
        padding: 0 10px;
        font-size: 14px;
        text-align: left;
        vertical-align: middle;
        outline: none;
        resize:none;
        transition: border linear .2s;
    }
</style>
```
:::

### ??????????????? {page=#/tree}

:::demo ??????tpl??????????????????????????????

```html
<template>
    <bk-tree
        ref="tree6"
        :data="treeListSix"
        :node-key="'id'"
        :multiple="true"
        :tpl="tpl"
        :has-border="true"
        @on-click="nodeClickSix"
        @on-expanded="nodeExpandedSix">
    </bk-tree>
</template>
<script>
    import { bkTree } from '{{BASE_LIB_NAME}}'

    export default {
        components: {
            bkTree
        },
        data () {
            return {
                treeListSix: [
                    {
                        name: 'tree node1',
                        title: 'tree node1',
                        expanded: true,
                        id: 1,
                        children: [
                            {
                                name: 'tree node 1-1',
                                title: 'tree node 1-1',
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-1-1', title: 'tree node 1-1-1', id: 2 },
                                    { name: 'tree node 1-1-2', title: 'tree node 1-1-2', id: 3 },
                                    { name: 'tree node 1-1-3', title: 'tree node 1-1-3', id: 4 }
                                ]
                            },
                            {
                                title: 'tree node 1-2',
                                name: 'tree node 1-2',
                                id: 5,
                                expanded: true,
                                children: [
                                    { name: 'tree node 1-2-1', title: 'tree node 1-2-1', id: 6 },
                                    { name: 'tree node 1-2-2', title: 'tree node 1-2-2', id: 7 }
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        methods: {
            nodeClickSix (node) {
                console.log(node)
            },
            nodeExpandedSix (node, expanded) {
                console.log(node)
                console.log(expanded)
            },
            randomId () {
                return Math.ceil(Math.random() * 66) * Math.ceil(Math.random() * 88) + 1
            },
            tpl (node, ctx, h) {
                // ???????????????????????? h ???????????????????????????????????? h ??????????????????????????? h ??????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
                // ?????? h ?????????????????????????????? h ?????????????????????????????? h ??????????????????
                const titleClass = node.selected ? 'node-title node-selected' : 'node-title'
                return <span>
                    <span class={titleClass} domPropsInnerHTML={node.title} onClick={() => {this.$refs.tree6.nodeSelected(node)}}></span>
                    <span class="add-button" onClick={() => this.$refs.tree6.addNode(node, {name: 'add node', title: 'add node', id: this.randomId()})}>+</span>
                    <span class="delete-button" onClick={() => this.$refs.tree6.delNode(node.parent, node)}>-</span>
                </span>
            }
        }
    }
</script>
<style lang="postcss">
    .add-button {
        width: 24px;
        height: 24px;
        line-height: 20px;
        display: inline-block;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-left: 5px;
        font-size: 12px;
        color: rgb(97, 97, 97);
        text-align: center;
        cursor: pointer;
    }
    .delete-button {
        width: 24px;
        height: 24px;
        line-height: 20px;
        display: inline-block;
        background-color: transparent;
        border: 1px solid #ccc;
        border-radius: 5px;
        margin-left: 5px;
        font-size: 12px;
        color: rgb(63, 63, 63);
        text-align: center;
        cursor: pointer;
    }
</style>
```
:::

### ?????? {page=#/tree}
| ?????? | ?????? | ?????? | ????????? | ????????? |
|------|------|------|------|------|
| data | tree ????????????????????? | Array | ??????  | ?????? |
| node-key | ?????????????????????key??????????????? | String | ?????? | id |
| show-icon | ?????????????????????icon | Boolean | true / false | true |
| multiple | ??????/???????????? | Boolean | ?????? | false |
| has-border | ?????????????????? | Boolean | ?????? | false |
| draggable | ????????????????????? | Boolean | true / false | false |
| drag-sort | ?????????????????????????????????????????????????????????????????????????????????????????? | Boolean | true / false | false |
| drag-after-expanded | ??????????????????????????? | Boolean | Boolean | true |
| is-delete-root | ???????????????????????? | Boolean | true / false | false |
| opened-icon | ????????????????????????icon(????????????????????????????????????icon) | String | ?????? | icon-folder-open |
| closed-icon | ????????????????????????icon(????????????????????????????????????icon) | String | ?????? | icon-folder |
| node-icon | ???????????????icon(????????????????????????????????????icon) | String | ?????? | icon-file |
| tpl | ??????????????? | Function | ?????? | ?????? |
| ext-cls | ???????????????????????????????????????????????????????????????????????? DOM `.bk-tree` ??? | String | ?????? | ?????? |

### ?????? {page=#/tree}
| ???????????? | ?????? | ???????????? |
|------|------|------|
| on-click | ?????????????????? | node ???????????????????????? |
| on-check | ????????????????????? chang ?????? ???????????????????????? | node ???????????????????????? |
| on-expanded | ????????????/???????????? | node / expanded |
| on-drag-node | ???????????????????????? | dragNode / targetNode |
| async-load-nodes | ???????????????????????? | node ?????????????????? |

### ?????? {page=#/tree}
| ???????????? | ?????? | ?????? |
|------|------|------|
| getNode | ??????????????????(????????????????????????????????? on-click ??????????????????) | keyParton(Array / String ???????????????) |
| searchNode | ???????????? | filter ???????????????/ data |
| getSearchResult | ???????????????????????? | list(??????????????????)/ isEmpty(??????????????????????????????) |
| addNode | ?????????????????? | parent / newNode |
| addNodes | ?????????????????? | parent / newChildren |
| delNode | ???????????? | parent / node |
