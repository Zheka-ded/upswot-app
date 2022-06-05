<template>
  <form
    class="c-form"
    v-bind="{ ...$props, ...$attrs }"
  >
    <template v-for="(_, slot) in $slots">
      <slot :name="slot" />
    </template>
  </form>
</template>

<script setup>
</script>

<style lang="scss">
.c-form {
  display: flex;
  flex-direction: column;
}
</style>
