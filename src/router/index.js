import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/biocompost",
    name: "biocompost",
    component: () => import("../views/BiocompostView.vue"),
  },
  {
    path: "/weather",
    name: "weather",
    component: () => import("../views/WeatherView.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactView.vue"),
  },
  {
    path: "/months/:month",
    name: "months",
    component: () => import("../views/MonthsView.vue"),
  },
  {
    path: "/plant/:id",
    name: "plant",
    component: () => import("../views/PlantView.vue"),
  },

  {
    path: "/allplants",
    name: "allplants",
    component: () => import("../views/PlantsListView.vue"),
  },
  {
    path: "/match",
    name: "matches",
    component: () => import("../views/MatchView.vue"),
  },
  {
    path: "/sorting",
    name: "sorting",
    component: () => import("../views/SingleSortView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
