<template>
  <section class="portfolio-section">
    <div class="wrapper">
      <section-header header-name="Portfolio"></section-header>
      <portfolio-card
        :imgUrl="portfolio1"
        room-name="Minimalist Room"
        buttonName="See More"
        page-link="/room"
      ></portfolio-card>
      <portfolio-card
        :imgUrl="portfolio2"
        room-name="Vintage Room"
        buttonName="See More"
        :flexOrder="1"
        flexHorizontal="flex-start"
        top-marg="26px"
        left-marg="-129px"
        page-link="/room"
      ></portfolio-card>
      <portfolio-card
        :imgUrl="portfolio3"
        room-name="Modern Room"
        buttonName="See More"
        page-link="/room"
      ></portfolio-card>
      <portfolio-card
        :imgUrl="portfolio4"
        room-name="transitional Room"
        buttonName="See More"
        :flexOrder="1"
        flexHorizontal="flex-start"
        top-marg="26px"
        left-marg="-129px"
        page-link="/room"
      ></portfolio-card>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader.vue";
import portfolioCard from "../portfolioCard.vue";
export default {
  components: {
    sectionHeader,
    portfolioCard,
  },
  data() {
    return {
      portfolio1: require("@/assets/portfolio1.png"),
      portfolio2: require("@/assets/portfolio2.png"),
      portfolio3: require("@/assets/portfolio3.png"),
      portfolio4: require("@/assets/portfolio4.png"),
    };
  },
};
</script>

<style>
.portfolio-section {
  margin-top: 100px;
}
</style>
