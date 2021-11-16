<template>
  <div class="container mt-3">
    <div
      class="py-20 px-44 relative flex items-center text-center flex-col gap-y-10"
    >
      <h5 class="text-h5 font-bold text-secondary-text-color-2">
        Join Us
      </h5>
      <h1 class="text-h1 max-w-lg font-bold  ">
        HIGH QUALITY COURSES
      </h1>
      <h4 class="text-h4 font-normal ">
        Our goal is to make online education work for everyone
      </h4>
      <input
        role="input"
        type="text"
        placeholder="Search"
        class="bg-gray-200 border rounded focus:outline-none  font-medium leading-none text-gray-800 py-4 w-3/4 pl-3 mt-2 text-xl"
      />
      <router-link
        to="/search"
        class="py-4 px-10 bg-primary text-btn font-bold rounded-md"
        >Search</router-link
      >
    </div>
    <div class="grid grid-cols-3 gap-x-8  mt-20 -mb-32 justify-center ">
      <div
        class=" w-full h-75 bg-white shadow-2xl"
        v-for="(item, i) in 3"
        :key="i"
      >
        <div class="flex flex-col my-9 ml-10 gap-y-5 items-start  ">
          <div class="px-5 py-5 bg-faded-secondary-color-2 rounded-lg">
            <i>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.71484 19.9999C1.71484 20.3155 1.9707 20.5714 2.28627 20.5714H29.7148C30.0304 20.5714 30.2863 20.3155 30.2863 19.9999V2.28564H1.71484V19.9999Z"
                  fill="#E74040"
                />
                <path
                  d="M31.4286 0H0.571429C0.255859 0 0 0.255859 0 0.571429C0 0.886998 0.255859 1.14286 0.571429 1.14286H31.4286C31.7441 1.14286 32 0.886998 32 0.571429C32 0.255859 31.7441 0 31.4286 0Z"
                  fill="#E74040"
                />
                <path
                  d="M20.572 29.7144H16.572V22.8572H17.1434C17.459 22.8572 17.7148 22.6014 17.7148 22.2858V21.7144H14.2863V22.2858C14.2863 22.6014 14.5421 22.8572 14.8577 22.8572H15.4291V29.7144H11.4291C10.4824 29.7144 9.71484 30.4819 9.71484 31.4286V32.0001H22.2863V31.4286C22.2863 30.4819 21.5187 29.7144 20.572 29.7144Z"
                  fill="#E74040"
                />
              </svg>
            </i>
          </div>
          <h3 class="text-h3 font-bold text-color ">Lifetime access</h3>
          <div
            class="text-paragraph font-normal text-left text-second-text-color max-w-xs"
          >
            The gradual accumulation of information about atomic and small-scale
            behaviour...
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
