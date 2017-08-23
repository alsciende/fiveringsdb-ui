<template>
    <tr class="collection-row">
        <td>
            <builder-quantity-selector
                    :min="min"
                    :max="max"
                    :current="current"
                    @change="change"
            ></builder-quantity-selector>
        </td>
        <td class="card-name">
            <utils-card-icon :card="card"></utils-card-icon>
            <utils-card-link
                    :card="card"
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
    props: ['card', 'min', 'max', 'current'],
    methods: {
      change(quantity) {
        this.$emit('change', {
          cardId: this.card.id,
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
