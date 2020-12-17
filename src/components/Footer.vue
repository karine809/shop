<template>
<div class="footer-container">
  <footer class="w3-container w3-dark-grey w3-padding-32 w3-margin-top text-center">
    <p>Powered by Me with <router-link to="https://bootstrap-vue.org/docs">_Bootstrap</router-link> </p>
</footer>

</div>
</template>

<script>
    export default {
    name: "Footer"
    }
</script>

<style scoped>
  div{
    background-color: black;
  }
  footer{
    position: fixed;
    bottom: 0;
    margin: 5px 400px;

  }

</style>
