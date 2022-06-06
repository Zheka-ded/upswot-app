<template>
  <div class="layout">
    <div class="layout__content container">
      <img class="layout__logo" src="@/assets/logo.svg" alt="Citi logo" />
      <div class="todo">
        <h1 class="todo__title h1 font-bold text-brown">Thank you {{ store.state.global.user.name }} !</h1>
        <Todos />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import Todos from '@/views/Todos.vue'

const store = useStore()

</script>

<style lang="scss">
.layout {
  background: $gradient-primary;
  min-height: 800px;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 35px;
    position: relative;
  }

  &__logo {
    width: 130px;
  }
}

.todo {
  position: absolute;
  top: 180px;
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: 660px;

  background: $color-white;
  box-shadow: $box-shadow;

  &__title {
    text-align: center;
    margin: 30px 0;
  }

  &__content {

  }
}

@media (min-width: $md) {

  .layout {
      padding-top: 65px;

    &__logo {
      width: 186px;
    }
  }

  .todo {
    top: 250px;
    width: 100%;
  }
}
</style>
