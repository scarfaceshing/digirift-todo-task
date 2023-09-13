<template>
  <div class="relative inline-block">
    <button
      class="bg-blue-500 hover:bg-blue-600 text-white text-xs font-bold py-2 px-4 pr-9 rounded-full"
    >
      {{ label }}
    </button>
    <div
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border-solid border-2 border-sky-600 rounded-full w-8 h-8 flex items-center justify-center"
    >
      <span class="text-blue-500 font-bold text-xs">{{ count }}</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["label", "count"]);
</script>

<style></style>
