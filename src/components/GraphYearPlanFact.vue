<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import hcMore from "highcharts/highcharts-more";

hcMore(Highcharts);

export default {
  name: "GraphYearPlanFact",
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
          color: 'rgba(165,170,217,1)',
          stack: 'План'
        }, {
          name: 'Франчайзи',
          data: [30, 20, 30, 50],
          color: 'rgba(248,161,63,1)',
          stack: 'План'
        }, {
          name: 'Дистрибьюторы',
          data: [15, 13, 14, 17],
          color: 'rgba(126,86,134,1)',
          stack: 'План'
        }, {
          name: 'Внешние рынки',
          data: [3, 4, 4, 2],
          color: 'rgba(186,60,61,1)',
          stack: 'План'
        },  {
          name: 'Аскон интеграция',
          data: [60, 35, 45, 88],
          color: 'rgba(165,170,217,1)',
          stack: 'Факт'
        }, {
          name: 'Франчайзи',
          data: [33, 23, 33, 55],
          color: 'rgba(248,161,63,1)',
          stack: 'Факт'
        }, {
          name: 'Дистрибьюторы',
          data: [16, 15, 18, 19],
          color: 'rgba(126,86,134,1)',
          stack: 'Факт'
        }, {
          name: 'Внешние рынки',
          data: [3, 4, 4, 2],
          color: 'rgba(186,60,61,1)',
          stack: 'Факт'
        },  ]
      },
    };
  },
};
</script>

<style scoped></style>
