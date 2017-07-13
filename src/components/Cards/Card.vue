<template>
    <div class="card">
        <div class="card-block" v-bind:class="'bg-clan bg-clan-'+card.clan">
            <h4 class="card-title">
                <span v-if="card.is_unique">&#9702;</span>
                <utils-card-link :card="card"></utils-card-link>
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
                <span v-if="card.clan !== 'neutral'" v-bind:class="'icon-clan-' + card.clan"></span>
                {{ $t('clan.'+card.clan) }} {{ $t('type.'+card.type) }}.
                <utils-card-keywords :card="card"></utils-card-keywords>
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
                <span>{{ $t('element.'+card.element) }}.</span>
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
                {{ $t('side.deck', { side: $t('side.'+card.side) }) }}
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
  import UtilsCardLink from "@/components/Utils/CardLink";
  import UtilsCardKeywords from "@/components/Utils/CardKeywords";

  export default {
    name: 'cards-card',
    props: ['card'],
    computed: {
      textLines() {
        return this.card.text ? this.card.text.split('\n') : [];
      },
    },
    components: {
      UtilsCardText,
      UtilsCardLink,
      UtilsCardKeywords,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    span.strike-through { text-decoration: line-through; }
    div.card-block.bg-clan {
        background-repeat: no-repeat;
        background-size: 150px;
        background-position-y: center;
        background-position-x: 90%;
    }
    div.card-block.bg-clan-crab { background-image: url('/static/svg/clan/crab.svg'); }
    div.card-block.bg-clan-crane { background-image: url('/static/svg/clan/crane.svg'); }
    div.card-block.bg-clan-dragon { background-image: url('/static/svg/clan/dragon.svg'); }
    div.card-block.bg-clan-lion { background-image: url('/static/svg/clan/lion.svg'); }
    div.card-block.bg-clan-phoenix { background-image: url('/static/svg/clan/phoenix.svg'); }
    div.card-block.bg-clan-scorpion { background-image: url('/static/svg/clan/scorpion.svg'); }
    div.card-block.bg-clan-unicorn { background-image: url('/static/svg/clan/unicorn.svg'); }
</style>
