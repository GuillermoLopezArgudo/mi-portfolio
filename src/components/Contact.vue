<template>
  <section
    id="contact"
    class="py-12 sm:py-20 bg-white dark:bg-gray-900 text-center px-4"
  >
    <h2 class="text-3xl sm:text-4xl font-bold mb-6 text-blue-600 dark:text-blue-400">
      Contacto
    </h2>
    <p class="mb-8 sm:mb-10 text-gray-600 dark:text-gray-300 max-w-xl mx-auto text-base sm:text-lg">
      ¿Te interesa colaborar o tienes alguna propuesta? ¡Escríbeme y estaré encantado de responderte!
    </p>

    <form
      action="https://formsubmit.co/9e871d2d4a772e0ed0e3115aabd72d9f"
      method="POST"
      class="max-w-xl mx-auto space-y-4 sm:space-y-5"
    >
      <!-- Honeypot (oculto para bots) -->
      <input type="text" name="_honey" style="display: none" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_next"
        value="https://mi-portfolio-guillermo-lopez.vercel.app/"
      />

      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        required
        class="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md
               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo electrónico"
        required
        class="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md
               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
      />
      <textarea
        name="message"
        rows="4"
        placeholder="Tu mensaje..."
        required
        class="w-full px-4 py-2 sm:px-5 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-md
               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
               focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm sm:text-base"
      ></textarea>

      <button
        type="submit"
        class="w-full bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 font-medium shadow text-sm sm:text-base"
      >
        Enviar mensaje
      </button>
    </form>

    <div class="mt-8 sm:mt-10 text-gray-600 dark:text-gray-400 text-xs sm:text-sm space-y-1 sm:space-y-2">
      <p>
        Email:
        <a
          href="mailto:guillermolopezargudo@gmail.com"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          guillermolopezargudo@gmail.com
        </a>
      </p>
      <p>
        LinkedIn:
        <a
          href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          /guillermo-lópez-argudo
        </a>
      </p>
      <p>
        GitHub:
        <a
          href="https://github.com/GuillermoLopezArgudo"
          target="_blank"
          rel="noopener noreferrer"
          class="text-blue-600 dark:text-blue-400 hover:underline"
        >
          /GuillermoLopezArgudo
        </a>
      </p>
      <p class="pt-1">Picassent, Valencia · Disponibilidad total · Carnet y coche propio</p>
    </div>
  </section>
</template>