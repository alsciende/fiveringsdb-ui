<template>
    <div class="cards-list d-flex flex-wrap">
        <div v-for="card in cards" v-bind:key="card.code" class="col-lg-4 col-sm-6 col-12 align-self-stretch mb-4">
            <cards-card v-bind:card="card">
            </cards-card>
        </div>
    </div>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'cards-list-text',
    props: ['cards'],
    components: {
      CardsCard,
    }
  }
  ;
</script>

<style>

</style>