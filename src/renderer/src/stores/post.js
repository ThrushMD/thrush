/*
 * @Author: cyy
 * @Date: 2025-03-18 14:42:05
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-18 15:38:12
 * @Description: 
 */
import { defineStore } from 'pinia'
import { cloneDeep } from 'es-toolkit'
const defaultPost = {
  _id: '',
  title: '',
  content: '',
  description: '',
  created: '',
  updated: '',
  tags: [],
  status: '',
  category: '',
  banner: '',
  is_deleted: false
}
export const usePostStore = defineStore('post', {
  state: () => {
    return {
      currentFolder: {
        _id: '',
        title: ''
      },
      currentPost: cloneDeep(defaultPost),
    }
  },
  getters: {
    title() {
      return this.currentPost.title || '未命名'
    }
  },
  actions: {
    addPost() {
      if (!this._id) {
        console.log('先保存');
      }
      this.currentPost = cloneDeep(defaultPost)
    },
    setCurrentFolder(folder) {
      this.currentFolder = folder
    },
    editPostById(id) {
      console.log(id);
      this.edit({
        _id: id,
        title: '123',
        content: '345'
      })
    },
    edit(post) {
      this.currentPost = post
    }
  }
})
