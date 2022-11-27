<template>
  <div class="location-card">
    <h6 class="location-header card-header">{{ headerName }}</h6>
    <p class="gray-text-10">
      Customize your interior design into a dream place with the best designers
      and quality furniture. We try our best to fulfill your expectations.
    </p>
  </div>
</template>

<script>
export default {
  props: ["headerName"],
};
</script>

<style scoped>
.card-header {
  margin-bottom: 30px;
}
</style>
