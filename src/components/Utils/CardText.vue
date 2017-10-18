<template>
    <span v-html="formattedText"></span>
</template>

<script>
  export default {
    name: 'utils-card-text',
    props: ['text'],
    computed: {
      formattedText() {
        if (this.text === undefined) {
          return '';
        }

        return this.text.replace(
          /\[([\w-]+)\]/g,
          (match, p1) => `<span class="icon icon-${p1}" title="${this.$t(p1.replace('-', '.'))}"></span>`,
        );
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
