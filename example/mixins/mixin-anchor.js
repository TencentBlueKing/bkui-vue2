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
 * @file anchor mixin
 *
 * Copyright © 2012-2019 Tencent BlueKing. All Rights Reserved. 蓝鲸智云 版权所有
 */

import { getActualTop } from '../../src/utils/util'

export default {
    watch: {
        $route (to, from) {
            const anchor = to.query.anchor || to.query.v
            if (!anchor) {
                window.scrollTo(0, 0)
                return
            }
            setTimeout(() => {
                this.jumpAnchor(anchor)
            }, 0)
        }
    },
    mounted () {
        const self = this
        document.querySelector('.app-content').addEventListener('click', e => {
            const tagName = e.target.tagName.toUpperCase()
            if (tagName === 'SPAN' && e.target.classList.contains('toc-link-content')) {
                e.preventDefault()
                e.stopPropagation()
                const query = e.target.parentNode.getAttribute('href')
                if (!query) {
                    return
                }
                self.$router.push({
                    name: self.$route.name,
                    query: {
                        anchor: query
                    }
                })
            }
            if (tagName === 'A') {
                const anchorLink = e.target.getAttribute('anchor-link')
                if (!anchorLink) {
                    return
                }
                e.preventDefault()
                e.stopPropagation()
                self.$router.push({
                    name: self.$route.name,
                    query: {
                        anchor: anchorLink
                    }
                })
            }
        })

        const anchor = this.$route.query.anchor || this.$route.query.v
        if (!anchor) {
            return
        }
        this.jumpAnchor(anchor)
    },
    methods: {
        jumpAnchor (anchor) {
            const node = document.getElementById(anchor)
            if (!node) {
                window.scrollTo(0, 0)
                return
            }

            const tocNode = document.querySelector('.table-of-contents')
            if (tocNode) {
                Array.from(tocNode.querySelectorAll('a')).forEach(node => {
                    node.parentNode.classList.remove('cur')
                })
                const hrefNode = tocNode.querySelector(`a[href="${anchor}"]`)
                if (hrefNode) {
                    hrefNode.parentNode.classList.add('cur')
                }
            }
            const top = getActualTop(node)
            setTimeout(() => {
                window.scrollTo(0, top - 70)
            }, 0)
        }
    }
}
