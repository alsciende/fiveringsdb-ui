<template>
    <div class="quantity-selector">
        <div class="btn-group btn-group-sm" role="group">
            <button v-for="quantity in range"
                    @click="select(quantity)"
                    type="button"
                    :class="{ 'btn btn-outline-secondary': true, 'active': quantity === value }"
            >
                {{ quantity }}
            </button>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash';

  export default {
    name: 'builder-quantity-selector',
    props: {
      min: {
        type: Number,
        default: () => 0,
      },
      max: {
        type: Number,
        required: true,
      },
      current: {
        type: Number,
        required: true,
      },
    },
    data() {
      return {
        value: this.current,
      };
    },
    computed: {
      range() {
        return _.range(this.min, this.max + 1);
      },
    },
    methods: {
      select(value) {
        this.value = value;
        this.$emit('change', value);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
