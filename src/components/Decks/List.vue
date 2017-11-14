<template>
    <div class="row">
        <div class="col-md-2">
            <ul class="nav nav-pills flex-sm-column justify-content-between mb-3 text-uppercase">
                <li class="nav-item">
                    <router-link :to="{name:'decks-list', params: { sort: 'date' }}" :class="{'nav-link': true, 'active': sort === 'date'}">Decks</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{name:'decks-list', params: { sort: 'trending' }}" :class="{'nav-link': true, 'active': sort === 'trending'}">Trending</router-link>
                </li>
            </ul>
        </div>
        <div class="col-md-8">
            <b-btn v-b-toggle.form variant="secondary"><span class="fa fa-cogs"></span> Sort and Filter</b-btn>
            <b-collapse id="form" class="mt-2">
                <b-card>
                    <p class="card-text">Collapse contents Here</p>
                    <b-btn v-b-toggle.collapse1_inner size="sm">Toggle Inner Collapse</b-btn>
                    <b-collapse id=collapse1_inner class="mt-2">
                        <b-card>Hello!</b-card>
                    </b-collapse>
                </b-card>
            </b-collapse>
            <decks-list-content></decks-list-content>
        </div>
        <div class="col-md-2">
            <ins class="adsbygoogle"
                 style="display:block"
                 data-ad-client="ca-pub-2254488884647695"
                 data-ad-slot="3777512162"
                 data-ad-format="auto"></ins>
        </div>
    </div>
</template>

<script>
  import DecksListContent from './ListContent';

  export default {
    name: 'decks-list',
    components: {
      DecksListContent,
    },
    computed: {
      sort() {
        return this.$route.params.sort || 'date';
      },
    },
    mounted() {
      this.$store.commit('changeDocumentTitle', 'Deck Builder');
      (adsbygoogle = window.adsbygoogle || []).push({});
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
