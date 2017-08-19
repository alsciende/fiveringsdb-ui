<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="error">
            {{ error }}
        </div>

        <div v-if="deck" class="row content">
            <div class="col-md-6">
                <h2>
                    {{ deck.name }}
                </h2>
                <utils-deck-content :deck="deck"></utils-deck-content>
            </div>
            <div class="col-md-6">
                <builder-collection
                        :deck="deck"
                        @change="changeQuantity"
                ></builder-collection>
            </div>
        </div>
    </div>
</template>

<script>
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import rest from '@/rest';
  import BuilderCollection from './Collection';
  import BuilderBuilder from './Builder';

  export default {
    name: 'builder-editor',
    components: {
      BuilderBuilder,
      BuilderCollection,
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
    methods: {
      fetchData() {
        this.error = null;
        this.deck = null;
        this.loading = true;
        rest
          .get(`strains/${this.$route.params.strainId}/decks/${this.$route.params.deckId}`)
          .then((result) => {
            this.deck = result.record;
          })
          .catch((reason) => {
            this.error = reason;
          })
          .then(() => {
            this.loading = false;
          });
      },
      changeQuantity(msg) {
        if (msg.quantity > 0) {
          this.$set(this.deck.cards, msg.cardId, msg.quantity);
        } else {
          this.$delete(this.deck.cards, msg.cardId);
        }
      },
    },
    created() {
      this.fetchData();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
