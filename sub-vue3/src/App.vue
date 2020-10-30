<template>
  <div id="nav">
    <a href="javascript:" @click="toVue2">去vue2</a>
  </div>
  <router-view/>
</template>
<script>
export default {
  methods: {
    toVue2 () {
      history.pushState(null, 'sub-vue2', '/micro/sub-vue2')
    } 
  }
}
</script>

<style lang="scss">

</style>
