import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
   
    path: '/',
    name: 'Home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/movie',
    name: 'Movie',
    component: () => import('../views/movie/index.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
