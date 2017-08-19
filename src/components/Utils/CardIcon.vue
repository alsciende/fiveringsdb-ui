<template>
    <span v-bind:class="classObject"></span>
</template>

<script>
  import typeIcons from '@/service/typeIcons';

  export default {
    name: 'utils-card-icon',
    props: ['card'],
    computed: {
      classObject() {
        if (this.card.type === 'province') {
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
          `fa-${typeIcons.icon(this.card.type)}`,
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
        color: rgb(100, 100, 100);
    }
</style>
