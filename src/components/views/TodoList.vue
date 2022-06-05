<template>
  <ul>
    <TodoItem
      v-for="(todo, i) of todos"
      :todo="todo"
      :index="i"
      :key="todo.id"
      @remove-todo="removeTodo"
    />
  </ul>
</template>

<script setup>
import TodoItem from '@/components/views/TodoItem.vue';

const props = defineProps(['todos'])
const emits = defineEmits()

function removeTodo (id) {
  emits('remove-todo', id)
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>