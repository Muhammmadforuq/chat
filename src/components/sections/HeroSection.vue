<template>
  <section class="relative z-10">
    <div class="relative container mx-auto grid md:grid-cols-2 items-center px-4 lg:px-5 mt-10 z-10">
      <div class="text-center md:text-start pt-12 pb-10 md:py-32 lg:py-40 xl:py-52">
        <h1>Real Estate meets AI</h1>
        <p class="mt-4">End-to-end platform for long-term rentals powered by AI.</p>
        <div class="md:max-w-[354px] mt-5 lg:mt-10">
            <ButtonConnect />
        </div>
      </div>
    </div>
    <div class="md:absolute w-[90%] md:w-1/2 h-full -translate-x-5 xl:-translate-x-16 top-0 right-0 mx-auto">
      <img class="w-full h-full object-contain " src="@/assets/image/hero.png" alt="">
    </div>
  </section>
</template>

<script>
 import ButtonConnect from '@/components/sections/buttons.vue';
  export default {
    name:'HeroSection',
    components:{
      ButtonConnect,
    }

  }
</script>
