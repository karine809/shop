<template>
  <div class="login-container d-flex text-center col-lg-6 col-lg-offset-6">
    <div class="form=group w-50">
      <h3> Login</h3>
      <input class="form-control mb-2" type="text" placeholder="email" v-model="new_user.email">
      <input class="form-control mb-4"type="text" placeholder="password" v-model="new_user.password">
      <button class="btn btn-primary" type="submit">Login</button>
    </div>




  </div>
</template>

<script>
export default {
name: "Login",
  data(){
  return {
    users: [],
    new_user: {}
  }
  },
  methods: {

  }
}
</script>

<style scoped>
  .login-container{
    margin: 80px auto;
  }

</style>
