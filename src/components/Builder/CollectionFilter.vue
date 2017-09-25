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

        <b-form-checkbox-group
                v-model="filter.clan"
                buttons
                button-variant="outline-secondary"
                class="btn-group btn-clans d-flex my-2" role="group" aria-label="Clan Filter"
        >
            <b-form-checkbox @click.native="onClick('clan', $event)" v-for="clan in options.clan" :key="clan.id"
                             class="btn-sm col" :class="'clan-'+clan.id"
                             :value="clan.id">
                <span :class="['icon', 'icon-clan-'+clan.id]"></span>
            </b-form-checkbox>
        </b-form-checkbox-group>

        <b-form-checkbox-group
                v-model="filter.side"
                buttons
                button-variant="outline-secondary"
                class="btn-group d-flex my-2" role="group" aria-label="Deck Filter"
        >
            <b-form-checkbox @click.native="onClick('side', $event)" v-for="side in options.side" :key="side.id"
                             class="btn-sm col"
                             :value="side.id">
                {{ $t('side.' + side.id).substr(0, 1) }}
            </b-form-checkbox>
        </b-form-checkbox-group>

        <b-form-checkbox-group
                v-model="filter.type"
                buttons
                button-variant="outline-secondary"
                class="btn-group d-flex my-2" role="group" aria-label="Type Filter"
        >
            <b-form-checkbox @click.native="onClick('type', $event)" v-for="type in options.type" :key="type.id"
                             class="btn-sm col"
                             :value="type.id">
                <span :class="'fa fa-'+typeIcon(type.id)"></span>
            </b-form-checkbox>
        </b-form-checkbox-group>
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
      return {
        query: '',
        filter: {
          clan: this.startingClans,
          side: ['dynasty', 'conflict', 'province', 'role'],
          type: ['attachment', 'character', 'event', 'holding', 'province'],
        },
        options: {
          clan: this.getClanOptions(),
          side: this.getSideOptions(),
          type: this.getTypeOptions(),
        },
        searchHelp: queryMapper.formatAsHtml(),
      };
    },
    methods: {
      onClick(option, evt) {
        if (evt.shiftKey && evt.target.tagName === 'INPUT') {
          if (evt.target.checked) {
            this.filter[option] = [evt.target.value];
          }
        }
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
        return [
          'holding',
          'character',
          'attachment',
          'event',
          'province',
          'stronghold',
          'role',
        ].map(typeId => ({ id: typeId, name: this.$t(`type.${typeId}`) }));
      },
      getSideOptions() {
        return ['dynasty', 'conflict', 'province', 'role']
          .map(sideId => ({ id: sideId, name: this.$t(`side.${sideId}`) }));
      },
    },
    computed: {
      value() {
        return Object.assign({}, this.filter);
      },
    },
    watch: {
      value() {
        this.$emit('change', this.value);
      },
      query: _.debounce(function update() {
        this.updateQuery();
      }, INPUT_DEBOUNCE_TIMER_MS),
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
