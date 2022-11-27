<template>
  <div class="section-header-container">
    <h6>{{ headerName }}</h6>
    <div
      :style="{
        display: flexTrue,
      }"
    >
      <h3>
        {{ surHeader }}
      </h3>
      <div class="right-gray-text" v-bind="$attrs">
        <p class="gray-text-10">{{ grayText }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    headerName: {
      type: String,
      required: true,
    },
    surHeader: {
      type: String,
    },
    flexTrue: {
      type: String,
      default: "block",
    },
    grayText: {
      type: String,
    },
  },
};
</script>

<style>
.section-header-container h6 {
  font-size: 16px;
  font-weight: 500;
  color: var(--grayscale-black);
  margin-bottom: 20px;
  position: relative;
}

.section-header-container h6::after {
  content: "";
  position: absolute;
  top: 49%;
  width: 529px;
  height: 2px;
  background: var(--grayscale-black);
  margin-left: 17px;
}

.section-header-container h3 {
  font-size: 36px;
  font-weight: 600;
  color: var(--grayscale-50);
}

.right-gray-text {
  width: 473px;
  margin-left: 390px;
}
</style>
