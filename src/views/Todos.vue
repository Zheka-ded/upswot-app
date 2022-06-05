<template>
  <div style="padding: 0 50px">
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos='todos' @remove-todo="removeTodo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TodoList from '@/components/views/TodoList.vue';
import AddTodo from '@/components/views/AddTodo.vue';

let todos = ref([
  { id: 1, title: 'Test' },
])

function removeTodo (id) {
  todos.value = todos.value.filter(t => t.id !== id)
}

function addTodo (todo) {
  todos.value.push(todo)
}

</script>