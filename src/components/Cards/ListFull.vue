<template>
    <div class="cards-list">
        <div class="row mb-2" v-for="card in cards" v-bind:key="card.id">
            <div class="col-md-7 mb-2">
                <cards-card v-bind:card="card">
                    <utils-card-link :card="card"></utils-card-link>
                </cards-card>
                <rulings-list :card="card"></rulings-list>
            </div>
            <div class="col-md-5 mb-2 text-center">
                <utils-card-image :card="card" class="card-image img-fluid"></utils-card-image>
            </div>
        </div>
    </div>
</template>

<script>
  import CardsCard from '../Cards/Card';
  import UtilsCardImage from '../Utils/CardImage';
  import UtilsCardLink from '../Utils/CardLink';
  import RulingsList from '../Rulings/List';

  export default {
    name: 'cards-list-full',
    props: ['cards'],
    components: {
      UtilsCardImage,
      UtilsCardLink,
      CardsCard,
      RulingsList,
    },
  }
  ;
</script>

<style>
</style>
