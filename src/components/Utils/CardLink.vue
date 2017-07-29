<template>
    <router-link :to="{ name: 'cards-by-card-id', params: { id: card.id } }">{{ card.name }}</router-link>
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
