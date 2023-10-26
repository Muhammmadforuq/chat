<template>
  <section class="relative container mx-auto px-4 lg:px-5 mt-24 lg:mt-32 xl:mt-52 z-10">
    <div>
      <h3>Testimonials</h3>
      <h2 class="mt-2">What our clients saying</h2>
    </div>
    <div class="grid md:grid-cols-3 gap-4 xl:gap-7 mt-10">
      <div v-for="testimonial in testimonialList" :key="testimonial.text"
       class="bg-white shadow-card rounded-xl py-6 px-4 xl:p-9">
        <p class="text-base lg:text-xls">{{ testimonial.text }}</p>
        <div v-for="user in testimonial.boxList" :key="user.id" class="flex items-center space-x-2 mt-6">
          <div class="w-10 aspect-square rounded-full">
            <img :src="user.img" alt="">
          </div>
          <div class="text-smm/5">
            <span class="block font-bold">{{ user.name }}</span>
            <span class="block font-medium text-brand-default/70">{{ user.job }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name:'TestimonialMe',
    data() {
    return {
      testimonialList:[
        {
          text:'Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device.',
          boxList:[
          { 
            id:1,
            name:'Jennifer Black',
            job:'seo',
            img:'./assets/tool-02.svg',
        },
          ]
        },
        {
          text:'Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device.',
          boxList:[
          {
            id:2,
            name:'Jennifer Black',
            job:'seo',
            img:'./assets/users-02.svg',
        },
          ]
        },
       
        {
          text:'Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device.',
          boxList:[
          {
            id:3,
            name:'Jennifer Black',
            job:'seo',
            img:'./assets/grid-01.svg',
        },
          ]
        },  
      ]
    };
  },
  }
</script>
<!-- Love the ease and efficiency. Awesome app. Very informative and insightful if wanting to know more about your device.  -->