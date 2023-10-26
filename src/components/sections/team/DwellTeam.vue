<template>
  <section class="container mx-auto px-4 lg:px-5 mt-24 lg:mt-32 xl:mt-52">
    <div>
      <h3>How it Works</h3>
      <h2 class="mt-2">Pre-qualified tenants</h2>
    </div>
    <div class="grid md:grid-cols-2 gap-y-14 gap-x-6 lg:gap-10 xl:gap-16 mt-10 lg:mt-14">
      <div v-for="testimonial in testimonialList" :key="testimonial.id">
        <TeamImage :imageSrc="testimonial.img" />
        <div class="mt-8 xl:mt-10">
          <div class="text-center md:text-start">
            <h4 class="font-bold text-xls capitalize">{{ testimonial.name }}</h4>
             <p class="text-xls text-brand-default/70 uppercase mt-2">{{ testimonial.job }}</p>
          </div>
          <p class="mt-6">
            “ When we created Dwella, our main goal was to offer a solution that would simplify the process of renting and selling real estate. <br class="inline-block md:hidden"> <br>
            We wanted to create a platform where every person - be it a landlord or a tenant - would feel confident and comfortable. <br class="inline-block md:hidden"> <br>
            Dwella is the result of our passion for innovation and pursuit of excellence in real estate ”
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TeamImage from '@/components/sections/team/TeamImage.vue'
export default {
  name:'DwellaTeam',
  components:{
    TeamImage,
  },
  data() {
    return {
      testimonialList:[
        {
          id:1,
          name:'First-Name Last-Name',
          job:'seo',
          img:'',
        },
        {
          id:2,
          name:'First-Name Last-Name',
          job:'seo',
          img:'',
        },
      ]
    };
  },

};
</script>


