// src/store/index.ts
import Vue from "vue";
import Vuex from "vuex";
import { Task } from "@/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [] as Task[],
  },
  mutations: {
    SET_TASKS(state, tasks: Task[]) {
      state.tasks = tasks;
    },
    // ... other mutations for adding, updating, and deleting tasks
  },
  actions: {
    fetchTasks({ commit }) {
      // Use Axios to fetch tasks and commit to state
    },
    // ... other actions for adding, updating, and deleting tasks
  },
});
