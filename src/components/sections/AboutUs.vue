<template>
  <section class="relative">
    <div class="relative container mx-auto px-4 lg:px-5 mt-24 lg:mt-32 xl:mt-52 z-10">
      <div class="grid md:grid-cols-2 lg:items-center gap-6 lg:gap-10 xl:gap-16">
        <div>
          <h3>About Us</h3>
          <h2 class="mt-2">Our mission</h2>
          <p class="mt-4 xl:mt-7">
            Let’s face it. Most Real estate apps provide pretty underwhelming user experince. In most cases, it’s limited to browsing properties and filling out endless forms, only to be connected with an agent. Property owners also face challenges when it comes to vetting tenants and using multiple tools to rent out their properties. <br>
            We're here to change all of that. Dwella uses a state-of-the-art AI technology to help property owners find the best tenants and renters find their ideal home. We provide a seamless end-to-end experience that streamlines the rental process from start to finish.
          </p>
        </div>
        <div class="xl:pr-16">
          <div class="max-w-md aspect-square rounded-xl overflow-hidden mx-auto md:ml-auto">
            <img class="w-full h-full object-cover" src="@/assets/image/mission.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- back BG -->
    <div class="absolute top-0 inset-x-0 z-0">
      <img class="w-full h-full" src="@/assets/image/bg-2.svg" alt="" srcset="">
   </div>
  </section>
</template>

<script>
  export default {
    name:'AboutUs'
  }
</script>
