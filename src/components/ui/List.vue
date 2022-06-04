<template>
  <div class="c-list">
    <div
      v-for="item in list"
      :key="item.id"
      class="c-list__item"
    >
      <img :src="checkIcon" alt="Check icon" class="c-list__icon">
      <div class="c-list__content">
        <p class="c-list__title h5 font-medium">{{ item.title }}</p>
        <p class="c-list__text h6">{{ item.text }}</p>
      </div>
    </div>
  </div>
</template>


<script setup>
import checkIcon from '@/assets/icons/check.svg'

const props = defineProps({
  list: {
    type: Array,
    default: () => [],
  },
})
</script>

<style lang="scss">
.c-list {
  display: flex;
  flex-direction: column;

  &__item {
    & + & {
      margin-top: 15px;
    }

    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  &__icon {
    margin-right: 15px;
  }

  &__content {

  }

  &__title {
    //font-weight: 500;
    //font-size: 16px;
    //line-height: 156.69%;
    //color: $color-brown;

  }

  &__text {
    margin-top: 10px;
    //font-weight: 400;
    //font-size: 14px;
    //line-height: 156.69%;
    //color: $color-brown;
  }
}
</style>
