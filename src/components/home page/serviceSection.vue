<template>
  <section class="service-section">
    <div class="wrapper">
      <div class="service-top">
        <section-header
          :header-name="header"
          :sur-header="subHeader"
        ></section-header>
        <div class="gray-text-container">
          <p class="gray-text-10">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
      </div>
      <div class="service-bottom">
        <div class="service-img">
          <img src="@/assets/hall.png" alt="hall" />
        </div>
        <div class="service-list-container">
          <service-list
            v-for="(serviceItem, index) in serviceItems"
            :key="index"
            :item-index="'0' + (index + 1)"
            :item-name="serviceItem"
            :marginSize="index === 0 ? '40px' : '35px'"
            page-link="/services#achievment"
          ></service-list>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader";
import serviceList from "@/components/serviceList";
export default {
  components: {
    sectionHeader,
    serviceList,
  },
  data() {
    return {
      header: "SERVICE",
      subHeader: "attractive furniture with the best quality.",
      serviceItems: [
        "Interior Design",
        "Consultant",
        "Construction Consultant",
      ],
    };
  },
};
</script>

<style>
.gray-text-container {
  width: 471px;
  margin-top: 24px;
}

.service-bottom {
  padding-left: 124px;
  margin-top: 88px;
  position: relative;
}

.service-list-container {
  background: var(--grayscale-white);
  position: absolute;
  right: 317px;
  bottom: 362px;
  width: 883px;
  padding: 40px;
  padding-left: 0;
}
</style>
