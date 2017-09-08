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
  import _ from 'lodash';
  import stores from '@/service/storeService';
  import * as types from '@/store/mutation-types';
  import BuilderCollectionRow from './CollectionRow';
  import BuilderCollectionFilter from './CollectionFilter';

  export default {
    name: 'builder-collection',
    components: {
      BuilderCollectionRow,
      BuilderCollectionFilter,
    },
    data() {
      return {
        filter: {},
      };
    },
    computed: {
      slots() {
        return this.$store.getters.slots;
      },
      clan() {
        let stronghold = null;
        _.find(Object.keys(this.slots), (cardId) => {
          stronghold = stores.cards({ id: cardId, type: 'stronghold' }).first();
          return stronghold !== false;
        });
        return stronghold ? stronghold.clan : null;
      },
      role() {
        let role = null;
        _.find(Object.keys(this.slots), (cardId) => {
          role = stores.cards({ id: cardId, type: 'role' }).first();
          return role !== false;
        });
        return role;
      },
      cards() {
        if (this.clan === null) {
          return stores.cards(this.filter);
        }

        const userFilter = this.filter;
        const queryFilter = userFilter.query;
        delete userFilter.query;

        const mainClanFilter = { clan: ['neutral', this.clan] };
        const conflictFilter = { side: 'conflict', influence_cost: { isUndefined: false } };
        const roleRestrictionFilter = [{ role_restriction: { isNull: true } }];
        const packFilter = { packs: { has: 'core' } };

        if (this.role && this.role.traits) {
          this.role.traits.forEach((trait) => {
            roleRestrictionFilter.push({ role_restriction: trait });
          });
        }

        return stores
          .cards([mainClanFilter, conflictFilter])
          .filter(roleRestrictionFilter)
          .filter(packFilter)
          .filter(userFilter)
          .filter(queryFilter)
          ;
      },
      cardslots() {
        return this.cards.map(record => ({
          card: record,
          min: 0,
          max: this.getMaxQuantity(record) || 3,
          current: this.getQuantity(record) || 0,
        }));
      },
    },
    methods: {
      getQuantity(card) {
        return this.$store.getters.quantity(card.id);
      },
      getMaxQuantity(card) {
        return this.$store.getters.available(card.id);
      },
      changeQuantity(msg) {
        this.$store.commit({ type: types.SET_SLOT_QUANTITY, cardId: msg.cardId, quantity: msg.quantity });
      },
      changeFilter(filter) {
        Object.keys(this.filter).forEach((key) => {
          this.$delete(this.filter, key);
        });
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
