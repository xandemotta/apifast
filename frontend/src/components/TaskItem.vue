<template>
  <div>
    <h3>{{ task.title }}</h3>
    <p>{{ task.description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    task: Object,
  },
};
</script>
