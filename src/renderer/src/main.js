import './assets/css/main.less'
import 'virtual:svg-icons-register'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import SvgIcon from './components/SvgIcon.vue'
import App from './App.vue'

const app = createApp(App)
app.use(router).use(createPinia())
app.component('SvgIcon', SvgIcon)
app.mount('#app')
