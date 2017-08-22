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
        <td class="card-name">
            <utils-card-icon :card="cardslot.card"></utils-card-icon>
            <utils-card-link
                    :card="cardslot.card"
            ></utils-card-link>
        </td>
    </tr>
</template>

<script>
  import UtilsCardLink from '@/components/Utils/CardLink';
  import UtilsCardIcon from '@/components/Utils/CardIcon';
  import BuilderQuantitySelector from './QuantitySelector';

  export default {
    name: 'builder-collection-row',
    components: {
      BuilderQuantitySelector,
      UtilsCardLink,
      UtilsCardIcon,
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
<style scoped>
    .card-name {
        padding: .55rem .25rem;
    }
</style>
