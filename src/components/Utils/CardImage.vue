<template>
    <img v-bind:src="getCardImageURL(card)" v-bind:class="classObject">
</template>

<script>
  export default {
    name: 'utils-card-image',
    props: ['card', 'classes'],
    methods: {
      getCardImageURL(card) {
        return `${process.env.IMG_URL}${Object.keys(card.packs)[0]}/${card.id}.png`;
      },
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
