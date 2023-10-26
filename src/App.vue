
<script>
  import HeaderPart from '@/components/Header.vue';
  import HeroSection from '@/components/sections/HeroSection.vue';
  import AboutUs from '@/components/sections/AboutUs.vue';
  import ComingSoon from '@/components/sections/ComingSoon.vue';
  import HowItWork from '@/components/sections/HowItWork.vue';
  import CardList from '@/components/sections/Cards.vue';
  import DwellTeamVue from './components/sections/team/DwellTeam.vue';
  import TestimonialMe from '@/components/sections/Testimonials.vue';
  import JoinOur from '@/components/sections/JoinOur.vue';
  import FormValue from '@/components/sections/FormValue.vue';
  import FooterPart from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    HeroSection,
    HeaderPart,
    AboutUs,
    ComingSoon,
    HowItWork,
    CardList,
    DwellTeamVue,
    TestimonialMe,
    JoinOur,
    FormValue,
    FooterPart,
  },

}
</script>

<template>
  <HeaderPart/>
  <main>
    <HeroSection/>
    <AboutUs/>
    <ComingSoon/>
    <HowItWork/>
    <CardList/>
    <DwellTeamVue/>
    <TestimonialMe />
    <JoinOur />
    <FormValue/>
  </main>
  <FooterPart/>
</template>


