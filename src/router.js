import { createRouter, createWebHistory } from "vue-router";
import Home from '@/pages/Home.vue';

const routers = createRouter({
  history: createWebHistory(),
  routes: [
    { 
      path: '/', 
      name: 'home',
      component: Home,
      meta: { title: "Home — Novadesk" }
    },
    { 
      path: '/about', 
      name: 'about',
      component: () => import("@/pages/About.vue"),
      meta: { title: "About Us — Novadesk" }
    },
    { 
      path: '/services', 
      name: 'services',
      component: () => import("@/pages/Services.vue"),
      meta: { title: "Services — Novadesk" }
    },
    { 
      path: '/cases', 
      name: 'cases',
      component: () => import("@/pages/Cases.vue"),
      meta: { title: "Cases — Novadesk" }
    },
    { 
      path: '/contacts', 
      name: 'contacts',
      component: () => import("@/pages/Contacts.vue"),
      meta: { title: "Contacts — Novadesk" }
    },
    { 
      path: '/:pathMatch(.*)*', 
      redirect: '/' 
    }
  ]
});

export default routers;
