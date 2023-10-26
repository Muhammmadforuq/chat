<template>
  <section class="relative container mx-auto px-4 lg:px-5 mt-24 lg:mt-32 xl:mt-52 z-10">
    <div class="flex justify-center items-center font-semibold text-xl space-x-11">
      <button class="text-brand-default/60 border-b-2 border-transparent pb-2"
        @click="missionTab = 'landlords'" 
      v-bind:class="{'text-brand-default border-brand-default ': missionTab === 'landlords'}">
      landlords
      </button>
      <button class="text-brand-default/60 border-b-2 border-transparent pb-2"
        @click="missionTab = 'tenants'"
        v-bind:class="{'text-brand-default border-brand-default ': missionTab === 'tenants'}">
      tenants
      </button>
    </div>

    <div v-if="missionTab === 'landlords'">
      <div class="grid md:grid-cols-2 lg:items-center gap-6 lg:gap-10 xl:gap-16 mt-10 lg:mt-24">
        <div>
          <h3>Coming Soon</h3>
          <h2 class="mt-2">Meet innovation AI at Dwella</h2>
          <p class="mt-4 xl:mt-6">
            At Dwella we have a cool new product planned. We will soon add a smart assistant that will help you find or evaluate an apartment faster and easier.  <br>
            He will suggest what is best to choose based on your preferences. You wll see soon.
          </p>
        </div>
        <div class="xl:pr-16">
          <div class="w-[95%] md:max-w-md lg:h-[581px] rounded-xl shadow-card md:shadow-none overflow-hidden mx-auto md:ml-auto">
            <img class="w-full h-full object-cover" src="@/assets/image/view-chat.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div v-if="missionTab === 'tenants'">
      <div class="grid md:grid-cols-2 lg:items-center gap-6 lg:gap-10 xl:gap-16 mt-10 lg:mt-24">
        <div>
          <h3>Coming Soon</h3>
          <h2 class="mt-2">Meet innovation AI at Dwella</h2>
          <p class="mt-4 xl:mt-6">
            At Dwella we have a cool new product planned. We will soon add a smart assistant that will help you find or evaluate an apartment faster and easier.  <br>
            He will suggest what is best to choose based on your preferences. You wll see soon.
          </p>
        </div>
        <div class="xl:pr-16">
          <div class="w-[95%] md:max-w-md lg:h-[581px] rounded-xl shadow-card md:shadow-none overflow-hidden mx-auto md:ml-auto">
            <img class="w-full h-full object-cover" src="@/assets/image/view-chat-2.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </section> 
</template>

<script>
  export default {
    name:'ComingSoon',
    data() {
    return {
      missionTab: 'landlords',
      activeTab: 'tab1',
    };
  },
  }
</script>


