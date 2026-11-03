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
        GLA
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
            <span class="text-xs font-semibold tracking-wide">{{ isDark ? 'CL' : 'OS' }}</span>
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
