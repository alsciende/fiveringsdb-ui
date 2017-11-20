<template>
    <span class="card-traits">
        <span v-if="card.element" class="text-smallcaps">
            {{ $t('element.' + card.element) }}.
        </span>
        <span v-for="trait in card.traits" class="card-trait">
            {{ $t('trait.' + trait) }}.
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
