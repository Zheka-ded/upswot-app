<template>
  <li>
    <span>
      {{ index + 1 }} {{ todo.title }}
    </span>
    <button
      class="rm"
      @click="$emit('remove-todo', todo.id)"
    >&times;
    </button>
  </li>
</template>

<script setup>
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
</script>

<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: orangered;
  color: #fff;
  border-radius: 5px;
  font-weight: bold;
  width: 23.8px;
  height: 21px;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>