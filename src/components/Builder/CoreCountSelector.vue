<template>
    <b-form-select
            v-model="coreCount"
            :options="coreCountOptions"
            class="mb-3"
            size="sm"
    ></b-form-select>
</template>

<script>
  import * as types from '@/store/mutation-types';

  export default {
    name: 'builder-core-count-selector',
    data() {
      return {
        coreCount: 3,
        coreCountOptions: [1, 2, 3].map(coreCount => ({
          value: coreCount,
          text: `${coreCount} Core${coreCount > 1 ? 's' : ''}`,
        })),
      };
    },
    watch: {
      coreCount() {
        this.$store.commit({ type: types.SET_CORE_COUNT, coreCount: this.coreCount });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
