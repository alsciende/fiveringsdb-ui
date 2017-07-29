<template>
    <div class="cards-list d-flex justify-content-between align-items-start flex-wrap align-content-start">
        <div v-for="card in cards" v-bind:key="card.id" class="col-lg-3 col-sm-4 col-12 align-self-stretch">
            <img v-bind:src="getCardImageURL(card)" class="card-image img-fluid mb-4">
        </div>
    </div>
</template>

<script>
  import configService from '@/services/configService';
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'cards-list-image',
    props: ['cards'],
    methods: {
      getCardImageURL: configService.getCardImageURL,
    },
    components: {
      CardsCard,
    }
  }
  ;
</script>

<style>

</style>