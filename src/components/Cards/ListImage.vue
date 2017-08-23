<template>
    <div class="cards-list d-flex justify-content-start align-items-start flex-wrap align-content-start">
        <div v-for="card in cards" v-bind:key="card.id" class="mb-4 col-lg-3 col-sm-4 col-12 align-self-stretch">
            <utils-card-image :card="card"></utils-card-image>
        </div>
    </div>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';
  import UtilsCardImage from '@/components/Utils/CardImage';

  export default {
    name: 'cards-list-image',
    props: ['cards'],
    components: {
      UtilsCardImage,
      CardsCard,
    }
  }
  ;
</script>

<style>

</style>