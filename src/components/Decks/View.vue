<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="deck" class="row content">
            <div class="col-md-8 m-auto">
                <h2>{{ deck.name }}</h2>
                <utils-deck-content :deck="deck" :editable="false"></utils-deck-content>
            </div>
        </div>
    </div>
</template>

<script>
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import rest from '@/rest';

  export default {
    name: 'decks-view',
    components: {
      UtilsDeckContent,
    },
    data() {
      return {
        loading: false,
        deck: null,
        error: null,
      };
    },
    watch: {
      $route: 'fetchData',
    },
    computed: {
      content() {
        return this.$store.getters.slots;
      },
    },
    methods: {
      fetchData() {
        this.error = null;
        this.deck = null;
        this.loading = true;
        rest
          .get(`strains/${this.$route.params.strainId}`)
          .then((result) => {
            this.deck = result.record.head;
            this.loading = false;
          })
          .catch((reason) => {
            this.error = reason;
          });
      },
    },
    created() {
      this.fetchData();
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Browser');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
