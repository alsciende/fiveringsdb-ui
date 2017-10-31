<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="mb-4">
        <div class="container">

            <b-navbar-brand :to="{ name: 'front-page' }">
                <img src="/static/favicon-32x32.png" style="height:16px; vertical-align: baseline">
                FiveRingsDB
            </b-navbar-brand>
            <b-nav-toggle target="nav_collapse"></b-nav-toggle>
            <b-collapse is-nav id="nav_collapse">
                <b-nav is-nav-bar class="navbar-nav mr-auto w-100">
                    <b-nav-item-dropdown text="Cards" left :class="[ section === 'cards' ? 'active' : '']">
                        <b-dropdown-item :to="{name:'cards-by-default'}" exact>All</b-dropdown-item>
                        <template v-for="cycle in cycles">
                            <b-dropdown-header v-if="cycle.size > 1">{{ cycle.name }}</b-dropdown-header>
                            <b-dropdown-item
                                    v-for="pack in cycle.packs"
                                    :key="pack.id"
                                    :to="{name:'cards-by-pack-id',params:{id:pack.id}}"
                                    exact>
                                {{ pack.name }}
                            </b-dropdown-item>
                        </template>
                    </b-nav-item-dropdown>
                    <b-nav-item-dropdown text="Decks" left :class="[ section === 'decks' ? 'active' : '']">
                        <b-dropdown-item v-for="(label, mode) in deckSortingModes"
                                         :key="mode"
                                         :to="{name:'decks-list', params: { sort: mode }}"
                        >{{ label }}
                        </b-dropdown-item>
                    </b-nav-item-dropdown>
                    <b-nav-item
                            :to="{name:'deckbuilder'}"
                    >
                        Deckbuilder
                    </b-nav-item>
                    <b-nav-item
                            :to="{name:'rules-reference'}"
                    >
                        Rules
                    </b-nav-item>

                    <li class="nav-item col-sm">
                        <form v-on:submit.prevent="search" class="d-inline">
                            <input v-model="query" class="form-control bg-dark text-light" type="text" placeholder="Card Search">
                        </form>
                    </li>
                    <li class="nav-item" v-if="isLogged">
                        <div class="navbar-text">Signed in as {{ username }}</div>
                    </li>
                    <li class="nav-item" v-if="isLogged">
                        <a class="nav-link" href="#" v-on:click.prevent="logout()">Logout</a>
                    </li>
                    <li class="nav-item" v-else>
                        <a class="nav-link" href="#" v-on:click.prevent="login()">Login</a>
                    </li>
                </b-nav>
            </b-collapse>
        </div>
    </b-navbar>
</template>

<script>
  import stores from '@/service/storeService';

  export default {
    name: 'app-navbar',
    props: [],
    data() {
      return {
        deckSortingModes: {
          trending: 'Trending',
          recent: 'Recent',
          week: 'Popular this week',
          month: 'Popular this month',
          fame: 'Hall of fame',
          features: 'Decks of the week',
        },
        query: '',
      };
    },
    computed: {
      section() {
        return this.$route.meta.section;
      },
      username() {
        return this.$store.getters.username;
      },
      isLogged() {
        return this.$store.getters.isLogged;
      },
      cycles() {
        return stores.cycles().get();
      },
    },
    methods: {
      login() {
        this.$store.dispatch('login');
      },
      logout() {
        this.$store.dispatch('logout');
      },
      search() {
        this.$router.push({ name: 'cards-by-search-query', query: { q: this.query } });
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
