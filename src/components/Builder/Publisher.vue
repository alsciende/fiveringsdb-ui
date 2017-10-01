<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="deck" class="row content">
            <div class="col-md-6">
                <div class="form-group">
                    <label for="name">Name</label>
                    <b-form-input v-model="deck.name"
                                  id="name"
                                  type="text"
                                  placeholder="Enter your name"></b-form-input>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <b-form-textarea v-model="deck.description"
                                     id="description"
                                     :rows="30">
                    </b-form-textarea>
                </div>
                <div class="form-group">
                    <button @click="publish" :class="{'disabled': publishing}" type="button"
                            class="btn btn-block btn-success">Publish
                    </button>
                </div>
            </div>
            <div class="col-md-6">
                <b-card no-body>
                    <b-tabs ref="tabs" card>
                        <b-tab title="Deck" active>
                            <h2>{{ deck.name }}</h2>
                            <utils-deck-content
                                    :deck="deck"
                            ></utils-deck-content>
                        </b-tab>
                        <b-tab title="Preview">
                            <div v-html="markdown"></div>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </div>
        </div>
    </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import rest from '@/rest';
  import example from './description-example.txt';

  const md = new MarkdownIt();

  export default {
    name: 'builder-publisher',
    components: {
      UtilsDeckContent,
    },
    data() {
      return {
        loading: false,
        publishing: false,
        metadata: null,
        error: null,
        deck: null,
      };
    },
    watch: {
      $route: 'fetchData',
    },
    computed: {
      markdown() {
        return md.render(this.deck.description);
      },
      content() {
        return this.$store.getters.slots;
      },
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
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Published successfully!',
              type: 'success',
            });
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
            if (this.deck.description === '') {
              this.deck.description = example;
            }
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
