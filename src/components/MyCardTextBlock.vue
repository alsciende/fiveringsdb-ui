<template>
  <p class="card-text">
    <my-card-text v-bind:text="text"></my-card-text>
  </p>
</template>

<script>
import MyCardText from './MyCardText';

export default {
  name: 'my-card-text-block',
  props: ['text'],
  components: {
    MyCardText,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
