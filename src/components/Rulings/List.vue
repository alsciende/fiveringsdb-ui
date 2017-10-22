<template>
    <div>
        <div v-for="ruling in rulings" :key="ruling.id" class="card mt-2 card-ruling">
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p v-html="markdown(ruling.text)"></p>
                    <footer class="blockquote-footer"><a :href="ruling.link" target="_blank">{{ ruling.source }}</a>
                    </footer>
                </blockquote>
            </div>
            <div v-if="isGuru" class="card-footer">
                <a @click.prevent="setRuling(ruling)" href="#" class="card-link">Edit ruling</a>
                <a @click.prevent="askDeleteConfirmation(ruling)" href="#"
                   class="card-link text-danger">Delete ruling</a>
            </div>
        </div>
        <button v-if="isGuru" @click.prevent="setRuling()" type="button"
                class="btn btn-outline-primary mt-2">Add a ruling
        </button>
        <button v-if="isGuru" @click.prevent="reload()" type="button"
                class="btn btn-outline-secondary mt-2">Update rulings
        </button>
        <b-modal ref="saveModal"
                 title="Ruling"
                 :no-close-on-backdrop="true"
                 ok-title="Save"
                 @ok="saveRuling"
        >
            <form v-if="ruling">
                <div class="form-group">
                    <label>Text</label>
                    <b-form-textarea v-model="ruling.text"
                                     :rows="5">
                    </b-form-textarea>
                    <div class="card bg-light mt-1">
                        <div class="card-body" v-html="markdown(ruling.text)"></div>
                    </div>
                </div>
                <div class="form-group">
                    <label>Source</label>
                    <b-form-input v-model="ruling.source"></b-form-input>
                </div>
                <div class="form-group">
                    <label>Source link (optional)</label>
                    <b-form-input v-model="ruling.link"></b-form-input>
                </div>
            </form>
        </b-modal>
        <b-modal ref="deleteModal"
                 title="Confirmation"
                 @ok="deleteRuling(ruling)"
                 ok-title="Confirm deletion"
                 close-title="Cancel">
            <p>This deletion is definitive and cannot be undone.</p>
            <p>Delete ruling?</p>
        </b-modal>
    </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import rest from '@/rest';

  const md = new MarkdownIt();

  export default {
    name: 'rulings-list',
    props: ['card'],
    data() {
      return {
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
      markdown(text) {
        return md.render(text);
      },
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

        this.$refs.saveModal.show();
      },
      askDeleteConfirmation(ruling) {
        if (ruling) {
          this.ruling = ruling;
        }

        this.$refs.deleteModal.show();
      },
      deleteRuling(ruling) {
        this.$notify({
          text: 'Deleting...',
        });

        rest
          .private()
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
        if (this.ruling.id) {
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
          .private()
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
          .private()
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
          .public()
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
