<template>
  <body class="px-4  flex items-center pb-80 justify-center">
    <div class="w-full">
      <!-- <div class="px-4 md:px-10 py-4 md:py-7">
                <div class="sm:flex items-center justify-between">
                    <p tabindex="0" class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">Files</p>
                    <div class="mt-4 sm:mt-0">
                        <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 inline-flex sm:ml-3 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                            <p class="text-sm font-medium leading-none text-white">Download All</p>
                        </button>
                    </div>
                </div>
            </div> -->
      <div class="bg-gray-900 text-white px-4 md:px-10 pb-5">
        <div class="overflow-x-auto">
          <table class="w-full whitespace-nowrap">
            <thead>
              <tr>
                <th>Course name</th>
                <th class="pl-16">Course ID</th>
                <th class="pl-16">Time</th>
                <th class="pl-16">Total</th>
                <th class="pl-16">Date</th>
                <th class="pl-16">Status</th>
                <th class="pl-16">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none  h-16"
              >
                <td class="w-1/2">
                  <div class="flex items-center">
                    <div
                      class="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center"
                    >
                      <p class="text-xs font-bold leading-3 text-white">FIG</p>
                    </div>
                    <div class="pl-2">
                      <p class="text-sm font-medium leading-none">TOEIC 500</p>
                      <p class="text-xs leading-3  mt-2"></p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR007</p>
                </td>
                <td>
                  <p class="pl-16">3/4/2022 - 3/6/2022</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
                <td>
                  <p class="pl-16">Not Start Yet</p>
                </td>
                <td>
                  <button class="pl-16 text-blue-500" @click="discharge">
                    Discharge
                  </button>
                </td>
              </tr>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none  h-16"
              >
                <td class="w-1/2">
                  <div class="flex items-center">
                    <div
                      class="w-10 h-10 bg-red-700 rounded-sm flex items-center justify-center"
                    >
                      <p class="text-xs font-bold leading-3 text-white">PPT</p>
                    </div>
                    <div class="pl-2">
                      <p class="text-sm font-medium leading-none">TOEIC 500</p>
                      <p class="text-xs leading-3  mt-2"></p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR008</p>
                </td>
                <td>
                  <p class="pl-16">3/4/2022 - 3/6/2022</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
                <td>
                  <p class="pl-16">Studying</p>
                </td>
                <td>
                  <button class="pl-16 text-blue-500">
                    Discharge
                  </button>
                </td>
              </tr>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none  h-16"
              >
                <td class="w-1/2">
                  <div class="flex items-center">
                    <div
                      class="w-10 h-10 bg-blue-700 rounded-sm flex items-center justify-center"
                    >
                      <p class="text-xs font-bold leading-3 text-white">DOC</p>
                    </div>
                    <div class="pl-2">
                      <p class="text-sm font-medium leading-none">TOEIC 500</p>
                      <p class="text-xs leading-3  mt-2"></p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR008</p>
                </td>
                <td>
                  <p class="pl-16">3/4/2022 - 3/6/2022</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
                <td>
                  <p class="pl-16">Studying</p>
                </td>
                <td>
                  <button class="pl-16 text-blue-500">
                    Discharge
                  </button>
                </td>
              </tr>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none h-16"
              >
                <td class="w-1/2">
                  <div class="flex items-center">
                    <div
                      class="w-10 h-10 bg-gray-700 rounded-sm flex items-center justify-center"
                    >
                      <p class="text-xs font-bold leading-3 text-white">FIG</p>
                    </div>
                    <div class="pl-2">
                      <p class="text-sm font-medium leading-none">TOEIC 500</p>
                      <p class="text-xs leading-3  mt-2"></p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR009</p>
                </td>
                <td>
                  <p class="pl-16">3/4/2022 - 3/6/2022</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
                <td>
                  <p class="pl-16">Completed</p>
                </td>
                <td>
                  <button class="pl-16 text-blue-500">
                    Discharge
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  name: "Course",
  data() {
    return {
      show: null,
    };
  },
  methods: {
    discharge() {
      var r = confirm("Do you want discharge this course ?");
      if (r == true) {
        alert("Dischage complete!");
      } else {
        alert("Cancel!");
      }
    },
  },
  mounted() {},
};
</script>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
