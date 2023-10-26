<template>
  <section class="relative container mx-auto px-4 lg:px-5 mt-24 lg:mt-32 xl:mt-52 z-10">
    <div class="flex justify-center items-center font-semibold text-xl space-x-11">
      <button class="text-brand-default/60 border-b-2 border-transparent pb-2" @click="setActiveTabe('tab1')"
        :class="{'text-brand-default border-brand-default': howItWork === 'tab1' }">
        landlords
      </button>
      <button class="text-brand-default/60 border-b-2 border-transparent pb-2" @click="setActiveTabe('tab2')"
        :class="{'text-brand-default border-brand-default': howItWork === 'tab2' }">
          tenants
      </button>
      <!-- Add more tabs as needed -->
    </div>
    <div v-if="howItWork === 'tab1'">
      <div class="grid md:grid-cols-2 lg:items-center gap-6 lg:gap-10 xl:gap-16 mt-10 lg:mt-24">
          <div class="text-center md:text-start">
            <h3>How it Works</h3>
            <h2 class="mt-2">Pre-qualified tenants</h2>
            <p class="mt-4 xl:mt-6">
              We qualify your tenants and run background <br> checks, so you don’t have to.
            </p>
            <div class="flex justify-center md:justify-start items-center gap-4 lg:gap-6 mt-5 lg:mt-10">
              <button class="btn w-full md:w-auto text-sm md:text-base">Schedule a Demo</button>
              <button class="btn w-full md:w-auto text-sm md:text-base">List your property</button>
            </div>
          </div>
          <div class="xl:pr-16">
            <div class="w-3/5 md:max-w-md lg:h-[614px] rounded-xl overflow-hidden mx-auto md:mx-0 md:ml-auto">
              <img class="w-full h-full object-contain " src="@/assets/image/iphone.png" alt="">
            </div>
          </div>
        </div>        
    </div>
    <div v-if="howItWork === 'tab2'">
      <div class="grid md:grid-cols-2 lg:items-center gap-6 lg:gap-10 xl:gap-16 mt-10 lg:mt-24">
          <div class="text-center md:text-start">
            <h3>How it Works</h3>
            <h2 class="mt-2">Pre-qualified tenants</h2>
            <p class="mt-4 xl:mt-6">
              We qualify your tenants and run background <br> checks, so you don’t have to.
            </p>
            <div class="flex justify-center md:justify-start items-center gap-4 lg:gap-6 mt-5 lg:mt-10">
              <button class="btn w-full md:w-auto text-sm md:text-base">Schedule a Demo</button>
              <button class="btn w-full md:w-auto text-sm md:text-base">List your property</button>
            </div>
          </div>
          <div class="xl:pr-16">
            <div class="w-3/5 md:max-w-md lg:h-[614px] rounded-xl overflow-hidden mx-auto md:mx-0 md:ml-auto">
              <img class="w-full h-full object-contain " src="@/assets/image/iphone-2.png" alt="">
            </div>
          </div>
        </div>
    </div>
    <div class="xl:max-w-md w-full flex items-center justify-center gap-2.5 mt-10 lg:mt-14 xl:pl-5 ml-auto">
      <span :class="{'bg-brand-default' : HowItWork === 'tab1'}" class="w-20 h-0.5 bg-brand-default/10"></span>
      <span :class="{'bg-brand-default' : HowItWork === 'tab2'}" class="w-20 h-0.5 bg-brand-default/10"></span>
    </div> 
  </section>
</template>

<script>
  export default {
    name:'HowItWork',
    data() {
    return {
      howItWork: 'tab1',
    };
  },

  methods:{
    setActiveTabe(tab){
      this.howItWork = tab
    }
  }
  }
</script>
