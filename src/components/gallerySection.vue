<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const images = [
  'CG/0 - 2025-11-19T035712.579.jpeg',
  'CG/0 (111).jpg',
  'CG/vis000.jpg',
  'CG/vis002.jpg',
  'CG/vis004.jpg',
  'CG/vis010.jpg',
  'CG/vis031.jpg',
  'CG/vis214.jpg',
]

const lightbox = ref({ open: false, index: 0 })
const slideDirection = ref('slide-left')

function open (i) {
  lightbox.value = { open: true, index: i }
}
function close () {
  lightbox.value.open = false
}
function next () {
  slideDirection.value = 'slide-left'
  lightbox.value.index = (lightbox.value.index + 1) % images.length
}
function prev () {
  slideDirection.value = 'slide-right'
  lightbox.value.index = (lightbox.value.index - 1 + images.length) % images.length
}

function handleKeydown(e) {
  if (!lightbox.value.open) return
  
  if (e.key === 'Escape') {
    close()
  } else if (e.key === 'ArrowRight') {
    next()
  } else if (e.key === 'ArrowLeft') {
    prev()
  }
}

const touchStart = ref(0)

function handleTouchStart(e) {
  touchStart.value = e.touches[0].clientX
}

function handleTouchEnd(e) {
  const touchEnd = e.changedTouches[0].clientX
  const diff = touchStart.value - touchEnd
  
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      next()
    } else {
      prev()
    }
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <section id="gallery" class="mx-auto max-w-7xl px-4 md:px-6 py-24 relative overflow-hidden">
    <h2 v-fade-in class="relative z-10 text-3xl md:text-4xl font-display font-bold mb-24 text-center tracking-widest text-[#b2252e] animate-text-glow">
      <span class="border-b-2 border-[#b2252e] pb-2">CG GALLERY</span>
    </h2>

    <div v-stagger:up="{ delay: 80 }" class="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 relative z-10">
      <button v-for="(src, i) in images" :key="src" class="relative aspect-video group hover-lift" @click="open(i)">
        <!-- 边框装饰 -->
        <div class="absolute -inset-2 border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100">
           <div class="absolute top-0 left-0 w-2 h-2 bg-[#b2252e] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
           <div class="absolute top-0 right-0 w-2 h-2 bg-[#b2252e] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
           <div class="absolute bottom-0 left-0 w-2 h-2 bg-[#b2252e] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
           <div class="absolute bottom-0 right-0 w-2 h-2 bg-[#b2252e] transition-all duration-300 group-hover:w-4 group-hover:h-4"></div>
        </div>

        <div class="w-full h-full overflow-hidden relative shadow-lg bg-black">
          <img :src="src" :alt="'CG ' + (i + 1)"
            class="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100 group-hover:brightness-110" />
          <div class="absolute inset-0 bg-[#b2252e]/0 group-hover:bg-[#b2252e]/10 transition-colors duration-500 mix-blend-overlay"></div>
          <!-- 序号标签 -->
          <div class="absolute bottom-2 right-2 text-white/0 group-hover:text-white/60 text-xs font-mono transition-all duration-300 tracking-wider">
            {{ String(i + 1).padStart(2, '0') }}
          </div>
        </div>
      </button>
    </div>

    <Transition name="fade">
      <div v-if="lightbox.open" class="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
        @click.self="close"
        @touchstart="handleTouchStart"
        @touchend="handleTouchEnd">
        
        <!-- 关闭按钮 -->
        <button class="absolute top-6 right-6 p-2 text-white/50 hover:text-[#b2252e] transition-colors z-50 group" @click="close">
          <span class="font-display font-bold text-sm tracking-widest mr-2 group-hover:mr-4 transition-all">CLOSE</span>
          <span class="text-xl">×</span>
        </button>

        <!-- 主内容区 -->
        <div class="relative w-full h-full flex items-center justify-center p-4" @click.self="close">
          <!-- 上一张 -->
          <button
            class="absolute left-4 md:left-12 p-4 text-white/30 hover:text-white transition-colors z-50 hidden md:block"
            @click.stop="prev">
            <span class="font-display text-4xl font-light">&lt;</span>
          </button>

          <!-- 图片 -->
          <Transition :name="slideDirection" mode="out-in">
            <div :key="lightbox.index" class="relative max-h-[85vh] max-w-[95vw]">
               <img :src="images[lightbox.index]"
                class="max-h-[85vh] max-w-[95vw] object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] select-none" @click.stop />
               <!-- 图片序号 -->
               <div class="absolute -bottom-8 left-1/2 -translate-x-1/2 text-white/40 font-display text-xs tracking-[0.2em]">
                 {{ String(lightbox.index + 1).padStart(2, '0') }} / {{ String(images.length).padStart(2, '0') }}
               </div>
            </div>
          </Transition>

          <!-- 下一张 -->
          <button
            class="absolute right-4 md:right-12 p-4 text-white/30 hover:text-white transition-colors z-50 hidden md:block"
            @click.stop="next">
            <span class="font-display text-4xl font-light">&gt;</span>
          </button>
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide Left */
.slide-left-enter-active,
.slide-left-leave-active {
  transition: all 0.3s ease;
}
.slide-left-enter-from {
  opacity: 0;
  transform: translateX(30px);
}
.slide-left-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

/* Slide Right */
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-right-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
