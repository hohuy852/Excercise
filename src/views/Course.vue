<template>
  <div class="container my-44">
    <div class="grid grid-cols-3 gap-x-6">
      <div class="col-span-1 flex flex-col gap-y-10">
        <div
          class="w-5/6 h-60 border-8 bg-no-repeat bg-cover"
          :style="{
            backgroundImage: `url(${'https://ise-vmu.edu.vn/images/news/678logo-toeic-15440892075481729847449.jpg'})`,
          }"
        ></div>
        <div class="flex flex-col gap-y-7">
          <div class="text-des font-normal">
            This course will give you the ability to understand English better
            and the confidence to speak and write English more fluently. This
            English grammar course is taught by two world-renowned
            communications trainers, TJ Walker and Derek Smith.
          </div>
          <div v class="font-medium">Time: 6 months</div>
          <div v class="font-medium">Mentor: Nguyen Van A</div>
          <div class="font-medium">Pricing: 10$ / month</div>
          <div>
            <button
              class="py-3 px-10 bg-primary text-link rounded-lg font-medium"
              @click="enroll"
            >
              Enroll
            </button>
          </div>
        </div>
      </div>

      <div class="grid col-span-2 gap-y-7">
        <h3 class="text-4xl font-bold">TOEIC 500</h3>
        <h4 class="text-h4 font-semibold">What you'll learn</h4>
        <div class="grid grid-cols-2">
          <div class="flex flex-col gap-y-5">
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                You will learn to think in English and to speak English
                fluently. (in Intermediate level)
              </div>
            </div>
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                You will learn to understand movies and TV shows in English.
              </div>
            </div>
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                After the course, you can start preparing for English language
                tests like TOEFL, IELTS, GMAT etc.
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-y-5">
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                You will learn over 1000 vital English words, expressions and
                idioms, and how to use them in real life.
              </div>
            </div>
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                You will learn the most important English grammar with tons of
                English-speaking practice.
              </div>
            </div>
          </div>
        </div>
        <h4 class="text-h4 font-semibold">Who this course is for:</h4>
        <div class="grid grid-cols-2">
          <div class="flex flex-col gap-y-5">
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                This English Grammar course is ideal for anyone searching for
                more info on the following
              </div>
            </div>
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                English learners who wish to communicate confidently in English.
              </div>
            </div>
            <div class="flex gap-x-3 items-center">
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                English learners who wish to improve their grammar knowledge.
              </div>
            </div>
          </div>
          <!-- <div class="flex flex-col gap-y-5">
            <div
              class="flex gap-x-3 items-center"
              v-for="(item, i) in 3"
              :key="i"
            >
              <div>
                <img width="30" height="30" src="@/assets/check.svg" alt="" />
              </div>
              <div class="text-des font-normal">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Reprehenderit officia non conss
              </div>
            </div>
          </div> -->
        </div>

        <h4 class="text-h4 font-semibold">Class List</h4>
        <div class="-ml-7">
          <div class="px-4 pt-2  flex items-center justify-center">
            <div class="w-full -ml-8">
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
                        <th>Class Name</th>
                        <th class="pl-16">Address</th>
                        <th class="pl-16">Mentor</th>
                        <th class="pl-16">Number</th>
                        <th class="pl-16">Start Date / End Date</th>
                        <th class="pl-16">Schedule</th>
                        <th class="pl-16">Status</th>
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
                              <p
                                class="text-xs font-bold leading-3 text-white"
                              ></p>
                            </div>
                            <div class="pl-2">
                              <p class="text-sm font-medium leading-none">
                                TOEIC500A
                              </p>
                              <p class="text-xs leading-3  mt-2"></p>
                            </div>
                          </div>
                        </td>
                        <td class="pl-16">
                          <p>Campus 3</p>
                        </td>
                        <td>
                          <p class="pl-16">Nguyen Van A</p>
                        </td>
                        <td>
                          <p class="pl-16">35/35</p>
                        </td>
                        <td>
                          <p class="pl-16">26th-April / 26th-Oct</p>
                        </td>
                        <td class="flex flex-col gap-y-2">
                          <p class="pl-16">Mon: 17:00-20:00</p>
                          <p class="pl-16">Tues: 17:00-20:00</p>
                        </td>
                        <td>
                          <p class="pl-16">Locked</p>
                        </td>
                        <td>
                          <input type="radio" name="" id="" />
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
                              <p
                                class="text-xs font-bold leading-3 text-white"
                              ></p>
                            </div>
                            <div class="pl-2">
                              <p class="text-sm font-medium leading-none">
                                TOEIC500B
                              </p>
                              <p class="text-xs leading-3  mt-2"></p>
                            </div>
                          </div>
                        </td>
                        <td class="pl-16">
                          <p>Campus 2</p>
                        </td>
                        <td>
                          <p class="pl-16">Nguyen Van A</p>
                        </td>
                        <td>
                          <p class="pl-16">25/35</p>
                        </td>
                        <td>
                          <p class="pl-16">26th-April / 26th-Oct</p>
                        </td>
                        <td class="flex flex-col gap-y-2">
                          <p class="pl-16">Mon: 17:00-20:00</p>
                          <p class="pl-16">Tues: 17:00-20:00</p>
                        </td>
                        <td>
                          <p class="pl-16">Locked</p>
                        </td>
                        <td>
                          <input type="radio" name="" id="" />
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
                              <p
                                class="text-xs font-bold leading-3 text-white"
                              ></p>
                            </div>
                            <div class="pl-2">
                              <p class="text-sm font-medium leading-none">
                                TOEIC500C
                              </p>
                              <p class="text-xs leading-3  mt-2"></p>
                            </div>
                          </div>
                        </td>
                        <td class="pl-16">
                          <p>Campus 1</p>
                        </td>
                        <td>
                          <p class="pl-16">Nguyen Van A</p>
                        </td>
                        <td>
                          <p class="pl-16">28/35</p>
                        </td>
                        <td>
                          <p class="pl-16">26th-April / 26th-Oct</p>
                        </td>
                        <td class="flex flex-col gap-y-2">
                          <p class="pl-16">Mon: 17:00-20:00</p>
                          <p class="pl-16">Tues: 17:00-20:00</p>
                        </td>
                        <td>
                          <p class="pl-16">Available</p>
                        </td>
                        <td>
                          <input type="radio" name="" id="" />
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
                              <p
                                class="text-xs font-bold leading-3 text-white"
                              ></p>
                            </div>
                            <div class="pl-2">
                              <p class="text-sm font-medium leading-none">
                                TOEIC500D
                              </p>
                              <p class="text-xs leading-3  mt-2"></p>
                            </div>
                          </div>
                        </td>
                        <td class="pl-16">
                          <p>Campus 1</p>
                        </td>
                        <td>
                          <p class="pl-16">Nguyen Van A</p>
                        </td>
                        <td>
                          <p class="pl-16">12/35</p>
                        </td>
                        <td>
                          <p class="pl-16">26th-April / 26th-Oct</p>
                        </td>
                        <td class="flex flex-col gap-y-2">
                          <p class="pl-16">Mon: 17:00-20:00</p>
                          <p class="pl-16">Tues: 17:00-20:00</p>
                        </td>
                        <td>
                          <p class="pl-16">Available</p>
                        </td>
                        <td>
                          <input type="radio" name="" id="" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    enroll() {
      if (this.$store.state.auth == true) {
        //  alert("Dang ky thanh cong");
        this.$router.push("/checkout");
      } else {
        this.$router.push("/register");
      }
    },
  },
};
</script>

<style></style>
