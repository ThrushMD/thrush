<!--
 * @Author: cyy
 * @Date: 2025-03-11 14:25:04
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-14 16:52:49
 * @Description: 
-->
<template lang="pug">
svg(:style="svgStyle")
  use(:xlink:href="symbolId" :style="style")
</template>

<script>
import { defineComponent, computed } from 'vue'
export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: '',
    },
    size: {
      type: [Number, String],
      default: 16
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`)
    const style = computed(() => {
      const r = {}
      if (props.color) {
        r.color = props.color
      }
      return r
    })
    const svgStyle = computed(() => {
      const r = {}
      if (props.size) {
        r.width = `${props.size}px`
        r.height = `${props.size}px`
      }
      return r
    })
    return { symbolId, style, svgStyle }
  }
})
</script>
<style lang="less" scoped>
svg {
  &:focus {
    outline: none;
  }
}
</style>