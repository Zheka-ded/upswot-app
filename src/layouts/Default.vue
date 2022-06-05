<template>
  <div class="">Default</div>
  <img alt="Citi logo" src="@/assets/logo.svg" />
  <h1 class="h1 text-primary-1">!{{ store.state.global.uesr }}</h1>
</template>

<script setup>
import { useStore } from 'vuex'

const store = useStore()

console.log(store.state.global)

</script>

<style lang="scss">

</style>
