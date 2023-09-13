<template>
  <div class="container">
    <div class="w-1/2 mx-auto text-center">
      <h1 class="font-semibold text-5xl text-white mb-5">Vue ToDo List</h1>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="bg-gray-200 p-2 rounded-t-xs flex justify-end space-x-2">
          <FilterButton label="Tasks" :count="1" />
          <FilterButton label="Tasks Done" :count="1" />
          <DeleteButton label="Tasks Done" :count="1" />
          <DeleteButton label="Tasks" :count="1" />
        </div>

        <div class="p-4">
          <TodoLists :todoList="todoList" v-if="todoList > 0" />
          <div v-else>No todo</div>
        </div>
        <div class="bg-gray-200 p-2 rounded-b-xs">
          <TodoInput @submit="submit" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodosStore } from "~/store/todos";

const todosStore = useTodosStore();
const { stateTodosStore } = storeToRefs(todosStore);
const { loadTodos } = todosStore;

const todoList = ref({});

function submit(task) {
  loadTodos(task);
}

async function loadTodoLists() {
  todoList.value = stateTodosStore.value;
}

onMounted(() => {
  loadTodoLists();
});
</script>

<style></style>
