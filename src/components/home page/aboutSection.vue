<template>
  <div class="wrapper">
    <section class="about-section-container">
      <section-header
        :header-name="headerName"
        :sur-header="surHeader"
      ></section-header>
      <portfolio-card></portfolio-card>
    </section>
  </div>
</template>

<script>
import sectionHeader from "@/components/sectionHeader";
import portfolioCard from "../portfolioCard.vue";
export default {
  components: {
    sectionHeader,
    portfolioCard,
  },
  data() {
    return {
      headerName: "ABOUT",
      surHeader: `“We're one of the best furniture agency. Prioritizing customers and making purchases easy are the hallmarks of our agency.”`,
    };
  },
};
</script>

<style>
.about-section-container,
.service-section {
  margin-top: 160px;
}

.about-content-container {
  margin-top: 60px;
  display: flex;
}

.gray-text-10 {
  color: var(--grayscale-10);
  font-size: 18px;
}

.about-txt {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.about-txt .about-txt-wrapper {
  width: 223px;
  height: 145px;
}

.about-txt .btn {
  margin-top: 40px;
}

.about-img {
  position: relative;
}

.about-section-author {
  top: 27px;
  left: 808px;
}
</style>
