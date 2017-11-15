<template>
    <div class="d-print-none">
        <h4 class="py-3 bt-30">
            <span class="fa fa-comments-o"></span>
            {{ deck.comments.length }} comments
        </h4>
        <div v-for="comment in deck.comments" :key="comment.id" class="bt-10 py-3">
            <h5 class="d-flex justify-content-between align-items-end">
                <span>{{ comment.user.username }}</span>
                <span class="small text-muted">{{ fromNow(comment.created_at) }}</span>
            </h5>
            {{ comment.text }}
        </div>
        <div class="form-group bt-10 py-3" id="new-comment">
            <label for="comment">Your comment</label>
            <b-form-textarea id="comment"
                             v-model="comment"
                             :rows="3">
            </b-form-textarea>
        </div>
        <button @click="postComment" class="btn btn-outline-success">Post comment</button>
    </div>
</template>

<script>
  import moment from 'moment';
  import rest from '@/rest';

  export default {
    name: 'comments-list',
    components: {},
    props: {
      deck: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        comment: '',
      };
    },
    methods: {
      fromNow(date) {
        return moment(date).fromNow();
      },
      postComment() {
        this.$notify({
          text: 'Posting...',
        });

        const data = {
          text: this.comment,
        };

        rest
          .private()
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
          .public()
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
