<script setup>
const scrollToTop = (e) => {
  e.preventDefault()
  document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <footer id="footer" class="mx-auto max-w-6xl px-4 md:px-6 py-12 scroll-mt-24">
    <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-white/60">
      <p>Copyright (C) nekobanana All Rights Reserved.</p>
      <div class="flex gap-4">
        <span>QQ群：853188814</span>
        <a href="#top" @click="scrollToTop" class="hover:text-white">回到顶部</a>
      </div>
    </div>
  </footer>
</template>
