<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import NavBar from './components/navbar.vue'
import topSection from './components/topSection.vue'
import characterSection from './components/characterSection.vue'
import GallerySection from './components/gallerySection.vue'
import StorySection from './components/storySection.vue'
import DownloadSection from './components/downloadSection.vue'
import StaffSection from './components/staffSection.vue'
import SpecSection from './components/specSection.vue'
import ContactSection from './components/contactSection.vue'
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
    <Transition name="modal">
      <div v-if="showBgmModal" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
        <div class="text-center p-8 max-w-lg w-full mx-4 border border-white/10 bg-black/50 rounded-lg shadow-2xl modal-content">
          <div class="flex flex-col items-center gap-6 mb-10">
            <img src="/mute.png" alt="Sound Check" class="w-70 h-70 object-contain animate-float" />
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
              class="flex-1 px-6 py-3 bg-[#b2252e] hover:bg-[#d9343f] text-white font-bold tracking-wider transition-all duration-300 hover:scale-105 border border-[#b2252e] hover-bounce animate-glow-pulse"
            >
              YES
            </button>
            <button 
              @click="handleBgmChoice(false)"
              class="flex-1 px-6 py-3 bg-transparent hover:bg-white/10 text-white font-bold tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40 hover-bounce"
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
      <StaffSection />
      <DownloadSection />
      <ContactSection />
      <AppFooter />
    </main>

    <Transition name="scroll-btn">
      <button 
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 p-3 bg-[#b2252e] text-white shadow-lg hover:bg-[#d9343f] transition-all duration-300 border border-white/10 group hover-bounce animate-glow-pulse"
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

/* Modal 动画 */
.modal-enter-active {
  transition: opacity 0.5s ease;
}

.modal-leave-active {
  transition: opacity 0.4s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-active .modal-content {
  animation: modal-in 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.modal-leave-active .modal-content {
  animation: modal-out 0.3s ease-in forwards;
}

@keyframes modal-in {
  0% {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
    filter: blur(10px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
    filter: blur(0);
  }
}

@keyframes modal-out {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.95) translateY(-10px);
  }
}

.scroll-btn-enter-active {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.scroll-btn-leave-active {
  transition: all 0.3s ease-in;
}

.scroll-btn-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.8);
}

.scroll-btn-leave-to {
  opacity: 0;
  transform: translateY(10px) scale(0.9);
}
</style>
