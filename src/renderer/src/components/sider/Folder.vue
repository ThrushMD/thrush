<!--
 * @Author: cyy
 * @Date: 2025-03-14 14:29:27
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-20 12:22:58
 * @Description: 
-->
<script setup>
import { ref } from 'vue'

const emit = defineEmits(['select'])
const expandedKeys = ref(['1'])
const selectedKeys = ref(['1-1'])

const folderList = [
  {
    title: '文件夹',
    key: '1',
    type: 'folder',
    children: [
      {
        type: 'file',
        title: 'nav 1-1',
        key: '1-1'
      },
      {
        type: 'file',
        title: 'nav 1-2',
        key: '1-2'
      }
    ]
  },
  {
    type: 'folder',
    title: 'nav 2',
    children: [
      {
        type: 'file',
        title: 'nav 2-1',
        key: '2-1'
      }
    ]
  },
  {
    type: 'folder',
    title: 'nav 3',
    children: [
      {
        type: 'file',
        title: 'nav 3-1',
        key: '3-1'
      }
    ]
  }
]
const onDragEnter = (info) => {
  console.log(info)
}
const onDrop = (info) => {
  console.log('onDrop', info)
}
const addFolder = () => {
  console.log('add folder')
}
const onSelect = (info, e) => {
  emit('select', e.node)
}
const clear = () => {
  selectedKeys.value = []
}
defineExpose({
  clear
})
</script>
<template lang="pug">
.folder
  .header
    label 文件夹
    a-tooltip(title="新建文件夹")
      a-button(type="text" @click="addFolder")
        SvgIcon(name="add-folder" size="16")
  .empty(v-if="!folderList.length")
    SvgIcon(name="empty" size="200")
  a-directory-tree(
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    draggable
    :tree-data="folderList"
    @dragenter="onDragEnter"
    @drop="onDrop"
    @select="onSelect"
  )
    template(#switcherIcon="{switcherCls}")
      span(:class="switcherCls")
        SvgIcon(name="down" size="16" )
</template>
<style lang="less" scoped>
.folder {
  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 36px;
    label {
      font-size: 12px;
      color: rgba(0, 0, 0, 0.5);
    }
    button {
      padding: 4px;
      width: 26px;
      height: 26px;
      text-align: center;
    }
  }
  .empty {
    text-align: center;
    svg {
      opacity: 0.6;
    }
  }
  :deep(.ant-tree) {
    max-height: calc(~'100vh - 345px');
    overflow: auto;
    .ant-tree-treenode {
      &::before {
        border-radius: 6px;
      }
      &.ant-tree-treenode-selected {
        &::before {
          background-color: rgba(0, 0, 0, 0.05);
        }
        .ant-tree-switcher,
        .ant-tree-node-content-wrapper.ant-tree-node-selected {
          color: var(--text-color);
        }
      }
    }
    .ant-tree-switcher {
      margin-right: -10px;
      height: 32px;
      width: 16px;
      &.ant-tree-switcher-noop {
        display: none;
      }
      .ant-tree-switcher-icon {
        height: 16px;
        margin-top: 4px;
      }
    }
  }
}
</style>
