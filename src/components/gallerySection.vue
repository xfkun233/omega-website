<script setup>
import { ref } from 'vue'

const images = [
  '/CG/0 (111).jpeg',
  '/CG/0 - 2025-11-19T035712.579.jpeg',
  '/CG/vis000.jpg',
  '/CG/vis002.jpg',
  '/CG/vis004.jpg',
  '/CG/vis010.jpg',
  '/CG/vis031.jpg',
  '/CG/vis214.jpg',
]

const lightbox = ref({ open: false, index: 0 })

function open(i) {
  lightbox.value = { open: true, index: i }
}
function close() {
  lightbox.value.open = false
}
function next() {
  lightbox.value.index = (lightbox.value.index + 1) % images.length
}
function prev() {
  lightbox.value.index = (lightbox.value.index - 1 + images.length) % images.length
}
</script>

<template>
  <section id="gallery" class="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-24 scroll-mt-[49px]">
    <h2 v-fade-in class="text-2xl md:text-3xl font-semibold mb-12 text-center">CG GALLERY</h2>
    
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <button v-for="(src,i) in images" :key="src" 
              class="relative aspect-video overflow-hidden rounded-lg group" 
              @click="open(i)">
        <img v-fade-in :src="src" :alt="'CG '+(i+1)" 
             class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
      </button>
    </div>

    <Transition name="fade">
      <div v-if="lightbox.open" class="fixed inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center" @click.self="close">
        <!-- 关闭按钮 -->
        <button class="absolute top-4 right-4 p-2 text-white/70 hover:text-white z-50" @click="close">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- 主内容区 -->
        <div class="relative w-full h-full flex items-center justify-center p-4" @click.self="close">
          <!-- 上一张 (桌面端显示在左侧，移动端绝对定位) -->
          <button class="absolute left-4 md:static p-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50" @click.stop="prev">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- 图片 -->
          <img :src="images[lightbox.index]" 
               class="max-h-[80vh] max-w-[90vw] object-contain rounded shadow-2xl mx-4 select-none" 
               @click.stop />

          <!-- 下一张 (桌面端显示在右侧，移动端绝对定位) -->
          <button class="absolute right-4 md:static p-4 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-colors z-50" @click.stop="next">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <!-- 底部指示器 -->
        <div class="absolute bottom-8 text-white/50 text-sm">
          {{ lightbox.index + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </section>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
