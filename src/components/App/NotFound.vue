<template>
    <div>
        Page Not Found
    </div>
</template>

<script>
  export default {
    name: 'app-not-found',
    props: [],
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Not Found');
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
