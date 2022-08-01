import { createRouter, createWebHistory } from 'vue-router'
import PersonalAccountView from '../views/PersonalAccountView.vue'
import AuthView from '../views/AuthView.vue'

const routes = [
  {
    path: '/',
    name: 'auth',
    component: AuthView
  },
  {
    path: '/pa',
    name: 'personal acc',

    component: PersonalAccountView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
