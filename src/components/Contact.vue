<template>
  <section id="contact" class="py-16 bg-white text-center">
    <h2 class="text-3xl font-bold mb-6 text-blue-600">Contacto</h2>
    <p class="mb-8 text-gray-600 max-w-xl mx-auto">
      ¿Te interesa colaborar o tienes alguna propuesta? ¡Escríbeme!
    </p>

    <form
      action="https://formsubmit.co/guillermolopezargudo@gmail.com"
      method="POST"
      class="max-w-xl mx-auto space-y-4"
    >
      <!-- Honeypot field -->
      <input type="text" name="_honey" style="display:none">
      <!-- Disable CAPTCHA -->
      <input type="hidden" name="_captcha" value="false">
      <!-- Redirect after submit -->
      <input type="hidden" name="_next" value="https://tu-dominio-o-gracias.vercel.app">

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        required
        class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
        class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        name="message"
        rows="5"
        placeholder="Tu mensaje..."
        required
        class="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      ></textarea>
      <button
        type="submit"
        class="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        Enviar
      </button>
    </form>

    <div class="mt-8 text-gray-600 space-y-2">
      <p>Email: <a href="mailto:guillermolopezargudo@gmail.com" class="text-blue-600 hover:underline">guillermolopezargudo@gmail.com</a></p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/" class="text-blue-600 hover:underline" target="_blank">/guillermo-lópez-argudo</a></p>
    </div>
  </section>
</template>
