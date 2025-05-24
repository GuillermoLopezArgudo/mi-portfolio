<template>
  <section
    id="home"
    class="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center bg-gradient-to-b from-gray-50 to-gray-100 px-4"
  >
    <div class="text-center max-w-4xl mx-auto">
      <!-- Imagen de perfil  -->
      <img
        src="/miperfil.jpeg"
        alt="Guillermo López Argudo"
        class="w-48 h-48 md:w-56 md:h-56 mx-auto mb-10 rounded-full border-6 border-blue-600 shadow-2xl object-cover"
      />

      <h2 class="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
        Hola, soy Guillermo López Argudo
      </h2>

      <p class="text-lg max-w-2xl mx-auto text-gray-700 mb-10 leading-relaxed">
        Desarrollador Fullstack con formación en DAM y DAW, apasionado por crear soluciones web y móviles modernas y eficientes.
      </p>

      <div class="flex flex-col sm:flex-row justify-center items-center gap-6">
        <a
          href="#projects"
          class="bg-blue-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Ver mis proyectos
        </a>
        <a
          href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
          target="_blank"
          class="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full shadow-lg hover:bg-blue-600 hover:text-white transition duration-300"
        >
          Mi LinkedIn
        </a>
      </div>
    </div>
  </section>
</template>
