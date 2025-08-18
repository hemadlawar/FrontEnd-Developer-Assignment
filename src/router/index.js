import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Favorite from "../views/Favorite.vue";
import Cart from "../views/Cart.vue";
import itemDetail from "../views/itemDetail.vue";

const routes = [
  { path: "/home", component: Home },
  { path: "/favorite", component: Favorite },
  { path: "/cart", component: Cart },
  { path: "/item/:id", component: itemDetail, props: true },
  { path: "/", redirect: "/home" },
];

// Create router instance
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
