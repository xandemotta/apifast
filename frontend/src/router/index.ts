import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "../views/HomeView.vue";
import TaskListView from "../views/TaskListView.vue";
import TaskFormView from "../views/TaskFormView.vue";
import TaskView from "../views/TaskView.vue";
import TesteVue from "../components/TesteVue.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TaskListView,
  },
  {
    path: "/tasks/create",
    name: "createTask",
    component: TaskFormView,
  },
  {
    path: "/tasks/:id/edit",
    name: "editTask",
    component: TaskFormView,
    props: true,
  },
  {
    path: "/task/:id",
    name: "task",
    component: TaskView,
  },
  {
    path: "/teste",
    name: "TesteVue",
    component: TesteVue,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
