<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-md mb-4">
        <a class="navbar-brand" href="/">
            <img src="/static/favicon-32x32.png" style="height:16px; vertical-align: baseline">
            FiveRingsDB
        </a>
        <button class="navbar-toggler navbar-toggler-right" type="button"
                v-b-toggle.navbarCollapse aria-label="Toggle navigation">
            <span class="fa fa-bars"></span>
        </button>
        <b-collapse :is-nav="true" class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item" :class="{ active: section === 'cards' }">
                    <router-link :to="{name:'cards-by-default'}" class="nav-link">Cards</router-link>
                </li>
                <li class="nav-item" :class="{ active: section === 'deckbuilder' }">
                    <router-link :to="{name:'deckbuilder'}" class="nav-link">Deckbuilder</router-link>
                </li>
                <li class="nav-item" :class="{ active: section === 'rules' }">
                    <router-link :to="{name:'rules-reference'}" class="nav-link">Rules</router-link>
                </li>
            </ul>
            <div v-if="isLogged" class="navbar-text">Signed in as {{ username }}</div>
            <ul class="navbar-nav">
                <li class="nav-item" v-if="isLogged">
                    <a class="nav-link" href="#" v-on:click.prevent="logout()">Logout</a>
                </li>
                <li class="nav-item" v-else>
                    <a class="nav-link" href="#" v-on:click.prevent="login()">Login</a>
                </li>
            </ul>
        </b-collapse>
    </nav>
</template>

<script>
  export default {
    name: 'app-navbar',
    props: [],
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
    },
    methods: {
      login() {
        this.$store.dispatch('login');
      },
      logout() {
        this.$store.dispatch('logout');
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
