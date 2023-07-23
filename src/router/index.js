import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/ListView.vue";

import CardLinkView from "../views/CafeLinkView.vue";

const routes = [
  {
    path: "/",
    component: ListView,
  },

  {
    path: "/:id",
    name: "placeItem",
    component: CardLinkView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;