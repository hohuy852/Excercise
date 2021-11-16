<template>
  <div class="container mt-20 mb-10">
    <h3 class="text-h3 font-bold text-center">Checkout</h3>
    <div class="grid grid-cols-2 mt-10">
      <div class="flex flex-col gap-y-5">
          <h4 class="text-h4 font-bold text-center">
              Choose payment method
          </h4>
        <div
          class="flex gap-x-4 border-2 rounded-lg px-3 py-4 hover:bg-blue-700"
        >
          <div class="flex items-center gap-x-3">
            <input type="radio" name="" id="" width="50" height="50" />
            <img src="@/assets/momo.png" width="50" height="30" alt="" />
          </div>
          <div class="flex flex-col">
            <div>Thanh toán qua MoMo</div>
            <div>Nhận mã ngay khi thanh toán thành công.</div>
          </div>
        </div>
        <div
          class="flex gap-x-4 border-2 rounded-lg px-3 py-4 hover:bg-blue-700"
        >
          <div class="flex items-center gap-x-3">
            <input type="radio" name="" id="" />
            <img src="@/assets/zalo.png" width="70" height="30" alt="" />
          </div>
          <div class="flex flex-col">
            <div>Thanh toán qua ZALO PAY</div>
            <div>Nhận mã ngay khi thanh toán thành công.</div>
          </div>
        </div>
        <div
          class="flex gap-x-4 border-2 rounded-lg px-3 py-4 hover:bg-blue-700"
        >
          <div class="flex items-center gap-x-3">
            <input type="radio" name="" id="" />
            <img src="@/assets/vnpay.png" width="50" height="30" alt="" />
          </div>
          <div class="flex flex-col">
            <div>Thanh toán qua VNPAY</div>
            <div>Nhận mã ngay khi thanh toán thành công.</div>
          </div>
        </div>
        <button class="py-5 px-5 bg-blue-500 w-1/2 font-semibold mx-auto rounded-xl hover:bg-white hover:text-black">Check out</button>
      </div>
      <div class="flex flex-col px-20 gap-y-5">
           <h4 class="text-h4 font-bold text-center">
               Details
          </h4>
        <div class="border-2 rounded-xl">
          <div class="px-4 py-4 flex flex-col gap-y-2">
            <h6 class="tex-h6">Thông tin khách hàng</h6>
            <hr />
            <div class="flex">
              <div>Name :</div>
              <div class="ml-auto">NhatTan</div>
            </div>
            <div class="flex">
              <div>Phonenumber :</div>
              <div class="ml-auto">0123456789</div>
            </div>
            <div class="flex">
              <div>Email :</div>
              <div class="ml-auto">example@example.com</div>
            </div>
          </div>
        </div>
        <div class="border-2 rounded-xl">
          <div class="px-4 py-4 flex flex-col gap-y-2">
            <h6 class="tex-h6">Thông tin đơn hàng</h6>
            <hr />
            <div class="flex">
              <div>Course Name :</div>
              <div class="ml-auto">TOEIC 500</div>
            </div>
            <div class="flex">
              <div>Discount :</div>
              <div class="ml-auto">30%</div>
            </div>
            <div class="flex">
              <div>Tax :</div>
              <div class="ml-auto">0 VND</div>
            </div>
            <div class="flex">
              <input
                type="text"
                placeholder="Disocount code"
                class="rounded-lg px-4 py-2"
              />
              <button class="py-1 px-4 bg-blue-400 ml-auto rounded-lg">
                Apply
              </button>
            </div>
            <hr />
            <div class="flex">
              <div>Total :</div>
              <div class="ml-auto text-red-500 font-semibold">999$</div>
            </div>
          </div>
        </div>
        <div class="border-2 rounded-xl">
          <div class="px-4 py-4 flex flex-col gap-y-2">
            <h6 class="tex-h6">Thông tin xuất hóa đơn</h6>
            <hr />
            <form action="" class="flex flex-col gap-y-3">
              <label for="">Tax code</label>
              <input
                class="py-2 px-5 rounded-lg"
                placeholder="Tax code"
                type="text"
              />
              <label for="">Fullname</label>
              <input
                class="py-2 px-5 rounded-lg"
                placeholder="Fullname"
                type="text"
              />
              <label for="">Address</label>
              <input
                class="py-2 px-5 rounded-lg"
                placeholder="Address"
                type="text"
              />
              <label for="">Email</label>
              <input
                class="py-2 px-5 rounded-lg"
                placeholder="Email"
                type="text"
              />
            </form>
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
input[radio] {
  height: 50px;
  width: 50px;
  vertical-align: middle;
}
</style>