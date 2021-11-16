<template>
  <div>
    <Hero />
    <our-course/>
  </div>
</template>

<script>
import Hero from '../components/Hero.vue'
import OurCourse from '../components/OurCourse.vue'
export default {
  name: "App",
  components: {
    Hero,
    OurCourse,
  },
};
</script>

<style>
</style>