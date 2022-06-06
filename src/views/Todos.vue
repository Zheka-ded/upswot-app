<template>
  <div style="padding: 0 50px 30px">
    <AddTodo @add-todo="addTodo" />
    <TodoList :todos='todos' @remove-todo="removeTodo" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import TodoList from '@/components/views/TodoList.vue';
import AddTodo from '@/components/views/AddTodo.vue';

const store = useStore()

const todos = ref([
  { id: 1, title: 'Test' },
])

function removeTodo (id) {
  todos.value = todos.value.filter(t => t.id !== id)
  store.dispatch('updateTodo', todos)
}

function addTodo (todo) {
  todos.value.push(todo)
  store.dispatch('updateTodo', todos)
}

</script>