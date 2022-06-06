<template>
  <ul>
    <TodoItem
      v-for="(todo, i) of todos"
      :todo="todo"
      :index="i"
      :key="todo.id"
      @remove-todo="removeTodo"
      @update-todo="updateTodo"
    />
  </ul>
</template>

<script setup>
import TodoItem from '@/components/views/TodoItem.vue';

import { useStore } from 'vuex'

const store = useStore()

const props = defineProps(['todos'])

const emits = defineEmits()

function removeTodo (id) {
  emits('remove-todo', id)
}
function updateTodo () {
  store.dispatch('updateTodo', props.todos)
}

</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>