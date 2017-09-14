<template>
    <div class="cards-list">
        <div class="row mb-2" v-for="card in cards" v-bind:key="card.id">
            <div class="col-md-7 mb-2">
                <cards-card v-bind:card="card">
                    <utils-card-link :card="card"></utils-card-link>
                </cards-card>
            </div>
            <div class="col-md-5 mb-2">
                <utils-card-image :card="card" class="card-image img-fluid"></utils-card-image>
            </div>
        </div>
    </div>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';
  import UtilsCardImage from '@/components/Utils/CardImage';
  import UtilsCardLink from '@/components/Utils/CardLink';

  export default {
    name: 'cards-list-full',
    props: ['cards'],
    components: {
      UtilsCardImage,
      UtilsCardLink,
      CardsCard,
    },
  }
  ;
</script>

<style>

</style>
