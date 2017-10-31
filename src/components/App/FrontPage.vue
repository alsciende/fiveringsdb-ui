<template>
    <div>
        <div class="row content justify-content-around">
            <decks-features class="col-lg-6"></decks-features>
            <div class="col-lg-6">
                <h4>Recent Decks</h4>
                <decks-list-content :pagination="false" :limit="10"></decks-list-content>
            </div>
        </div>
    </div>
</template>

<script>
  import rest from '@/rest';
  import DecksFeatures from '@/components/Decks/Features';
  import DecksListContent from '../Decks/ListContent';

  export default {
    name: 'app-front-page',
    components: {
      DecksFeatures,
      DecksListContent,
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
