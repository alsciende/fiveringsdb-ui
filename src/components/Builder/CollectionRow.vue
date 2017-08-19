<template>
    <tr class="collection-row">
        <td>
            <builder-quantity-selector
                    :min="cardslot.min"
                    :max="cardslot.max"
                    :current="cardslot.current"
                    @change="change"
            ></builder-quantity-selector>
        </td>
        <td>
            {{ cardslot.card.name }}
        </td>
    </tr>
</template>

<script>
  import BuilderQuantitySelector from './QuantitySelector';

  export default {
    name: 'builder-collection-row',
    components: {
      BuilderQuantitySelector,
    },
    props: {
      cardslot: {
        type: Object,
        required: true,
      },
    },
    methods: {
      change(quantity) {
        this.$emit('change', {
          cardId: this.cardslot.card.id,
          quantity,
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
