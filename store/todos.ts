import { defineStore } from "pinia";

export const useTodosStore = defineStore("todosStore", () => {
  const stateTodosStore = ref({});

  function loadTodos(task: string) {
    console.log(task);
    // stateTodosStore.value = todos;
  }

  return { loadTodos, stateTodosStore };
});
