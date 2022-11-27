<template>
  <section class="service-achievment" id="achievment">
    <div class="wrapper">
      <sectionHeader header-name="ACHIEVEMENT"></sectionHeader>
      <achievment-card
        v-for="(card, index) in cards"
        :key="card.img"
        :card-header="card.header"
        :style="{ marginBottom: index === 2 ? '0' : '40px' }"
      >
        <img :src="card.img" :alt="card.header" />
      </achievment-card>
    </div>
  </section>
</template>

<script>
import sectionHeader from "@/components/sectionHeader";
import achievmentCard from "@/components/achievmentCard";
export default {
  components: {
    sectionHeader,
    achievmentCard,
  },

  data() {
    return {
      cards: [
        { img: require("@/assets/hall2.png"), header: "Interior design" },
        { img: require("@/assets/working2.png"), header: "Consultant" },
        {
          img: require("@/assets/working3.png"),
          header: "construction consultant",
        },
      ],
    };
  },
};
</script>

<style>
.service-achievment {
  margin-top: 100px;
}
</style>
