<template>
  <header class="relative">
    <nav class="relative container mx-auto flex justify-start items-center gap-6 p-4 lg:px-5 z-10">
      <!-- logo -->
      <div>
        <a href="#">
          <img src="@/assets/image/logo.svg" class="" alt="">
        </a>
        <span class="hidden lg:inline-block text-xs text-brand-default/70 bg-[#474747]/10 rounded-full py-0.5 px-2 mt-2">beta</span>
      </div>
      <div class="header-link hidden lg:flex items-center font-medium space-x-5">
        <a v-for="link in navLisks" :key="link.title" href="#">{{link.title}}</a>
      </div>

      <a href="#" class="btn hidden lg:flex items-center space-x-2 ml-auto">
        <span>Join Waitlist</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>

      <!-- menu btn -->
      <button @click="toggleMenu" type="button" class="lg:hidden ml-auto">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8.5H21M3 15.5H21" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </nav>
    <!-- mobile menu -->
    <div :class="mobileMenu ? '' : '-translate-x-full'" 
    class="fixed inset-0 h-screen bg-white transition-all ease-linear z-20">
      <div class="container mx-auto p-4">
        <div class="flex items-center justify-between">
         <!-- logo -->
          <a href="#">
              <img src="@/assets/image/logo.svg" class="" alt="">
            </a>
          <!-- x btn -->
          <button @click="toggleMenu" type="button" class="lg:hidden ml-auto">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          </button>
        </div>
        <div class=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-3">
          <a href="#">How it works</a>
          <a href="#">About Us</a>
          <a href="#">For Landlords</a>
          <a href="#">For Tenants</a>
          <a href="#">Contact Us</a>
          <a href="#" class="btn flex items-center space-x-2 ml-auto">
            <span>Join Waitlist</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <!-- back BG -->
    <div class="absolute top-0 inset-x-0 z-0">
      <img class="w-full h-full" src="@/assets/image/back.svg" alt="" srcset="">
   </div>
  </header>
</template>

<script>
  
  export default {
    name:'HeaderPart',
    data(){
      return{
        navLisks:[
          { 
            link:'',
            title:'How it works',
          },
          { 
            link:'',
            title:'About Us',
          },
          { 
            link:'',
            title:'For Landlords',
          },
          { 
            link:'',
            title:'For Tenants',
          },
          { 
            link:'',
            title:'Contact Us',
          },

        ],
       mobileMenu:false,
      }
    },
    methods:{
      toggleMenu(){
        this.mobileMenu = !this.mobileMenu;
        document.body.classList.toggle('overflow-hidden')

      }
    }
  }
</script>
