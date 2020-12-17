<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';

import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
//import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';

import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
import Header from "./components/Header";
import Footer from "./components/Footer";

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);



export default {
  name: 'App',
  components: {Footer, Header,ValidationProvider,ValidationObserver},
  mounted() {
    this.storeUser();
  }
}
</script>

<style>
  #app{
    font-family: Tahoma;
  }
</style>
