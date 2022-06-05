<template>
  <li class="li">
    <span>
      {{ index + 1 }} {{ todo.title }}
    </span>
    <div class="btn-group">
      <button
        class="ed"
        @click="$emit('edit-todo', todo)"
      >
        Edit
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

<style lang="scss">
.li {
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  margin: 1rem 0;
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