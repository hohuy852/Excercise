<template>
  <div class="container mt-20">
    <div class="grid grid-cols-5">
      <div class="grid col-span-1">
        <div class="flex flex-col gap-y-5">
          <router-link
            to="/profile/"
            exact
            class="flex text-h4 font-semibold hover:text-yellow-500"
          >
            Edit Profile
          </router-link>
          <router-link
            to="/profile/course-info"
            class="flex text-h4 font-semibold hover:text-yellow-500"
          >
            Course information
          </router-link>
          <router-link
            to="/profile/reserve"
            class="flex text-h4 font-semibold hover:text-yellow-500"
          >
            Reserve
          </router-link>
          <router-link
           to="/profile/change-class"
            class="flex text-h4 font-semibold hover:text-yellow-500"
          >
            Change class
          </router-link>
          <router-link
            to="/profile/payment-history"
            class="flex text-h4 font-semibold hover:text-yellow-500"
          >
            Payment history
          </router-link>
           <router-link
            to="/profile/courses"
            class="flex text-h4 font-semibold hover:text-yellow-500"
          >
           Courses
          </router-link>
        </div>
      </div>
      <div class="grid col-span-4">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>