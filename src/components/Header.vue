<template>
<div class="header-container">
  <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div class="collapse navbar-collapse" id="navbarCollapse">
      <ul class="navbar-nav mr-auto">
          <li class="nav-item active ">
            <router-link to="/" class=" nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" class=" nav-link">Login</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/signup" class=" nav-link">SignUp</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user" class=" nav-link">User</router-link>
          </li>
      </ul>
    </div>
  </nav>

</div>
</template>

<script>
export default {
name: "Header"
}
</script>

<style scoped>


</style>
