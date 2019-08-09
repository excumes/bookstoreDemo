import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Icon , Tab, Tabs, Search, Checkbox, CheckboxGroup, Button,  Cell, CellGroup ,Toast ,Stepper } from 'vant';
import { SwipeCell } from 'vant';
import 'vant/lib/index.css';
Vue.use(Icon).use(Checkbox).use(CheckboxGroup).use(Button).use(Cell).use(CellGroup).use(Toast).use(Stepper);
Vue.use(SwipeCell)
Vue.config.productionTip = false;
Vue.use(Tab).use(Tabs).use(Search);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
