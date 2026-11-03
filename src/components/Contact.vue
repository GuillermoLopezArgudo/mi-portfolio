<template>
  <section id="contact" class="relative section-pad py-20 sm:py-28 border-t border-[var(--line)]">
    <div class="mx-auto max-w-[1400px] grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <div>
        <p class="text-xs font-semibold tracking-[0.2em] uppercase text-[var(--signal)] mb-3">
          Contacto
        </p>
        <h2 class="display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[var(--ink)] mb-5 text-balance">
          Cuéntame qué tienes entre manos.
        </h2>
        <p class="text-base sm:text-lg text-[var(--mute)] leading-relaxed mb-8 max-w-md">
          Picassent, Valencia · Presencial, híbrido o remoto · Carnet y coche propio.
        </p>
        <ul class="space-y-3 list-none text-sm sm:text-base">
          <li>
            <a
              href="mailto:guillermolopezargudo@gmail.com"
              class="text-[var(--ink)] hover:text-[var(--signal)] transition-colors font-medium"
            >
              guillermolopezargudo@gmail.com
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/guillermo-l%C3%B3pez-argudo-5a716722b/"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--mute)] hover:text-[var(--signal)] transition-colors"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://github.com/GuillermoLopezArgudo"
              target="_blank"
              rel="noopener noreferrer"
              class="text-[var(--mute)] hover:text-[var(--signal)] transition-colors"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>

      <form
        action="https://formsubmit.co/9e871d2d4a772e0ed0e3115aabd72d9f"
        method="POST"
        class="space-y-4"
      >
        <input type="text" name="_honey" class="hidden" tabindex="-1" autocomplete="off" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://mi-portfolio-guillermo-lopez.vercel.app/"
        />

        <label class="block">
          <span class="sr-only">Nombre</span>
          <input
            type="text"
            name="name"
            placeholder="Tu nombre"
            required
            class="w-full min-h-12 px-4 border border-[var(--line)] bg-transparent text-[var(--ink)]
                   placeholder:text-[var(--mute)] focus:outline-none focus:border-[var(--signal)] transition-colors"
          />
        </label>
        <label class="block">
          <span class="sr-only">Email</span>
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            class="w-full min-h-12 px-4 border border-[var(--line)] bg-transparent text-[var(--ink)]
                   placeholder:text-[var(--mute)] focus:outline-none focus:border-[var(--signal)] transition-colors"
          />
        </label>
        <label class="block">
          <span class="sr-only">Mensaje</span>
          <textarea
            name="message"
            rows="5"
            placeholder="Tu mensaje"
            required
            class="w-full px-4 py-3 border border-[var(--line)] bg-transparent text-[var(--ink)]
                   placeholder:text-[var(--mute)] focus:outline-none focus:border-[var(--signal)]
                   resize-y min-h-[140px] transition-colors"
          />
        </label>
        <button
          type="submit"
          class="inline-flex items-center justify-center min-h-12 px-8 text-sm font-semibold
                 bg-[var(--ink)] text-[var(--bg)] hover:bg-[var(--signal)] hover:text-white transition-colors"
        >
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
</template>
