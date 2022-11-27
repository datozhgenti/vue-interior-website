<template>
  <web-nav></web-nav>
  <about-hero hero-header="Our Teams">
    <img src="@/assets/hands.png" alt="hands" />
  </about-hero>
  <designer-section></designer-section>
  <about-service></about-service>
  <contact-section style="margin-top: 100px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav";
import aboutHero from "@/components/about page/aboutHero.vue";
import designerSection from "@/components/teams page/designerSection";
import aboutService from "@/components/about page/aboutService.vue";
import contactSection from "@/components/home page/contactSection.vue";
import footerSection from "@/components/home page/footerSection.vue";
export default {
  components: {
    webNav,
    aboutHero,
    designerSection,
    aboutService,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
