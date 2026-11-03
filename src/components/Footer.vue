<template>
  <footer class="border-t border-[var(--line)] section-pad py-6">
    <div
      class="mx-auto max-w-[1400px] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2
             text-xs sm:text-sm text-[var(--mute)]"
    >
      <p class="display font-semibold text-[var(--ink)]">Guillermo López Argudo</p>
      <p>© {{ year }} · Full Stack Developer</p>
    </div>
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
