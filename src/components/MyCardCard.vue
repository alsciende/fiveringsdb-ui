<template>
    <div class="card">
        <div class="card-block" v-bind:class="'bg-'+card.clan.code">
            <h4 class="card-title">
                <span v-if="card.is_unique">&#9702;</span>
                {{ card.name }}
            </h4>
            <h6 class="card-subtitle mb-2 text-muted">
                <span v-bind:class="'icon-clan-' + card.clan.code"></span>
                {{ card.clan.name }} {{ card.type.name }}.
                {{ card.keywords }}
            </h6>
            <p v-if="card.type_code === 'character'">
                <span>Cost: {{ card.cost }}.</span>
                <span v-if="card.military_strength === undefined"><span class="strike-through">Military</span>.</span>
                <span v-else>Military: {{ card.military_strength === undefined ? '-' : card.military_strength }}.</span>
                <span v-if="card.political_strength === undefined"><span class="strike-through">Political</span>.</span>
                <span v-else>Political: {{ card.political_strength === undefined ? '-' : card.political_strength }}.</span>
                <span>Glory: {{ card.glory }}.</span>
            </p>
            <p v-if="card.type_code === 'attachment'">
                <span>Cost: {{ card.cost }}.</span>
                <span>Military: {{ card.military_strength_mod === undefined ? '-' : card.military_strength_mod }}.</span>
                <span>Political: {{ card.political_strength_mod === undefined ? '-' : card.political_strength_mod }}.</span>
            </p>
            <p v-if="card.type_code === 'province'">
                <span v-bind:class="'icon-element-' + card.element.code"></span>
                <span>{{ card.element.name }}.</span>
                <span>Strength: {{ card.province_strength }}.</span>
            </p>
            <p v-if="card.type_code === 'holding'">
                <span>Strength: {{ card.province_strength_mod }}.</span>
            </p>
            <p v-if="card.type_code === 'stronghold'">
                <span>Strength: {{ card.province_strength_mod }}.</span>
            </p>
            <p v-if="card.type_code === 'event'">
                <span>Cost: {{ card.cost }}.</span>
            </p>
            <my-card-text-block v-bind:text="line" v-for="(line, index) in textLines" :key="index"></my-card-text-block>
            <p v-if="card.side" class="text-right">
                {{ side }}
            </p>
        </div>
    </div>
</template>

<script>
  import MyCardText from './MyCardText';
  import MyCardTextBlock from './MyCardTextBlock';

  const sideNames = {
    conflict: 'Conflict Deck',
    dynasty: 'Dynasty Deck',
  };

  export default {
    name: 'my-card-card',
    props: ['card'],
    computed: {
      textLines() {
        return this.card.text ? this.card.text.split('\n') : [];
      },
      side() {
        return sideNames[this.card.side] || '';
      }
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
