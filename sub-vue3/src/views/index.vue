<template>
  <div>
    <div>
      <button @click="changeUser">切换vue3用户</button>
    </div>
    {{message}}
    <banner-comp>这个是PAGE3的banner-comp</banner-comp>
  </div>
</template>

<script lang="ts">
import BannerComp from 'common/components/BannerComp'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  components: {
    BannerComp
  },
  methods: {
    changeUser () {
      this.$setGlobalState({
        user: {
          name: '子应用vue3'
        }
      })
    }
  },
  setup () {
    const message = ref('This is a vue3 Page')

    return {
      message
    }
  }
})
</script>

<style scoped>

</style>