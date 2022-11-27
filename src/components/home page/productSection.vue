<template>
  <section class="product-section-container">
    <div class="wrapper">
      <div class="product-section-top">
        <sectionHeader
          :headerName="header"
          :sur-header="subHeader"
          :flex-true="'flex'"
          :gray-text="grayText"
        ></sectionHeader>
      </div>
      <div class="product-bottom">
        <service-list
          v-for="(serviceItem, index) in serviceItems"
          :key="index"
          :item-index="'0' + (index + 1)"
          :item-name="serviceItem"
          :marginSize="index === 0 ? '87px' : '80px'"
          :font-num="'32px'"
          :belowText="belowText[index]"
          page-link="/room"
        >
        </service-list>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader.vue";
import serviceList from "../serviceList.vue";
export default {
  components: {
    sectionHeader,
    serviceList,
  },
  data() {
    return {
      header: "PRODUCT",
      subHeader: "Choose your product themes.",
      grayText:
        "Find the theme you want. If our choice of theme is not what you want, you can customize it as you want.",
      serviceItems: ["Vintage", "Minimalist", "Modern", "transitional"],
      belowText: [],
    };
  },
  mounted() {
    for (let i = 0; i < 4; i++) {
      this.belowText.push(
        "the use of simple and limited elements to get the best effect or impression."
      );
    }
  },
};
</script>

<style>
.product-section-container {
  margin-top: 170px;
}

.product-section-top {
  display: flex;
}

.product-gray-text {
  width: 473px;
}

.product-bottom {
  margin-top: 72px;
}

.product-bottom .item-index,
.product-bottom .arrow {
  align-self: flex-start;
}

.product-bottom .arrow {
  margin-top: 8px;
}
</style>
