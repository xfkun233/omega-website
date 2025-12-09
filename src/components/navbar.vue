<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const items = [
  { label: 'TOP', zh: '首页', href: '#top' },
  { label: 'STORY', zh: '故事介绍', href: '#story' },
  { label: 'CHARACTER', zh: '登场人物', href: '#character' },
  { label: 'GALLERY', zh: '画廊', href: '#gallery' },
  { label: 'PRODUCT', zh: '产品规格', href: '#spec' },
  { label: 'L10N STAFF', zh: '汉化团队', href: '#l10n-staff' },
  { label: 'DOWNLOAD', zh: '下载', href: '#download' },
  { label: 'CONTACT US', zh: '联系我们', href: '#footer' },
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
    :class="[(isScrolled || isMenuOpen) ? 'bg-gray-900/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5']"
  >
    <div class="mx-auto max-w-7xl px-4 flex items-center justify-between">
      <!-- Logo -->
      <div class="text-l md:text-2xl font-serif tracking-widest text-white drop-shadow-md">
        <span class="text-[#b2252e]">Omega</span>の視界 | 汉化发布页
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex gap-8">
        <a 
          v-for="item in items" 
          :key="item.label" 
          :href="item.href" 
          @click.prevent="scrollTo(item.href)"
          class="text-sm font-display font-bold tracking-widest text-white/70 hover:text-white transition-colors relative group"
        >
          <div class="grid place-items-center">
            <span class="col-start-1 row-start-1 transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">{{ item.label }}</span>
            <span class="col-start-1 row-start-1 transition-all duration-300 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 text-[#b2252e]">{{ item.zh }}</span>
          </div>
          <span class="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b2252e] transition-all duration-300 group-hover:w-full"></span>
        </a>
      </div>

      <!-- Mobile Toggle -->
      <button 
        class="md:hidden flex flex-col items-center justify-center w-12 h-12 z-50 relative group"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle Menu"
      >
        <!-- Top Line -->
        <span 
          class="w-8 h-[2px] bg-white transition-all duration-300 ease-in-out origin-center mb-1"
          :class="{ 'rotate-45 translate-y-[12px]': isMenuOpen }"
        ></span>
        
        <!-- MENU Text -->
        <span 
          class="text-[10px] font-bold tracking-[0.2em] text-white transition-all duration-300 select-none"
          :class="{ 'opacity-0 scale-0': isMenuOpen }"
        >
          MENU
        </span>

        <!-- Bottom Line -->
        <span 
          class="w-8 h-[2px] bg-white transition-all duration-300 ease-in-out origin-center mt-1"
          :class="{ '-rotate-45 -translate-y-[12px]': isMenuOpen }"
        ></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
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
    </Transition>
  </nav>
</template>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  opacity: 1;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
</style>
