<template>
    <span class="card-keywords"><span class="card-keyword" v-for="keyword in card.keywords">{{ $t('keyword.'+keyword) }}. </span></span>
</template>

<script>
  export default {
    name: 'utils-card-keywords',
    props: ['card'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
