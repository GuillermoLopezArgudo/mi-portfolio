<template>
  <section
    id="home"
    class="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center 
           bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4 py-16 sm:py-0"
  >
    <div class="text-center max-w-4xl mx-auto">
      <img
        src="/miperfil.jpeg"
        alt="Guillermo López Argudo"
        class="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 mx-auto mb-6 sm:mb-8 rounded-full border-4 border-blue-600 shadow-xl object-cover"
      />

      <h2 class="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
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
          class="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 text-center"
        >
          Ver mis proyectos
        </a>
        <a
          href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white dark:bg-gray-800 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-white text-center"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/GuillermoLopezArgudo"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto bg-gray-900 text-white border-2 border-gray-900 px-6 py-3 rounded-full shadow-lg hover:bg-gray-700 dark:bg-gray-100 dark:text-gray-900 dark:border-gray-100 dark:hover:bg-gray-300 text-center"
        >
          GitHub
        </a>
      </div>
    </div>
  </section>
</template>
