<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home2</router-link> |
      <router-link to="/about">About2</router-link>
      <a href="javascript:" @click="toVue3">去vue3</a>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    toVue3 () {
      history.pushState(null, 'sub-vue3', '/sub-vue3')
    }
  }
}
</script>
<style lang="scss">

</style>
