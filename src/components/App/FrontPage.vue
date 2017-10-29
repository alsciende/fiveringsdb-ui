<template>
    <div>
        <div class="row content justify-content-around">
            <decks-features class="col-lg-6"></decks-features>
            <div class="col-lg-4">
                <h4>Card Search</h4>
                <form v-on:submit.prevent="search" class="mb-2">
                    <input type="text" class="form-control" v-model="query"
                           placeholder="Enter a card name or card query">
                </form>
                <h4>Recent Decks</h4>
                <decks-list-content :pagination="false" :limit="10"></decks-list-content>
            </div>
        </div>
    </div>
</template>

<script>
  import rest from '@/rest';
  import DecksFeatures from '@/components/Decks/Features';
  import DecksListContent from '@/components/Decks/ListContent';

  export default {
    name: 'app-front-page',
    components: {
      DecksFeatures,
      DecksListContent,
    },
    data() {
      return {
        query: '',
      };
    },
    methods: {
      search() {
        this.$router.push({ name: 'cards-by-search-query', query: { q: this.query } });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
