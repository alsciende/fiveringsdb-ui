<script>
  import { Bar, mixins } from 'vue-chartjs';

  const { reactiveProp } = mixins;

  export default {
    extends: Bar,
    mixins: [reactiveProp],
    name: 'cost-chart',
    props: {
      chartOptions: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      this.renderChart(this.chartData, this.chartOptions);
    },
  };
</script>
