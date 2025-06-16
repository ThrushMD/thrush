/*
 * @Author: cyy
 * @Date: 2025-02-10 14:29:42
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-18 14:39:23
 * @Description:
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import menus from './menus'

const menusRouters = menus.map(item => {
  const path = item.path || `/${item.name}`
  const pathName = item.name.charAt(0).toUpperCase() + item.name.slice(1)
  const comp = () => import(`@/views/${pathName}.vue`)
  return {
    path,
    name: item.name,
    component: comp,
    meta: {
      title: item.title
    }
  }
})
const routes = [
  ...menusRouters,
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/editor',
    name: 'editor',
    component: () => import('@/views/Editor.vue')
  },
  {
    path: '/trash',
    name: 'trash',
    component: () => import('@/views/Trash.vue'),
    meta: {
      title: '回收站'
    }
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
