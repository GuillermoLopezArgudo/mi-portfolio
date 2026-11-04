<template>
  <section
    id="projects"
    class="relative section-pad py-20 sm:py-28 border-t border-[var(--line)] bg-[var(--bg-elevated)]"
  >
    <div class="mx-auto max-w-[1400px]">
      <div class="max-w-2xl mb-12 sm:mb-14">
        <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--signal)] mb-3">
          Proyectos
        </p>
        <h2 class="display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] text-balance">
          Trabajo que puedes abrir y probar.
        </h2>
      </div>

      <div class="grid gap-5 sm:gap-6 md:grid-cols-2">
        <ProjectCard
          v-for="project in projects"
          :key="project.title"
          :title="project.title"
          :description="project.description"
          :technologies="project.technologies"
          :github="project.github"
          :demo="project.demo"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'SaboresEspaña',
    description:
      'Recetario fullstack con autenticación JWT. Ahora en Vercel + Render (PostgreSQL en Neon); en EDF se desplegó en Azure con Docker.',
    technologies: ['Vue 3', 'Tailwind', 'Flask', 'PostgreSQL', 'JWT', 'Vercel', 'Render'],
    github: 'https://github.com/GuillermoLopezArgudo/SaboresEspa-a',
    demo: 'https://sabores-espana-one.vercel.app',
  },
  {
    title: 'Siete',
    description:
      'Proyecto propio de gestión para clubes de balonmano: plantilla, partidos en directo, convocatoria, analítica, entrenamientos, cuotas y roles.',
    technologies: ['React', 'Vite', 'FastAPI', 'PostgreSQL', 'JWT', 'SQLAlchemy'],
    github: 'https://github.com/GuillermoLopezArgudo/balonmano-frontend',
    demo: 'https://balonmano-frontend.vercel.app',
  },
]
</script>
