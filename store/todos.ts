import { defineStore } from "pinia";

export const useTodosStore = defineStore("todos", {
  state: () => {
    return { 
      todos: []
     };
  },
  actions: {
    ADD_TODO(value: string) {
      const id = this.todos.length + 1;
      this.todos.push({id: id, name: value, status: {done: false}})
    },
    UPDATE_TODO(value: any) {
      const index = this.todos.findIndex((todo) => todo.id === value.id)
      const currentStatus = this.todos[index].status.done ;
      this.todos[index].status.done = !currentStatus;
    }
  },
  persist: true,
});
