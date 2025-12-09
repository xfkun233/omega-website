<script setup>
import NavBar from './components/navbar.vue'
import topSection from './components/topSection.vue'
import characterSection from './components/characterSection.vue'
import GallerySection from './components/gallerySection.vue'
import StorySection from './components/storySection.vue'
import SpecSection from './components/specSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <div>
    <NavBar />
    <main>
      <topSection />
      <StorySection />
      <characterSection />
      <GallerySection />
      <SpecSection />
      <AppFooter />
    </main>
  </div>
</template>
