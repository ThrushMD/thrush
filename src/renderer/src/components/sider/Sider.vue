<!--
 * @Author: cyy
 * @Date: 2025-03-11 15:49:49
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-14 17:59:15
 * @Description: 
-->
<script setup>
import { ref, watch } from 'vue'
import { useSystemStore } from '@/stores/system'
import Folder from './Folder.vue'
const systemStore = useSystemStore()

const open = ref(false)
watch(
  () => systemStore.openSideBar,
  (v) => {
    open.value = v
  },
  {
    immediate: true
  }
)
const selectedKeys = ref(['1'])
const menus = [
  {
    title: '主页',
    key: 'home',
    icon: 'home'
  },
  {
    title: '收藏',
    key: 'favorite',
    icon: 'favorite'
  },
  {
    title: '模版',
    key: 'tmp',
    icon: 'tmp'
  },
  {
    title: '发布',
    key: 'publish',
    icon: 'publish'
  }
]
</script>
<template lang="pug">
a-layout-sider(
  :class="{open}"
  :trigger="null"
  :width="260"
  :collapsedWidth="0"
)
  .header
    .item
      a-button.search(type="text")
        .left
          SvgIcon(name="search")
          span 搜索
        span.shortcut-key ⌘ J
      a-tooltip
        template(#title)
          span 新建文件
          span.shortcut-key ⌘ N
        a-button.add(type="text")
          SvgIcon(name="add" size="20")
    a-menu(v-model:selectedKeys="selectedKeys" mode='inline' :inlineIndent="5")
      a-menu-item(v-for="item in menus" :key="item.key")
        SvgIcon(:name="item.key")
        span {{ item.title }}
  Folder
</template>
<style lang="less" scoped>
.ant-layout-sider {
  height: calc(~'100vh - 56px');
  background: transparent;
  margin-left: -280px;
  position: relative;
  &.open {
    margin-left: 0;
  }
  .header {
    margin-bottom: 5px;
    padding-bottom: 10px;
    .item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 4px 10px;
      background-color: var(--bg-color-gray);
      width: 100%;
      color: var(--text-color-gray);
      svg {
        margin-right: 6px;
        vertical-align: -2px;
      }
      .shortcut-key {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
    .add {
      width: 26px;
      height: 26px;
      padding: 2px;
      // margin-right: 10px;
    }
    border-bottom: 1px solid #cccccc5e;
  }
  :deep(.ant-menu) {
    background: transparent;
    margin-top: 10px;
    border: 0;
    .ant-menu-item {
      .ant-menu-title-content {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      &.ant-menu-item-selected {
        background-color: var(--bg-color-gray);
        color: var(--text-color);
      }
    }
  }
}
</style>
