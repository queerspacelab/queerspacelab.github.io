import Vue from 'vue'
import Router from "vue-router";
import VueCookie from "vue-cookie";

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Router);
Vue.use(VueCookie);

// function loadView(view) {
//   return () => import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
// }
function getIsMobileDevice() {
  return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
}

export const router = new Router({
  // mode: "history",
  data: () => {
    return {
      isMobileDevice: getIsMobileDevice(),
    }
  },
  routes: [
    {
      path: "/", props: {default: true, header: true}, name: 'home',
      components: {
        default: () => import("@/views/Home.vue"),
        pages: () => {
            if (!this.isMobileDevice) import("@/views/Pages.vue")
          },
        }
    },
    {
      path: "/:page", props: true, name: 'page',
      components: {
        default: () => import("@/views/Home.vue"),
        pages: () => import("@/views/Pages.vue"),
      }
    },
    {
      path: "/project/:project", props: true, name: 'project',
      components: {
        default: () => import("@/views/Home.vue"),
        projects: () => import("@/views/ProjectView.vue"),
      }
    }
  ],
  strict: true,
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
