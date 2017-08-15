<template>
    <div class="deck">
        <h2>
            {{ deck.name }}
        </h2>
        <div class="row">
            <div class="col-md-6">
                <utils-deck-content :deck="deck"></utils-deck-content>
            </div>
            <div class="col-md-6">
            </div>
        </div>
    </div>
</template>

<script>
  import UtilsDeckContent from '@/components/Utils/DeckContent';

  export default {
    name: 'builder-editor',
    components: {
      UtilsDeckContent,
    },
    props: ['deck'],
    watch: {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
