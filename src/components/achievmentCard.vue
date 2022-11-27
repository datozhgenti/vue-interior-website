<template>
  <div class="card">
    <div class="card-content">
      <div class="card-left">
        <slot></slot>
      </div>
      <div class="card-right">
        <div class="text">
          <h3>{{ cardHeader }}</h3>
          <p class="gray-text-10">
            Customize your interior design into a dream place with the best
            designers and quality furniture. We try our best to fulfill your
            expectations.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardHeader"],
};
</script>

<style scoped>
.card-content {
  display: flex;
  gap: 120px;
}

h3 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: 600;
}

.text {
  margin-top: 50%;
  transform: translateY(-50%);
}
</style>
