import { createApp } from 'vue'
import App from './App.vue'
import routers from '@/router'
import store from './store'
import '@/assets/style/main.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'
import i18n from "@/i18n/i18n"


const app = createApp(App)
app.use(routers).use(store).use(i18n).mount('#app')

AOS.init({
    duration: 1200,
    easing: 'ease-out-cubic',
    once: false,
})

routers.afterEach(() => {
    AOS.refresh()
})