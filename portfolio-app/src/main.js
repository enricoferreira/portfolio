import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

Vue.config.productionTip = false
Vue.component('SideBar', ()=>import('./components/SideBar.vue'));
Vue.component('font-awesome-icon', FontAwesomeIcon);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
