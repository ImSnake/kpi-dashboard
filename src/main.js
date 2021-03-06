import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import Highcharts from "highcharts";
import HighchartsVue from "highcharts-vue";
import hcMore from "highcharts/highcharts-more";
hcMore(Highcharts);

createApp(App)
  .use(store)
  .use(router)
  .use(HighchartsVue)
  .mount("#app");
