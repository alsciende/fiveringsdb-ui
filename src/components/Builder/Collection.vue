<template>
    <div class="collection">
        <div class="row">
            <div class="col-md-6">
                <multiselect
                        v-model="clanValue"
                        :options="clanOptions"
                        :multiple="true"
                        label="name"
                        track-by="id"
                        :maxHeight="1000"
                        placeholder="Select Clan"
                        :block-keys="['Tab', 'Enter']"
                        :selectLabel="null"
                        :deselectLabel="null"
                        class="mb-2"
                >
                    <template slot="tag" scope="props">
                        <u class="mr-2 d-inline-block">{{ props.option.name }}</u>
                    </template>
                </multiselect>
            </div>
            <div class="col-md-6">
                <multiselect
                        v-model="typeValue"
                        :options="typeOptions"
                        :multiple="true"
                        label="name"
                        track-by="id"
                        :maxHeight="1000"
                        placeholder="Select Type"
                        :block-keys="['Tab', 'Enter']"
                        :selectLabel="null"
                        :deselectLabel="null"
                        class="mb-2"
                >
                    <template slot="tag" scope="props">
                        <u class="mr-2 d-inline-block">{{ props.option.name }}</u>
                    </template>
                </multiselect>
            </div>
        </div>

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
                    @change="change"
            >
            </builder-collection-row>

            </tbody>
        </table>
    </div>
</template>

<script>
  import _ from 'underscore';
  import Multiselect from 'vue-multiselect';
  import stores from '@/service/storeService';
  import BuilderCollectionRow from './CollectionRow';

  export default {
    name: 'builder-collection',
    components: {
      BuilderCollectionRow,
      Multiselect,
    },
    props: ['deck'],
    data() {
      return {
        filter: {},
        clanValue: null,
        clanOptions: this.getClanOptions(),
        typeValue: null,
        typeOptions: this.getTypeOptions(),
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
      getClanOptions() {
        const clans = stores
          .cards()
          .distinct('clan')
          .map(clanId => ({ id: clanId, name: this.$t(`clan.${clanId}`) }))
        ;
        return _.sortBy(clans, 'name');
      },
      getTypeOptions() {
        const types = stores
          .cards()
          .distinct('type')
          .map(typeId => ({ id: typeId, name: this.$t(`type.${typeId}`) }))
        ;
        return _.sortBy(types, 'name');
      },
      change(msg) {
        this.$emit('change', msg);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    /*
    .multiselect__tag {
        border: 1px solid grey;
        color: #000;
        background: #fff;
    }
    .multiselect__tag-icon:hover {
        background: grey;
    }
    .multiselect__tag-icon:after {
        color: grey;
    }
    */
    .multiselect--active {
        z-index: 3 !important;
    }

    .multiselect__content-wrapper {
        z-index: 3 !important;
    }
</style>
