import Vue from 'vue'
import VueRouter from 'vue-router'
import swiper from '../views/swiper.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'swiper',
    component: swiper
  },
]

const router = new VueRouter({
  routes
})

export default router
