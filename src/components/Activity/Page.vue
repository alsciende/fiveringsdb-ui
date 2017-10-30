<template>
    <div>
        <activity-list></activity-list>
    </div>
</template>

<script>
    import ActivityList from './List';

  export default {
    name: 'activity-page',
    components: {
      ActivityList
    },
    props: [],
    data() {
      return {};
    },
    computed: {},
    methods: {},
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
