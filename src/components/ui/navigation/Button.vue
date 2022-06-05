<template>
  <button class="c-button" type="button">
    <slot/>
  </button>
</template>

<script setup>

</script>

<style lang="scss">
.c-button{
  border: 2px solid $color-primary-1;
  background: $color-primary-1;
  color: $color-white;
  font-size: $font-size-3;
  transition: 0.3s all ease;
  width: 100%;
  padding: 12px;

  &:hover{
    background: $color-white;
    color: $color-primary-1;
    transition: 0.3s all ease;
  }
}
</style>
