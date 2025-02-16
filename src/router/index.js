import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Reservation from '../views/Reservation.vue';
import Management from '../views/Management.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresAuth: false }
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: Reservation,
    meta: { requiresAuth: true }
  },
  {
    path: '/management',
    name: 'Management',
    component: Management,
    meta: { requiresAuth: true, requiresAdmin: true }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.isAuthenticated;
  const isAdmin = store.state.isAdmin;

  if (to.meta.requiresAuth && !isAuthenticated) {
    next({ name: 'Login' });
  } else if (to.meta.requiresAdmin && !isAdmin) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;