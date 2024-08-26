import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "@/layouts/DefaultLayout.vue";
import AuthLayout from "@/layouts/AuthLayout.vue";
import Signin from "@/views/Signin.vue";
import Signup from "@/views/Signup.vue";
import ForgotPassword from "@/views/ForgotPassword.vue";
import Home from "@/views/Home.vue";
import Courses from "@/views/Courses.vue";
import Assignment from "@/views/Assignment.vue";
import TimeTable from "@/views/TimeTable.vue";
import Forum from "@/views/Forum.vue";
import Settings from "@/views/Settings.vue";

const routes = [
  {
    path: "/",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Signin",
        component: Signin,
        meta: { title: "Sign In" },
      },
    ],
  },
  {
    path: "/signup",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Signup",
        component: Signup,
        meta: { title: "Sign Up" },
      },
    ],
  },
  {
    path: "/forgotpassword",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "ForgotPassword",
        component: ForgotPassword,
        meta: { title: "Forgot Password" },
      },
    ],
  },
  {
    path: "/home",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Home",
        component: Home,
        meta: { title: "Dashboard" },
      },
    ],
  },
  {
    path: "/courses",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Courses",
        component: Courses,
        meta: { title: "My Courses" },
      },
    ],
  },
  {
    path: "/assignments",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Assignment",
        component: Assignment,
        meta: { title: "Assignment" },
      },
    ],
  },
  {
    path: "/timetable",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "TimeTable",
        component: TimeTable,
        meta: { title: "Time Table" },
      },
    ],
  },
  {
    path: "/settings",
    component: DefaultLayout,
    children: [
      {
        path: "",
        name: "Settings",
        component: Settings,
        meta: { title: "Settings" },
      },
    ],
  },
  {
    path: "/forum",
    component: AuthLayout,
    children: [
      {
        path: "",
        name: "Forum",
        component: Forum,
        meta: { title: "Forum" },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
