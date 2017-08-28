<template>
    <a :href="url" @click.prevent="showModal">{{ card.name }}</a>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'utils-card-link',
    components: {
      CardsCard,
    },
    props: ['card'],
    computed: {
      url() {
        return this.$router.resolve({
          name: 'cards-by-card-id',
          params: {
            id: this.card.id,
          },
        }).href;
      },
    },
    methods: {
      showModal() {
        this.$store.commit('openCardModale', this.card);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
