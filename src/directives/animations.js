// 高级动画指令集

// 基础淡入 + 方向滑动
export const fadeIn = {
  mounted(el, binding) {
    const options = binding.value || {}
    const direction = options.direction || binding.arg || 'up' // up, down, left, right, zoom
    const delay = options.delay || 0
    const duration = options.duration || 800
    const distance = options.distance || 40

    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
      zoom: 'scale(0.9)',
      none: 'none'
    }

    el.style.opacity = '0'
    el.style.transform = transforms[direction] || transforms.up
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`
    el.style.transitionDelay = `${delay}ms`

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          el.style.opacity = '1'
          el.style.transform = 'translateY(0) translateX(0) scale(1)'
          io.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    
    io.observe(el)
    el.__fadeInIO = io
  },
  unmounted(el) {
    if (el.__fadeInIO) el.__fadeInIO.disconnect()
  }
}

// 视差滚动效果
export const parallax = {
  mounted(el, binding) {
    const speed = binding.value || 0.3
    const direction = binding.arg || 'y' // y or x

    function update() {
      const rect = el.getBoundingClientRect()
      const scrolled = window.innerHeight - rect.top
      const offset = scrolled * speed
      
      if (direction === 'y') {
        el.style.transform = `translateY(${offset}px)`
      } else {
        el.style.transform = `translateX(${offset}px)`
      }
    }

    function onScroll() {
      requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    el.__parallaxHandler = onScroll
  },
  unmounted(el) {
    if (el.__parallaxHandler) {
      window.removeEventListener('scroll', el.__parallaxHandler)
    }
  }
}

// 鼠标跟随倾斜效果
export const tilt = {
  mounted(el, binding) {
    const maxTilt = binding.value || 10
    const perspective = 1000
    
    el.style.transformStyle = 'preserve-3d'
    el.style.transition = 'transform 0.1s ease-out'

    function onMouseMove(e) {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const mouseX = e.clientX - centerX
      const mouseY = e.clientY - centerY
      
      const rotateX = (mouseY / (rect.height / 2)) * -maxTilt
      const rotateY = (mouseX / (rect.width / 2)) * maxTilt
      
      el.style.transform = `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }

    function onMouseLeave() {
      el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)'
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    el.__tiltMouseMove = onMouseMove
    el.__tiltMouseLeave = onMouseLeave
  },
  unmounted(el) {
    if (el.__tiltMouseMove) el.removeEventListener('mousemove', el.__tiltMouseMove)
    if (el.__tiltMouseLeave) el.removeEventListener('mouseleave', el.__tiltMouseLeave)
  }
}

// 打字机效果
export const typewriter = {
  mounted(el, binding) {
    const text = el.textContent
    const speed = binding.value || 50
    el.textContent = ''
    el.style.visibility = 'visible'
    
    let i = 0
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const timer = setInterval(() => {
            if (i < text.length) {
              el.textContent += text.charAt(i)
              i++
            } else {
              clearInterval(timer)
            }
          }, speed)
          io.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    
    io.observe(el)
    el.__typewriterIO = io
  },
  unmounted(el) {
    if (el.__typewriterIO) el.__typewriterIO.disconnect()
  }
}

// 数字计数动画
export const countUp = {
  mounted(el, binding) {
    const target = parseInt(el.textContent) || binding.value || 0
    const duration = binding.arg ? parseInt(binding.arg) : 2000
    const startTime = performance.now()
    
    el.textContent = '0'

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          function animate(currentTime) {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const easeProgress = 1 - Math.pow(1 - progress, 3) // easeOutCubic
            
            el.textContent = Math.floor(easeProgress * target)
            
            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }
          requestAnimationFrame(animate)
          io.unobserve(el)
        }
      })
    }, { threshold: 0.5 })
    
    io.observe(el)
    el.__countUpIO = io
  },
  unmounted(el) {
    if (el.__countUpIO) el.__countUpIO.disconnect()
  }
}

// 交错动画（用于列表）
export const stagger = {
  mounted(el, binding) {
    const children = el.children
    const delay = binding.value?.delay || 100
    const baseDelay = binding.value?.base || 0
    const direction = binding.arg || 'up'
    const distance = 30

    const transforms = {
      up: `translateY(${distance}px)`,
      down: `translateY(-${distance}px)`,
      left: `translateX(${distance}px)`,
      right: `translateX(-${distance}px)`,
    }

    Array.from(children).forEach((child, index) => {
      child.style.opacity = '0'
      child.style.transform = transforms[direction]
      child.style.transition = `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), transform 600ms cubic-bezier(0.16, 1, 0.3, 1)`
      child.style.transitionDelay = `${baseDelay + index * delay}ms`
    })

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          Array.from(children).forEach((child) => {
            child.style.opacity = '1'
            child.style.transform = 'translateY(0) translateX(0)'
          })
          io.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    
    io.observe(el)
    el.__staggerIO = io
  },
  unmounted(el) {
    if (el.__staggerIO) el.__staggerIO.disconnect()
  }
}

// 磁吸效果
export const magnetic = {
  mounted(el, binding) {
    const strength = binding.value || 0.3

    function onMouseMove(e) {
      const rect = el.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const deltaX = (e.clientX - centerX) * strength
      const deltaY = (e.clientY - centerY) * strength
      
      el.style.transform = `translate(${deltaX}px, ${deltaY}px)`
      el.style.transition = 'transform 0.2s ease-out'
    }

    function onMouseLeave() {
      el.style.transform = 'translate(0, 0)'
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
    }

    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)
    el.__magneticMove = onMouseMove
    el.__magneticLeave = onMouseLeave
  },
  unmounted(el) {
    if (el.__magneticMove) el.removeEventListener('mousemove', el.__magneticMove)
    if (el.__magneticLeave) el.removeEventListener('mouseleave', el.__magneticLeave)
  }
}

// 文字逐字渐显
export const textReveal = {
  mounted(el, binding) {
    const text = el.textContent
    const delay = binding.value?.delay || 30
    const stagger = binding.value?.stagger || 20
    
    el.innerHTML = ''
    el.style.visibility = 'visible'
    
    const chars = text.split('').map((char, i) => {
      const span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.style.opacity = '0'
      span.style.display = 'inline-block'
      span.style.transform = 'translateY(20px)'
      span.style.transition = `opacity 400ms ease, transform 400ms ease`
      span.style.transitionDelay = `${delay + i * stagger}ms`
      return span
    })
    
    chars.forEach(span => el.appendChild(span))

    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          chars.forEach(span => {
            span.style.opacity = '1'
            span.style.transform = 'translateY(0)'
          })
          io.unobserve(el)
        }
      })
    }, { threshold: 0.3 })
    
    io.observe(el)
    el.__textRevealIO = io
  },
  unmounted(el) {
    if (el.__textRevealIO) el.__textRevealIO.disconnect()
  }
}
