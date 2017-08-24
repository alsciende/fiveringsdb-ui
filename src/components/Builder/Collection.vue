<template>
    <div class="collection">

        <builder-collection-filter
                :clan="clan"
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
                    :card="cardslot.card"
                    :min="cardslot.min"
                    :max="cardslot.max"
                    :current="cardslot.current"
                    :influence="cardslot.card.clan !== clan"
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
    props: ['deck', 'coreCount'],
    data() {
      const filter = {};
      return {
        filter,
      };
    },
    computed: {
      clan() {
        return this.findDeckClan(this.deck);
      },
      cards() {
        if (this.clan === null) {
          return stores.cards(this.filter);
        }

        const mainClanFilter = { clan: ['neutral', this.clan] };
        const conflictFilter = { side: 'conflict', influence_cost: { isUndefined: false } };
        const roleRestrictionFilter = [{ role_restriction: { isNull: true } }];

        const role = this.findDeckRole(this.deck);
        if (role && role.traits) {
          role.traits.forEach((trait) => {
            roleRestrictionFilter.push({ role_restriction: trait });
          });
        }

        return stores.cards([mainClanFilter, conflictFilter]).filter(roleRestrictionFilter).filter(this.filter);
      },
      cardslots() {
        return this.cards.map((record) => {
          let max = record.deck_limit;
          const coreSlot = record.pack_cards.find(slot => slot.pack.id === 'core');
          if (coreSlot) {
            max = Math.min(max, this.coreCount * coreSlot.quantity);
          }
          return {
            card: record,
            min: 0,
            max,
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
        return stronghold ? stronghold.clan : null;
      },
      findDeckRole(deck) {
        let role = null;
        _.find(Object.keys(deck.cards), (cardId) => {
          role = stores.cards({ id: cardId, type: 'role' }).first();
          return role !== false;
        });
        return role;
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
