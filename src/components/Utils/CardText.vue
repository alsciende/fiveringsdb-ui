<template>
    <span v-html="formattedText"></span>
</template>

<script>
  import CardFormatter from '@/classes/CardFormatter';

  export default {
    name: 'utils-card-text',
    props: ['text'],
    computed: {
      formattedText() {
        return CardFormatter.format(this.text);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
