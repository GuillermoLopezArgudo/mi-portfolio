<template>
  <section
    id="home"
    class="min-h-[calc(100vh-4rem)] flex items-center py-12 sm:py-16 lg:py-20"
  >
    <div
      class="w-full max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)] xl:grid-cols-[minmax(0,320px)_minmax(0,1fr)] gap-8 sm:gap-10 lg:gap-14 items-center"
    >
      <!-- Foto -->
      <div class="flex justify-center lg:justify-start">
        <figure class="relative w-40 sm:w-48 md:w-56 lg:w-full max-w-[280px] xl:max-w-[320px]">
          <div
            class="aspect-square overflow-hidden rounded-2xl sm:rounded-3xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md"
          >
            <img
              src="/miperfil.jpeg"
              alt="Guillermo López Argudo"
              width="640"
              height="640"
              decoding="async"
              fetchpriority="high"
              class="h-full w-full object-cover object-top"
            />
          </div>
        </figure>
      </div>

      <!-- Texto + CTAs -->
      <div class="text-center lg:text-left min-w-0">
        <p class="text-sm sm:text-base font-semibold tracking-wide text-blue-600 dark:text-blue-400 mb-2">
          Full Stack Developer
        </p>

        <h2 class="text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 mb-4 text-balance">
          Guillermo López Argudo
        </h2>

        <p class="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed max-w-xl mx-auto lg:mx-0">
          Especializado en <strong class="font-semibold text-gray-900 dark:text-white">Vue.js</strong>
          y <strong class="font-semibold text-gray-900 dark:text-white">Python</strong> (Flask / FastAPI).
          Experiencia en APIs REST, bases de datos y despliegue en cloud (AWS, GCP, Azure).
        </p>

        <p class="text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span class="inline-block">Picassent, Valencia</span>
          <span class="mx-1.5 text-gray-300 dark:text-gray-600" aria-hidden="true">·</span>
          <span class="inline-block">Presencial / híbrido / remoto</span>
          <span class="mx-1.5 text-gray-300 dark:text-gray-600" aria-hidden="true">·</span>
          <span class="inline-block">Coche propio</span>
        </p>

        <div class="flex flex-col sm:flex-row flex-wrap justify-center lg:justify-start gap-3">
          <a
            href="#projects"
            class="inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-xl bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition shadow-sm"
          >
            Ver mis proyectos
          </a>
          <a
            href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-xl border border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/40 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/GuillermoLopezArgudo"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center min-h-11 px-5 py-2.5 rounded-xl border border-gray-300 text-gray-800 text-sm font-semibold hover:bg-gray-100 dark:border-gray-600 dark:text-gray-100 dark:hover:bg-gray-800 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
