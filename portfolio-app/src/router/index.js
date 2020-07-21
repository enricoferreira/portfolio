import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter) 

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [    
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: ()=>import('../views/About.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: ()=>import('../views/Projects.vue')
    },
    {
      path: '/experiences',
      name: 'experiences',
      component: ()=>import('../views/Experiences.vue')
    },
    {
      path: '/graduated',
      name: 'graduated',
      component: ()=>import('../views/Graduated.vue')
    },
    {
      path: '/courses',
      name: 'courses',
      component: ()=>import('../views/Courses.vue')
    },

  ]
})

export default router
