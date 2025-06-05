import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'inicio',
    component: HomeView
  },
  {
    path: '/help',
    name: 'help',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/HelpMe.vue')
    }
  },

 {
    path: '/cart',
    name: 'cart',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Cart.vue')
    }
  },

  {
    path: '/woman',
    name: 'woman',
    
    component: function () {
      return import('../views/Woman.vue')
    }
  },

  {
    path: '/man',
    name: 'man',
   
    component: function () {
      return import( '../views/Man.vue')
    }
  },
{
    path: '/juvenile',
    name: 'juvenile',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Juvenile.vue')
    }
  },

  {
    path: '/accessories',
    name: 'acessories',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Accessories.vue')
    }
  },

  {
   path: '/register',
   name: 'register',
   
   component: function () {
      return import( '../views/Register.vue')
    }
   },

    {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/Login.vue')
    }
  },


  {
    path: '/search',
    name: 'search',
    
    component: function () {
      return import('../views/Pesquisa.vue')
    }
  },

]

const router = new VueRouter({
  routes
})

export default router
