<template>
    <span class="card-traits"><span class="card-keyword" v-for="keyword in card.traits">{{ $t('keyword.' + keyword)
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
