<template>
    <div>
        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="decks">
            <b-pagination v-if="pagination"
                          class="my-3 justify-content-center"
                          :total-rows="totalRows"
                          v-model="currentPage"
                          :per-page="perPage">
            </b-pagination>
            <div class="list-group">
                <decks-list-row v-for="deck in decks" :key="deck.id" :deck="deck"></decks-list-row>
            </div>
            <b-pagination v-if="pagination"
                          class="my-3 justify-content-center"
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
    name: 'decks-list-content',
    components: {
      DecksListRow,
    },
    props: {
      pagination: {
        type: Boolean,
        default: true,
      },
      limit: {
        type: Number,
        default: 30,
      },
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
    computed: {
      sort() {
        return this.$route.params.sort || 'recent';
      },
    },
    methods: {
      loadDecks() {
        this.loading = true;
        rest.get('decks', { sort: this.sort, page: this.currentPage, limit: this.limit }).then((result) => {
          this.loading = false;
          this.decks = result.records;
          this.totalRows = result.size;
          this.perPage = result.limit;
        }).catch((reason) => {
          this.loading = false;
          this.error = reason;
        })
        ;
      },
    },
    watch: {
      currentPage() {
        this.loadDecks();
      },
      $route() {
        this.loadDecks();
      },
    },
    mounted() {
      this.loadDecks();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
