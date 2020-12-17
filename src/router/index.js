import Vue from 'vue'
import Router from 'vue-router'
//Auth routes
import authRouts from '../components/Auth/auth-routs.js';
//not found
import NotFound from "../components/404/NotFound";
//User routes
import userRoutes from '../components/User/user-routes.js';

Vue.use(Router)

// import VeeValidate from "vee-validate";
// Vue.use(VeeValidate);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',

    },
    ...authRouts,
    ...userRoutes,
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
