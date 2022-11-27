<template>
  <web-nav></web-nav>
  <hero-section></hero-section>
  <about-section></about-section>
  <service-section></service-section>
  <product-section></product-section>
  <material-section></material-section>
  <contact-section style="margin-top: 120px"></contact-section>
  <footer-section></footer-section>
</template>

<script>
import webNav from "@/components/webNav";
import heroSection from "@/components/home page/heroSection";
import aboutSection from "@/components/home page/aboutSection";
import serviceSection from "@/components/home page/serviceSection";
import productSection from "@/components/home page/productSection";
import materialSection from "@/components/home page/materialSection";
import contactSection from "@/components/home page/contactSection";
import footerSection from "@/components/home page/footerSection";
export default {
  components: {
    webNav,
    heroSection,
    aboutSection,
    serviceSection,
    productSection,
    materialSection,
    contactSection,
    footerSection,
  },
};
</script>

<style></style>
