<template>
    <div>
        <div v-for="ruling in rulings" :key="ruling.id" class="card mt-2 card-ruling">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>
                        {{ ruling.text }}
                    </p>
                    <footer class="blockquote-footer"><a :href="ruling.link">{{ ruling.source }}</a></footer>
                </blockquote>
            </div>
            <div v-if="isGuru" class="card-footer">
                <a @click.prevent="setRuling(ruling)" href="#" class="card-link">Edit ruling</a>
                <a @click.prevent="deleteRuling(ruling)" href="#" class="card-link text-danger">Delete ruling</a>
            </div>
        </div>
        <button v-if="isGuru" @click.prevent="setRuling()" type="button"
                class="btn btn-outline-primary mt-2">Add a ruling
        </button>
        <button v-if="isGuru" @click.prevent="reload()" type="button"
                class="btn btn-outline-secondary mt-2">Update rulings
        </button>
        <b-modal id="rulingModal"
                 ref="rulingModal"
                 title="Ruling"
                 v-model="modal"
                 :no-close-on-backdrop="true"
                 ok-title="Save"
                 @ok="saveRuling"
        >
            <rulings-editor v-if="ruling" v-model="ruling"></rulings-editor>
        </b-modal>
    </div>
</template>

<script>
  import rest from '@/rest';
  import RulingsEditor from '../Rulings/Editor';

  export default {
    name: 'rulings-list',
    props: ['card'],
    components: {
      RulingsEditor,
    },
    data() {
      return {
        modal: false,
        rulings: [],
        ruling: null,
        toolbars: {
          bold: true,
          italic: true,
          header: true,
          underline: true,
          strikethrough: true,
          quote: true,
          ol: true,
          ul: true,
          link: true,
          help: true,
          preview: true,
        },
      };
    },
    computed: {
      isGuru() {
        return this.$store.getters.roles.indexOf('ROLE_GURU') !== -1;
      },
    },
    methods: {
      setRuling(ruling) {
        if (ruling) {
          this.ruling = ruling;
        } else {
          this.ruling = {
            card: this.card,
            id: null,
            text: '',
            source: '',
            link: '',
          };
        }

        this.modal = true;
      },
      deleteRuling(ruling) {
        this.$notify({
          text: 'Deleting...',
        });

        rest
          .delete(`cards/${this.card.id}/rulings/${ruling.id}`)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Deleted successfully!',
              type: 'success',
            });
            this.reload();
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      saveRuling() {
        if(this.ruling.id) {
          this.updateRuling(this.ruling);
        } else {
          this.createRuling(this.ruling);
        }
      },
      createRuling(ruling) {
        this.$notify({
          text: 'Creating...',
        });

        const data = {
          text: ruling.text,
          source: ruling.source,
          link: ruling.link,
        };

        rest
          .post(`cards/${this.card.id}/rulings`, data)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Created successfully!',
              type: 'success',
            });
            this.reload();
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      updateRuling(ruling) {
        this.$notify({
          text: 'Updating...',
        });

        const data = {
          text: ruling.text,
          source: ruling.source,
          link: ruling.link,
        };

        rest
          .patch(`cards/${this.card.id}/rulings/${ruling.id}`, data)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Updated successfully!',
              type: 'success',
            });
            this.reload();
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      reload() {
        rest
          .get(`cards/${this.card.id}/rulings`)
          .then((result) => {
            this.rulings = result.records;
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
    },
    mounted() {
      this.reload();
    },
  }
  ;
</script>

<style>
    .card-ruling .blockquote {
        font-size: 1rem;
    }

    .card-ruling .blockquote .blockquote-footer {
        font-size: 1rem;
    }
</style>
