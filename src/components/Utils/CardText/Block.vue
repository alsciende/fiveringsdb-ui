<template>
  <p class="card-text">
    <utils-card-text-inline v-bind:text="text"></utils-card-text-inline>
  </p>
</template>

<script>
import UtilsCardTextInline from '@/components/Utils/CardText/Inline';

export default {
  name: 'utils-card-text-block',
  props: ['text'],
  components: {
    UtilsCardTextInline,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
