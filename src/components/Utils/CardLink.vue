<template>
    <popper trigger="hover" :visible-arrow="true" :append-to-body="true"
            :options="{gpuAcceleration: false, placement: 'auto-right'}">
        <div class="popper">
            <cards-card v-bind:card="card" v-bind:use-link="false"></cards-card>
        </div>

        <router-link slot="reference" :to="{ name: 'cards-by-card-id', params: { id: card.id } }">{{ card.name }}
        </router-link>
    </popper>
</template>

<script>
  import Popper from 'vue-popperjs';
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'utils-card-link',
    components: {
      Popper,
      CardsCard,
    },
    props: ['card'],
    created() {
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

    .popper {
        width: 400px;
        background-color: white;
        border-radius: 3px;
        position: absolute;
        border: 1px solid grey;
        z-index: 200000;
        box-shadow: 0 5px 10px 0 grey;
    }

    .popper .popper__arrow {
        width: 0;
        height: 0;
        border-style: solid;
        position: absolute;
        margin: 5px;
    }

    .popper[x-placement^="top"] {
        margin-bottom: 5px;
    }

    .popper[x-placement^="top"] .popper__arrow {
        border-width: 5px 5px 0 5px;
        border-color: #fafafa transparent transparent transparent;
        bottom: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .popper[x-placement^="bottom"] {
        margin-top: 5px;
    }

    .popper[x-placement^="bottom"] .popper__arrow {
        border-width: 0 5px 5px 5px;
        border-color: transparent transparent #fafafa transparent;
        top: -5px;
        left: calc(50% - 5px);
        margin-top: 0;
        margin-bottom: 0;
    }

    .popper[x-placement^="right"] {
        margin-left: 5px;
    }

    .popper[x-placement^="right"] .popper__arrow {
        border-width: 5px 5px 5px 0;
        border-color: transparent #fafafa transparent transparent;
        left: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .popper[x-placement^="left"] {
        margin-right: 5px;
    }

    .popper[x-placement^="left"] .popper__arrow {
        border-width: 5px 0 5px 5px;
        border-color: transparent transparent transparent #fafafa;
        right: -5px;
        top: calc(50% - 5px);
        margin-left: 0;
        margin-right: 0;
    }

    .popper > .card {
        border: none;
    }
</style>
