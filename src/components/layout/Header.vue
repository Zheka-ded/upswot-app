<template>
  <header class="header">
    <div class="header__top-line"></div>
    <div class="header__content">
      <div class="container">
        <router-link to="#">
          <img src="@/assets/logo.svg" alt="Citi logo">
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup>

</script>

<style lang="scss">
.header {
  &__top-line {
    height: 53px;
    background: $color-brown;
  }

  &__content {
    background: $gradient-primary;
    padding: 15px 0;
  }
}
</style>
