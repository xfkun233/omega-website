<script setup>
import { ref } from 'vue'

const characters = [
  {
    id: 'miyaoka kadomi',
    name: '宮岡 門王水',
    desc: '掌管着真言打工的旧书店的少女。年龄不详。似乎也没有上学。真言被她（强行）拉着，两人一同前往了“玄之森”。',
    outfits: [
      'kadomi/kadomi_00_01_00.png',
      'kadomi/kadomi_s_00_00_00.png',
    ],
  },
  {
    id: 'kariya katsue',
    name: '狩屋 克杖',
    desc: '从初中开始就一直在田径部。不仅限于田径项目，她在各项身体技能上都十分优异。 学业方面也相当不错，可谓文武双全，成绩优异。',
    outfits: [
      'kariya/kariya_00.png',
      'kariya/kariya_form_00.png',
    ],
  },
  {
    id: 'miharu tōka',
    name: '三春 冬夏',
    desc: '金发碧眼，乍一看像个外国人，实际上双亲都是日本人。非常讨厌陈规陋习，但是在家里被强迫要表现得像个名门闺秀。',
    outfits: [
      'miharu/touka_true_00.png',
      'miharu/touka_true_nor_00.png',
    ],
  },
  {
    id: 'ayame kisama',
    name: '绫目 姫様',
    desc: '绫目三姐妹之一。万年归家部，长着三白眼，是个狂热的咖喱爱好者。和冬夏的关系算不上很好，处于一种本家与分家般的主仆关系。',
    outfits: [
      'ayame/ayame_00.png',
      'ayame/ayame_form_00.png',
    ],
  },
]

const currentVariants = ref(Object.fromEntries(characters.map(c => [c.id, 0])))
const touchStart = ref(0)

function setVariant (id, v) {
  currentVariants.value[id] = v
}

function handleClick (id, outfits) {
  const current = currentVariants.value[id]
  const nextIndex = (current + 1) % outfits.length
  setVariant(id, nextIndex)
}
</script>

<template>
  <section id="character" class="mx-auto max-w-7xl px-4 md:px-6 py-24 space-y-32 relative overflow-hidden">
    <h2 v-fade-in
      class="relative z-10 text-3xl md:text-4xl font-display font-bold text-center mb-24 tracking-widest text-[#b2252e]">
      <span class="border-b-2 border-[#b2252e] pb-2">CHARACTER</span>
    </h2>

    <div v-for="(c, index) in characters" :key="c.id" class="relative group/char">

      <div class="flex flex-col md:flex-row gap-8 md:gap-24 items-center relative z-10"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">

        <!-- 立绘区域 -->
        <div class="md:w-1/2 w-full relative" v-fade-in>
          <div
            class="relative overflow-hidden p-1 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
            @click="handleClick(c.id, c.outfits)">
            <div class="relative aspect-[3/4] w-full">
              <Transition name="fade" mode="out-in">
                <img :key="currentVariants[c.id]" :src="c.outfits[currentVariants[c.id]]" :alt="c.name"
                  class="w-full h-full object-contain object-bottom filter drop-shadow-2xl transition-all duration-500" />
              </Transition>
            </div>
          </div>
        </div>

        <!-- 文字区域 -->
        <div class="md:w-1/2 space-y-8" v-fade-in>
          <div class="space-y-4">
            <h3
              class="text-3xl md:text-5xl font-bold tracking-widest text-white font-serif border-l-8 border-[#b2252e] pl-4 md:pl-6 py-2">
              {{ c.name }}
            </h3>
            <div class="text-sm font-display tracking-[0.5em] text-white/40 uppercase pl-4 md:pl-8">{{ c.id }}</div>
          </div>
          <p
            class="text-gray-300 leading-loose text-base md:text-lg font-serif font-light text-justify pl-4 md:pl-8 border-l border-white/10">
            {{ c.desc }}
          </p>

          <!-- 差分切换指示器 -->
          <div class="pl-4 md:pl-8 flex gap-4 pt-4 flex-wrap">
            <div class="text-xs text-white/30 uppercase tracking-widest mb-2 self-center mr-2 w-full md:w-auto">Variation</div>
            <button v-for="(outfit, idx) in c.outfits" :key="idx"
              class="w-12 h-12 md:w-10 md:h-10 flex items-center justify-center text-sm font-display font-bold transition-all border border-white/30 hover:border-white hover:bg-white/10"
              :class="currentVariants[c.id] === idx ? 'bg-white text-black hover:bg-white' : 'text-white/50'"
              @click="setVariant(c.id, idx)">
              {{ idx + 1 }}
            </button>
          </div>
        </div>
      </div>
    </div>
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
</style>
