<template>
  <div class="container">
    <div class="flex items-center pt-4">
      <router-link to="/" class="text-h3 font-bold">Group 1</router-link>
      <ul class="flex gap-x-5 ml-20 text-h5 font-bold ">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="">Product</a></li>
        <li><a href="">Pricing</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <div class="ml-auto flex gap-x-11 text-h5 font-bold  items-center ">
       <button class="text-h5 font-bold" v-if="!loggedIn" @click="login">Login</button>
         <button class="text-h5 font-bold" v-if="loggedIn" @click="logOut">Logout</button>
        <div class="flex py-4 px-6 items-center rounded-md bg-primary gap-x-4 " v-if="!loggedIn">
          <router-link to="/register" >Join us!</router-link>
          <i>
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36109 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z" fill="white"/>
          </svg>
          </i>
        </div> 
          <button class="text-h5 font-bold" v-if="loggedIn" @click="goInfo">My Account</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

    methods:{
      login(){
          this.$router.push('/login')
      },
      logOut(){
          this.$store.dispatch('logout')
          .then(
            this.$router.push('/login')
          )
      },
      goInfo(){
         this.$router.push('/profile')
      }
    },
    computed:{
      loggedIn(){
        return this.$store.state.auth
      }
    }

};
</script>

<style>
</style>