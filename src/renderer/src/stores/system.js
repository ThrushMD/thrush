/*
 * @Author: cyy
 * @Date: 2025-03-11 14:54:53
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-18 12:43:05
 * @Description:
 */
import { defineStore } from 'pinia'

export const useSystemStore = defineStore('system', {
  state: () => {
    return {
      openSideBar: true,
      theme: 'auto'
    }
  },
  getters: {},
  actions: {
    toggleSideBar() {
      this.openSideBar = !this.openSideBar
    }
  }
})
