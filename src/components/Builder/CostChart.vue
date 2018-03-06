<template>
    <div id="cost-chart" class="d-print-none">
        <bar-chart :chart-data="data" :chart-options="options"></bar-chart>
    </div>
</template>

<script>
  import range from 'lodash/range';
  import max from 'lodash/max';
  import fill from 'lodash/fill';

  import stores from '@/service/storeService';
  import BarChart from './BarChart';

  // keep sorted by side
  const configs = [
    {
      type: 'character',
      side: 'dynasty',
      color: '#6a89cc',
    },
    {
      type: 'event',
      side: 'conflict',
      color: '#fad390',
    },
    {
      type: 'attachment',
      side: 'conflict',
      color: '#fa983a',
    },
    {
      type: 'character',
      side: 'conflict',
      color: '#e55039',
    },
  ];

  export default {
    name: 'cost-chart',
    components: {
      BarChart,
    },
    props: {
      deck: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        options: {
          scales: {
            xAxes: [{
              stacked: true,
            }],
            yAxes: [{
              stacked: true,
            }],
          },
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: 'Cost Chart',
          },
          tooltips: {
            mode: 'index',
            intersect: false,
            callbacks: {
              title(tooltipItem) {
                return `Number of cards costing ${tooltipItem[0].xLabel}`;
              },
            },
          },
        },
      };
    },
    computed: {
      data() {
        const maxCost = max(this.slots.map(slot => slot.card.cost));

        if(isNaN(maxCost)) {
          return {};
        }

        const datasets = configs.map((config) => {
          const costs = this
            .slots
            .filter(slot => slot.card.side === config.side && slot.card.type === config.type)
            .reduce((accumulator, currentValue) => {
              if (currentValue.card.cost !== null) {
                accumulator[currentValue.card.cost] += currentValue.quantity;
              }
              return accumulator;
            }, fill(Array(maxCost + 1), 0));

          return {
            label: (config.type === 'character' ? this.$t(`side.${config.side}`) + ' ' : '') + this.$t(`type.${config.type}`),
            stack: config.side,
            backgroundColor: config.color,
            data: costs,
          };
        });

        return {
          labels: range(0, maxCost + 1),
          datasets,
        };
      },
      slots() {
        return stores.cards({ id: Object.keys(this.deck.cards) }).map(card => ({
          quantity: this.deck.cards[card.id],
          card,
        }));
      },
    },
  };
</script>

<style scoped>

</style>
