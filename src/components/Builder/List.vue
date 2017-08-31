<template>
    <div>
        <div class="row">
            <div class="col-lg-6">
                <h1>
                    List of Decks
                    <a
                            href="#"
                            :class="{'btn btn-primary': true, 'disabled': creating}"
                            :aria-disabled="creating"
                            @click.prevent="create"
                    >Create new
                    </a>
                </h1>
                <table class="table">
                    <tr v-for="strain in strains">
                        <td class="selector" hidden>
                            <input type="checkbox"/>
                        </td>
                        <td>
                            {{ strain.head ? strain.head.name : $t('msg.empty_strain') }}
                            <div class="small text-secondary">{{ strain.created_at | formatDate }}</div>
                        </td>
                        <td class="actions">
                            <button type="button" class="btn btn-outline-secondary btn-sm"
                                    @click.prevent="view(strain.head)" v-if="strain.head">View
                            </button>
                            <button type="button" class="btn btn-outline-primary btn-sm"
                                    @click.prevent="start(strain.id)" v-else>Create
                            </button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-lg-6">
                <div v-if="deck">
                    <h2>{{ deck.name }}</h2>
                    <div class="btn-group mb-2">
                        <button type="button" class="btn btn-outline-primary btn-sm"
                                @click.prevent="edit(deck)">Edit
                        </button>
                    </div>
                    <utils-deck-content :deck="deck"></utils-deck-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import store from '@/store';
  import rest from '@/rest';
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import BuilderEditor from './Editor';

  export default {
    name: 'builder-list',
    components: {
      BuilderEditor,
      UtilsDeckContent,
    },
    data() {
      return {
        strains: [],
        deck: null,
        creating: false,
      };
    },
    methods: {
      view(deck) {
        this.deck = deck;
      },
      start(strainId) {
        this.$router.push({ name: 'deck-new', params: { strainId } });
      },
      create() {
        this.creating = true;
        this.$notify({
          text: 'Checking...',
        });
        rest
          .post('strains')
          .then((result) => {
            this.$notify({
              title: 'Success',
              text: 'Creation accepted',
              type: 'success',
            });
            this.start(result.record.id);
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          })
          .then(() => {
            this.creating = false;
          });
      },
      edit(deck) {
        this.$router.push({ name: 'deck-edit', params: { strainId: deck.strain, deckId: deck.id } });
      },
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('login').then(
        () => next(),
        reason => next(new Error(reason)),
      );
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Builder');
      rest.get('strains').then((result) => {
        this.strains = result.records;
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
