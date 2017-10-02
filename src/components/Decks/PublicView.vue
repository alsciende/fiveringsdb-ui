<template>
    <div class="deck">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <div v-if="deck" class="content">
            <div class="text-light p-2 mb-4" :class="['bg-dark-'+deck.primary_clan]">
                <h2 class="text-center pt-4">{{ deck.name }}</h2>
                <div class="small text-right">
                    published: {{ fromNow }}
                </div>
            </div>
            <div class="row">
                <div class="col-lg-6">
                    <utils-deck-content :deck="deck" :editable="false"></utils-deck-content>
                </div>
                <div class="col-lg-6">
                    <h3>
                        <span class="fa fa-user-circle-o"></span> {{ deck.user.username }}
                    </h3>
                    <div class="desc-description" v-html="description"></div>
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
      };
    },
    watch: {
      $route: 'fetchData',
    },
    computed: {
      description() {
        return md.render(this.deck.description);
      },
      fromNow() {
        return moment(this.deck.created_at).fromNow();
      },
      content() {
        return this.$store.getters.slots;
      },
    },
    methods: {
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
