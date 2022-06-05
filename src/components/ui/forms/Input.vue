<template>
  <div
    class="c-input"
  >
    <label v-if="label" class="c-input__label h5 font-light">
      <span v-if="required" class="text-error">*</span>
      {{ label }}
    </label>

    <input
      :type="type"
      :name="name"
      :required="required"
      :disabled="disabled"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      @input="$emit('update:modelValue', $event.target.value)"
      class="c-input__input"
      :class="{'c-input__input--error': error}"
    >

    <span v-if="error" class="c-input__error h6 text-error font-light">
      <img :src="closeIcon" alt="Check icon" class="c-input__error-icon">
      {{ error }}
    </span>
  </div>
</template>

<script setup>
import closeIcon from '@/assets/icons/close.svg'

const props = defineProps({
  label: {
    type: String,
    default: () => '',
  },
  error: {
    type: String,
    default: () => '',
  },
  type: {
    type: String,
    default: () => "text"
  },
  name: {
    type: String,
    default: () => '',
  },
  placeholder: {
    type: String,
    default: () => '',
  },
  required: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  autocomplete: {
    type: Boolean,
  }
})
</script>

<style lang="scss">
.c-input{
  display: flex;
  flex-direction: column;
  position: relative;

  &__label{}

  &__input{
    height: 50px;
    border: 1px solid $color-gray-2;
    padding-left: 15px;
    padding-right: 15px;
    font-size: $font-size-5;
    color: $color-brown;
    font-weight: 400;
    outline: none;
    transition: 0.3s all ease;

    &:focus{
      border-color: $color-black;
      transition: 0.3s all ease;
    }

    &--error{
      border-color: $color-error;
      transition: 0.3s all ease;
    }
  }

  &__error{
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
  }

  &__error-icon{
    margin-right: 10px;
  }
}
</style>
