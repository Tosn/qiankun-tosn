<template>
  <div>
    <nav>
      <ul>
        <li v-for="item in microApps" @click="goto(item)" :key="item.name">{{item.name}}</li>
      </ul>
    </nav>
    <div id="subapp-viewport">
      <!-- 子应用容器 -->
    </div>
  </div>
</template>

<script>
import microApps from './regMicro.js'
export default {
  setup () {
    const goto = (item) => {
      history.pushState(null, item.activeRule, item.activeRule)
    }

    return {
      goto,
      microApps
    }
  }
}
</script>

<style lang="scss" scoped>

</style>