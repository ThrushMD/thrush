<!--
 * @Author: cyy
 * @Date: 2025-03-10 18:07:53
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-18 15:35:18
 * @Description: 
-->
<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useSystemStore } from '@/stores/system'
import { usePostStore } from '@/stores/post'
const systemStore = useSystemStore()
const postStore = usePostStore()
const route = useRoute()
const currentTitle = computed(() => {
  const name = route?.name || 'home'
  if (name === 'editor') {
    return {
      icon: 'file-markdown',
      title: postStore.title
    }
  }
  return {
    icon: name,
    title: route?.meta?.title || '主页'
  }
})
</script>
<template lang="pug">
a-layout-header.drag(:class="{open: systemStore.openSideBar}")
  a-button.nodrag.side-bar-btn(type="text" @click="systemStore.toggleSideBar")
    SvgIcon.close(name="side-bar-close" :size="20")
    SvgIcon.open(name="side-bar-open" :size="20")
  .center
    .title
      SvgIcon.icon(:name="currentTitle.icon")
      span {{currentTitle.title}}
  .right xxxxxxx
</template>
<style lang="less" scoped>
.ant-layout-header {
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 9999;
  line-height: 60px;
  padding-left: 90px;
  padding-right: 20px;
  height: 56px;

  .side-bar-btn {
    padding: 2px;
    height: 26px;
    width: 26px;
    text-align: center;
    // position: absolute;
    .open {
      display: none;
    }
  }

  &.open {
    .side-bar-btn {
      .open {
        display: inherit;
      }

      .close {
        display: none;
      }
    }
  }
  .center {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    .title {
      align-items: center;
      display: flex;
      justify-content: center;
      font-size: 14px;
      height: 30px;
      border-radius: 6px;
      padding: 0 12px;
      min-width: 100px;
      background-color: var(--bg-color-gray);
      .icon {
        margin-right: 6px;
      }
    }
  }
}
</style>
