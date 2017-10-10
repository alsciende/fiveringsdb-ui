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
                <div class="list-group">
                    <a v-for="strain in strains"
                       :key="strain.id"
                            href="#"
                            @click.prevent="click(strain)"
                            class="list-group-item list-group-item-action">
                        <h5>{{ strain.head ? strain.head.name : $t('msg.empty_strain') }}</h5>
                        <div class="small text-secondary">{{ strain.created_at | formatDate }}</div>
                    </a>
                </div>
            </div>
            <div class="col-lg-6">
                <div v-if="strain">
                    <h2>{{ strain.head.name }}</h2>
                    <div class="mb-2">
                        <router-link
                                :to="{ name: 'deck-edit', params: { strainId: strain.id, deckId: strain.head.id } }"
                                class="btn btn-outline-primary btn-sm">Edit
                        </router-link>
                        <b-btn v-b-modal.modalDelete class="btn btn-outline-danger btn-sm">Delete</b-btn>
                        <router-link :to="{ name: 'strain-view', params: { strainId: strain.id } }"
                                     class="btn btn-outline-info btn-sm" target="_blank">
                            Permalink
                        </router-link>
                        <router-link
                                :to="{ name: 'deck-publish', params: { strainId: strain.id, deckId: strain.head.id } }"
                                class="btn btn-outline-warning btn-sm">Publish
                        </router-link>
                    </div>
                    <b-modal id="modalDelete"
                             ref="modalDelete"
                             title="Confirmation"
                             @ok="deleteConfirmed(strain)"
                             ok-title="Confirm deletion"
                             close-title="Cancel">
                        <p>This deletion is definitive and cannot be undone.</p>
                        <p>Delete <b>{{ strain.head.name }}</b>?</p>
                    </b-modal>
                    <utils-deck-content :deck="strain.head"></utils-deck-content>
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
        strain: null,
        creating: false,
      };
    },
    methods: {
      click(strain) {
        if (strain.head) {
          this.view(strain);
        } else {
          this.start(strain);
        }
      },
      view(strain) {
        this.strain = strain;
      },
      start(strain) {
        this.$router.push({ name: 'deck-new', params: { strainId: strain.id } });
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
            this.start(result.record);
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
      deleteConfirmed() {
        this.$notify({
          text: 'Deleting...',
        });
        rest.delete(`strains/${this.strain.id}`)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Deck deleted',
              type: 'success',
            });
            this.strain = null;
            this.strains = this.strains.filter(strain => strain.id !== strainId);
          });
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
<style scoped>

    .bg-clan-icon {
        background-repeat: no-repeat;
        background-size: 30px;
        background-position-y: center;
        background-position-x: 90%;
    }

</style>
