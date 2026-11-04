<template>
  <section id="about" class="relative section-pad py-20 sm:py-28 border-t border-[var(--line)]">
    <div class="mx-auto max-w-[1400px]">
      <div class="max-w-3xl">
        <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--signal)] mb-3">
          Sobre mí
        </p>
        <h2 class="display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] mb-6 text-balance">
          Código claro, producto que funciona.
        </h2>
        <p class="text-base sm:text-lg text-[var(--mute)] leading-relaxed mb-4">
          Full Stack con DAM y DAW. Especializado en
          <strong class="text-[var(--ink)] font-semibold">Vue.js</strong> y
          <strong class="text-[var(--ink)] font-semibold">Python</strong> (Flask / FastAPI):
          APIs REST, bases de datos y despliegue en cloud.
        </p>
        <p class="text-base sm:text-lg text-[var(--mute)] leading-relaxed">
          Busco equipos de producto o consultoría. Perfil resolutivo, con foco en modernizar apps
          y mejorar procesos DevOps.
        </p>

        <div class="mt-8 grid gap-6 sm:grid-cols-2 max-w-2xl">
          <div>
            <h3 class="display text-sm font-bold tracking-wide uppercase text-[var(--ink)] mb-2">
              Idiomas
            </h3>
            <ul class="space-y-1 list-none text-sm sm:text-base text-[var(--mute)]">
              <li><strong class="text-[var(--ink)]">Español</strong> — nativo</li>
              <li><strong class="text-[var(--ink)]">Valenciano</strong> — nativo</li>
              <li><strong class="text-[var(--ink)]">Inglés</strong> — A2</li>
            </ul>
          </div>
          <div>
            <h3 class="display text-sm font-bold tracking-wide uppercase text-[var(--ink)] mb-2">
              Disponibilidad
            </h3>
            <p class="text-sm sm:text-base text-[var(--mute)] leading-relaxed">
              Incorporación inmediata · presencial / híbrido en Valencia o remoto · carnet y coche propio
            </p>
          </div>
        </div>
      </div>

      <!-- Stack: one job — technical map -->
      <div class="mt-14 sm:mt-16 grid gap-8 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="block in stack" :key="block.title">
          <h3 class="display text-sm font-bold tracking-wide uppercase text-[var(--ink)] mb-3">
            {{ block.title }}
          </h3>
          <p class="text-sm text-[var(--mute)] leading-relaxed">
            {{ block.items }}
          </p>
        </div>
      </div>

      <!-- Experience timeline -->
      <div class="mt-16 sm:mt-20">
        <h3 class="display text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-8">
          Experiencia
        </h3>
        <ol class="relative border-l border-[var(--line)] ml-2 space-y-10">
          <li
            v-for="job in jobs"
            :key="job.company"
            class="relative pl-8"
          >
            <span
              class="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--signal)]"
              aria-hidden="true"
            />
            <p class="display text-lg font-bold text-[var(--ink)]">
              {{ job.role }}
              <span class="text-[var(--mute)] font-semibold">· {{ job.company }}</span>
            </p>
            <p class="text-xs tracking-wide uppercase text-[var(--signal)] mt-1 mb-2">
              {{ job.period }}
            </p>
            <p class="text-sm sm:text-base text-[var(--mute)] leading-relaxed max-w-2xl">
              {{ job.detail }}
            </p>
          </li>
        </ol>
      </div>

      <div class="mt-14 sm:mt-16 max-w-xl">
        <h3 class="display text-2xl font-bold text-[var(--ink)] mb-4">Formación</h3>
        <ul class="space-y-3 list-none text-[var(--mute)]">
          <li>
            <strong class="text-[var(--ink)]">Técnico Superior en DAW</strong>
            — I.E.S. Serre Perenxisa
            <span class="text-sm opacity-80">(2024 – 2025)</span>
          </li>
          <li>
            <strong class="text-[var(--ink)]">Técnico Superior en DAM</strong>
            — Instituto La Florida
            <span class="text-sm opacity-80">(2021 – 2023)</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const stack = [
  {
    title: 'Frontend',
    items: 'Vue.js, Vue 3, Pinia, React, React Native, JavaScript, TypeScript, HTML5, CSS3, Tailwind, WordPress, Elementor',
  },
  {
    title: 'Backend',
    items: 'Python, Flask, FastAPI, PHP, Laravel, Java, C#, APIs REST, microservicios',
  },
  {
    title: 'Datos',
    items: 'PostgreSQL, MySQL, MongoDB',
  },
  {
    title: 'Cloud / DevOps',
    items: 'AWS, GCP, Azure, Docker, Linux, Nginx, Apache2, CI/CD, Git',
  },
]

const jobs = [
  {
    role: 'Desarrollador Web – Full Stack',
    company: 'Mvisual',
    period: 'Julio 2026 – Septiembre 2026',
    detail:
      'Apps con Vue.js, Flask y Laravel (PHP), APIs REST, PostgreSQL / MySQL / MongoDB y despliegue en GCP. Participación en la app móvil y dashboard de Mes Que Falles (React Native), mantenimiento y mejora de Rawena (Laravel / React), modernización de componentes y mejora DevOps.',
  },
  {
    role: 'Desarrollador Web – Full Stack',
    company: 'EDF',
    period: '2025 · 9 meses',
    detail:
      'Desarrollo y mantenimiento frontend/backend, bases de datos y evolución de aplicaciones existentes. Desarrollé SaboresEspaña (Vue 3, Flask, PostgreSQL) y lo desplegué en Azure, dockerizando una máquina virtual.',
  },
  {
    role: 'Full-Stack Developer',
    company: 'Dr. Frank Schneider',
    period: 'Julio 2022 – Enero 2024',
    detail:
      'Vue.js y Flask, React / React Native, PHP y FastAPI. SQL y MongoDB, AWS EC2 y automatización DevOps.',
  },
  {
    role: 'Desarrollador Web',
    company: 'Mark & Brand',
    period: '2022 · 9 meses',
    detail:
      'Sitios corporativos y catálogos digitales con WordPress y Elementor, y CRM/ERP con Odoo.',
  },
]
</script>
