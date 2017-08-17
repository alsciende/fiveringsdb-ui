<template>
    <span v-html="formattedText"></span>
</template>

<script>
  import cardFormatter from '@/service/cardFormatter';

  export default {
    name: 'utils-card-text',
    props: ['text'],
    computed: {
      formattedText() {
        return cardFormatter.format(this.text);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
