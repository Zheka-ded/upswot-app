<template>
  <div class="c-form-item">
    <slot />
  </div>
</template>

<script setup>

</script>

<style lang="scss">
.c-form-item {
  & + & {
    margin-top: 40px;
  }
}
</style>
