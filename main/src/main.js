import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import './regMicro'
import './styles/index.scss'
createApp(App).use(store).mount('#app')
