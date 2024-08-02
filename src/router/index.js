import { createRouter, createWebHistory } from 'vue-router'
import VideoUnico from '@/components/VideoUnico.vue'
import HomeView from '@/components/PaginaPrincipal.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/videos',
      name: 'videos',
      component: VideoUnico
    }
  ]
})

export default router
