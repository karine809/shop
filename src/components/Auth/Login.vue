<template>
  <div class="login-container d-flex text-center col-lg-6 col-lg-offset-6">
    <div class="form-group w-50">
      <h3> Login</h3>
       <input class="form-control mb-2" type="email" placeholder="email" v-model="user_data.email">
        <input class="form-control mb-4"type="password" placeholder="password" v-model="user_data.password">
        <button class="btn btn-primary" type="submit" @click="login">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
      data(){
      return {
        user_data:{},
      }
      },
      methods: {
        login(){
          this.axios.post('http://127.0.0.1:8000/api/auth/login', this.user_data)
          .then(res =>{
            localStorage.setItem('access_token', res.data.access_token);
            this. storeUser();
            this.$router.push('/user/dashboard');
           console.log(res)
          })
          .catch(err=>{
           //alert("error")
          })
        }

      }
  }
</script>

<style scoped>
  .login-container{
    margin: 80px auto;
    float: none;
  }

</style>
