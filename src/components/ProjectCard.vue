<template>
  <div
    class="bg-white dark:bg-gray-800 shadow rounded-lg p-6 text-left 
           hover:shadow-lg"
  >
    <h3 class="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
      {{ title }}
    </h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">
      {{ description }}
    </p>
    <div class="text-sm text-gray-500 dark:text-gray-400 mb-4">
      <span
        v-for="tech in technologies"
        :key="tech"
        class="inline-block bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 mr-1 mb-1"
      >
        {{ tech }}
      </span>
    </div>
    <div class="flex space-x-4 text-sm">
      <a
        v-if="github"
        :href="github"
        target="_blank"
        class="text-blue-600 dark:text-blue-400 hover:underline"
      >
        Código
      </a>
      <a
        v-if="demo"
        :href="demo"
        target="_blank"
        class="text-green-600 dark:text-green-400 hover:underline"
      >
        Demo
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  technologies: Array,
  github: String,
  demo: String,
})
</script>
