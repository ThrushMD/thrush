<script setup>
import Editor from '@cyyjs/editor'
import doc from './doc.md?raw'
import { ref } from 'vue'

const data = ref(doc)
const editorRef = ref(null)

</script>
<template lang="pug">
main
  Editor(v-model="data" ref="editorRef")
</template>
<style lang="less" scoped>
main {
  border: 1px solid #ccc;
  margin: 10px;
}
</style>
