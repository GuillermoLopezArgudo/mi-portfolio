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
      'Aplicación fullstack dockerizada para gestionar recetas y usuarios, con autenticación JWT.',
    technologies: [
      'Vue 3',
      'TailwindCSS',
      'Flask',
      'MySQL',
      'Peewee',
      'Docker',
      'JWT'
    ],
    github: 'https://github.com/GuillermoLopezArgudo/SaboresEspa-a',
    demo: 'http://48.217.185.80/'
  },
  {
    title: 'mi-app',
    description:
      'Aplicación frontend en Vue 3. Proyecto reciente centrado en componentes, rutas y UI moderna.',
    technologies: ['Vue 3', 'JavaScript'],
    github: 'https://github.com/GuillermoLopezArgudo/mi-app',
    demo: ''
  },
  {
    title: 'receta-blog',
    description:
      'Blog de recetas desplegado en Vercel. Proyecto web con enfoque en frontend y publicación de contenido.',
    technologies: ['JavaScript', 'Vercel'],
    github: 'https://github.com/GuillermoLopezArgudo/receta-blog',
    demo: 'https://receta-blog.vercel.app'
  }
]
</script>
