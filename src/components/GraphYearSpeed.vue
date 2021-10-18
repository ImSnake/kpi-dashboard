<template>
  <div :v-if="planned" class="container">
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  name: "GraphYearSpeed",
  props: {
    current: { type: Number, required: true },
    planned: { type: Number, required: true },
  },

  data() {
    return {
      chartOptions: {
        exporting: {
          enabled: false,
        },
        chart: {
          type: "gauge",
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false,
        },
        title: {
          text: "",
        },
        pane: {
          startAngle: -150,
          endAngle: 150,
          background: [
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "#FFF"],
                  [1, "#333"],
                ],
              },
              borderWidth: 0,
              outerRadius: "109%",
            },
            {
              backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, "#333"],
                  [1, "#FFF"],
                ],
              },
              borderWidth: 1,
              outerRadius: "107%",
            },
            {
              // default background
            },
            {
              backgroundColor: "#DDD",
              borderWidth: 0,
              outerRadius: "105%",
              innerRadius: "103%",
            },
          ],
        },
        // the value axis
        yAxis: {
          min: 0,
          max:
            this.current < this.planned
              ? this.planned + (this.planned * 10) / 100
              : this.current,
          minorTickInterval: "auto",
          minorTickWidth: 1,
          minorTickLength: 10,
          minorTickPosition: "inside",
          minorTickColor: "#666",
          tickPixelInterval: 30,
          tickWidth: 2,
          tickPosition: "inside",
          tickLength: 10,
          tickColor: "#666",
          labels: {
            step: 2,
            rotation: "auto",
          },
          title: {
            text: "млн. руб.",
          },
          plotBands: [
            {
              from: 0,
              to: this.planned - (this.planned * 10) / 100,
              color: "#DF5353", // red
            },
            {
              from: this.planned - (this.planned * 10) / 100,
              to: this.planned,
              color: "#DDDF0D", // yellow
            },
            {
              from: this.planned,
              to:
                this.current < this.planned
                  ? this.planned + (this.planned * 10) / 100
                  : this.current,
              color: "#55BF3B", // green
            },
          ],
        },
        tooltip: {
          //useHTML: true,
          pointFormat:
            "<div>Процент выполнения: <b>" +
            Math.round((this.current * 100) / this.planned) +
            " %</b></div>" +
            "<div>План: <b>" +
            this.planned +
            "</b> млн. руб.</div>" +
            "<div>{series.name}: <b>{point.y}</b> млн. руб.</div>",
        },
        series: [
          {
            name: "Факт",
            data: [this.current],
          },
        ],
      }
    };
  },

  watch: {
    planned: function (val, oldVal) {
      if(oldVal !== val) {
        this.chartOptions = this.methods();
      }
    }
  },

  methods: {
    methods() {
        return {
          exporting: {
            enabled: false,
          },
          chart: {
            type: "gauge",
            plotBackgroundColor: null,
            plotBackgroundImage: null,
            plotBorderWidth: 0,
            plotShadow: false,
          },
          title: {
            text: "",
          },
          pane: {
            startAngle: -150,
            endAngle: 150,
            background: [
              {
                backgroundColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                    [0, "#FFF"],
                    [1, "#333"],
                  ],
                },
                borderWidth: 0,
                outerRadius: "109%",
              },
              {
                backgroundColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                    [0, "#333"],
                    [1, "#FFF"],
                  ],
                },
                borderWidth: 1,
                outerRadius: "107%",
              },
              {
                // default background
              },
              {
                backgroundColor: "#DDD",
                borderWidth: 0,
                outerRadius: "105%",
                innerRadius: "103%",
              },
            ],
          },
          // the value axis
          yAxis: {
            min: 0,
            max:
              this.current < this.planned
                ? this.planned + (this.planned * 10) / 100
                : this.current,
            minorTickInterval: "auto",
            minorTickWidth: 1,
            minorTickLength: 10,
            minorTickPosition: "inside",
            minorTickColor: "#666",
            tickPixelInterval: 30,
            tickWidth: 2,
            tickPosition: "inside",
            tickLength: 10,
            tickColor: "#666",
            labels: {
              step: 2,
              rotation: "auto",
            },
            title: {
              text: "млн. руб.",
            },
            plotBands: [
              {
                from: 0,
                to: this.planned - (this.planned * 10) / 100,
                color: "#DF5353", // red
              },
              {
                from: this.planned - (this.planned * 10) / 100,
                to: this.planned,
                color: "#DDDF0D", // yellow
              },
              {
                from: this.planned,
                to:
                  this.current < this.planned
                    ? this.planned + (this.planned * 10) / 100
                    : this.current,
                color: "#55BF3B", // green
              },
            ],
          },
          tooltip: {
            useHTML: true,
            pointFormat:
              "<div>Процент выполнения: <b>" +
              Math.round((this.current * 100) / this.planned) +
              " %</b></div>" +
              "<div>План: <b>" +
              this.planned +
              "</b> млн. руб.</div>" +
              "<div>{series.name}: <b>{point.y}</b> млн. руб.</div>",
          },
          series: [
            {
              name: "Факт",
              data: [this.current],
            },
          ],
        }

    }
  }
};
</script>

<style scoped></style>
