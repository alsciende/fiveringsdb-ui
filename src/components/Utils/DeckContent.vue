<template>
    <div class="deck-content">
        <div v-if="problem" class="row">
            <div class="col-md-12 alert alert-warning">
                {{ $t('problem.'+problem) }}
            </div>
        </div>
        <div class="row mb-4">
            <div v-if="stronghold" class="col-sm-4 d-none d-sm-block">
                <utils-card-image :card="stronghold"></utils-card-image>
            </div>
            <div class="col-sm-8">
                <div v-if="stronghold">
                    <utils-card-icon :card="stronghold"></utils-card-icon>
                    <utils-card-link :card="stronghold"></utils-card-link>
                </div>
                <div v-if="role">
                    <utils-card-icon :card="role"></utils-card-icon>
                    <utils-card-link :card="role"></utils-card-link>
                </div>
                <div v-for="card in provinceDeck" :key="card.id">
                    <utils-card-icon :card="card"></utils-card-icon>
                    <utils-card-link :card="card"></utils-card-link>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <h5>Dynasty Deck</h5>
                <div v-for="slot in dynastyDeck" :key="slot.card.id">
                    <span class="quantity">{{ slot.quantity }}x</span>
                    <utils-card-icon :card="slot.card"></utils-card-icon>
                    <utils-card-link :card="slot.card"></utils-card-link>
                </div>
            </div>
            <div class="col-sm-6">
                <h5>Conflict Deck</h5>
                <div v-for="slot in conflictDeck" :key="slot.card.id">
                    <span class="">{{ slot.quantity }}x</span>
                    <utils-card-icon :card="slot.card"></utils-card-icon>
                    <utils-card-link :card="slot.card"></utils-card-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import _ from 'underscore';

  import UtilsCardLink from '@/components/Utils/CardLink';
  import UtilsCardIcon from '@/components/Utils/CardIcon';
  import UtilsCardImage from '@/components/Utils/CardImage';
  import stores from '@/service/storeService';
  import DeckInspector from '@/classes/DeckInspector';

  export default {
    name: 'utils-deck-content',
    components: {
      UtilsCardLink,
      UtilsCardIcon,
      UtilsCardImage,
    },
    props: ['deck', 'view'],
    data() {
      return {};
    },
    methods: {},
    computed: {
      slots() {
        return Object.keys(this.deck.cards).map(cardId => ({
          quantity: this.deck.cards[cardId],
          card: stores.cards({ id: cardId }).first(),
        }));
      },
      inspector() {
        return new DeckInspector(this.slots, this.deck.format);
      },
      stronghold() {
        return this.inspector.findCardByType('stronghold');
      },
      role() {
        return this.inspector.findCardByType('role');
      },
      provinceDeck() {
        return _.sortBy(_.pluck(this.inspector.findSlotsBy('type', 'province'), 'card'), 'element');
      },
      dynastyDeck() {
        return this.inspector.findSlotsBy('side', 'dynasty');
      },
      conflictDeck() {
        return this.inspector.findSlotsBy('side', 'conflict');
      },
      problem() {
        return this.inspector.getProblem();
      },
    },
    watch: {
      deck() {
        console.log('deck changed');

      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    span.quantity {
        display: inline-block;
        width: 1.25em;
        text-align: right;
    }
</style>
