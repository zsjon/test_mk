import './assets/main.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

import App from './App.vue'
import router from './router'
import { SportagramPreset } from './styles/preset'

const app = createApp(App)

app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: SportagramPreset,
    options: {
      darkModeSelector: '.app-dark',
      cssLayer: { name: 'primevue', order: 'theme, base, primevue' },
    },
  },
})

app.mount('#app')
