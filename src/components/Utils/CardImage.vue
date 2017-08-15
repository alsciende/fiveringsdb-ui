<template>
    <img v-bind:src="getCardImageURL(card)" v-bind:class="classObject">
</template>

<script>
  import config from '@/config';

  export default {
    name: 'utils-card-image',
    props: ['card', 'classes'],
    methods: {
      getCardImageURL: config.getCardImageURL,
    },
    data() {
      return {
        classObject: ['card-image', 'img-fluid'].concat(this.classes),
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
