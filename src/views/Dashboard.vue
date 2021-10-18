<template>
  <div class="dashboard container">

    <div class="row align-items-start mt-4">
      <h1>Динамика выполнения плана</h1>

      <div v-if="yearData.planned > 0" class="col">

        <div class="d-flex flex-row bd-highlight mt-3 mb-4">
          <select v-model="selectedYear" @change="changeSelectedYear" class="form-select" aria-label="Default select example">
            <option selected disabled value="">Выбрать год</option>
            <option v-for="year in yearList" :key="year" :value="year">{{ year }} год</option>
          </select>
        </div>

        <h2>{{ year }} год</h2>

        <GraphYearSpeed
          :current="this.yearData.current"
          :planned="this.yearData.planned"
        />

      </div>

      <div v-if="quarterData.planned > 0"  class="col">

        <div class="d-flex flex-row bd-highlight mt-3 mb-4">
          <select v-model="selectedQuarter" @change="changeSelectedQuarter" class="form-select" aria-label="Default select example">
            <option selected disabled value="">Выбрать квартал</option>
            <option value="1">1 квартал</option>
            <option value="2">2 квартал</option>
            <option value="3">3 квартал</option>
            <option value="4">4 квартал</option>
          </select>
        </div>

        <h2>{{ quarter }} квартал</h2>

        <GraphYearSpeed
          :current="quarterData.current"
          :planned="quarterData.planned"
        />
      </div>
    </div>

    <div class="row align-items-start mt-5 pt-5">

      <h1>Динамика за {{ year }} по каналам</h1>

    <GraphYearPlanFact
        :planned="apiData[this.year][0]['plan']"
        :current="apiData[this.year][1]['fact']"/>

    </div>

    <div class="row align-items-start mt-3">
    </div>

  </div>
</template>

<script>
import EventService from '@/services/EventService';
import GraphYearSpeed from "@/components/GraphYearSpeed";
import GraphYearPlanFact from "@/components/GraphYearPlanFact.vue";

export default {
  name: "Dashboard",
  components: {
    GraphYearSpeed,
    GraphYearPlanFact,
  },

  data() {
    return {
      yearList: null,
      year: new Date().getFullYear(),
      quarter: 1,
      apiData: {},
      selectedYear: '',
      selectedQuarter: '',
      quarterData: {
        current: 0,
        planned: 0,
      },
      yearData: {
        current: 0,
        planned: 0,
      },
      dynamic: {
        'plan': {},
        'fact': {}
      }

    };
  },

  created() {
    this.initDashboard();
  },


  computed: {
  },

  methods: {

    async apiGetYearData() {
      const response = await EventService.getYearData(this.year);
      this.apiData[this.year] = response.data;
      let count = this.apiData[this.year];

      count.forEach(type => {
        Object.values(type).forEach(qt => {
          let sumY = 0;
          Object.values(qt).forEach(quarter => {
            let sumQ = 0;
            Object.values(quarter).forEach(tt => {
              Object.values(tt).forEach(xx => {
                sumQ += +Object.values(xx);
                sumY += +Object.values(xx);
              });
            });
            quarter.sumQ = Math.round(sumQ / 1000000, 2);
          });
          type.sumY = Math.round(sumY / 1000000, 2);
        });
      });

      this.updateYearData();
      this.updateQuarterData();
    },

    changeSelectedYear(){
      if (this.year !== this.selectedYear) {
        this.quarter = 1;
        this.selectedQuarter = 1;
      }

      this.year = this.selectedYear;

      if (Object.keys(this.apiData).indexOf(String(this.year)) < 0) {
        this.apiGetYearData();
      }

      this.updateYearData();
      this.updateQuarterData();
    },

    changeSelectedQuarter(){
      this.quarter = this.selectedQuarter;
      this.updateQuarterData();
    },

    async initDashboard() {
      const response = await EventService.getYearList();
      this.yearList = response.data;
      this.year = this.yearList[0];
      this.apiGetYearData();
    },

    updateQuarterData(){
      let num = this.quarter-1;
      this.quarterData = {
        planned: this.apiData[this.year][0]['plan'][num].sumQ,
        current: this.apiData[this.year][1]['fact'][num].sumQ
      }
    },

    updateYearData(){
      this.yearData.planned = this.apiData[this.year][0].sumY;
      this.yearData.current = this.apiData[this.year][1].sumY;
    },

  },


};
</script>

<style scoped>

</style>
