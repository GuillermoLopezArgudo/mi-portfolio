<template>
  <article
    class="group relative flex flex-col border border-[var(--line)] bg-[var(--bg)] p-6 sm:p-8
           transition-[border-color,transform] duration-300 hover:border-[var(--signal)] hover:-translate-y-0.5"
  >
    <h3 class="display text-xl sm:text-2xl font-bold text-[var(--ink)] mb-3">
      {{ title }}
    </h3>
    <p class="text-sm sm:text-base text-[var(--mute)] leading-relaxed mb-5 flex-1">
      {{ description }}
    </p>
    <ul class="flex flex-wrap gap-x-3 gap-y-1 list-none mb-6 text-xs text-[var(--mute)]">
      <li
        v-for="tech in technologies"
        :key="tech"
        class="after:content-['·'] after:ml-3 last:after:content-none after:opacity-40"
      >
        {{ tech }}
      </li>
    </ul>
    <div class="flex flex-wrap gap-3 text-sm font-semibold">
      <a
        v-if="github"
        :href="github"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center min-h-10 px-4 border border-[var(--ink)] text-[var(--ink)]
               hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
      >
        Código
      </a>
      <a
        v-if="demo"
        :href="demo"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center min-h-10 px-4 bg-[var(--signal)] text-white
               hover:bg-[var(--signal-bright)] transition-colors"
      >
        Demo
      </a>
    </div>
  </article>
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
