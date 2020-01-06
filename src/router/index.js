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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  {path: '/login', name: 'login', component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')},
  {path: '/menuPage', name: 'menuPage', component: () => import(/* webpackChunkName: "menuPage" */ '../views/MenuPage.vue')}
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router
