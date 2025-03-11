/*
 * @Author: cyy
 * @Date: 2025-03-10 17:40:20
 * @LastEditors: cyy
 * @LastEditTime: 2025-03-10 17:40:22
 * @Description: 
 */
export const ipcHandle = () => window.electron.ipcRenderer.send('ping')