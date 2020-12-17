import Vue from "vue";

export default Vue.mixin({
  methods: {
    storeUser(){
      const token = `Bearer ${localStorage.getItem('access_token')}`;
      this.axios.post('http://127.0.0.1:8000/api/auth/me', null, {
        headers: {
          'Authorization': token
        }
      })
        .then(res=>{
          // console.log(user)
          localStorage.setItem('user', JSON.stringify(res.data));
          this.$store.commit('setUser', res.data);
        })
        .catch(err=>{
          alert("error!")
        })
    }
  },
  computed: {
    user(){
      return JSON.parse(localStorage.getItem('user')) || this.$store.getters.user
    }
  }

})


