<script setup>
const productInfo = [
  { k: '标题', v: 'Omegaの視界' },
  { k: '分级', v: '全年齢対象' },
  { k: '主题', v: '传奇系视觉小说' },
  { k: '媒介', v: 'CD-ROM / <a href="https://www.dlsite.com/home/work/=/product_id/RJ101805.html" target="_blank" class="text-indigo-400 hover:text-indigo-300 transition-colors border-b border-indigo-400/50 hover:border-indigo-300">Digital</a>' },
]

const systemReq = [
  { k: 'OS', v: 'Windows 2000及更高版本' },
  { k: 'CPU', v: 'Pentium4 3.0GHz以上' },
  { k: 'DISPLAY', v: '800×600及以上' },
  { k: 'MEMORY', v: '128MB以上' },
  { k: 'HDD', v: '512MB以上' },
]

const staffInfo = [
  { k: '企画', v: 'ねこバナナ' },
  { k: '原画', v: '閂夜明' },
  { k: '剧本', v: '天村血花' },
  { k: 'BGM', v: 'Manack' },
]

const musicInfo = [
  { k: '标题', v: 'ythm' },
  { k: '作曲・編曲', v: 'onoken' },
  { k: '作詞・Vocal', v: '三澤 秋' },
  { k: 'Performed', v: '久田 義明' },
]
</script>

<template>
  <section id="spec" class="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-16 scroll-mt-[49px]">
    <h2 v-fade-in class="text-2xl md:text-3xl font-semibold mb-12 text-center">SPEC</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-16">
      <!-- 左侧：产品信息 -->
      <div v-fade-in class="space-y-6">
        <h3 class="text-xl font-medium text-indigo-300 border-l-4 border-indigo-500 pl-4">产品信息</h3>
        <div class="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div v-for="(item, index) in productInfo" :key="item.k" 
               class="flex items-center justify-between px-4 py-4 border-white/10"
               :class="{ 'border-b': index !== productInfo.length - 1 }">
            <span class="text-white/60 font-medium min-w-[4rem]">{{ item.k }}</span>
            <span class="text-white/90 text-right" v-html="item.v"></span>
          </div>
        </div>
      </div>

      <!-- 右侧：运行环境 -->
      <div v-fade-in class="space-y-6">
        <h3 class="text-xl font-medium text-pink-300 border-l-4 border-pink-500 pl-4">运行环境</h3>
        <div class="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div v-for="(item, index) in systemReq" :key="item.k" 
               class="flex items-center justify-between px-4 py-4 border-white/10"
               :class="{ 'border-b': index !== systemReq.length - 1 }">
            <span class="text-white/60 font-medium min-w-[4rem]">{{ item.k }}</span>
            <span class="text-white/90 text-right">{{ item.v }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <!-- 左侧：制作团队 -->
      <div v-fade-in class="space-y-6">
        <h3 class="text-xl font-medium text-emerald-300 border-l-4 border-emerald-500 pl-4">制作团队</h3>
        <div class="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div v-for="(item, index) in staffInfo" :key="item.k" 
               class="flex items-center justify-between px-4 py-4 border-white/10"
               :class="{ 'border-b': index !== staffInfo.length - 1 }">
            <span class="text-white/60 font-medium min-w-[4rem]">{{ item.k }}</span>
            <span class="text-white/90 text-right">{{ item.v }}</span>
          </div>
        </div>
      </div>

      <!-- 右侧：主题歌 -->
      <div v-fade-in class="space-y-6">
        <h3 class="text-xl font-medium text-amber-300 border-l-4 border-amber-500 pl-4">主题歌</h3>
        <div class="overflow-hidden rounded-xl border border-white/10 bg-white/5">
          <div v-for="(item, index) in musicInfo" :key="item.k" 
               class="flex items-center justify-between px-4 py-4 border-white/10"
               :class="{ 'border-b': index !== musicInfo.length - 1 }">
            <span class="text-white/60 font-medium min-w-[4rem]">{{ item.k }}</span>
            <span class="text-white/90 text-right">{{ item.v }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
