import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// import TaskFormView from "../views/TaskFormView.vue";
import TaskView from "../views/TaskView.vue";
import TaskEdit from "@/views/TaskEdit.vue";
import HomePage from "../views/HomePage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/tasks/create",
    name: "createTask",
    component: TaskView,
  },
  {
    path: "/tasks/:id/edit",
    name: "task-edit",
    component: TaskEdit,
    props: true,
  },
  {
    path: "/task/:id",
    name: "task",
    component: TaskView,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
