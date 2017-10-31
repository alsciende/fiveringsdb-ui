<template>
    <div class="mt-4">
        <div v-if="loading" class="loading">
            Loading...
        </div>

        <div v-if="error" class="alert alert-danger" role="alert">
            {{ error }}
        </div>

        <h5>Decks of the week</h5>
        <div
                v-for="(deck, clan) in features"
                :key="clan"
                :class="['my-1', 'py-3', 'pr-2', 'link-'+deck.primary_clan, 'bd-dark-'+deck.primary_clan]"
                style="border-width:1px 5px 0 0;border-style: solid"
        >
            <h6>
                <router-link :to="{ 'name': 'deck-view', params: { 'deckId': deck.id } }">
                    {{ deck.name }}
                </router-link>
            </h6>
            <div class="text-muted">
                <span class="fa fa-user-circle-o"></span> {{ deck.user.username }}
            </div>
        </div>

    </div>
</template>

<script>
  import rest from '@/rest';

  export default {
    name: 'decks-features',
    components: {
    },
    props: [],
    data() {
      return {
        loading: false,
        error: null,
        features: null,
      };
    },
    methods: {
      fetchData() {
        this.error = null;
        this.features = null;
        this.loading = true;

        rest
          .public()
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
