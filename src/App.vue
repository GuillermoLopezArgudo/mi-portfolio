<template>
  <div class="min-h-screen bg-[var(--bg)] text-[var(--ink)]">
    <Navbar />
    <main>
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
