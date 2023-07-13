import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/pages/index';

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/',
        component: Home,
        name: 'home-page'
      },
    ]
  });
}
