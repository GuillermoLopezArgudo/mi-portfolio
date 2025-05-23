  <template>
    <section id="projects" class="py-16 bg-gray-100 text-center">
      <h2 class="text-3xl font-bold mb-10 text-blue-600">Proyectos</h2>

      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-4">
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
    description: 'Aplicación fullstack dockerizada para gestionar recetas y usuarios, con autenticación JWT.',
    technologies: ['Vue 3', 'TailwindCSS', 'Flask', 'MySQL', 'Peewee', 'Docker', 'JWT'],
    github: 'https://github.com/GuillermoLopezArgudo/SaboresEspa-a',
    demo: 'http://48.217.185.80/'
  }
  ]
  </script>