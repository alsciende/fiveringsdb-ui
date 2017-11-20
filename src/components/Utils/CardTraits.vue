<template>
    <span class="card-traits"><span class="card-trait" v-for="trait in card.traits">{{ $t('trait.' + trait)
        }}. </span></span>
</template>

<script>
  export default {
    name: 'utils-card-traits',
    props: ['card'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
