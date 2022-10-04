import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: { hidden: true, title: '登录' },
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
    meta: { hidden: true, title: '主页' },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
    meta: { hidden: true, title: '注册' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/settings/Settings.vue'),
    meta: { hidden: true, title: '个人设置' },
  },
  {
    path: '/published',
    name: 'Published',
    component: () => import('../views/deatils/Published.vue'),
    meta: { hidden: true, title: '个人发布' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const { isLogin } = localStorage
  const { name } = to
  const isLoginOrRegister = (name === 'Login' || name === 'Register');
  (isLogin || isLoginOrRegister) ? next() : next({ name: 'Login' })
})

export default router;
