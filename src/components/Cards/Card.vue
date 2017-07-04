<template>
    <div class="card">
        <div class="card-block" v-bind:class="'bg-'+card.clan">
            <h4 class="card-title">
                <span v-if="card.is_unique">&#9702;</span>
                <router-link :to="{ name: 'cards-by-card-code', params: { code: card.code } }">{{ card.name }}</router-link>
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
                <span v-if="card.clan !== 'neutral'" v-bind:class="'icon-clan-' + card.clan"></span>
                {{ $t('clan.'+card.clan) }} {{ $t('type.'+card.type) }}.
                <span class="card-keyword" v-for="keyword in card.keywords">{{ $t('keyword.'+keyword) }}. </span>
            </h6>
            <p v-if="card.type === 'character'">
                <span>Cost: {{ card.cost }}.</span>
                <span v-if="card.military === undefined"><span class="strike-through">Military</span>.</span>
                <span v-else>Military: {{ card.military === undefined ? '-' : card.military }}.</span>
                <span v-if="card.political === undefined"><span class="strike-through">Political</span>.</span>
                <span v-else>Political: {{ card.political === undefined ? '-' : card.political }}.</span>
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
            <utils-card-text-block v-bind:text="line" v-for="(line, index) in textLines" :key="index"></utils-card-text-block>
            <p v-if="card.side" class="text-right">
                {{ $t('side.'+card.side) }}
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
  import UtilsCardTextBlock from '@/components/Utils/CardText/Block';

  export default {
    name: 'cards-card',
    props: ['card'],
    computed: {
      textLines() {
        return this.card.text ? this.card.text.split('\n') : [];
      },
    },
    components: {
      UtilsCardTextBlock,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    span.strike-through { text-decoration: line-through; }
    div.card-block.bg-crab { background-color: rgb(231,230,234); }
    div.card-block.bg-crane { background-color: rgb(227,235,241); }
    div.card-block.bg-dragon { background-color: rgb(222,227,223); }
    div.card-block.bg-lion { background-color: rgb(243,234,214); }
    div.card-block.bg-phoenix { background-color: rgb(254,228,215); }
    div.card-block.bg-scorpion { background-color: rgb(236,220,213); }
    div.card-block.bg-unicorn { background-color: rgb(230,226,239); }
</style>
