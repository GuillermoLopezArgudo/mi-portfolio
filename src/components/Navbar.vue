<template>
  <header class="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-16 flex items-center">
    <nav class="container mx-auto px-4 flex justify-between items-center h-full">
      <h1 class="text-2xl font-bold text-blue-600">Mi Portfolio</h1>
      <ul class="flex space-x-6 list-none items-center">
        <li><a href="#home" class="text-gray-800 hover:text-blue-600 transition">Inicio</a></li>
        <li><a href="#about" class="text-gray-800 hover:text-blue-600 transition">Sobre mí</a></li>
        <li><a href="#projects" class="text-gray-800 hover:text-blue-600 transition">Proyectos</a></li>
        <li><a href="#contact" class="text-gray-800 hover:text-blue-600 transition">Contacto</a></li>
        <li>
          <a
            href="/CV-GuillermoLópezArgudo.pdf"
            download
            class="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-sm font-medium"
          >
            Descargar CV
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
