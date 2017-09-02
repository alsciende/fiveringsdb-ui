<template>
    <div v-if="loading === false">
        <form>
            <div class="d-sm-flex">
                <div class="form-group mr-2" style="flex:1">
                    <form v-on:submit.prevent="search">
                        <input type="text" class="form-control" v-model="currentQuery" placeholder="Card filter (e.g. x:sincerity or k:bushi)">
                    </form>
                </div>
                <b-form-radio class="mb-4 mr-2"
                              button-variant="outline-secondary"
                              buttons
                              v-model="currentView"
                              :options="viewOptions"></b-form-radio>
                <b-form-radio class="mb-4 mr-2"
                              button-variant="outline-secondary"
                              buttons
                              v-model="currentSort"
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
                v-model="currentPage"
                size="md"
                class="my-3 justify-content-center"
        >
        </b-pagination>
        <cards-list-full v-if="realView === 'full' || totalRows === 1"
                         v-bind:cards="paginatedList"></cards-list-full>
        <cards-list-text v-else-if="realView === 'text'" v-bind:cards="paginatedList"></cards-list-text>
        <cards-list-image v-else-if="realView === 'image'" v-bind:cards="paginatedList"></cards-list-image>
        <cards-list-table v-else-if="realView === 'table'" v-bind:cards="paginatedList"></cards-list-table>
        <b-pagination
                v-bind:total-rows="totalRows"
                v-bind:per-page="perPage"
                v-model="currentPage"
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
      const query = this.query;
      const page = parseInt(this.$route.query.page, 10) || 1;
      const view = this.$route.query.view || 'table';
      const sort = this.$route.query.sort || 'name';
      /**
       * 'real' data is what the computed properties use
       * 'current' data is what the controls use
       * Changing a 'current' data doesn't trigger a change of the list ;
       * instead, it triggers a navigation with the new parameters
       * which will in turn compute a new list
       */
      return {
        loading: true,
        realQuery: query,
        currentQuery: query,
        realPage: page,
        currentPage: page,
        currentView: view,
        realView: view,
        currentSort: sort,
        realSort: sort,
        searchHelp: queryMapper.formatAsHtml(),
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
        return stores.cards.apply(this, filters);
      },
      totalRows() {
        return this.filteredList.count();
      },
      sortedList() {
        return this.filteredList.order(this.realSort);
      },
      paginatedList() {
        return this.sortedList.get().slice(
          (this.realPage - 1) * this.perPage,
          this.realPage * this.perPage,
        );
      },
      perPage() {
        switch (this.realView) {
          case 'table':
            return 300;
          case 'text':
            return 30;
          default:
            return 20;
        }
      },
    },
    beforeRouteEnter(to, from, next) {
      next((vm) => {
        vm.applyRouteParameters(to);
      });
    },
    beforeRouteUpdate(to, from, next) {
      this.applyRouteParameters(to);
      next();
    },
    watch: {
      currentPage() {
        if (this.realPage !== this.currentPage) {
          this.realPage = this.currentPage;
          this.navigate();
        }
      },
      currentView() {
        if (this.realView !== this.currentView) {
          this.realPage = this.currentPage = 1;
          this.realView = this.currentView;
          this.navigate();
        }
      },
      currentSort() {
        if (this.realSort !== this.currentSort) {
          this.realSort = this.currentSort;
          this.navigate();
        }
      },
    },
    methods: {
      applyRouteParameters(route) {
        const params = parseRouteQuery(route);
        this.realQuery = this.currentQuery = params.q;
        this.realPage = this.currentPage = params.page;
        this.realView = this.currentView = params.view;
        this.realSort = this.currentSort = params.sort;
        this.loading = false;
        this.$store.commit('changeDocumentTitle', this.getDocumentTitle(route));
      },
      getDocumentTitle(route) {
        const defaultTitle = 'Card Browser';
        switch (route.name) {
          case 'cards-by-card-id':
            return stores.cards({ id: route.params.id }).first().name + ' • Card' || defaultTitle;
          case 'cards-by-pack-id':
            return stores.packs({ id: route.params.id }).first().name + ' • Pack' || defaultTitle;
          case 'cards-by-clan-id':
            return this.$t(`clan.${route.params.id}`) + ' • Clan' || defaultTitle;
          default:
            return defaultTitle;
        }
      },
      search() {
        if (this.realQuery !== this.currentQuery) {
          this.realQuery = this.currentQuery;
          this.realPage = this.currentPage = 1;
          this.navigate();
        }
      },
      navigate() {
        const route = queryRouter.getRoute(this.realQuery);
        if (route.query === undefined) {
          route.query = { q: '' };
        }
        route.query.page = this.realPage;
        route.query.view = this.realView;
        route.query.sort = this.realSort;

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
