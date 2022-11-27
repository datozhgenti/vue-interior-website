<template>
  <section class="achievment-section">
    <div class="wrapper">
      <section-header
        :header-name="header"
        :sur-header="subHeader"
      ></section-header>
      <div class="achievment-content">
        <div class="achievment-left">
          <img src="@/assets/sea-view.png" alt="sea view" />
        </div>
        <div class="achievment-right">
          <statistics-comp></statistics-comp>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader.vue";
import statisticsComp from "../statisticsComp.vue";
export default {
  components: {
    sectionHeader,
    statisticsComp,
  },
  data() {
    return {
      header: "ACHIEVEMENT",
      subHeader:
        "interior customization with Danaanz, best quality with professional workers",
    };
  },
};
</script>

<style>
.achievment-section {
  margin-top: 100px;
}

.achievment-content {
  display: flex;
  gap: 59px;
  margin-top: 56px;
}
</style>
