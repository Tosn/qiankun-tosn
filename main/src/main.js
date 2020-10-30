import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './regMicro'

createApp(App).use(store).mount('#app')
