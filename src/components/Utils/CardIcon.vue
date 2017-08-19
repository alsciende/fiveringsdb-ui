<template>
    <span v-bind:class="classObject"></span>
</template>

<script>
  const typeIcons = {
    attachment: 'paperclip',
    character: 'user',
    event: 'bolt',
    holding: 'home',
    province: 'map-marker',
    role: 'asterisk',
    stronghold: 'university',
  };
  export default {
    name: 'utils-card-icon',
    props: ['card', 'shape'],
    computed: {
      classObject() {
        if (this.shape === 'element') {
          return [
            'icon',
            'icon-fw',
            `icon-element-${this.card.element}`,
            `fg-${this.card.clan}`,
          ];
        }

        return [
          'fa',
          'fa-fw',
          `fa-${typeIcons[this.card.type]}`,
          `fg-${this.card.clan}`,
        ];
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    .fg-crab {
        color: rgb(0, 28, 148);
    }

    .fg-crane {
        color: rgb(0, 137, 222);
    }

    .fg-dragon {
        color: rgb(0, 164, 114);
    }

    .fg-lion {
        color: rgb(203, 157, 0);
    }

    .fg-phoenix {
        color: rgb(193, 100, 0);
    }

    .fg-scorpion {
        color: rgb(166, 22, 0);
    }

    .fg-unicorn {
        color: rgb(120, 0, 152);
    }

    .fg-neutral {
        color: rgb(168, 169, 171);
    }
</style>
