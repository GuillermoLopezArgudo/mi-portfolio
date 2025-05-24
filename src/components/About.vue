<template>
  <section id="about" class="py-20 bg-white text-center">
    <h2 class="text-4xl font-bold mb-10 text-blue-600">Sobre mí</h2>

    <div class="max-w-4xl mx-auto text-gray-700 px-6 space-y-6">
      <p class="text-lg leading-relaxed">
        Soy desarrollador <strong>Fullstack</strong> con formación en <strong>DAM</strong> (Desarrollo de Aplicaciones Multiplataforma) y <strong>DAW</strong> (Desarrollo de Aplicaciones Web).
      </p>
      <p class="text-lg leading-relaxed">
        Me apasiona crear soluciones modernas y funcionales tanto en el <strong>frontend</strong> como en el <strong>backend</strong>, usando tecnologías actuales y entornos dockerizados. Estoy en constante aprendizaje para seguir creciendo profesionalmente.
      </p>

      <!-- Tecnologías -->
      <div class="mt-10 text-left">
        <h3 class="text-2xl font-semibold mb-4 text-blue-600">🔧 Tecnologías que manejo:</h3>
        <ul class="grid grid-cols-2 sm:grid-cols-3 gap-3 list-disc list-inside text-base text-gray-600">
          <li>HTML5, CSS3, JavaScript (ES6+)</li>
          <li>Vue 3, React, Angular</li>
          <li>React Native (Apps móviles)</li>
          <li>Python (Flask + Peewee)</li>
          <li>PHP (Laravel)</li>
          <li>Java, C#</li>
          <li>Docker, Nginx, Apache2</li>
          <li>MySQL, MongoDB, Firebase</li>
          <li>JWT, CORS, RESTful APIs</li>
        </ul>
      </div>

      <!-- Experiencia profesional -->
      <div class="mt-12 text-left">
        <h3 class="text-2xl font-semibold mb-4 text-blue-600">💼 Experiencia profesional:</h3>
        <ul class="space-y-3 text-base text-gray-700 list-disc list-inside">
          <li>
            <strong>Full Stack Developer</strong>: desarrollo de aplicaciones móviles y web con Vue, Flask, MySQL y despliegue con Docker.
          </li>
          <li>
            <strong>Diseñador Web – Mark & Brand</strong>: creación de sitios web, ERP con Odoo, diseño gráfico con Canva.
          </li>
          <li>
            <strong>Diseñador Web – EDF</strong>: desarrollo backend y frontend, despliegue en Azure, gestión de Moodle.
          </li>
          <li>
            <strong>Técnico – Dr. Frank Schneider</strong>: control de calidad y producción en automoción.
          </li>
        </ul>
      </div>

      <!-- Descarga del currículum -->
      <div class="mt-12 text-center">
        <a
          href="/CV-GuillermoLópezArgudo.pdf"
          download
          class="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition font-medium shadow"
        >
          Descargar mi currículum
        </a>
      </div>
    </div>
  </section>
</template>
