import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import './styles/index.scss'
import './public-path'

let router = null
let instance = null

function render (props = {}) {
  const { container, routerBase } = props
  router = createRouter({
    history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? routerBase : process.env.BASE_URL),
    routes
  })
  instance = createApp(App)
  instance.use(router)
  instance.use(store)
  instance.mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap () {
  console.log('%c ', 'color: green;', 'vue3.0 app bootstraped')
}

// setGlobalState 按一级属性设置全局状态，微应用中只能修改已存在的一级属性

function storeTest (props) {
  // 全局监听修改
  props.onGlobalStateChange &&
    props.onGlobalStateChange(
      (value, prev) => {
        // store.commit('SET_STATE', {
        //   key: 'app',
        //   value
        // })
        console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev)
      },
      true
    )
  // props.setGlobalState &&
  //   props.setGlobalState({
  //     user: {
  //       name: props.name
  //     }
  //   })
}

export async function mount (props) {
  storeTest(props)
  render(props)
  instance.config.globalProperties.$onGlobalStateChange = props.onGlobalStateChange
  instance.config.globalProperties.$setGlobalState = props.setGlobalState
}

export async function unmount () {
  instance.unmount()
  instance._container.innerHTML = ''
  instance = null
  router = null
}
