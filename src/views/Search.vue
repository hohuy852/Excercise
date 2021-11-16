<template>
  <div class="bg-white pt-32 pb-10">
    <div class="container">
      <h2 class="text-h2 text-center text-color font-bold">
        Found 2 Courses
      </h2>
      <div class="text-h5 mt-5 font-normal text-color text-center">
        
      </div>
      <div class="mt-5 grid grid-cols-4 gap-x-4 gap-y-10">
        <div class="flex flex-col gap-y-5 " v-for="(item, i) in 2" :key="i">
          <div
            class="w-full h-60 border-8 bg-contain"
            :style="{
              backgroundImage: `url(${'https://ise-vmu.edu.vn/images/news/678logo-toeic-15440892075481729847449.jpg'})`,
            }"
          ></div>
          <h4 class="text-h4 font-bold text-color">Course Name</h4>
          <div class="text-paragraph font-medium text-color">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            atque eos beatae unde, magnam, quis nobis explicabo laboriosam
            veniam dolore recusandae aperiam, libero officiis asperiores
            repellendus ratione alias quo hic.
          </div>
          <div class="text-paragraph font-medium text-color">
            Time: 6 months
          </div>
          <div class="flex gap-x-2 items-center">
            <h5 class="text-h5 font-bold text-secondary-color-1">
              $6.48/months
            </h5>
            <del class="text-h5 font-bold text-gray-600">$16.48</del>
            <router-link
              to="/course"
              class="py-3 px-7 bg-primary text-btn font-bold rounded-md ml-auto"
              >More Info</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>