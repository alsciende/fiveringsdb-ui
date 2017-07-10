<template>
    <span v-html="formattedText"></span>
</template>

<script>
function replaceIcons(text) {
  return text.replace(/\[([\w-]+)\]/g, '<span class="icon icon-$1"></span>');
}
export default {
  name: 'utils-card-text',
  props: ['text'],
  computed: {
    formattedText() {
      return replaceIcons(this.text);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    i {
        font-weight: bold;
        font-style: italic;
    }
</style>
