import { createRouter, createWebHistory } from 'vue-router'
import Signup from '@/pages/Signup.vue'
// import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: About
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
