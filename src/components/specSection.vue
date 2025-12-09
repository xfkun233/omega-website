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
  <section id="spec" class="mx-auto max-w-7xl px-4 md:px-6 py-24 relative overflow-hidden">
    <h2 v-fade-in class="relative z-10 text-3xl md:text-4xl font-display font-bold mb-24 text-center tracking-widest text-[#b2252e]">
      <span class="border-b-2 border-[#b2252e] pb-2">PRODUCT SPEC</span>
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 relative z-10">
      <!-- 左侧：产品信息 -->
      <div v-fade-in class="space-y-8">
        <h3 class="text-xl font-display font-bold text-white tracking-widest border-l-4 border-[#b2252e] pl-4 flex items-center">
          PRODUCT INFO
          <span class="ml-4 h-[1px] flex-grow bg-white/10"></span>
        </h3>
        <div class="border-t border-b border-white/10">
          <div v-for="(item, index) in productInfo" :key="item.k" 
               class="flex items-start justify-between px-2 py-4 border-white/5 group hover:bg-white/[0.02] transition-colors"
               :class="{ 'border-b': index !== productInfo.length - 1 }">
            <span class="text-[#b2252e] font-display text-base tracking-wider font-bold pt-1">{{ item.k }}</span>
            <span class="text-gray-300 font-serif text-lg text-right leading-relaxed" v-html="item.v"></span>
          </div>
        </div>
      </div>

      <!-- 右侧：运行环境 -->
      <div v-fade-in class="space-y-8">
        <h3 class="text-xl font-display font-bold text-white tracking-widest border-l-4 border-gray-500 pl-4 flex items-center">
          SYSTEM REQ
          <span class="ml-4 h-[1px] flex-grow bg-white/10"></span>
        </h3>
        <div class="border-t border-b border-white/10">
          <div v-for="(item, index) in systemReq" :key="item.k" 
               class="flex items-start justify-between px-2 py-4 border-white/5 group hover:bg-white/[0.02] transition-colors"
               :class="{ 'border-b': index !== systemReq.length - 1 }">
            <span class="text-gray-500 font-display text-base tracking-wider font-bold pt-1">{{ item.k }}</span>
            <span class="text-gray-300 font-serif text-lg text-right leading-relaxed">{{ item.v }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 relative z-10">
      <!-- 左侧：制作团队 -->
      <div v-fade-in class="space-y-8">
        <h3 class="text-xl font-display font-bold text-white tracking-widest border-l-4 border-indigo-500 pl-4 flex items-center">
          STAFF
          <span class="ml-4 h-[1px] flex-grow bg-white/10"></span>
        </h3>
        <div class="border-t border-b border-white/10">
          <div v-for="(item, index) in staffInfo" :key="item.k" 
               class="flex items-start justify-between px-2 py-4 border-white/5 group hover:bg-white/[0.02] transition-colors"
               :class="{ 'border-b': index !== staffInfo.length - 1 }">
            <span class="text-indigo-400 font-display text-base tracking-wider font-bold pt-1">{{ item.k }}</span>
            <span class="text-gray-300 font-serif text-lg text-right leading-relaxed">{{ item.v }}</span>
          </div>
        </div>
      </div>

      <!-- 右侧：主题歌 -->
      <div v-fade-in class="space-y-8">
        <h3 class="text-xl font-display font-bold text-white tracking-widest border-l-4 border-amber-500 pl-4 flex items-center">
          THEME SONG
          <span class="ml-4 h-[1px] flex-grow bg-white/10"></span>
        </h3>
        <div class="border-t border-b border-white/10">
          <div v-for="(item, index) in musicInfo" :key="item.k" 
               class="flex items-start justify-between px-2 py-4 border-white/5 group hover:bg-white/[0.02] transition-colors"
               :class="{ 'border-b': index !== musicInfo.length - 1 }">
            <span class="text-amber-500 font-display text-base tracking-wider font-bold pt-1">{{ item.k }}</span>
            <span class="text-gray-300 font-serif text-lg text-right leading-relaxed">{{ item.v }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
