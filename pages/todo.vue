<template>
  <div class="container">
    <div class="w-1/2 mx-auto text-center">
      <h1 class="font-semibold text-5xl text-white mb-5">Vue ToDo List</h1>
      <div class="bg-white rounded-lg shadow-lg">
        <div class="bg-gray-200 p-2 rounded-t-xs flex justify-end space-x-2">
          <FilterButton label="Tasks" :count="countTodos" @click="filterAll" />
          <FilterButton v-show="countDone > 0" label="Tasks Done" :count="countDone" @click="filterDone" />
          <DeleteButton v-show="countDone > 0" label="Tasks Done" :count="1" @click="removeDone" />
          <DeleteButton label="Tasks" @click="removeAll" />
        </div>

        <div class="p-4">
          <TodoLists :todoList="todos" v-if="countTodos > 0" @setDone="setDone" @removeItem="removeItem" />
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
import { ref, computed, onMounted } from 'vue';
import { useTodosStore } from "~/store/todos"

const store = useTodosStore(); //initialize the store
const todos = ref({})

const countTodos = computed(() => {
  return store.todos.length;
})

const countDone = computed(() => {
  const filterDone = store.todos.filter((todo) => todo.status.done === true)
  return filterDone.length;
});

onMounted(() => loadTodos())

function loadTodos() {
  todos.value = store.todos
}

function filterAll() {
  todos.value = store.todos;
}

function filterDone() {
  todos.value = store.todos.filter((todo) => todo.status.done === true)
}

function removeDone() {
  store.todos = store.todos.filter((todo) => todo.status.done !== true)
  loadTodos()
}

function removeItem(task) {
  const index = store.todos.findIndex((todo) => todo.id === task.id)
  store.todos.splice(index, 1)
  loadTodos()
}

function removeAll() {
  console.log("test");
  store.todos = []
  loadTodos()
}

function submit(value) {
  store.ADD_TODO(value)
}

function setDone(value) {
  store.UPDATE_TODO(value)
}
</script>

<style></style>
