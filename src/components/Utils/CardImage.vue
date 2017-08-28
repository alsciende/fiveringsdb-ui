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
        const packs = this.card.pack_cards.map(slot => slot.pack.id);
        const preferredPack = this.$store.getters.preferredPack;
        if (packs.includes(preferredPack)) {
          return preferredPack;
        }
        this.$store.commit('changePreferredPack', packs[0]);
            return packs[0];
        },
      },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
