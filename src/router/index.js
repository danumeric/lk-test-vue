import { createRouter, createWebHashHistory } from 'vue-router'
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
//(process.env.BASE_URL)
const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
