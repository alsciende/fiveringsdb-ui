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
                          <b-dropdown-divider :key="cycle.name + '_divider'"/>
                          <template v-if="cycle.size >= 1">
                            <b-dropdown-header  v-b-toggle="cycle.id"
                                                class="cycle-header"
                                                :key="cycle.id"
                                                role="button">
                                        {{ cycle.name }}
                                        <v-icon :key="cycle.id + '_caret_down'" name="caret-down" scale="0.75"></v-icon>
                            </b-dropdown-header> 
                            <b-collapse :id="cycle.id"
                                        :key="cycle.id + '_collapse'"
                                        accordion="cycle-accordion">
                              <b-dropdown-item  v-if="cycle.size > 1" 
                                                :to="{name:'cards-by-cycle-id', params: {id : cycle.id}}">
                                  <b>All cards of {{ cycle.name }}</b>
                              </b-dropdown-item>
                              <b-dropdown-item
                                      v-for="pack in cycle.packs"
                                      :key="pack.id"
                                      :to="{name:'cards-by-pack-id', params: { id : pack.id}}"
                                      exact>
                                      {{ pack.name }}
                              </b-dropdown-item>
                            </b-collapse> 
                          </template>
                        </template>
                    </b-nav-item-dropdown>
                    <b-nav-item
                            :to="{name:'decks-list', params: { sort: 'search' }}"
                    >
                        Decks
                    </b-nav-item>
                    <b-nav-item
                            :to="{name:'deckbuilder'}"
                    >
                        Builder
                    </b-nav-item>
                    <b-nav-item
                            :to="{name:'rules-reference'}"
                    >
                        Rules
                    </b-nav-item>

                    <li class="nav-item col-sm">
                        <form v-on:submit.prevent="search" class="d-inline">
                            <input v-model="query" class="form-control" type="text" placeholder="Card Search">
                        </form>
                    </li>
                    <li class="nav-item" v-if="hasUser">
                        <div class="navbar-text">Signed in as {{ username }}</div>
                    </li>
                    <li class="nav-item" v-if="hasUser">
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
      hasUser() {
        return this.$store.getters.hasUser;
      },
      cycles() {
        return stores.cycles().order('position').get();
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
  .cycle-header {
    font-size: 1em;
  }

  .cycle-header:hover {
    cursor: pointer;
  }
</style>
