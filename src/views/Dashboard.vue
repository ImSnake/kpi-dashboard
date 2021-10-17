<template>
  <div class="dashboard container">

    <div class="row align-items-start mt-4">
      <h1>Динамика выполнения плана</h1>

      <div class="col">

        <div class="d-flex flex-row bd-highlight mt-3 mb-4">
          <select v-model="selectedYear" @change="changeSelectedYear" class="form-select" aria-label="Default select example">
            <option selected disabled value="">Выбрать год</option>
            <option v-for="year in yearList" :key="year" :value="year">{{ year }}</option>
          </select>
        </div>

        <h2>{{ year }} год</h2>

        <GraphYearSpeed
          :current="this.yearData.current"
          :planned="this.yearData.planned"
        />

      </div>

      <div class="col">

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
          :current="this.quarterData.current"
          :planned="this.quarterData.planned"
        />
      </div>
    </div>

    <div class="row align-items-start mt-5 pt-5">

      <h1>Динамика за {{ year }} по каналам</h1>

      <GraphYearPlanFact />

    </div>

    <div class="row align-items-start mt-3">
    </div>

    <!--          <button type="button" class="btn btn-success btn-sm">1 кв</button>
      <button type="button" class="btn btn-success btn-sm">2 кв</button>
      <button type="button" class="btn btn-success btn-sm">3 кв</button>
      <button type="button" class="btn btn-success btn-sm">4 кв</button>-->
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
  setup(){
    const today = new Date();
    //var dd = String(today.getDate()).padStart(2, '0');
    //var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const year = today.getFullYear();

    const month = Number(today.getMonth() + 1);
    let quarter = (month < 4) ? 1 : (month < 7) ? 2 : (month < 10) ? 3 : 4;
    console.log(quarter);
    console.log(year);
    return {year, quarter}
  },
  data() {
    return {
      //yearList: [{value:2021}, {value:2020}, {value:2019}],
      yearList: null,
      selectedYear: '',
      selectedQuarter: '',
      quarterData: {
        title: "Квартальный план",
        current: 150,
        planned: 116,
      },
      yearData: {
        title: "Годовой план",
        current: 250,
        planned: 577,
      },
    };
  },
  methods: {
    changeSelectedYear(){
      if (this.year !== this.selectedYear) {
        this.quarter = 1;
        this.selectedQuarter = 1;
      }
      this.year = this.selectedYear;
    },
    changeSelectedQuarter(){
      this.quarter = this.selectedQuarter;
    }
  },
  created() {
    EventService.getYearList().then(response => {
      console.log(response.data);
      console.log(Object.values(response.data.year));
      this.yearList = Array.from(response.data);
      console.log(this.yearList);
    }).catch(error => {
      console.log(error);
    });
  }
};
</script>

<style scoped>
.btn-success {
  background-color: #42b983;
  border-color: #42b983;
}
</style>
