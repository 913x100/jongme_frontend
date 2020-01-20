import Vue from "vue";
import Router from "vue-router";

import store from "@/store";

import { config } from "@/config";

Vue.use(Router);

const ifAuthenticated = (to, from, next) => {
  if (store.getters.isLoggedIn) {
    next();
    return;
  }
  next("/login");
};

const ifSelectedPage = (to, from, next) => {
  if (!store.getters.isLoggedIn) {
    next("/login");
    return;
  }
  if (store.getters.isPageLoggedIn) {
    next();
    return;
  }
  next("/select");
};

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/DashboardLayout"),
      children: [
        {
          path: "/dashboard",
          component: () => import("@/pages/Dashboard")
        },
        {
          path: "/setting/1",
          component: () => import("@/pages/Setting-1")
        },
        {
          path: "/setting/2",
          component: () => import("@/pages/Setting-2")
        },
        {
          path: "/setting/3",
          component: () => import("@/pages/Setting-3")
        }
      ],
      beforeEnter: ifSelectedPage
    },
    {
      path: "/select",
      component: () => import("@/pages/PageSelect"),
      beforeEnter: ifAuthenticated
    },
    {
      path: "/login",
      component: () => import("@/pages/Login")
    },
    {
      path: "/auth",
      beforeEnter: to => {
        if (to.query.code) {
          store.dispatch("login", to.query.code).then(res => {
            opener.postMessage(res, config.appUrl);
            window.close();
          });
        }
      }
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (store.getters.isLoggedIn) {
//       next("/dashboard");
//       return;
//     }
//     next("/login");
//   } else {
//     next();
//   }
// });

export default router;
