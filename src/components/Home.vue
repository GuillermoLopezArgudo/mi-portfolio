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

      <!-- Full-bleed portrait plane -->
      <div class="relative order-1 lg:order-2 min-h-[42vh] sm:min-h-[48vh] lg:min-h-full -mx-5 sm:-mx-8 lg:mx-0 lg:-mr-12 xl:mr-[calc(-50vw+700px)]">
        <div class="absolute inset-0 overflow-hidden animate-fade">
          <img
            src="/miperfil.jpeg"
            alt="Guillermo López Argudo"
            width="960"
            height="1200"
            decoding="async"
            fetchpriority="high"
            class="h-full w-full object-cover object-[center_18%] scale-[1.02] transition-transform duration-[1.4s] ease-out hover:scale-105"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent lg:bg-gradient-to-r lg:from-[var(--bg)] lg:via-transparent lg:to-transparent opacity-90 lg:opacity-70"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  </section>
</template>
