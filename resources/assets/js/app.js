/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'
import store from './store/index'
import jwtToken from './helpers/jwt'
import App from './components/App'

// import zh_CN from 'vee-validate/dist/locale/zh_CN';
import zh_CN from './locale/zh_CN';
import VeeValidate, {Validator} from 'vee-validate';

Validator.localize('zh_CN', zh_CN);

// Add a request interceptor
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (jwtToken.getToken()) {
    config.headers['Authorization'] = 'Bearer ' + jwtToken.getToken();
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

Vue.use(VueRouter)
Vue.use(VeeValidate, {
  locale: 'zh_CN'
});
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('app', App);

new Vue({
  el: '#app',
  router,
  store,
});
