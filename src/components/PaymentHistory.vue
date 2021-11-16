<template>
  <body class="px-4  flex items-center justify-center">
    <div class="xl:w-3/4 2xl:w-4/5 w-full">
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
                <th>Order Title</th>
                <th class="pl-16">Order ID</th>
                <th class="pl-16">Activity</th>
                <th class="pl-16">Total</th>
                <th class="pl-16">Date</th>
              </tr>
            </thead>
            <tbody>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR001</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
              </tr>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none h-16"
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR002</p>
                </td>
                <td>
                   <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
              </tr>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none h-16"
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR003</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR004</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
              </tr>
              <tr
                tabindex="0"
                class="focus:outline-none text-sm leading-none h-16"
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR005</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR006</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
                </td>
              </tr>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                   <p>#ODR007</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                   <p>#ODR008</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR008</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
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
                      <p class="text-xs leading-3  mt-2">
                        by NhatTan
                      </p>
                    </div>
                  </div>
                </td>
                <td class="pl-16">
                  <p>#ODR009</p>
                </td>
                <td>
                  <p class="pl-16">Charge fee 1</p>
                </td>
                <td>
                  <p class="pl-16">60.00$</p>
                </td>
                <td>
                  <p class="pl-16">Paid on 21 Februray 2020</p>
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
  name: "component",
  data() {
    return {
      show: null,
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style>
.checkbox:checked + .check-icon {
  display: flex;
}
</style>
