<template>
  <header
    class="fixed top-0 inset-x-0 z-50 border-b border-[var(--line)] backdrop-blur-md
           bg-[color-mix(in_srgb,var(--bg)_82%,transparent)]"
  >
    <nav
      class="section-pad mx-auto max-w-[1400px] h-16 flex items-center justify-between gap-4"
    >
      <a
        href="#home"
        class="display text-sm sm:text-base font-bold tracking-tight text-[var(--ink)] hover:text-[var(--signal)] transition-colors"
      >
        <span class="hidden sm:inline">Guillermo López Argudo</span>
        <span class="sm:hidden">Guillermo</span>
      </a>

      <button
        type="button"
        class="sm:hidden p-2 -mr-2 text-[var(--ink)]"
        aria-label="Abrir menú"
        @click="menuOpen = !menuOpen"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M4 7h16M4 12h16M4 17h10" />
        </svg>
      </button>

      <ul
        :class="[
          'list-none items-center gap-1 sm:gap-2',
          menuOpen
            ? 'absolute top-16 left-0 right-0 flex flex-col py-4 px-5 border-b border-[var(--line)] bg-[var(--bg)] shadow-lift'
            : 'hidden sm:flex',
        ]"
      >
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block px-3 py-2 text-sm text-[var(--mute)] hover:text-[var(--ink)] transition-colors"
            @click="menuOpen = false"
          >
            {{ link.label }}
          </a>
        </li>
        <li class="sm:ml-2 flex items-center gap-2 px-3 sm:px-0 pt-2 sm:pt-0">
          <a
            href="/CV-GuillermoLópezArgudo.pdf"
            download
            class="inline-flex items-center justify-center min-h-10 px-4 text-sm font-semibold
                   bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--signal)] hover:text-white transition-colors"
          >
            CV
          </a>
          <button
            type="button"
            class="inline-flex items-center justify-center min-h-10 min-w-10 border border-[var(--line)]
                   text-[var(--mute)] hover:text-[var(--ink)] hover:border-[var(--ink)] transition-colors"
            :aria-label="isDark ? 'Modo claro' : 'Modo oscuro'"
            @click="toggleDarkMode"
          >
            <!-- Sol (activar oscuro) -->
            <svg
              v-if="!isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.75"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v1.5M12 19.5V21M4.5 12H3m18 0h-1.5M6.34 6.34l-1.06-1.06m13.44 13.44-1.06-1.06M17.66 6.34l1.06-1.06M6.34 17.66l-1.06 1.06M12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"
              />
            </svg>
            <!-- Luna creciente (activar claro) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.75"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
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
const menuOpen = ref(false)

const links = [
  { href: '#about', label: 'Sobre mí' },
  { href: '#projects', label: 'Proyectos' },
  { href: '#contact', label: 'Contacto' },
]

onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})

function toggleDarkMode() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
}
</script>
