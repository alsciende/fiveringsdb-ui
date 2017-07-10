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
            <tr v-for="card in cards" v-bind:key="card.code">
                <td>
                    <router-link :to="{ name: 'cards-by-card-code', params: { code: card.code } }">{{ card.name }}</router-link>
                </td>
                <td>{{ $t('clan.'+card.clan) }}</td>
                <td>{{ $t('type.'+card.type) }}</td>
                <td><span class="card-keyword" v-for="keyword in card.keywords">{{ $t('keyword.'+keyword) }}. </span></td>
                <td v-if="card.type === 'province'">{{ $t('element.'+card.element) }}</td>
                <td v-else>{{ card.side ? $t('side.'+card.side) : '' }}</td>
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
            </tr>
        </tbody>
    </table>
</template>

<script>
  import CardsCard from '@/components/Cards/Card';

  export default {
    name: 'cards-list-table',
    props: ['cards'],
    components: {
      CardsCard,
    },
  }
  ;
</script>

<style>

</style>