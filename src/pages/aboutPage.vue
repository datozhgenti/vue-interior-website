<template>
  <web-nav></web-nav>
  <about-hero hero-header="About">
    <img src="@/assets/working.png" alt="working" />
  </about-hero>
  <achievment-section></achievment-section>
  <about-service></about-service>
  <contact-section style="margin-top: 100px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav";
import aboutHero from "@/components/about page/aboutHero";
import achievmentSection from "@/components/about page/achievmentSection.vue";
import aboutService from "@/components/about page/aboutService.vue";
import contactSection from "@/components/home page/contactSection.vue";
import footerSection from "@/components/home page/footerSection.vue";
export default {
  components: {
    webNav,
    aboutHero,
    achievmentSection,
    aboutService,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
