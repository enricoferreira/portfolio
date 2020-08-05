import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import vueMoment from 'vue-moment';

Vue.config.productionTip = false
Vue.component('SideBar', ()=>import('./components/SideBar.vue'));
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(vueMoment);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
