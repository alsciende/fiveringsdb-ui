<template>
    <router-link :to="{ name: 'cards-by-card-code', params: { code: card.code } }">{{ card.name }}</router-link>
</template>

<script>
  export default {
    name: 'utils-card-link',
    props: ['card'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
