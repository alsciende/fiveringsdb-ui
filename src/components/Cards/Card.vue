<template>
    <div class="card">
        <div class="card-body" v-bind:class="'bg-clan bg-clan-'+card.clan">
            <h4 class="card-title">
                <span v-if="card.unicity">&#9702;</span>
                <slot>
                    {{ card.name }}
                </slot>
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
                <span v-if="card.clan !== 'neutral'" v-bind:class="'icon-clan-' + card.clan"></span>
                {{ $t('clan.' + card.clan) }} {{ $t('type.' + card.type) }}.
                <utils-card-traits :card="card"></utils-card-traits>
            </h6>
            <p v-if="card.type === 'character'">
                <span>Cost: {{ card.cost }}.</span>
                <span v-if="card.military === undefined"><span class="strike-through">Military</span>.</span>
                <span v-else>Military: {{ card.military }}.</span>
                <span v-if="card.political === undefined"><span class="strike-through">Political</span>.</span>
                <span v-else>Political: {{ card.political }}.</span>
                <span>Glory: {{ card.glory }}.</span>
            </p>
            <p v-if="card.type === 'attachment'">
                <span>Cost: {{ card.cost }}.</span>
                <span>Military: {{ card.military_bonus === undefined ? '-' : card.military_bonus }}.</span>
                <span>Political: {{ card.political_bonus === undefined ? '-' : card.political_bonus }}.</span>
            </p>
            <p v-if="card.type === 'province'">
                <span v-bind:class="'icon-element-' + card.element"></span>
                <span>{{ $t('element.' + card.element) }}.</span>
                <span>Strength: {{ card.strength }}.</span>
            </p>
            <p v-if="card.type === 'holding'">
                <span>Strength: {{ card.strength_bonus }}.</span>
            </p>
            <p v-if="card.type === 'stronghold'">
                <span>Strength: {{ card.strength_bonus }}.</span>
                <span>Honor: {{ card.honor }}.</span>
                <span>Fate: {{ card.fate }}.</span>
                <span>Influence: {{ card.influence_pool }}.</span>
            </p>
            <p v-if="card.type === 'event'">
                <span>Cost: {{ card.cost }}.</span>
            </p>
            <p v-for="(line, index) in textLines" :key="index" class="card-text">
                <utils-card-text v-bind:text="line"></utils-card-text>
            </p>
            <p v-if="card.side" class="text-right">
                {{ $t('side.deck', { side: $t('side.' + card.side) }) }}
                <span v-if="card.side === 'conflict' && card.influence_cost">
                    &ndash; Influence Cost: {{ card.influence_cost }}
                </span>
                <span v-if="card.side === 'conflict' && card.clan !== 'neutral' && ! card.influence_cost">
                    &ndash; No Influence Cost
                </span>
                <span v-if="card.side === 'conflict' && card.clan === 'neutral' && ! card.influence_cost">
                    &ndash; Influence Cost: 0
                </span>
            </p>
        </div>
    </div>
</template>

<script>
  import UtilsCardText from '@/components/Utils/CardText';
  import UtilsCardTraits from '@/components/Utils/CardTraits';

  export default {
    name: 'cards-card',
    components: {
      UtilsCardText,
      UtilsCardTraits,
    },
    props: ['card'],
    computed: {
      textLines() {
        return this.card.text ? this.card.text.split('\n') : [];
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    span.strike-through {
        text-decoration: line-through;
    }

    div.card-body.bg-clan {
        background-repeat: no-repeat;
        background-size: 150px;
        background-position-y: center;
        background-position-x: 90%;
        min-height: 200px;
    }

    div.card-body.bg-clan-crab {
        background-image: url('/static/svg/clan/crab.svg');
    }

    div.card-body.bg-clan-crane {
        background-image: url('/static/svg/clan/crane.svg');
    }

    div.card-body.bg-clan-dragon {
        background-image: url('/static/svg/clan/dragon.svg');
    }

    div.card-body.bg-clan-lion {
        background-image: url('/static/svg/clan/lion.svg');
    }

    div.card-body.bg-clan-phoenix {
        background-image: url('/static/svg/clan/phoenix.svg');
    }

    div.card-body.bg-clan-scorpion {
        background-image: url('/static/svg/clan/scorpion.svg');
    }

    div.card-body.bg-clan-unicorn {
        background-image: url('/static/svg/clan/unicorn.svg');
    }
</style>
