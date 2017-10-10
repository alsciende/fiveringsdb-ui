<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <utils-deck-description-editor v-if="deck" :deck="deck">
            <button @click="publish" :class="{'disabled': publishing}" type="button"
                    class="btn btn-block btn-success">Publish
            </button>
        </utils-deck-description-editor>
    </div>
</template>

<script>
  import rest from '@/rest';
  import UtilsDeckDescriptionEditor from '../Utils/DeckDescriptionEditor';

  export default {
    name: 'builder-publisher',
    components: {
      UtilsDeckDescriptionEditor,
    },
    data() {
      return {
        loading: false,
        publishing: false,
        error: null,
        deck: null,
      };
    },
    watch: {
      $route: 'fetchData',
    },
    methods: {
      publish() {
        this.publishing = true;
        this.$notify({
          text: 'Publishing...',
        });
        rest
          .patch(`strains/${this.$route.params.strainId}/publish`, {
            name: this.deck.name,
            description: this.deck.description,
          })
          .then((result) => {
            this.$notify({
              title: 'Success',
              text: 'Published successfully!',
              type: 'success',
            });
            this.$router.push({ name: 'deck-view', params: { deckId: result.record.id } });
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          })
          .then(() => {
            this.publishing = false;
          });
      },
      fetchData() {
        this.error = null;
        this.metadata = null;

        this.loading = true;
        rest
          .get(`strains/${this.$route.params.strainId}/decks/${this.$route.params.deckId}`)
          .then((result) => {
            this.loading = false;

            if (result.record.published) {
              this.error = 'This deck is already published';
              return;
            }

            this.deck = result.record;
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
      this.$store.commit('changeDocumentTitle', 'Deck Builder');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
