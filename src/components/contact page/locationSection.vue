<template>
  <section class="location-section">
    <div class="wrapper">
      <div class="location-section-content">
        <div class="location-section-left">
          <section-header
            header-name="Loaction"
            sur-header="Visit Our Stores"
          ></section-header>
          <div class="find-us">
            <p class="gray-text-10">Find us at these locations.</p>
          </div>
          <div class="email-phone">
            <h6 class="location-header">Email</h6>
            <p class="gray-text-10">dananz@gmail.com</p>
          </div>
          <div class="email-phone">
            <h6 class="location-header">Phone</h6>
            <p class="gray-text-10">+62 815 002 1000</p>
          </div>
        </div>
        <div class="location-section-right">
          <locationCard
            v-for="country in countries"
            :key="country"
            :header-name="country"
          ></locationCard>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import sectionHeader from "../sectionHeader.vue";
import locationCard from "@/components/locationCard.vue";
export default {
  components: {
    sectionHeader,
    locationCard,
  },
  data() {
    return {
      countries: ["Jakarta", "Surakarta", "Yogyakarta", "Bandung"],
    };
  },
};
</script>

<style>
.location-section-left {
  width: 601px;
}

.location-section {
  margin-top: 100px;
}

.find-us p {
  margin-top: 24px;
  margin-bottom: 39px;
}

.email-phone p {
  margin-top: 10px;
  margin-bottom: 33px;
}

.location-header {
  font-size: 24px;
  font-weight: 600;
}

.location-section-right {
  display: grid;
  grid-template-columns: repeat(2, 334px);
  margin-top: 34px;
  margin-left: -129px;
  gap: 60px 41px;
}

.location-section-content {
  display: flex;
}
</style>
