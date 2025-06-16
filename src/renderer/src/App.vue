<script setup>
import Header from '@/components/Header.vue'
import Sider from '@/components/sider/Sider.vue'
import { useAppTheme } from './composables/theme'
const appTheme = useAppTheme()
</script>
<template lang="pug">
a-config-provider(:theme="appTheme")
  Header
  a-layout.main
    Sider
    a-layout-content
      router-view
</template>
<style lang="less" scoped>
.main {
  padding: 0;
  height: calc(~"100vh - 56px");
  overflow: auto;
  .ant-layout-content {
    margin: 0 10px 10px 10px;
    &>div {
      height: 100%;
      overflow: auto;
    }
  }
}
</style>
