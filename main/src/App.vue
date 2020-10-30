<template>
  <div>
    <nav>
      <ul>
        <li v-for="item in microApps" @click="goto(item)" :class="{current: item.activeRule === currentPath}" :key="item.name">{{item.name}}</li>
      </ul>
      <div>
        <button v-if="!userName" @click="doLogin">主应用登录</button>
        <span v-else>当前用户: {{userName}}</span>
      </div>
    </nav>
    <div id="subapp-viewport">
      <!-- 子应用容器 -->
    </div>
  </div>
</template>

<script>
import microApps from './regMicro.js'
import store from './store'
import { ref, reactive, onUnmounted, computed  } from 'vue'
export default {
  setup () {
    let currentPath = ref('')
    const goto = (item) => {
      history.pushState(null, item.activeRule, item.activeRule)
    }

    const bindCurrent = () => {
      const path = window.location.pathname
      // console.log(path)
      // if (microApps.some(item => path.indexOf(item.activeRule) >= 0)) {
      //   currentPath.value = path
      // }
      // ! vue3 路由后面自带/
      const currentMicro = microApps.find(item => path.indexOf(item.activeRule) >= 0)
      if (currentMicro) {
        currentPath.value = currentMicro.activeRule
      }
    }
    
    const listenerPath = () => {
      window.addEventListener('pushState', bindCurrent)
      window.addEventListener('popstate', bindCurrent)
    }

    const unListenerPath = () => {
      window.removeEventListener('pushState', bindCurrent)
      window.removeEventListener('popState', bindCurrent)
    }
    
    const doLogin = () => {
      store.setGlobalState({
        user: {
          name: '主应用'
        }
      })
    }

    const userName = computed(() => {
      return store.getGlobalState('user') && store.getGlobalState('user').name
    })

    // 添加默认高亮 及 监听函数
    bindCurrent()
    listenerPath()

    // 销毁监听
    onUnmounted(() => {
      unListenerPath()
    })
    
    return {
      goto,
      currentPath,
      userName,
      doLogin,
      microApps
    }
  }
}
</script>

<style lang="scss" scoped>

</style>