<template>
    <b-modal id="card_modale" v-model="visible" @hidden="hidden" size="lg" okTitle="Go to card page" @ok="goToCardPage">
        <div v-if="card" class="row">
            <div class="col-4 d-none d-md-block">
                <utils-card-image :card="card"></utils-card-image>
            </div>
            <div class="col-12 col-md-8">
                <cards-card :card="card" :image="true"></cards-card>
            </div>
        </div>
    </b-modal>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';
  import UtilsCardImage from '@/components/Utils/CardImage';

  export default {
    components: {
      CardsCard,
      UtilsCardImage,
    },
    name: 'utils-card-modale',
    data() {
      return {
        visible: false,
      };
    },
    computed: {
      card() {
        const card = this.$store.getters.cardModale;
        this.visible = card !== null;
        return card;
      },
    },
    methods: {
      hidden() {
        this.$store.commit('closeCardModale');
      },
      goToCardPage() {
        this.$router.push({
          name: 'cards-by-card-id',
          params: {
            id: this.card.id,
          },
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
