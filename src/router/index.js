import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/new',
    name: 'new-data',
    component: () => import(/* webpackChunkName: "about" */ '../views/CreateData.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit-data',
    component: () => import('../components/EditData.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
