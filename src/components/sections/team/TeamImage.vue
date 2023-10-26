<template>
    <div class="relative">
      <div v-if="!hasImage" class="w-64 xl:w-72 aspect-square mx-auto bg-[#EEEEEE] rounded-full">
      </div>
      <img v-if="hasImage" :src="imageSrc" alt="Your Image" class="w-20 h-20 rounded-full" />
    </div>
</template>

<script>
export default {
  name:'TeamImage',
  data() {
    return {
      imageSrc: '',
    };
  },
  computed: {
    hasImage() {
      return !!this.imageSrc;
    },
  },
};
</script>

<style scoped>
/* Add Tailwind CSS classes here */
</style>
