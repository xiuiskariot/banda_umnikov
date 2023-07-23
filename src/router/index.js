// import Vue from "vue";
// import VueRouter from "vue-router";

// import CafeList from "./views/CafeList.vue";
// import CafeCard from "./views/CafeCard.vue";
// Vue.use(VueRouter);


// const routes = [
//   {
//     path: "/",
//     component: CafeList,
//   },
//   {
//     path: "/cafe/:id", // Динамический сегмент в URL, позволяющий передавать уникальный идентификатор карточки
//     component: CafeCard,
//   },
// ];

// const router = new VueRouter({
//   routes,
// });

// export default router;

// Vue.use(VueRouter);

// const routes = [
//   { path: '/', component: CafeList },
//   { path: '/cafe/:cafeId', component: Cafe, props: true }
// ];

// const router = new VueRouter({
//   routes
// });

// export default router;


import { createRouter, createWebHistory } from "vue-router";
import ListView from "../views/HomeView.vue";

import CardView from "../views/PlaceView.vue";

const routes = [
  {
    path: "/",
    component: ListView,
  },

  {
    path: "/:id",
    name: "placeItem",
    component: CardView,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;