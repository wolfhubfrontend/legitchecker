import Vue from 'vue'
import Router from 'vue-router'

import HomePage from '../pages/home.vue'
import CheckerPage from '../pages/checker.vue'
import RegisterPage from '../pages/register.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/checker',
      name: 'Checker',
      component: CheckerPage
    },
    {
      path: '/register',
      name: 'Register',
      component: RegisterPage
    }
  ]
})
