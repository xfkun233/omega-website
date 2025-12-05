<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const items = [
  { label: 'TOP', href: '#top' },
  { label: 'STORY', href: '#story' },
  { label: 'HEROINE', href: '#heroine' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'SPEC', href: '#spec' },
  { label: 'L10N STAFF', href: '#l10n-staff' },
  { label: 'DOWNLOAD', href: '#download' },
  { label: 'CONTACT US', href: '#footer' },
]

function handleScroll() {
  isScrolled.value = window.scrollY > 50
}

function scrollTo(href) {
  isMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    const offset = 49 // Navbar height (approx 53px) - small buffer to ensure no gap
    const elementPosition = el.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - offset

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav 
    class="fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-white/5"
    :class="[isScrolled ? 'bg-gray-900/80 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5']"
  >
    <div class="mx-auto max-w-7xl px-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-l  tracking-widest text-white">
        Omegaの視界 | 伝奇系ビジュアルノベル
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <a 
          v-for="item in items" 
          :key="item.label" 
          :href="item.href" 
          @click.prevent="scrollTo(item.href)"
          class="text-sm font-medium text-white/70 hover:text-white transition-colors relative group"
        >
          {{ item.label }}
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-500 transition-all group-hover:w-full"></span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button class="md:hidden text-white" @click="isMenuOpen = !isMenuOpen">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden absolute top-full left-0 w-full bg-gray-900/95 border-t border-white/10 backdrop-blur-xl">
      <div class="flex flex-col p-4 space-y-4">
        <a 
          v-for="item in items" 
          :key="item.label" 
          :href="item.href" 
          @click.prevent="scrollTo(item.href)"
          class="text-white/80 hover:text-white block"
        >
          {{ item.label }}
        </a>
      </div>
    </div>
  </nav>
</template>
