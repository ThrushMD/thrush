/*
 * @Author: cyy
 * @Date: 2025-02-10 14:29:42
 * @LastEditors: cyy
 * @LastEditTime: 2025-02-10 14:29:44
 * @Description: 
 */
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/about.vue')
  }
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
