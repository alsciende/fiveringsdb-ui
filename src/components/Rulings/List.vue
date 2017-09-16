<template>
    <div>
        <div v-for="ruling in card.rulings" class="card mt-2 card-ruling">
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
            this.updateRulings();
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
      saveRuling() {
        this.$notify({
          text: 'Saving...',
        });

        let url = `cards/${this.card.id}/rulings`;
        const data = {
          text: this.ruling.text,
          source: this.ruling.source,
          link: this.ruling.link,
        };

        if (this.ruling.id) {
          url = `${url}/${this.ruling.id}`;
        }

        rest
          .post(url, data)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Saved successfully!',
              type: 'success',
            });
            this.updateRulings();
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
      updateRulings() {
        this.$notify({
          text: 'Loading...',
        });

        rest
          .get(`cards/${this.card.id}/rulings`)
          .then((result) => {
            this.$notify({
              title: 'Success',
              text: 'Loaded successfully!',
              type: 'success',
            });
            this.card.rulings = result.records;
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
