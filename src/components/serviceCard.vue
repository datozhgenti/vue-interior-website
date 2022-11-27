<template>
  <div class="card">
    <div class="icon">
      <div class="circle"></div>
    </div>
    <div class="header">
      <h6>{{ cardHeader }}</h6>
    </div>
    <div class="text">
      <p class="gray-text-10" style="margin-bottom: 0">
        Customize your interior design into a dream place with the best
        designers and quality furniture. We try our best to fulfill your
        expectations.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardHeader"],
};
</script>

<style scoped>
.card {
  width: 388px;
  padding: 20px 27px;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.circle {
  width: 63px;
  height: 64px;
  border-radius: 50%;
  background: var(--grayscale-lightGray);
  margin: 0 auto;
}

.card * {
  margin-bottom: 20px;
}

.text {
  margin-bottom: 0;
}

.header h6 {
  font-size: 24px;
  font-weight: 600;
}
</style>
