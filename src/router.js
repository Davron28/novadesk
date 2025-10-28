import {createRouter, createWebHashHistory} from "vue-router";
import Home from '@/pages/Home.vue'

const routers = createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/about', name: 'about', component: () => import("@/pages/About.vue") },
        { path: '/services', name: 'services', component: () => import("@/pages/Services.vue") },
        { path: '/cases', name: 'cases', component: () => import("@/pages/Cases.vue") },
        { path: '/news', name: 'news', component: () => import("@/pages/News.vue") },
        { path: '/contacts', name: 'contacts', component: () => import("@/pages/Contacts.vue") },
    ]
})
export default routers