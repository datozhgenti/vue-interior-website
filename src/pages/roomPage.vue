<template>
  <web-nav></web-nav>
  <about-hero hero-header="Minimalist Room">
    <img src="@/assets/hall3.png" alt="hall 3" />
  </about-hero>
  <main-section></main-section>
  <contact-section style="margin-top: 100px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav.vue";
import aboutHero from "@/components/about page/aboutHero.vue";
import mainSection from "@/components/room page/mainSection.vue";
import contactSection from "@/components/home page/contactSection.vue";
import footerSection from "@/components/home page/footerSection.vue";
export default {
  components: {
    webNav,
    aboutHero,
    mainSection,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
