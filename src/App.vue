<template>
 <Navbar />
  <div class="font-sans text-gray-800 bg-gray-50 min-h-screen pt-16">
    <main class="container mx-auto px-4 py-6 space-y-16">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>