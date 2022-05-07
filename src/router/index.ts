import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const router: Array<RouteRecordRaw> = [
  { path: "/", component: () => import("../views/home/index.vue") },
];

const instance = createRouter({
  routes: router,
  history: createWebHashHistory(),
});

export default instance;
