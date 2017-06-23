<template>
    <div class="card">
        <div class="card-block" v-bind:class="'bg-'+card.clan">
            <h4 class="card-title">
                <span v-if="card.is_unique">&#9702;</span>
                {{ card.name }}
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
                <span v-bind:class="'icon-clan-' + card.clan"></span>
                {{ $t('clan.'+card.clan) }} {{ $t('type.'+card.type) }}.
                {{ card.keywords }}
            </h6>
            <p v-if="card.type === 'character'">
                <span>Cost: {{ card.cost }}.</span>
                <span v-if="card.military_strength === undefined"><span class="strike-through">Military</span>.</span>
                <span v-else>Military: {{ card.military_strength === undefined ? '-' : card.military_strength }}.</span>
                <span v-if="card.political_strength === undefined"><span class="strike-through">Political</span>.</span>
                <span v-else>Political: {{ card.political_strength === undefined ? '-' : card.political_strength }}.</span>
                <span>Glory: {{ card.glory }}.</span>
            </p>
            <p v-if="card.type === 'attachment'">
                <span>Cost: {{ card.cost }}.</span>
                <span>Military: {{ card.military_strength_mod === undefined ? '-' : card.military_strength_mod }}.</span>
                <span>Political: {{ card.political_strength_mod === undefined ? '-' : card.political_strength_mod }}.</span>
            </p>
            <p v-if="card.type === 'province'">
                <span v-bind:class="'icon-element-' + card.element"></span>
                <span>{{ $t('element.'+card.element) }}.</span>
                <span>Strength: {{ card.province_strength }}.</span>
            </p>
            <p v-if="card.type === 'holding'">
                <span>Strength: {{ card.province_strength_mod }}.</span>
            </p>
            <p v-if="card.type === 'stronghold'">
                <span>Strength: {{ card.province_strength_mod }}.</span>
            </p>
            <p v-if="card.type === 'event'">
                <span>Cost: {{ card.cost }}.</span>
            </p>
            <my-card-text-block v-bind:text="line" v-for="(line, index) in textLines" :key="index"></my-card-text-block>
            <p v-if="card.side" class="text-right">
                {{ $t('side.'+card.side) }}
            </p>
        </div>
    </div>
</template>

<script>
  import MyCardText from './MyCardText';
  import MyCardTextBlock from './MyCardTextBlock';

  export default {
    name: 'my-card-card',
    props: ['card'],
    computed: {
      textLines() {
        return this.card.text ? this.card.text.split('\n') : [];
      },
    },
    components: {
      MyCardText,
      MyCardTextBlock,
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
