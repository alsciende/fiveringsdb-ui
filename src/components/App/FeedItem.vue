<template>
    <b-list-group-item :to="{ name: 'deck-view', params: { deckId: item.deck.id } }">
        <div class="small text-muted mb-2 d-flex w-100 justify-content-between">
            <span>
                <span :class="['fa', 'fa-'+typeIcon]"></span>
                {{ typeLabel }} <span v-if="item.personal">by {{ item.user.username }}</span>
            </span>
            <span>
                {{ fromNow(item.created_at) }}
            </span>
        </div>
        <h5>
            <span :class="['icon-clan-'+item.deck.primary_clan, 'fg-dark-'+item.deck.primary_clan]"></span>
            <span :class="['icon-clan-'+item.deck.secondary_clan, 'fg-dark-'+item.deck.secondary_clan]"></span>
            {{ item.deck.name }}
        </h5>
        <div>
            <span class="fa fa-user-circle-o"></span> {{ item.deck.user.username }}
            <span class="text-muted">&ndash; {{ fromNow(item.deck.published_at) }}</span>
        </div>
    </b-list-group-item>
</template>

<script>
  import moment from 'moment';

  export default {
    name: 'app-feed-item',
    props: ['item'],
    data() {
      return {};
    },
    computed: {
      typeIcon() {
        switch (this.item.type) {
          case 1:
            return 'comment';
          case 2:
            return 'share';
          case 3:
            return 'retweet';
          default:
            return 'Unknown event';
        }
      },
      typeLabel() {
        switch (this.item.type) {
          case 1:
            return 'New comment';
          case 2:
            return 'New decklist';
          case 3:
            return 'New share';
          default:
            return 'Unknown event';
        }
      },
    },
    methods: {
      fromNow(date) {
        return moment(date).fromNow();
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
