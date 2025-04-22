<!--
 * @Author: cyy
 * @Date: 2025-03-11 15:49:49
 * @LastEditors: cyy
 * @LastEditTime: 2025-04-22 18:03:48
 * @Description: 
-->
<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useSystemStore } from '@/stores/system'
import { usePostStore } from '@/stores/post'
import Folder from './Folder.vue'
import menus from '@/router/menus'
const router = useRouter()
const systemStore = useSystemStore()
const postStore = usePostStore()
const folderRef = ref(null)
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
const selectedKeys = ref(['home'])

const selectFile = (node) => {
  selectedKeys.value = []
  console.log('selectFile', node)
  if (node.type === 'file') {
    postStore.editPostById(node.key)
    router.push({
      name: 'editor',
      query: {
        id: node.key
      }
    })
  } else {
    postStore.setCurrentFolder({
      _id: node.key,
      title: node.title
    })
    console.log('选择目录');
  }
}
const selectMenu = (info) => {
  folderRef.value.clear()
  router.push({
    name: info.key
  })
}
const goTrash = () => {
  router.push({
    name: 'trash'
  })
}
const addFile = () => {
  postStore.addPost()
  router.push({
    name: 'editor'
  })
}
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
        a-button.add(type="text" @click="addFile")
          SvgIcon(name="add" size="20")
    a-menu(v-model:selectedKeys="selectedKeys" mode='inline' :inlineIndent="5" @select="selectMenu")
      a-menu-item(v-for="item in menus" :key="item.name")
        SvgIcon(:name="item.name")
        span {{ item.title }}
  Folder(ref="folderRef" @select="selectFile")
  .footer
    a-button.trash(type="text" block @click="goTrash")
      SvgIcon(name="trash")
      span 回收站
</template>
<style lang="less" scoped>
.ant-layout-sider {
  height: calc(~'100vh - 56px');
  background: transparent;
  margin-left: -260px;
  position: relative;
  &.open {
    margin-left: 20px;
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
    border-bottom: 1px solid var(--border-color);
  }
  :deep(.ant-menu) {
    background: transparent;
    margin-top: 10px;
    border: 0;
    .ant-menu-item {
      &:active {
        background-color: var(--bg-color-gray);
      }
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
  .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    border-top: 1px solid var(--border-color);
    padding: 5px 0;
    button {
      padding: 4px;
      display: flex;
      align-items: center;
      gap: 6px;
    }
  }
}
</style>
