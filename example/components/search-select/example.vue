<template>
  <div>
    <bk-search-select
      :data="data2"
      v-model="demo5.value"
    ></bk-search-select>
  </div>
</template>

<script>
import { bkSearchSelect } from '@'

export default {
  name: 'demo',
  components: {
    bkSearchSelect
  },
  data () {
    return {
      data2: [
        {
          name: '实例状态',
          id: '1',
          multiable: true,
          children: [
            {
              name: '创建中',
              id: '1-2'
            },
            {
              name: '运行中',
              id: '1-3'
            },
            {
              name: '已关机',
              id: '1-4'
            }
          ]
        },
        {
          name: '实例业务',
          id: '2',
          multiable: true,
          children: [
            {
              name: '王者荣耀',
              id: '2-1'
            },
            {
              name: '刺激战场',
              id: '2-2'
            },
            {
              name: '绝地求生',
              id: '2-3'
            }
          ],
          conditions: [
            {
              name: '>',
              id: '>'
            },
            {
              name: '>=',
              id: '>='
            },
            {
              name: '<=',
              id: '<='
            },
            {
              name: '<',
              id: '<'
            },
            {
              name: '=',
              id: '='
            }
          ]
        },
        {
          name: 'IP地址',
          id: '3'
        },
        {
          name: '实例名',
          id: '4'
        },
        {
          name: '实例地址',
          id: '5'
        },
        {
          name: '使用率',
          id: '6',
          conditions: [
            {
              name: '>',
              id: '>'
            },
            {
              name: '>=',
              id: '>='
            },
            {
              name: '<=',
              id: '<='
            },
            {
              name: '<',
              id: '<'
            },
            {
              name: '=',
              id: '='
            }
          ]
        }
      ],
      demo5: {
        value: []
      }
    }
  },
  methods: {

  }
}
</script>
