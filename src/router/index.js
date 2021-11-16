import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login.vue"
import Register from "../views/Register.vue"
import Course from "../views/Course.vue"
import Checkout from "../views/Checkout.vue"
import Account from "../views/Account.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Register
  },
  {
    path: '/course',
    name: 'Course',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Course
  },
  {
    path: '/checkout',
    name: 'Checkout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Checkout
  },
  {
    path: '/search',
    name: 'Search',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Search.vue')
  },
  {
    path: '/profile',
    children:[
      {
        path: '/',
        name: 'EditProfile',
        
        component: () => import('../components/EditProfile.vue')
      },
      {
        path: 'course-info',
        name: "CourseInfo",
        component: () => import('../components/CourseInfo.vue')
      },
      {
        path: 'reserve',
        name: 'Reserve',
        component: () => import('../components/Reserve.vue')
      },
      {
        path: 'change-class',
        name: 'ChangeClass',
        component: () => import('../components/ChangeClass.vue')
      },
      {
        path: 'payment-history',
        name: 'PaymentHisotry',
        component: () => import('../components/PaymentHistory.vue')
      },
      {
        path: 'courses',
        name: 'Courses',
        component: () => import('../components/Courses.vue')
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Account
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
