<template>
    <div class="collection">

        <builder-collection-filter
                :clan="initialClan"
                @change="changeFilter"
        ></builder-collection-filter>

        <table class="table table-sm">
            <thead>
            <tr>
                <th>Quantity</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            <builder-collection-row
                    v-for="cardslot in cardslots"
                    :key="cardslot.card.id"
                    :cardslot="cardslot"
                    @change="changeQuantity"
            >
            </builder-collection-row>

            </tbody>
        </table>
    </div>
</template>

<script>
  import _ from 'underscore';
  import stores from '@/service/storeService';
  import BuilderCollectionRow from './CollectionRow';
  import BuilderCollectionFilter from './CollectionFilter';

  export default {
    name: 'builder-collection',
    components: {
      BuilderCollectionRow,
      BuilderCollectionFilter,
    },
    props: ['deck'],
    data() {
      const filter = {};
      const initialClan = this.findDeckClan(this.deck);
      if (initialClan !== null) {
        filter.clan = [initialClan];
      }
      return {
        filter,
        initialClan,
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
      findDeckClan(deck) {
        let stronghold = null;
        _.find(Object.keys(deck.cards), (cardId) => {
          stronghold = stores.cards({ id: cardId, type: 'stronghold' }).first();
          return stronghold !== false;
        });
        return stronghold === undefined ? null : stronghold.clan;
      },
      changeQuantity(msg) {
        this.$emit('change', msg);
      },
      changeFilter(filter) {
        Object.keys(filter).forEach((key) => {
          this.$set(this.filter, key, filter[key]);
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
