<script setup>
import { ref, onMounted } from 'vue'

const scrollToStory = (e) => {
  e.preventDefault()
  document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })
}

const videos = ref([
  {
    bvid: 'BV1NrqNBnEiz',
    url: 'https://www.bilibili.com/video/BV1NrqNBnEiz',
    cover: 'https://i0.hdslb.com/bfs/archive/a4ca46c000a06c0a762a356bdf763e47c8e42bf9.jpg',
    title: 'PV1'
  },
  {
    bvid: 'BV1W1qNBmEA4',
    url: 'https://www.bilibili.com/video/BV1W1qNBmEA4',
    cover: 'https://i1.hdslb.com/bfs/archive/81ca257b49743a605d22f56a5a3bda37cf924caa.jpg',
    title: 'PV2'
  },
  {
    bvid: 'BV1W1qNBmE28',
    url: 'https://www.bilibili.com/video/BV1W1qNBmE28',
    cover: 'https://i0.hdslb.com/bfs/archive/a03faf52ccb8807ee43d154c3d365386015d2094.jpg',
    title: 'PV3'
  }
])
onMounted(() => {
  // fetchBilibiliCovers()
})
</script>
<template>
  <section id="top"
    class="relative h-screen md:min-h-screen flex flex-col items-center justify-center bg-[#ed9ea0] bg-[url('/title_m.jpg')] md:bg-[url('/title.jpg')] bg-contain md:bg-cover bg-center bg-no-repeat overflow-hidden">
    <!-- 遮罩层 -->
    <div class="absolute inset-0 bg-black/20 pointer-events-none"></div>

    <!-- 文字内容 -->
    <div v-fade-in class="relative z-10 text-center px-4 mb-32">
      <!-- <p class="max-w-2xl mx-auto text-white/90 font-medium tracking-widest text-lg drop-shadow-lg">
        拍死苍蝇时，苍蝇的本体并不会死亡。被拍死的不过是苍蝇这一现象。
      </p> -->
    </div>
    <!-- PC端右侧视频链接 -->
    <div class="hidden md:flex absolute left-6 top-10 bottom-20 flex-col justify-center gap-[2vh] z-30">
      <a v-for="video in videos" :key="video.bvid" :href="video.url" target="_blank" rel="noopener noreferrer"
        class="group relative w-[18vw] max-w-85 min-w-40 aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 border-2 border-white/30 hover:border-white/60">
        <img :src="video.cover" :alt="video.title" referrerpolicy="no-referrer" class="w-full h-full object-cover" />
        <div
          class="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <div
            class="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg class="w-5 h-5 text-[#b2252e] ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
          <!-- <p class="text-white text-xs font-medium truncate">{{ video.title }}</p> -->
        </div>
      </a>
    </div>

    <!-- 右侧片尾风格文字 -->
    <div class="hidden md:flex absolute right-6 top-[8%] bottom-[5%] z-20 items-center gap-3 flex-row-reverse">
      <div
        class="vertical-text text-white text-responsive tracking-[0.2em] leading-normal font-medium select-none subtitle-stroke h-full flex items-end ">
        ※本書に描かれし事柄は、
      </div>
      <div
        class="vertical-text text-white text-responsive tracking-[0.2em] leading-normal font-medium select-none subtitle-stroke h-full flex items-center">
        かつて、ボートの上で『彼女』の為にかたられた即興の物語、
      </div>
      <div
        class="vertical-text text-white text-responsive tracking-[0.2em] leading-normal font-medium select-none subtitle-stroke h-full flex items-center">
        『彼』の描いた夢想の言葉遊び、
      </div>
      <div
        class="vertical-text text-white text-responsive tracking-[0.2em] leading-normal font-medium select-none subtitle-stroke h-full flex items-start">
        二人にとっての単なる無聊の慰めかも知れない︱︱
      </div>
    </div>
    <!-- 底部按钮与动效 -->
    <div class="absolute bottom-[8%] left-1/2 -translate-x-1/2 flex flex-col items-center z-20">
      <div class="relative flex justify-center items-center">
        <!-- 动效线：绝对定位，层级高于按钮，颜色相同 -->
        <div class="absolute -top-24 w-[2px] h-64 overflow-hidden pointer-events-none z-30">
          <div class="w-full h-16 bg-[#b2252e] animate-scroll-drop mx-auto"></div>
        </div>

        <!-- 按钮 -->
        <a href="#story" @click="scrollToStory"
          class="relative z-20 block px-6 py-2 text-xs font-bold tracking-[0.3em] text-white bg-[#b2252e] hover:brightness-110 transition-all duration-300 rounded-none shadow-xl">
          SCROLL
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.vertical-text {
  writing-mode: vertical-rl;
  text-orientation: mixed;
}

.text-responsive {
  font-size: clamp(1.25rem, 3vh, 2rem);
}

.subtitle-stroke {
  text-shadow:
    -1px -1px 0 rgba(0, 0, 0, 0.8),
    1px -1px 0 rgba(0, 0, 0, 0.8),
    -1px 1px 0 rgba(0, 0, 0, 0.8),
    1px 1px 0 rgba(0, 0, 0, 0.8),
    0 -1px 0 rgba(0, 0, 0, 0.8),
    0 1px 0 rgba(0, 0, 0, 0.8),
    -1px 0 0 rgba(0, 0, 0, 0.8),
    1px 0 0 rgba(0, 0, 0, 0.8);
}

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
