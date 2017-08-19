<template>
    <div class="cards-list d-flex flex-wrap">
        <div v-for="card in cards" v-bind:key="card.id" class="col-lg-4 col-sm-6 col-12 align-self-stretch mb-4">
            <cards-card v-bind:card="card">
                <utils-card-link v-bind:card="card"></utils-card-link>
            </cards-card>
        </div>
    </div>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';
  import UtilsCardLink from '@/components/Utils/CardLink';

  export default {
    name: 'cards-list-text',
    props: ['cards'],
    components: {
      UtilsCardLink,
      CardsCard,
    },
  }
  ;
</script>

<style>

</style>