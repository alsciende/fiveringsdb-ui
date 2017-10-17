<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="metadata" class="row content">
            <div class="col-md-6">
                <input type="text" v-model="metadata.name" @blur="nameEdition = false" v-if="nameEdition"
                       class="form-control form-control mb-2">
                <h2 @click="nameEdition = true" v-else>
                    {{ metadata.name }}
                </h2>
                <utils-deck-content :deck="deck" :editable="true"></utils-deck-content>
                <div class="form-row my-4">
                    <div class="col-auto">
                        <b-form-select v-model="metadata.format"
                                       :options="formatOptions"></b-form-select>
                    </div>
                    <div class="col-auto">
                        <b-button
                                :class="{'btn btn-success': true, 'disabled': saving}"
                                @click="saveDeck"
                        >Save
                        </b-button>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <builder-collection></builder-collection>
            </div>
        </div>

        <div v-if="wizard" class="row justify-content-center">
            <div class="col-6">
                <builder-wizard v-model="bootstrap"></builder-wizard>
            </div>
        </div>
    </div>
</template>

<script>
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import rest from '@/rest';
  import * as types from '@/store/mutation-types';
  import BuilderCollection from './Collection';
  import BuilderBuilder from './List';
  import BuilderWizard from './Wizard';

  export default {
    name: 'builder-editor',
    components: {
      BuilderBuilder,
      BuilderCollection,
      UtilsDeckContent,
      BuilderWizard,
    },
    data() {
      const formats = ['single-core', 'standard'];
      return {
        formatOptions: formats.map(format => ({ value: format, text: this.$t(`format.${format}`) })),
        loading: false,
        saving: false,
        metadata: null,
        wizard: false,
        error: null,
        nameEdition: false,
        bootstrap: {},
      };
    },
    watch: {
      $route: 'fetchData',
      bootstrap() {
        const slots = {};
        if (this.bootstrap.role !== null) {
          slots[this.bootstrap.role] = 1;
        }
        if (this.bootstrap.stronghold !== null) {
          slots[this.bootstrap.stronghold] = 1;
        }
        this.$store.commit({ type: types.SET_SLOTS, slots });
        this.metadata = {
          name: `New ${this.$t(`clan.${this.bootstrap.clan}`)} deck`,
          format: 'standard',
        };
        this.wizard = false;
      },
    },
    computed: {
      content() {
        return this.$store.getters.slots;
      },
      deck() {
        return Object.assign({}, this.metadata, { cards: this.content });
      },
    },
    methods: {
      fetchData() {
        this.error = null;
        this.metadata = null;

        if (this.$route.name === 'deck-new') {
          this.$store.commit({ type: types.SET_SLOTS, slots: {} });
          this.$store.commit({ type: types.UPDATE_COLLECTION });
          this.wizard = true;
          return;
        }

        this.loading = true;
        rest
          .get(`strains/${this.$route.params.strainId}/decks/${this.$route.params.deckId}`)
          .then((result) => {
            this.loading = false;
            const slots = Array.isArray(result.record.cards) ? {} : result.record.cards;
            delete result.record.cards;

            this.$store.commit({ type: types.SET_SLOTS, slots });
            this.$store.commit({ type: types.UPDATE_COLLECTION });

            this.metadata = result.record;
          })
          .catch((reason) => {
            this.loading = false;
            this.error = reason;
          });
      },
      saveDeck() {
        this.saving = true;
        this.$notify({
          text: 'Saving...',
        });
        rest
          .post(`strains/${this.$route.params.strainId}/decks`, this.deck)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Saved successfully!',
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
            this.saving = false;
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
