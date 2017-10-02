<template>
    <span :class="classObject" :title="title"></span>
</template>

<script>
  import typeIcons from '@/service/typeIcons';

  export default {
    name: 'utils-card-icon',
    props: ['card'],
    computed: {
      title() {
        return this.$t(`type.${this.card.type}`);
      },
      classObject() {
        return [
          'fa',
          'fa-fw',
          `fa-${typeIcons.icon(this.card.type)}`,
          `fg-dark-${this.card.clan}`,
        ];
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
