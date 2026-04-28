/*
 * @Author: cyy
 * @Date: 2025-06-26 12:03:12
 * @LastEditors: cyy
 * @LastEditTime: 2025-06-26 12:24:43
 * @Description:
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url'

export default defineConfig({
  root: resolve('test/web'),
  plugins: [vue()]
})
