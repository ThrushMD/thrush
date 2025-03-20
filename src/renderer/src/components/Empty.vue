<!--
 * @Author: cyy
 * @Date: 2025-03-20 12:25:07
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-20 12:41:37
 * @Description: 
-->
<script setup>
defineProps({
  title: {
    type: String,
    default: '暂无数据'
  }
})
</script>
<template lang="pug">
.empty
  div
    SvgIcon(name="bg")
    .tip {{title}}
</template>
<style lang="less" scoped>
.empty {
  width: 100%;
  height: 100%;
  text-align: center;
  display: flex;
  &>div {
    margin: auto;
    svg{
      width: initial!important;
      height: 50vh!important;
    }
    .tip {
      font-size: 14px;
      color: #999;
    }
  }
}
</style>