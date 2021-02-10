import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import inscription from '@/components/inscription'
import connexion from '@/components/connexion'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
