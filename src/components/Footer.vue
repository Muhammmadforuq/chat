<template >
    <section class="border-t border-[#DBDBDB] mt-24 lg:mt-32 xl:mt-52">
      <div class="container mx-auto px-4 lg:px-5">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 font-medium gap-6 xl:gap-20 py-8">
          <!-- Product -->
          <div class="footer-link flex flex-col space-y-4">
            <h4 class="text-2xl">Product</h4>
            <a href="#">How it works</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
            <a href="#">Support</a>
          </div>
          <!-- Product -->
          <div class="footer-link flex flex-col space-y-4">
            <h4 class="text-2xl">Solutions</h4>
            <a href="#">For landlords</a>
            <a href="#">For tenants</a>
          </div>
          <!-- Subscribe for Updates -->
          <div class="col-span-2 xl:pr-4">
            <div class="max-w-[356px] w-full flex flex-col space-y-4 md:ml-auto">
              <h4 class="text-2xl">Subscribe for Updates</h4>
              <form class="flex items-stretch">
                <input type="email" class="w-full rounded-l-full border border-brand-gray py-2 px-5 pr-14" placeholder="example@gmail.com">
                <button type="submit" class=" text-white bg-brand-default rounded-r-full py-2 px-6">Subscribe</button>
              </form>
              <div class="flex items-center gap-4 pt-2">
                <a href="#" class="w-13 aspect-square flex items-center justify-center border border-brand-gray hover:border-brand-default transition-colors ease-linear rounded-full">
                  <img src="@/assets/image/twiter.svg" alt="">
                </a>
                <a href="#" class="w-13 aspect-square flex items-center justify-center border border-brand-gray hover:border-brand-default transition-colors ease-linear rounded-full">
                  <img src="@/assets/image/linkedin.svg" alt="">
                </a>
                <a href="#" class="w-13 aspect-square flex items-center justify-center border border-brand-gray hover:border-brand-default transition-colors ease-linear rounded-full">
                  <img src="@/assets/image/facebook.svg" alt="">
                </a>
                <a href="#" class="w-13 aspect-square flex items-center justify-center border border-brand-gray hover:border-brand-default transition-colors ease-linear rounded-full">
                  <img src="@/assets/image/instagram.svg" alt="">
                </a>
              </div>
            </div>
          </div>
          <!-- Coming Soon -->
          <div class="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col space-y-4">
            <h4 class="text-2xl">Coming Soon</h4>
            <div class="flex flex-row lg:flex-col gap-2.5 md:gap-6">
                <!-- Apple -->
                <a href="#" class="flex items-center font-bold border border-brand-gray hover:border-brand-default transition-colors ease-linear rounded-full space-x-3.5 py-2.5 px-5 md:pr-7">
                  <img src="@/assets/image/apple.svg" alt="">
                  <div>
                    <span class="block text-[10px]">Download on the</span>
                    <span class="block text-sm/4">Apple Store</span>
                  </div>
                </a>
                <!-- Apple -->
                <a href="#" class="flex items-center font-bold border border-brand-gray hover:border-brand-default transition-colors ease-linear rounded-full space-x-3.5 py-2.5 px-5 md:pr-7">
                  <img src="@/assets/image/google-market.svg" alt="">
                  <div>
                    <span class="block text-[10px]">Get It On</span>
                    <span class="block text-sm/4">Google Play</span>
                  </div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container mx-auto py-4 lg:py-6 px-4 lg:px-5">
      <div class="flex flex-wrap items-center font-medium text-brand-second gap-y-2 gap-x-4">
        <a href="#" class="underline decoration-transparent hover:decoration-brand-second transition-colors ease-linear lg:pr-2">Dwella (c) All rights reserved.</a>
        <a href="#" class="underline decoration-transparent hover:decoration-brand-second transition-colors ease-linear ">Privacy Policy.</a>
        <a href="#" class="underline decoration-transparent hover:decoration-brand-second transition-colors ease-linear ">Terms of Use.</a>
      </div>
    </div>
    
</template>

<script>
  export default {
    name:'FooterPart'
  }
</script>
