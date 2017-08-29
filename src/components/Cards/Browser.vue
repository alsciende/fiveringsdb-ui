<template>
    <div>
        <form>
            <div class="d-sm-flex">
                <div class="form-group mr-2" style="flex:1">
                    <form v-on:submit.prevent="search">
                        <input type="text" class="form-control" v-model="currentQuery" placeholder="Enter query">
                    </form>
                </div>
                <b-form-radio class="mb-4 mr-2"
                              button-variant="outline-secondary"
                              buttons
                              v-model="view"
                              :options="viewOptions"></b-form-radio>
                <b-form-radio class="mb-4 mr-2"
                              button-variant="outline-secondary"
                              buttons
                              v-model="sort"
                              :options="sortOptions"></b-form-radio>
                <div class="btn-group align-self-start">
                    <b-btn v-b-toggle.searchHelp variant="outline-secondary">
                        <span class="fa fa-info-circle"></span>
                    </b-btn>
                </div>
            </div>
            <b-collapse id="searchHelp">
                <div class="card card-body" v-html="searchHelp"></div>
            </b-collapse>
        </form>
        <b-pagination
                v-bind:total-rows="totalRows"
                v-bind:per-page="perPage"
                v-model="page"
                size="md"
                class="my-3 justify-content-center"
        >
        </b-pagination>
        <cards-list-full v-if="view === 'full' || totalRows === 1"
                         v-bind:cards="paginatedList"></cards-list-full>
        <cards-list-text v-else-if="view === 'text'" v-bind:cards="paginatedList"></cards-list-text>
        <cards-list-image v-else-if="view === 'image'" v-bind:cards="paginatedList"></cards-list-image>
        <cards-list-table v-else-if="view === 'table'" v-bind:cards="paginatedList"></cards-list-table>
        <b-pagination
                v-bind:total-rows="totalRows"
                v-bind:per-page="perPage"
                v-model="page"
                size="md"
                class="my-3 justify-content-center"
        >
        </b-pagination>
    </div>
</template>

<script>
  import stores from '@/service/storeService';
  import queryParser from '@/service/queryParser';
  import QueryInput from '@/classes/QueryInput';
  import queryMapper from '@/service/queryMapper';
  import queryBuilder from '@/service/queryBuilder';
  import queryRouter from '@/service/queryRouter';
  import CardsListFull from '@/components/Cards/ListFull';
  import CardsListText from '@/components/Cards/ListText';
  import CardsListImage from '@/components/Cards/ListImage';
  import CardsListTable from '@/components/Cards/ListTable';

  function parseRouteQuery(route) {
    const q = queryRouter.getQuery(route);
    const page = route.query.page ? parseInt(route.query.page, 10) : 1;
    const view = route.query.view || 'table';
    const sort = route.query.sort || 'name';
    return { q, page, view, sort };
  }

  export default {
    name: 'cards-browser',
    props: {
      query: {
        type: String,
        required: false,
        default: '',
      },
    },
    data() {
      return {
        realQuery: this.query,
        currentQuery: this.query,
        searchHelp: queryMapper.formatAsHtml(),
        page: 1,
        view: 'table',
        sort: 'name',
        viewOptions: [
          {
            value: 'table',
            text: '<span class="fa fa-list"></span>',
          },
          {
            value: 'text',
            text: '<span class="fa fa-th"></span>',
          },
          {
            value: 'image',
            text: '<span class="fa fa-file-image-o"></span>',
          },
          {
            value: 'full',
            text: '<span class="fa fa-file-text"></span>',
          },
        ],
        sortOptions: [
          {
            value: 'name',
            text: '<span class="fa fa-font"></span>',
          },
          {
            value: 'clan',
            text: '<span class="fa fa-flag"></span>',
          },
          {
            value: 'type',
            text: '<span class="fa fa-cube"></span>',
          },
        ],
      };
    },
    computed: {
      filteredList() {
        const clauses = queryParser.parse(this.realQuery);
        const queryInput = new QueryInput(clauses);
        const filters = queryBuilder.build(queryInput);
        return stores.cards.apply(this, filters).order(this.sort).get();
      },
      totalRows() {
        return this.filteredList.length;
      },
      paginatedList() {
        return this.filteredList.slice((this.page - 1) * this.perPage, this.page * this.perPage);
      },
      perPage() {
        switch (this.view) {
          case 'table':
          case 'text':
            return 300;
          default:
            return 20;
        }
      },
    },
    beforeRouteEnter(to, from, next) {
      const params = parseRouteQuery(to);
      next((vm) => {
        vm.currentQuery = params.q;
        vm.realQuery = params.q;
        vm.page = params.page;
        vm.view = params.view;
        vm.sort = params.sort;
      });
    },
    watch: {
      page() {
        this.navigate();
      },
      view() {
        this.navigate();
      },
      sort() {
        this.navigate();
      },
    },
    methods: {
      search() {
        this.realQuery = this.currentQuery;
        this.navigate();
      },
      navigate() {
        const route = queryRouter.getRoute(this.realQuery);
        if (route.query === undefined) {
          route.query = { q: '' };
        }
        route.query.page = this.page;
        route.query.view = this.view;
        route.query.sort = this.sort;

        if (route.query.q === '') {
          delete route.query.q;
        }
        if (route.query.page === 1) {
          delete route.query.page;
        }
        if (route.query.view === 'table') {
          delete route.query.view;
        }
        if (route.query.sort === 'name') {
          delete route.query.sort;
        }
        this.$router.push(route);
      },
    },
    components: {
      CardsListFull,
      CardsListText,
      CardsListImage,
      CardsListTable,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
