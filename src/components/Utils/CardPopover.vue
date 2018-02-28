<template>
    <div id="popover-card-container" class="d-none">
        <cards-card class="popover-card" v-if="card" :card="card" :display-flavor="false" :allow-pack-selection="false"></cards-card>
    </div>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';

  export default {
    components: {
      CardsCard,
    },
    name: 'utils-card-popover',
    computed: {
      card() {
        return this.$store.getters.cardPopover;
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
