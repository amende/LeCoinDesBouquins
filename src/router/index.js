import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import test from '@/views/test'
import inscription from '@/views/inscription'
import connexion from '@/views/connexion'

// book
import bookCreate from '@/views/book/create'
import books from '@/views/book/list'
import book from '@/views/book/detail'

import Profile from '@/views/argon/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home },
    { path: '/profile', component: Profile },
    { path: '/bouton', component: test },
    { path: '/signup', component: inscription },
    { path: '/connexion', component: connexion },
    { path: '/book/create', component: bookCreate },
    { path: '/book', component: books },
    { path: '/book/:bok_id', component: book }
  ]
})
