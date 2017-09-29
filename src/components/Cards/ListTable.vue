<template>
    <table class="table table-striped table-sm">
        <thead>
        <tr>
            <th>Name</th>
            <th>Clan</th>
            <th>Type</th>
            <th>Traits</th>
            <th>Deck</th>
            <th>Cost</th>
            <th>Value</th>
        </tr>
        </thead>
        <tbody>
            <tr v-for="card in cards" v-bind:key="card.id">
                <td>
                    <utils-card-icon :card="card" class="hidden-sm-down"></utils-card-icon>
                    <utils-card-link :card="card"></utils-card-link>
                </td>
                <td>{{ $t('clan.'+card.clan) }}</td>
                <td>{{ $t('type.'+card.type) }}</td>
                <td><utils-card-traits-element :card="card"></utils-card-traits-element></td>
                <td>{{ card.side ? $t('side.'+card.side) : '' }}</td>
                <td>{{ card.cost }}</td>
                <td v-if="card.type === 'attachment'">
                    {{ card.military_bonus }} / {{ card.political_bonus }}
                </td>
                <td v-if="card.type === 'character'">
                    <span v-if="card.military === undefined">–</span>
                    <span v-else>{{ card.military }}</span>
                    /
                    <span v-if="card.political === undefined">–</span>
                    <span v-else>{{ card.political }}</span>
                    /
                    {{ card.glory }}
                </td>
                <td v-if="card.type === 'holding'">
                    {{ card.strength_bonus }}
                </td>
                <td v-if="card.type === 'province'">
                    {{ card.strength }}
                </td>
                <td v-if="card.type === 'stronghold'">
                    {{ card.honor }} / {{ card.fate }} / {{ card.influence_pool }} / {{ card.strength_bonus }}
                </td>
                <td v-if="card.type === 'event'">

                </td>
                <td v-if="card.type === 'role'">

                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';
  import UtilsCardIcon from '@/components/Utils/CardIcon';
  import UtilsCardLink from '@/components/Utils/CardLink';
  import UtilsCardTraitsElement from '@/components/Utils/CardTraitsElement';

  export default {
    name: 'cards-list-table',
    props: ['cards'],
    components: {
      UtilsCardIcon,
      UtilsCardLink,
      UtilsCardTraitsElement,
      CardsCard,
    },
  }
  ;
</script>

<style>

</style>
