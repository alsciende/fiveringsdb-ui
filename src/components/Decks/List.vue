<template>
    <div class="row justify-content-center">
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="decks" class="col-md-8">
            <b-pagination class="my-3 justify-content-center"
                          :total-rows="totalRows"
                          v-model="currentPage"
                          :per-page="perPage">
            </b-pagination>
            <div class="list-group">
                <decks-list-row v-for="deck in decks" :key="deck.id" :deck="deck"></decks-list-row>
            </div>
            <b-pagination class="my-3 justify-content-center"
                          :total-rows="totalRows"
                          v-model="currentPage"
                          :per-page="perPage">
            </b-pagination>
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
        loading: true,
        error: null,
        decks: null,
        currentPage: 1,
        totalRows: 1,
        perPage: 1,
      };
    },
    methods: {
      loadDecks() {
        this.loading = true;
        rest.get('decks', { sort: 'recent', page: this.currentPage }).then((result) => {
          this.loading = false;
          this.decks = result.records;
          this.totalRows = result.size;
          this.perPage = result.limit;
        }).catch((reason) => {
          this.loading = false;
          this.error = reason;
        })
        ;
      }
    },
    watch: {
      currentPage() {
        this.loadDecks();
      },
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Builder');
      this.loadDecks();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
