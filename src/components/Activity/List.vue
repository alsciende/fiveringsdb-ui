<template>
    <div>
    </div>
</template>

<script>
    import rest from '@/rest';

  export default {
    name: 'activity-list',
    props: [],
    data() {
      return {};
    },
    computed: {},
    methods: {
      load() {
        rest.private().get('activity').then(console.log);
      },
    },
    mounted() {
      this.load();
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
