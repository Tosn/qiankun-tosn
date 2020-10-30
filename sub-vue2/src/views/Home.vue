<template>
  <div class="home">
    <div v-if="$isQianKun">
      <button @click="changeuser">切换vue2用户</button>
    </div>
    <div v-if="!$isQianKun">
      当前独立运行项目
    </div>
    <p>这个是Page2</p>
    <banner-comp>
      <h3>这是vue2的banner</h3>
    </banner-comp>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerComp from 'common/components/BannerComp'
export default {
  name: 'Home',
  components: {
    BannerComp
  },
  methods: {
    changeuser () {
      this.$setGlobalState({
        user: {
          name: '子用户-vue2'
        }
      })
    }
  }
}
</script>
