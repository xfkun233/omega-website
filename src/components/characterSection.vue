<script setup>
import { ref } from 'vue'

const characters = [
  {
    id: 'miyaoka',
    name: '宫冈 门王水',
    desc: '掌管着真言打工的旧书店的少女。年龄不详。似乎也没有上学。真言被她（强行）拉着，两人一同前往了“玄之森”。',
    outfits: [
      'kadomi/kadomi_00_01_00.png',
      'kadomi/kadomi_s_00_00_00.png',
    ],
  },
  {
    id: 'kariya',
    name: '狩屋 克杖',
    desc: '从初中开始就一直在田径部。不仅限于田径项目，她在各项身体技能上都十分优异。 学业方面也相当不错，可谓文武双全，成绩优异。',
    outfits: [
      'kariya/kariya_00.png',
      'kariya/kariya_form_00.png',
    ],
  },
  {
    id: 'miharu',
    name: '三春 冬夏',
    desc: '金发碧眼，乍一看像个外国人，实际上双亲都是日本人。非常讨厌陈规陋习，但是在家里被强迫要表现得像个名门闺秀。',
    outfits: [
      'miharu/touka_true_00.png',
      'miharu/touka_true_nor_00.png',
    ],
  },
  {
    id: 'ayame',
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
  <section id="character" class="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-16 space-y-24 scroll-mt-[49px]">
    <h2 v-fade-in class="text-2xl md:text-3xl font-semibold text-center mb-12">CHARACTER</h2>

    <div v-for="(c, index) in characters" :key="c.id" class="flex flex-col md:flex-row gap-8 md:gap-16 items-center"
      :class="{ 'md:flex-row-reverse': index % 2 !== 0 }">

      <!-- 立绘区域 -->
      <div class="md:w-1/2 w-full relative group" v-fade-in>
        <div
          class="relative overflow-hidden rounded-xl bg-gradient-to-b from-white/5 to-transparent p-4 transition-transform duration-500 hover:-translate-y-2"
          @click="handleClick(c.id, c.outfits)">
          <div class="relative aspect-[3/4] w-full">
            <Transition name="fade" mode="out-in">
              <img :key="currentVariants[c.id]" :src="c.outfits[currentVariants[c.id]]" :alt="c.name"
                class="w-full h-full object-cover object-top rounded-lg shadow-2xl" />
            </Transition>
          </div>
          <!-- 差分切换按钮 (悬浮显示) -->
          <div
            class="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 px-3 py-2 rounded-full backdrop-blur-sm">
            <button v-for="(outfit, idx) in c.outfits" :key="idx"
              class="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all border"
              :class="currentVariants[c.id] === idx ? 'bg-white text-black border-white scale-110' : 'bg-transparent text-white border-white/30 hover:bg-white/20'"
              @click="setVariant(c.id, idx)">
              {{ idx + 1 }}
            </button>
          </div>
        </div>
      </div>

      <!-- 文字区域 -->
      <div class="md:w-1/2 space-y-6" v-fade-in>
        <div class="space-y-2">
          <h3 class="text-3xl font-bold tracking-wider text-white">{{ c.name }}</h3>
          <div class="h-1 w-12 bg-indigo-500"></div>
        </div>
        <p class="text-white/80 leading-loose text-lg font-light text-justify">
          {{ c.desc }}
        </p>
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
