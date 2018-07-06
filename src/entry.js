import Vue from 'vue';
import App from './App';
import * as filters from './filter';

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})

new Vue({
  el: '#app',
  render: h => h(App)
})
