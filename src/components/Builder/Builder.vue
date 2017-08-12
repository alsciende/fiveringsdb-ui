<template>
    <h1>
        Deckbuilder
    </h1>
</template>

<script>
  import store from '@/store/index';

  export default {
    name: 'builder-builder',
    beforeRouteEnter(to, from, next) {
      store.dispatch('login').then(
        () => next(),
        reason => next(new Error(reason)),
      );
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
