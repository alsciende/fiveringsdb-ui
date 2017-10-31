<template>
    <div>
        <div class="row content">
            <div class="col-2">
                <b-nav vertical class="text-uppercase">
                    <b-nav-item :to="{name:'cards-by-default'}">Cards</b-nav-item>
                    <b-nav-item :to="{name:'decks-list', params: { sort: 'recent' }}">Decks</b-nav-item>
                    <b-nav-item :to="{name:'deckbuilder'}">Builder</b-nav-item>
                    <b-nav-item :to="{name:'rules-reference'}">Rules</b-nav-item>
                </b-nav>
            </div>
            <div class="col-7">
                <decks-list-content :pagination="false" :limit="10"></decks-list-content>
            </div>
            <div class="col-3">
                <img src="http://via.placeholder.com/255x300">
                <decks-features></decks-features>
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
