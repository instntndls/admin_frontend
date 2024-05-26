import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/App/HomeView.vue'
import AppView from "@/views/AppView.vue"
import LoginView from "@/views/LoginView.vue"
import InterestsView from "@/views/App/InterestsView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/app',
      name: 'app',
      component: AppView,
      redirect: '/app/home',
      children: [
        {
          path: '/app/interests',
          name: 'interests',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: InterestsView,
          props: true,
          children: [
            {
              path: ':id',
              name: 'interest',
              component: InterestsView
            }
          ]
        },
        {
          path: '/app/home',
          name: 'home',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: HomeView
        },
        {
          path: '/app/reports',
          name: 'reports',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/App/ReportsView.vue')
        },
        {
          path: '/app/api',
          name: 'api',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/App/ApiView.vue')
        }
      ]
    },
  ]
})

export default router
