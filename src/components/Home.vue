<template>
  <section
    id="home"
    class="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center 
           bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16 sm:py-0"
  >
    <div class="text-center max-w-4xl mx-auto">
      <div class="relative mx-auto mb-8 sm:mb-10 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52">
        <!-- Halo suave -->
        <div
          class="pointer-events-none absolute -inset-4 rounded-full bg-blue-500/20 dark:bg-blue-400/25 blur-2xl"
          aria-hidden="true"
        />
        <!-- Anillo degradado -->
        <div
          class="absolute inset-0 rounded-full p-[3px] bg-gradient-to-br from-blue-500 via-sky-400 to-indigo-500 shadow-[0_12px_40px_-12px_rgba(37,99,235,0.55)] dark:shadow-[0_12px_40px_-10px_rgba(96,165,250,0.45)]"
        >
          <div class="h-full w-full rounded-full bg-gray-50 dark:bg-gray-900 p-1">
            <img
              src="/miperfil.jpeg"
              alt="Guillermo López Argudo"
              class="profile-photo h-full w-full rounded-full object-cover object-[center_22%] ring-1 ring-white/70 dark:ring-white/10"
            />
          </div>
        </div>
      </div>

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-3 tracking-tight text-gray-900 dark:text-gray-100">
        Guillermo López Argudo
      </h2>

      <p class="text-lg sm:text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">
        Full Stack Developer
      </p>

      <p class="text-base sm:text-lg max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Especializado en <strong>Vue.js</strong> y <strong>Python</strong> (Flask / FastAPI).
        Experiencia en APIs REST, bases de datos y despliegue en cloud (AWS, GCP, Azure).
      </p>

      <p class="text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-8 sm:mb-10">
        Picassent, Valencia · Presencial / híbrido / remoto · Coche propio
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
        <a
          href="#projects"
          class="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 text-center transition"
        >
          Ver mis proyectos
        </a>
        <a
          href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white text-center transition"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/GuillermoLopezArgudo"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto bg-gray-900 text-white border-2 border-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100 dark:hover:bg-gray-300 text-center transition"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.profile-photo {
  transition: transform 0.45s ease, filter 0.45s ease;
}

@media (hover: hover) {
  .profile-photo:hover {
    transform: scale(1.03);
    filter: brightness(1.04) contrast(1.03);
  }
}
</style>
