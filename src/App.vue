<template>
  <div id="app" class="bg-gray-900 text-white">
    <Header />
    <router-view></router-view>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
};
</script>

<style>
</style>
