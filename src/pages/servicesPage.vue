<template>
  <web-nav></web-nav>
  <about-hero hero-header="Services">
    <img src="@/assets/hall.png" alt="hall" style="width: 100%" />
  </about-hero>
  <service-achievement></service-achievement>
  <product-section></product-section>
  <contact-section style="margin-top: 103px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav";
import aboutHero from "@/components/about page/aboutHero";
import serviceAchievement from "@/components/service page/serviceAchievement";
import productSection from "@/components/home page/productSection.vue";
import contactSection from "@/components/home page/contactSection.vue";
import footerSection from "@/components/home page/footerSection.vue";
export default {
  components: {
    webNav,
    aboutHero,
    serviceAchievement,
    productSection,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
