<template>
  <section id="contact" class="py-20 bg-white text-center">
    <h2 class="text-4xl font-bold mb-6 text-blue-600">Contacto</h2>
    <p class="mb-10 text-gray-600 max-w-xl mx-auto text-lg">
      ¿Te interesa colaborar o tienes alguna propuesta? ¡Escríbeme y estaré encantado de responderte!
    </p>

    <form
      action="https://formsubmit.co/9e871d2d4a772e0ed0e3115aabd72d9f"
      method="POST"
      class="max-w-xl mx-auto space-y-5"
    >
      <!-- Honeypot (oculto para bots) -->
      <input type="text" name="_honey" style="display: none" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://mi-portfolio-navy-phi.vercel.app/" />

      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        required
        class="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo electrónico"
        required
        class="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Tu mensaje..."
        required
        class="w-full px-5 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
      ></textarea>

      <button
        type="submit"
        class="w-full sm:w-auto bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium shadow"
      >
        Enviar mensaje
      </button>
    </form>

    <div class="mt-10 text-gray-600 text-sm space-y-2">
      <p>
        📧 Email:
        <a
          href="mailto:guillermolopezargudo@gmail.com"
          class="text-blue-600 hover:underline"
        >
          guillermolopezargudo@gmail.com
        </a>
      </p>
      <p>
        🔗 LinkedIn:
        <a
          href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
          target="_blank"
          class="text-blue-600 hover:underline"
        >
          /guillermo-lópez-argudo
        </a>
      </p>
    </div>
  </section>
</template>
