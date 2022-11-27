<template>
  <web-nav></web-nav>
  <about-hero hero-header="Contact Us">
    <form-comp></form-comp>
  </about-hero>
  <location-section></location-section>
  <contact-section style="margin-top: 101px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav";
import aboutHero from "@/components/about page/aboutHero.vue";
import formComp from "@/components/formComp.vue";
import locationSection from "@/components/contact page/locationSection.vue";
import contactSection from "@/components/home page/contactSection.vue";
import footerSection from "@/components/home page/footerSection.vue";
export default {
  components: {
    webNav,
    aboutHero,
    formComp,
    locationSection,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
