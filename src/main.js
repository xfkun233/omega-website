import { createApp } from 'vue'
import './assets/tailwind.css'
import App from './App.vue'
import fadeIn from './directives/fadeIn.js'

const app = createApp(App)
app.directive('fade-in', fadeIn)
app.mount('#app')
