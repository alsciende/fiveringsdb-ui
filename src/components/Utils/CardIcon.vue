<template>
    <span v-bind:class="classObject"></span>
</template>

<script>
    const typeIcons = {
      'attachment': 'paperclip',
      'character': 'user',
      'event': 'bolt',
      'holding': 'home',
      'province': 'map-marker',
      'role': 'asterisk',
      'stronghold': 'shield',
    };
  export default {
    name: 'utils-card-icon',
    props: ['card'],
    computed: {
      classObject: function () {
        return [
          'fa',
          'fa-fw',
          'fa-'+typeIcons[this.card.type],
          'fg-'+this.card.clan,
        ];
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .fg-crab { color: rgb(122,126,149); }
    .fg-crane { color: rgb(165,200,222); }
    .fg-dragon { color: rgb(97,144,129); }
    .fg-lion { color: rgb(203,180,101); }
    .fg-phoenix { color: rgb(122,126,149); }
    .fg-scorpion { color: rgb(154,70,57); }
    .fg-unicorn { color: rgb(122,97,152); }
    .fg-neutral { color: rgb(168,169,171); }
</style>
