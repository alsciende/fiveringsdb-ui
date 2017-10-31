<template>
    <div class="row">
        <div class="col-3">
            <div v-for="activity in activities">
                {{ activity.deck.name }}
            </div>
        </div>
    </div>
</template>

<script>
    import rest from '@/rest';

  export default {
    name: 'activity-list',
    props: [],
    data() {
      return {
        activities: [],
      };
    },
    computed: {},
    methods: {
      load() {
        rest.private().get('activity').then((result) => {
          this.activities = result.records;
        });
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
