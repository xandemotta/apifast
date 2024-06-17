import Vue from "vue";
import Router from "vue-router";
import TaskList from "../views/TaskList.vue";
import TaskForm from "../views/TaskForm.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "TaskList",
      component: TaskList,
    },
    {
      path: "/task-form/:id?",
      name: "TaskForm",
      component: TaskForm,
    },
  ],
});
