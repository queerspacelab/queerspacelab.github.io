import Vue from 'vue'
import VueRouter from "vue-router";
import VueCookie from "vue-cookie";

import App from './App.vue'
import Home from './views/Home.vue'

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueCookie);

export const router = new VueRouter({
  routes: [
    { path: "/", component: Home, props: true, name: 'home'},
    { path: "/:page", component: Home, props: true, name: 'page'},
    { path: "/project/:project", component: Home, props: true, name: 'project'}
  ],
  strict: true,
});

new Vue({
  el: "#app",
  router,
  render: (h) => h(App),
});
