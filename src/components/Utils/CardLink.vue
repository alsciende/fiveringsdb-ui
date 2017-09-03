<template>
    <a :href="url" @mouseover="changePopover" v-b-popover.hover.html.d100="popover" @click.prevent="showModal">{{ card.name }}</a>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'utils-card-link',
    components: {
      CardsCard,
    },
    props: ['card'],
    data() {
      return {
        popover: () => document.getElementById('popover-card-container').innerHTML,
      };
    },
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
      changePopover() {
        this.$store.commit('changeCardPopover', this.card);
      },
      showModal() {
        this.$store.commit('openCardModale', this.card);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
