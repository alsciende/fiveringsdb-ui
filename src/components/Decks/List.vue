<template>
    <div class="row justify-content-center">
        <decks-list-content class="col-lg-8"></decks-list-content>
    </div>
</template>

<script>
  import DecksListContent from './ListContent';

  export default {
    name: 'decks-list',
    components: {
      DecksListContent,
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Builder');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
