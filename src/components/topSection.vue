<script setup>
const scrollToStory = (e) => {
  e.preventDefault()
  document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <section id="top" class="relative min-h-[85vh] md:min-h-screen flex flex-col items-center justify-center bg-[url('/title.png')] bg-cover bg-center bg-no-repeat overflow-hidden">
    <!-- 遮罩层 -->
    <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>

    <!-- 文字内容 -->
    <div v-fade-in class="relative z-10 text-center px-4 mb-32">
      <p class="max-w-2xl mx-auto text-white/90 font-medium tracking-widest text-lg drop-shadow-lg">
        拍死苍蝇时，苍蝇的本体并不会死亡。被拍死的不过是苍蝇这一现象。
      </p>
    </div>

    <!-- 底部按钮与动效 -->
    <div class="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <div class="relative flex justify-center items-center">
        <!-- 动效线：绝对定位，层级高于按钮，颜色相同 -->
        <div class="absolute -top-24 w-[2px] h-64 overflow-hidden pointer-events-none z-30">
          <div class="w-full h-16 bg-[#b2252e] animate-scroll-drop mx-auto"></div>
        </div>
        
        <!-- 按钮 -->
        <a href="#story" @click="scrollToStory" class="relative z-20 block px-10 py-2 text-xs font-bold tracking-[0.3em] text-white bg-[#b2252e] hover:brightness-110 transition-all duration-300 rounded-none shadow-xl">
          SCROLL
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.animate-scroll-drop {
  animation: scrollDrop 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes scrollDrop {
  0% {
    transform: translateY(-100%);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  
  /* 快速入场直到接近中心 */
  30% {
    transform: translateY(100%);
  }

  /* 缓慢定位到完全重叠 (125%) */
  40% {
    transform: translateY(125%);
  }

  /* 停留 */
  60% {
    transform: translateY(125%);
    opacity: 1;
  }

  /* 快速离场 */
  100% {
    transform: translateY(400%);
    opacity: 0;
  }
}
</style>
