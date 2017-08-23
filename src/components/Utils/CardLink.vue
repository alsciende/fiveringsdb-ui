<template>
    <a href="#" @click.prevent="showModal">{{ card.name }}</a>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'utils-card-link',
    components: {
      CardsCard,
    },
    props: ['card'],
    methods: {
      showModal() {
        this.$vuedals.open({
          name: 'card-popup',
          component: CardsCard,
          props: {
            card: this.card,
            image: true,
          },
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
