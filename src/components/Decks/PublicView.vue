<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="deck" class="content" :class="['link-'+deck.primary_clan]">
            <div class="text-light p-2 mb-4" :class="['bg-dark-'+deck.primary_clan]">
                <h1 class="text-center pt-4">{{ deck.name }}</h1>
                <div class="small d-flex justify-content-between align-items-end">
                    <span>
                        {{ $t('format.' + deck.format) }}
                    </span>
                    <span>
                        published {{ fromNow(deck.updated_at) }}
                    </span>
                </div>
            </div>

            <div class="row">
                <div class="col-lg-6">
                    <utils-deck-content :deck="deck" :editable="false"></utils-deck-content>

                    <div class="pb-1 my-3 bb-10 bt-10 d-flex justify-content-around">
                        <a v-if="liked === false"
                           title="Like"
                           href="#"
                           @click.prevent="like"
                           role="button"
                           class="btn btn-link text-danger">
                            <span class="fa fa-heart-o"></span>
                            Like
                        </a>
                        <a v-if="liked === true"
                           title="Cancel Like"
                           href="#"
                           @click.prevent="unlike"
                           role="button"
                           class="btn btn-link text-danger">
                            <span class="fa fa-heart"></span>
                            Liked
                        </a>
                        <a href="#comments" class="btn btn-link text-success">
                            <span class="fa fa-comment-o"></span>
                            Comment
                        </a>

                    </div>
                </div>
                <div class="col-lg-6">
                    <h3>
                        <span class="fa fa-user-circle-o"></span> {{ deck.user.username }}
                    </h3>
                    <div class="desc-description" v-html="description"></div>

                    <h4 class="py-3 bt-30" id="comments">
                        <span class="fa fa-comments-o"></span>
                        {{ deck.comments.length }} comments
                    </h4>
                    <div v-for="comment in deck.comments" :key="comment.id" class="bt-10 py-3">
                        <h5 class="d-flex justify-content-between align-items-end">
                            <span>{{ comment.user.username }}</span>
                            <span class="small text-muted">{{ fromNow(comment.updated_at) }}</span>
                        </h5>
                        {{ comment.text }}
                    </div>
                    <div class="form-group bt-10 py-3">
                        <label for="comment">Your comment</label>
                        <b-form-textarea id="comment"
                                         v-model="comment"
                                         :rows="3">
                        </b-form-textarea>
                    </div>
                    <button @click="postComment" class="btn btn-outline-success">Post comment</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import moment from 'moment';
  import MarkdownIt from 'markdown-it';
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import rest from '@/rest';

  const md = new MarkdownIt();

  export default {
    name: 'public-decks-view',
    components: {
      UtilsDeckContent,
    },
    data() {
      return {
        loading: false,
        deck: null,
        error: null,
        comment: '',
        liked: false,
      };
    },
    watch: {
      $route: 'fetchData',
    },
    computed: {
      preview() {
        return md.render(this.comment);
      },
      description() {
        return md.render(this.deck.description);
      },
      content() {
        return this.$store.getters.slots;
      },
    },
    methods: {
      like() {
        if (this.$store.getters.isLogged) {
          rest
            .post(`decks/${this.$route.params.deckId}/likes`)
            .then((result) => {
              this.$notify({
                title: 'Success',
                text: 'Liked!',
                type: 'success',
              });
              this.liked = true;
              console.log(result);
            })
            .catch((reason) => {
              this.error = reason;
            });
        }
      },
      unlike() {
        if (this.$store.getters.isLogged) {
          rest
            .delete(`decks/${this.$route.params.deckId}/likes`)
            .then((result) => {
              this.$notify({
                title: 'Success',
                text: 'Cancelled!',
                type: 'success',
              });
              this.liked = false;
              console.log(result);
            })
            .catch((reason) => {
              this.error = reason;
            });
        }
      },
      fromNow(date) {
        return moment(date).fromNow();
      },
      fetchData() {
        this.error = null;
        this.deck = null;
        this.loading = true;
        rest
          .get(`decks/${this.$route.params.deckId}`)
          .then((result) => {
            this.loading = false;
            this.deck = result.record;
          })
          .catch((reason) => {
            this.loading = false;
            this.error = reason;
          });
        if (this.$store.getters.isLogged) {
          rest
            .get(`decks/${this.$route.params.deckId}/likes/me`)
            .then((result) => {
              this.liked = result.hasOwnProperty('record');
            })
            .catch((reason) => {
              this.error = reason;
            });
        }
      },
      postComment() {
        this.$notify({
          text: 'Posting...',
        });

        const data = {
          text: this.comment,
        };

        rest
          .post(`decks/${this.deck.id}/comments`, data)
          .then(() => {
            this.$notify({
              title: 'Success',
              text: 'Posted successfully!',
              type: 'success',
            });
            this.comment = '';
            this.reloadComments();
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      reloadComments() {
        rest
          .get(`decks/${this.deck.id}/comments`)
          .then((result) => {
            this.deck.comments = result.records;
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
    created() {
      this.fetchData();
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Browser');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
