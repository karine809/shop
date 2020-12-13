<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
Vue.use(BootstrapVue);
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {Footer, Header},
}
</script>

<style>
#app{
  font-family: Tahoma;
}
</style>
