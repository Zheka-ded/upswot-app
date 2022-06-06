<template>
  <li class="li">
    <span>
      {{ index + 1 }}
      <input
        class="update-input"
        v-if="isShownInput"
        type="text"
        @input="$emit('update:modelValue', $event.target.value)"
        v-model="todo.title"
        @keydown.enter="onUpdateTodoItem(todo)"
      />
      <span v-else>
        {{ todo.title }}
      </span>
    </span>
    <div class="btn-group">
      <button
        v-if="!isShownInput"
        class="ed"
        @click="onShowInput"
      >
        Edit
      </button>
      <button
        v-else
        class="ed"
        @click="onUpdateTodoItem(todo)"
      >
        Save
      </button>
      <button
        class="rm"
        @click="$emit('remove-todo', todo.id)"
      >
        Delete
      </button>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'
const emits = defineEmits()
const props = defineProps({
  todo: {
    type: Object,
    default: () => {},
    required: true,
  },
  index: {
    type: Number,
    default: () => 1,
  },
})

const isShownInput = ref(false)

function onShowInput () {
  isShownInput.value = true
}

function onUpdateTodoItem (todo) {
  isShownInput.value = false
  emits('update-todo', todo)
}

</script>

<style lang="scss">
.li {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 16px 0 32px;
  margin: 16px 0;
}

.update-input{
  outline: none;
  border-left: 2px solid $color-primary-1;
  border-bottom: 2px solid $color-primary-1;
  border-top: none;
  border-right: none;
  width: min-content;
  font-size: $font-size-6;
  color: $color-brown;
}

.btn-group {
  display: flex;
}

.ed {
  background: $color-primary-1;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  margin-right: 5px;
}

.rm {
  background: $color-error;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
}
</style>