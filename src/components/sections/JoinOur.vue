<template>
 <section class="relative container mx-auto px-4 lg:px-5 mt-24 lg:mt-32 xl:mt-52 z-10">
   <div class="text-center">
      <h2 class="capitalize">Join our 7k+ commuinity</h2>
      <p class="mt-4">
        Join our mission to build a democratized marketplace where real estate transactions are easy 
        <br class="hidden md:inline-block">
         and efficient giving people the best tools to live, work and play in the built world.
      </p>
      <div class="max-w-sm mx-auto mt-6 lg:mt-10">
        <ButtonConnect />
      </div>
   </div>
  </section>
</template>

<script>
 import ButtonConnect from '@/components/sections/buttons.vue';
  export default {
    name:'JoinOur',
    components:{
      ButtonConnect,
    }   
  }
</script>
