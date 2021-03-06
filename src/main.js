// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import store from './vuex/store'
import VueBus from 'vue-bus';
import router from './router'
import $ from 'jquery'
import VueResource from 'vue-resource';
import './common/style/reset.css'
import 'bootstrap/css/bootstrap.min.css'
import 'bootstrap/js/bootstrap.min.js'
import * as filters from './common/js/filter.js'

Object.keys(filters).forEach(key => {  
  Vue.filter(key, filters[key])  
})  

Vue.use(VueResource);

Vue.use(Vuex);

Vue.use(VueBus);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  data:{
    Bus: new Vue()
  }
})
