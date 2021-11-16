<template>
  <div>
    <div class="flex flex-col gap-y-2 items-center justify-center">
      <h4 class="text-h4 font-semibold mb-10">Reserve Form</h4>
      <form class="w-full max-w-lg">
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-200
              border
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white
            "
              id="grid-first-name"
              type="text"
              placeholder="Nhat"
            />
          </div>
          <div class="w-full md:w-1/2 px-3">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-200
              border border-gray-200
              rounded
              py-3
              px-4
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
              id="grid-last-name"
              type="text"
              placeholder="Tan"
            />
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-6">
          <div class="w-full px-3">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-password"
            >
              Email
            </label>
            <input
              disabled
              class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-gray-200
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
              id="grid-password"
              type="password"
              placeholder="example@example.com"
            />
          </div>

          <div class="w-full px-3">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-password"
            >
              Phone Number
            </label>
            <input
              class="
              appearance-none
              block
              w-full
              bg-gray-200
              text-black
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
              id="grid-password"
              type="password"
              placeholder="0123456789"
            />
            <!-- <p class="text-gray-600 text-xs italic">This is your phone number</p> -->
          </div>
          <div class="w-full px-3">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-password"
            >
              Address
            </label>
            <input
              class="
              appearance-none
              block
              text-black
              w-full
              bg-gray-200
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              leading-tight
              focus:outline-none focus:bg-white focus:border-gray-500
            "
              id="grid-password"
              type="text"
              placeholder="1268 Hayhurst Lane"
            />
          </div>
          <div class="w-full h px-3">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-password"
            >
              Reason
            </label>
            <textarea
              class="
              appearance-none
              w-full
              h-48
              bg-gray-200
              text-black
              border border-gray-200
              rounded
              py-3
              px-4
              mb-3
              focus:outline-none focus:bg-white focus:border-gray-500
            "
              id="grid-password"
             cols="30" rows="10"
            >
            </textarea>
          </div>
          <div class="w-full px-3">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-password"
            >
              Select Class
            </label>
            <div class="relative">
              <select
                class="
                block
                appearance-none
                w-full
                bg-gray-200
                border border-gray-200
                text-black
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
                id="grid-state"
              >
                <option>ALL</option>
                <option>IELTS 5</option>
                <option>IELTS 6</option>
                <option>IELTS 7</option>
              </select>
              <div
                class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-black
              "
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
           <div class="w-full px-3 py-4">
            <label
              class="
              block
              uppercase
              tracking-wide
              text-gray-200 text-xs
              font-bold
              mb-2
            "
              for="grid-password"
            >
              Reserve Time
            </label>
            <div class="relative">
              <select
                class="
                block
                appearance-none
                w-full
                bg-gray-200
                border border-gray-200
                text-black
                py-3
                px-4
                pr-8
                rounded
                leading-tight
                focus:outline-none focus:bg-white focus:border-gray-500
              "
                id="grid-state"
              >
                <option>1 Months</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>1 Years</option>
              </select>
              <div
                class="
                pointer-events-none
                absolute
                inset-y-0
                right-0
                flex
                items-center
                px-2
                text-black
              "
              >
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <input type="checkbox" id="accept" name="accept" value="accetp" />
        <label for="accept" class="text-red-500">
          * I have read term and condition about reserve</label
        >

        <div class="md:flex md:items-center pt-6">
          <div>
            <button
              class="
              shadow
              bg-purple-500
              hover:bg-purple-400
              focus:shadow-outline focus:outline-none
              text-white
              font-bold
              py-2
              px-8
              rounded
            "
              type="button"
            >
              Send Request
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
