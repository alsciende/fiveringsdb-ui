<template>
    <div>
<!--        <builder-editor v-if="deck" :deck="deck"></builder-editor>-->
        <div class="row">
            <div class="col-lg-6">
                <h1>
                    Deckbuilder
                </h1>
                <table class="table">
                    <tr v-for="strain in strains">
                        <td class="selector" hidden>
                            <input type="checkbox"/>
                        </td>
                        <td>
                            {{ strain.head.name }}
                        </td>
                        <td class="actions">
                            <button type="button" class="btn btn-secondary btn-sm" v-on:click.prevent="view(strain.head)">View</button>
                        </td>
                    </tr>
                </table>
            </div>
            <div class="col-lg-6">
                <div v-if="deck">
                    <h2>{{ deck.name }}</h2>
                    <utils-deck-content :deck="deck"></utils-deck-content>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import store from '@/store';
  import rest from '@/rest';
  import UtilsDeckContent from '@/components/Utils/DeckContent';
  import BuilderEditor from './Editor';

  export default {
    name: 'builder-builder',
    components: {
      BuilderEditor,
      UtilsDeckContent,
    },
    data() {
      return {
        strains: [],
        deck: null,
      };
    },
    methods: {
      view(deck) {
        this.deck = deck;
      },
    },
    beforeRouteEnter(to, from, next) {
      store.dispatch('login').then(
        () => next(),
        reason => next(new Error(reason)),
      );
    },
    mounted() {
      rest.get('strains').then((result) => {
        this.strains = result.records;
      });
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
