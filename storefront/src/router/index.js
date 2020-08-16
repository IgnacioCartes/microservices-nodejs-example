import Vue from 'vue'
import VueRouter from 'vue-router'
import AsyncComputed from 'vue-async-computed';

import CatalogView from '../views/Catalog.vue'

Vue.use(VueRouter);
Vue.use(AsyncComputed);

const routes = [
  {
    path: '/',
    name: 'Catalog',
    component: CatalogView
  },
  {
    path: '/cart',
    name: 'Cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
    }
];

const router = new VueRouter({
  routes
});

export default router;
