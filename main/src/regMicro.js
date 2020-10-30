// 注册及导出微服务
import { registerMicroApps, initGlobalState, start, setDefaultMountApp } from 'qiankun'

const microApps = [
  {
    name: 'sub-vue2',
    entry: process.env.VUE_APP_SUB_VUE2,
    activeRule: '/micro/sub-vue2'
  },
  {
    name: 'sub-vue3',
    entry: process.env.VUE_APP_SUB_VUE3,
    activeRule: '/micro/sub-vue3'
  }
]

const apps = microApps.map(item => {
  return {
    ...item,
    container: '#subapp-viewport', // 子应用挂载的div
    props: {
      routerBase: item.activeRule // 下发基础路由
    }
  }
})
console.log(apps)
registerMicroApps(apps)
const { onGlobalStateChange, setGlobalState } = initGlobalState({
  user: 'qiankun',
});
// value 当前 prev 之前的值
onGlobalStateChange((value, prev) => {
  console.log('[onGlobalStateChange - master]:', value, prev)
})

setGlobalState({
  token: ''
})

setDefaultMountApp('/micro/sub-vue2')
start()

export default apps