<template>
  <section class="relative container mx-auto px-4 lg:px-5 mt-24 z-10">
    <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-center gap-4">
      <div v-for="list in cardList" :key="list.id" class="shadow-card card bg-white overflow-hidden rounded-xl pt-4 pb-8 lg:pb-11 px-1.5">
          <button class="block ml-auto pr-2.5">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13M12 17H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#4A5461" stroke-opacity="0.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
          </button>
          <img class="mx-auto" :src="list.url">
          <h4 class="capitalize mt-4">{{ list.title }}</h4>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name:'CardList',
    data(){
      return{
        cardList:[
      {
        id:1,
        url:'./assets/users-02.svg',
        title:'Tentant pre-qualification'
      },
      {
        id:2,
        url:'./assets/file-lock-02.svg',
        title:'Background check'
      },

      {
        id:3,
        url:'./assets/grid-01.svg',
        title:'Comprehensive dashboard'
      },
   
      {
        id:4,
        url:'./assets/ai-generate.svg',
        title:'AI-powered automation'
      },
      {
        id:5,
        url:'./assets/file-check-02.svg',
        title:'Sign & Manage Lease'
      },
      {
        id:6,
        url:'./assets/shield-01.svg',
        title:'Renters Insurance'
      },
      {
        id:7,
        url:'./assets/credit-card-check.svg',
        title:'Automated Payments'
      },
      {
        id:8,
        url:'./assets/tool-02.svg',
        title:'Maintenance'
        },
    ]
      }
    }
  }
</script>
