<script setup>
import { ref } from 'vue'

const activeTab = ref('list') // 'list' or 'comments'

const staffList = [
  { role: '程序', name: '晓风君' },
  { role: '翻译', name: 'Labombina' },
  { role: '美工', name: 'ANX' },
  { role: '校对', name: 'Labombina，晓风君，米拉比利斯，\nNoëlle Kagamigawa' },
  { role: '测试', name: 'lastarc，源千雪，叮咚鸡，LightYuki，竹井塔人，龙宫蕾娜，神明吞噬者玖玖里' },
  { role: '监制', name: '晓风君' },
]

const staffComments = [
  {
    name: '张总',
    role: '程序',
    avatar: '/icon.png',
    comment: 'Omega的视界真是一个好游戏啊，大家一定要玩。Omega的视界真是一个好游戏啊，大家一定要玩。Omega的视界真是一个好游戏啊，大家一定要玩。Omega的视界真是一个好游戏啊，大家一定要玩。Omega的视界真是一个好游戏啊，大家一定要玩。Omega的视界真是一个好游戏啊，大家一定要玩。'
  },
  {
    name: '陈总',
    role: '翻译',
    avatar: '/icon.png',
    comment: '这是一段很长很长的感言，用来占位。'
  },
]
</script>

<template>
  <section id="l10n-staff" class="mx-auto max-w-7xl px-4 md:px-6 py-24 relative overflow-hidden min-h-[800px]">
    <h2 v-fade-in
      class="relative z-10 text-3xl md:text-4xl font-display font-bold mb-12 text-center tracking-widest text-[#b2252e]">
      <span class="border-b-2 border-[#b2252e] pb-2">L10N STAFF</span>
    </h2>

    <!-- Navigation Tabs -->
    <!-- <div class="relative z-10 flex justify-center mb-10 gap-8">
      <button @click="activeTab = 'list'"
        class="pb-2 text-lg font-display tracking-widest transition-all duration-300 relative group"
        :class="activeTab === 'list' ? 'text-white' : 'text-white/40 hover:text-white/70'">
        汉化团队
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#b2252e] transition-transform duration-300 origin-center"
          :class="activeTab === 'list' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'"></span>
      </button>
      <button @click="activeTab = 'comments'"
        class="pb-2 text-lg font-display tracking-widest transition-all duration-300 relative group"
        :class="activeTab === 'comments' ? 'text-white' : 'text-white/40 hover:text-white/70'">
        汉化感言
        <span class="absolute bottom-0 left-0 w-full h-0.5 bg-[#b2252e] transition-transform duration-300 origin-center"
          :class="activeTab === 'comments' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'"></span>
      </button>
    </div> -->

    <div class="relative z-10 max-w-5xl mx-auto">

      <!-- Staff List View -->
      <Transition name="fade" mode="out-in">
        <div v-if="activeTab === 'list'" key="list" class="flex flex-col items-center gap-12 md:gap-16 py-4">
          <div v-for="(item, index) in staffList" :key="index" class="flex flex-col items-center group">
            <h3 class="text-[#b02631] font-display text-xl md:text-xl tracking-[0.2em] font-bold uppercase mb-4 md:mb-6 relative">
              <span class="absolute -left-6 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-[#e03e4b]"></span>
              {{ item.role }}
              <span class="absolute -right-6 top-1/2 -translate-y-1/2 w-3 h-[2px] bg-[#e03e4b]"></span>
            </h3>
            
            <div class="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-4xl px-4">
              <span v-for="(name, nIndex) in item.name.split(/[、,]/)" :key="nIndex"
                class="whitespace-pre-line inline-block text-center text-2xl md:text-2xl lg:text-4xl font-serif text-white/80 tracking-wide hover:text-white hover:scale-105 transform transition-all duration-300 cursor-default">
                {{ name.trim() }}
              </span>
            </div>
          </div>
        </div>

        <!-- Staff Comments View -->
        <div v-else key="comments" class="space-y-12">
          <div v-for="(item, index) in staffComments" :key="index"
            class="relative bg-[#1a1a1a] p-5 md:p-10 border border-white/10 shadow-2xl max-w-4xl mx-auto">
            <!-- Paper texture overlay (simulated with noise/opacity) -->
            <div class="absolute inset-0 bg-white/[0.02] mix-blend-overlay pointer-events-none"></div>

            <div class="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-12 relative z-10">
              <!-- Left: Avatar -->
              <div class="flex-shrink-0 md:row-span-2 pb-4 md:pb-0">
                <div
                  class="w-16 h-16 md:w-40 md:h-40 rounded-full border-4 border-[#2a2a2a] overflow-hidden shadow-inner transition-all duration-700">
                  <img :src="item.avatar" :alt="item.name" class="w-full h-full object-cover" />
                </div>
              </div>

              <!-- Right: Info -->
              <div class="flex flex-col justify-center md:justify-start pb-4 md:pb-4 mb-0 md:mb-6 md:border-b md:border-white/10">
                <h3 class="text-xl md:text-2xl font-serif font-bold text-white tracking-widest mb-1 md:mb-2">{{ item.name }}</h3>
                <div class="text-[#b2252e] font-display text-base md:text-lg tracking-[0.2em] uppercase">{{ item.role }}</div>
              </div>

              <!-- Comment -->
              <div class="col-span-2 md:col-span-1 relative pt-4 md:pt-0 border-t border-white/10 md:border-t-0">
                <span class="hidden md:block absolute -top-4 -left-6 text-6xl text-white/5 font-serif select-none">“</span>
                <p class="text-gray-300 font-serif text-base md:text-lg leading-loose tracking-wide text-justify">
                  {{ item.comment }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Transition>

    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
