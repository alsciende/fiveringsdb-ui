<template>
    <div class="row">
        <div class="col-md-9">
            <div class="list-group">
                <decks-list-row v-for="deck in decks" :key="deck.id" :deck="deck"></decks-list-row>
            </div>
        </div>
    </div>
</template>

<script>
  import rest from '../../rest';
  import DecksListRow from './ListRow';

  export default {
    name: 'decks-list',
    components: {
      DecksListRow,
    },
    data() {
      return {
        decks: [],
      };
    },
    methods: {},
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Builder');
      rest.get('decks', { sort: 'recent' }).then((result) => {
        this.decks = result.records;
        console.log(this.decks);
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
