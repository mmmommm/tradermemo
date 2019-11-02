import Vue from 'vue'
import VueRouter from 'vue-router'
import addMemo from '@/components/addMemo.vue'
import Home from '@/views/Home.vue'
import memoDetail from '@/components/memoDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/addMemo',
    name: 'add-memo',
    component: addMemo
  },
  {
    path: '/:memo',
    name: 'memo-detail',
    component: memoDetail
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
