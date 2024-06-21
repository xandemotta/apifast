// import Vue from "vue";
// import VueRouter, { RouteConfig } from "vue-router";

// // import TaskFormView from "../views/TaskFormView.vue";
// import TaskForm from "../views/TaskForm.vue";
// import TaskEdit from "@/views/TaskEdit.vue";
// import HomePage from "../views/HomePage.vue";
// // import TaskList from "../views/TaskList.vue";

// Vue.use(VueRouter);

// const routes: Array<RouteConfig> = [
//   {
//     path: "/tasks/create",
//     name: "createTask",
//     component: TaskForm,
//   },
//   {
//     path: "/tasks/:id/edit",
//     name: "task-edit",
//     component: TaskEdit,
//     props: true,
//   },
//   {
//     path: "/task/:id",
//     name: "task",
//     component: TaskForm,
//   },
//   {
//     path: "/",
//     name: "HomePage",
//     component: HomePage,
//   },
//   // {
//   //   path: "/tasks",
//   //   name: "TaskList",
//   //   component: TaskList,
//   // },
// ];

// const router = new VueRouter({
//   mode: "history",
//   base: process.env.BASE_URL,
//   routes,
// });

// export default router;

import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import TaskForm from "../views/TaskForm.vue";
import TaskEdit from "@/views/TaskEdit.vue";
import HomePage from "../views/HomePage.vue";
import TaskList from "../components/TaskList.vue"; // Importando o componente TaskList

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/tasks/create",
    name: "createTask",
    component: TaskForm,
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
    component: TaskForm,
  },
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/tasks",
    name: "TaskList",
    component: TaskList,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
