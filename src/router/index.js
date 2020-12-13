import Vue from 'vue'
import Router from 'vue-router'
//Auth routes
import authRouts from '../components/Auth/auth-routs.js';
//not found
import NotFound from "../components/404/NotFound";
import User from "../components/User";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',

    },
    ...authRouts,
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
