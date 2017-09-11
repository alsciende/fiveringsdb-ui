<template>
    <div>
        <div class="d-sm-flex mb-2">
            <input v-model="query" class="form-control form-control-sm mr-2"
                   placeholder="Card filter (e.g. x:sincerity or k:bushi)">
            <b-btn v-b-toggle.searchHelp variant="outline-secondary" size="sm">
                <span class="fa fa-info-circle"></span>
            </b-btn>
        </div>
        <b-collapse id="searchHelp">
            <div class="card card-body" v-html="searchHelp"></div>
        </b-collapse>
        <div class="btn-group btn-clans d-flex my-2" role="group" aria-label="Clan Filter">
            <button
                    v-for="clan in clanOptions"
                    type="button"
                    class="btn btn-outline-secondary btn-sm col"
                    :class="['clan-'+clan.id, clans[clan.id] ? 'active' : '']"
                    :title="clan.name"
                    @click="changeClan(clan.id)"
            ><span :class="'icon icon-clan-'+clan.id"></span></button>
        </div>

        <div class="btn-group d-flex my-2" role="group" aria-label="Deck Filter">
            <button
                    v-for="side in sideOptions"
                    type="button"
                    class="btn btn-outline-secondary btn-sm col"
                    :class="['side-'+side.id, sides[side.id] ? 'active' : '']"
                    :title="side.name"
                    @click="changeSide(side.id)"
            >{{ $t('side.' + side.id).substr(0, 1) }}
            </button>
        </div>

        <div class="btn-group d-flex my-2" role="group" aria-label="Type Filter">
            <button
                    v-for="type in typeOptions"
                    type="button"
                    class="btn btn-outline-secondary btn-sm col"
                    :class="['type-'+type.id, types[type.id] ? 'active' : '']"
                    :title="type.name"
                    @click="changeType(type.id)"
            ><span :class="'fa fa-'+typeIcon(type.id)"></span></button>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash';
  import stores from '@/service/storeService';
  import typeIcons from '@/service/typeIcons';
  import queryParser from '@/service/queryParser';
  import QueryInput from '@/classes/QueryInput';
  import queryMapper from '@/service/queryMapper';
  import queryBuilder from '@/service/queryBuilder';

  const INPUT_DEBOUNCE_TIMER_MS = 500;

  export default {
    name: 'builder-collection-filter',
    components: {},
    props: {
      startingClans: {
        type: Array,
        required: true,
      },
    },
    data() {
      const clans = {};
      const types = {};
      const clanOptions = this.getClanOptions();
      clanOptions.forEach((clan) => {
        clans[clan.id] = this.startingClans.length ? this.startingClans.indexOf(clan.id) !== -1 : true;
      });
      const typeOptions = this.getTypeOptions();
      typeOptions.forEach((type) => {
        types[type.id] = this.startingClans.length ? type.id !== 'stronghold' && type.id !== 'role' : type.id === 'stronghold';
      });
      const sideOptions = this.getSideOptions();
      const sides = {
        dynasty: true,
        conflict: true,
        province: true,
        role: true,
      };

      return {
        query: '',
        clans,
        types,
        sides,
        clanOptions,
        typeOptions,
        sideOptions,
        filter: {
          clan: [],
          type: [],
        },
        searchHelp: queryMapper.formatAsHtml(),
      };
    },
    methods: {
      updateFilter() {
        ['clan', 'side', 'type'].forEach((filter) => {
          this.filter[filter] = [];
          Object.keys(this[`${filter}s`]).forEach((id) => {
            if (this[`${filter}s`][id]) {
              this.filter[filter].push(id);
            }
          });
        });
        this.$emit('change', this.filter);
      },
      updateQuery() {
        const clauses = queryParser.parse(this.query);
        const queryInput = new QueryInput(clauses);
        this.filter.query = queryBuilder.build(queryInput);
        if (this.filter.query.length === 0) {
          delete this.filter.query;
        }
        this.$emit('change', this.filter);
      },
      changeClan(clanId) {
        this.clans[clanId] = !this.clans[clanId];
        this.updateFilter();
      },
      changeSide(sideId) {
        this.sides[sideId] = !this.sides[sideId];
        this.updateFilter();
      },
      changeType(typeId) {
        this.types[typeId] = !this.types[typeId];
        this.updateFilter();
      },
      typeIcon(type) {
        return typeIcons.icon(type);
      },
      getClanOptions() {
        const clans = stores
          .cards()
          .distinct('clan')
          .map(clanId => ({ id: clanId, name: this.$t(`clan.${clanId}`) }))
        ;
        const partition = _.partition(clans, item => item.id === 'neutral');
        return _.sortBy(partition[1], 'name').concat(partition[0]);
      },
      getTypeOptions() {
        return ['holding', 'character', 'attachment', 'event', 'province', 'stronghold', 'role']
          .map(typeId => ({ id: typeId, name: this.$t(`type.${typeId}`) }))
          ;
      },
      getSideOptions() {
        return ['dynasty', 'conflict', 'province', 'role']
          .map(sideId => ({ id: sideId, name: this.$t(`side.${sideId}`) }))
          ;
      },
    },
    watch: {
      query: _.debounce(function update() {
        this.updateQuery();
      }, INPUT_DEBOUNCE_TIMER_MS),
    },
    mounted() {
      this.updateFilter();
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .btn-clans .btn.clan-crab {
        color: rgb(0, 28, 148);
    }

    .btn-clans .btn.clan-crane {
        color: rgb(0, 137, 222);
    }

    .btn-clans .btn.clan-dragon {
        color: rgb(0, 164, 114);
    }

    .btn-clans .btn.clan-lion {
        color: rgb(203, 157, 0);
    }

    .btn-clans .btn.clan-phoenix {
        color: rgb(193, 100, 0);
    }

    .btn-clans .btn.clan-scorpion {
        color: rgb(166, 22, 0);
    }

    .btn-clans .btn.clan-unicorn {
        color: rgb(120, 0, 152);
    }

    .btn-clans .btn.clan-neutral {
        color: rgb(100, 100, 100);
    }

    .btn-clans .btn.active.clan-dragon {
        background: rgb(0, 164, 114);
    }

    .btn-clans .btn.clan-crab:hover, .btn-clans .btn.active.clan-crab {
        background: rgb(0, 28, 148);
        color: white;
    }

    .btn-clans .btn.clan-crane:hover, .btn-clans .btn.active.clan-crane {
        background: rgb(0, 137, 222);
        color: white;
    }

    .btn-clans .btn.clan-dragon:hover, .btn-clans .btn.active.clan-dragon {
        background: rgb(0, 164, 114);
        color: white;
    }

    .btn-clans .btn.clan-lion:hover, .btn-clans .btn.active.clan-lion {
        background: rgb(203, 157, 0);
        color: white;
    }

    .btn-clans .btn.clan-phoenix:hover, .btn-clans .btn.active.clan-phoenix {
        background: rgb(193, 100, 0);
        color: white;
    }

    .btn-clans .btn.clan-scorpion:hover, .btn-clans .btn.active.clan-scorpion {
        background: rgb(166, 22, 0);
        color: white;
    }

    .btn-clans .btn.clan-unicorn:hover, .btn-clans .btn.active.clan-unicorn {
        background: rgb(120, 0, 152);
        color: white;
    }

    .btn-clans .btn.clan-neutral:hover, .btn-clans .btn.active.clan-neutral {
        background: rgb(100, 100, 100);
        color: white;
    }
</style>
