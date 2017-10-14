<template>
    <div>
        <div class="row content justify-content-around">
            <decks-features class="col-lg-6"></decks-features>
            <div class="col-lg-4">
                <decks-list-content :pagination="false" :limit="10"></decks-list-content>
            </div>
        </div>
    </div>
</template>

<script>
  import DecksFeatures from '@/components/Decks/Features';
  import DecksListContent from '@/components/Decks/ListContent';

  export default {
    name: 'app-front-page',
    components: {
      DecksFeatures,
      DecksListContent,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
