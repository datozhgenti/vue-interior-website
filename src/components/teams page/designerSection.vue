<template>
  <section class="designer-section">
    <div class="wrapper">
      <div class="designer-section-top">
        <sectionHeader
          header-name="Designer"
          surHeader="Creative Person"
          :grayText="grayText"
          class="gray-text-styling"
        ></sectionHeader>
      </div>
      <div class="designer-section-bottom">
        <person-card
          v-for="img in personImages"
          :key="img"
          :style="{ backgroundImage: `url(${img})` }"
        ></person-card>
        <!-- <div v-for="num in 10" :key="num">{{ num }}</div> -->
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader.vue";
import personCard from "../personCard.vue";
export default {
  components: {
    sectionHeader,
    personCard,
  },
  data() {
    return {
      grayText:
        "Customize your interior design into a dream place with the best designers and quality furniture. We try our best to fulfill your expectations.",
      personImages: [
        require("@/assets/person1.png"),
        require("@/assets/person2.png"),
        require("@/assets/person3.png"),
        require("@/assets/person4.png"),
        require("@/assets/person5.png"),
        require("@/assets/person6.png"),
        require("@/assets/person7.png"),
        require("@/assets/person8.png"),
      ],
    };
  },
};
</script>

<style>
.designer-section {
  margin-top: 100px;
}

.gray-text-styling {
  margin-left: 0;
  margin-top: 24px;
}

.designer-section-bottom {
  margin-top: 79px;
  display: flex;
  gap: 24px 24px;
  flex-wrap: wrap;
}
</style>
