import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Categories from '@/views/categories.vue'
import Playlist from '@/views/playlist.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App
    },
    {
      path: '/categories',
      name: 'categories',
      component: Categories
    },    
    {
      path: '/playlist',
      name: 'playlist',
      component: Playlist
    },
  ]
})

export default router
