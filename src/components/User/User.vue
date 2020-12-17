<template>
  <div class="user-container">
    <h1> This is new User page</h1>
    <p>Firstname____{{user && user.firstname}}</p>
    <p>Lastname____ {{user && user.lastname}}</p>
    <p>Email____ {{user && user.email}}</p>
    <button @click="logout" class="logout">Logout</button>
  </div>
</template>

<script>
  export default {
    name: "User",
    data() {
      return {}
    },
    methods: {
      logout(){
        const token = `Bearer ${localStorage.getItem('access_token')}`;
        this.axios.post('http://127.0.0.1:8000/api/auth/logout', null, {
          headers: {
            'Authorization': token
          }
        })
        .then(()=>{
          localStorage.removeItem('user');
          localStorage.removeItem('access_token');
          this.$store.commit('setUser', null);
          this.$router.push('/login')
        })

      }
    }

    // computed: {
    //   user(){
    //     return JSON.parse(localStorage.getItem('user')) || this.$store.getters.user
    //   }
    // }
  }
</script>

<style scoped>
.user-container{
  margin: 50px;
}

</style>
