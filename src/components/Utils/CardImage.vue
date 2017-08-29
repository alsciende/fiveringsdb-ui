<template>
    <img v-bind:src="url" v-bind:class="classObject">
</template>

<script>
  export default {
      name: 'utils-card-image',
      props: ['card', 'classes'],
      data() {
          return {
              classObject: ['card-image', 'img-fluid'].concat(this.classes),
          };
      },
      computed: {
          url() {
              return `/static/cards/${this.pack}/${this.card.id}.jpg`;
          },
          pack() {
              return this.card.main_slot.pack.id;
          },
      },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
