import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import test from '@/views/test'
import inscription from '@/views/inscription'
import connexion from '@/views/connexion'
import Profile from '@/views/argon/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/bouton',
      name: 'test',
      component: test
    },
    {
      path: '/signup',
      name: 'inscription',
      component: inscription
    },
    {
      path: '/connexion',
      name: 'connexion',
      component: connexion
    }
  ]
})
