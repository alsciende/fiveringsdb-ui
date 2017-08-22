<template>
    <nav class="navbar navbar-expand-md mb-4">
        <a class="navbar-brand" href="/"><img src="/static/favicon-32x32.png" style="height:16px; vertical-align: baseline"> FiveringsDB</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="#">Cards <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#/deckbuilder">Deckbuilder</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" v-on:click.prevent="login()">{{ username }}</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#" v-on:click.prevent="logout()">Logout</a>
                </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0" action="" method="GET">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" name="q">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
  export default {
    name: 'app-navbar',
    props: [],
    computed: {
      username() {
        return this.$store.getters.username;
      },
    },
    methods: {
      login() {
        this.$store.dispatch('login').then(
          result => console.log('resolved', result),
          reason => console.log('rejected', reason),
        );
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
