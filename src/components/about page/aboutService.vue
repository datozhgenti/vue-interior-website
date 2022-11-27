<template>
  <section class="about-service">
    <div class="wrapper">
      <sectionHeader
        :header-name="header"
        :sur-header="subHeader"
      ></sectionHeader>
      <div class="about-service-top">
        <p class="gray-text-10">
          Customize your interior design into a dream place with the best
          designers and quality furniture. We try our best to fulfill your
          expectations.
        </p>
      </div>
      <div class="about-service-bottom">
        <serviceCard
          v-for="cardHeader in cardHeaders"
          :key="cardHeader"
          :card-header="cardHeader"
        ></serviceCard>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader.vue";
import serviceCard from "@/components/serviceCard";
export default {
  components: {
    sectionHeader,
    serviceCard,
  },
  data() {
    return {
      header: "SERVICE",
      subHeader: "Why Choose Us",
      cardHeaders: [
        "High Quality",
        "Professional Designer",
        "The Best Services",
      ],
    };
  },
};
</script>

<style>
.about-service {
  margin-top: 100px;
}

.about-service-top {
  width: 471px;
  margin-top: 25px;
  margin-bottom: 40px;
}

.about-service-bottom {
  display: flex;
  gap: 18px;
}
</style>
