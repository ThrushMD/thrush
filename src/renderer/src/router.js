/*
 * @Author: cyy
 * @Date: 2025-02-10 14:29:42
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-10 17:45:35
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/Editor.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/Setting.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
