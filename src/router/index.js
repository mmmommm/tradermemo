import Vue from 'vue';
import VueRouter from 'vue-router';
import memoAdd from '@/views/memoAdd.vue';
import memoHome from '@/views/memoHome.vue';
import memoDetail from '@/components/memoDetail.vue';
import memoLogin from '@/views/memoLogin.vue';
import memoRegister from '@/views/memoRegister.vue';
// import store from '../store';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: memoHome
  },
  {
    path: '/memoAdd',
    name: 'memo-add',
    component: memoAdd
  },
  {
    path: '/memoLogin',
    name: 'memo-login',
    component: memoLogin
  },
  {
    path: '/memoRegister',
    name: 'memo-register',
    component: memoRegister
  },
  {
    path: '/:memo',
    name: 'memo-detail',
    component: memoDetail
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
