<template>
  <div class="container">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
/*import Highcharts from "highcharts";
import hcMore from "highcharts/highcharts-more";

hcMore(Highcharts);*/

export default {
  name: "GraphYearPlanFact",

  props:  {
    //planned: { type: Object, required: true },
    //current: { type: Object, required: true }
  },

  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column'
        },

        title: {
          text: ''
        },

        xAxis: {
          categories: ['1 квартал', '2 квартал', '3 квартал', '4 квартал']
        },
        legend: {
          enabled: false
        },

        yAxis: {
          allowDecimals: false,
          min: 0,
          title: {
            text: 'Каналы сбыта'
          }
        },

        tooltip: {
          //crosshairs: true,
          formatter: function () {
            return '<b>' + this.x + '</b><br/>' +
              this.series.name + ': ' + this.y + '<br/>' +
              'Total: ' + this.point.stackTotal;
          }
        },

        plotOptions: {
          column: {
            stacking: 'normal'
          }
        },

        series: [{
          name: 'Аскон интеграция',
          data: [50, 30, 40, 70],
          color: 'rgb(39,101,161)',
          stack: 'План'
        }, {
          name: 'Франчайзи',
          data: [30, 20, 30, 50],
          color: 'rgb(12,126,27)',
          stack: 'План'
        }, {
          name: 'Дистрибьюторы',
          data: [15, 13, 14, 17],
          color: 'rgb(206,79,24)',
          stack: 'План'
        }, {
          name: 'Внешние рынки',
          data: [3, 4, 4, 2],
          color: 'rgb(222,181,16)',
          stack: 'План'
        },  {
          name: 'Аскон интеграция',
          data: [60, 35, 45, 88],
          color: 'rgb(39,101,161)',
          stack: 'Факт'
        }, {
          name: 'Франчайзи',
          data: [33, 23, 33, 55],
          color: 'rgb(12,126,27)',
          stack: 'Факт'
        }, {
          name: 'Дистрибьюторы',
          data: [16, 15, 18, 19],
          color: 'rgb(206,79,24)',
          stack: 'Факт'
        }, {
          name: 'Внешние рынки',
          data: [3, 4, 4, 2],
          color: 'rgb(222,181,16)',
          stack: 'Факт'
        },  ]
      },
    };
  },

  mounted() {

  },

};
</script>

<style scoped></style>
