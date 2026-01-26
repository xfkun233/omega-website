import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import { fadeIn, parallax, tilt, stagger, magnetic, textReveal } from './directives/animations.js'

const app = createApp(App)

// 注册动画指令
app.directive('fade-in', fadeIn)
app.directive('parallax', parallax)
app.directive('tilt', tilt)
app.directive('stagger', stagger)
app.directive('magnetic', magnetic)
app.directive('text-reveal', textReveal)

app.mount('#app')
