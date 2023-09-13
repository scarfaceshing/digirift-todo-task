<template>
  <div class="relative w-full">
    <form @submit.prevent="handleSubmit">
      <input
        type="text"
        class="border border-blue-500 rounded-full pl-4 pr-16 py-2 w-full bg-white"
        placeholder="New task"
        v-model="task"
      />
      <button
        type="button"
        @click="handleSubmit"
        class="absolute right-0 top-0 bottom-0 rounded-full bg-blue-500 text-white px-3 mr-1 flex my-1 items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="5"
          stroke="currentColor"
          class="w-3 h-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";

const task = ref("");
const emit = defineEmits(["submit"]);

function handleSubmit() {
  emit("submit", task.value);
}
</script>

<style></style>
