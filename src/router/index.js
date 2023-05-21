import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { useMainStore } from "@/store/MainStore.js";

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
    path: "/impressum",
    name: "impressum",
    component: () => import("../views/ImpressumView.vue"),
  },
  {
    path: "/months",
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
    path: "/sorting/:group",
    name: "sorting",
    component: () => import("../views/SingleSortView.vue"),
  },
  {
    path: "/singlemonth/:month",
    name: "singlemonth",
    component: () => import("../views/SingleMonthView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(() => {
  const store = useMainStore();
  store.menuActive = false;
});
export default router;
