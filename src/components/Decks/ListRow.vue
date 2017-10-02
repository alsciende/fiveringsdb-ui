<template>
    <router-link :to="{ name: 'deck-view', params: { deckId: deck.id } }"
       class="list-group-item list-group-item-action flex-column align-items-start">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1">
                <span v-for="clan in clans" :key="clan" class="mx-1" :class="['icon-clan-'+clan, 'fg-dark-'+clan]"></span>
                {{ deck.name }}
            </h5>
        </div>
        <div class="d-flex w-100 justify-content-between align-items-end">
            <span>
                <span class="fa fa-user-circle-o"></span> {{ deck.user.username }}
            </span>
            <span>
                <span class="fa fa-heart" style="color:red"></span> 43
                <span class="fa fa-retweet" style="color:blue"></span> 7
            </span>
        </div>
        <div class="d-flex w-100 justify-content-between small">
            <span>{{ $t('format.'+deck.format) }}</span>
            <span>{{ fromNow }}</span>
        </div>
    </router-link>
</template>

<script>
  import moment from 'moment';
  import { filter } from 'lodash';

  export default {
    name: 'decks-list-row',
    props: {
      deck: {
        type: Object,
        required: true,
      },
    },
    computed: {
      fromNow() {
        return moment(this.deck.created_at).fromNow();
      },
      clan() {
        return this.clans.map(clan => this.$t(`clan.${clan}`)).join('/');
      },
      clans() {
        return filter([
          this.deck.primary_clan,
          this.deck.secondary_clan,
        ]);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
