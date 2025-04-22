<template lang="pug">
.toc
  .title 目录
  ToCEmptyState(v-if="!items.length")
  template(v-else)
    ToCItem(
      v-for="(item, i) in items"
      :key="item.id"
      :item="item"
      :index="i + 1"
      @item-click="onItemClick"
    )
</template>

<script setup>
import { TextSelection } from '@tiptap/pm/state'
import { defineComponent } from 'vue'

import ToCEmptyState from './TocEmptyState.vue'
import ToCItem from './TocItem.vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  },
  editor: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['item-click'])
const onItemClick = (e, id) => {
  if (props.editor) {
    const element = props.editor.view.dom.querySelector(`[data-toc-id="${id}"`)
    const pos = props.editor.view.posAtDOM(element, 0)
    // set focus
    const tr = props.editor.view.state.tr
    tr.setSelection(new TextSelection(tr.doc.resolve(pos)))
    props.editor.view.dispatch(tr)
    props.editor.view.focus()
    if (history.pushState) {
      // eslint-disable-line
      history.pushState(null, null, `#${id}`) // eslint-disable-line
    }
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY,
      behavior: 'smooth'
    })
  }
}
</script>
<style lang="less" scoped>
.toc {
  width: 15rem;
  padding: 10px;
  height: 100%;
  border-left: 1px solid var(--toc-border-color);
  &>.title {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 10px;
  }
}
</style>
