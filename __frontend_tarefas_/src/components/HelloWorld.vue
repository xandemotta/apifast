<template>
  <div>
    <h1>{{ msg }}</h1>
    <button @click="increment">Increment</button>
    <p>Count: {{ count }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  get count() {
    return this.$store.state.count;
  }

  get msg() {
    return "Hello World!";
  }

  increment() {
    this.$store.dispatch("increment");
  }
}
</script>
