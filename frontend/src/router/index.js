import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Employees from "../views/Employees.vue";
import Assets from "../views/Assets.vue";
import References from "../views/References.vue";
import Report from "../views/Report.vue";

const routes = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/employees",
    name: "Employees",
    component: Employees,
  },
  {
    path: "/assets",
    name: "Assets",
    component: Assets,
  },
  {
    path: "/references",
    name: "References",
    component: References,
  },
  {
    path: "/report",
    name: "Report",
    component: Report,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
