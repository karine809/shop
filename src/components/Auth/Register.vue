<template>
<div class="register-container d-flex text-center col-lg-6 col-lg-offset-6">
  <div class="form-group w-50">
    <h3>SignUp</h3>
    <ValidationObserver v-slot="{handleSubmit}">
      <form @submit.prevent="handleSubmit(onSubmit)">

        <ValidationProvider name="firstname" rules="required" v-slot="{ errors }">
          <input v-model="user_data.firstname" type="text" class="form-control mb-2" placeholder="name">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="lastname" rules="required" v-slot="{ errors }">
          <input v-model="user_data.lastname" type="text" class="form-control mb-2" placeholder="surname">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="age" rules="required" v-slot="{ errors }">
          <input v-model="user_data.age" type="number" class="form-control mb-2" placeholder="age">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
          <input v-model="user_data.email" type="email" class="form-control mb-2" placeholder="email">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="password" rules="required|min:6" vid="pass" v-slot="{ errors }">
          <input v-model="user_data.password" type="password" class="form-control mb-2" placeholder="password">
          <span>{{ errors[0] }}</span>
        </ValidationProvider>

        <ValidationProvider name="password" rules="required|confirmed:pass" v-slot="{ errors }" >
          <input v-model="user_data.confirm_password" type="password" class="form-control mb-4" placeholder="confirm_password">
          <span>{{ errors[0] }}</span><br>
        </ValidationProvider>

        <button class="btn btn-primary" type="submit" @click="signUp">SignUp</button>
      </form>
    </ValidationObserver>



<!--      <input class="form-control mb-2 " type="text" placeholder="name" v-model="user_data.firstname">-->
<!--      <input class="form-control mb-2" type="text" placeholder="surname" v-model="user_data.lastname">-->
<!--      <input class="form-control mb-2" type="number" placeholder="age" v-model="user_data.age">-->
<!--      <input class="form-control mb-2" type="email" placeholder="email" v-model="user_data.email">-->
<!--      <input class="form-control mb-2" type="password" placeholder="password" v-model="user_data.password">-->
<!--      <input class="form-control mb-4" type="password" placeholder="Confirm_password" v-model="user_data.confirm_password" >-->
<!--      <button class="btn btn-primary" type="submit" @click="signUp">SignUp</button>-->
  </div>

</div>

</template>

<script>


export default {
  name: "Register",
  data(){
    return {
      user_data: {}
    }
  },
  methods: {
    onSubmit () {
     console.log ('Form has been submitted!');
    },
    signUp(){
      this.axios.post( 'http://127.0.0.1:8000/api/auth/signup', this.user_data)
      .then(res => {
        this.$router.push('/login');
      })
      .catch(err=>{
         alert(err.response.data)
        // console.log(err.response.data)//veragri popoxakani u v-if popoxakani
      })
    }

  }
}
</script>

<style >

/*.register-container>input{*/
/*  margin-bottom: 20px;*/
/*}*/
.register-container{
  margin: 70px auto;
  float: none;
}

</style>
