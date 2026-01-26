<script setup>
const contacts = [
  {
    type: 'QQ Group',
    name: '交流群',
    value: '853188814',
    desc: '点击加入或搜索群号',
    url: 'https://qm.qq.com/q/fbh5t1FwOs', // Note: This is a placeholder URL structure, actual might differ but this is common
    icon: 'qq'
  }
]
</script>

<template>
  <section id="contact" class="mx-auto max-w-7xl px-4 md:px-6 py-24 relative overflow-hidden">
    <h2 v-fade-in
      class="relative z-10 text-3xl md:text-4xl font-display font-bold mb-24 text-center tracking-widest text-[#b2252e] animate-text-glow">
      <span class="border-b-2 border-[#b2252e] pb-2">CONTACT US</span>
    </h2>

    <div class="flex justify-center relative z-10">
      <div v-fade-in:zoom="{ delay: 100 }"
        class="bg-black/60 border border-white/10 p-10 rounded-lg hover:border-[#b2252e]/50 transition-all duration-500 group max-w-2xl w-full hover-lift backdrop-blur-sm">
        <div class="flex flex-col md:flex-row items-center gap-8">
          <!-- Icon -->
          <div v-magnetic="0.2"
            class="w-20 h-20 flex items-center justify-center rounded-full bg-white/5 group-hover:bg-[#b2252e]/20 transition-all duration-500 shrink-0 group-hover:scale-110 relative">
            <div class="absolute inset-0 rounded-full animate-glow-pulse opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <svg class="w-10 h-10 fill-current text-white group-hover:text-[#b2252e] transition-colors relative z-10"
              viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" />
            </svg>
          </div>

          <!-- Info -->
          <div class="text-center md:text-left flex-grow">
            <h3 class="text-2xl font-display font-bold text-white mb-2 tracking-wider">{{ contacts[0].name }}</h3>
            <p class="text-3xl font-mono font-bold text-[#b2252e] mb-2 tracking-widest animate-text-glow">{{ contacts[0].value }}</p>
            <p class="text-gray-400 font-serif text-sm">{{ contacts[0].desc }}</p>
          </div>

          <!-- Action -->
          <a :href="contacts[0].url" target="_blank" v-magnetic="0.15"
            class="px-8 py-3 bg-white/5 hover:bg-[#b2252e] border border-white/20 hover:border-[#b2252e] text-white transition-all duration-300 text-sm tracking-widest font-bold whitespace-nowrap hover-bounce animate-shimmer relative overflow-hidden">
            加入群组
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
