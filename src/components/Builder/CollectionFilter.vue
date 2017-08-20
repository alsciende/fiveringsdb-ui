<template>
    <div>
        <div class="btn-group btn-sm btn-clans d-flex" role="group" aria-label="Clan Filter">
            <button
                    v-for="clan in clanOptions"
                    type="button"
                    class="btn btn-outline-secondary col"
                    :class="['clan-'+clan.id, clans[clan.id] ? 'active' : '']"
                    :title="clan.name"
                    @click="changeClan(clan.id)"
            ><span :class="'icon icon-clan-'+clan.id"></span></button>
        </div>

        <div class="btn-group btn-sm d-flex" role="group" aria-label="Type Filter">
            <button
                    v-for="type in typeOptions"
                    type="button"
                    class="btn btn-outline-secondary col"
                    :class="['type-'+type.id, types[type.id] ? 'active' : '']"
                    :title="type.name"
                    @click="changeType(type.id)"
            ><span :class="'fa fa-'+typeIcon(type.id)"></span></button>
        </div>
    </div>
</template>

<script>
  import _ from 'underscore';
  import stores from '@/service/storeService';
  import typeIcons from '@/service/typeIcons';

  export default {
    name: 'builder-collection-filter',
    components: {},
    props: {
      clan: {
        type: String,
      },
    },
    data() {
      const clans = {};
      const types = {};
      const clanOptions = this.getClanOptions();
      clanOptions.forEach((clan) => {
        clans[clan.id] = this.clan ? clan.id === this.clan : true;
      });
      const typeOptions = this.getTypeOptions();
      typeOptions.forEach((type) => {
        types[type.id] = this.clan ? type.id !== 'stronghold' && type.id !== 'role' : type.id === 'stronghold';
      });

      return {
        clans,
        types,
        clanOptions,
        typeOptions,
        filter: {
          clan: [],
          type: [],
        },
      };
    },
    methods: {
      updateFilter() {
        this.filter.clan = [];
        Object.keys(this.clans).forEach((clanId) => {
          if (this.clans[clanId]) {
            this.filter.clan.push(clanId);
          }
        });
        this.filter.type = [];
        Object.keys(this.types).forEach((typeId) => {
          if (this.types[typeId]) {
            this.filter.type.push(typeId);
          }
        });
        this.$emit('change', this.filter);
      },
      changeClan(clanId) {
        this.clans[clanId] = !this.clans[clanId];
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
        const types = stores
          .cards()
          .distinct('type')
          .map(typeId => ({ id: typeId, name: this.$t(`type.${typeId}`) }))
        ;
        return _.sortBy(types, 'name');
      },
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
