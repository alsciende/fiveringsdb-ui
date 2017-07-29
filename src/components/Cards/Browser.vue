<template>
    <div>
        <form>
        <div class="d-sm-flex">
            <div class="form-group mr-2" style="flex:1">
                <form v-on:submit.prevent="navigate">
                    <input type="text" class="form-control" v-model="currentQuery" placeholder="Enter query">
                </form>
            </div>
            <div class="btn-group align-self-start mr-2"  data-toggle="buttons">
                <label v-bind:class="['btn', 'btn-secondary', currentView === 'table' ? 'active' : '']" v-on:click="currentView = 'table'" title="View as Table">
                    <input type="radio" name="currentView" id="table" autocomplete="off" v-model="currentView">
                    <span class="fa fa-list"></span>
                </label>
                <label v-bind:class="['btn', 'btn-secondary', currentView === 'text' ? 'active' : '']" v-on:click="currentView = 'text'" title="View as Text">
                    <input type="radio" name="currentView" id="text" autocomplete="off" v-model="currentView">
                    <span class="fa fa-th"></span>
                </label>
                <label v-bind:class="['btn', 'btn-secondary', currentView === 'image' ? 'active' : '']" v-on:click="currentView = 'image'" title="View as Image">
                    <input type="radio" name="currentView" id="image" autocomplete="off" v-model="currentView">
                    <span class="fa fa-file-image-o"></span>
                </label>
                <label v-bind:class="['btn', 'btn-secondary', currentView === 'full' ? 'active' : '']" v-on:click="currentView = 'full'" title="View as Both">
                    <input type="radio" name="currentView" id="full" autocomplete="off" v-model="currentView">
                    <span class="fa fa-file-text"></span>
                </label>
            </div>
            <div class="btn-group align-self-start mr-2"  data-toggle="buttons">
                <label v-bind:class="['btn', 'btn-secondary', currentSort === 'name' ? 'active' : '']" v-on:click="currentSort = 'name'" title="Sort by Name">
                    <input type="radio" name="currentSort" id="name" autocomplete="off" v-model="currentSort">
                    <span class="fa fa-font"></span>
                </label>
                <label v-bind:class="['btn', 'btn-secondary', currentSort === 'clan' ? 'active' : '']" v-on:click="currentSort = 'clan'" title="Sort by Clan">
                    <input type="radio" name="currentSort" id="clan" autocomplete="off" v-model="currentSort">
                    <span class="fa fa-flag"></span>
                </label>
                <label v-bind:class="['btn', 'btn-secondary', currentSort === 'type' ? 'active' : '']" v-on:click="currentSort = 'type'" title="Sort by Type">
                    <input type="radio" name="currentSort" id="type" autocomplete="off" v-model="currentSort">
                    <span class="fa fa-cube"></span>
                </label>
            </div>
            <div class="btn-group align-self-start">
                <button type="button" class="btn btn-secondary" data-toggle="collapse" data-target="#searchHelp"><span class="fa fa-info-circle"></span></button>
            </div>
        </div>
        <div class="collapse" id="searchHelp">
            <div class="card card-block" v-html="searchHelp"></div>
        </div>
        </form>
        <b-pagination
                v-bind:total-rows="totalRows"
                v-bind:per-page="perPage"
                v-model="currentPage"
                size="md"
                class="my-3 justify-content-center"
        >
        </b-pagination>
        <cards-list-full v-if="currentView === 'full' || totalRows === 1" v-bind:cards="cards"></cards-list-full>
        <cards-list-text v-else-if="currentView === 'text'" v-bind:cards="cards"></cards-list-text>
        <cards-list-image v-else-if="currentView === 'image'" v-bind:cards="cards"></cards-list-image>
        <cards-list-table v-else-if="currentView === 'table'" v-bind:cards="cards"></cards-list-table>
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
  import storeService from '@/services/storeService';
  import queryParser from '@/services/queryParser';
  import QueryInput from '@/classes/QueryInput';
  import queryMapper from '@/services/queryMapper';
  import queryBuilder from '@/services/queryBuilder';
  import queryRouter from '@/services/queryRouter';
  import CardsListFull from '@/components/Cards/ListFull';
  import CardsListText from '@/components/Cards/ListText';
  import CardsListImage from '@/components/Cards/ListImage';
  import CardsListTable from '@/components/Cards/ListTable';

  function parseRouteQuery(route) {
    const query = queryRouter.getQuery(route);
    const page = route.query.page ? parseInt(route.query.page, 10) : 1;
    const view = route.query.view || 'table';
    const sort = route.query.sort || 'name';
    return { query, page, view, sort };
  }

  export default {
    name: 'cards-browser',
    props: ['query'],
    data() {
      return {
        cards: [],
        currentQuery: this.query,
        totalRows: 0,
        currentPage: 1,
        result: [],
        currentView: 'table', // text | image | full | table
        currentSort: 'name', // name | clan | type
        searchHelp: queryMapper.formatAsHtml(),
      };
    },
    computed: {
      perPage: function () {
        switch(this.currentView) {
          case 'table':
          case 'text':
            return 300;
          case 'image':
          case 'full':
            return 20;
        }
      }
    },
    beforeRouteEnter(to, from, next) {
      const params = parseRouteQuery(to);
      next((vm) => {
        vm.currentQuery = params.query;
        vm.currentPage = params.page;
        vm.currentView = params.view;
        vm.currentSort = params.sort;
        vm.filter();
      });
    },
    beforeRouteUpdate(to, from, next) {
      const params = parseRouteQuery(to);
      this.currentQuery = params.query;
      this.currentPage = params.page;
      this.currentView = params.view;
      this.currentSort = params.sort;
      this.filter();
      next();
    },
    watch: {
      currentPage() {
        this.navigate();
      },
      currentView() {
        this.navigate();
      },
      currentSort() {
        this.navigate();
      }
    },
    methods: {
      filter() {
        const clauses = queryParser.parse(this.currentQuery);
        const queryInput = new QueryInput(clauses);
        const filters = queryBuilder.build(queryInput);
        this.result = storeService.stores.cards.apply(this, filters).order(this.currentSort).get();
        this.perPage = 20;
        this.totalRows = this.result.length;
        this.cards = this.result.slice((this.currentPage - 1)
          * this.perPage, this.currentPage * this.perPage);
        window.scrollTo(0,0);
      },
      navigate() {
        const route = queryRouter.getRoute(this.currentQuery);
        if(route.query === undefined) {
          route.query = {};
        }
        if(this.currentPage > 1) {
          route.query.page = this.currentPage;
        }
        if(this.currentView !== 'table') {
          route.query.view = this.currentView;
        }
        if(this.currentSort !== 'name') {
          route.query.sort = this.currentSort;
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
