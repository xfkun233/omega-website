<script setup>
const chapters = [
  {
    title: 'Omegaの視界 シキのはじまり／未解封のハコニハ',
    image: 'cover/omg_shiki_01.jpg',
    content: `主人公饭洼真言与自称美少女古书肆的宫冈门王水一同，前往北方的乡间“玄之森”。
在那里，宫冈命令他去调查疑似与谜之资料群《月狂跳》有关的 “御神体”以及当地的祭典。
调查途中，他遇到了自称是青梅竹马的贵奴，以及独眼少女冬夏，三人便开始一同进行调查。
在被饭洼本家的图谋所裹挟的同时，
真言等三人在冬夏的老家——三春家的仓库里看到的究竟是。

碎片化的信息。
逐渐扭曲的视野。

『他是雫。
令浑浊的深泥泛起涟漪，拨动停滞时间的指针。』

呜呼，

猫……`
  },
  {
    title: 'Omegaの視界 アキかけたシキのアイ',
    image: 'cover/omg_aki_01.jpg',
    content: `主人公饭洼真言与自称美少女古书肆的宫冈门王水一同，前往北方的乡间“玄之森”。
为了调查谜之资料群《月狂跳》，他与当地权贵三春家的女儿——金发碧眼的少女冬夏，以及随后接连出现的其他三春家相关人员一同行动。
然而与此同时，无论是与饭洼本家有牵连的人，甚至是他的朋友，都在真言的预料之外展现出了不可思议的动向。

当本应模糊暧昧的往昔记忆逐渐变得轮廓清晰之时， 他所窥见的究竟会是什么。

未解封的“匣子”正走向既解，在扭曲的视野中映出的，是猫。

『小真，现在的你，开心吗？』

我—— 

被迫面临抉择。`
  },
  {
    title: 'Omegaの視界 アキかけたシキのアイ：残',
    image: 'cover/omg_zan_01.jpg',
    content: `主人公饭洼真言与自称美少女古书肆的宫冈门王水一同，前往北方的乡间“玄之森”。
为了调查谜之资料群《月狂跳》，他与当地权贵三春家的女儿——金发碧眼的少女冬夏，以及随后接连出现的其他三春家相关人员一同行动。
然而与此同时，无论是与饭洼本家有牵连的人，甚至是他的朋友，都在真言的预料之外展现出了不可思议的动向。

平稳交流的日子不过是暂时的安宁。
有人追忆着往昔的美好时光。
看不到尽头的禁锢之日沉重地侵蚀着内心。

告白、黑白、酷薄。

那份告白，究竟是递来的<ruby>救<rt>最后</rt>赎<rt>通牒</rt></ruby>，
而赋予他的选择，对他而言太过，
惨烈，且残酷——`
  },
  {
    title: 'Omegaの視界 ～ミヨ オワレル シマイ トワ（●ｎｄ）～',
    image: 'cover/omg_miyo_01.jpg',
    content: `主人公饭洼真言与自称美少女古书肆的宫冈门王水一同，前往北方的乡间“玄之森”。
为了调查谜之资料群《月狂跳》，他与当地权贵三春家的女儿——金发碧眼的少女冬夏，以及随后接连出现的其他三春家相关人员一同行动。
然而与此同时，无论是与饭洼本家有牵连的人，甚至是他的朋友，都在真言的预料之外展现出了不可思议的动向。

若非第三者的目光将其揭露，
只要一直身在局中，
那些差异与缺失，
本该永远无法察觉——可为何？

无论是否要打开那只箱子，

箱中的内容，最终的结果，

早已注定。
答案，从一开始便已备好。

结束，而后——`
  }
]
</script>

<template>
  <section id="story" class="mx-auto max-w-6xl px-4 md:px-6 py-16 md:py-16 scroll-mt-[49px]">
    <h2 v-fade-in class="text-2xl md:text-3xl font-semibold mb-12 text-center">STORY</h2>
    
    <div class="space-y-24">
      <div v-for="(chapter, index) in chapters" :key="index" class="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
        <!-- 左侧图片 -->
        <div v-fade-in class="md:w-5/12 w-full shrink-0">
          <div class="overflow-hidden rounded-lg shadow-lg border border-white/10">
            <img :src="chapter.image" :alt="chapter.title" class="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
        
        <!-- 右侧文字 -->
        <div v-fade-in class="md:w-7/12 w-full space-y-6">
          <h3 class="text-xl font-bold text-indigo-300 border-b border-white/10 pb-2 inline-block">{{ chapter.title }}</h3>
          <p class="text-white/80 leading-relaxed whitespace-pre-line font-light tracking-wide" v-html="chapter.content">
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
