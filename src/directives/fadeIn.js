export default {
  mounted(el) {
    el.classList.add('opacity-0','translate-y-4','transition-all','duration-700')
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.classList.remove('opacity-0','translate-y-4')
          el.classList.add('opacity-100','translate-y-0')
          io.unobserve(el)
        }
      })
    }, { threshold: 0.15 })
    io.observe(el)
    el.__io = io
  },
  unmounted(el) {
    if (el.__io) el.__io.disconnect()
  },
}
