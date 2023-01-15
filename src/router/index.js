import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import ProfileView from '../views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        requiresVisitor: true,
      },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        requiresVisitor: true,
      },
    },
    {
      path: '/my-profile',
      name: 'myprofile',
      component: ProfileView,
      meta: {
        requiresAuth: true,
      },
    },
  ]
});

router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem("token");
  if (to.matched.some((record) => record.meta.requiresAuth) && !loggedIn) {
    // Check auth pages
    next({ name: "login" });
  } else if (to.matched.some((rec) => rec.meta.requiresVisitor) && loggedIn) {
    next({ name: "home" });
  } else {
    next();
  }
});

export default router
