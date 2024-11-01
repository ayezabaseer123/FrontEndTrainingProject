import '@/style/theme.scss'
import '/node_modules/primeflex/primeflex.css' // CSS utility https://primeflex.org/
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from './i18n'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(PrimeVue)

app.mount('#app')
