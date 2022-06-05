<template>
  <c-form @submit.prevent="formSubmit" class="todo-form">
    <div class="todo-form__content">
      <c-input class="todo-form__input" label="Todo" type="text" v-model="title" />
      <div class="todo-form__actions">
        <c-button @click="formSubmit">Save</c-button>
      </div>
    </div>
  </c-form>
</template>

<script setup>
import { ref } from 'vue'

const emits = defineEmits()

let title = ref('')

function formSubmit () {
  if (title.value.trim()) {
    const newTodo = {
      id: Date.now(),
      title: title.value,
    };
    emits('add-todo', newTodo);
    title.value = '';
  }
}

</script>

<style lang="scss">
.todo-form{
  &__content{
    display: flex;
    align-items: flex-end;
  }
  &__input{
    flex: 1;
  }
  &__actions{
    width: max-content;
  }
}
</style>