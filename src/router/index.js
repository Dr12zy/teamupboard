import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: { hidden: true, title: '登录' },
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/home/Home.vue'),
    meta: { hidden: true, title: '主页' },
  }, {
    path: '/register',
    name: 'Register',
    component: () => import('../views/register/Register.vue'),
    meta: { hidden: true, title: '注册' },
  }, {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/Login.vue'),
    meta: { hidden: true, title: '登录' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/settings/Settings.vue'),
    meta: { hidden: true, title: '个人设置' },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
