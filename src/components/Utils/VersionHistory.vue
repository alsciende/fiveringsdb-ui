<template>
    <b-modal id="modalVersions" title="Version History" :ok-only="true" @show="onShow">
        <table class="table">
            <thead>
            <tr>
                <th>Version</th>
                <th>Date</th>
                <th>Changes with previous version</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(deck, index) in versions" :key="deck.id">
                <td v-if="deck.published && deck.id !== id">
                    <router-link :to="{name: 'deck-view', params: { deckId:deck.id }}">{{ deck.version }}</router-link>
                </td>
                <td v-else>{{ deck.version }}</td>
                <td>{{ formatDate(deck.created_at) }}</td>
                <td v-if="index === 0">
                    First version
                </td>
                <td v-else>
                    <div v-for="slot in diffSlots(versions[index-1].cards, deck.cards)">
                        {{ slot.quantity }}
                        {{ slot.card.name }}
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </b-modal>
</template>

<script>
  import moment from 'moment';
  import rest from '../../rest';
  import stores from '../../service/storeService';
  import deckDiff from '../../service/deckDiff';

  export default {
    name: 'utils-version-history',
    props: {
      id: {
        required: true,
        type: String,
      },
      published: {
        required: false,
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        versions: [],
      };
    },
    computed: {},
    methods: {
      formatDate(date) {
        return moment(date).format('YYYY-MM-DD');
      },
      diffSlots(from, to) {
        const diffCards = deckDiff.diff(from, to);
        return stores.cards({ id: Object.keys(diffCards) }).map(card => ({
          quantity: diffCards[card.id],
          card,
        }));
      },
      fetchPrivateDecks(strainId) {
        rest
          .private()
          .get(`strains/${strainId}/decks`)
          .then((result) => {
            console.log(result);
            this.versions = result.records;
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      fetchPublicDecks(deckId) {
        rest
          .public()
          .get(`decks/${deckId}/versions`)
          .then((result) => {
            console.log(result);
            this.versions = result.records;
          })
          .catch((reason) => {
            this.$notify({
              title: 'Error',
              text: reason,
              type: 'error',
            });
          });
      },
      onShow() {
        if (this.published) {
          this.fetchPublicDecks(this.id);
        } else {
          this.fetchPrivateDecks(this.id);
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
