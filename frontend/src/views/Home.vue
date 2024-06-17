<template>
  <div>
    <h1>Home</h1>
    <TaskList />
  </div>
</template>

<script>
import TaskList from "@/components/TaskList.vue";

export default {
  components: {
    TaskList,
  },
};
</script>
