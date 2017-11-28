<template>
    <b-modal id="modalVersions" title="Version History" :ok-only="true" @show="onShow">
        <ul class="list-group">
            <li v-for="(deck, index) in versions" :key="deck.id"
               class="list-group-item flex-column align-items-start">
                <div class="d-flex w-100 justify-content-between">
                    <h5 class="mb-1">Version {{ deck.version }}</h5>
                    <small>{{ formatDate(published ? deck.published_at : deck.created_at) }}</small>
                </div>
                <p v-if="index === 0">First version</p>
                <ul v-else class="list-unstyled">
                    <li v-for="slot in diffSlots(versions[index-1].cards, deck.cards)">
                        <span class="px-1" :class="slot.quantity > 0 ? 'bg-addition' : 'bg-substraction'">
                            <span v-if="slot.quantity < 0">−{{ -1 * slot.quantity }}</span>
                            <span v-else>+{{ slot.quantity }}</span>
                            {{ slot.card.name }}
                        </span>
                    </li>
                </ul>
                <router-link v-if="deck.published" class="small" :to="{name: 'deck-view', params: { deckId:deck.id }}">See the published deck</router-link>
            </li>
        </ul>
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
        })).sort((a, b) => a.quantity - b.quantity);
      },
      fetchPrivateDecks(strainId) {
        rest
          .private()
          .get(`strains/${strainId}/decks`)
          .then((result) => {
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
<style scoped>
    .bg-substraction {
        background-color: rgba(220,53,69,.2);
    }
    .bg-addition {
        background-color: rgba(40,167,69,.2);
    }
</style>
