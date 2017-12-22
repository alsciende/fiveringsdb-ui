<template>
    <div class="collection">

        <builder-collection-filter
                :startingClans="startingClans"
                v-model="filters"
        ></builder-collection-filter>

        <table class="table table-sm">
            <thead>
            <tr>
                <th>Quantity</th>
                <th>Name</th>
                <th>Traits</th>
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
                    :influence="cardslot.card.clan !== mainClan"
                    @change="changeQuantity"
            >
            </builder-collection-row>

            </tbody>
        </table>
    </div>
</template>

<script>
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
        filters: [],
      };
    },
    computed: {
      slots() {
        return this.$store.getters.slots;
      },
      startingClans() {
        return stores.cards({ id: Object.keys(this.slots) }).distinct('clan');
      },
      stronghold() {
        return stores.cards({ id: Object.keys(this.slots), type: 'stronghold' }).first();
      },
      role() {
        return stores.cards({ id: Object.keys(this.slots), type: 'role' }).first();
      },
      mainClan() {
        return this.stronghold ? this.stronghold.clan : null;
      },
      roleRestrictionFilter() {
        const roleRestrictionFilter = [{
          role_restriction: { isNull: true },
        }];

        if (this.role && this.role.traits) {
          this.role.traits.forEach((trait) => {
            roleRestrictionFilter.push({ role_restriction: trait });
          });
        }

        return roleRestrictionFilter;
      },
      cards() {
        const cards = this.mainClan === null
          ? stores.cards()
          : stores.cards([{
            clan: ['neutral', this.mainClan],
          }, {
            side: 'conflict',
            influence_cost: { isUndefined: false },
          }]);

        return this.filters.reduce(
          (cards, filter) => cards.filter(filter),
          cards.filter(this.roleRestrictionFilter));
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
        this.$store.commit({
          type: types.SET_SLOT_QUANTITY,
          cardId: msg.cardId,
          quantity: msg.quantity,
        });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
