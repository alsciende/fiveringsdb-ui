<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <utils-deck-description-editor v-if="deck" :deck="deck">
            <button @click="patch" :class="{'disabled': patching}" type="button"
                    class="btn btn-block btn-success">Patch
            </button>
        </utils-deck-description-editor>
    </div>
</template>

<script>
  import rest from '@/rest';
  import UtilsDeckDescriptionEditor from '../Utils/DeckDescriptionEditor';

  export default {
    name: 'builder-patcher',
    components: {
      UtilsDeckDescriptionEditor,
    },
    data() {
      return {
        loading: false,
        patching: false,
        error: null,
        deck: null,
      };
    },
    watch: {
      $route: 'fetchData',
    },
    methods: {
      patch() {
        this.patching = true;
        this.$notify({
          text: 'Patching...',
        });
        rest
          .private()
          .patch(`decks/${this.$route.params.deckId}`, {
            name: this.deck.name,
            description: this.deck.description,
          })
          .then((result) => {
            this.$notify({
              title: 'Success',
              text: 'Patched successfully!',
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
            this.patching = false;
          });
      },
      fetchData() {
        this.error = null;
        this.metadata = null;

        this.loading = true;
        rest
          .private()
          .get(`decks/${this.$route.params.deckId}`)
          .then((result) => {
            this.loading = false;

            if (result.record.user.id !== this.$store.getters.userId) {
              this.error = 'This deck is not yours';
              return;
            }

            if (result.record.published === false) {
              this.error = 'This deck is not published yet';
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
