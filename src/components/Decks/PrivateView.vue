<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="deck" class="row content">
            <div class="col-md-8 m-auto">
                <h2>{{ deck.name }}</h2>
                <utils-deck-content :deck="deck" :editable="false"></utils-deck-content>

                <div class="pb-1 my-3 bb-10 bt-10 d-flex justify-content-around d-print-none">
                    <a v-if="hasUser"
                       title="Copy in your Builder"
                       href="#"
                       @click.prevent="copy"
                       role="button"
                       class="btn btn-link text-info">
                        <span class="fa fa-clone"></span>
                        Copy
                    </a>
                </div>

                <cost-chart :deck="deck"></cost-chart>
            </div>
        </div>
    </div>
</template>

<script>
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import rest from '@/rest';
  import CostChart from '../Builder/CostChart';

  export default {
    name: 'private-decks-view',
    components: {
      CostChart,
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
      hasUser() {
        return this.$store.getters.hasUser;
      },
    },
    methods: {
      copy() {
        if (!this.$store.getters.hasUser) {
          return;
        }

        rest
          .private()
          .post(`strains`, { origin: this.deck.id })
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Copied!',
              type: 'success',
            });
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      fetchData() {
        this.error = null;
        this.deck = null;
        this.loading = true;
        rest
          .public()
          .get(`strains/${this.$route.params.strainId}`)
          .then((result) => {
            this.loading = false;
            this.deck = result.record.head;
          })
          .catch((reason) => {
            this.loading = false;
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
