<template>
<div class="register-container d-flex text-center col-lg-6 col-lg-offset-6">
  <div class="form-group w-50">
    <h3>SignUp</h3>
    <input class="form-control mb-2 " type="text" placeholder="name" v-model="new_user.name">
    <input class="form-control mb-2" type="text" placeholder="surname" v-model="new_user.surname">
    <input class="form-control mb-2" type="text" placeholder="age" v-model="new_user.age">
    <input class="form-control mb-2" type="text" placeholder="email" v-model="new_user.email">
    <input class="form-control mb-2"type="text" placeholder="password" v-model="new_user.password">
    <input class="form-control mb-4" type="text" placeholder="Repeat password" v-model="new_user.repeat" >
    <button class="btn btn-primary" type="submit" @click="addLog">SignUp</button>
  </div>

</div>

</template>

<script>
export default {
  name: "Register",
  data(){
    return {
      users: [],
      new_user:  {}
    }
  },
  methods: {
    addLog(){
      this.users.push(this.new_user)
      console.log(this.new_user)
      this.new_user = {}
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
