<template>
  <section class="relative container mx-auto px-4 lg:px-5 mt-24 z-10">
    <form @submit.prevent="formValue" class="shadow-card rounded-xl pt-8 pb-6 lg:py-12 px-6 md:px-20 xl:px-36">
      <div class="contact grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- name -->
          <div class="space-y-2">
            <label for="name">Name</label>
            <input id="name" type="text" v-model.trim="formValue.name">
          </div>
          <!-- Organization -->
          <div class="space-y-2">
            <label for="Organization">Organization</label>
            <input id="Organization" type="text" v-model.trim="formValue.organization">
          </div>
          <!-- Email -->
          <div class="space-y-2">
            <label for="Email">Email</label>
            <input id="Email" type="email" placeholder="example@mail.com"
            v-model.trim="formValue.email">
          </div>
           <!-- Phone -->
          <div class="space-y-2">
            <label for="Phone">Phone</label>
            <input id="Phone" type="text" placeholder="+1 (212) 555-1234"
            v-model.trim="formValue.phone">
          </div>
          <!-- Your Role -->
          <div class="space-y-2">
            <label for="Your Role">Your Role</label>
            <div class="relative">
              <select name="" id="" class="appearance-none" placeholder="Choose your role"
              v-model.trim="formValue.yourRole">
                  <option value="1">Your Role</option>
                  <option value="2">Your Role</option>
                  <option value="3">Your Role</option>
              </select>
              <svg class="absolute top-1/2 -translate-y-1/2 right-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6 9L12 15L18 9" stroke="#1D2939" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </div>

            
          </div>
           <!-- Message -->
          <div class="md:col-span-2 lg:col-span-3 space-y-2">
            <label for="Message">Message</label>
            <textarea class="w-full font-medium rounded-xl resize-none border border-brand-gray py-2 px-6"
            v-model.trim="formValue.message"
             name="" id="Message" cols="30" rows="5"></textarea>
          </div>
           <!-- checkbox -->
          <div class="md:col-span-2 lg:col-span-3 flex items-start gap-4">
              <input id="checkbox" type="checkbox" class="w-5 h-5 shrink-0"
              v-model.trim="formValue.checkbox">
              <label for="checkbox">I give my consent to the processing of my personal data in accordance with the legislation on the protection of personal data and accept the Terms of the Privacy policy</label>
          </div>
          <div class="mt-2">
            <button type="submit" class="btn px-14">Send</button>
          </div>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name:'FormValue',
    data(){
      return{
        formValue:{
          name:'',
          organization:'',
          email:'',
          phone:'',
          yourRole:'',
          message:'',
          checkbox:false
        }
      }
    }
  }
</script>

<style scoped>

</style>


  