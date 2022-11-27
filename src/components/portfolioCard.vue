<template>
  <div class="about-content-container">
    <div class="about-img" :style="{ order: flexOrder }">
      <img :src="imgUrl" alt="kitchen" />
      <author-comp
        class="about-section-author"
        :style="{ top: topMarg, left: leftMarg }"
      ></author-comp>
    </div>
    <div class="about-txt" :style="{ justifyContent: flexHorizontal }">
      <div class="about-txt-wrapper">
        <h6 class="location-header">{{ roomName }}</h6>
        <p class="gray-text-10">
          Online learning with us does not interfere with your daily life.
          because learning can be done anytime and anywhere.
        </p>
        <div class="about-btn">
          <router-link class="btn blue" :to="pageLink">{{
            buttonName
          }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import authorComp from "./authorComp.vue";
export default {
  props: {
    imgUrl: {
      default: require("@/assets/kitchen2.png"),
    },
    roomName: {
      default: "",
    },
    buttonName: {
      default: "Learn More",
    },
    flexOrder: {
      type: Number,
    },
    flexHorizontal: {
      type: String,
    },
    topMarg: {
      type: String,
    },
    leftMarg: {
      type: String,
    },
    pageLink: {
      default: "/about-us",
    },
  },

  components: {
    authorComp,
  },
};
</script>

<style scoped>
.location-header {
  margin-bottom: 20px;
}
</style>
