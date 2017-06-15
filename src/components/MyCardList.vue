<template>
    <div>
        <form>
            <div class="form-group">
                <form v-on:submit.prevent="navigate">
                    <input type="text" class="form-control" v-model="currentQuery" placeholder="Enter query">
                    <small class="form-text text-muted">
                        Search by name. Prefix with 'x:' to search by text, 'p:' by pack, 'c:' by clan, 't:' by type, 'd:' by deck.
                    </small>
                </form>
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
        <div class="row mb-2" v-for="card in cards">
            <div class="col-md-7 mb-2">
                <my-card-card v-bind:card="card">
                </my-card-card>
            </div>
            <div class="col-md-5 mb-2">
                <img v-bind:src="getCardImageURL(card)" class="card-image">
            </div>
        </div>
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
  import storeService from '../services/storeService';
  import configService from '../services/configService';
  import queryParser from '../services/queryParser';
  import QueryInput from '../classes/QueryInput';
  import queryBuilder from '../services/queryBuilder';
  import queryRouter from '../services/queryRouter';
  import MyCardCard from './MyCardCard';

  export default {
    name: 'my-card-list',
    props: ['query'],
    data() {
      return {
        cards: [],
        currentQuery: this.query,
        perPage: 20,
        totalRows: 0,
        currentPage: 1,
        result: [],
      };
    },
    beforeRouteEnter(to, from, next) {
      const query = queryRouter.getQuery(to);
      next((vm) => {
        vm.currentQuery = query;
        vm.filter();
      });
    },
    beforeRouteUpdate(to, from, next) {
      const query = queryRouter.getQuery(to);
      this.currentQuery = query;
      this.filter();
      next();
    },
    watch: {
      currentPage(page) {
        this.cards = this.result.slice((page - 1) * this.perPage, page * this.perPage);
        scroll(0, 0);
      },
    },
    methods: {
      getCardImageURL: configService.getCardImageURL,
      filter() {
        const clauses = queryParser.parse(this.currentQuery);
        const queryInput = new QueryInput(clauses);
        const filters = queryBuilder.build(queryInput);
        this.result = storeService.stores.cards.apply(this, filters).get();
        this.perPage = 20;
        this.totalRows = this.result.length;
        this.currentPage = 1;
        this.cards = this.result.slice((this.currentPage - 1)
          * this.perPage, this.currentPage * this.perPage);
      },
      navigate() {
        const route = queryRouter.getRoute(this.currentQuery);
        this.$router.push(route);
      },
    },
    created() {
      this.filter();
    },
    components: {
      MyCardCard,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
