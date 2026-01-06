<script setup>
const downloads = [
  {
    title: '汉化补丁',
    desc: '还没出，等我出了再更新，总之下面的按钮点了也没用',
    links: [
      { name: '百度网盘', url: '' },
      { name: 'Github Release', url: '' }
    ]
  }
]
</script>

<template>
  <section id="download" class="mx-auto max-w-7xl px-4 md:px-6 py-24 relative overflow-hidden bg-white/[0.02]">
    <h2 v-fade-in
      class="relative z-10 text-3xl md:text-4xl font-display font-bold mb-24 text-center tracking-widest text-[#b2252e]">
      <span class="border-b-2 border-[#b2252e] pb-2">DOWNLOAD</span>
    </h2>

    <div :class="[
      'gap-12 max-w-5xl mx-auto relative z-10',
      downloads.length === 1 ? 'flex justify-center' : 'grid grid-cols-1 md:grid-cols-2'
    ]">
      <div v-for="(item, index) in downloads" :key="index" v-fade-in
        class="bg-black/40 border border-white/10 p-8 rounded-lg hover:border-[#b2252e]/50 transition-colors group"
        :class="downloads.length === 1 ? 'w-full max-w-xl' : ''">
        <h3
          class="text-2xl font-display font-bold text-white mb-4 tracking-wider group-hover:text-[#b2252e] transition-colors">
          {{ item.title }}</h3>
        <p class="text-gray-400 mb-8 font-serif">{{ item.desc }}</p>

        <div class="flex flex-wrap gap-4">
          <a v-for="(link, lIndex) in item.links" :key="lIndex" :href="link.url || 'javascript:;'"
            @click="!link.url && $event.preventDefault()" :class="[
              'px-6 py-2 border border-white/20 text-white transition-all duration-300 text-sm tracking-widest',
              link.url
                ? 'hover:bg-[#b2252e] hover:border-[#b2252e]'
                : 'opacity-50 cursor-not-allowed'
            ]">
            {{ link.name }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>