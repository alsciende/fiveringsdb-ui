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
                <input type="text" v-model="deck.name" @blur="nameEdition = false" v-if="nameEdition"
                       class="form-control form-control mb-2">
                <h2 @click="nameEdition = true" v-else>
                    {{ deck.name }}
                </h2>
                <utils-deck-content :deck="deck" :editable="true"></utils-deck-content>
                <div class="btn-group my-4" role="group" aria-label="Deck Controls">
                    <a
                            href="#"
                            :class="{'btn btn-success': true, 'disabled': saving}"
                            :aria-disabled="saving"
                            @click.prevent="saveDeck"
                    >Save
                    </a>
                </div>
            </div>
            <div class="col-md-6">
                <div class="deck-settings row">
                    <div class="col-6">
                        <b-form-select v-model="deck.format" :options="formatOptions" class="mb-3"
                                       size="sm"></b-form-select>
                    </div>
                    <div class="col-6">
                        <b-form-select v-model="coreCount" :options="coreCountOptions" class="mb-3"
                                       size="sm"></b-form-select>
                    </div>
                </div>
                <builder-collection :coreCount="coreCount"></builder-collection>
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

  export default {
    name: 'builder-editor',
    components: {
      BuilderBuilder,
      BuilderCollection,
      UtilsDeckContent,
    },
    data() {
      const formats = ['single-core', 'standard'];
      const coreCounts = [1, 2, 3];
      return {
        coreCount: 3,
        formatOptions: formats.map(format => ({ value: format, text: this.$t(`format.${format}`) })),
        coreCountOptions: coreCounts.map(coreCount => ({
          value: coreCount,
          text: `${coreCount} Core${coreCount > 1 ? 's' : ''}`,
        })),
        loading: false,
        saving: false,
        metadata: null,
        error: null,
        nameEdition: false,
      };
    },
    watch: {
      $route: 'fetchData',
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
          this.deck = {
            name: 'The deck with no name',
            cards: {},
            format: 'standard',
          };
          return;
        }

        this.loading = true;
        rest
          .get(`strains/${this.$route.params.strainId}/decks/${this.$route.params.deckId}`)
          .then((result) => {
            this.$store.commit({ type: types.SET_SLOTS, slots: result.record.cards });
            delete result.record.cards;
            this.metadata = result.record;
          })
          .catch((reason) => {
            this.error = reason;
          })
          .then(() => {
            this.loading = false;
          });
      },
      saveDeck() {
        this.saving = true;
        this.$notify({
          text: 'Saving...',
        });
        rest
          .post(`strains/${this.$route.params.strainId}/decks`, this.deck)
          .then((result) => {
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
