<template>
  <web-nav></web-nav>
  <about-hero hero-header="Portofolio">
    <img src="@/assets/office.png" alt="office room" />
  </about-hero>
  <portfolio-section></portfolio-section>
  <about-service></about-service>
  <contact-section style="margin-top: 100px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav.vue";
import aboutHero from "@/components/about page/aboutHero.vue";
import portfolioSection from "@/components/porfolio page/portfolioSection.vue";
import aboutService from "@/components/about page/aboutService.vue";
import contactSection from "@/components/home page/contactSection.vue";
import footerSection from "@/components/home page/footerSection.vue";
export default {
  components: {
    webNav,
    aboutHero,
    portfolioSection,
    aboutService,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
