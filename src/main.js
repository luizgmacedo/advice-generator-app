import Vue from "vue";
import App from "./App/App.vue";
import store from "./store";

import "@/assets/scss/_index.scss";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
