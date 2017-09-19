<template>
    <img :src="card.main_slot.image_url" :class="classes" class="card-image img-fluid">
</template>

<script>
  export default {
    name: 'utils-card-image',
    props: ['card', 'classes'],
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
