<template>
  <section
    id="home"
    class="relative min-h-[100svh] pt-16 overflow-hidden grain"
  >
    <div class="hero-atmosphere pointer-events-none absolute inset-0" aria-hidden="true" />

    <div
      class="relative section-pad mx-auto max-w-[1400px] min-h-[calc(100svh-4rem)]
             grid lg:grid-cols-2 gap-0 items-stretch"
    >
      <!-- Copy -->
      <div class="flex flex-col justify-center py-14 sm:py-20 lg:py-24 lg:pr-10 xl:pr-16 order-2 lg:order-1">
        <p class="animate-rise text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase text-[var(--signal)] mb-5">
          Full Stack Developer
        </p>

        <h1
          class="display animate-rise-delay text-[clamp(2.75rem,8vw,5.5rem)] leading-[0.95] font-extrabold tracking-tight text-[var(--ink)] text-balance"
        >
          Guillermo<br />López Argudo
        </h1>

        <span
          class="mt-5 mb-6 block h-[3px] w-16 origin-left bg-[var(--signal)] animate-sweep"
          aria-hidden="true"
        />

        <p class="animate-rise-late text-base sm:text-lg text-[var(--mute)] max-w-md leading-relaxed mb-9">
          Vue.js y Python para productos web reales: APIs, datos y despliegue en cloud.
        </p>

        <div class="animate-rise-late flex flex-wrap gap-3">
          <a
            href="#projects"
            class="inline-flex items-center justify-center min-h-12 px-6 text-sm font-semibold
                   bg-[var(--signal)] text-white hover:bg-[var(--signal-bright)] transition-colors"
          >
            Ver proyectos
          </a>
          <a
            href="#contact"
            class="inline-flex items-center justify-center min-h-12 px-6 text-sm font-semibold
                   border border-[var(--ink)] text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--bg)] transition-colors"
          >
            Contactar
          </a>
        </div>
      </div>

      <!-- Portrait -->
      <div
        class="relative order-1 lg:order-2 flex items-center justify-center
               py-8 sm:py-12 lg:py-16 animate-fade"
      >
        <img
          src="/miperfil.jpeg"
          alt="Guillermo López Argudo"
          width="960"
          height="1200"
          decoding="async"
          fetchpriority="high"
          class="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]
                 max-h-[52vh] lg:max-h-[62vh] object-cover object-[center_20%]
                 transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
        />
      </div>
    </div>
  </section>
</template>
