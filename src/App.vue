<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/navbar.vue'
import topSection from './components/topSection.vue'
import characterSection from './components/characterSection.vue'
import GallerySection from './components/gallerySection.vue'
import StorySection from './components/storySection.vue'
import SpecSection from './components/specSection.vue'
import AppFooter from './components/AppFooter.vue'

const showScrollTop = ref(false)
const showBgmModal = ref(true)
const audioPlayer = ref(null)

function checkScroll() {
  showScrollTop.value = window.scrollY > 500
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function handleBgmChoice(play) {
  showBgmModal.value = false
  if (play && audioPlayer.value) {
    audioPlayer.value.volume = 0.5
    audioPlayer.value.play().catch(e => {
      console.error("Audio play failed:", e)
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<template>
  <div>
    <!-- BGM Modal -->
    <Transition name="fade">
      <div v-if="showBgmModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
        <div class="text-center p-8 max-w-lg w-full mx-4 border border-white/10 bg-black/50 rounded-lg shadow-2xl">
          <div class="flex flex-col items-center gap-6 mb-10">
            <img src="/mute.png" alt="Sound Check" class="w-70 h-70 object-contain" />
            <div class="space-y-2">
              <h2 class="text-2xl md:text-3xl text-white font-bold tracking-widest">
                播放背景音乐？
              </h2>
              <p class="text-sm text-gray-400 font-light tracking-widest uppercase">
                Play Background Music?
              </p>
            </div>
          </div>
          
          <div class="flex gap-4 justify-center">
            <button 
              @click="handleBgmChoice(true)"
              class="flex-1 px-6 py-3 bg-[#b2252e] hover:bg-[#d9343f] text-white font-bold tracking-wider transition-all duration-300 hover:scale-105 border border-[#b2252e]"
            >
              YES
            </button>
            <button 
              @click="handleBgmChoice(false)"
              class="flex-1 px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              NO
            </button>
          </div>
        </div>
      </div>
    </Transition>

    <audio ref="audioPlayer" loop preload="auto">
      <source src="/bgm/LostWorld.m4a" type="audio/mp4">
    </audio>

    <div class="bg-noise"></div>
    <NavBar />
    <main>
      <topSection />
      <StorySection />
      <characterSection />
      <GallerySection />
      <SpecSection />
      <AppFooter />
    </main>

    <Transition name="fade">
      <button 
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 p-3 bg-[#b2252e] text-white shadow-lg hover:bg-[#d9343f] transition-colors border border-white/10 group"
        aria-label="Back to Top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
