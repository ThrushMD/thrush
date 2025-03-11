<!--
 * @Author: cyy
 * @Date: 2025-03-11 15:49:49
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-11 16:58:40
 * @Description: 
-->
<script setup>
import { ref, watch } from 'vue'
import { useSystemStore } from '@/stores/system'
const systemStore = useSystemStore()

const collapsed = ref(false)
watch(() => systemStore.openSideBar, v=> {
  collapsed.value = !v
}, {
  immediate: true
})
const selectedKeys = ref(['1'])
</script>
<template lang="pug">
a-layout-sider(
  v-model:collapsed="collapsed"
  :trigger="null"
  :width="200"
  :collapsedWidth="0"
  collapsible
)
  a-menu(
    v-model:selectedKeys="selectedKeys"
    theme="light"
    mode="inline"
  )
    a-menu-item(key='1')
      span nav 1
    a-menu-item(key='2')
      span nav 2
    a-menu-item(key='3')
      span nav 3
</template>
<style lang="less" scoped>
.ant-layout-sider {
  height: calc(~"100vh - 56px");
  background: transparent;
  :deep(.ant-menu) {
    background: transparent;
    border: 0;
  }
}
</style>