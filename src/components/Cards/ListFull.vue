<template>
    <div class="cards-list">
        <div class="row mb-2" v-for="card in cards" v-bind:key="card.code">
            <div class="col-md-7 mb-2">
                <cards-card v-bind:card="card">
                </cards-card>
            </div>
            <div class="col-md-5 mb-2">
                <img v-bind:src="getCardImageURL(card)" class="card-image img-fluid">
            </div>
        </div>
    </div>
</template>

<script>
  import configService from '@/services/configService';
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'cards-list-full',
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