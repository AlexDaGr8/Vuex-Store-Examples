import Vue from 'vue'
import App from './App.vue'
import { store } from './store/store'
import { FontAwesomeIcon } from '@fortawesome/fontawesome-free'

Vue.config.productionTip = false

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
