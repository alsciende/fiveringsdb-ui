<template>
    <h1>
        Deckbuilder
    </h1>
</template>

<script>
  import store from '@/store';
  import rest from '@/rest';

  export default {
    name: 'builder-builder',
    beforeRouteEnter(to, from, next) {
      store.dispatch('login').then(
        () => next(),
        reason => next(new Error(reason)),
      );
    },
    mounted() {
      rest.get('strains').then((result) => {
        console.log('strains', result);
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
