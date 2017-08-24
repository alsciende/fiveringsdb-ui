<template>
    <div class="deck-content">
        <div v-if="problem" class="row">
            <div class="col-md-12">
                <div class="alert alert-warning">
                    {{ $t('problem.'+problem) }}
                </div>
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
                <div class="mt-4">
                    Influence: {{ influenceSpent }}/{{ influencePool }}, {{ influencePool - influenceSpent }} remaining
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-6">
                <h5>
                    Dynasty Deck
                    ({{ count(dynastyDeck) }})
                </h5>
                <div v-for="(slots, type) in dynastyDeckByTypes" :key="type" v-if="count(slots) > 0" class="mb-2">
                    <h6>
                        <span :class="['fa fa-fw fa-'+typeIcon(type)]"></span>
                        {{ $t('type.'+type) }}
                        ({{ count(slots) }})
                    </h6>
                    <div v-for="slot in slots" :key="slot.card.id">
                        <span class="quantity">{{ slot.quantity }}x</span>
                        <utils-card-icon :card="slot.card"></utils-card-icon>
                        <utils-card-link :card="slot.card"></utils-card-link>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <h5>
                    Conflict Deck
                    ({{ count(conflictDeck) }})
                </h5>
                <div v-for="(slots, type) in conflictDeckByTypes" :key="type" v-if="count(slots) > 0" class="mb-2">
                    <h6>
                        <span :class="['fa fa-fw fa-'+typeIcon(type)]"></span>
                        {{ $t('type.'+type) }}
                        ({{ count(slots) }})
                    </h6>
                    <div v-for="slot in slots" :key="slot.card.id">
                        <span class="quantity">{{ slot.quantity }}x</span>
                        <utils-card-icon :card="slot.card"></utils-card-icon>
                        <utils-card-link :card="slot.card"></utils-card-link>
                        <utils-influence-cost v-if="slot.card.clan !== clan" :card="slot.card" :quantity="slot.quantity"></utils-influence-cost>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import _ from 'underscore';

  import UtilsCardLink from '@/components/Utils/CardLink';
  import UtilsCardIcon from '@/components/Utils/CardIcon';
  import UtilsInfluenceCost from '@/components/Utils/InfluenceCost';
  import UtilsCardImage from '@/components/Utils/CardImage';
  import stores from '@/service/storeService';
  import DeckInspector from '@/classes/DeckInspector';
  import typeIcons from '@/service/typeIcons';

  const sideTypes = {
    dynasty: ['character', 'holding'],
    conflict: ['event', 'attachment', 'character'],
  };

  export default {
    name: 'utils-deck-content',
    components: {
      UtilsCardLink,
      UtilsCardIcon,
      UtilsCardImage,
      UtilsInfluenceCost,
    },
    props: ['deck', 'view'],
    data() {
      return {
        dynastyTypes: ['character', 'holding'],
        conflictTypes: ['event', 'attachment', 'character'],
      };
    },
    methods: {
      filterByType(slots, type) {
        return DeckInspector.findSlotsBy(slots, 'type', type);
      },
      typeIcon(type) {
        return typeIcons.icon(type);
      },
      count(slots) {
        return DeckInspector.count(slots);
      },
      deckByTypes(deck, side) {
        const byTypes = {};
        sideTypes[side].forEach((type) => {
          byTypes[type] = this.filterByType(deck, type);
        });
        return byTypes;
      },
    },
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
      clan() {
        return this.stronghold ? this.stronghold.clan : null;
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
      dynastyDeckByTypes() {
        return this.deckByTypes(this.dynastyDeck, 'dynasty');
      },
      conflictDeckByTypes() {
        return this.deckByTypes(this.conflictDeck, 'conflict');
      },
      problem() {
        return this.inspector.findProblem();
      },
      influencePool() {
        return this.inspector.getInfluencePool();
      },
      influenceSpent() {
        return this.inspector.getInfluenceSpent();
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
