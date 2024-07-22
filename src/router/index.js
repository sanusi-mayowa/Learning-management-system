// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import Signin from '@/views/Signin.vue';
import Signup from '@/views/Signup.vue';
import ForgotPassword from '@/views/ForgotPassword.vue';
import Home from '@/views/Home.vue';
import Courses from '@/views/Courses.vue';
// import Projects from '@/views/Projects.vue';

const routes = [
  {
    path: '/',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Signin',
        component: Signin,
        meta: { title: 'Sign In' }
      },
    ],
  },
  {
    path: '/signup',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'Signup',
        component: Signup,
        meta: { title: 'Sign Up' }
      },
    ],
  },
  {
    path: '/forgotpassword',
    component: AuthLayout,
    children: [
      {
        path: '',
        name: 'ForgotPassword',
        component: ForgotPassword,
        meta: { title: 'Forgot Password' }
      },
    ],
  },
  {
    path: '/home',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home,
        meta: { title: 'Dashboard' }
      },
    ],
  },
  {
    path: '/courses',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'Courses',
        component: Courses,
        meta: { title: 'Courses' }
      },
    ],
  },
  // {
  //   path: '/projects',
  //   component: DefaultLayout,
  //   children: [
  //     {
  //       path: '',
  //       name: 'Projects',
  //       component: Projects,
  //       meta: { title: 'Projects' }
  //     },
  //   ],
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
