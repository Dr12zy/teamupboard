import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/home/Home.vue'
import Register from '../views/register/Register.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
