import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import Blog from '../components/Blog/Blog'
import About from '../components/About/About'
import Contact from '../components/Contact/Contact'
import PastClients from '../components/PastClients/PastClients'
import BlogPost from '../components/Blog/BlogPost/BlogPost'

Vue.use(VueRouter)

const routes = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }, {
    path: '/blog/:id',
    name: 'Blog',
    component: BlogPost
  }, {
    path: '/about',
    name: 'About',
    component: About
  }, {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }, {
    path: '/past-clients',
    name: 'Past Clients',
    component: PastClients
  }, {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
