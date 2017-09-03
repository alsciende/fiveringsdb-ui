<template>
    <div class="card">
        <div class="card-body" v-bind:class="'bg-clan clan-'+card.clan">
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
            <div class="card-text mb-2">
                <p v-for="(line, index) in textLines" :key="index" class="card-text">
                    <utils-card-text v-bind:text="line"></utils-card-text>
                </p>
            </div>
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
            <p class="card-flavor-text my-2" v-if="flavor" v-html="card.main_slot.flavor"></p>
            <b-form-select v-if="card.pack_cards.length > 1" v-model="packId" :options="packs" size="sm"
                           class="pack-chooser"></b-form-select>
            <div v-else v-html="optionText(card.main_slot)" class="small pack-chooser"></div>
        </div>
    </div>
</template>

<script>
  import UtilsCardText from '@/components/Utils/CardText';
  import UtilsCardTraits from '@/components/Utils/CardTraits';
  import storeService from '@/service/storeService';

  export default {
    name: 'cards-card',
    components: {
      UtilsCardText,
      UtilsCardTraits,
    },
    props: {
      card: {
        type: Object,
        required: true,
      },
      flavor: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        packId: this.card.main_slot.pack.id,
        packs: this.card.pack_cards.map(slot => ({ value: slot.pack.id, text: this.optionText(slot) })),
      };
    },
    computed: {
      textLines() {
        return this.card.text ? this.card.text.split('\n') : [];
      },
    },
    methods: {
      optionText(slot) {
        return `${slot.pack.name} #${slot.position} &mdash; ${slot.illustrator || ''}`;
      },
    },
    watch: {
      packId() {
        this.card.main_slot = this.card.pack_cards.find(slot => slot.pack.id === this.packId);
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

    div.card-body.bg-clan.clan-crab {
        background-image: url('/static/svg/clan/crab.svg');
    }

    div.card-body.bg-clan.clan-crane {
        background-image: url('/static/svg/clan/crane.svg');
    }

    div.card-body.bg-clan.clan-dragon {
        background-image: url('/static/svg/clan/dragon.svg');
    }

    div.card-body.bg-clan.clan-lion {
        background-image: url('/static/svg/clan/lion.svg');
    }

    div.card-body.bg-clan.clan-neutral {
        background-image: url('/static/svg/clan/neutral.svg');
    }

    div.card-body.bg-clan.clan-phoenix {
        background-image: url('/static/svg/clan/phoenix.svg');
    }

    div.card-body.bg-clan.clan-scorpion {
        background-image: url('/static/svg/clan/scorpion.svg');
    }

    div.card-body.bg-clan.clan-unicorn {
        background-image: url('/static/svg/clan/unicorn.svg');
    }

    div.card-text {
        border-width: 0;
        border-left-width: 2px;
        border-style: solid;
        padding-left: 10px;
    }

    .clan-crab .card-text {
        border-color: rgb(0, 28, 148);
    }

    .clan-crane .card-text {
        border-color: rgb(0, 137, 222);
    }

    .clan-dragon .card-text {
        border-color: rgb(0, 164, 114);
    }

    .clan-lion .card-text {
        border-color: rgb(203, 157, 0);
    }

    .clan-phoenix .card-text {
        border-color: rgb(193, 100, 0);
    }

    .clan-scorpion .card-text {
        border-color: rgb(166, 22, 0);
    }

    .clan-unicorn .card-text {
        border-color: rgb(120, 0, 152);
    }

    .clan-neutral .card-text {
        border-color: rgb(160, 160, 160);
    }

    .card-flavor-text {
        font-style: italic;
        font-size: 90%;
        color: #333;
        max-width: 300px;
        margin: auto;
        text-align: center;
    }

    select.pack-chooser {
        background-color: transparent;
        border-color: transparent;
    }

    div.pack-chooser {
        border: 1px solid transparent;
        -webkit-border-radius: 0.25rem;
        -moz-border-radius: 0.25rem;
        border-radius: 0.25rem;
        padding: 0.375rem 0.75rem;
    }
</style>
