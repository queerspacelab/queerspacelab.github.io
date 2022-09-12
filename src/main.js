import Vue from 'vue'
import VueRouter from "vue-router";
import VueCookie from "vue-cookie";
// import VueLazyLoad from "vue-lazyload";

import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueCookie);
// Vue.use(VueLazyLoad);

export const router = new VueRouter({
  routes: [
    { path: "/", component: () => import("./views/Home.vue"), props: true, name: 'home'},
    { path: "/:page", component: () => import("./views/Home.vue"), props: true, name: 'page'},
    { path: "/project/:project", component: () => import("./views/Home.vue"), props: true, name: 'project'}
  ],
  strict: true,
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
