<template>
    <div>
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <b-tabs v-if="features" pills class="justify-content-around">
            <b-tab
                    v-for="(deck, clan) in features"
                    :key="clan"
                    :title="$t('clan.'+clan)"
                    :class="['my-3', 'link-'+deck.primary_clan]"
            >

                <h2>
                    <router-link :to="{ 'name': 'deck-view', params: { 'deckId': deck.id } }">
                        {{ deck.name }}
                    </router-link>
                </h2>
                <p class="text-muted text-uppercase">
                    {{ $t('clan.'+clan) }} deck of the week – {{ $t('format.'+deck.format) }}
                </p>

                <utils-deck-content
                        :deck="deck"
                ></utils-deck-content>

                <h4 class="mt-3">
                    Description by the author: {{ deck.user.username }}
                </h4>

                <div class="desc-description" v-html="markdown(deck.description)"></div>

            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
  import MarkdownIt from 'markdown-it';
  import rest from '@/rest';
  import UtilsDeckContent from '@/components/Utils/DeckContent';

  const md = new MarkdownIt();

  export default {
    name: 'decks-features',
    components: {
      UtilsDeckContent,
    },
    props: [],
    data() {
      return {
        loading: false,
        error: null,
        features: null,
      };
    },
    computed: {},
    methods: {
      markdown(text) {
        return md.render(text);
      },
      fetchData() {
        this.error = null;
        this.features = null;
        this.loading = true;

        rest
          .get('features')
          .then((result) => {
            this.loading = false;
            this.features = {};
            result.records.forEach((feature) => {
              this.features[feature.clan] = feature.deck;
            });
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
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
