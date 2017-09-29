<template>
    <span class="card-traits">
        <span v-if="card.element" class="text-smallcaps">
            {{ $t('element.' + card.element) }}
        </span>
        <span v-for="keyword in card.traits" class="card-keyword">
            {{ $t('keyword.' + keyword) }}.
        </span>
    </span>
</template>

<script>
  export default {
    name: 'utils-card-traits-element',
    props: ['card'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
