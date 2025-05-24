<template>
  <header
    class="fixed top-0 left-0 w-full z-50 h-16 flex items-center
           bg-white dark:bg-gray-900 shadow-md"
  >
    <nav class="container mx-auto px-4 flex justify-between items-center h-full">
      <h1 class="text-2xl font-bold text-blue-600 dark:text-blue-400">Guillermo López Argudo</h1>
      <ul class="flex space-x-6 list-none items-center">
        <li>
          <a
            href="#home"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 "
            >Inicio</a
          >
        </li>
        <li>
          <a
            href="#about"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 "
            >Sobre mí</a
          >
        </li>
        <li>
          <a
            href="#projects"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 "
            >Proyectos</a
          >
        </li>
        <li>
          <a
            href="#contact"
            class="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 "
            >Contacto</a
          >
        </li>
        <li>
          <a
            href="/CV-GuillermoLópezArgudo.pdf"
            download
            class="bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600  text-sm font-medium"
            >Descargar CV</a
          >
        </li>
        <li>
          <button
            @click="toggleDarkMode"
            class="ml-4 flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded px-3 py-1 hover:bg-gray-300 dark:hover:bg-gray-600"
            :aria-label="isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'"
            title="Toggle Dark Mode"
          >
            <svg
              v-if="!isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1m0 16v1m8.66-9h-1M4.34 12h-1m15.07 5.66l-.71-.71M6.34 6.34l-.71-.71m12.02 12.02l-.71-.71M6.34 17.66l-.71-.71M12 7a5 5 0 000 10 5 5 0 000-10z"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="0"
            >
              <path
                d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDark = ref(false)

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  if (isDark.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>
