<template>
  <section
    id="projects"
    class="py-12 sm:py-16 bg-gray-100 dark:bg-gray-900 text-center px-4"
  >
    <h2 class="text-3xl font-bold mb-8 sm:mb-10 text-blue-600 dark:text-blue-400">Proyectos</h2>

    <div class="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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
  </section>
</template>

<script setup>
import ProjectCard from './ProjectCard.vue'

const projects = [
  {
    title: 'SaboresEspaña',
    description:
      'Aplicación fullstack de recetas con autenticación JWT. Frontend en Vercel, API en Render y PostgreSQL en Neon.',
    technologies: [
      'Vue 3',
      'TailwindCSS',
      'Flask',
      'PostgreSQL',
      'Peewee',
      'JWT',
      'Vercel',
      'Render'
    ],
    github: 'https://github.com/GuillermoLopezArgudo/SaboresEspa-a',
    demo: 'https://sabores-espana-one.vercel.app'
  },
  {
    title: 'App Balonmano',
    description:
      'Plataforma de gestión para clubes de balonmano: plantilla, partidos en directo, convocatoria, analítica, entrenamientos, cuotas y roles. Frontend en React y API en FastAPI con PostgreSQL.',
    technologies: [
      'React',
      'Vite',
      'FastAPI',
      'PostgreSQL',
      'JWT',
      'SQLAlchemy'
    ],
    github: 'https://github.com/GuillermoLopezArgudo/balonmano-frontend',
    demo: 'https://balonmano-frontend.vercel.app'
  }
]
</script>
