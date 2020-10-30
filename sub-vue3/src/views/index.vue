<template>
  <div>
    {{message}}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
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