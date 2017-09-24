<template>
    <a :href="url" v-b-popover="popover" @mouseover="changePopover" @touchstart="touchDevice"
       @click.prevent="showModal">{{ card.name }}</a>
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
        popover: {
          content: () => document.getElementById('popover-card-container').innerHTML,
          trigger: 'hover',
          delay: { show: 600, hide: 100 },
          html: true,
          animation: false,
        },
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
      touchDevice() {
        if (this.$store.getters.touchDevice === false) {
          this.$store.commit('touchDevice', true);
        }
      },
      changePopover() {
        if (this.$store.getters.touchDevice === false) {
          this.$store.commit('changeCardPopover', this.card);
        }
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
