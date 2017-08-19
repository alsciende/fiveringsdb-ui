<template>
    <div class="collection">
        <table class="table table-sm">
            <thead>
            <tr>
                <td>Quantity</td>
                <td>Name</td>
            </tr>
            </thead>
            <tbody>
            <builder-collection-row
                    v-for="cardslot in cardslots"
                    :key="cardslot.card.id"
                    :cardslot="cardslot"
                    @change="change"
            >
            </builder-collection-row>

            </tbody>
        </table>
    </div>
</template>

<script>
  import stores from '@/service/storeService';
  import BuilderCollectionRow from './CollectionRow';

  export default {
    name: 'builder-collection',
    components: {
      BuilderCollectionRow,
    },
    props: ['deck'],
    data() {
      return {
        filter: {},
      };
    },
    computed: {
      cards() {
        return stores.cards(this.filter);
      },
      cardslots() {
        return this.cards.map((record) => {
          return {
            card: record,
            min: 0,
            max: record.deck_limit,
            current: this.deck.cards[record.id] || 0,
          };
        });
      },
    },
    methods: {
      change(msg) {
        this.$emit('change', msg);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
