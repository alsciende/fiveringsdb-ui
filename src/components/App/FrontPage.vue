<template>
    <div>
        <div class="row content">
            <div class="col-md-2">
                <ul class="nav flex-sm-column justify-content-around mb-3 text-uppercase">
                    <li class="nav-item">
                        <router-link :to="{name:'cards-by-default'}" class="nav-link">Cards</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'decks-list', params: { sort: 'search' }}" class="nav-link">Decks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'deckbuilder'}" class="nav-link">Builder</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link :to="{name:'rules-reference'}" class="nav-link">Rules</router-link>
                    </li>
                </ul>
            </div>
            <div class="col-md-7">
                <b-list-group>
                    <feed-item v-for="item in feedItems" :key="item.id" :item="item"></feed-item>
                </b-list-group>
            </div>
            <div class="col-md-3">
                <ins class="adsbygoogle"
                     style="display:block"
                     data-ad-client="ca-pub-2254488884647695"
                     data-ad-slot="3777512162"
                     data-ad-format="auto"></ins>
                <decks-features></decks-features>
            </div>
        </div>
    </div>
</template>

<script>
  import rest from '@/rest';
  import DecksFeatures from '../Decks/Features';
  import FeedItem from './FeedItem';

  export default {
    name: 'app-front-page',
    components: {
      DecksFeatures,
      FeedItem,
    },
    data() {
      return {
        feedItems: [],
      };
    },
    methods: {
      load() {
        rest.private(false).get('feed').then((result) => {
          this.feedItems = result.records;
        });
      },
    },
    mounted() {
      this.load();
      if ('adsbygoogle' in window === false) {
        window.adsbygoogle = [];
      }
      window.adsbygoogle.push({});
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
